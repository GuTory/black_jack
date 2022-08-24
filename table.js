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
     * megy-e éppen a kör
     */
    IsPlaying;

    /**
     * Játékos
     */
    player;

    /**
     * konstruktor
     */
    constructor(){
        this.dealer = new Dealer(this, 8);
        this.IsPlaying = true;
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
        if(this.IsPlaying === false) {
            player.Cards = [];
            this.dealer.Cards = [];
            this.IsPlaying = true;
        }
        let card = this.dealer.get();
        card = player.addCard(card);
        return card;
    }

    /**
     * játék megállítása, eredményhirdetés
     */
    stop = (player) => {
        let message;
        console.log(player.valueOfDeck() + ' ' + this.dealer.valueOfDeck());
        if(player.valueOfDeck() === this.dealer.valueOfDeck()) {
            message = 'Döntetlen!';
        } else if(player.valueOfDeck() > 21 && this.dealer.valueOfDeck() > 21) {
            message = 'Döntetlen!';
        } else if(player.valueOfDeck() > 21 && player.valueOfDeck() < this.dealer.valueOfDeck()){
            this.dealer.Points++
            message = 'Az osztó nyert!';
        } else {
            player.Points++;
            message = player.Name + ' nyert!';
        }
        this.IsPlaying = false;
        alert(message);
    }
}