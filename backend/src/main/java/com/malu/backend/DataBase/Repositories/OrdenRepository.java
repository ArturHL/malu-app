package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.CRUD.OrdenCRUD;
import com.malu.backend.Domain.Repositories.OrderRepo;
import com.malu.backend.DataBase.Entities.Orden;
import com.malu.backend.DataBase.Mappers.OrderMapper;
import com.malu.backend.Domain.DTO.OrderDTO;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrdenRepository implements OrderRepo{
  @Autowired
  private OrdenCRUD ordenCRUD;
  @Autowired
  private OrderMapper mapper;

  @Override
  public Optional<List<OrderDTO>> getAll(){
    List<Orden> ordenes = (List<Orden>) ordenCRUD.findAll();
    List<OrderDTO> orders = mapper.toOrdersDTOs(ordenes);
    return Optional.of(orders);
  }

  @Override
  public Optional<OrderDTO> getOrderById(int id){
    Orden orden = ordenCRUD.findById(id).get();
    OrderDTO order = mapper.toOrderDTO(orden);
    return Optional.of(order);
  }

  @Override
  public OrderDTO save(OrderDTO orderDTO){
    Orden orden = mapper.toOrden(orderDTO);
    Orden ordenSaved = ordenCRUD.save(orden);
    return mapper.toOrderDTO(ordenSaved);
  }

  @Override
  public Optional<OrderDTO> deleteById(int id){
    Optional<OrderDTO> order = getOrderById(id);
    if (order.isPresent()) {
      ordenCRUD.deleteById(id);
      return order;
    }
    return Optional.empty();
  }

  @Override
  public Optional<List<OrderDTO>> getByUserId(int userId){
    List<Orden> ordenes = (List<Orden>) ordenCRUD.findByIdUsuario(userId);
    List<OrderDTO> orders = mapper.toOrdersDTOs(ordenes);
    return Optional.of(orders);
  }

  @Override
  public Optional<List<OrderDTO>> getByStatus(String status){
    List<Orden> ordenes = (List<Orden>) ordenCRUD.findByEstatus(status);
    List<OrderDTO> orders = mapper.toOrdersDTOs(ordenes);
    return Optional.of(orders);
  }

  @Override
  public Optional<List<OrderDTO>> getByDate(String date){
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    Date parsedDate = null;
    try {
      parsedDate = dateFormat.parse(date);
    } catch (ParseException e) {
      e.printStackTrace();
    }
    List<Orden> ordenes = (List<Orden>) ordenCRUD.findByFecha(parsedDate);
    List<OrderDTO> orders = mapper.toOrdersDTOs(ordenes);
    return Optional.of(orders);
  }

  @Override
  public Optional<OrderDTO> updateStatusById(int id, String status){
    Optional<Orden> order = ordenCRUD.findById(id);
    if (order.isPresent()) {
      Orden orderToUpdate = order.get();
      orderToUpdate.setEstatus(status);
      return Optional.of(mapper.toOrderDTO(ordenCRUD.save(orderToUpdate)));
    }
    return Optional.empty();
  }
}
