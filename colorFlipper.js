const colors=['green','red','rgba(120,110,117)','#FFD733','#33FFF3','#7F48C1'];
const btn=document.getElementById('btn');

const color=document.querySelector('.color');

btn.addEventListener("click", function(){
    // console.log(document.body);
    // get random this.nodeName. btwn 0-3
    const randomNumber=getRandom();
    console.log(randomNumber)
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}