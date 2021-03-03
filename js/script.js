// selector
$_ = e => document.querySelector(e)
$$_ = e => document.querySelectorAll(e)
// variabls
const Item = $$_('.Item');
const Input = $_('.showInput')
const beforeInput = $_('.beforeInput')
var MEMORY;
var POW = ROOT = false
var PARENTHESES = 0

Item.forEach(e => e.addEventListener('click', keypress))
$_('.Delete').addEventListener('click', clearAll)
$_('.output').addEventListener('click', OutputFun)
$_('.Backspace').addEventListener('click', Backspace)
$_('.Pow').addEventListener('click',POWNUMDERS)
$_('.root').addEventListener('click',ROOTNUMDERS)





$_('.abs').addEventListener('click',()=>{
    OutputFun();
    Input.value = Math.abs(+Input.value)
    OutputFun();
})
$_('.Pow_2').addEventListener('click',()=>{
    OutputFun();
    Input.value = Math.pow(+Input.value,2)
    OutputFun();
})
$_('.Pow_3').addEventListener('click',()=>{
    OutputFun();
    Input.value = Math.pow(+Input.value,3)
    OutputFun();
})
var numPOW;
function POWNUMDERS(){
    if(!POW){
        OutputFun();
        numPOW = Input.value;
        Input.value = '';
        POW = !POW
    }else{
        Input.value = Math.pow(+numPOW,eval(Input.value));
        POW = !POW
    }
}
$_('.root_2').addEventListener('click',()=>{
    OutputFun();
    Input.value = Math.sqrt(+Input.value)
    OutputFun();
})
$_('.root_3').addEventListener('click',()=>{
    OutputFun();
    Input.value = Math.pow(+Input.value,1/3);
    OutputFun();
})
$_('.root_4').addEventListener('click',()=>{
    OutputFun();
    Input.value = Math.pow(+Input.value,1/4);
    OutputFun();
})
var numROOT;
function ROOTNUMDERS(){
    if(!ROOT){
        OutputFun();
        numROOT = Input.value;
        Input.value = '';
        ROOT = !ROOT
    }else{
        Input.value = Math.pow(+numROOT,1/eval(Input.value));
        ROOT = !ROOT
    }
}

$_('.PI').addEventListener("click",()=>{
    Input.value+=Math.round(Math.PI*1000)/1000
})

$_('.P_opening').addEventListener('click', () => {
    PARENTHESES++;
    keypress(null, '(')
    $_('.P_alert').classList.add('alert_active');
})
$_('.P_close').addEventListener('click', () => {
    if (PARENTHESES > 0) {
        PARENTHESES--;
        keypress(null, ')')
        if (PARENTHESES == 0) $_('.P_alert').classList.remove('alert_active')
    };
})
$_('.sin').addEventListener('click', () => {
    OutputFun();
    if (Input.value) {
        try {
            Input.value = (Math.round((Math.sin(eval(Input.value) * Math.PI / 180)) * 1000)) / 1000;
        } catch (error) { OutputFun() }
    }
})
$_('.cos').addEventListener('click', () => {
    OutputFun();
    if (Input.value) {
        try {
            Input.value = (Math.round((Math.cos(eval(Input.value) * Math.PI / 180)) * 1000)) / 1000;
        } catch (error) { OutputFun() }
    }
})
$_('.tan').addEventListener('click', () => {
    OutputFun();
    if (Input.value) {
        try {
            Input.value = (Math.round((Math.tan(eval(Input.value) * Math.PI / 180)) * 1000)) / 1000;
        } catch (error) { OutputFun() }
    }
})

$_('.M_add').addEventListener('click', () => {
    if (Input.value) {
        OutputFun();
        MEMORY = Input.value;
        $_('.M_alert').classList.add('alert_active');
    }
})

$_('.M_del').addEventListener('click', () => {
    MEMORY = '';
    $_('.M_alert').classList.remove('alert_active');
})

$_('.M_read').addEventListener('click', () => !MEMORY || (Input.value += `(${MEMORY})`))


document.documentElement.addEventListener('keydown', e => {
    e.preventDefault();
    !(e.location === 3) || ((e.key === 'Enter') ? OutputFun() : keypress(null, e.key))
    if (e.key === 'Delete') { clearAll() } else if (e.key === 'Backspace') Backspace()
})

function clearAll() { Input.value = ''; beforeInput.innerHTML = '' }

function Backspace() { !Input.value || (Input.value = Input.value.slice(0, Input.value.length - 1)); Input.value || (beforeInput.innerHTML = '') }

function keypress(e, a) {
    let end = Input.value[Input.value.length - 1];
    try { var num = e.currentTarget.innerHTML } catch (e) { num = a };
    if ((end === '*' || end === '/' || end === '-' || end === '+' || end === '.') && (num === '*' || num === '/' || num === '-' || num === '+' || num === '.')) {
        Input.value = Input.value.slice(0, Input.value.length - 1)
    }
    Input.value += num;

}

function OutputFun() {
    try {
        if (Input.value && !(isNaN(Input.value[Input.value.length - 1]))) {
            beforeInput.innerHTML = Input.value;
            Input.value = eval(Input.value);
            if (beforeInput.innerHTML === Input.value) beforeInput.innerHTML = '';
        } else if (Input.value && Input.value[Input.value.length - 1] === ')') {
            beforeInput.innerHTML = Input.value;
            Input.value = eval(Input.value);
        }
        if(Input.value==='Infinity' || Input.value === 'NaN'){
            beforeInput.innerHTML = '';
            Input.value = 'ERROR'
        }
    } catch (err) {
        beforeInput.innerHTML = '';
        Input.value = 'ERROR'
    }
    !POW||POWNUMDERS();
    !ROOT||ROOTNUMDERS();
}

















