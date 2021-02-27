export class Component {
  state = {};
  dom = null;
  props = {};
  constructor(dom = null) {
    this.dom = dom;
  }

  handleContent() {
    document.querySelector(this.dom).innerHTML = this.render();
  }

  render() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    if (this.dom) {
      this.handleContent();
    }
  }

  componentDidMout() {}

  run(props) {
    this.props = {...props};
    if (this.dom) {
      this.handleContent();
      this.componentDidMout();
    }
  }
}