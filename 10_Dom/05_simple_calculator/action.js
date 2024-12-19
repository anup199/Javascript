function add()
{
    let dig1 = parseInt(document.getElementById('digit1').value);
    let dig2 =parseInt(document.getElementById('digit2').value);

    let ans = document.getElementById('answer')


    let sum = dig1+dig2;

    ans.innerText =sum;

}


let btn  = document.getElementById('add')

btn.addEventListener('click',()=>{
    add()
})