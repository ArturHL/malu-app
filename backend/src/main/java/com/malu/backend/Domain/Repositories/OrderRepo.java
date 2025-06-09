package com.malu.backend.Domain.Repositories;

import java.util.Optional;
import java.util.List;

import com.malu.backend.Domain.DTO.OrderDTO;

public interface OrderRepo {
  Optional<List<OrderDTO>> getAll();
  Optional<OrderDTO> getOrderById(int id);
  OrderDTO save(OrderDTO orderDTO);
  Optional<OrderDTO> deleteById(int id);
  Optional<List<OrderDTO>> getByUserId(int userId);
  Optional<List<OrderDTO>> getByStatus(String status);
  Optional<List<OrderDTO>> getByDate(String date);
  Optional<OrderDTO> updateStatusById(int id, String status);
}
