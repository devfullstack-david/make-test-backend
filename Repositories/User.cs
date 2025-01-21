using MakeTest.Context;
using MakeTest.Contracts.Repositories;
using MakeTest.Models.Entities;
using MakeTest.Models.User.ViewModels;
using Microsoft.EntityFrameworkCore;

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task CreateUser(CreateUserViewModel user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> Login(LoginViewModel user)
    {
        bool userExists = await _context.Users.AnyAsync(
            u => u.Email.Equals(user.Email) &&
            u.Password.Equals(user.Password)
        );
        
        return userExists;
    }

    public async Task<ICollection<User>> GetUsers()
    {
        ICollection<User> users = await _context.Users.ToListAsync();

        return users;
    }
}