using AutoMapper;
using Entities.Models;
using Entities.DataTransferObjects;

namespace Angular_Test.API
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, LoginResponseDTO>(); 
            CreateMap<User, MyProfileDTO>();
            CreateMap<Product, ProductDTO>()
                .ForMember(dest => dest.Image_path, opt => opt.MapFrom(src => src.ImagePath))
                .ForMember(dest => dest.lower_price_range, opt => opt.MapFrom(src => src.FindLowerPriceRange()))
                .ForMember(dest => dest.upper_price_range, opt => opt.MapFrom(src => src.FindUpperPriceRange()));
            CreateMap<Product, ProductDetailsDTO>()
                .ForMember(dest => dest.Image_path, opt => opt.MapFrom(src => src.ImagePath))
                .ForMember(dest => dest.Product_variance_list, opt => opt.MapFrom(src => src.ProductVarianceList));
            CreateMap<ProductVariance, ProductVarianceDTO>();
        }
    }
}
