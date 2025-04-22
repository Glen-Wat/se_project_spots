export function setButtonText(
  btn,
  isLoading,
  defaultText = "Save",
  loadingText = "Saving..."
) {
  if (isLoading) {
    btn.textContent = loadingText;
  } else {
    btn.textContent = defaultText;
  }
}

export function deleteButtonText(
  btn,
  isDeleting,
  defaultText = "Delete",
  loadingText = "Deleting..."
) {
  if (isDeleting) {
    btn.textContent = loadingText;
  } else {
    btn.textContent = defaultText;
  }
}
