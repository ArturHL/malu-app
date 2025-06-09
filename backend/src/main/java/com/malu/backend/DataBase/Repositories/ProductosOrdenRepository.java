package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.ProductosOrdenCRUD;

import com.malu.backend.DataBase.Entities.ProductosOrden;
import com.malu.backend.DataBase.Mappers.OrderProductMapper;
import com.malu.backend.Domain.DTO.OrderProductDTO;
import com.malu.backend.Domain.Repositories.OrderProductRepo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductosOrdenRepository implements OrderProductRepo{
  @Autowired
  private ProductosOrdenCRUD productosOrdenCRUD;
  @Autowired
  private OrderProductMapper mapper;

  @Override
  public Optional<List<OrderProductDTO>> getAll(){
    List<ProductosOrden> productosOrden = (List<ProductosOrden>) productosOrdenCRUD.findAll();
    return Optional.of(mapper.toOrderProductsDTOs(productosOrden));
  }

  @Override
  public Optional<List<OrderProductDTO>> getByOrderId(int orderId){
    List<ProductosOrden> productosOrden = (List<ProductosOrden>) productosOrdenCRUD.findByIdOrden(orderId);
    return Optional.of(mapper.toOrderProductsDTOs(productosOrden));
  }

  @Override
  public Optional<OrderProductDTO> getOrderProductById(int id){
    Optional<ProductosOrden> productosOrden = productosOrdenCRUD.findById(id);
    if (productosOrden.isPresent()) {
      return Optional.of(mapper.toOrderProductDTO(productosOrden.get()));
    }
    return Optional.empty();
  }

  @Override
  public OrderProductDTO save(OrderProductDTO orderProductDTO){
    ProductosOrden productosOrden = mapper.toProductosOrden(orderProductDTO);
    ProductosOrden productosOrdenSaved = productosOrdenCRUD.save(productosOrden);
    return mapper.toOrderProductDTO(productosOrdenSaved);
  }

  @Override
  public Optional<OrderProductDTO> deleteById(int id){
    Optional<OrderProductDTO> orderProduct = getOrderProductById(id);
    if (orderProduct.isPresent()) {
      productosOrdenCRUD.deleteById(id);
      return orderProduct;
    }
    return Optional.empty();
  }

  @Override
  public Optional<OrderProductDTO> updateById(int id, OrderProductDTO orderProductDTO){
    Optional<ProductosOrden> orderProduct = productosOrdenCRUD.findById(id);
    if (orderProduct.isPresent()) {
      ProductosOrden productosOrden = mapper.toProductosOrden(orderProductDTO);
      productosOrden.setIdProductosOrden(id);
      ProductosOrden productosOrdenSaved = productosOrdenCRUD.save(productosOrden);
      return Optional.of(mapper.toOrderProductDTO(productosOrdenSaved));
    }
    return Optional.empty();
  }
}
