const penyambutan = () => (alert('Hallo, \nSelamat datang di WEB pertama ku \nYang bertema "Portofolio"'))
penyambutan()

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar')
const tombol = document.querySelectorAll('.navbar a');
menuToggle.addEventListener('click', function (){
    nav.classList.toggle('slide');
});
