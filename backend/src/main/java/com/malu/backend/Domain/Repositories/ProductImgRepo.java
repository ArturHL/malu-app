package com.malu.backend.Domain.Repositories;

import java.util.Optional;

import com.malu.backend.Domain.DTO.ProductImgDTO;

public interface ProductImgRepo {
  Optional<ProductImgDTO> getProductImgById(int id);
  ProductImgDTO save(ProductImgDTO productImgDTO);
  Optional<ProductImgDTO> deleteByProductId(int id);
  Optional<ProductImgDTO> updateByProductId(int id, ProductImgDTO productImgDTO);
}
