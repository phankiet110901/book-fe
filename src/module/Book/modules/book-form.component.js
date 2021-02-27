import { Component } from "./../../../core/Component.js";
import { BookService } from "./../../../service/book.service.js";

const bookService = new BookService();
export class BookForm extends Component {
  state = {
    nameBook: "",
    price: 0,
    author: "",
    review: "",
    category: "",
    image: null,
  };

  handleOnChange = (e) => {
    if (e.target.name === "image") {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.files[0],
      });
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      });
    }
    console.log(this.state);
  };
  

  handleAddBook = () => {
    const newBook = {
      nameBook: this.state.nameBook,
      priceBook: parseInt(this.state.price),
      author: this.state.author,
      review: this.state.review,
      id_category: this.state.category,
    }
    return bookService.createBook(newBook)
  }

  handleUploadImg = (idBook) => {
    return bookService.uploadImg(this.state.image, idBook);
  }


  handleGetDetail = (book) => {
    console.log(book);
  }
}
