using MakeTest.Contracts.Controllers;
using MakeTest.Models.Entities;
using MakeTest.Models.User.ViewModels;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UserController : Controller, IUserController
{
    private readonly UserRepository _repository;

    public UserController(UserRepository repository)
    {
        _repository = repository;
    }

    [HttpPost]
    [Route("CreateUser")]
    public async Task<IActionResult> CreateUser([FromBody] CreateUserViewModel user)
    {
        try
        {
            await _repository.CreateUser(user);
            return Ok("Usuário criado com sucesso");   
        }
        catch (Exception exception)
        {
            return StatusCode(400, new { message = "Bad Request", details = exception.Message });
        }
    }

    [HttpPost]
    [Route("Login")]
    public async Task<IActionResult> Login([FromBody] LoginViewModel user)
    {
        try
        {
            bool verifyUser = await _repository.Login(user);
            if(verifyUser)
            {
                return Ok("Login realizado"); 
            };

            return NotFound("Dados incorretos");
        }
        catch (Exception exception)
        {
            return StatusCode(400, new { message = "Bad Request", details = exception.Message });
        }
    }

    [HttpGet]
    [Route("Users")]
    public async Task<ICollection<User>> GetUsers()
    {
       try
       {
        ICollection<User> users = await _repository.GetUsers();
        if (users != null) {
            return users;
        };

        return [];
       }
       catch (Exception exception)
       {
            throw new Exception(exception.Message);
       } 
    }
}