
namespace Master
{
    public class LocalNetwork
    {
        public const string Secret = "ciOiJIUzI1NiIsInR5cCI6IeyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NTc5Mjk4ODcsImV4cCI6MTU1fhdsjhfeuyrejhdfj73333";

        public string sqlServer { get; set; }

        public string sqlServerProd { get; set; }

        public string databasePopulation { get; set; }

        public string GetSqlServer ()
        {
#if DEBUG
            return sqlServer;
#endif


#if RELEASE
            return sqlServerProd;
#endif
        }
    }
}
