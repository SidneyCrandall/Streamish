/*using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Streamish.Models;
using Streamish.Utils;

namespace Streamish.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name, Email, 
                                               ImageURl, DateCreated
                                         FROM UserProfile
                                         ORDE BY DateCreated";

                    var reader = cmd.ExecuteReader();

                    var userProfiles = new List<UserProfile>();

                    while (reader.Read())
                    {
                        userProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
                        });
                    }

                    reader.Close();

                    return userProfiles;
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {

                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Name, Email, ImageUrl, DateCreated
                                        FROM UserProfile
                                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);
                }
            }
        }
    }
}*/
