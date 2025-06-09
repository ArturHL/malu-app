package com.malu.backend.DataBase.Mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mappings;
import org.mapstruct.Mapping;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;

import com.malu.backend.Domain.DTO.ProductDTO;
import com.malu.backend.DataBase.Entities.Producto;

@Mapper(componentModel = "spring")
public interface ProductMapper {
  @Mappings({
    @Mapping(target = "id", source = "idProducto"),
    @Mapping(target = "name", source = "nombre"),
    @Mapping(target = "category", source = "categoria"),
    @Mapping(target = "available", source = "existencia"),
    @Mapping(target = "price", source = "precio"),
    @Mapping(target = "description", source = "descripcion"),
  })
  ProductDTO toProductDTO(Producto producto);
  List<ProductDTO> toProductsDTOs(List<Producto> productos);

  @InheritInverseConfiguration
  Producto toProducto(ProductDTO productDTO);
}
