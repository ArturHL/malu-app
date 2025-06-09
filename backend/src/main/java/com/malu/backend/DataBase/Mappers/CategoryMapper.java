package com.malu.backend.DataBase.Mappers;

import com.malu.backend.DataBase.Entities.Categoria;
import com.malu.backend.Domain.DTO.CategoryDTO;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
  @Mappings({
    @Mapping(target = "id", source = "idCategoria"),
    @Mapping(target = "name", source = "nombre"),
  })
  CategoryDTO toCategoryDTO(Categoria categoria);
  List<CategoryDTO> toCategoriesDTOs(List<Categoria> categorias);

  @InheritInverseConfiguration
  Categoria toCategoria(CategoryDTO categoryDTO);
  
}
