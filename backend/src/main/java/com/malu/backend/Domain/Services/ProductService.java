package com.malu.backend.Domain.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.malu.backend.Domain.Repositories.ProductRepo;
import com.malu.backend.Domain.DTO.ProductDTO;

@Service
public class ProductService {
  @Autowired
  private ProductRepo productRepo;

  public Optional<List<ProductDTO>> getAll(){
    return productRepo.getAll();
  }

  public Optional<ProductDTO> getProductById(int id){
    return productRepo.getProductById(id);
  }

  public Optional<List<ProductDTO>> getByCategoryId(int CategoryId){
    return productRepo.getByCategoryId(CategoryId);
  }

  public ProductDTO save(ProductDTO productDTO){
    return productRepo.save(productDTO);
  }

  public Optional<ProductDTO> deleteById(int id){
    return productRepo.deleteById(id);
  }

  public Optional<ProductDTO> updateById(int id, ProductDTO productDTO){
    return productRepo.updateById(id, productDTO);
  }
}
