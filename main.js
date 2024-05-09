let btn=document.querySelector(`.btn1`)
let div=document.querySelector(`.div`)
let inp=document.querySelector(`.inp1`)
let form=document.querySelector(`.form`)

let son = parseInt(Math.random() * 100 + 1);
form.addEventListener(`submit`, (et)=>{
    
et.preventDefault();
let val=Number(inp.value);
inp.value=``;


if(son>val){
    div.textContent=`${val} dan kattaroq son kiriting`;  
}
else if(son===val){
    div.textContent=`To'g'ri!  ${val}`;  
}
else{
    div.textContent=`${val} dan kichikroq son kiriting`;
}
})
