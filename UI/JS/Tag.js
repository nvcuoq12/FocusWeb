document.addEventListener("DOMContentLoaded", function () {
  const tagButton = document.getElementById("TagButton");

  // Lấy đúng dropdown nằm ngay sau TagButton
  const dropdownMenu = tagButton.nextElementSibling;

  const editModalElement = document.getElementById("editTagModal");
  const editInput = document.getElementById("editTagInput");
  const saveBtn = document.getElementById("saveTagBtn");
  const modalTitle = editModalElement.querySelector(".modal-title");

  let currentTagItem = null;
  let currentMode = null;

  const modal = new bootstrap.Modal(editModalElement);

  // MODAL OPEN
  editModalElement.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    currentMode = button?.getAttribute("data-mode");

    if (currentMode === "add") {
      modalTitle.textContent = "Add Tag";
      editInput.value = "";
      saveBtn.textContent = "Create";
      currentTagItem = null;
    }

    if (currentMode === "edit") {
      modalTitle.textContent = "Edit Tag";
      saveBtn.textContent = "Update";
    }
  });

  // DROPDOWN CLICK
  dropdownMenu.addEventListener("click", function (e) {
    const tagItem = e.target.closest(".tag-item");
    if (!tagItem) return;

    // SELECT TAG (không bấm vào edit/delete)
    if (!e.target.closest(".tag-actions")) {
      const contentHTML = tagItem.querySelector(".tag-content").innerHTML;
      tagButton.innerHTML = contentHTML;
    }
  });
});
