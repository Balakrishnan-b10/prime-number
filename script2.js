function changecolor(){
    var color = document.getElementById('color').value;
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor=color;
}
function prime()
    {
    var number = document.getElementById("prime").value;
    var isprime;
    for(let i=2; i<=number; i++){
        isprime = 1;
        for(let j=2; j<i; j++){
            if(i % j === 0){
             isprime = 0;
             break;
            }
        }
        if(isprime === 1){
            console.log(i);
        }
    }
}
function fun1(){
    a=document.getElementById('num1').value;
    f=1;
    if(a=='')
        {
            document.getElementById('mess').innerHTML= "Please enter the Number";
            return false;
        }
        else{
            for(var i=1;i<=a;i++)
                {
                    f=f*i;
                }
                document.getElementById('mess').innerHTML = "The Factorial is :" +f;
                return false;
        }
}
