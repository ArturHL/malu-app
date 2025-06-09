package com.malu.backend.DataBase.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "imagenes_categoria")
public class ImagenesCategoria {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_imagen_categoria")
  private Integer idImagenCategoria;

  @Column(name = "id_categoria")
  private Integer idCategoria;

  private String url;

  // Relations

  @ManyToOne
  @JoinColumn(name = "id_categoria", insertable = false, updatable = false)
  private Categoria categoriaImg;

  // Getters and Setters

  public Integer getIdImagenCategoria() {
    return idImagenCategoria;
  }

  public void setIdImagenCategoria(Integer idImagenCategoria) {
    this.idImagenCategoria = idImagenCategoria;
  }

  public Integer getIdCategoria() {
    return idCategoria;
  }

  public void setIdCategoria(Integer idCategoria) {
    this.idCategoria = idCategoria;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
}
