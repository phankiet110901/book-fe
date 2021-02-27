import { Component } from "./../../../core/Component.js";
import { BookService } from "./../../../service/book.service.js";

const bookService = new BookService();

class BookTable extends Component {
  constructor(dom) {
    super(dom);
  }

  state = {
    allBook: [],
  };


  handleDelBook = (id) => {
    
  }

  handleShowUi = () => {
    let content = "";
    this.state.allBook.forEach((book) => {
      content += `
                <tr>
                    <td>${book.name_book}</td>
                    <td>${new Intl.NumberFormat().format(book.price_book)}</td>
                    <td>${book.author}</td>
                    <td><img src="${
                      book.img_book
                    }" width="150" height="150"/></td>
                    <td>${book.name_category}</td>
                    <td>${book.rating ? book.ration : 0}</td>
                    <td>${book.review}</td>
                    <td>
                      <button>Edit</button> 
                      <button>Delete</button>
                    </td>
                </tr>
            `;
    });

    return content;
  };

  componentDidMout = () => {
    bookService
      .getAllBook()
      .then((res) => {
        this.setState({ allBook: [...res.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return this.handleShowUi();
  }
}

const BookTableComponent = new BookTable("tbody");

export default BookTableComponent;
