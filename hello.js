console.log('manali')
let a=90;
console.log(a)
console.log(typeof a)
const person={
    'firstName':'manali',
    'age':90
}
console.log(person.firstName)
const String="manali"
console.log(String+1)
console.log(typeof String)
person['friend']='jain'
person['age']=100
console.log(person.age)
let d=9;
if(d>9)
{
    console.log("yes")
}
else{
    console.log('no')
}
let f=5;
let sum=0;
for(i=1;i<=5;i++)
{
    sum=sum+i;
}
console.log(sum)

let obj={
    'manali':'jain',
    'age':90
}
for(let g in obj){
    console.log(g)
}

let name1='manali'
console.log(name1.length)

let boy1='kunal'
let boy2='jain'
let sentence=`${boy1} is friend of ${boy2}`
console.log(sentence)

let first='manali jain'
let chance=first.replace('jain','Jain')
console.log(chance)

let last='manali'
let last1='jain'
console.log(last.concat("is a friend of"+last1))

const array=[1,2,3,4,5]
for(let i=0;i<array.length;i++)
{
    console.log(i)
}

let array1=[23,45,67,78]
let c1=array1.toString()
console.log(c1)
let d1=array1.join("-")
console.log(d1)

let num3=[1,2,34,5]
num3.splice(3,1,34,56)
console.log(num3)

let num4=[1,2,3,4,5]
num4.forEach((element)=>{
    console.log(element*element)
})

let  num5="harry"
let num6=array.from(num5)
console.log(num6)

let arr=[2,3,4,56,7,8]
let arr2=arr.filter((value)=>{
    return value%2==0
})
console.log(arr)

let n=prompt(enter an array)
n=Number.parseInt(n)
let a1=[1,2,3,4,5]
a1.push(n)
console.log(a1)

let a2=[1,2,3,4,5]
let a3;
do{
    let n=prompt("enter an array")
    n3=Number.parseInt(n3)  
    a2.push(n3)
    console.log(a2)
}while(n3!=0);

let r=[10,20,67,59]
let s=r.filter((x)=>{
    return (x%10==0)
})
console.log(s)

let y=[1,2,3,4,5]
let w=y.map((o)=>{
    return (o*o)
})
console.log(w)

let q=[1,2,3,4]
let z=q.reduce((i,k)=>{
        return (i*k)
})
console.log(z)

alert("enter a no")
let m=prompt("enter m")
let l=confirm("do you wanr to write")
if(l){
    document.write(m)
}
else{
    document.write("no")
}

let number=[1,2,3,4]
let ar=number.reduce((x1,x2)=>{
    return (x1+x2)
}, 100)
console.log(ar)