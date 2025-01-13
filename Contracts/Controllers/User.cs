namespace MakeTest.Contracts.Controllers;

using MakeTest.Models.User.ViewModels;
using Microsoft.AspNetCore.Mvc;

public interface IUserController 
{
    Task<IActionResult> CreateUser([FromBody] CreateUserViewModel user);    
};