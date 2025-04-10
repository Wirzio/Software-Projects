class Sula{
    Sula(){

    }

    sula(arr2) {
        cont = 0
            if(arr2.length == 8){
              while(true){
                try{
                  p = parseInt(prompt('sula') - 1)
                }catch(e){p = -1}
                if( p >= 0){
                  if(arr2[p] != 0 & p >= 0 & p < arr2.length){
                    arr2[p] = 0
                    fill(arr1, arr2)
                    break
                  }else{
                    alert('nul point');
                  }
                }
              }
          
            }else{
              while(cont < 2){
                try{
                  p = parseInt(prompt('sula') - 1)
                }catch(e){p = -1}
                if(arr2[p] != 0 & p >= 0 & p < arr2.length){
                  arr2[p] = 0
                  cont ++
                  fill(arr1, arr2)
                  alert('good')
                }else{
                  alert('null point');
                }
              }
              
            }
            return arr2
          }
}