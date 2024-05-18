
function dice(){
    var ali = Math.ceil(Math.random() *6 );

    console.log(ali);
    var img =document.getElementById("img");



if (ali === 1){
img.src = "img/1.png"
}
else if ( ali === 2){
    img.src = "img/2.png"
}
else if ( ali === 3){
    img.src = "img/3.png"
}
else if ( ali === 4){
    img.src = "img/4.png"
}
else if ( ali === 5){
    img.src = "img/5.png"
}
else{
    img.src = "img/6.png"
}


console.log(img);
}