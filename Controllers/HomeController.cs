using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using dojonames.Models;
using System.Linq;

namespace dojonames.Controllers
{
    public class HomeController : Controller
    {
        public Deck ourDeck;
        private DeckContext _context;
        public HomeController(DeckContext context)
        {
            _context = context;
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

            List<Game> allGames = _context.games.OrderByDescending(game => game.GameId).ToList();
            Game ourGame = allGames[0];
            //change this to session ^
            List<Card> cards = _context.cards.Where(card => card.GameId == ourGame.GameId).ToList();
            ourDeck.Cards = cards;

            return Json(ourDeck);
        }

        [HttpGet]
        [Route("api/update_deck/{cardId}")]
        public void UpdateDeck(int cardId)
        {
            System.Console.WriteLine(cardId);
            Card thisCard = _context.cards.SingleOrDefault(card => card.CardId == cardId);
            thisCard.IsExposed = true;
            
            _context.SaveChanges();
            // System.Console.WriteLine(ourDeck.Cards[cardIdx].Text);
            // System.Console.WriteLine(ourDeck.Cards[cardIdx].CardId);
            // System.Console.WriteLine(ourDeck.Cards[cardIdx].Color);
            // ourDeck.Cards[cardIdx].IsExposed = true;
            //socket code to send over truthiness of exposed
            
            
        }

        [HttpGet]
        [Route("api/create_game_in_database")]
        public JsonResult CreateGameInDatabase()
        {
            Game newGame = new Game{
                RedScore = 0,
                BlueScore = 0,
                Turn = "red",
                Phase ="hint",
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
            };
            _context.games.Add(newGame);
            _context.SaveChanges();
            List<Game> allGames = _context.games.OrderByDescending(game => game.GameId).ToList();
            Game ourGame = allGames[0];
            HttpContext.Session.SetInt32("GameId", ourGame.GameId);
            foreach (var card in ourDeck.Cards)
            {
                card.GameId = ourGame.GameId;
                _context.cards.Add(card);
                _context.SaveChanges();
            }
            System.Console.WriteLine("Here from the service");
            return Json(true);
        // return RedirectToAction("Index");
        }
        public JsonResult gameUpdate()
        {
            int GameId = (int)HttpContext.Session.GetInt32("GameId");
            Game game = _context.games.Where(g => g.GameId == GameId).SingleOrDefault();
            return Json(game);
        }
        

    }
}