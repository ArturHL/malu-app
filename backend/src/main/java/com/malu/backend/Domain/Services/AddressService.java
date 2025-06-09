package com.malu.backend.Domain.Services;

import org.springframework.stereotype.Service;

import com.malu.backend.Domain.Repositories.AddressRepo;
import com.malu.backend.Domain.DTO.AddressDTO;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AddressService {
  @Autowired
  private AddressRepo addressRepo;

  public Optional<List<AddressDTO>> getAll(){
    return addressRepo.getAll();
  }

  public Optional<List<AddressDTO>> getAllByUserId(int UserId){
    return addressRepo.getAllByUserId(UserId);
  }

  public Optional<AddressDTO> getAddressById(int id){
    return addressRepo.getAddressById(id);
  }

  public AddressDTO save(AddressDTO addressDTO){
    return addressRepo.save(addressDTO);
  }

  public Optional<AddressDTO> deleteById(int id){
    return addressRepo.deleteById(id);
  }

  public Optional<AddressDTO> updateById(int id, AddressDTO addressDTO){
    return addressRepo.updateById(id, addressDTO);
  }

}
