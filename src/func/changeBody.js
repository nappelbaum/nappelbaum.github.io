function changeBody(onOrOff) {
  if (onOrOff) {
    document.body.classList.remove("body-color-rest");
    document.body.classList.add("body-color-main");
  } else {
    document.body.classList.remove("body-color-main");
    document.body.classList.add("body-color-rest");
  }
}

export default changeBody;
