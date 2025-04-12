

var arr1 = []
var arr2 = []
let aux = 0 //sula count 
let bool = false //normal play or sula


function go(){
    let s = new Start()
    s.table()
}
/********************************************************************************************************/

function fill(){//fill spaces with array values
    let r = new Reset()
    let e = new Events()
    r.clean()//calling function 'clean' to redefine background to avoid overlap
    var div = parseInt(document.getElementById('selected').selectedIndex)
    var w = ''

    switch(div){
        case 0:{
            w = '240px'
        }break
        case 1:{
            w = '420px'
        }break
        case 2:{
            w = '600px'
        }break
        case 3:{
            w = '960px'
        }break
        case 4:{
            w = '1320px'
        }break
    }
    var container1 = document.getElementById('arena1');
    container1.style.width = w
    var container2 = document.getElementById('arena2');
    container2.style.width = w
    for (var i = 0; i < arr1.length; i++) {
        var qd1 = document.createElement("button");
        qd1.className = "qd1";
        if(i < arr1.length/2){
            qd1.textContent = arr1[-1 - i + arr1.length];
        }else{
            qd1.textContent = arr1[i - arr1.length/2];
        }
        qd1.addEventListener('click', (event) => e.btnClick1(event))
        container1.appendChild(qd1);
    }

    for (var i = 0; i < arr2.length; i++) {
        var qd2 = document.createElement("button");
        qd2.className = "qd2";
        if(i < arr2.length/2){
            qd2.textContent = arr2[arr2.length/2 - i - 1];
        }else{
            qd2.textContent = arr2[i];
        }
        qd2.addEventListener('click', (event) => e.btnClick2(event))
        container2.appendChild(qd2);
    }
}

/*******************************************************************************************************/
class Start {

    constructor(){
    }

    table(){//choose of table
        var t = document.getElementById('selected').selectedIndex
        document.getElementById('go').disabled = true
        document.getElementById('selected').disabled = true
    
        switch(t){
            case 0:{
                this.start(8)
            }break
            case 1:{
                this.start(14)
            }break
            case 2:{
                this.start(20)
            }break
            case 3:{
                this.start(32)
            }break
            case 4:{
                this.start(44)
            }break
            default:{}
        }
    }

    start(a){//starting filling arrays with value 2
        for (var i = 0; i < a; i++){
            arr1[i] = 2
            arr2[i] = 2
        }
        fill()
    }
}


/******************************************************************************************/
class Events {

    constructor(){
        this.pl = new Play()
        this.v = new Verification()
    }

    btnClick1(event){
        var buttonClicked = event.target;
        var b = Array.from(buttonClicked.parentNode.children).indexOf(buttonClicked);
        if(bool && !document.getElementById('pl1').disabled){
            if(b < arr1.length/2){
                b =  arr1.length -1 - b
                if(arr1[b] != 0){
                    arr1[b] = 0
                    aux ++
                    fill()
                }
            }else{
                b = b - arr1.length/2
                if(arr1[b] != 0){
                    arr1[b] = 0
                    aux ++
                    fill()
                }else{
                    alert('not allowed. Choose other')
                }
            }
            if(arr1.length == 8){
                if(aux == 1){
                    aux = 0
                    bool = false
                    document.getElementById('pl1').disabled = false
                    document.getElementById('pl2').disabled = true
                }
            }else{
                if(aux == 2){
                    aux = 0
                    bool = false
                    document.getElementById('pl1').disabled = false
                    document.getElementById('pl2').disabled = true
                }
            }
            if(!this.v.verifyEmpty(arr1)){
                this.v.gameOver(true)
            }
        }else{
            bool = false
            aux = 0
            if(!this.v.allFilled(arr1, b + 1)){

            }else{
                var p = document.getElementById('selected').selectedIndex
                document.getElementById('pl1').disabled
                if(!document.getElementById('pl1').disabled){
                    switch(p){
                    case(0):{//4
                        if(b > 3 & b < 8){
                            b = b - 4
                        }else{
                            b = arr1.length - b -1
                        }
                    }break
                    case(1):{//7
                        if(b > 6 & b < 14){
                            b = b - 7
                        }else{
                            b = arr1.length - b -1
                        }
                        
                    }break
                    case(2):{//10
                        if(b > 9 & b < 20){
                            b = b - 10
                        }else{
                            b = arr1.length - b -1
                        }
                        
                    }break
                    case(3):{//16
                        if(b > 15 & b < 32){
                            b = b - 16
                        }else{
                            b = arr1.length - b -1
                        }
                    }break
                    case(4):{//22
                        if(b > 21 & b < 44){
                            b = b - 22
                        }else{
                            b = arr1.length - b -1
                        }
                    }break
                    default:{}
                    }
                    if(arr1[b] != 0){
                        if(arr1[b] == 1){
                            if(this.v.verifyMultiple(arr1)){
                                alert('not allowed. More than one')
                            }else{
                                document.getElementById('pl1').disabled = true
                                document.getElementById('pl2').disabled = false
                                this.pl.play(arr1, arr2, b)
                            }
                        }else{
                            document.getElementById('pl1').disabled = true
                            document.getElementById('pl2').disabled = false
                            this.pl.play(arr1, arr2, b)
                        }
                        
                    }else{
                        alert('not allowed')
                    }
                }
            }
        }
        
    }

    btnClick2(event){
        var buttonClicked = event.target;
        var b = Array.from(buttonClicked.parentNode.children).indexOf(buttonClicked);
        if(bool && !document.getElementById('pl2').disabled){
            if(b < arr2.length/2){
                b = arr2.length/2 - b - 1
                if(arr2[b] != 0){
                    arr2[b] = 0
                    aux++
                    fill()
                }
            }else{
                if(arr2[b] != 0){
                    arr2[b] = 0
                    aux ++
                    fill()
                }else{
                    alert('not allowed. Choose other')
                }
            }
            if(arr2.length == 8){
                if(aux == 1){
                    aux = 0
                    bool = false
                    document.getElementById('pl1').disabled = true
                    document.getElementById('pl2').disabled = false
                }
            }else{
                if(aux == 2){
                    alert('aux = '+aux)
                    aux = 0
                    bool = false
                    document.getElementById('pl1').disabled = true
                    document.getElementById('pl2').disabled = false
                }
            }
            if(!this.v.verifyEmpty(arr2)){
                this.v.gameOver(false)
            }
        }else{
            bool = false
            aux = 0
            if(!this.v.allFilled(arr2, arr2.length - b)){
            }else{
                var p = document.getElementById('selected').selectedIndex
                if(!document.getElementById('pl2').disabled){
                    //alert('down enabled play(arr2, arr1, b)')
                    switch(p){
                    case(0):{//4 down enabled
                        if(b < 4){
                            b = arr2.length/2 - b - 1
                            //alert('downUp '+b)
                        }else{
                            b
                            //alert('downDown '+b)
                        }
                    }break
                    case(1):{//7
                        if(b < 7){
                            b = arr2.length/2 - b - 1
                            //alert('downUp '+b)
                        }else{
                            b
                            //alert('downDown '+b)
                        }
                    }break
                    case(2):{//10
                        if(b < 10){
                            b = arr2.length/2 - b - 1
                            //alert('downUp '+b)
                        }else{
                            b
                            //alert('downDown '+b)
                        }
                    }break
                    case(3):{//16{
                        if(b < 16){
                            b = arr2.length/2 - b - 1
                        }else{
                            b
                        }
                    }break
                    case(4):{//22
                        if(b < 7){
                            b = arr2.length/2 - b - 1
                        }else{
                            b
                        }
                    }break
                    default:{}
                    }
                    if(arr2[b] != 0){
                        if(arr2[b] == 1){
                            if(this.v.verifyMultiple(arr2)){
                                alert('not allowed. More than one')
                            }else{
                                document.getElementById('pl2').disabled = true
                                document.getElementById('pl1').disabled = false
                                this.pl.play(arr2, arr1, b)
                            }
                        }else{
                            document.getElementById('pl2').disabled = true
                            document.getElementById('pl1').disabled = false
                            this.pl.play(arr2, arr1, b)
                        }	
                    }else{
                        alert('not allowed')
                    }
                }
            }
        }
        
    }
}


/**************************************************************************************/

class CallTrue {

    constructor(){

    }

    callTrue(arr, p){//analyse the other array to catch if it is done true
        if( p < arr.length/2 & arr[(arr.length)/2 - 1 - p] != 0){
            bool = true
            alert('bool: '+bool)
            this.kill(arr, p)//call first kill
            this.v = new Verification()
            if(this.v.verifyEmpty(arr)){
                bool = true
            }else{
                this.v.gameOver()
            }
        }
        fill()
    }
    
    kill(arr, p){
        arr[(arr.length/2 - 1 - p)] = 0
        arr[(arr.length/2 + p)] = 0
        fill()
    }

}

/*********************************************************************************/
class Sula {

    constructor(){

    }
    singleError(num){
        if(num){
            alert('_empty entry_ true')
            document.getElementById('pl2').disabled = true
            document.getElementById('pl1').disabled = false
        }else{
            alert('_empty entry_ false')
            document.getElementById('pl2').disabled = false
            document.getElementById('pl1').disabled = true
        }
    }

    single(arr1, arr2, p, num){
        this.c = new CallTrue()
        if(p < arr1.length - 1){
            if(arr1[p] == 1 && arr1[p + 1] == 0){
            arr1[p] = 0
            p++
            arr1[p] = 1
            this.c.callTrue(arr2, p)
            }else{
                this.singleError(num)
            }
        }else{
            if(p == arr1.length - 1){
                if(arr1[p] == 1 & arr1[0] == 0){
                    arr1[p] = 0
                    p = 0
                    arr1[p] = 1
                    this.c.callTrue(arr2, p)
                }else{
                    this.singleError(num)
                }
            }else{
                alert('_error single_')
            }
        }
    }

}

/**************************************************************************************/
function reset(){
    let r = new Reset()
    r.reset()
}

class Reset {

    constructor(){
        
    }

    clean(){
        var container1 = document.getElementById('arena1')
        var container2 = document.getElementById('arena2')
        container1.innerHTML = ''
        container2.innerHTML = ''
    }

    reset(){//reset to redefine game
        this.clean()
        arr1 = []
        arr2 = []
        document.getElementById('selected').disabled = false
        document.getElementById('go').disabled = false
        document.getElementById('pl1').disabled = false
        document.getElementById('pl2').disabled = false
        document.getElementById('pl1').style.backgroundColor = '#ffffff'
        document.getElementById('pl2').style.backgroundColor = '#ffffff'
        aux = 0
        bool = false
    }
}


/******************************************************************************************/
class Play {
    
    constructor(){
        this.v = new Verification()
    }
    play(arr1, arr2, p){//cicle for play
       let au = p
        if(!this.v.verifyMultiple(arr1)){
            p = -1
        }
        if (p >= 0 & p <= arr1.length - 1){
            au = 0;
            au = arr1[p]
            arr1[p] = 0
            p++
            if(p == arr1.length){
                p = 0
            }
            while(au > 0){
            //daley()
                arr1[p]++
                au--
                if(p == arr1.length - 1){
                    if (au == 0){
                        if(arr1[p] > 1){
                            au = arr1[p]
                            arr1[p] = 0
                            p = 0
                        }else{
                            break
                        }
                        
                    }else{
                        p = 0
                    }
                }else{
                    if(au == 0){   
                        if(arr1[p] > 1){
                            au = arr1[p]
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
            this.c = new CallTrue()
            this.c.callTrue(arr2, p)
        }else{
            if(p == -1){
                this.s = new Sula()
                this.s.single(arr1, arr2, au)
            }else{
                alert('_position error_')
            }
        }
        fill()
    }

}

/****************************************************************************************** */
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
