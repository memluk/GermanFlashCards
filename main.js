let wordObject = {
    eng: '',
    ger: '',
    type: '',
    color: ''
}

let words = [
    { eng: 'money',     ger: '(das) Geld',  type: 'noun',       color: '#00FF00'},
    { eng: 'to go',     ger: 'gehen',       type: 'verb',       color: '#00FFFF'},
    { eng: 'yellow',    ger: 'gelb',        type: 'adjective',  color: '#FF8C00'},
    { eng: 'quickly',   ger: 'schnell',     type: 'adverb',     color: '#0000FF'}
];

function addNewCard (){
    let eng = document.getElementById('inputLayer');
    let ger = document.getElementById('inputCover');
    let wordType = document.getElementById('inputType');
    wordObject.eng = eng.value;
    wordObject.ger = ger.value;
    wordObject.type = wordType.value;

  if(wordObject.type === 'noun'){
      wordObject.color = '#00FF00';
    } else if(wordObject.type === 'verb'){
      wordObject.color = '#00FFFF';
    } else if(wordObject.type === 'adjective'){
      wordObject.color = '#FF8C00';
    } else if(wordObject.type === 'adverb'){
      wordObject.color = '#0000FF';
    }
  
  words.push(wordObject);
  console.log(wordObject)
  eng.value = "";
  ger.value = "";
  wordType.value = "";
}

function showNewCard(){
    let num = Math.floor(Math.random()*words.length);
    wordObject.eng = words[num].eng;
    wordObject.ger = words[num].ger;
    wordObject.type = words[num].type;
    wordObject.color = words[num].color;

    let list = document.getElementById('wordList');
    let card = createCardDiv(wordObject);
    list.appendChild(card);
    console.log(num);
}

function createCardDiv(opt){
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let layer = createLayerDiv(opt.eng, opt.type);
    newCard.appendChild(layer);

    let cover = createCoverDiv(opt.ger, opt.color);
    newCard.appendChild(cover);
    return newCard;
}

function createLayerDiv(text, type){
    layer = document.createElement('div');
    layer.classList.add('fillParent');
    layer.classList.add('layer');
    layer.textContent = text + "   (" + type + ")";
    layer.style.backgroundColor = '#808080';
                
    layer.onclick = function(){
        if(cover.style.left === '100%'){ 
            cover.style.left = '';
        } else { 
            cover.style.left = '100%';
        }
    }

    return layer;
}

function createCoverDiv(text, color){
    cover = document.createElement('div');
    cover.classList.add('fillParent');
    cover.classList.add('cover');
    cover.textContent = text;
    cover.style.backgroundColor = color;

    cover.onclick = function(){
        if(cover.style.left === '100%'){ 
            cover.style.left = '';
        } else { 
            cover.style.left = '100%';
        }
    }

    return cover;
}
