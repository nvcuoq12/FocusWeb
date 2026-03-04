const taskOptions = document.querySelectorAll(".task-option");
const taskButton = document.querySelector('[data-bs-target="#taskModal"]');

taskOptions.forEach(option => {
  option.addEventListener("click", function() {
    taskButton.innerText = this.innerText;

    const modal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
    modal.hide();
  });
});
