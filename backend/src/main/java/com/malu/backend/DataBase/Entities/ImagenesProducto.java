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
@Table(name = "imagenes_producto")
public class ImagenesProducto {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_imagen_producto")
  private Integer idImagenProducto;

  @Column(name = "id_producto")
  private Integer idProducto;

  private String url;

  // Relations

  @ManyToOne
  @JoinColumn(name = "id_producto", insertable = false, updatable = false)
  private Producto productoImg;

  // Getters and Setters

  public Integer getIdImagenProducto() {
    return idImagenProducto;
  }

  public Integer getIdProducto() {
    return idProducto;
  }

  public String getUrl() {
    return url;
  }

  public void setIdImagenProducto(Integer idImagenProducto) {
    this.idImagenProducto = idImagenProducto;
  }

  public void setIdProducto(Integer idProducto) {
    this.idProducto = idProducto;
  }

  public void setUrl(String url) {
    this.url = url;
  }
}
