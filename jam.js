function updateJam() {
    const sekarang = new Date();

    let jam = sekarang.getHours().toString().padStart(2, '0');
    let menit = sekarang.getMinutes().toString().padStart(2, '0');
    let detik = sekarang.getSeconds().toString().padStart(2, '0');

    document.getElementById("jam").innerHTML = `${jam}:${menit}:${detik}`;

    const hariMasehi = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const bulan = ["Januari","Februari","Maret","April","Mei","Juni",
                   "Juli","Agustus","September","Oktober","November","Desember"];

    const hariJawa = ["Legi","Pahing","Pon","Wage","Kliwon"];

    let selisihHari = Math.floor(sekarang.getTime() / 86400000);
    let pasaran = hariJawa[selisihHari % 5];

    let hari = hariMasehi[sekarang.getDay()];
    let tgl = sekarang.getDate();
    let bln = bulan[sekarang.getMonth()];
    let thn = sekarang.getFullYear();

    document.getElementById("tanggal").innerHTML =
        `${hari} ${pasaran}, ${tgl} ${bln} ${thn}`;
}

setInterval(updateJam, 1000);
updateJam();