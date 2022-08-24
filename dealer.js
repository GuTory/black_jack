import { Card } from "./card.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

export class Dealer extends Player{
    Decks;
    LastPicked;

    /**
     * konstruktor
     * @param {*} table asztal ahol játszik
     * @param {*} numberOfDecks paklik száma
     */
    constructor(table, numberOfDecks){
        super(table, "Osztó");
        this.Decks = new Array();
        this.LastPicked = 0;
        for(var i=0; i < numberOfDecks; i++){
            var newDeck = new Deck();
            this.Decks.push(newDeck);
        }
    }

    /**
     * A dealer kivesz egy kártyát a pakliból és visszaadja
     * @returns kártya
     */
    get = () => {
        this.LastPicked = Math.floor(Math.random() * (this.Decks.length));
        if(this.Decks[this.LastPicked].length === 0){
            return this.Decks[this.LastPicked].Recreate();
        }
        return this.Decks[this.LastPicked].Pop();
    }

    /**
     * újratöltés és újrakeverés
     */
    restart = () => {
        for(var i=0; i < numberOfDecks; i++){
            Deck(this.Decks[i]).Recreate();
        }
    }

    /**
     * Dealer paklijába kerül egy kártya: Soft 17
     * @param {*} card 
     */
    addCard = (card) => {
        if(this.valueOfDeck() < 17 ){
            this.Cards.push(card);
            return card;
        } else {
            return null;
        }
    }
}