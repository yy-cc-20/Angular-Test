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
        public string? New_password { get; set; }
    }
}
