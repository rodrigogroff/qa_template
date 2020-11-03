using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectShared
{
    public class ProjectData
    {
        public List<Domain> domains = new List<Domain>();
    }

    public class Domain
    {
        public string name { get; set; }

        public List<Feature> features = new List<Feature>();
    }

    public class Feature
    {
        public string name { get; set; }

        public int version { get; set; }
    }
}
