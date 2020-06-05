using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }

        public DbSet<Question> Questions { get; set; }

        public DbSet<BackEnd.Models.Quiz> Quiz { get; set; }
    }
}
