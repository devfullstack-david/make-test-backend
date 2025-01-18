using System.ComponentModel.DataAnnotations;

public class Access
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string AccessName { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string AcessDescription { get; set; } = string.Empty;

    [Required]
    [MaxLength(5)]
    public string AccessCountry { get; set; } = string.Empty;

    [Required]
    public DateTime CreatedAt { get; set; }
}