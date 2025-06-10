package com.malu.backend.DataBase.Repositories;

import com.malu.backend.DataBase.Entities.Rol;
import org.springframework.data.repository.CrudRepository;

public interface RolRepository extends CrudRepository<Rol, Integer> {
    Rol findByNombre(String nombre);
}
