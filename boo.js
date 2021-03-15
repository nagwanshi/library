// import fieldSet from "form.js";

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read ? "Read" : "Not Read Yet!";
    }

    info(){
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${status} `
    }
}






// const chamberOfSecrets = new Book("Harry Potter: Chamber of Secrets", "J. K. Rolling", 456, "false");

// const azkban = new Book("Harry Potter: Prisoner of Azkaban", "J. K. Rolling", 456, "false");

// const stone = new Book("Harry Potter: Philospher's Stone", "J. K. Rolling", 456, "false");

// const prince= new Book("Harry Potter: Half Blood Prince", "J. K. Rolling", 456, "false");

// const books = [chamberOfSecrets];



export default Book;



