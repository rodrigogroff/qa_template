using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Looper.Admin;
using Looper.Infra;

namespace Looper
{
    class Program
    {
        static void Main(string[] args)
        {
            var threads = new List<int> { 1 };

            while (true)
            {
                var myBearer = new LooperBase().GetBearer();
                var t_l1_brand = new Brand();

                Parallel.ForEach(threads, item =>
                {
                    switch (item)
                    {
                        case 1:
                            {
                                while (true)
                                {
                                    if (!t_l1_brand.Next(myBearer))
                                        break;

                                    Thread.Sleep(1);
                                }
                                break;
                            }
                    }
                });

                Console.WriteLine("======== ");
                Thread.Sleep(1000);
                Console.WriteLine("#New cycle");
                Console.WriteLine("");
            }
        }
    }
}
