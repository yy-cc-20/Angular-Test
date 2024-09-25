using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DataTransferObjects
{
    public class ChangePasswordRequestDTO
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(45, ErrorMessage = "Password cannot be longer than 45 characters")]
        public string? Current_password { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(45, ErrorMessage = "Password cannot be longer than 45 characters")]
        //[RegularExpression("\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$\"",
        //    ErrorMessage = "Please enter a strong password with minimum eight characters, at least one uppercase " +
        //    "letter, one lowercase letter, one number and one special character.")]
        public string? New_password { get; set; }
    }
}
