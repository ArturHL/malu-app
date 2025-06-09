package com.malu.backend.DataBase.Mappers;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mappings;
import org.mapstruct.Mapping;

import com.malu.backend.DataBase.Entities.Direccion;
import com.malu.backend.Domain.DTO.AddressDTO;

@Mapper(componentModel = "spring")
public interface AddressMapper {
  @Mappings({
    @Mapping(target = "id", source = "idDireccion"),
    @Mapping(target = "idUser", source = "idUsuario"),
    @Mapping(target = "street", source = "calle"),
    @Mapping(target = "number", source = "numero"),
    @Mapping(target = "postalCode", source = "codigoPostal"),
    @Mapping(target = "city", source = "ciudad"),
    @Mapping(target = "state", source = "estado"),
  })
  AddressDTO toAddressDTO(Direccion direccion);
  List<AddressDTO> toAddressesDTOs(List<Direccion> direcciones);

  @InheritInverseConfiguration
  Direccion toDireccion(AddressDTO addressDTO);
}
