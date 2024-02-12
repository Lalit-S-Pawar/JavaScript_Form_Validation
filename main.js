// Target Id and Classes:- 

let id = (id) => document.getElementById(id),
    classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form")
// let error =  document.getElementsByClassName["error"(0),"error"(1),"error"(2)]
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");



    
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        
        // if(username.value ===""){
        //     errorMsg[0].innerHTML = "Username Can't be Blank"
        //     failureIcon[0].style.opacity=1;
        //     successIcon[0].style.opacity=0;
        // }
        // else{
        //     errorMsg[0].innerHTML = ""
        //     successIcon[0].style.opacity=1;
        //     failureIcon[0].style.opacity=0;
        // }

        engine (username,0,"Username can't be Blank")
        engine (email,1,"Email can't be Blank")
        engine (password,2,"Password can't be Blank")
    });
    
    let engine = (id,serial,message) =>{
        if(id.value.trim() ===""){
            errorMsg[serial].innerHTML =message;
            failureIcon[serial].style.opacity=1;
            successIcon[serial].style.opacity=0;
        }
        else{
            errorMsg[serial].innerHTML = ""
            successIcon[serial].style.opacity=1;
            failureIcon[serial].style.opacity=0;
        }
    }
