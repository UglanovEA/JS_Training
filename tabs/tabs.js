const tabsHeaders = document.querySelectorAll("[data-tab]");
tabsHeaders.forEach(tabsHandler);

function tabsHandler(item, index) {
  item.addEventListener("click", tabsClick);
}

function tabsClick() {
  const tabId = this.dataset.tab;

  document.querySelectorAll("[data-tab-content]").forEach(function (item) {
    item.classList.add("tab-content-hidden");
  });

  document.getElementById(tabId).classList.remove("tab-content-hidden");
}
