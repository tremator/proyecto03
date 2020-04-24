


var arrayUsuarios = new Array();
var archivotxt = new XMLHttpRequest();
var path = '../usuarios.txt';
archivotxt.open("GET",path,false);
archivotxt.send(null);
var data = archivotxt.responseText.split(',');

for (let i = 0; i < data.length; i++) {
    arrayUsuarios.push(data[i].split(':'));
    
}

function login(){
    var user = document.getElementById('userLogin').value;
    var password = document.getElementById('loginPassword').value;
    for (let i = 0; i < arrayUsuarios.length; i++) {
        
        if(user==arrayUsuarios[i][0] && password==arrayUsuarios[i][1]){
            sessionStorage.setItem('user',user);
            sessionStorage.setItem('login','true');
            location.replace('../toDo.html');
            break
        }else if(sessionStorage.getItem(user).length>0){
            if(password == sessionStorage.getItem(user)){
                sessionStorage.setItem('user',user);
                sessionStorage.setItem('login','true');
                location.replace('../toDo.html');
                break
            }
        }
        
    }
}




document.getElementById('loginButton').addEventListener('click',function(){
    login();
})

