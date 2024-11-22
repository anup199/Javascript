function gameStart(choice)
{
    const messageDialog = document.getElementById('message')
    const Options_me = document.querySelector('.options')

    Options_me.innerHTML = "";

    if(choice==="left")
    {
        messageDialog.textContent = "You are going in the wrong way.Game is Over!"
        Options_me.innerHTML=`
            <button onclick="resetGame()">Play Again</button>
        `;        
    }
    else if(choice==="right")
    {
        messageDialog.textContent="Now, You have reached at the edge of the River.What do you want ?";
        Options_me.innerHTML = `
            <button onclick="gameStart('swim')">Swing to Cross The River</button>
            <button onclick="gameStart('boat_wait')">Wait for Boat to Cross the River</button>
        `;   
    }
    else if(choice === 'swim')
    {
        messageDialog.textContent="You have been Attacked by Crocodile.Your Game is Over!"
        Options_me.innerHTML=`
        <button onclick="resetGame()">Play Again</button>
        `;
    }
    else if(choice==='boat_wait')
    {
        messageDialog.textContent="Hurrahhh..!, You have Cross the River Successfully.Now You have Three Doors Choose one ?";
        Options_me.innerHTML = `
            <button onclick="gameStart('red')">Red</button>
            <button onclick="gameStart('blue')">Blue</button>
            <button onclick="gameStart('yellow')">Yellow</button>
        `; 
    }
    else if(choice === 'red')
    {
        messageDialog.textContent = "Ohhh... NOoo..., Room Full of Fire. Your Game Is Over!";
        Options_me.innerHTML=`
        <button onclick="resetGame()">Play Again</button>
        `;
    }
    else if(choice === 'blue')
    {
        messageDialog.textContent = "Ohhh... Shit.., Room Full of Beasts. Your Game Is Over!";
        Options_me.innerHTML=`
        <button onclick="resetGame()">Play Again</button>
        `;
    }
    else if(choice === 'yellow')
    {
        messageDialog.textContent = "Hurraahhh.... You have Win";
        Options_me.innerHTML=`
        <button onclick="resetGame()">Play Again</button>
        `;
    }
    
}


// To Replay the Game
function resetGame()
{
    document.getElementById('message').textContent="You are standing at a crossroad. There are two paths: one leads into the forest, the other into the mountains. What do you do?"

    document.querySelector('.options').innerHTML=`
            <button onclick="gameStart('left')">Take the Left path</button>
            <button onclick="gameStart('right')">Take the Right path</button>
    `;
}