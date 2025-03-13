let i = [1,2,3,4,5,6,7,8,9,10]
let even=[]
let Odd =[]

for( i=1; i<=10 ;i++){
    
    if (i%2 == 0) {
        even.push(i)
       
    }

    else {
          Odd.push(i)
     } 
}  
console.log("Even Numbers :"+ even);
console.log("odd Number :" + Odd ); 