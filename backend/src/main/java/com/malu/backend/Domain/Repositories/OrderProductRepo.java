package com.malu.backend.Domain.Repositories;

import java.util.List;
import java.util.Optional;

import com.malu.backend.Domain.DTO.OrderProductDTO;

public interface OrderProductRepo {
  Optional<List<OrderProductDTO>> getAll();
  Optional<List<OrderProductDTO>> getByOrderId(int orderId);
  Optional<OrderProductDTO> getOrderProductById(int id);
  OrderProductDTO save(OrderProductDTO orderProductDTO);
  Optional<OrderProductDTO> deleteById(int id);
  Optional<OrderProductDTO> updateById(int id, OrderProductDTO orderProductDTO);
}
