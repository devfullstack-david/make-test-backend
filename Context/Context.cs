using MakeTest.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MakeTest.Context;

public class AppDbContext : DbContext 
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
    {}

    //define tables
    public DbSet<User> Users { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>(e => 
        {
            e.HasKey(u => u.Id);
            e.Property(u => u.Id).ValueGeneratedOnAdd();

            e.Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(50);

            e.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(100);

            e.Property(u => u.PhoneNumber)
                .IsRequired()
                .HasMaxLength(13);

            e.Property(u => u.Company)
                .HasMaxLength(50);

            e.Property(u => u.Country)
                .IsRequired()
                .HasMaxLength(3);

            e.Property(u => u.LastName)
                .HasMaxLength(50);

            e.Property(u => u.Password)
                .IsRequired()
                .HasMaxLength(30);

            e.Property(u => u.ConfirmPassword)
                .IsRequired()
                .HasMaxLength(30);

            e.Property(u => u.Type)
                .IsRequired()
                .HasMaxLength(1);

            e.Property(u => u.CreatedAt)
                .IsRequired()
                .HasColumnType("DateTime");
        });
    }
}