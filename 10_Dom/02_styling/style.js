// method 1
// function circle()
// {
//     let div = document.getElementById('circle')
//     div.style.border="2px solid red";
//     div.style.height="200px"
//     div.style.width="200px"
//     div.style.borderRadius="100%"
//     div.style.backgroundColor="green"

//     // div.style.cssText=`border:2px solid red;height:200px;width:200px`;
// }


// method 2
// to get the button here
let circle1 = document.getElementById('circle_btn')

// add event at button and css properties
circle1.addEventListener('click',()=>{

    let div = document.getElementById('circle')
    div.style.border="2px solid red";
    div.style.height="200px"
    div.style.width="200px"
    div.style.borderRadius="100%"
    div.style.backgroundColor="green"

})