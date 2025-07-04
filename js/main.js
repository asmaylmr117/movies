// Movie data
const movies = [
  { title: 'Venom', duration: '120min', genre: 'Action', img: './img/m1.jpg' },
  { title: 'Dunkerk', duration: '105min', genre: 'Adventure', img: './img/m2.jpg' },
  { title: 'Batman & Superman', duration: '100min', genre: 'Thriller', img: './img/m3.jpg' },
  { title: 'John Wick', duration: '120min', genre: 'Adventure', img: './img/m4.jpg' },
  { title: 'Aquaman', duration: '130min', genre: 'Action', img: './img/m5.jpg' },
  { title: 'Black Panther', duration: '90min', genre: 'Thriller', img: './img/m6.jpg' },
  { title: 'Thor', duration: '130min', genre: 'Action', img: './img/m7.jpg' },
  { title: 'Bumblebee', duration: '100min', genre: 'Thriller', img: './img/m8.png' },
  { title: 'Mortal Engines', duration: '100min', genre: 'Action', img: './img/m9.jpg' },
  { title: 'UnderWorld Blood Wars', duration: '100min', genre: 'Action', img: './img/m10.jpg' },
];

const comingMovies = [
  { title: 'Joney English', duration: '80min', genre: 'Comedy', img: './img/coming1.jpg' },
  { title: 'WarCrafet', duration: '120min', genre: 'Action', img: './img/coming2.jpg' },
  { title: 'Rampage', duration: '108min', genre: 'Adventure', img: './img/coming3.jpg' },
  { title: 'Airon Lady', duration: '120min', genre: 'Comedy', img: './img/coming4.jpg' },
  { title: 'Justice League', duration: '120min', genre: 'Adventure', img: './img/coming5.jpg' },
  { title: 'Doctor Strange', duration: '120min', genre: 'Adventure', img: './img/coming6.jpeg' },
  { title: 'Captain Marvel', duration: '120min', genre: 'Adventure', img: './img/coming7.jpg' },
  { title: 'Black Widow', duration: '90min', genre: 'Action', img: './img/coming8.jpg' },
  { title: 'Ant Man', duration: '110min', genre: 'Adventure', img: './img/coming9.jpg' },
  { title: 'Guardians Of The Galaxy', duration: '120min', genre: 'Adventure', img: './img/coming10.jpg' },
];
// Render movies
function renderMovies(containerId, movieList) {
  const container = document.getElementById(containerId);
  container.innerHTML = movieList.map(movie => `
    <div class="box">
      <div class="box-img w-full h-[280px]">
        <img src="${movie.img}" alt="${movie.title}" class="w-full h-full object-cover cursor-pointer hover:-translate-y-2 transition-transform duration-200">
      </div>
      <h3 class="text-red-600 text-sm font-medium mt-2">${movie.title}</h3>
      <span class="text-xs text-white">${movie.duration} | ${movie.genre}</span>
    </div>
  `).join('');
}

// Initialize movies
renderMovies('movies-container', movies);
renderMovies('coming-container', comingMovies);

// Header functionality
const header = document.getElementById('header');
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
let isMenuOpen = false;
let isScrolled = false;

function updateHeader() {
  if (isScrolled) {
    header.classList.add('bg-white', 'shadow-md');
    header.classList.remove('bg-transparent');
    header.querySelector('a[href="#home"]').classList.add('text-black');
    header.querySelector('a[href="#home"]').classList.remove('text-white');
    menuIcon.querySelector('i').classList.add('text-black');
    menuIcon.querySelector('i').classList.remove('text-white');
    navbar.querySelectorAll('a').forEach(link => {
      link.classList.add('text-black');
      link.classList.remove('text-red-600');
    });
  } else {
    header.classList.add('bg-transparent');
    header.classList.remove('bg-white', 'shadow-md');
    header.querySelector('a[href="#home"]').classList.add('text-white');
    header.querySelector('a[href="#home"]').classList.remove('text-black');
    menuIcon.querySelector('i').classList.add('text-white');
    menuIcon.querySelector('i').classList.remove('text-black');
    navbar.querySelectorAll('a').forEach(link => {
      link.classList.add('text-red-600');
      link.classList.remove('text-black');
    });
  }
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  menuIcon.setAttribute('aria-expanded', isMenuOpen);
  menuIcon.setAttribute('aria-label', isMenuOpen ? 'Close menu' : 'Open menu');
  menuIcon.querySelector('i').classList.toggle('fa-times', isMenuOpen);
  menuIcon.querySelector('i').classList.toggle('fa-bars', !isMenuOpen);
  navbar.classList.toggle('block', isMenuOpen);
  navbar.classList.toggle('hidden', !isMenuOpen);
  navbar.classList.toggle('top-full', isMenuOpen);
  navbar.classList.toggle('-top-full', !isMenuOpen);
  navbar.classList.toggle('opacity-100', isMenuOpen);
  navbar.classList.toggle('opacity-0', !isMenuOpen);
  navbar.classList.toggle('visible', isMenuOpen);
  navbar.classList.toggle('invisible', !isMenuOpen);
  document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
}

function closeMenu() {
  if (isMenuOpen) {
    isMenuOpen = false;
    menuIcon.setAttribute('aria-expanded', 'false');
    menuIcon.setAttribute('aria-label', 'Open menu');
    menuIcon.querySelector('i').classList.remove('fa-times');
    menuIcon.querySelector('i').classList.add('fa-bars');
    navbar.classList.remove('block', 'top-full', 'opacity-100', 'visible');
    navbar.classList.add('hidden', '-top-full', 'opacity-0', 'invisible');
    document.body.style.overflow = 'auto';
  }
}
// Event listeners
window.addEventListener('scroll', () => {
  isScrolled = window.scrollY > 0;
  updateHeader();
  closeMenu();
});
menuIcon.addEventListener('click', toggleMenu);

navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Cleanup on page unload
window.addEventListener('unload', () => {
  document.body.style.overflow = 'auto';
});
