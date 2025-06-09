package com.malu.backend.DataBase.Mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.InheritInverseConfiguration;

import com.malu.backend.DataBase.Entities.ImagenesProducto;
import com.malu.backend.Domain.DTO.ProductImgDTO;

@Mapper(componentModel = "spring")
public interface ProductImgMapper {
  @Mappings({
    @Mapping(target = "id", source = "idImagenProducto"),
    @Mapping(target = "idProduct", source = "idProducto"),
    @Mapping(target = "url", source = "url"),
  })
  ProductImgDTO toProductImgDTO(ImagenesProducto imagenesProducto);

  @InheritInverseConfiguration
  ImagenesProducto toImagenesProducto(ProductImgDTO productImgDTO);
}
