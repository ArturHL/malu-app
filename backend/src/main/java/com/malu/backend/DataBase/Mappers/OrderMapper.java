package com.malu.backend.DataBase.Mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mappings;
import org.mapstruct.Mapping;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;

import com.malu.backend.DataBase.Entities.Orden;
import com.malu.backend.Domain.DTO.OrderDTO;

@Mapper(componentModel = "spring")
public interface OrderMapper {
  @Mappings({
    @Mapping(target = "id", source = "idOrden"),
    @Mapping(target = "idUser", source = "idUsuario"),
    @Mapping(target = "date", source = "fecha"),
    @Mapping(target = "total", source = "total"),
    @Mapping(target = "status", source = "estatus"),
    @Mapping(target = "addressId", source = "direccionId"),
  })
  OrderDTO toOrderDTO(Orden orden);
  List<OrderDTO> toOrdersDTOs(List<Orden> ordenes);

  @InheritInverseConfiguration
  Orden toOrden(OrderDTO orderDTO);
}
