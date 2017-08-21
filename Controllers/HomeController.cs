using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using dojonames.Models;

namespace dojonames.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [Route("api/get_deck")]
        public JsonResult GetDeck()
        {
            Random rand = new Random();
            int randColor = rand.Next(0,2);
            string firstTeam = randColor == 0 ? "red" : "blue";
            System.Console.WriteLine(firstTeam);
            Deck newDeck = new Deck(firstTeam);
            return Json(newDeck);
        }
    }
}