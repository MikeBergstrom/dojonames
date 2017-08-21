using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using dojonames.Models;
 
namespace dojonames.Models
{
    public class Game
    {
        public int GameId {get;set;}
        public int RedScore {get;set;}
        public int BlueScore {get;set;}
        public string Turn {get;set;}
        public string Phase {get;set;}
        public string LastHint {get;set;}
        public int HintCount {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}
        //computer one joins and is assigned to be codemaster

        //computer two joins and is assigned to be field agent
        
        //determines which team goes first

        //created deck from class - team that goes first as input to constructor

        //emit the deck to both computers

        //emit turn start to codemasters

        //codemaster emits hint and number

        //field agents guess until wrong or pass

        //each guess is emited to codemasters
    }
}