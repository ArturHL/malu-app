package com.malu.backend.DataBase.Mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mappings;
import org.mapstruct.Mapping;
import org.mapstruct.InheritInverseConfiguration;

import com.malu.backend.DataBase.Entities.ImagenesUsuario;
import com.malu.backend.Domain.DTO.UserImgDTO;

@Mapper(componentModel = "spring")
public interface UserImgMapper {
  @Mappings({
    @Mapping(target = "id", source = "idImagenUsuario"),
    @Mapping(target = "idUser", source = "idUsuario"),
    @Mapping(target = "url", source = "url"),
  })
  UserImgDTO toUserImgDTO(ImagenesUsuario imagenesUsuario);
  
  @InheritInverseConfiguration
  ImagenesUsuario toImagenesUsuario(UserImgDTO userImgDTO);
}
