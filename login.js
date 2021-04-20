let email2= document.getElementById('email2')
let pw2 = document.getElementById('pwd2')

let email1= document.getElementById('email1')
let pw1 = document.getElementById('pwd1')




function store(){

    let person = {
        'email': email2.value,
        'password': pw2.value
    };


    console.log(person)
    localStorage.setItem(email2.value, JSON.stringify(person))

    
    console.log(person)
}

function check(){
    event.preventDefault();
    
    let storeObj = JSON.parse(localStorage.getItem(email1.value));
    

    if (!storeObj){
        alert("Email doesn't exist")
        return;
    }

    console.log(storeObj.email);

    if(storeObj.password === pw1.value){
        alert("You're logged in");
        return;
    }

    alert("Wrong password");
    
}




