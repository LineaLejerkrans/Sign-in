let email2= document.getElementById('email2')
let pw2 = document.getElementById('pwd2')

let email1= document.getElementById('email1')
let pw1 = document.getElementById('pwd1')

let n =0;

let person;

function store(){

    person = {
        email: email2.value,
        password: pw2.value
    };

    localStorage.setItem(n, person)

    
    
    name();
    console.log(person)
}

function check(){
    event.preventDefault();

    
        let email= email1.value;
        let password= pw1.value;
   

    if(email == ){
        alert("You're signed in");
    }
}

function name(){
    n++  
}


