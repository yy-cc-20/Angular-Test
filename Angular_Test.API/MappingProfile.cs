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
                .ForMember(dest => dest.lower_price_range, opt => opt.MapFrom(src => src.FindLowerPriceRange()))
                .ForMember(dest => dest.upper_price_range, opt => opt.MapFrom(src => src.FindUpperPriceRange()));
            CreateMap<Product, ProductDetailsDTO>();
            CreateMap<ProductVariance, ProductVarianceDTO>();
        }
    }
}
