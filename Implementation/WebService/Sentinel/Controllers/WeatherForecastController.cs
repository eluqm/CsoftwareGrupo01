using Microsoft.AspNetCore.Mvc;

namespace Sentinel.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        /*[HttpGet(Name = "GetDistance")]
        public Task<double> GetDistance(double latitude1, double longitude1, double latitude2, double longitude2) {
            var location1 = new Geolocation.Coordinate(latitude1, longitude1);
            var location2 = new Geolocation.Coordinate(latitude2, longitude2);

            return Geolocation.GeoCalculator.GetDistance(location1, location2);
        }*/
    }
}