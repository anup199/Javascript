
// Element Creation
let heading1 = document.createElement('h1')


// to give id to the created heading
heading1.id = "main_heading"

// to give class to the created heading
heading1.className = "main_heading_class"

// to provide css to the created heading
heading1.style.color = "red"
heading1.style.fontSize = "50px"
heading1.style.border="2px solid green"


// creating a div 
let box1 = document.createElement('div')

// adding css to the div
box1.style.height = "200px"
box1.style.border="2px solid blue"

// adding div into the body
document.body.appendChild(box1)



// adding content to the created heading
heading1.textContent= "Hello"

// adding the created heading to the body of the webpage
document.body.appendChild(heading1)

// adding the created heading to the div
// adding heading into the div
// box1.appendChild(heading1)
box1.before(heading1)


// before -->This add the heading before the div in the dom tree
// after     -->This add the heading after the div in the dom tree
// appendChild -->This add the heading at the end of the div in the dom tree






console.log(heading1);
