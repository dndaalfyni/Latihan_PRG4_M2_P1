// JavaScript source code
function validate() {
    // tambahkan kode validasi di sini
    let nama = document.getElementById("nama").value;
    let matakuliah = document.getElementById("matakuliah").value;
    let nilai = document.getElementById("nilai").value;
    let validate = true;

    // validasi nama
    if (nama.trim() === "") {
        document.getElementById("error_nama").innerText = "Harap isi field nama!";
        validate = false;
    } else {
        let namaPattern = /^[a-zA-Z\s]*$/;
        if (!namaPattern.test(nama.trim())) {
            document.getElementById("error_nama").innerText = "Nama harus berisi huruf atau spasi!";
            validate = false;
        } else if (nama.length > 20) {
            document.getElementById("error_nama").innerText = "Nama maksimal 20 huruf!";
            validate = false;
        } else {
            document.getElementById("error_nama").innerText = "";
        }
    }

    // validasi mata kuliah
    if (matakuliah === "") {
        document.getElementById("error_matakuliah").innerText = "Harap pilih Mata Kuliah!";
        validate = false;
    } else {
        document.getElementById("error_matakuliah").innerText = "";
    }

    // validasi nilai
    if (nilai === "") {
        document.getElementById("error_nilai").innerText = "Harap isi field Nilai!";
        validate = false;
    } else if (nilai < 0 || nilai > 100) {
        document.getElementById("error_nilai").innerText = "Nilai minimal adalah 0 dan maksimal 100!";
        validate = false;
    } else {
        document.getElementById("error_nilai").innerText = "";
    }

    return validate;
}

$(document).ready(function () {
    $("#batalButton").click(function () {
        $("#nama").val("");
        $("#matakuliah").val("");
        $("#nilai").val("");
        $("#error_nama").text("");
        $("#error_matakuliah").text("");
        $("#error_nilai").text("");
    });
});


