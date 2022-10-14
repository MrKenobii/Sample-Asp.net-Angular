using System;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<Comment> Comment { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

    }
}

