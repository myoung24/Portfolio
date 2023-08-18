const tabs = document.querySelectorAll(".details");
const tabBtns = document.querySelectorAll(".select");

const tab_Nav = function (tabBtnClick) {
  tabBtns.forEach((tabBtn) => {
    tabBtn.classList.remove("active");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabs[tabBtnClick].classList.add("active");
  tabBtns[tabBtnClick].classList.add("active");
};

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", () => {
    tab_Nav(i);
  });
});
