package com.malu.backend.Domain.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.malu.backend.Domain.Repositories.UserImgRepo;
import com.malu.backend.Domain.DTO.UserImgDTO;

import java.util.Optional;

@Service
public class UserImgService {
  @Autowired
  private UserImgRepo userImgRepo;

  public Optional<UserImgDTO> getImgByUserId(int id){
    return userImgRepo.getImgByUserId(id);
  }

  public UserImgDTO save(UserImgDTO userImgDTO){
    return userImgRepo.save(userImgDTO);
  }

  public Optional<UserImgDTO> deleteByUserId(int id){
    return userImgRepo.deleteByUserId(id);
  }

  public Optional<UserImgDTO> updateByUserId(int id, UserImgDTO userImgDTO){
    return userImgRepo.updateByUserId(id, userImgDTO);
  }
}
