const toast = document.querySelector("#toast");

const icon = (name) => `<span class="material-symbols-rounded">${name}</span>`;
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
})[character]);
const formatWon = (value) => `${Number(value || 0).toLocaleString("ko-KR")}원`;
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
};


