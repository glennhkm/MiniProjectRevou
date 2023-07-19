function hasilperhitungan(){   
    var beratbadan = parseFloat(document.getElementById("bb").value);
    var tinggibadan = parseFloat(document.getElementById("tb").value/100);
    
    //rumus BMI
    var hasil = beratbadan / (tinggibadan**2);
    
    //membuat condition agar hasilnya muncul
    if(!isNaN(hasil)){
        document.getElementById("tulisanhasil").innerHTML = "Hasil"
        document.getElementById("hasilangka").innerHTML = hasil.toFixed(2);
        if(hasil < 18.5){
            document.getElementById("hasilpenjelasan").innerHTML = "Anda kekurangan berat badan";
        }
        else if(hasil >= 18.5 && hasil <= 24.9){
            document.getElementById("hasilpenjelasan").innerHTML = "Ideal";
        }
        else if(hasil >= 25.0 && hasil <+ 29.9){
            document.getElementById("hasilpenjelasan").innerHTML = "Anda kelebihan berat badan";
        }
        else{
            document.getElementById("hasilpenjelasan").innerHTML = "Anda obesitas";
        }
        document.getElementById("penjelasanakhir").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda"
    }
}

// function hasilperhitungan() {
//     var beratbadan = parseFloat(document.getElementById("BB").value);
//     var tinggibadan = parseFloat(document.getElementById("TB").value) / 100; // Mengubah tinggi dari cm menjadi meter

//     if (beratbadan > 0 && tinggibadan > 0) {
//         var hasil = beratbadan / (tinggibadan ** 2);
//         document.getElementById("hasil").innerHTML = hasil.toFixed(2);
//     } else {
//         document.getElementById("hasil").innerHTML = "Silakan masukkan berat dan tinggi yang valid.";
//     }
// }
