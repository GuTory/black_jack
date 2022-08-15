import {Card} from "./card.js";
import { Dealer } from "./dealer.js";
import { Player } from "./player.js";
import { Table } from "./table.js";


var asztal = new Table();
var jozsi = new Player(null, "Józsi");


asztal.addPlayer(jozsi);

asztal.pull(jozsi);
asztal.pull(asztal.dealer);
asztal.pull(jozsi);
asztal.pull(asztal.dealer);


console.log(jozsi);
console.log(jozsi.valueOfDeck());
console.log(asztal.dealer);
console.log(asztal.dealer.valueOfDeck());
