/**
 * Data Galeri HMPS Akuntansi
 * Foto yang ada saat ini adalah periode 2025.
 * Menambahkan slot untuk 2026, 2027, 2028 dengan template "Foto Tidak Tersedia".
 */
const galleryData = [
    {
        id: 'acp1',
        title: 'Accounting Competition Plus',
        years: {
            '2025': { img: '../images/gallery/acp1.webp', desc: 'Pelaksanaan Babak Penyisihan Secara Online (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'acp2',
        title: 'Accounting Competition Plus',
        years: {
            '2025': { img: '../images/gallery/acp2.webp', desc: 'Pelaksanaan Babak Semifinal Secara Offline (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'acp3',
        title: 'Accounting Competition Plus',
        years: {
            '2025': { img: '../images/gallery/acp3.webp', desc: 'Dokumentasi Pemenang Bersama Panitia (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'bakmas1',
        title: 'Bakti Masyrakat',
        years: {
            '2025': { img: '../images/gallery/bakmas1.webp', desc: 'Mengajar Ngaji di TPQ (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'bakmas2',
        title: 'Bakti Masyarakat',
        years: {
            '2025': { img: '../images/gallery/bakmas2.webp', desc: 'Berbagi Sembako dan Bibit Tanaman (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'bakmas3',
        title: 'Bakti Masyarakat',
        years: {
            '2025': { img: '../images/gallery/bakmas3.webp', desc: 'Senam Bersama Warga Dusun Banyu Windu (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'webnas3',
        title: 'Webinar Nasional',
        years: {
            '2025': { img: '../images/gallery/webnas3.webp', desc: 'Briefing Panitia Webnas (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'webnas1',
        title: 'Webinar Nasional',
        years: {
            '2025': { img: '../images/gallery/webnas1.webp', desc: 'Pelaksanaan Webnas Melalui Zoom (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'webnas2',
        title: 'Webinar Nasional',
        years: {
            '2025': { img: '../images/gallery/webnas2.webp', desc: 'Momen Persiapan Panitia (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'rabes',
        title: 'Rapat Besar',
        years: {
            '2025': { img: '../images/gallery/rabes.webp', desc: 'Pelaksanaan Rapat Besar Anggota (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'mubes',
        title: 'Musyawarah Besar',
        years: {
            '2025': { img: '../images/gallery/mubes.webp', desc: 'Penentuan Direktur Baru (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'olahraga',
        title: 'Olahraga Bareng',
        years: {
            '2025': { img: '../images/gallery/olahragabareng.webp', desc: 'Badminton Bersama Anggota (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'barbar',
        title: 'Akuntansi Barbar',
        years: {
            '2025': { img: '../images/gallery/akuntansibarbar.webp', desc: 'Belajar Bareng Sebelum UTS/UAS (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'studibanding',
        title: 'Studi Banding',
        years: {
            '2025': { img: '../images/gallery/studibanding.webp', desc: 'Bersama BPD Jateng dan Unaki (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'bukber',
        title: 'Buka Bersama',
        years: {
            '2025': { img: '../images/gallery/bukabersama.webp', desc: 'Momen Keakraban Ramadhan (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'takjil',
        title: 'Berbagi Takjil',
        years: {
            '2025': { img: '../images/gallery/bagitakjil.webp', desc: 'Kegiatan Sosial Sore Hari (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'baksos',
        title: 'Bakti Sosial',
        years: {
            '2025': { img: '../images/gallery/baksos.webp', desc: 'Kunjungan ke Panti Asuhan (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    },
    {
        id: 'oprec',
        title: 'Open Recruitment',
        years: {
            '2025': { img: '../images/gallery/oprec.webp', desc: 'Penerimaan Anggota Baru (2025)' },
            '2026': { img: '', desc: 'Dokumentasi periode 2026 belum tersedia.' },
            '2027': { img: '', desc: 'Dokumentasi periode 2027 belum tersedia.' },
            '2028': { img: '', desc: 'Dokumentasi periode 2028 belum tersedia.' }
        }
    }
];
