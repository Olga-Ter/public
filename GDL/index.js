const dropdownBtn = document.querySelector(".dropdown-button");
const pardropdownWrp = document.querySelectorAll(".pardropdown-wrapper");
const sixClassBtn = document.querySelector(".six");
const sevenClassDtn = document.querySelector(".seven");
const gameBtn = document.querySelector(".game");
const sixPardropdownList = document.querySelector(".six ~ .pardropdown-list");
const sevenPardropdownList = document.querySelector(
  ".seven ~ .pardropdown-list"
);
const backBtnWrp = document.querySelector(".back-button-wrapper");
if (window.innerWidth > 1920)
  backBtnWrp.style.right = `${(window.innerWidth - 1920) / 2 + 38.4}px`;
else backBtnWrp.style.right = `2%`;

dropdownBtn.addEventListener("click", () => {
  pardropdownWrp.forEach((element, index) => {
    element.classList.toggle("visible");
    sixPardropdownList.classList.remove("visible");
    sevenPardropdownList.classList.remove("visible");
  });
});

sixClassBtn.addEventListener("click", () => {
  sixPardropdownList.classList.toggle("visible");
});

sevenClassDtn.addEventListener("click", () => {
  sevenPardropdownList.classList.toggle("visible");
});

gameBtn.addEventListener("click", () => {
  window.open(`${window.location.origin}/pages/games.html`, "_self");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 600) backBtnWrp.classList.add("visible");
  else backBtnWrp.classList.remove("visible");
});

backBtnWrp.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

const popupArr = [
  {
    location: "https://learningapps.org/view3163944",
    title: "ВКЛ в XIII-XIV вв.",
    src: "assets/firstCheck-SGD1tZBK.png",
  },
  {
    location: "https://learningapps.org/watch?v=psdor5xdc23",
    title: "Правление великих князей ВКЛ",
    src: "assets/secCheck-BE8HWKFv.png",
  },
  {
    location: "https://learningapps.org/view10657437",
    title: "Укрепление великокняжеской власти",
    src: "assets/thirdCheck-GXwJNpXx.png",
  },
  {
    location: "https://learningapps.org/view2317588",
    title: "ВКЛ (пазл)",
    src: "assets/fourthCheck-rb2Sc4h2.png",
  },

  {
    location: "https://learningapps.org/view29425106",
    title: "Правители ВКЛ сер. XIII- к. XIV вв.",
    src: "assets/fifthCheck-CR1D4Cx_.png",
  },
];

const popupWin = document.querySelector(".popup");
const popupCnt = document.querySelector(".popup-content");
const popupLink = document.querySelector(".popup-link");
const checkBtn = document.querySelectorAll(".check-border");

checkBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    popupLink.setAttribute("href", popupArr[index].location);
    popupLink.textContent = popupArr[index].title;
    popupLink.setAttribute("target", "_blank");
    popupWin.style.display = "flex";
    if (window.innerWidth > 980)
      popupCnt.style.backgroundImage = `url(${popupArr[index].src})`;
    else popupCnt.style.backgroundImage = "none";
  });
});

popupCnt.addEventListener("click", (event) => {
  window.open(event.target.firstElementChild.getAttribute("href"), "_blank");
});

popupWin.addEventListener("click", () => {
  popupWin.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc")
    popupWin.style.display = "none";
});

const princePortraitWrp = document.querySelectorAll(".prince-portrait-wrap");
const princePortraitImg = document.querySelectorAll(".prince-portrait");

princePortraitWrp.forEach((element, index) => {
  if (!element.classList.contains("empty")) {
    element.addEventListener("click", () => {
      console.log(`${window.location.origin}/pages/${princePortraitImg[index]
          .getAttribute("alt")
          .toLowerCase()}.html`);
      window.open(
        `${window.location.origin}/public/GDL/pages/${princePortraitImg[index]
          .getAttribute("alt")
          .toLowerCase()}.html`,
        "_self"
      );
    });
  }
});
