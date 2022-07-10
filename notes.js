console.log('this is note app');
showNotes();
var notesObj;
var titleObj;
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function () {

    let addTxt = document.querySelector('#addTxt');
    let addTitle = document.querySelector('#addTitle');
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (title == null) {
        titleObj = [];

    }
    else {
        titleObj = JSON.parse(title);
    }
    notesObj.push(addTxt.value);
    titleObj.push(addTitle.value);

    if (addTxt.value != "" && addTitle.value != "") {

        localStorage.setItem('notes', JSON.stringify(notesObj));
        localStorage.setItem('title', JSON.stringify(titleObj));
        showAlert1();

    }
    else {
    showAlert2();
    }

    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (title == null) {
        titleObj = [];

    }
    else {
        titleObj = JSON.parse(title);
    }
    let html = " ";
    notesObj.forEach(function (element, index) {
        html += ` <div class="card noteCard mx-2 my-3" style="width: 18rem; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; border-width: 0px; background-color: rgb(214, 255, 246);">
        <div class="card-body">
            <h5 class="card-title">${(titleObj[index]).toUpperCase()}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary deleteBtn" id="${index}" onclick ="deleteNotes(this.id)" style="font-weight: bolder">Delete Note</button>
        </div>
    </div> `
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `<p style = "color : red; text-align : center;">Please Add Notes</p>`;
    }
}
//alert function
function showAlert1() {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (title == null) {
        titleObj = [];

    }
    else {
        titleObj = JSON.parse(title);
    }
    let messagesuccess = document.getElementById('messagesuccess');
    messagesuccess.innerHTML = `<div class="alert alert-success" role="alert">
    You have successfully added a Note
  </div>`;
    setTimeout(() => {
        messagesuccess.innerHTML = '';
    }, 2000);
}
function showAlert2() {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (title == null) {
        titleObj = [];

    }
    else {
        titleObj = JSON.parse(title);
    }
    let messagewarn = document.getElementById('messagewarn');
    messagewarn.innerHTML = `<div class="alert alert-danger" role="alert">
    Add Title And Notes Both !
  </div>
  ` ;
    setTimeout(() => {
        messagewarn.innerHTML = '';
    }, 2000);
}
//to delete the objects

function deleteNotes(index) {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (title == null) {
        titleObj = [];

    }
    else {
        titleObj = JSON.parse(title);
    }
    notesObj.splice(index, 1);
    titleObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    localStorage.setItem('title', JSON.stringify(titleObj));
    showNotes();
}
{
let search = document.getElementById('searchTxttitle');
let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function(element){
    // let search = document.getElementById('searchTxt');
    element.preventDefault();
    console.log('ok');
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.toLowerCase().includes(inputVal.toLowerCase()))
    {
        element.style.display  = "block";
    }
    else
    {
        element.style.display = "none";
    }
    })
 
})
search.addEventListener('input', function(element){
    // let search = document.getElementById('searchTxt');
    console.log('ok');
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.toLowerCase().includes(inputVal.toLowerCase()))
    {
        element.style.display  = "block";
    }
    else
    {
        element.style.display = "none";
    }
    })
 
})
}
{
    let search = document.getElementById('searchTxtcontent');
    let searchBtn = document.getElementById('searchBtn');
search.addEventListener('input', function(element){
    // let search = document.getElementById('searchTxt');
    element.preventDefault();
    console.log('ok');
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
    if(cardTitle.includes(inputVal.toUpperCase()))
    {
        element.style.display  = "block";
    }
    else
    {
        element.style.display = "none";
    }
    })
 
})
searchBtn.addEventListener('click', function(element){
    // let search = document.getElementById('searchTxt');
    element.preventDefault();
    console.log('ok');
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
    if(cardTitle.includes(inputVal.toUpperCase()))
    {
        element.style.display  = "block";
    }
    else
    {
        element.style.display = "none";
    }
    })
 
})
}
