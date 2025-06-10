package com.malu.backend.DataBase.Mappers;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mappings;
import org.mapstruct.Mapping;

import com.malu.backend.DataBase.Entities.Usuario;
import com.malu.backend.Domain.DTO.UserDTO;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mappings({
        @Mapping(target = "id", source = "idUsuarios"), 
        @Mapping(target = "name", source = "nombre"),
        @Mapping(target = "email", source = "correo"),
        @Mapping(target = "phone", source = "telefono"),
        @Mapping(target = "password", source = "contrasena"),
        @Mapping(target = "role", source = "rol.nombre")
    })
    UserDTO toUserDTO(Usuario usuario);
    List<UserDTO> toUsersDTOs(List<Usuario> Usuarios);
    
    @Mappings({
        @Mapping(target = "idUsuarios", ignore = true),
        @Mapping(target = "nombre", source = "name"),
        @Mapping(target = "correo", source = "email"),
        @Mapping(target = "telefono", source = "phone"),
        @Mapping(target = "contrasena", source = "password"),
        @Mapping(target = "rol", ignore = true),
    })
    @InheritInverseConfiguration
    Usuario toUsuario(UserDTO userDTO);
}