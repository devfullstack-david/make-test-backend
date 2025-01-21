namespace MakeTest.Contracts.Controllers;

using MakeTest.Models.Entities;
using MakeTest.Models.User.ViewModels;
using Microsoft.AspNetCore.Mvc;

public interface IUserController 
{
    Task<IActionResult> CreateUser([FromBody] CreateUserViewModel user);
    Task<IActionResult> Login([FromBody] LoginViewModel user); 
    Task<ICollection<User>> GetUsers();
};