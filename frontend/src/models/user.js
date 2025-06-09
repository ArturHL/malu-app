export default class User {
  constructor(id, name, email, phone, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.profileImage = '';
  }
}