const openButtonForm=document.querySelector(".search-form-button"),searchFormContainer=document.querySelector(".search-form-container"),arrivalDate=document.querySelector(".arrival-date"),searchForm=searchFormContainer.querySelector(".search-form"),departureDate=document.querySelector(".departure-date"),adults=document.querySelector(".adults"),kids=document.querySelector(".kids");openButtonForm.addEventListener("click",function(a){a.preventDefault(),adults.value=localStorage.getItem("adults"),kids.value=localStorage.getItem("kids",kids.value),searchFormContainer.classList.contains("search-form-up")?(searchFormContainer.classList.toggle("search-form-up"),searchFormContainer.classList.toggle("search-form-down"),searchFormContainer.classList.remove("search-form-error")):(searchFormContainer.classList.remove("search-form-down"),searchFormContainer.classList.remove("search-form-alterror"),searchFormContainer.classList.add("search-form-up"))}),searchForm.addEventListener("submit",function(a){arrivalDate.value&&departureDate.value&&adults.value&&kids.value?(localStorage.setItem("adults",adults.value),localStorage.setItem("kids",kids.value)):(a.preventDefault(),searchFormContainer.classList.contains("search-form-error")?(searchFormContainer.classList.toggle("search-form-error"),searchFormContainer.classList.toggle("search-form-alterror"),searchFormContainer.classList.remove("search-form-down")):(searchFormContainer.classList.add("search-form-error"),searchFormContainer.classList.remove("search-form-alterror"),searchFormContainer.classList.remove("search-form-down")))});