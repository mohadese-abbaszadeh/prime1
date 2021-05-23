let array=[];

for (let counter = 2; counter <= 100; counter++) {

    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter%i==0 && i!==counter) {
            notPrime = true;
            
        }
    }
    if (notPrime == false) {
        array.push(counter);
                
    }
   
}
console.log(array);







/////////////////////////////////////////////////////////////

// soal 2


// let array=[];

// for(let c=101 ; c<=200 ; c++){
//     let notPrime=false;
//     for(let i=101 ; i<=c ; i++){
//         if (c % i == 0 && i!==c){
//             notPrime=true;
//         }
//     }
//     if (notPrime==false) {
//         array.push(c);
//         break;
//     }
// }
// console.log(array);

