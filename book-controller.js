function init() {
    createBooks()
    numOfPage()

    renderBooks()
}



function renderBooks() {
    var books = getBooks()
    
    var strHtml = books.map((book) => {
        return `<tr>
        <th  scope="row">${book.id}</th>
        <td id="b-title" >${book.title}</td>
        <td id="b-price">${book.price}$</td>
        <td id="b-image"> <img class='book-image' src="${book.image}" alt=""> </td>
        <td class="td-action"><button class="btn btn-success" onclick="onOpenReadModal(${book.id})"  data-toggle="modal" data-target="#readleModal">READ</button> 
        <button onclick="onOpenUpdateModal(${book.id}) " class="btn btn-warning" data-toggle="modal" data-target="#exampleModal" >UPDATE</button> 
        <button onclick="onDeleteBook(${book.id})" class="btn btn-danger">DELETE</button></td>
        </tr>`
    })
    $('tbody').html(strHtml.join(''))

}

function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooks()
}

function onOpenUpdateModal(bookId) {
    displayUpdateModal(bookId)
}

function onUpdateSaveChanges() {
    saveUpdatedChanges()
    renderBooks()
}


function onOpenReadModal(bookId) {
    displayReadModal(bookId)
}

function onRate(sign) {
    changeRate(sign)
}

function onOpenModal() {
    $('.add-modal').show()
}

function onCloseModal() {
    $('.add-modal').hide()
}

function onModalSaveBook() {
    var name = $('#name-input').val()
    var price = $('#price-input').val()
    var image = $('#image-input').val()
    addBook(name, price, image)
    renderBooks()
}

function onSortBy(by) {
    sortBy(by)
    renderBooks()
}

function onNextPage() {
    nextPage()
    renderBooks()
}
function onPreviusPage() {
    prevPage()
    renderBooks()
}