package com.malu.backend.Domain.DTO;

public class CategoryImgDTO {
  private Integer id;

  private Integer idCategory;

  private String url;

  // Getters and Setters

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getIdCategory() {
    return idCategory;
  }

  public void setIdCategory(Integer idCategory) {
    this.idCategory = idCategory;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
  
}
