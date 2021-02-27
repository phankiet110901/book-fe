import { Component } from "./../../../core/Component.js";
import { CategoryService } from "./../../../service/category.service.js";

const cateService = new CategoryService();

class CategoryTable extends Component {
  state = {
    allCate: [],
  };

  constructor(dom) {
    super(dom);
  }

  componentDidMout = () => {
    cateService
      .getAllCate()
      .then((res) => {
        this.setState({ allCate: res.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handleContentUi = () => {
    let content = ``;

    this.state.allCate.forEach((contentCate) => {
      content += `
            <tr>
                <td>${contentCate.id_category}</td>
                <td>${contentCate.name_category}</td>
                <td>
                    <button onclick="handleClickEdit({idCate: '${contentCate.id_category}', nameCategory: '${contentCate.name_category}'})" >Edit</button>
                    <button onclick="handleDelete('${contentCate.id_category}')" >Delete</button>
                </td>
            </tr>
        `;
    });

    return content;
  };

  handleDelete = (idCate) => {
    cateService
      .deleteCate(idCate)
      .then(() => this.componentDidMout())
      .catch((err) => {
        if (err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Error");
        }
      });
  };

  handleClickEdit = (cate) => {
    this.props.getCate(cate);
  };

  render() {
    return this.handleContentUi();
  }
}

const cateTable = new CategoryTable("tbody");
window.handleDelete = (idCate) => {
  cateTable.handleDelete(idCate);
};

window.handleClickEdit = function (cate) {
  cateTable.handleClickEdit(cate);
};

export default cateTable;
