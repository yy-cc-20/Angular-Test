using AutoMapper;
using Entities;
using Entities.DataTransferObjects;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
                List<Product> productList = _dbContext.Products
                    .Include(x => x.ProductVarianceList).ToList();

                //List<ProductDTO> productDTOList = new List<ProductDTO>();

                //foreach (Product product in productList)
                //{
                //    ProductDTO productDTO = new ProductDTO()
                //    {
                //        Id = product.Id,
                //        Name = product.Name,
                //        Description = product.Description,
                //        Image_path = product.ImagePath,
                //        lower_price_range = product.FindLowerPriceRange(),
                //        upper_price_range = product.FindUpperPriceRange(),
                //    };
                //    productDTOList.Add(productDTO);
                //}
                List<ProductDTO> productDTOList = _mapper.Map<List<ProductDTO>>(productList);

                return Ok(productDTOList);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message/*"Internal server error"*/);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            try
            {
                Product product = _dbContext.Products
                    .Include(x => x.ProductVarianceList).FirstOrDefault(x => x.Id.Equals(id));

                if (product == null)
                    return NotFound(new { message = $"Product with id {id} no found." });

                //ProductDetailsDTO productDetailsDTO = new ProductDetailsDTO()
                //{
                //    Id = product.Id,
                //    Name = product.Name,
                //    Description = product.Description,
                //    Image_path = product.ImagePath,
                //    Product_variance_list = new List<ProductVarianceDTO>()
                //};

                //foreach (ProductVariance productVariance in product.ProductVarianceList)
                //{
                //    ProductVarianceDTO productVarianceDTO = new ProductVarianceDTO()
                //    {
                //        Id= productVariance.Id,
                //        Info = productVariance.Info,
                //        Price = productVariance.Price,
                //    };
                //    productDetailsDTO.Product_variance_list.Add(productVarianceDTO);
                //}
                ProductDetailsDTO productDetailsDTO = _mapper.Map<ProductDetailsDTO>(product);
                return Ok(productDetailsDTO);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message/*"Internal server error"*/);
            }
        }
    }
}
