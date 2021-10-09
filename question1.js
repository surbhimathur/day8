class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined)
        {
            this.rating="PG";
        }
    }
}

const film= new movie("police","abc");
console.log(film);
const film2= new movie("Casino Royale","Eon Productions","PG­13");
console.log(film2);
