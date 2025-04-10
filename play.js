
class Play{

    constructor(){
        let c = new CallTrue()
    }
    
    play(arr1, arr2, p){//cicle for play
        aux = p
        
        if(b = verifyMultiple(arr1)){
          alert('Result: '+b)
        }else{
          p = -1
        }
        if (p >= 0 & p <= arr1.length - 1){
          aux = 0;
          aux = arr1[p]
          arr1[p] = 0
          p++
          if(p == arr1.length){
              p = 0
          }
          while(aux > 0){
              arr1[p]++
              aux--
              if(p == arr1.length - 1){
                  if (aux == 0){
                      if(arr1[p] > 1){
                          aux = arr1[p]
                          arr1[p] = 0
                          p = 0
                      }else{
                          break
                      }
                      
                  }else{
                      p = 0
                  }
              }else{
                  if(aux == 0){   
                      if(arr1[p] > 1){
                          aux = arr1[p]
                          arr1[p] = 0
                          p++
                      }else{
                          break
                      }
                  }else{
                      p++
                  }
              }
          }
          callTrue(arr1, arr2, p)
        }else{
          if(p == -1){
            alert('_single call_')
            single(arr1, arr2, aux)
          }else{
            alert('_position error_')
          }
        }
      }
}