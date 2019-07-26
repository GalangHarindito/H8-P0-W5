
//   ----------------- SORTING ------------------------------------

function sorting(array) {
        for(var i=array.length-1;i>=0;i--){
          for (var j=0;j<i;j++){
            if(array[j]<array[j+1]){
              var temp = array[j]
              array[j] = array[j+1]
              array[j+1]=temp
          }
        }
        // return array
      };
  }
  
 //--------------------------------------------------------------------

//   ----------------- GET TOTAL ------------------------------------

  function getTotal(array1) {
  var number = makeUnique(array1)
  var countS = []

  for(var i=0;i<number.length;i++){
  var count = 0
  for(var j=0;j<array1.length;j++){
    if(number[i]=== array1[j]){
       count ++
     }
    }
    countS.push(count)
   }
   return countS
  }

 //--------------------------------------------------------------------


//   ----------------- MAKE UNIQUE------------------------------------
  function makeUnique(array2) {
    var arrUniqe = []
    for (var i = 0;i< array2.length; i++) {
      if (unique(array2[i], arrUniqe) === false) {
          arrUniqe.push(array2[i]);
      }
    }
    return arrUniqe
   }

  function unique(string, array){
    for(var i=0;i<array.length;i++){
      if(array[i] === string){
        return true
      }
    }
    return false
  }
  
 //--------------------------------------------------------------------


  function mostFrequentLargestNumbers(arrNumber) {
      if(arrNumber.length === 0){
          return "''"
      }
    sorting(arrNumber);
    var countHighest = getTotal(arrNumber);
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak '+ countHighest[0] + ' kali'
  
  }

 
 
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''