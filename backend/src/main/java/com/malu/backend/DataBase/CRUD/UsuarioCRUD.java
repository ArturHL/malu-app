package com.malu.backend.DataBase.CRUD;

import org.springframework.data.repository.CrudRepository;

import com.malu.backend.DataBase.Entities.Usuario;

public interface UsuarioCRUD extends CrudRepository<Usuario, Integer>{
  
  Usuario findByNombre(String nombre);

  Usuario findByIdUsuarios(int id);

  Usuario findByCorreo(String correo);

}
