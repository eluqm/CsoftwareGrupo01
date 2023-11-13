using Postgrest.Attributes;
using Postgrest.Models;

namespace Sentinel.Models
{
    [Table("District")]
    public class District : BaseModel
    {
        [PrimaryKey("id", false)]
        public long Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("rating")]
        public double Rating { get; set; }

        /*
        [Column("latitude")]
        public double Latitude { get; set; }

        [Column("longitude")]
        public double Longitude { get; set; }
        */
    }
}
