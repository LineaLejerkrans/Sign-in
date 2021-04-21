let email2= document.getElementById('email2')
let pw2 = document.getElementById('pwd2')
 
let email1= document.getElementById('email1')
let pw1 = document.getElementById('pwd1')
 
 
function store(){
    let person = { // store the email and the password in an object
        'email': email2.value,
        'password': pw2.value
    };
 
    localStorage.setItem(email2.value, JSON.stringify(person)) // save the object with the email as its key, but you have to give the object the type of JSON string
 
    console.log(person)
}
 
function check(){
    event.preventDefault(); // prevent it from reloading
    
    let storeObj = JSON.parse(localStorage.getItem(email1.value)); // get the object from the storage and put it in a variable, but it needs to be parsed 
    
    if (!storeObj){ // if the variable is empty means the getItem function couldn't find a key with the email you typed in 
        alert("Email doesn't exist")
        return; // if the email is wrong the function will end here 
    }
 
    console.log(storeObj.email);
 
    if(storeObj.password === pw1.value){ // if the email is correct you want to check the password 
        alert("You're logged in"); 
        return;
    }
 
    alert("Wrong password"); // if the email is right but the password is wrong this will be printed 
}
 

