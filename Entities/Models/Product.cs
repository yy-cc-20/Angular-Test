using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("product")]
    public class Product
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [StringLength(45, ErrorMessage = "Name can't be longer than 45 characters")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Description is required")]
        [StringLength(2000, ErrorMessage = "Description cannot be longer than 2000 characters")]
        public string? Description { get; set; }

        [Column("image_path")]
        [Required(ErrorMessage = "Image path is required")]
        [StringLength(200, ErrorMessage = "Image path cannot be longer than 200 characters")]
        public string? ImagePath { get; set; }

        [Required(ErrorMessage = "Product variance is required")]
        public ICollection<ProductVariance>? ProductVarianceList { get; set; }
        public int FindLowerPriceRange()
        {
            return ProductVarianceList.OrderBy(x => x.Price).First().Price;
        }

        public int FindUpperPriceRange() 
        {
            return ProductVarianceList.OrderBy(x => x.Price).Last().Price;
        }
    }
}