import { Component } from "./../../../core/Component.js";
import { Validation } from "./../../../sharing/validation.js";
import { CategoryService } from "./../../../service/category.service.js";

const validation = new Validation();
const cateService = new CategoryService();

class CategoryForm extends Component {
  state = {
    nameCategory: "",
    selectedCate: null,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    validation.isEmptyDom(
      this.state.nameCategory,
      "#nameCategory-alert",
      "Category can not empty"
    );
  };

  handleAddCate = () => {
    if (this.state.selectedCate) {
      this.handleUiForm();
      this.setState({ selectedCate: null });
      return;
    }

    if (validation.isEmpty(this.state.nameCategory)) {
      alert("Input cannot Empty");
      return;
    }

    cateService
      .addCate(this.state)
      .then(() => {
        this.props.reRenderTable();
        this.setState({ nameCategory: "" });
        alert("Add Success");
      })
      .catch((err) => {
        console.log(err.reponse);
        alert("Error");
      });
  };

  handleUiForm = (cate = null, type = false) => {
    if (cate && type) {
      document.querySelector("#nameCategory").value = cate.nameCategory;
      return 1;
    } else {
      document.querySelector("#nameCategory").value = "";
      return 2;
    }
  };

  handleEdit = () => {
    if (!this.state.selectedCate) {
      alert("Please select a category to edit");
    }

    const cateUpdate = {
      name_category: this.state.selectedCate.nameCategory,
    };
    if (this.state.nameCategory) {
      cateUpdate.name_category = this.state.nameCategory;
    }

    cateService
      .editCate(this.state.selectedCate.idCate, cateUpdate)
      .then(() => {
        this.props.reRenderTable();
        alert("Edit Success");
      })
      .catch((err) => {
        console.log(err.reponse);
      });

    this.setState({ nameCategory: "" });
  };

  getDetailCate = (cate) => {
    this.handleUiForm(cate, true);
    this.setState({ selectedCate: cate });
  };
}

const CateFormComponent = new CategoryForm();

export default CateFormComponent;
