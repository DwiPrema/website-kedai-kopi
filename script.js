const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menuIcon').
onclick = () => {
    navbarNav.classList.toggle('active');
}


// klik lainnya untuk menghilangkan menu
const menu = document.querySelector('#menuIcon')

document.addEventListener('click', function(kursor) {
    if(!menu.contains(kursor.target) && !navbarNav.contains(kursor.target)){
        navbarNav.classList.remove('active');
    }
})

// membuat scrolling
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function (i) {
        i.preventDefault(); // mencegah aksi default dari browser
        const targetid = this.getAttribute('href');
        const targetElement = document.querySelector(targetid);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});


//membuat animasi 
const tentangh2 = document.querySelectorAll('.c2 h2');
const Menu = document.querySelectorAll('.menu h2');
const tentangp = document.querySelectorAll('.teks-tentang');  
const Menu1 = document.querySelectorAll('.menu h3'); 
// Buat observer untuk mendeteksi elemen yang terlihat
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Tambahkan animasi berdasarkan elemen
      if (entry.target.matches('.c2 h2')) {
        entry.target.classList.add('fadein');
      }
      if (entry.target.matches('.menu h2')) {
        entry.target.classList.add('fadein');
      }
      if (entry.target.matches('.teks-tentang')) {
        entry.target.classList.add('animate');
      }
      if (entry.target.matches('.menu h3')) {
        entry.target.classList.add('.fadein');
      }
      // Hentikan pengamatan setelah elemen dianimasikan
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.00001, // Elemen harus terlihat 10% untuk memulai animasi
});

// Terapkan observer ke semua elemen
tentangh2.forEach(element => observer.observe(element));
tentangp.forEach(element => observer.observe(element));
Menu.forEach(element => observer.observe(element));