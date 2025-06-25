package com.malu.backend.DataBase.Seeds;

import com.malu.backend.DataBase.Entities.Rol;
import com.malu.backend.DataBase.Repositories.RolRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RolSeeder implements CommandLineRunner {

    private final RolRepository rolRepository;

    public RolSeeder(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        seedRol("ADMIN");
        seedRol("USER");
    }

    private void seedRol(String nombre) {
        Rol existingRol = rolRepository.findByNombre(nombre);
        if (existingRol == null) {
            Rol rol = new Rol();
            rol.setNombre(nombre);
            rolRepository.save(rol);
        }
    }
}

