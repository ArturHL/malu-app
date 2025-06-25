package com.malu.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.malu.backend.Domain.Services.AddressService;
import com.malu.backend.Domain.DTO.AddressDTO;

@CrossOrigin
@RestController
@RequestMapping("/address")
public class AddressController {

  @Autowired
  private AddressService service;

  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/all")
  public ResponseEntity<List<AddressDTO>> getAll(){
    return new ResponseEntity<>(service.getAll().get(), HttpStatus.OK);
  }

  @PreAuthorize("#UserId == authentication.principal.id or hasRole('ADMIN')")
  @GetMapping("/{UserId}")
  public ResponseEntity<List<AddressDTO>> getAllByUserId(@PathVariable("UserId") int UserId){
    return new ResponseEntity<>(service.getAllByUserId(UserId).get(), HttpStatus.OK);
  }

  @PreAuthorize("isAuthenticated()")
  @GetMapping("/search/{id}")
  public ResponseEntity<AddressDTO> getAddressById(@PathVariable("id") int id){
    return service.getAddressById(id)
      .map(addressDTO -> new ResponseEntity<>(addressDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PreAuthorize("isAuthenticated()")
  @PostMapping("/save")
  public ResponseEntity<AddressDTO> save(@RequestBody AddressDTO addressDTO){
    return new ResponseEntity<>(service.save(addressDTO), HttpStatus.CREATED);
  }

  @PreAuthorize("@addressSecurity.hasAccessToAddress(#id)")
  @DeleteMapping("/{id}")
  public ResponseEntity<AddressDTO> deleteById(@PathVariable("id") int id){
    return service.deleteById(id)
      .map(addressDTO -> new ResponseEntity<>(addressDTO, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PreAuthorize("@addressSecurity.hasAccessToAddress(#id)")
  @PutMapping("/{id}")
  public ResponseEntity<AddressDTO> updateById(@PathVariable("id") int id, @RequestBody AddressDTO addressDTO){
    return service.updateById(id, addressDTO)
      .map(addressDTO1 -> new ResponseEntity<>(addressDTO1, HttpStatus.OK))
      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }
}

