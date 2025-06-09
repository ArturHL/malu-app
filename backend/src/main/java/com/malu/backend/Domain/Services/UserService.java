package com.malu.backend.Domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.malu.backend.Domain.DTO.UserDTO;
import com.malu.backend.Domain.Repositories.UserRepo;

@Service
public class UserService {
  @Autowired
  private UserRepo userRepo;

  public Optional<List<UserDTO>> getAll(){
    return userRepo.getAll();
  }

  public Optional<UserDTO> getUserById(int id){
    return userRepo.getUserById(id);
  }

  public UserDTO save(UserDTO userDTO){
    return userRepo.save(userDTO);
  }

  public Optional<UserDTO> deleteById(int id){
    return userRepo.deleteById(id);
  }

  public Optional<UserDTO> updateById (int id, UserDTO userDTO){
    return userRepo.updateById(id, userDTO);
  }

  public Optional<UserDTO> getUserByEmail(String email){
    return userRepo.getUserByEmail(email);
  }

}
