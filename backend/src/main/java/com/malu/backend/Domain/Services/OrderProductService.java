package com.malu.backend.Domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.malu.backend.Domain.DTO.OrderProductDTO;
import com.malu.backend.Domain.Repositories.OrderProductRepo;

@Service
public class OrderProductService {
  @Autowired
  private OrderProductRepo orderProductRepo;

  public Optional<List<OrderProductDTO>> getAll(){
    return orderProductRepo.getAll();
  }

  public Optional<List<OrderProductDTO>> getByOrderId(int orderId){
    return orderProductRepo.getByOrderId(orderId);
  }

  public Optional<OrderProductDTO> getOrderProductById(int id){
    return orderProductRepo.getOrderProductById(id);
  }

  public OrderProductDTO save(OrderProductDTO orderProductDTO){
    return orderProductRepo.save(orderProductDTO);
  }

  public Optional<OrderProductDTO> deleteById(int id){
    return orderProductRepo.deleteById(id);
  }

  public Optional<OrderProductDTO> updateById(int id, OrderProductDTO orderProductDTO){
    return orderProductRepo.updateById(id, orderProductDTO);
  }

}
