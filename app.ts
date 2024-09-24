// syntax let abc=()=>{}
// lamda/ arrow function
let addition = (a:number,b:number)=>{
    return a+b;
}
console.log(addition(5,6));

let table = (a:number)=>{
for(let i=1; i<=10; i++) 
    console.log(a  +" " +'X' +" " + i + " " +  "=" +" "+ a*i)   
}  
table(9)

let areaOfSquare=(x:number)=>{
    let s:number=x*x;
    console.log(s)
};
areaOfSquare(4)

let country_name=(c:string)=>{
    return c
}
console.log(country_name)
country_name("KSA");

let areaOfCircle=(r:number)=>{
    const pie=3.142
    console.log(pie*r*r)
}
areaOfCircle(5)


 
