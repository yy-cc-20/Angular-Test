using AutoMapper;
using Entities;
using Entities.DataTransferObjects;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angular_Test.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private AngularTestDbContext _dbContext;
        private IMapper _mapper;
        public ProductController(AngularTestDbContext dbContext, IMapper mapper) 
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<List<ProductDTO>>(_dbContext.Products));
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
                Product product = _dbContext.Products.Find(id);

                if (product == null)
                    return NotFound(new { message = $"Product with id {id} no found." });

                return Ok(_mapper.Map<ProductDetailsDTO>(product));
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
