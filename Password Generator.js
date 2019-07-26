
//---------------------------CHANGE VOCAL -----------------------------------

function changeVocals (str) {
    
    var  newStr =''
    var flag = false
    var translateVocal = {
      a : 'b',
      i : 'j',
      u : 'v',
      e : 'f',
      o : 'p'
    }

    for(var i=0;i<str.length;i++){
      flag = false
      if(translateVocal[str[i]]){
      newStr += translateVocal[str[i]]
      flag = true
      }
      if(flag === false){
        newStr += str[i]
      }
    } 
   return newStr
}
//-------------------------------------------------------------------------

//------------------------------REVERSE -----------------------------------
  function reverseWord (str) {
    var newStr = ''

    for(var i=str.length-1;i>=0;i--){
      newStr += str[i]
    }
    return newStr
  }

//-------------------------------------------------------------------------

//----------------------------LOWER UPPER ---------------------------------

  function setLowerUpperCase (str) {
    //code di sini
    var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var a = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''

    for (var i=0;i<str.length;i++){
        for(var j=0;j<a.length;j++){
          if(str[i] === a[j]){
            result += A[j]
          }else if(str[i] === A[j]){
            result += a[j]
          }
        }
        if(str[i] === ' '){
          result += ' '
        }
    }
    return result
  }

//-------------------------------------------------------------------------

//----------------------------- REMOVE SPACE ------------------------------
  function removeSpaces (str) {
    //code di sini
    result =''

    for(var i=0;i<str.length;i++){
      if(str[i] !== ' '){
        result += str[i]
      }
    }
    return result
  }


  //----------------------------- MAIN FUNCTION ------------------------------
  function passwordGenerator (name) {
    //code di sini
    var vocal = changeVocals (name)
    var reverse = reverseWord (vocal)
    var lowUp = setLowerUpperCase (reverse)
    var result = removeSpaces (lowUp)

    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return result
  }
  
  //--------------------------------------------------------------------


  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'