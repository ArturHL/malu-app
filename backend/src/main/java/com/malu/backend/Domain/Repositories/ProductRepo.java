package com.malu.backend.Domain.Repositories;

import java.util.Optional;
import java.util.List;

import com.malu.backend.Domain.DTO.ProductDTO;

public interface ProductRepo {
  Optional<List<ProductDTO>> getAll();
  Optional<ProductDTO> getProductById(int id);
  Optional<List<ProductDTO>> getByCategoryId(int CategoryId);
  ProductDTO save(ProductDTO productDTO);
  Optional<ProductDTO> deleteById(int id);
  Optional<ProductDTO> updateById(int id, ProductDTO productDTO);
}
