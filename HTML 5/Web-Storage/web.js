const judul = document.querySelector('h1');

let nama = localStorage.getItem('nama');
if(!nama) {
    nama = prompt('masukan nama anda :');
    localStorage.setItem('nama', nama);
}

judul.innerHTML = `hallo, ${nama}!` ;

//ganti nama
const gantiNama = (e) => {
    nama = prompt('masukan nama baru anda :');
    localStorage.setItem('nama', nama);
    e.preventDefault ();
}

//hapus nama
const hapusNama = (e) => {
    localStorage.removeItem('nama', nama);
    e.preventDefault ();
}

//dark mode
const toggle = document.querySelector('.toggle');
let tema = localStorage.getItem('tema');

if (!tema) {
    localStorage.setItem('tema', 'light');
}

const darkMode = ( ) => {
    document.body,classList.add('dark-mode');
    toggle.innerHTML = 'light mode';
    localStorage.setItem('tema', 'dark');
}

toggle.addEventListener('click', function () {
    tema = localStorage.getItem('tema');
    if (tema === 'light') {
        darkmode( );
    } else {
        lightmode( );
    }

});