using MakeTest.Models.User.ViewModels;

namespace MakeTest.Contracts.Repositories;

public interface IUserRepository
{
    Task CreateUser(CreateUserViewModel user);
    Task<bool> Login(LoginViewModel user);
}