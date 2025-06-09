package com.malu.backend.DataBase.CRUD;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.Direccion;

public interface DireccionCRUD  extends CrudRepository<Direccion, Integer>{
  
  List<Direccion> findByIdUsuario(int id);

}
