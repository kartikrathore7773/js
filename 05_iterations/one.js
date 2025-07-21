//for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//     //    console.log(`ineer loop value${i} and inner loop value${j}`);
//     console.log(i + '*' + j + ' = ' +i*j);
    
        
//     }
    
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }



for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
    
}