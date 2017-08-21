using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using dojonames.Models;
 
namespace dojonames.Models
{
    public class Card
    {
        public int CardId {get;set;}
        public string Text {get;set;}
        public string Color {get;set;}
        public Boolean IsExposed {get;set;}
    }
}
