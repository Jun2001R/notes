
var notesObj;
var titleObj;
let check;
let complete = 1;
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function () {
    complete = 1;
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
    // notesObj.push(addTxt.value);
    // titleObj.push(addTitle.value);

    if (addTxt.value != "" && addTitle.value != "") {
        notesObj.push(addTxt.value);
        titleObj.push(addTitle.value);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        localStorage.setItem('title', JSON.stringify(titleObj));
        showAlert1();
    }
    else {
        showAlert2();
    }
    addTxt.value = "";
    addTitle.value = "";
});

    
//alert function
function showAlert1() {
    let messagesuccess = document.getElementById('messagesuccess');
    messagesuccess.innerHTML = `<div class="alert alert-success" role="alert" style="text-align:center;background:#68e385; color:#1a3821">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg> Note has been Successfully Added.| <a href="https://jun2001r.github.io/notes/mynotes.html"style="color:#1a3821">Go to notes</a>
                </div>`;
    setTimeout(() => {
        messagesuccess.innerHTML = '';
    }, 4000);
}
function showAlert2() {

    let messagewarn = document.getElementById('messagewarn');
    messagewarn.innerHTML = `<div class="alert alert-danger" role="alert" style="text-align:center;background:#f2766f;color:white">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>  Add Title And Notes Both !
  </div>
  ` ;
    setTimeout(() => {
        messagewarn.innerHTML = '';
    }, 2000);
}
function showAlert3() {

    let messagedelete = document.getElementById('messagedelete');
    messagewarn.innerHTML = ` <div class="alert alert-primary" role="alert" style="text-align:center;background:#4107ed;color:white">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg> Note has been Deleted
  </div>
  ` ;
    setTimeout(() => {
        messagewarn.innerHTML = '';
    }, 2000);
}
function showAlert4() {
    let messagesuccess = document.getElementById('messagesuccess');
    messagesuccess.innerHTML = ` <div class="alert alert-success" role="alert" style="text-align:center; background:#68e385; color:#1a3821">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg> Note Saved
                </div>`;
    setTimeout(() => {
        messagesuccess.innerHTML = '';
    }, 2000);
}
function showAlert5(index) {

    let messagewarn = document.getElementById('messagewarn');
    messagewarn.innerHTML = `<div class="alert alert-danger" role="alert" style="text-align:center; background:#f2766f;color:white">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>   Note number. ${index + 1} is not saved
  </div>
  ` ;
    setTimeout(() => {
        messagewarn.innerHTML = '';
    }, 2000);
}
function showAlert6() {

    let messagewarn = document.getElementById('messagewarn');
    messagewarn.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert" style="text-align:center; background:#f0eaaa; color:#666130">
    <strong>Note Not Found!</strong> 
  </div>` ;
    setTimeout(() => {
        messagewarn.innerHTML = '';
    }, 2000);
}
//to delete the objects

