import React from "react";
import { useState, useEffect } from "react";

export default function Javascript() {
  // ____________________
  // Arrow function

  //  const abc = (name) => {
  //     console.log(name);
  //   }
  //   abc("Aizaz")
  // ________________________
  // Array

  // const abc = ["Adil", "Haris", "Aizaz", "Forqan", "Azan"]
  // abc.forEach((element, index) => {
  //   console.log(element + "" + index);
  // })

  // ___________________________
  // Array.prototype.Push = add element in array at last

  // const abc = ["Adil", "Haris", "Aizaz", "Forqan", "Azan"]
  // abc.Push("Afan")
  // console.log(abc);

  // ___________________________
  // Array.prototype.Push = remove element in array at last

  // const abc = ["Adil", "Haris", "Aizaz", "Forqan", "Azan"]
  // abc.pop()
  // console.log(abc);

  // ___________________________
  // Array.prototype.Unshift = add element in array at first

  // const abc = ["Adil", "Haris", "Aizaz", "Forqan", "Azan"]
  // abc.unShift()
  // console.log(abc);
  // ____________________________

  // Array.prototype.shift = remove element in array at first

  // const abc = ["Adil", "Haris", "Aizaz", "Forqan", "Azan"]
  // abc.shift()
  // console.log(abc);

  // ____________________________

  // Array.prototype.splice = remove and add element in array at any position

  // const abc = ["Adil", "Haris", "Aizaz", "Forqan", "Azan"]
  // const indexof = abc.indexOf("Haris")
  // abc.splice(indexof,1,"Afan")
  // console.log(abc);

  // ____________________________

  // crud operatios = remove add update element in array at any position

  // const abc = ["Adil", "Haris", "Aizaz", "Forqan", "Azan"];
  // const indexof = abc.indexOf("Haris");

  // if (indexof !==  -1) {
  //   abc.splice(indexof, 1, "Afan");
  //   console.log(abc);
  // } else {
  //   console.log("data not found");
  // }

  // ________________________
  // Map method , Reduce method, filter method

  // 1) Find the square root of each element in array

  //  let arr = [9,16,25,36]
  //  const array = arr.map((elements) => {
  //   return Math.sqrt(elements)

  //  })
  // console.log(array);

  // 2) Multiply each element by 2 and return only those element which are greater than 10 and then add them

  // let arr = [2, 3, 4, 6, 7];
  // const array = arr
  //   .map((currEle) => {
  //     return currEle * 2;
  //   })
  //  ->  This is also called chaining style |--> combining two methods
  // .filter((currElement) => {

  //   return currElement > 10;
  // })
  //  ->  This is also called chaining style |--> combining two methods
  //   .reduce((accummulator, currElement) => {
  //     return (accummulator *= currElement);
  //   });
  // console.log(array);

  // ___________________________________
  //  Array.prototype.Reduce method

  // const abc = [2,3,4,5]
  // debugger;
  // let array = abc.reduce((accumulator, currentElement) => {
  //   return accumulator = accumulator + currentElement
  // })
  // console.log(array);
  //________________________
  // ____________________________
  // String

  // let a =  "Haris"
  // let b = 'Aizaz'
  // console.log(a);
  // console.log(b);

  //IndexOf
  // let c ="i am Muhammad 'Haris'  Do you got it"
  // let findString = c.indexOf("Haris", 12)
  // console.log(findString);

  //lastIndexOf
  // let c ="i am Muhammad 'Haris'  Do you got it"
  // let findString = c.lastIndexOf("Haris")
  // console.log(findString);            	                              // difference between lastIndexOf and search is lastIndexOf also tell us from which index you want to start

  //search
  // let c ="i am Muhammad 'Haris'  Do you got it"
  // let findString = c.search("Haris")
  // console.log(findString);

  // Extracting a part of a string with slice method
  // slice(startIndex, endIndex)
  // const fruits ="Apple, Banana, Mango"
  // let pieceOf =  fruits.slice(0,10)
  // console.log(pieceOf);

  //replace(selectvalue, replacevalue)
  // let a = "My name is Muhammad Harry Harry"
  // const replaceString = a.replace("Harry", "Haris")
  // console.log(replaceString);

  //replaceAll(selectvalue, replacevalue)
  // let a = "My name is Muhammad Harry Harry"
  // const replaceString = a.replaceAll("Harry", "Haris")
  // console.log(replaceString);

  //split   // it convert string into array
  // let a = "a,b,v,d,g,e"
  // console.log(a.split(","));

  // let a = "a,b,v | d,g,e"
  // console.log(a.split("|"));

  // _______________________________________________________

  // Date and Time Zone\
  // let data = new Date
  // console.log(new Date().toLocaleString());

  //-------------------------------------------------------------------------------------------
  // onclick Event + setTimeout event + Loading

  // document.getElementById("result").innerHTML = `Sir please select your fav iceCream`;
  // function test(){
  //   document.getElementById('result').innerHTML = `Loading...`
  //   setTimeout(() => {
  //     const name = document.getElementById("name").value;
  //     const iceCream = document.getElementById("iceCream").value;
  //     const result = document.getElementById("result");

  //     if (iceCream !== "Select one") {
  //       result.innerHTML = `Mr ${name} select ${iceCream} iceCream`;
  //     } else {
  //       result.innerHTML = `Mr ${name} you are not selecting any flavour`;
  //     }
  //   }, 1000);
  // };
  //--------------------------------------------------------------------------------------------
  //setInterval + clearInterval + Loading

  // let end;
  // let num = 0;
  // const test = () => {
  //   const number = document.querySelector("#number");
  //   // number.style.fontsize = "20px";
  //   number.innerHTML = "Loading...";

  //   end = setInterval(() => {
  //     number.innerHTML = `${num}`;
  //     num++;
  //   }, 1000);
  // };
  // const test2 = () => {
  //   clearInterval(end);
  // };

  //------------------------------------------------------------------------------------------------
  // Destructuring object
  // let abc = {
  //   firstName: "Muhammad",
  //   lastName: "Haris",
  //   age: 20,
  // };

  // let { firstName, lastName, age } = abc;
  // console.log(firstName);
  // console.log(lastName);
  // console.log(age);
  //-----------------------------------------------------------------------------------------------------
  // Spread Operator + Object.values  // to find the values in array

  // let a = ["Adil", "Haris"]
  // const result = [...a,"Aizaz", "Forqan", "Azan" ]
  // console.log(Object.values(result));

  //-----------------------------------------------------------------------------------------------------
  //Reduce method OR flat method are the same

  // const a = [
  //   ["array1" , "array2"],
  //   ["array3" , "array4"],
  //   ["array5" , "array6", "array7"],
  //   ["array5" , "array6", "array7"],
  //   ["array5" , "array6", "array7"]
  // ]
  // let flatarray = a.reduce((accumulator, elements) => {
  //   return accumulator.concat(elements)
  // })
  // console.log(a.flat(Infinity));

  //-------------------------------------------------------------------------------------------------------

  // Promise Function

  //   const a = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let array = [1,2,3,4,5]
  //     resolve(array)
  //     reject('Sorry we got rejected')
  //     }, 3000);

  //   })
  // a.then((communicating) => {
  //   console.log(communicating);
  // }).catch((error) => {
  //   console.log(error);
  // })

  //-----------------------------------------------------------

  // Async await

  // async function abc() {
  //   console.log("1");
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log("4");
  //   const users = await response.json();
  //   console.log("5");
  //   return users;
  // }

  // const a = abc();

  // a.then((e) => {
  //   console.log(e);
  // });
  // console.log("2");
  // console.log(a);
  // console.log("3");

  //------------------------------------------------------------------

  //Higher order function and call back function

  // const add = (a,b) =>{                                                   // These all small functions are call back functions
  //   return a + b
  // }
  // const sub = (a,b) =>{
  //   return a - b
  // }
  // const mul = (a,b) =>{
  //   return a *b
  // }
  // const calculator = (operand1, operand2 , operator) => {                    // This is higher order function
  //   return operator(operand1,operand2)
  // }
  // console.log(calculator(2,6,add));
  // console.log(calculator(7,6,sub));
  // console.log(calculator(2,6,mul));

  //----------------------------------------------------------------------------------------------
  // Lexical scoping and closures are somewhere same

  // const parent = (b) => {
  //   let a = 2
  //   const child = () => {
  //     let c = a+b
  //     console.log(c);
  //   }
  //   child()
  // }
  // parent(5)

  //----------------------------------------------------------------------------------------------
  //Syncronus and Asyncronos function

  // Syncronos-----

  // const first = () => {
  //   console.log("first function");

  // }
  // const second = () => {
  //   console.log("second function");
  //   first()
  //   console.log("second function again");
  // }
  // console.log("outer");
  // second()

  //Asyncronusly----

  // const first = () => {
  //   setTimeout(() => {
  //      console.log("first function");
  //   },2000)
  // }
  // const second = () => {
  //   console.log("second function");
  //   first()
  //   console.log("second function again");
  // }
  // console.log("outer");
  // second()

  //-------------------------------------------------------------------------------------

  // currying function  => it is like taking one aurgument and having many functions

  // const add = (num1) => (num2) => (num3) => (num4) => console.log(num1+num2+num3+num4);
  // add(2)(2)(3)(1)

  //------------------------------------------------------------------------------------

  //Pakistan API project

  // const pakistandiv = document.querySelector("#pakistandiv")
  // const request = new XMLHttpRequest()
  // request.open('GET',"https://restcountries.com/v2/name/pakistan")
  // request.send()
  // --------- continue-------------

  // useState Hooks
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`hi you click ${count} times`);
    const pakistandiv = document.querySelector("#pakistandiv")
    pakistandiv.style.color = "red"
  }, [count])

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>JavaScript</h1>
              <div id="pakistandiv">{count}</div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}>
                Count
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
