export class Card {
    /**
     * szimbólum (2..10 v JQKA)
     */
    Symbol;

    /**
     * Típus
     */
    Suit;

    /**
     *  Szín
     */
    Color;

    /**
     * kép forrása
     */
    PictureSource;

    /**
     * érték
     */
    Value;
    
    /**
     * Paraméterek sorrendje
     * @param {*} params : Szimbólum (szám vagy betű), kategória (kőr, káró stb), szín
     */
    constructor(sym, suit){
        try{
            this.Symbol = sym;
            this.Suit = suit;
            this.Color = (this.Suit === 'H' || this.Suit==='D') ? 'Red' : 'Black';

            this.PictureSource = './cards/' + this.Symbol + this.Suit + '.svg';
            if(this.Symbol === 'J' || this.Symbol === 'Q' || this.Symbol === 'K'){
                this.Value = 10;
            } else if (this.Symbol === 'A'){
                this.Value = [11, 1]; //erre figyelni kell majd a játékos deckjében
            } else {
                try{
                    this.Value = parseInt(this.Symbol);
                } catch(exception){
                    throw console.error('bad parameters');
                }
            }
        } catch (exception){
            throw console.error('bad parameters');
        }
    }
}