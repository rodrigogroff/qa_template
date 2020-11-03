using Api.Master.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Integration
{
    [TestClass]
    public class Authenticate
    {
        public string baseDb = @"

SET IDENTITY_INSERT [dbo].[User] ON 
GO
INSERT [dbo].[User] ([id], [stEmail], [stLogin], [stPassword], [dtLastLogin] ) VALUES (1, N'rodrigo.groff@vortigo.com.br', N'rodrigo', N'rodrigo', CAST(N'2020-09-11T22:58:27.330' AS DateTime))
GO
INSERT [dbo].[User] ([id], [stEmail], [stLogin], [stPassword], [dtLastLogin] ) VALUES (15, N'marco.ferreira@vortigo.com.br', N'Marco', N'102030', CAST(N'2020-05-06T12:22:19.547' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[User] OFF
GO
";

        [TestMethod]
        public void AuthenticaUsuarioNaoExistente()
        {
            var tst = new Authenticate_v1(null)
            {
                network = new Master.LocalNetwork
                {
                    databasePopulation = baseDb
                }
            };

            ActionResult ret = tst.AuthenticateAssociado(new Entities.Api.Login.LoginInformation
            {
                email = "teste",
                password = "senha"
            });

            if (!ret.ToString().Contains("BadRequest"))
                Assert.Fail();            
        }

        [TestMethod]
        public void AuthenticaUsuarioExistente()
        {
            var tst = new Authenticate_v1(null)
            {
                network = new Master.LocalNetwork
                {
                    databasePopulation = baseDb
                }
            };

            ActionResult ret = tst.AuthenticateAssociado(new Entities.Api.Login.LoginInformation
            {
                email = "rodrigo.groff@vortigo.com.br",
                password = "rodrigo"
            });

            if (ret.ToString().Contains("BadRequest"))
                Assert.Fail();            
        }
    }
}
