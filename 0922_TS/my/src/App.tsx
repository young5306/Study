import React from "react";

function App() {
  //1.
  console.log(Myfunction(1,8,5,6,3));
  //2.
  Myfunction2({ user:'kim', comment:[3,5,4], admin:false});
  //3.
  Myfunction3([40,'wine',false]);
  
  return <div></div>
}

export default App;

//1.
function Myfunction(...arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

//2.
interface MyType2{
  user:string;
  comment:number[];
  admin:boolean;
}
function Myfunction2({user, comment, admin}:MyType2){ 
  console.log(user, comment, admin)
}

//3.
type MyType3 = [number, string, boolean]; //튜플타입
function Myfunction3([num,str,bool]:MyType3){
  console.log(num, str, bool);
}
/*답
type UserType = (number|string|boolean)[];
funuction Myfunction([a,b,c]:UserType){
  console.log(a,b,c);
}
*/

//4.
type MyType4 = {
  color?:string;
  size:number;
  position:number[];
}