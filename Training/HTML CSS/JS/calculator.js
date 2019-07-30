function calci(check_id){
    var first = parseFloat(document.getElementById('fno').value);
    var second = parseFloat(document.getElementById('sno').value);
    if (check_id=='add'){
        document.getElementById("demo").innerHTML ='Addition is  '+ (first+second)
    }
    else if(check_id=='sub'){
        document.getElementById("demo").innerHTML ='subtractiontion is  '+ (first-second)
    }
    else if(check_id=='mul'){
        document.getElementById("demo").innerHTML ='Multiplication is  '+ (first*second)
    }
    else if(check_id=='div'){
        document.getElementById("demo").innerHTML ='Division is  '+ (first/second)
    }
}