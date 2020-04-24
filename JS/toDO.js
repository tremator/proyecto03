

var user = sessionStorage.getItem('user');
var login = sessionStorage.getItem('login')


$(document).ready(function(){
  if(login !='true'){
    alert('no estas logeado');
    location.replace('../Login.html')
  }
})

var div =$('nav').append('<div id="nombreUser">')
$('#nombreUser').append('<h3>'+user+'</h3>')

 


var counter = 0;

$("#btn").click(function () {
    var li = document.createElement("li");
    var input = $("#add").val();
    var p = document.createElement('p');
    p.contentEditable = true;
    p.textContent = input;
    var button = document.createElement("button");
    button.id ="clean" ;
    button.textContent = "X";
    li.append(p);
    counter = counter + 1;
    li.id = counter;
    li.draggable = true;
    li.addEventListener("dragstart",function(){drag(event)})
    
    li.append(button);
    $("#list").append(li);

});

$('ul').on('click','li', function(event){
    event.preventDefault();
    console.log(event.currentTarget.id); // This is to get the element id, for future cases.
    
    $(this).css("background-color", "#8003fc");
    $(this).css("list-style-image","url(https://icon-icons.com/icons2/2312/PNG/32/accept_allow_admit_okay_icon_141954.png)")
})
$('ul').on('click', 'button', function (event) {
    event.preventDefault();
    $(this).parent().remove();
})

document.getElementById('btnLogOut').addEventListener('click',function(){
  LogOut();
})
document.getElementById('btnAbout').addEventListener('click',function(){
  AboutUs();
});

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
  localStorage.setItem('object',ev.target.id);
  console.log(ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = localStorage.getItem('object')
  console.log(data);
  ev.target.append(document.getElementById(data));
}
function LogOut(){
  sessionStorage.setItem('login','false');
  sessionStorage.setItem('user','');
  location.replace('../Login.html');
}
function AboutUs(){
  location.replace('../aboutus.html');
}