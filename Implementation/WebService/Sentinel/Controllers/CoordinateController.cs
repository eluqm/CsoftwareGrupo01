using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Sentinel.Contracts;
using Sentinel.Models;

namespace Sentinel.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class CoordinateController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpGet("Coordinate")]
        public async Task<string> GetCoordinate(long id)
        {
            var result = await SupabaseClient.MyClient.From<Coordinate>().Where(n => n.Id == id).Get();
            var cities = result.Model;

            if (cities == null)
            {
                return "No Found";
            }

            return JsonConvert.SerializeObject(cities);
        }

        [HttpPost("Coordinate")]
        public async Task<bool> PostTodoItem(Sentinel.Contracts.CoordinateResponse coordinateRequest)
        {
            await SupabaseClient.Init();
            var model = new Coordinate
            {
                Latitude = coordinateRequest.Latitude,
                Longitude = coordinateRequest.Longitude
            };
            var result = await SupabaseClient.MyClient.From<Coordinate>().Where(n => n.Id == 1234).Get();
            result.Model.Id += 1;
            await SupabaseClient.MyClient.From<Coordinate>().Insert(result.Model);

            return false;
        }
    }
}
