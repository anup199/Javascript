let count = 0;

function increment()
{
    let val = document.getElementById('value')
    count = count+1
    val.textContent=count
}

let butn = document.getElementById('btn')

butn.addEventListener('click',()=>{
    increment()
})
