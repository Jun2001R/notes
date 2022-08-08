
showNotes();
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
        // element.value.replace("\n", "<br>");
        html += ` <div class="card noteCard" style="width: 20rem;height:20rem;margin:10px;padding:20px;  overflow-y: auto; box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; border-width: 0px;">
        <div class="card-body">
            <h5 class="card-title">${(titleObj[index])}</h5>
            <hr>
            <p class="card-text cardcont" id="edit${index}t">${element}</p>
            <button class="btn btn-primary deleteBtn"  onclick ="deleteNotes(${index})">Delete Note</button>
            <button class="btn btn-primary editBtn" onclick ="editNotes(${index})">Edit</button>
            <i style="top: 15px; right:15px; position: absolute; color:blue;" >${index + 1}.</i>
        </div>
       
    </div>
 `
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `<p style = "color : yellow; text-align : center; font-size: 1.25rem;"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
      </svg> Please Add Notes</p>`;
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
    messagesuccess.innerHTML = ` <div class="alert alert-success" role="alert" style="text-align:center">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg> Note has been Successfully Added
                </div>`;
    setTimeout(() => {
        messagesuccess.innerHTML = '';
    }, 2000);
}
function showAlert2() {

    let messagewarn = document.getElementById('messagewarn');
    messagewarn.innerHTML = `<div class="alert alert-danger" role="alert" style="text-align:center">
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
    messagewarn.innerHTML = ` <div class="alert alert-primary" role="alert" style="text-align:center">
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
    messagesuccess.innerHTML = ` <div class="alert alert-success" role="alert" style="text-align:center">
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
    messagewarn.innerHTML = `<div class="alert alert-danger" role="alert" style="text-align:center">
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
    messagewarn.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert" style="text-align:center">
    <strong>Note Not Found!</strong> 
  </div>` ;
    setTimeout(() => {
        messagewarn.innerHTML = '';
    }, 2000);
}
//to delete the objects

function deleteNotes(index) {
    showAlert3();
    complete = 1;
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


    searchTxttitle.addEventListener('input', function (element) {
        // let search = document.getElementById('searchTxt');
        showNotes();
        element.preventDefault();
        let checkit = 0;
        let inputVal = search.value;
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function (element) {
            let cardTxt = element.getElementsByTagName("h5")[0].innerText;
            if (cardTxt.toLowerCase().includes(inputVal.toLowerCase())) {
                element.style.display = "block";
                checkit = 1;
            }
            else {
                element.style.display = "none";
            }
        })
        if (checkit == 0) {
            checkit = 1;
            let notes = document.getElementById('notes');
                 showAlert6();
        }
    })
}
{
    let search = document.getElementById('searchTxtcontent');
    searchTxtcontent.addEventListener('input', function (element) {
        showNotes();
        // let search = document.getElementById('searchTxt');
        element.preventDefault();
        let checkit = 0;
        let inputVal = search.value;
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function (element) {
            let cardTitle = element.getElementsByTagName("p")[0].innerText;
            if (cardTitle.toUpperCase().includes(inputVal.toUpperCase())) {
                element.style.display = "block";
                checkit = 1;
            }
            else {
                element.style.display = "none";
            }
        })
        if (checkit == 0) {
            checkit = 1;
            let notes = document.getElementById('notes');
                 showAlert6();
        }


    })

}
//edit different notes
function editNotes(index) {
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
    let noteselm = document.getElementById('notes');
    let editId = noteselm.childNodes[2 * index + 1];


    if (complete == 1) {
        let text = editId.childNodes[1].childNodes[5].innerText;
        let texttitle = editId.childNodes[1].childNodes[1].innerText;
        // console.log(notesObj[index]);
        let html = `<textarea class="form-control mx-2 my-2 textArea" placeholder="Edit Note"rows="5" id="${index}">${text}</textarea>`
        let htmltitle = `<textarea class="form-control mx-2 my-2 textAre" placeholder = "Edit title" rows="1">${texttitle}</textarea>`
        editId.childNodes[1].childNodes[5].innerHTML = html;
        editId.childNodes[1].childNodes[1].innerHTML = htmltitle;
        editId.childNodes[1].childNodes[9].innerText = 'save'
        complete = 0;
        check = index;
    }
    else if (complete == 0 && check == index) {
        let text = editId.childNodes[1].childNodes[5].childNodes[0].value;
        let texttitle = editId.childNodes[1].childNodes[1].childNodes[0].value;
        complete = 1;
        editId.childNodes[1].childNodes[9].innerText = 'Edit';
        // editId.childNodes[1].childNodes[3].innerHTML = textArea.value;
        // notesObj[index] = editId.childNodes[1].childNodes[3].childNodes[0].value;
        notesObj[index] = text;
        titleObj[index] = texttitle;
        localStorage.setItem('notes', JSON.stringify(notesObj));
        localStorage.setItem('title', JSON.stringify(titleObj));
        showAlert4();
        showNotes();
    }
    else if (check != index) {
        showAlert5(check);
    }
}

