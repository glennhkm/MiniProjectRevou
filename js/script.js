//membuat fungsi perhitungan
function hasilperhitungan(){   
    var jeniskelamin = document.querySelector('input[name="gender"]:checked');
    var usia = parseFloat(document.getElementById("usia").value);
    var beratbadan = parseFloat(document.getElementById("bb").value);
    var tinggibadan = parseFloat(document.getElementById("tb").value/100);

    //membuat validasi
    if (!jeniskelamin) {
        alert("Isi semua form dengan baik dan benar");
        return;
    }

    if (isNaN(beratbadan) || beratbadan <= 0) {
        alert("Berat badan, usia, dan tinggi badan harus diisi, dan dengan nilai lebih besar dari 0.");
        return;
    }

    if (isNaN(usia) || usia < 0) {
        alert("Berat badan, usia, dan tinggi badan harus diisi, dan dengan nilai lebih besar dari 0.");
        return;
    }
    
    if (isNaN(tinggibadan) || tinggibadan <= 0) {
        alert("Berat badan, usia, dan tinggi badan harus diisi, dan dengan nilai lebih besar dari 0.");
        return;
    }
    var hasil = beratbadan / (tinggibadan**2);
    
    //membuat condition agar hasilnya muncul
    if(!isNaN(hasil)){
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
    }

    var nilaiBMI = document.getElementById("hasilangka");
    nilaiBMI.scrollIntoView({ behavior: "smooth" });  
}