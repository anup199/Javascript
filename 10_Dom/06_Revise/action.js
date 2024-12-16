function change()
{
    let text = document.getElementById('head');
    text.innerText = "Okay"
    text.style.textAlign="center";
    text.style.backgroundColor="orange";
}


let btn = document.getElementById('btn')

// btn.addEventListener('click',function(){})
btn.addEventListener('click',()=>{
    change()
})