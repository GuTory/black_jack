import { Player } from "./player.js";
import { Deck } from "./deck.js";
import { Dealer } from "./dealer.js";
import { Card } from "./card.js";

export class Table{

    /**
     * Osztó, nála van a pakli
     */
    dealer;

    /**
     * Játékos
     */
    player;

    /**
     * konstruktor
     */
    constructor(){
        this.dealer = new Dealer(this, 8);
    }
    
    /**
     * Játékosok hozzáadása
     * @param {*} player 
     */
    addPlayer = (pl) => {
        this.player = pl;
    }

    /**
     * Kártya húzása
     * @param {*} player a játékos, aki húzott
     */
    pull = (player) => {
        let cardPulled = this.dealer.get();
        player.addCard(cardPulled);
    }

    /**
     * játék megállítása, eredményhirdetés
     */
    stop = () => {

    }
}