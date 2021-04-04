let library = [
    {
        name:"Harry Potter",
        author:"J.K. Rowling",
        status:"Read"
    },
    {
        name:"Rich Dad Poor Dad",
        author:"Robert Kiyosaki",
        status:"Not Read"
    },
    {
        name:"Rich Dad Poor Dad",
        author:"Robert Kiyosaki",
        status:"Not Read"
    }
]

const NAME = document.querySelector("#name");
const STATUS = document.querySelector("#status");
const AUTHOR = document.querySelector("#author");
const TABLE = document.querySelector("#table-body");


class Book{
    constructor(name, author, status){
    this.name = name;
    this.author = author;
    this.status = status;
    }
}



function addBookToLibrary(){
    if (AUTHOR.value === "" || NAME.value === ""){
        return;
    }
    library = []
    const newBook = new Book(NAME.value,AUTHOR.value,STATUS.value);
    library.push(newBook)
    console.log(library)
    toTable()
}

function toTable(){
    library.forEach(info =>{
        const UPDATE = `
            <tr>
                <td>${info.name}</td>
                <td>${info.author}</td>
                <td><button id="read" class="status" onclick="readSwitch()">${info.status}</button></td>
                <td><button class="delete btn">Delete</button></td>
            </tr>
        `
    TABLE.insertAdjacentHTML('afterbegin',UPDATE);
    })
}
function readSwitch(book) {
    
}
toTable()
