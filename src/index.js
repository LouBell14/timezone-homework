function showSelectedCountry(event) {
  if (event.target.value === "sydney") {
    let sydneyTime = moment
      .tz("Australia/Sydney")
      .format("dddd, MMMMM D, YYYY h:m A");
    alert(`It is currently ${sydneyTime} in Sydney, Australia`);
  }

  if (event.target.value === "paris") {
    let parisTime = moment
      .tz("Europe/Paris")
      .format("dddd, MMMMM D, YYYY h:m A");
    alert(`It is currently ${parisTime} in Paris, Europe`);
  }

  if (event.target.value === "tokyo") {
    let tokyoTime = moment.tz("Asia/Tokyo").format("dddd, MMMMM D, YYYY h:m A");
    alert(`It is currently ${tokyoTime} in Tokyo, Asia`);
  }
}

let countrySelect = document.querySelector("#country");
countrySelect.addEventListener("change", showSelectedCountry);
