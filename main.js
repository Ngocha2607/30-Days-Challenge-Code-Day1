var search_btn = document.querySelector('.search-btn');

search_btn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})