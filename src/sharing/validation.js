export class Validation {
  isEmptyDom(val, dom, mess) {
    if (val === "") {
      document.querySelector(dom).innerHTML = mess;
      return true;
    } else {
      document.querySelector(dom).innerHTML = "";
      return false;
    }
  }

  isEmpty(val) {
    if (val === "") return true;
    return false;
  }
}
