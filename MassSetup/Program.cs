using System;
using System.Threading;
using Newtonsoft.Json.Linq;
using RestSharp;

namespace LoadTest
{
    class Program
    {
        static void Main(string[] args)
        {
            PopulateUsers();
        }

        static void PopulateUsers()
        {
            long number = 1, top = 8;
            var threads = new Thread[top];
            var random = new Random();

            for (int i = 0; i < top; i++)
            {
                threads[i] =
                    new Thread(new ThreadStart((Action)(() =>
                    {
                        var client = new RestClient("http://localhost:5000");
                        var restRequest = new RestRequest("api/onboarding_v1", Method.POST);
                        restRequest.AddHeader("Content-Type", "application/json;charset=utf-8");

                        while (true)
                        {
                            var jObjectbody = new JObject
                            {
                                { "sID", GetRandomIntStr (random, 11) },
                                { "sName", GetRandomFullName (random) },
                                { "sEmail", GetRandomName (random, 7,14) + "@loader.com" },
                                { "sPass", "1234" }
                            };

                            restRequest.Parameters.Clear();
                            restRequest.AddParameter("application/json", jObjectbody, ParameterType.RequestBody);                            
                            client.Execute(restRequest);
                            number++;
                        }
                    })));
            }

            for (int i = 0; i < top; i++)
                threads[i].Start();

            long top_max = 10000000;

            while (number < top_max) 
            {
                if (number > 1)
                    Console.WriteLine("index " + (float)number * 100 / top_max + "%");
                Thread.Sleep(1000);
            }

            Console.ReadLine();
        }

        static string GetRandomName(Random x, int min, int max)
        {
            int max_ = x.Next(min, max);
            string str = "";
            while (max_-- > 0)
                str += ((char)x.Next(65, 90)).ToString();
            return str;
        }

        static string GetRandomFullName(Random x)
        {
            string str = "";
            int max_subs = x.Next(2, 6);

            while (max_subs-- > 0)
            {
                int max_ = x.Next(5, 10);

                while (max_-- > 0)
                    str += ((char)x.Next(65, 90)).ToString();

                str += " ";
            }
            
            return str.Trim();
        }

        static string GetRandomIntStr(Random x, int max_)
        {
            string str = "";
            while (max_-- > 0)
                str += ((char)x.Next(48, 57)).ToString();
            return str;
        }
    }
}
