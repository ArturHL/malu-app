package com.malu.backend.DataBase.Mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mappings;
import org.mapstruct.Mapping;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;

import com.malu.backend.Domain.DTO.OrderProductDTO;
import com.malu.backend.DataBase.Entities.ProductosOrden;

@Mapper(componentModel = "spring")
public interface OrderProductMapper {
  @Mappings({
    @Mapping(target = "id", source = "idProductosOrden"),
    @Mapping(target = "orderId", source = "idOrden"),
    @Mapping(target = "productId", source = "idProducto"),
    @Mapping(target = "comment", source = "comentario"),
    @Mapping(target = "quantity", source = "unidades"),
  })
  OrderProductDTO toOrderProductDTO(ProductosOrden productosOrden);
  List<OrderProductDTO> toOrderProductsDTOs(List<ProductosOrden> productosOrden);

  @InheritInverseConfiguration
  ProductosOrden toProductosOrden(OrderProductDTO orderProductDTO);
}
