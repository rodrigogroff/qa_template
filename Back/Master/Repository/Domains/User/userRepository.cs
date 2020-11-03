using Dapper;
using Master.Infra.Entity.Database;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Master.Repository
{
    public interface IDapperUserRepository
    {
        User GetUserByEmail(SqlConnection db, string email);
        List<User> GetUsers(SqlConnection db, string search);
        User GetUser(SqlConnection db, long? id);
        void InsertUser(SqlConnection db, User usr);
        void UpdateUser(SqlConnection db, User usr);
    }

    public class DapperUserRepository : IDapperUserRepository
    {
        public void InsertUser(SqlConnection db, User usr)
        {
            db.Execute(@"insert into [User] (stEmail,stLogin,stSenha,dtLastLogin) 
                        values (@stEmail,@stLogin,@bActive,@stSenha,@dtLastLogin)", 
                        new { 
                            usr.stEmail, 
                            usr.stLogin, 
                            usr.stPassword, 
                            usr.dtLastLogin,
                        });
        }

        public void UpdateUser(SqlConnection db, User usr)
        {
            db.Execute(@"update [User]
                        set stEmail = @stEmail, 
                            stLogin = @stLogin, 
                            stPassword = @stPassword,
                            dtLastLogin = @dtLastLogin                     
                        where id= @id ",
                new {
                    usr.id,
                    usr.stEmail,
                    usr.stLogin,
                    usr.stPassword,
                    usr.dtLastLogin,
                });
        }

        public User GetUserByEmail(SqlConnection db, string email)
        {
            return db.Query<User>(@"select * from [User] (nolock) 
                                        where   stEmail = @email ", 
                                        new { email }).FirstOrDefault();
        }

        public List<User> GetUsers(SqlConnection db, string search)
        {
            if (search == null)
                return db.Query<User>(@"select * from [User] (nolock) order by stLogin").ToList();
            else
                return db.Query<User>(@"select * from [User] (nolock) where stLogin like @search order by stLogin", new { search }).ToList();
        }

        public User GetUser(SqlConnection db, long? id)
        {
            return db.Query<User>(@"select * from [User] (nolock) where id = @id", new { id }).FirstOrDefault();
        }
    }
}
