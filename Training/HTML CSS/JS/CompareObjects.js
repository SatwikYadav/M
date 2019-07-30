function CompareObjects(){
    var i=0,j=0;
    for (var key in person1){
        i++
    }
    for (var key in person1){
        j++
    }
    if (i==j){
        for (var key in person2){
            if(person1[key]!=person2[key]){
                console.log('NOT SAME')
            return false
            }
        }
        console.log('SAME')
        return true
    }
    else{
        console.log('NOT SAME')
    }
}

var person1 = {name:'satwik',age:23,college:'nhce',Dept:'ECE',Phn_no:9010684039}
var person2 = {}
for (var key in person1){
    person2[key]=person1[key]
}
//person2.name='saurav'
//person2.phn='oneplus'
CompareObjects()
