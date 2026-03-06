const taskOptions = document.querySelectorAll(".task-item");
const taskButton = document.querySelector('[data-bs-target="#taskModal"]');

taskOptions.forEach((option) => {
  option.addEventListener("click", function () {
    taskButton.innerText = this.innerText;

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("taskModal"),
    );
    modal.hide();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const editIcons = document.querySelectorAll(".edit-icon");
  const editModal = new bootstrap.Modal(
    document.getElementById("editTaskModal"),
  );

  const editTitleInput = document.getElementById("editTaskTitle");
  const saveEditBtn = document.getElementById("saveEditBtn");

  let currentTaskItem = null;

  editIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      // Lấy task cha
      currentTaskItem = this.closest(".task-item");

      // Lấy text hiện tại
      const taskText = currentTaskItem.querySelector(".task-text").textContent;

      // Đổ vào input
      editTitleInput.value = taskText;

      // Hiện modal
      editModal.show();
    });
  });

  // Khi bấm Save
  
});
