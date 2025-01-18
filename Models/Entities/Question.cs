using System.ComponentModel.DataAnnotations;

public class Question 
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string QuestionTitle { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string QuestionDescription { get; set; } = string.Empty;

    [Required]
    [MaxLength(10)]
    public string TestId { get; set; } = string.Empty;

    [Required]
    public DateTime CreatedAt { get; set; }
}