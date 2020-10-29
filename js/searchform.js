const openButtonForm = document.querySelector(".search-form-button");
const searchFormContainer = document.querySelector(".search-form-container");
const arrivalDate = document.querySelector(".arrival-date");
const searchForm = searchFormContainer.querySelector(".search-form");
const departureDate = document.querySelector(".departure-date");

const adults = document.querySelector(".adults");
const kids = document.querySelector(".kids");

openButtonForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  adults.value = localStorage.getItem("adults");
  kids.value = localStorage.getItem("kids", kids.value);
  if (searchFormContainer.classList.contains("search-form-up")) {
    searchFormContainer.classList.toggle("search-form-up");
    searchFormContainer.classList.toggle("search-form-down");
    searchFormContainer.classList.remove("search-form-error");
  } else {
    searchFormContainer.classList.remove("search-form-down");
    searchFormContainer.classList.remove("search-form-alterror");
    searchFormContainer.classList.add("search-form-up");
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (
    !arrivalDate.value ||
    !departureDate.value ||
    !adults.value ||
    !kids.value
  ) {
    evt.preventDefault();
    if (searchFormContainer.classList.contains("search-form-error")) {
      searchFormContainer.classList.toggle("search-form-error");
      searchFormContainer.classList.toggle("search-form-alterror");
      searchFormContainer.classList.remove("search-form-down");
    } else {
      searchFormContainer.classList.add("search-form-error");
      searchFormContainer.classList.remove("search-form-alterror");
      searchFormContainer.classList.remove("search-form-down");
    }
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("kids", kids.value);
  }
});

/*
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adults", adults.value);
} catch (err) {
  isStorageSupport = false;
}
*/
