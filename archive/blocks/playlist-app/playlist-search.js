const searchResults = document.querySelector('.search-results');

searchResults.addEventListener('click', function(e) {
    if (!e.target.classList.contains('search-results__item__quick-add')) {
        return;
    }
    if (e.target.parentElement.getAttribute('data-selected') == 'false') {
        e.target.parentElement.setAttribute('data-selected', 'true');
    } else {
        e.target.parentElement.setAttribute('data-selected', 'false');
    }
})