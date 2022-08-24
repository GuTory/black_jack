import {Card} from "./card.js";
import { Dealer } from "./dealer.js";
import { Player } from "./player.js";
import { Table } from "./table.js";

var table, player;

/**
 * új játék eseménykezelés
 * @type {Element}
 */
var newgamebutton = document.querySelector('#newgame');
newgamebutton.addEventListener('click', newgame);

/**
 * kártya húzás eseménykezelés
 * @type {Element}
 */
var pullbutton = document.querySelector('#pull');
pullbutton.addEventListener('click', pull);

/**
 * eredményhirdetés eseménykezelés
 * @type {Element}
 */
var holdbutton = document.querySelector( '#hold');
holdbutton.addEventListener('click', hold);

/**
 * új játék függvénye
 */
function newgame(){
    var name = prompt("Hogy hívnak?");
    if(name === null) return;
    while(name ===  "" ){
        name = prompt("Hogy hívnak? Légyszíves ne hagy üresen!");
        console.log(name === "");
    }
    table = new Table();
    player = new Player(table, name);
    table.dealer.Points = 0;
    updatePoints();
    table.addPlayer(player);
    table.IsPlaying = true;
    removeAllElements('.image');
    //console.log("új játék kezdődött");
}

/**
 * húzás függvénye
 */
function pull(){
    let card = table.pull(player);
    let element = showCard(card);
    document.querySelector('#playercontainer').append(element);

    card = table.pull(table.dealer);

    if(card !== null){
        element = showCard(card);
        document.querySelector('#dealercontainer').append(element);
    }
}

/**
 * pakli tartása
 */
function hold(){
    if(table.IsPlaying){

        let card = table.pull(table.dealer);
        console.log(card);
        while (card !== null && table.dealer.valueOfDeck() < 17){

            // az osztó is húz!
            card = table.pull(table.dealer);
            console.log(card);
            let element = showCard(card);
            document.querySelector('#dealercontainer').append(element);
        }
        table.stop(player);
        table.IsPlaying = false;
        removeAllElements('.image');
        updatePoints();
    }
}

/**
 * kártya megjelenítés segédfüggvény
 * @param card
 * @returns {HTMLImageElement}
 */
function showCard(card){
    let imageelement = document.createElement('img');
    imageelement.classList.add('image');
    imageelement.src = card.PictureSource;
    return imageelement;
}

/**
 * elemek eltüntetése új játék kezdetén
 * @param selector
 */
function removeAllElements(selector){
    document.querySelectorAll(selector).forEach(e => e.remove());
}

/**
 * Pontok frissítése
 */
function updatePoints(){
    var playertable = document.querySelector("#player");
    playertable.innerHTML = player.Name + '<br>' + player.Points;

    var dealertable = document.querySelector("#house");
    dealertable.innerHTML = table.dealer.Name + '<br>' + table.dealer.Points;
}

// TODO: amíg nem indult játék addíg elérhetetlen kell legyen az alsó két gomb -> új osztálystílus
// TODO: 16 alatt elvileg nem lehet kilépni