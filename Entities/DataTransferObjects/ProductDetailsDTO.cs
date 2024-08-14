namespace Entities.DataTransferObjects
{
    public class ProductDetailsDTO
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Image_path { get; set; }
        public ICollection<ProductVarianceDTO>? Product_variance_list { get; set; }
    }
}
