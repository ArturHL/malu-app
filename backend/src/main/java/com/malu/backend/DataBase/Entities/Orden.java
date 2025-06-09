package com.malu.backend.DataBase.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "ordenes")
public class Orden {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_orden")
  private Integer idOrden;

  @Column(name = "id_usuario")
  private Integer idUsuario;

  private Date fecha;

  private Integer total;

  private String estatus;

  @Column(name = "direccion_id")
  private Integer direccionId;

  // Relations

  @ManyToOne
  @JoinColumn(name = "id_usuario", insertable = false, updatable = false)
  private Usuario usuarioOrden;

  @OneToMany(mappedBy = "ordenProducto")
  private List<ProductosOrden> productosOrden;

  @ManyToOne
  @JoinColumn(name = "direccion_id", insertable = false, updatable = false)
  private Direccion direccionOrden;

  // Getters and Setters

  public Integer getIdOrden() {
    return idOrden;
  }

  public void setIdOrden(Integer idOrden) {
    this.idOrden = idOrden;
  }

  public String getFecha() {
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
    return formatter.format(this.fecha);
  }

  public void setFecha(String fecha) {
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
    try {
      Date date = formatter.parse(fecha);
      this.fecha = date;
    } catch (ParseException e) {
      e.printStackTrace();
    }
  }

  public Integer getTotal() {
    return total;
  }

  public void setTotal(Integer total) {
    this.total = total;
  }

  public String getEstatus() {
    return estatus;
  }

  public void setEstatus(String estatus) {
    this.estatus = estatus;
  }

  public Integer getIdUsuario() {
    return idUsuario;
  }

  public void setIdUsuario(Integer idUsuario) {
    this.idUsuario = idUsuario;
  }

  public Integer getDireccionId() {
    return direccionId;
  }

  public void setDireccionId(Integer direccion_id) {
    this.direccionId = direccion_id;
  }
  
}
