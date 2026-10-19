
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tentukanStatus(nilai) {
    return nilai >= 60 ? "Lulus" : "Belum lulus";
}

function validasiNilai(nilai) {
    return Number.isFinite(nilai) &&
           nilai >= 0 &&
           nilai <= 100;
}

document.getElementById("formNilai")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const tugas = Number(document.getElementById("tugas").value);
        const uts = Number(document.getElementById("uts").value);
        const uas = Number(document.getElementById("uas").value);

        const pesan = document.getElementById("pesan");
        const hasil = document.getElementById("hasil");

        pesan.textContent = "";
        hasil.style.display = "none";

        if (
            !validasiNilai(tugas) ||
            !validasiNilai(uts) ||
            !validasiNilai(uas)
        ) {
            pesan.textContent =
                "Masukkan nilai antara 0 sampai 100!";
            return;
        }

        const akhir = hitungNilaiAkhir(tugas, uts, uas);

        document.getElementById("nilaiAkhir").textContent =
            akhir.toFixed(2);

        document.getElementById("predikat").textContent =
            tentukanPredikat(akhir);

        document.getElementById("status").textContent =
            tentukanStatus(akhir);

        hasil.style.display = "block";
});
