using Looper.Infra;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;

namespace Looper.L1
{
    public class L1_Brand : LooperBase
    {
        public long id = 1;
        public long page_index = 0;

        public bool Next()
        {
            Console.WriteLine("id " + id + " - page_index " + page_index);

            // listagem
            {
                var restRequest = new RestRequest("api/brandListing_v1", Method.POST);

                JObject jObjectbody = new JObject
                {
                    { "page", page_index++ },
                    { "pageSize", "20" },
                    { "orderBy", "1" }
                };

                restRequest.AddParameter("application/json", jObjectbody, ParameterType.RequestBody);
                restRequest.AddHeader("Content-Type", "application/json;charset=utf-8");

                var t = new RestClient(GetNextNode()).Execute(restRequest);
            }

            // buscar id
            {

            }

            return true;
        }
    }
}
