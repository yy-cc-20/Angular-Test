using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("product_variance")]
    public class ProductVariance
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Info is required")]
        [StringLength(45, ErrorMessage = "Info cannot be longer than 45 characters")]
        public string? Info { get; set; }

        public const int MAX_PRICE = 999999;

        [RegularExpression("(^[0-9]+$)", ErrorMessage = "Please enter valid Number")]
        [Range(0, MAX_PRICE, ErrorMessage = "Please enter number less than {MAX_PRICE}")]
        [Required(ErrorMessage = "Price is required")]
        public int Price { get; set; }

        [Column("product_id")]
        [ForeignKey(nameof(Product))]
        [Required(ErrorMessage = "Product is required")]
        public Guid ProductId { get; set; }
    }
}