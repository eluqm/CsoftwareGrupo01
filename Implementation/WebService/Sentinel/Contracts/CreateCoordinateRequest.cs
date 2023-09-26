using Microsoft.AspNetCore.Mvc;

namespace Sentinel.Contracts
{
    public class CreateCoordinateRequest
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
