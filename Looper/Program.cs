using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Looper
{
    class Program
    {
        static void Main(string[] args)
        {
            var threads = new List<int> { 1 };

            var t_l1_brand = new L1.L1_Brand();

            Parallel.ForEach(threads, item =>
            {
                switch (item)
                {
                    case 1:
                        {
                            while(true)
                            {
                                t_l1_brand.Next();
                                Thread.Sleep(1);
                            }
                        }
                }
            });
        }
    }
}
