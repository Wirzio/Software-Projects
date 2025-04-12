class Verification {

    constructor(){

    }
    verifyMultiple(arr){//verify if any space has more than one
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > 1){
            return true
            }
        }
        return false
    }

    
    allFilled(arr, b){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != 2){
                return true
            }
        }
        if(b > arr.length/2){
            return true
        }else{
            return false
        }
    }

    gameOver(a){
        alert('gameOver')
        if(a){
            document.getElementById('pl1').style.backgroundColor = 'green'
            document.getElementById('pl2').style.backgroundColor = 'red'
        }else{
            document.getElementById('pl2').style.backgroundColor = 'green'
            document.getElementById('pl1').style.backgroundColor = 'red'
        }
        document.getElementById('pl1').disabled = true
        document.getElementById('pl2').disabled = true
    
    }

    verifyEmpty(arr){
        for(let i = 0; i < arr1.length; i++){
            if(arr[i] != 0){
                return true
            }
        }
        return false
    }
}

export default Verification