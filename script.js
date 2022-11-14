let blocklist = document.querySelector('.blocklist');
blocklist.addEventListener('keyup', addNewItem);

let buttonMain = document.querySelector('.buttonMain');
buttonMain.addEventListener('click', addNewInput);

let icon1 = document.querySelector('.icon1');
icon1.addEventListener('click', sortingFunction);

let icon2 = document.querySelector('.icon2');
icon2.addEventListener('click', sortingReverseFunction);

let input = document.querySelector('#mainpart');
document.getElementById("mainpart").focus();

let list = document.querySelector('.list');

function addNewItem(a) {

  if (a.keyCode == 13 && list.style.display != 'none') {
    let line = document.createElement('li');
    line.className = 'new_list item';
    line.setAttribute('draggable', true);
    line.innerHTML = `${input.value}<ion-icon name="close-outline" class="close"></ion-icon>`;

    let listMain = document.querySelector('#listMain');
    listMain.appendChild(line);

    input.value = '';
    list.style.display = 'none';
    blocklist.style.paddingBottom = " 0.629vw";
    console.log(list.style.display);

    deleteItem();
    newElementAreaFunction();
  }
}

function addNewInput(e) {
  list.style.display = 'flex';
  document.getElementById("inputMain").focus();
  // document.getElementById("inputMain").setAttribute("autofocus")
}

function deleteItem() {

  const close = document.querySelectorAll('.close');

  close.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.className.includes('close')) {

        e.target.parentElement.remove();

        if (listMain.childElementCount == 0) {
          list.style.display = 'flex';
        }
      }
    });
  });

}
let sortingArray = [];
function sortingFunction() {
  let listChoice = document.querySelectorAll('li');
  sortingArray = [];
  listChoice.forEach(item => {
    sortingArray.push(item.innerHTML);
  })
  sortingArray.sort();

  for (let i = 0; i < (listChoice.length); i++) {
    listChoice[i].innerHTML = sortingArray[i];
  }

  deleteItem();
  let icon2 = document.querySelector('.icon2');
  icon1.style.display = 'none';
  icon2.style.display = 'flex';

  newElementAreaFunction();
}

function sortingReverseFunction() {
  icon2.style.display = 'none';
  icon1.style.display = 'block';

  listChoice = document.querySelectorAll('li');
  sortingArray = [];
  listChoice.forEach(element => {
    sortingArray.push(element.innerHTML);
  })
  sortingArray.sort().reverse();

  for (let i = 0; i < (listChoice.length); i++) {
    listChoice[i].innerHTML = sortingArray[i];
    deleteItem();
  }
  newElementAreaFunction
}

function newElementAreaFunction() {
  const newElement = document.querySelector('.wrap');
  new Sortable(newElement, {
    animation: 350
  })
}