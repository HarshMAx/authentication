let register = () => {
    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("email").value;
    let Pass = document.getElementById("password").value;
    let Gender = document.getElementById("zender").required;
    let Gender1 = document.getElementById("zender1").required;
    let store = JSON.parse(localStorage.getItem("items"));

    if(Name == ""){
        alert("Plz feel the name.. 😕😕");
    }else if(Email == ""){
        alert("Plz feel the email.. 😕😕");
    }else if(Pass == ""){
        alert("Plz feel the Password.. 😕😕");
    }else if(Gender == ""){
        alert("Plz select Gender.. 😕😕");
    }else if(Gender1 == ""){
        alert("Plz select Gender.. 😕😕");
    }else{
        alert("Register Success.. 😀")
        window.location = "login.html";
    }

    if(store == null){
        store = [];
    }
    store.push({
        Name : Name,
        email:Email,
        pass:Pass,
        gender:Gender
    })

    localStorage.setItem("items",JSON.stringify(store));
    console.log(JSON.parse(localStorage.getItem("items")));
    console.log(store);



    
}

let Login = () => {

    let lName = document.getElementById("lName").value;
    let lEmail = document.getElementById("lemail").value;
    let lPass = document.getElementById("lpassword").value;
    let login = JSON.parse(localStorage.getItem("items"))

    if(lName == ""){
        alert("Plz feel the name.. 😕😕");
    }else if(lEmail == ""){
        alert("Plz feel the email.. 😕😕");
    }else if(lPass == ""){
        alert("Plz feel the Password.. 😕😕");
    }else {

        let match = login.filter(function(e){
                return e.Name == lName && e.email == lEmail && e.pass == lPass;
                
        });

        if(match.length == 0){
            alert("please enter valid details..😕😕")
            
        }else{
            alert("Login Successfull.. 😀😀")
        }
    }
}