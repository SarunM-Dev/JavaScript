function displayPersonalInfo(){

var ab="<form class='login-form '> <action='javascript:void(0);'><h1 class='let'>Personal Information</h1><div><div><label class='col ' for='name'>User Name</label><br> <input class='div1 ' type='text' name='username' id='nameoutput'></div><div><label class='col' for='name'>Password</label><br><input  class='div1' type='password' name='password' id='passwordoutput'></div><div><label class='col' for='name'>Dob</label><br><input  class='div1' type='text' name='dob' id='doboutput'></div><div><label class='col' for='name'>Email-ID</label><br><input  class='div1' type='text' name='email' id='emailoutput'></div><div><label class='col' 'for='name'>Gender</label><br><input  class='div1' type='text' name='address' id='genderoutput'></div><div><label class='col' for='name'>Address</label><br><input class='div1' type='text' name='address' id='addressoutpur'></div></div></form>"
document.getElementById("sam").innerHTML=ab;

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("doteofbirth").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender-male").value;
  let genderfemale = document.getElementById("gender-female").value;
  let address = document.getElementById("address").value;

  document.getElementById("nameoutput").value = username;
  document.getElementById("passwordoutput").value = password;
  document.getElementById("doboutput").value = dob;
  document.getElementById("emailoutput").value = email;
  document.getElementById("genderoutput").value = gender;
  document.getElementById("genderoutput").value = genderfemale;
  document.getElementById("addressoutpur").value = address;
}


