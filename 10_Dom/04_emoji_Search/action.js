const emojiObject = {
    smiley: "😊",
    thumbsUp: "👍",
    heart: "❤️",
    star: "⭐",
    fire: "🔥",
    partyPopper: "🎉",
    cat: "😺",
    dog: "🐶",
    sun: "☀️",
    coffee: "☕",
    moon: "🌙",
    rainbow: "🌈",
    pizza: "🍕",
    guitar: "🎸",
    balloon: "🎈",
    crown: "👑",
    flower: "🌸",
    musicNote: "🎶",
    sunglasses: "😎",
    airplane: "✈️"
  };
  
//   console.log(emojiObject);
  



function emo_name(emojiObject)
{
    let  value = document.getElementById('search_value').value;
    let emotion = document.getElementById('emotions')
    for(let key in emojiObject)
    {
        if(key==value)
        {
            emotion.textContent = emojiObject[key];
            console.log(emojiObject[key]);
            
        }
    }
}  

let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    emo_name(emojiObject)
})