using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace MakeTest.Models.Entities;

public class User 
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;
    
    [MaxLength(50)]
    public string? LastName { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(13)]
    public string PhoneNumber { get; set; } = string.Empty;
    
    [MaxLength(50)]
    public string Company { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(3)]
    public string Country { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(30)]
    public string Password { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(30)]
    public string ConfirmPassword { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(1)]
    public string Type { get; set; } = string.Empty;
    
    [Required]
    public DateTime CreatedAt { get; set; }
};