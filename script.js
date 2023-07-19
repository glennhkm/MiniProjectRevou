//membuat fungsi perhitungan
function hasilperhitungan(){   
    var beratbadan = parseFloat(document.getElementById("bb").value);
    var tinggibadan = parseFloat(document.getElementById("tb").value/100);
    
    //rumus BMI
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
}