// // from lecture 3
// var titles = document.getElementsByClassName('title');

// console.log(titles);

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
// 6
// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// // // from lecture 4
// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//     console.log(book);
// })

// // from lecture 5
// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//     book.textContent += '(book title)';
// })

// const bookLsit = document.querySelector('#book-list');
// bookLsit.innerHTML = '<h2>Hello good people</h2>';
// bookLsit.innerHTML += '<p>Hello good people</p>';

// // from lecture 6
// const banner = document.querySelector('#page-banner')

// console.log('#page-banner node type is: ', banner.nodeType)
// console.log('#page-banner node name is: ', banner.nodeName)
// console.log('#page-banner has child nodes: ', banner.hasChildNodes())

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// // from lecture 7
// const bookList = document.querySelector('#book-list');

// console.log('The parent node is: ', bookList.parentNode);
// console.log('The parent element is: ', bookList.parentElement.parentElement);

// console.log(bookList.childNodes)
// console.log(bookList.children)

// // from lecture 8
// // const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is: ', bookList.nextSibling)
// console.log('book-list next element sibling is: ', bookList.nextElementSibling)

// console.log('book-list previous sibling is: ', bookList.previousSibling)
// console.log('book-list previous element sibling is: ', bookList.previousElementSibling)

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else!'

// from lecture 9

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})

// from lecture 10

// Better approach 
var list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if (e.target.className = 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

// from lecture 11 - 14
const addFrom = document.forms['add-book'];

addFrom.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addFrom.querySelector('input[type="text"]').value;

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add content
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

// from lecture 15
var list = document.querySelector('#book-list ul');
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){
    if (hideBox.checked){
        list.style.display = 'none'
    }
    else{
        list.style.display = 'initial'
    }
})

// from lecture 16 
const searchBar = document.forms('search-books').querySelector('input');

searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else{
            book.style.display = 'none'; 
        }
    });
});
