using Entities.Models;
using Microsoft.EntityFrameworkCore;


namespace Entities
{
    public class AngularTestDbContext : DbContext
    {
        public AngularTestDbContext(DbContextOptions<AngularTestDbContext> options)
            : base(options)
        {
        }

        public DbSet<User>? Users { get; set; }
        public DbSet<Product>? Products { get; set; }
    }
}