class Registration {
    constructor(name, age, email, password) {
      this.name = name;
      this.age = age;
      this.email = email;
      this._password = password; 
    }

    get password() {
      return this._password;
    }

    set password(newPassword) {
      if (newPassword.length < 8) {
        console.error('Password must be at least 8 characters long.');
      } else {
        this._password = newPassword;
      }
    }
  
    display() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Email: ${this.email}`);
      console.log(`Password: ${this._password}`);
    }
  }

  const user = new Registration('John', 25, 'john@example.com', 'password123');
  console.log(user.password); 
  user.password = '123'; 
  user.password = 'newpassword';
  user.display();
  