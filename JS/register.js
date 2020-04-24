function Register(){

    
    var user = document.getElementById('userRegister').value;
    var password = document.getElementById('passwordRegister').value;
    var validacion = verificar(user,password);
    if(validacion){
        alert('NO PERRO')
    }else{
        sessionStorage.setItem(user,password);
        location.replace('../Login.html');
    }
    
}

document.getElementById('registerButton').addEventListener('click',function(){
    Register();
})


function verificar(user,password){
    var validacion = false;
    if(user.search('SELECT') != -1 || password.search('SELECT') != -1 ){
        validacion = true
    }else if(user.search('UPDATE') != -1 || password.search('UPDATE') != -1 ){
        validacion =true;
    }else if(user.search('DELETE') != -1 || password.search('DELETE') != -1 ){
        validacion = true;
    }else if(user.search('DROP') != -1 || password.search('DROP') != -1 ){
        validacion = true;
    }


    return validacion;
}


