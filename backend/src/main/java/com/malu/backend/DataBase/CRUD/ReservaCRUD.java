package com.malu.backend.DataBase.CRUD;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.Reserva;

public interface ReservaCRUD extends CrudRepository<Reserva, Integer>{

  List<Reserva> findByIdUsuario(int id);

}
