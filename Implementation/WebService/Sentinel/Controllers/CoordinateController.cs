using Microsoft.AspNetCore.Mvc;

namespace Sentinel.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CoordinateController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
