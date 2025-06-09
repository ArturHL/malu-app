package com.malu.backend.Domain.DTO;

public class ProductImgDTO {
  private Integer id;

  private Integer idProduct;

  private String url;

  // Getters and Setters

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getIdProduct() {
    return idProduct;
  }

  public void setIdProduct(Integer idProduct) {
    this.idProduct = idProduct;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

}
