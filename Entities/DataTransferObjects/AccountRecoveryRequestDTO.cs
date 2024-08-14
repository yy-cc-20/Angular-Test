using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DataTransferObjects
{
    public class AccountRecoveryRequestDTO
    {
        [Required(ErrorMessage = "Username is required")]
        [StringLength(45, ErrorMessage = "Username can't be longer than 45 characters")]
        public string? Username { get; set; }
    }
}
