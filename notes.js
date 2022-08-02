
showNotes();
var notesObj;
var titleObj;
let check;
let complete = 1;
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

        html += ` <div class="card noteCard mx-3 my-2" style="width: 18rem;height:20rem;  overflow-y: auto; box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; border-width: 0px;">
        <div class="card-body">
            <h5 class="card-title">${(titleObj[index])}</h5>
            <p class="card-text" id="edit${index}t">${element}</p>
            <button class="btn btn-primary deleteBtn"  onclick ="deleteNotes(${index})">Delete Note</button>
            <button class="btn btn-primary editBtn" onclick ="editNotes(${index}), takevalue(${element}, ${(titleObj[index])})">Edit</button>
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
    messagesuccess.innerHTML = `<div class="alert alert-success" role="alert"style="text-align:center">
    You have successfully added a Note 	&#10004;
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
    messagewarn.innerHTML = `<div class="alert alert-danger" role="alert" style="text-align:center">
    Add Title And Notes Both !
  </div>
  ` ;
    setTimeout(() => {
        messagewarn.innerHTML = '';
    }, 2000);
}
//to delete the objects

function deleteNotes(index) {
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
            notes.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert" style="text-align:center">
            <strong>Note Not Found!</strong> 
          </div>`
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
                notes.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert"style="text-align:center">
                <strong>Note Not Found!</strong> 
              </div>`
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
        let text = editId.childNodes[1].childNodes[3].innerText;
        console.log(editId.childNodes[1].childNodes[1])
        let texttitle = editId.childNodes[1].childNodes[1].innerText;
        let html = `<textarea class="form-control mx-2 my-2 textArea"  id="${index}">${text}</textarea>`
        let htmltitle = `<textarea class="form-control mx-2 my-2 textArea" rows="1">${texttitle}</textarea>`
        editId.childNodes[1].childNodes[3].innerHTML = html;
        editId.childNodes[1].childNodes[1].innerHTML = htmltitle;
        editId.childNodes[1].childNodes[7].innerText = 'save'
        complete = 0;
        check = index;
    }
    else if (complete == 0 && check == index) {
        let text = editId.childNodes[1].childNodes[3].childNodes[0].value;
        let texttitle = editId.childNodes[1].childNodes[1].childNodes[0].value;
        complete = 1;
        editId.childNodes[1].childNodes[7].innerText = 'Edit';
        // editId.childNodes[1].childNodes[3].innerHTML = textArea.value;
        notesObj[index] = text;
        titleObj[index] = texttitle;
        localStorage.setItem('notes', JSON.stringify(notesObj));
        localStorage.setItem('title', JSON.stringify(titleObj));
        showNotes();
    }




}

