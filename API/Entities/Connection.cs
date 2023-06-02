using System;
namespace API.Entities
{
	public class Connection
	{
        public Connection()
        {
            // Empty constructor to satisfy EF when it generates the schema
        }

        public Connection(string connectionId, string username)
        {
            ConnectionId = connectionId;
            Username = username;
        }

        public string ConnectionId { get; set; }
		public string Username { get; set; }
	}
}

