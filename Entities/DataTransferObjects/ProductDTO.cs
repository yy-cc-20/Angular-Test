namespace Entities.DataTransferObjects
{
    public class ProductDTO
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Image_path { get; set; }
        public int lower_price_range { get; set; }
        public int upper_price_range { get; set; }
    }
}
