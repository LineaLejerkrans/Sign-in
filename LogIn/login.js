let email2= document.getElementById('email2')
let pw2 = document.getElementById('pwd2')
 
let email1= document.getElementById('email1')
let pw1 = document.getElementById('pwd1')
 
 
function store(){
    if (localStorage.getItem(email2.value)){ // if the email you are trying to sign up with already exist in the storage 
        alert("You're already logged in") // this will show and the rest of the function won't run
        return;
    }
    let person = { // store the email and the password in an object
        'email': email2.value,
        'password': pw2.value
    };
 
    localStorage.setItem(email2.value, JSON.stringify(person)) // save the object with the email as its key, and the value as an object but you have to give the object the type of a JSON string
}
 
function check(){
    event.preventDefault(); // prevent it from reloading
    
    let storeObj = JSON.parse(localStorage.getItem(email1.value)); // get the object from the storage and put it in a variable, but it also needs to be converted to a javascript object
    
    if (!storeObj){ // if the variable is empty means the getItem function couldn't find a key with the email you typed in 
        alert("Email doesn't exist")
        return; // if the email is wrong the function will end here 
    }
 
    if(storeObj.password === pw1.value){ // if the email is correct you want to check the password 
        alert("You're logged in"); 
        return;
    }
 
    alert("Wrong password"); // if the email is right but the password is wrong this will be printed 
}