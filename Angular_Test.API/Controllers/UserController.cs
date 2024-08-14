using AutoMapper;
using Entities;
using Entities.DataTransferObjects;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using PasswordGenerator;

namespace Angular_Test.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private AngularTestDbContext _dbContext;
        private IMapper _mapper;
        private Password _passwordGenerator;

        public UserController(AngularTestDbContext dbContext, IMapper mapper, Password passwordGenerator)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _passwordGenerator = passwordGenerator;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequestDTO loginRequestDTO)
        {
            try
            {
                User user = _dbContext.Users.FirstOrDefault(x => x.Username == loginRequestDTO.Username);

                if (user == null) 
                    return NotFound(new { message = "The username or password is wrong." });

                if (user.Password != loginRequestDTO.Password)
                    return NotFound(new { message = "The username or password is wrong." });

                // Meet authorization condition
                return Ok(_mapper.Map<LoginResponseDTO>(user));
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
     
        [HttpPost("forgetpassword")]
        public IActionResult ForgetPassword([FromBody] AccountRecoveryRequestDTO accountRecoveryRequestDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(new { message = "Invalid request format." });

            try
            {
                User user = _dbContext.Users.FirstOrDefault(x => x.Username == accountRecoveryRequestDTO.Username);

                if (user == null)
                    return NotFound(new { message = $"Username {accountRecoveryRequestDTO.Username} no found." });

                // generate new password
                string newPassword = _passwordGenerator.Next();

                // save the new password
                user.Password = newPassword;
                _dbContext.Users.Update(user);
                _dbContext.SaveChanges();

                // TODO send the new password to user email

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            try
            {
                User user = _dbContext.Users.Find(id);
                
                if (user == null)
                    return NotFound(new { message = $"User with id {id} no found." });
                
                return Ok(_mapper.Map<ProductDetailsDTO>(user));
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("changepassword")]
        [ValidateAntiForgeryToken]
        public IActionResult ChangePassword([FromBody] ChangePasswordRequestDTO changePasswordRequestDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(new { message = "New password is invalid." });

            try
            {
                User user = _dbContext.Users.Find(changePasswordRequestDTO.User_id);

                if (user == null)
                    return NotFound(new { message = $"User with id {changePasswordRequestDTO.User_id} no found." });

                if (user.Password != changePasswordRequestDTO.Current_password)
                    return BadRequest(new { message = "Incorrect password." });
                
                // Meet change password conditions
                user.Password = changePasswordRequestDTO.New_password;
                _dbContext.Users.Update(user);
                _dbContext.SaveChanges();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
