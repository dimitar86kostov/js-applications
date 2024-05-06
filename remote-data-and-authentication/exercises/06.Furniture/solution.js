function solve() {

  document.querySelector('form').addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    debugger
  }
}