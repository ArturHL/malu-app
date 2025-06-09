package com.malu.backend.DataBase.CRUD;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.ImagenesProducto;

public interface ImagenesProductoCRUD extends CrudRepository<ImagenesProducto, Integer>{
  
  List<ImagenesProducto> findByIdProducto(int id);

}
