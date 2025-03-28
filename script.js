document.getElementById('registrationform').addEventListener('submit', function (event) {
    event.preventDefault();
  
  // Write your code below
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('number').value;
    const district = document.getElementById('district').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    const age = document.getElementById('age').value;
    const dateofbirth = document.getElementById('dob').value;
    const bloodgroup = document.getElementById('message').value;
    const father_name = document.getElementById('fathername').value;
    const mother_name = document.getElementById('mothername').value;
    
  
    alert(`Your registration was successful!\n\n
    Name: ${name}\n
    Email: ${email}\n
    Number: ${phonenumber}\n
    District: ${district}\n
    Address: ${address}\n
    Gender: ${gender}\n
    Password: ${password}\n
    Message: ${message}\n
    Age: ${age}\n
    Date Of Birth: ${dateofbirth}\n
    Blood Group: ${bloodgroup}\n
    Father Name: ${father_name}\n
    Mother Name: ${mother_name}\n
    `);
  });
  
  