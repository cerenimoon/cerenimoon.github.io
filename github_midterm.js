 var sayac = 0;
    const changeImage = function(){
      var imgarray = ["gazi_1.jpg", "gazi_2.jpg", "gazi_3.jpeg", "gazi_4.jpg"];
      var img = $("#gazi_image");
      if(sayac <= 3){
        img.attr("src", imgarray[sayac]);
        sayac++;
      }
      else{
        sayac=0;
      }
    }
    var d = new Date();
    var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
    $("#duyuru").html("DUYURULAR");
    $("#etkinlik").html("ETKİNLİKLER");
    $("#haber2").html("HABERLER");
    $("#takvim").html("TAKVİM" + " " + " " + d.getDay() + " " + " " + aylar[d.getMonth()] + " " + " " + d.getFullYear());
    $("#fayda").html("FAYDALI LİNKLER");
