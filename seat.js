let container = document.querySelector('.container');
let seats = document.querySelectorAll('.row .seat:not(.occupied');

function populateUI() {

  let selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

updateSelectedCount();