package com.malu.backend.Domain.DTO;

public class UserDTO {
  private Integer id;

  private String name;

  private String email;

  private String phone;

  private String password;

  private String role;

  // Getters and Setters

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

    public void setRole(String role) {
    this.role = role;
  }

  public String getRole() {
    return role;
  }

}
