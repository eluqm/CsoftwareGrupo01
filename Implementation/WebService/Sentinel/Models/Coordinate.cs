using Postgrest.Attributes;
using Postgrest.Models;
using NpgsqlTypes;

namespace Sentinel.Models
{
    [Table("Coordinate")]
    public class Coordinate : BaseModel
    {
        [PrimaryKey("id", false)]
        public long Id { get; set; }

        [Column("latitude")]
        public double Latitude { get; set; }

        [Column("longitude")]
        public double Longitude { get; set; }
    }
}
