using Entities.Api.Admin;
using Looper.Infra;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Text.Json;

namespace Looper.Admin
{
    public class Brand : LooperBase
    {
        public long page_index = 0;

        public bool Next(string bearer)
        {
            for (int i = 1; i <= 2; i++)
            {
                Console.WriteLine("Brand -> page_index " + page_index + " -> order " + i);

                var restRequest = new RestRequest("api/brandListing_v1", Method.POST);

                JObject jObjectbody = new JObject
                {
                    { "page", page_index++ },
                    { "pageSize", "50" },
                    { "orderBy", i }
                };

                restRequest.AddParameter("application/json", jObjectbody, ParameterType.RequestBody);
                restRequest.AddHeader("Content-Type", "application/json;charset=utf-8");

                var ret = new RestClient(GetNextNode()).Execute(restRequest);

                if (!ret.IsSuccessful)
                    return false;

                var dtoResp = JsonSerializer.Deserialize<DtoBrandListingResult>(ret.Content);

                if (dtoResp.results.Count == 0)
                    return false;

                foreach (var item in dtoResp.results)
                {
                    Console.WriteLine("Brand -> page_index " + page_index + " -> id " + item.id);

                    var restRequestID = new RestRequest("api/brand_v1", Method.GET);
                    restRequestID.AddParameter("id", item.id);
                    restRequestID.AddParameter("Authorization", $"Bearer {bearer}", ParameterType.HttpHeader);
                    restRequestID.AddHeader("Content-Type", "application/json;charset=utf-8");

                    var retID = new RestClient(GetNextNode()).Execute(restRequestID);
                }
            }

            return true;
        }
    }
}
