/*
Cree un constructor que tenga dos propiedades :Book

Título
Autor
y dos métodos :

Un método llamado getTitleque devuelve: "Title: "+ el título de la instancia.
Un método llamado getAuthorque devuelve: "Author: "+ el autor de la instancia.
e instancia este constructor creando 3 nuevos libros:

Orgullo y Prejuicio - Jane Austen ( PP )
Hamlet - William Shakespeare ( H )
Guerra y paz - León Tolstoi ( WP )
El nombre de las nuevas instancias de objeto PP , H y WP , respectivamente.

Por ejemplo, si instalé el siguiente libro usando esta Bookfunción constructora:

Harry Potter - J.K. Rowling (HP)
*/

class Book {

    constructor (title,author){
        this.title=title;
        this.author=author;

    }
    
    getTitle(){
        return `Title: ${this.title}`
    }

    getAuthor(){
        return `Author: ${this.author} `
    }
}


let book01=new Book("Sapiens","Yuval Noah Harari")

console.log(book01.getTitle())
console.log(book01.getAuthor())