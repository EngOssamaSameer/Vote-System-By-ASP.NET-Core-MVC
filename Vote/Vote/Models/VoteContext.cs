using Microsoft.EntityFrameworkCore;
using Vote.Models;

namespace Vote.Models
{
    public class VoteContext:DbContext

    {
        public virtual DbSet<Vote> TbVotes { get; set; }
        public virtual DbSet<VoteType> TbVoteType { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Vote;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
        }


    }
}
