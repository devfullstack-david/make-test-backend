using System.ComponentModel.DataAnnotations;

public class Option
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string OptionTitle { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string OptionDescription { get; set; } = string.Empty;

    [Required]
    [MaxLength(10)]
    public string QuestionId { get; set; } = string.Empty;

    [Required]
    public DateTime CreatedAt { get; set; }
}