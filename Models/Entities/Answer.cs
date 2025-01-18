using System.ComponentModel.DataAnnotations;

public class Answer
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string AnswerTitle { get; set; } = string.Empty;

    [Required]
    [MaxLength(10)]
    public string AnswerSelectedOption { get; set; } = string.Empty;

    [Required]
    [MaxLength(10)]
    public string QuestionId { get; set; } = string.Empty;

    [Required]
    public DateTime CreatedAt { get; set; }
}