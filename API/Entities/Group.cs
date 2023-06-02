using System;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
	public class Group
	{
        public Group()
        {
            // Empty constructor to satisfy EF when it generates the schema
        }

        public Group(string name)
        {
            Name = name;
        }

        [Key]
		public string Name { get; set; }
		public ICollection<Connection> Connections { get; set; } = new List<Connection>();
	}
}

