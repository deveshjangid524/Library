const myLibrary=[];

function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
   
}

function addBookToLibrary() {
    let title=document.querySelector("#first-name").value;
    let author=document.querySelector("#author").value;
    let pages=document.querySelector("#pages").value;
    // let read=document.qread").checked;

    let newBook= new Book(title,author,pages);  
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
   const cardsContainer=document.querySelector(".cards");
   cardsContainer.innerHTML='';
   myLibrary.forEach((book,index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
    <h3>Name : ${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <input type="checkbox">Read</input>
    <button class="delete" data-index="${index}"> Delete</button>
    `;
    cardsContainer.appendChild(card);
   })

   const deleteButtons= document.querySelectorAll(".delete");
deleteButtons.forEach(button => {
    button.addEventListener("click",function(){
        const index=(button.getAttribute("data-index"));
        myLibrary.splice(index,1);
        displayBooks();
    })
});

}

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    addBookToLibrary();
})

