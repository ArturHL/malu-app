package com.malu.backend.Domain.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.malu.backend.Domain.Repositories.OrderRepo;
import com.malu.backend.Domain.DTO.OrderDTO;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
  @Autowired
  private OrderRepo orderRepo;

  public Optional<List<OrderDTO>> getAll(){
    return orderRepo.getAll();
  }

  public Optional<OrderDTO> getOrderById(int id){
    return orderRepo.getOrderById(id);
  }

  public OrderDTO save(OrderDTO orderDTO){
    return orderRepo.save(orderDTO);
  }

  public Optional<OrderDTO> deleteById(int id){
    return orderRepo.deleteById(id);
  }

  public Optional<List<OrderDTO>> getByUserId(int userId){
    return orderRepo.getByUserId(userId);
  }

  public Optional<List<OrderDTO>> getByStatus(String status){
    return orderRepo.getByStatus(status);
  }

  public Optional<List<OrderDTO>> getByDate(String date){
    return orderRepo.getByDate(date);
  }

  public Optional<OrderDTO> updateStatusById(int id, String status){
    return orderRepo.updateStatusById(id, status);
  }
}
