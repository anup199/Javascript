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
            // console.log(emojiObject[key]);
            
        }
    }
}  

let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    emo_name(emojiObject)
})


























let imo = [
    {
        "slug": "smileys-emotion",
        "subCategories": {
            "face-smiling": "😊",
            "face-affection": "🥰",
            "face-tongue": "😋",
            "face-hand": "🤚",
            "face-neutral-skeptical": "🤨",
            "face-sleepy": "😴",
            "face-unwell": "🤒",
            "face-hat": "🎩",
            "face-glasses": "👓",
            "face-concerned": "😟",
            "face-negative": "🙁",
            "face-costume": "🎭",
            "cat-face": "🐱",
            "monkey-face": "🐵",
            "emotion": "🙂"
        }        
    },
    {
        "slug": "people-body",
        "subCategories": {
            "hand-fingers-open": "✋",
            "hand-fingers-partial": "🖐️",
            "hand-single-finger": "☝️",
            "hand-fingers-closed": "✊",
            "hands": "👋",
            "hand-prop": "🖖",
            "body-parts": "🦶",
            "person": "👤",
            "person-gesture": "🙆‍♂️",
            "person-role": "👩‍⚖️",
            "person-fantasy": "🧙‍♂️",
            "person-activity": "🏃‍♀️",
            "person-sport": "🏀",
            "person-resting": "🛏️",
            "family": "👨‍👩‍👧‍👦",
            "person-symbol": "⚧"
        }        
    },
    {
        "slug": "component",
        "subCategories":{
            "skin-tone": "🏽",
            "hair-style": "💇‍♂️"
        }        
    },
    {
        "slug": "animals-nature",
        "subCategories": {
            "animal-mammal": "🐘",
            "animal-bird": "🐦",
            "animal-amphibian": "🐸",
            "animal-reptile": "🐍",
            "animal-marine": "🐠",
            "animal-bug": "🐞",
            "plant-flower": "🌸",
            "plant-other": "🌱"
        }        
    },
    {
        "slug": "food-drink",
        "subCategories": {
            "food-fruit": "🍎",
            "food-vegetable": "🥕",
            "food-prepared": "🍽️",
            "food-asian": "🍣",
            "food-marine": "🐟",
            "food-sweet": "🍰",
            "drink": "🥤",
            "dishware": "🍽️"
        }        
    }
]
console.log(imo[0].subCategories.emotion);
