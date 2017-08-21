using Microsoft.EntityFrameworkCore;

namespace dojonames.Models
{
    public class DeckContext: DbContext
    {
        public DeckContext(DbContextOptions<DeckContext> options) : base(options) { }

        public DbSet<Game> games {get;set;}
        public DbSet<Card> cards {get;set;}
        
    }
}