var btn=document.querySelector('#btn1');
var city=document.querySelector('#city');
btn.onclick=(event)=>{
    event.preventDefault();
    console.log(city.value);        
}
