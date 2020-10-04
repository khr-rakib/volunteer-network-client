const bgColors = ["#421FCF", "#FF7044", "#3F90FC", "#FFBD3E"];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(bgColors);

export default bgColors;
