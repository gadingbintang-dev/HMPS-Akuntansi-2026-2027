// Toggle menu untuk mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu saat klik link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// Animasi saat scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Aktifkan link navbar berdasarkan halaman aktif
document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan nama file halaman saat ini
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1);

    // Jika halaman kosong (beranda), gunakan 'index.html'
    const pageName = currentPage === '' ? 'index.html' : currentPage;

    // Hapus class 'active' dari semua link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');

        // Dapatkan href dari link
        let href = link.getAttribute('href');

        // Jika href adalah path lengkap (dengan ../), ambil bagian akhirnya saja
        if (href.includes('/')) {
            href = href.substring(href.lastIndexOf('/') + 1);
        }

        // Bandingkan dengan halaman saat ini
        if (href === pageName) {
            link.classList.add('active');
        }
    });
});

// Fungsi untuk menggulir ke atas halaman
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk menampilkan/hide tombol scroll to top
let scrollFunction = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
};

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', scrollFunction);

// Fungsi untuk memastikan konsistensi zoom di semua halaman
function setupZoomConsistency() {
    // Mencegah perubahan skala yang tidak diinginkan
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });

    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Menangani perubahan zoom
    window.addEventListener('resize', function() {
        // Memicu ulang rendering untuk memastikan konsistensi
        const body = document.body;
        const html = document.documentElement;

        // Secara periodik memastikan ukuran tetap konsisten
        setTimeout(() => {
            body.style.fontSize = body.style.fontSize; // Ini akan memicu ulang rendering
        }, 100);
    });
}

// Jalankan fungsi saat DOM siap
document.addEventListener('DOMContentLoaded', setupZoomConsistency);

