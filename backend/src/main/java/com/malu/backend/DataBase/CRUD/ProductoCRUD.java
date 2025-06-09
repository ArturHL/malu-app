package com.malu.backend.DataBase.CRUD;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.Producto;

import java.util.List;

public interface ProductoCRUD extends CrudRepository<Producto, Integer>{
  
  List<Producto> findByIdCategoriaOrderByPrecioDesc(int id);

}
