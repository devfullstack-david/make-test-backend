using System.ComponentModel.DataAnnotations;

public class Group
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string GroupName { get; set; } = string.Empty;

    [Required]
    [MaxLength(15)]
    public string GroupCode { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string GroupDescription { get; set; } = string.Empty;

    public string? GroupImage { get; set; }

    [Required]
    public DateTime CreatedAt { get; set; }
}