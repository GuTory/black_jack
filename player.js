import { Card } from "./card.js";
import { Deck } from "./deck.js";

export class Player {
    Name;
    Cards;
    Table;

    constructor(table, name){
        this.Name = name;
        this.Cards = new Array();
        this.Table = table;
    }

    addCard = (card) => {
        this.Cards.push(card);
    }

    valueOfDeck = () => {
        var sum = 0;
        var ace;
        for(var index = 0; index < this.Cards.length; index++){
            if(this.Cards[index].Symbol !== 'A'){
                sum += this.Cards[index].Value;
            } else {
                ace = this.Cards[index];
            }
        }
        var aces = this.numberOfAces();
        if(aces == 0){
            return sum;
        } else {
            (sum + ace.Value[0] + (aces-1)*ace.Value[1] > 21) 
            ? sum += ace.Value[1]+ (aces-1)*ace.Value[1] 
            : sum += ace.Value[0]+ (aces-1)*ace.Value[1];
        }
        return sum;
    }

    numberOfAces = () => {
        var num = 0;
        for(var index = 0; index < this.Cards.length; index++){
            if(this.Cards[index].Symbol === 'A'){
                num ++;
            }
        }
        return num;
    }
}