function changeAngkaToString(angka){
    var string = angka.toString()
    return string
  }
  
  function multiplicationString(angka){
    var hasilKali = 1;
    if(angka.length === 1){ 
      hasilKali = hasilKali * Number(angka);
    } else {
      var array = angka.split('')
      for(var i=0; i<array.length; i++){
        hasilKali = hasilKali * Number(array[i]);
      }
  
      // console.log(String(hasilKali).length)
      if(String(hasilKali).length === 1){
        return hasilKali
      } 
      else if(String(hasilKali).length > 1){
        return kaliTerusRekursif(hasilKali);
      }
    }
    return hasilKali;
  }
  
  function kaliTerusRekursif(angka) {
    var angkaString = changeAngkaToString(angka);
    var multiply = multiplicationString(angkaString);
    return multiply;
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6                              bb