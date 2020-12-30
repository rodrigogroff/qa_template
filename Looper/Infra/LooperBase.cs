using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections.Generic;

namespace Looper.Infra
{
    public class LooperBase
    {
        public List<string> nodes = new List<string>
        {
            "http://191.252.156.137:18524",
        };

        public int nodeIndex = 0;

        public string GetNextNode()
        {
            var s = nodes[nodeIndex];

            nodeIndex++;
            if (nodeIndex >= nodes.Count)
                nodeIndex = 0;

            return s;
        }

        public string GetBearer()
        {
            var restRequest = new RestRequest("api/authenticate_v1", Method.POST);

            JObject jObjectbody = new JObject
                {
                    { "email", "rodrigo.groff@gmail.com" },
                    { "password", "1234" },                    
                };

            restRequest.AddParameter("application/json", jObjectbody, ParameterType.RequestBody);
            restRequest.AddHeader("Content-Type", "application/json;charset=utf-8");

            var t = new RestClient(GetNextNode()).Execute(restRequest);
            var obj = JObject.Parse(t.Content);

            return Convert.ToString(obj["token"]);
        }
    }
}
