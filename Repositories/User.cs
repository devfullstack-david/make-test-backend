using MakeTest.Context;
using MakeTest.Contracts.Repositories;
using MakeTest.Models.User.ViewModels;
using Microsoft.AspNetCore.Mvc;

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
}