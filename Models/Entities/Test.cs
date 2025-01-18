using System.ComponentModel.DataAnnotations;

public class Test
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string TestName { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string TestDescription { get; set; } = string.Empty;

    [Required]
    [MaxLength(15)]
    public string TestCode { get; set; } = string.Empty;

    public string TestImage { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(2)]
    public string TestType { get; set; } = string.Empty;

    [Required]
    public DateTime CreatedAt { get; set; }
}