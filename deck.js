import { Card } from "./card.js";

export class Deck{

    /**
     * Pakliban lévő kártyák
     */
    CardList;

    /**
     * Konstruktorban létrejön az 52 kártya
     */
    constructor(){
        this.CardList = new Array();
        this.Init();
    }

    /**
     * Pakli inicializálása, és keverés
     */
    Init = () => {
        var Symbols = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        var Suits = ['S', 'D', 'C', 'H'];

        this.CardList.splice(0, this.CardList.length);
        
        for(var suitindex = 0; suitindex < Suits.length; suitindex++ ){
            for(var symbolindex = 0 ; symbolindex < Symbols.length; symbolindex++ ){
                var newCard = new Card(Symbols[symbolindex], Suits[suitindex]);
                this.CardList.push(newCard);
            }
        }
        this.Shuffle();
    }

    /**
     * Pakli keverése
     */
    Shuffle = () => {
        shuffleArray(this.CardList);
    }

    /**
     * Egy kártya kivétele
     * @returns kártya
     */
    Pop = () => {
        return this.CardList.pop();
    }

    /**
     * pakli összeszedése és újrakeverése
     */
    Recreate = () => {
        this.Init();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}