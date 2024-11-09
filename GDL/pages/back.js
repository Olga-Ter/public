const backBtn = document.querySelector(".back-button");

backBtn.addEventListener("click", () => {
  window.history.back();
});

const qrPageWrp = document.querySelectorAll(".qr-page-wrapper");
const popupArr = [
  {
    location: "https://learningapps.org/view10657437",
    title: "Укрепление великокняжеской власти",
    src: "assets/qr0-D_cYjMzt.svg",
  },
  {
    location: "https://learningapps.org/view17331095",
    title: "«Великая война» и Грюнвальдская война",
    src: "assets/qr1-DVqIQZrw.svg",
  },
  {
    location: "https://learningapps.org/view17469402",
    title: "Гражданская война 1432-1439",
    src: "assets/qr2-DyZ4uFAt.svg",
  },
  {
    location: "https://learningapps.org/view16332313",
    title: "Образование ВКЛ",
    src: "assets/qr3-BIPNvgq2.svg",
  },
  {
    location: "https://learningapps.org/watch?v=ptxx7ecwk23",
    title: "ВКЛ в XIII-XIV вв.",
    src: "assets/qr4-BY6hQ0QR.svg",
  },
  {
    location: "https://learningapps.org/view3163944",
    title: "Сближение ВКЛ с Польшей",
    src: "assets/qr5-B29fgBjw.svg",
  },
];

qrPageWrp.forEach((element, index) => {
  element.addEventListener("click", () => {
    window.open(popupArr[index].location, "_blank");
  });
});
