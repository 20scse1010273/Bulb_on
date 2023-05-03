function bulb_on(){
    document.getElementById('bulb').src='https://i.postimg.cc/6QyTynzr/bulb-on.png';
    document.querySelector('body').style.background="linear-gradient(to bottom right,#ff000,#00ff00)";
    
    // document.querySelector('body').style.linearGra;
    const xx = document.getElementById("myBtn");
    if(xx.classList.contains('container'))
    {
        xx.classList.remove('container');
        xx.classList.add('container1');
    }
    else{
        xx.classList.add('container');
    }


}
function bulb_off(){
    document.getElementById('bulb').src='https://i.postimg.cc/KjK1wL3c/bulb-off.png';
    const xx = document.getElementById("myBtn");
    if(xx.classList.contains('container1'))
    {
        xx.classList.remove('container1');
        xx.classList.add('container');
    }
    else{
        xx.classList.add('container');
    }
    // document.querySelector('body').style.backgroundColor="black";

}