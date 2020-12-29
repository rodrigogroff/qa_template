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
            Console.WriteLine("Setup!");

            RestRequest restRequest = new RestRequest("api/authenticate_v1", Method.POST);

            JObject jObjectbody = new JObject
            {
                { "email", "vciuymp@loader.com" },
                { "password", "1234" }
            };

            restRequest.AddParameter("application/json", jObjectbody, ParameterType.RequestBody);
            restRequest.AddHeader("Content-Type", "application/json;charset=utf-8");

            int number = 1, top = 99;

            var threads = new Thread[top];
            for (int i = 0; i < top; i++)
            {
                threads[i] =
                    new Thread(new ThreadStart((Action)(() =>
                    {
                        new RestClient("http://localhost:5000").Execute(restRequest);
                        number++;
                    })));
            }

            var dt = DateTime.Now;

            for (int i = 0; i < top; i++)
                threads[i].Start();

            Console.WriteLine("Start!");

            Thread.Sleep(1);

            while (number < top) 
            {
                //Console.WriteLine(number);                
            }

            var tspan = DateTime.Now.Subtract(dt);
            var milis = tspan.TotalMilliseconds;

            Console.WriteLine("-----------------");
            Console.WriteLine("Requests: " + top);
            Console.WriteLine("-----------------");
            Console.WriteLine("milis: " + milis);
            Console.WriteLine("request per second: " + ((int)(top*1000/(int)milis)));
            Console.WriteLine("-----------------");

            Console.ReadLine();
        }
    }
}
