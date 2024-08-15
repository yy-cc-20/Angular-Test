using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("user")]
    public class User
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Username is required")]
        [StringLength(45, ErrorMessage = "Username can't be longer than 45 characters")]
        public string? Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(45, ErrorMessage = "Password cannot be longer than 45 characters")]
        [RegularExpression("\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$\"", 
            ErrorMessage = "Please enter a strong password with minimum eight characters, at least one uppercase " +
            "letter, one lowercase letter, one number and one special character")]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [StringLength(45, ErrorMessage = "Email cannot be longer than 45 characters")]
        public string? Email { get; set; }
    }
}