using Dapper;
using Master.Infra.Entity.Database;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Repository
{
    public interface IDapperUserRepository
    {
        User GetUserByEmail(NpgsqlConnection db, string email);
        List<User> GetUsers(NpgsqlConnection db, string search);
        User GetUser(NpgsqlConnection db, long? id);
        void InsertUser(NpgsqlConnection db, User usr);
        void UpdateUser(NpgsqlConnection db, User usr);
        User GetUserBySocial(NpgsqlConnection db, string sID);
    }

    public class DapperUserRepository : IDapperUserRepository
    {
        public void InsertUser(NpgsqlConnection db, User usr)
        {
            using (var cmd = new NpgsqlCommand("INSERT INTO \"User\"(\"stEmail\",\"stName\",\"bActive\",\"bAdmin\",\"bTokenized\",\"stSocialID\",\"stPassword\",\"dtLastLogin\",\"dtCreation\",\"stToken\",\"dtTokenExpires\") " +
                "VALUES(@stEmail,@stName,@bActive,@bAdmin,@bTokenized,@stSocialID,@stPassword,@dtLastLogin,@dtCreation,@stToken,@dtTokenExpires);", db))
            {
                cmd.Parameters.AddWithValue("stEmail", ((object)usr.stEmail) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stName", ((object)usr.stName) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("bActive", ((object)usr.bActive) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("bAdmin", ((object)usr.bAdmin) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("bTokenized", ((object)usr.bTokenized) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stSocialID", ((object)usr.stSocialID) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stPassword", ((object)usr.stPassword) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("dtLastLogin", ((object)usr.dtLastLogin) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("dtCreation", ((object)usr.dtCreation) ?? DBNull.Value); 
                cmd.Parameters.AddWithValue("stToken", ((object)usr.stToken) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("dtTokenExpires", ((object)usr.dtTokenExpires) ?? DBNull.Value);

                cmd.ExecuteNonQuery();
            }
        }

        public void UpdateUser(NpgsqlConnection db, User usr)
        {
            using (var cmd = new NpgsqlCommand("update \"User\" " +
                "set \"stEmail\" = @stEmail, " +
                "\"stName\" = @stName, " +
                "\"bActive\" = @bActive, " +
                "\"bAdmin\" = @bAdmin, " +
                "\"bTokenized\" = @bTokenized, " +
                "\"stSocialID\" = @stSocialID, " +
                "\"stPassword\" = @stPassword, " +
                "\"dtLastLogin\" = @dtLastLogin, " +
                "\"dtCreation\" = @dtCreation, " +
                "\"dtTokenExpires\" = @dtTokenExpires, " +
                "\"stToken\" = @stToken " +
                "where id=@id", db))
            {
                cmd.Parameters.AddWithValue("stEmail", ((object)usr.stEmail) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stName", ((object)usr.stName) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("bActive", ((object)usr.bActive) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("bAdmin", ((object)usr.bAdmin) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("bTokenized", ((object)usr.bTokenized) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stSocialID", ((object)usr.stSocialID) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stPassword", ((object)usr.stPassword) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("dtLastLogin", ((object)usr.dtLastLogin) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("dtCreation", ((object)usr.dtCreation) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("dtTokenExpires", ((object)usr.dtTokenExpires) ?? DBNull.Value);
                cmd.Parameters.AddWithValue("stToken", ((object)usr.stToken) ?? DBNull.Value);

                cmd.Parameters.AddWithValue("id", usr.id);

                cmd.ExecuteNonQuery();
            }
        }

        public User GetUserByEmail(NpgsqlConnection db, string email)
        {
            return db.Query<User>("select * from \"User\"").
                    Where(y => y.stEmail == email).
                    FirstOrDefault();
        }

        public User GetUserBySocial(NpgsqlConnection db, string sID)
        {
            return db.Query<User>("select * from \"User\"").
                    Where(y => y.stSocialID == sID).
                    FirstOrDefault();
        }

        public List<User> GetUsers(NpgsqlConnection db, string search)
        {
            if (search == null)
                return db.Query<User>("select * from \"User\" order by \"stLogin\"").ToList();
            else
                return db.Query<User>("select * from \"User\" order by \"stLogin\"").Where(y => y.stName.Contains(search)).ToList();
        }

        public User GetUser(NpgsqlConnection db, long? id)
        {
            return db.Query<User>("select * from \"User\"").
                    Where(y => y.id == id).
                    FirstOrDefault();
        }
    }
}
