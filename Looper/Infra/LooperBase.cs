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
    }
}
