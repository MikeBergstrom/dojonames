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
        // public Deck ourDeck;
        private DeckContext _context;
        public HomeController(DeckContext context)
        {
            _context = context;
            // ourDeck = createDeck();
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
            int GameId = (int)HttpContext.Session.GetInt32("GameId");
            Game game = _context.games.Where(g => g.GameId == GameId).SingleOrDefault();
            List<Card> cards = _context.cards.Where(card => card.GameId == game.GameId).ToList();
            //instead of returning the deck object with the cards and colors, lets just do CARDS
            return Json(cards);
        }

        [HttpGet]
        [Route("api/update_deck/{cardId}")]
        public void UpdateDeck(int cardId)
        {
            System.Console.WriteLine(cardId);
            Card thisCard = _context.cards.SingleOrDefault(card => card.CardId == cardId);
            thisCard.IsExposed = true;
            
            _context.SaveChanges();

            int GameId = (int)HttpContext.Session.GetInt32("GameId");
            Game game = _context.games.SingleOrDefault(g => g.GameId == GameId);

            // game.Turn = game.Turn == "red" ? "blue" :"red"; //can we use this? 
            if (thisCard.Color == "red")
            {
                game.RedScore += 1;
                //logic for switching the turn if incorrect team
                //if the game turn is red and the card clicked is red, they keep going
                //else, end their turn and switch it
                if (game.Turn == "blue")
                {
                    //if it's blue team's turn and they clicked a red card, switch who's turn it is!
                    game.Turn = "red";
                    game.Phase = "hinting";
                }
            }
            else if (thisCard.Color =="blue")
            {
                game.BlueScore +=1;
                if (game.Turn == "red")
                {
                    game.Turn = "blue";
                    game.Phase = "hinting";
                }
            }

            else if (thisCard.Color =="black")
            {
                game.Phase = "ended";
                //end the game, whatever team who clicked it loses
            }
            else { //card is white
                //end the turn and switch the teams
                game.Turn = game.Turn == "red" ? "blue" :"red";
            }
            _context.SaveChanges();

            //get the game from our session
            //update the gamescore depending on what the card is

            //probably send the new game state and card state back to EVERYONE? how?
            
            
        }

        [HttpGet]
        [Route("api/create_game_in_database")]
        public JsonResult CreateGameInDatabase()
        {
            //create deck code
            Random rand = new Random();
            int randColor = rand.Next(0,2);
            string firstTeam = randColor == 0 ? "red" : "blue";
            Deck newDeck = new Deck(firstTeam);
            //create game code
            Game newGame = new Game{
                RedScore = 0,
                BlueScore = 0,
                Turn = firstTeam,
                Phase ="waiting",
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
            };
            _context.games.Add(newGame);
            _context.SaveChanges();
            List<Game> allGames = _context.games.OrderByDescending(game => game.GameId).ToList();
            Game ourGame = allGames[0];
            HttpContext.Session.SetInt32("GameId", ourGame.GameId);
            
            foreach (var card in newDeck.Cards)
            {
                card.GameId = ourGame.GameId;
                _context.cards.Add(card);
                _context.SaveChanges();
            }
            System.Console.WriteLine("Here from the service");
            return Json(true);
        // return RedirectToAction("Index");
        }
        public JsonResult GameUpdate()
        {
            System.Console.WriteLine("homecontroller game update");
            int GameId = (int)HttpContext.Session.GetInt32("GameId");
            Game game = _context.games.Where(g => g.GameId == GameId).SingleOrDefault();
            return Json(game);
        }

        [HttpGet]
        [Route("api/gameList")]
        public JsonResult GameList()
        {    
            List<Game> games = _context.games.Where(g => g.Phase == "waiting").OrderByDescending(g => g.CreatedAt).ToList();
            return Json(games);
        }

        [HttpGet]
        [Route("api/join/{GameId}")]
        public IActionResult JoinGame(int GameId)
        {
            HttpContext.Session.SetInt32("GameId", GameId);
            Game joinedGame = _context.games.SingleOrDefault(g => g.GameId == GameId);
            joinedGame.Phase = "hinting";
            _context.SaveChanges();
            return Json(true);
        }
        

    }
}