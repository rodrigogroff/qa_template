using Entities.Api.Configuration;
using Entities.Api.Login;
using Master;
using Master.Infra.Entity.Database;
using Master.Repository;
using Master.Service;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace UnitTesting
{
    public class Fake_DapperUserRepository : IDapperUserRepository
    {
        #region - code - 

        User IDapperUserRepository.GetUser(SqlConnection db, long? id)
        {
            if (id == 1)
                return new Authenticate().Base_Ut_user;

            return null;
        }
        
        User IDapperUserRepository.GetUserByEmail(SqlConnection db, string email)
        {
            if (email == "test@gmail.com")
                return new Authenticate().Base_Ut_user;

            return null;
        }

        List<User> IDapperUserRepository.GetUsers(SqlConnection db, string search)
        {
            return new List<User>
            {
                new User
                {

                }
            };
        }

        void IDapperUserRepository.InsertUser(SqlConnection db, User usr)
        {
            
        }

        void IDapperUserRepository.UpdateUser(SqlConnection db, User usr)
        {
            
        }

        #endregion
    }

    [TestClass]
    public class Authenticate
    {
        public User Base_Ut_user = new User
            {
                id = 1,
                stEmail = "test@gmail.com",
                stLogin = "test",
                dtLastLogin = DateTime.Now,
                stPassword = "password"
            };

        [TestMethod]
        public void AuthenticaUsuario_OK()
        {
            #region - code - 

            var network = new LocalNetwork();            
            var auth = new AuthenticatedUser();
            var repo = new Fake_DapperUserRepository();

            var tu_obj = new LoginInformation
            {
                email = Base_Ut_user.stEmail,
                password = Base_Ut_user.stPassword
            };

            var srv = new AuthenticateV1(repo);

            if (!srv.Exec(network, tu_obj, ref auth))
                Assert.Fail();

            if (auth.login != Base_Ut_user.stLogin) Assert.Fail();
            if (auth.email != Base_Ut_user.stEmail) Assert.Fail();

            #endregion
        }

        [TestMethod]
        public void AuthenticaUsuario_PassNOK()
        {
            #region - code - 

            var network = new LocalNetwork();
            var auth = new AuthenticatedUser();
            var repo = new Fake_DapperUserRepository();

            var tu_obj = new LoginInformation
            {
                email = Base_Ut_user.stEmail,
                password = Base_Ut_user.stPassword + "...."
            };

            var srv = new AuthenticateV1(repo);

            if (srv.Exec(network, tu_obj, ref auth))
                Assert.Fail();

            #endregion
        }

        [TestMethod]
        public void AuthenticaUsuario_EmailNOK()
        {
            #region - code - 

            var network = new LocalNetwork();
            var auth = new AuthenticatedUser();
            var repo = new Fake_DapperUserRepository();

            var tu_obj = new LoginInformation
            {
                email = Base_Ut_user.stEmail + "....",
                password = Base_Ut_user.stPassword
            };

            var srv = new AuthenticateV1(repo);

            if (srv.Exec(network, tu_obj, ref auth))
                Assert.Fail();

            #endregion
        }
    }
}
