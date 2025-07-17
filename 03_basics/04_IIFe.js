//IIFE(immediately invoked function expressions)
(function chai (){
    console.log(`DB CONNECTED`);
    
})();
// (function aurcode (){
//     console.log(`DB CONNECTED TWO`);
    
// })()
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Kartik')