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
        public Deck ourDeck;
        public HomeController()
        {
            ourDeck = createDeck();
        }
        public Deck createDeck()
        {
            Random rand = new Random();
            int randColor = rand.Next(0,2);
            string firstTeam = randColor == 0 ? "red" : "blue";
            System.Console.WriteLine(firstTeam);
            Deck newDeck = new Deck(firstTeam);
            return newDeck;
        }
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
            return Json(ourDeck);
        }

        [HttpGet]
        [Route("api/update_deck/{cardIdx}")]
        public void UpdateDeck(int cardIdx)
        {
            System.Console.WriteLine(cardIdx);
            System.Console.WriteLine(ourDeck.Cards[cardIdx].Text);
            System.Console.WriteLine(ourDeck.Cards[cardIdx].Color);
            ourDeck.Cards[cardIdx].IsExposed = true;
            //socket code to send over truthiness of exposed
            ;
            
        }
    }
}