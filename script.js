//Hello
function textChanger(){
    document.getElementById("mytext").innerHTML=random()
}
function textChanger2(){
    document.getElementById("mytext").innerHTML="Hello"
}
function off(){
    document.getElementById("light").src="https://codehs.com/uploads/387d8ffbbf72beeaa21ab694fef1cc09"
}
function on(){
    document.getElementById("light").src="https://codehs.com/uploads/23f51d9c8397a764e1d50dd31dd261c7"
}

function random() {
    return Math.random()*100
}

function showName(){
    var firstName= document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    if(firstName == "Shyam" && lastName == "Thangaraj") {
        alert("Hey! That's my name")
    } else if (firstName == "Hasini" && lastName == "Thangaraj") {
        alert("Hey! That's my sister's name")
    } else {
        alert("Hello my name is " + firstName + " " + lastName);
    }

}

var num = 0
function addNumber(){
    num += 1
    document.getElementById("counterLabel").innerHTML=num
}

function colorUpdate(){
    var color = document.getElementById("colorChanger").value
    document.body.style.backgroundColor = color
    window.sessionStorage.setItem("color", color)
}

function load(){
    document.body.style.backgroundColor = window.sessionStorage.getItem("color")
}