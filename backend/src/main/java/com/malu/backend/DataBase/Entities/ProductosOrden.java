package com.malu.backend.DataBase.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos_orden")
public class ProductosOrden {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_productos_orden")
  private Integer idProductosOrden;
  
  @Column(name = "id_orden")
  private Integer idOrden;

  @Column(name = "id_producto")
  private Integer idProducto;

  private String comentario;

  private Integer unidades;

  // Relations

  @ManyToOne
  @JoinColumn(name = "id_orden", insertable = false, updatable = false)
  private Orden ordenProducto;

  @ManyToOne
  @JoinColumn(name = "id_producto", insertable = false, updatable = false)
  private Producto productoOrden;

  // Getters and Setters
  public Integer getIdProductosOrden() {
    return idProductosOrden;
  }

  public void setIdProductosOrden(Integer idProductosOrden) {
    this.idProductosOrden = idProductosOrden;
  }

  public Integer getIdOrden() {
    return idOrden;
  }

  public void setIdOrden(Integer idOrden) {
    this.idOrden = idOrden;
  }

  public Integer getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(Integer idProducto) {
    this.idProducto = idProducto;
  }

  public String getComentario() {
    return comentario;
  }

  public void setComentario(String comentario) {
    this.comentario = comentario;
  }

  public Integer getUnidades() {
    return unidades;
  }

  public void setUnidades(Integer unidades) {
    this.unidades = unidades;
  }
}
