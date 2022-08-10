function angryProfessor(k, a) {
    let positive = 0;
    let negative = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0)
            positive++;
        else 
            negative++;    
    }

    if(positive >= k){
        return 'NO';
    } else {
        return 'YES';
    }
}

console.log(angryProfessor(3, [-2,-1,0,1,2]));