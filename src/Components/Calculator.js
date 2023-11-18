import React, { useEffect, useState } from "react";/*importing the react Hooks from React */

const Calculator = ()=>{
    const [num1,setNum1] = useState("Num 1");/*Creation of useState Hook for updating the status of num1 */
    const [num2,setNum2] = useState("Num 2");/*Creation of useState Hook for updating the satus of num2 */
    const [result,setResult] = useState("");/*Creation of useState Hook for calculating and displaying the result*/
    const [remark,setRemark] = useState("");/*Creation of useState Hook for checking the Error or Success state */
    /*Function to get the number and store to the num1 variable on changing the value */
    function getNum1(e){
        setNum1(e.target.value)
    }
    /*Function to get the number and store to the num2 variable on changing the value */
    function getNum2(e){
        setNum2(e.target.value);
    }
    //Additional Step, To display the values of the num1,num2 every 6 Sec
    setTimeout(() => {
        console.log(num1);
        console.log(num2);
        console.log(isNaN(result));
    }, 6000);

    /*Creationg of the Function to carry out the Arthematic Operations */
    function arthematicOperation(str){
        if(num1>=0 && num2 >=0){
            //Usage of the switch case to evaluate the arthematic operations
        switch (str) {
            //Switchcase for Addition Operation
            case "+":
                return (setResult(parseFloat(num1)+parseFloat(num2)),//Updating the Value of the result
                setRemark("Success!"),//Changing the Remarks to Success!
                color(remark));//Changing the Color of the Remarks
                break;
            //Switchcase for the Subscration Operation
            case "-":
                return setResult(parseFloat(num1)-parseFloat(num2)),
                setRemark("Success!"),
                color(remark);
                break;
            //Switchcase for the Multiplication Operation
            case "*":
                return setResult(parseFloat(num1)*parseFloat(num2)),
                setRemark("Success!"),
                color(remark);
                break;
            //Switchcase for Division Operation
            case "/":
                return setResult(parseFloat(num1)/parseFloat(num2)),
                setRemark("Success!"),
                color(remark);
                break;       
            default:
                break;
        }
        }else if(num1 >= 0 || num2 === ""){//Checking the case when num1 is not 0 and num2 is 0
            setResult("Num 2 Cannot be Empty");//Upading the Result
            setRemark("Error!");//Updating the Remark
            color(remark);//Changing the color of the Remark
        }else if(num2 >= 0 || num1 === ""){//Checking the case when num2 is not 0 and num1 is 0
            setResult("Num 1 Cannot be Empty");
            setRemark("Error!");
            color(remark);
        }
    }
    /*Styling of the Remark Message weather Error or Success */
    function color(remark){
        if(remark === "Error!"){
            document.getElementById("remark").style.color = "#FB184E";
            document.getElementById("remark").style.fontSize = "36px";
            document.getElementById("remark").style.fontWeight = "700";
        }else if(remark === "Success!"){
            document.getElementById("remark").style.color = "#0057FF";
            document.getElementById("remark").style.fontSize = "36px";
            document.getElementById("remark").style.fontWeight = "700";      
        }
    }
    /*Creationg of useEffect Hook to update the color of the Remark Message, Whenever the remark is updated useEffect is taking place*/
    useEffect(()=>{
        color(remark);
    },[remark])//Passing the remark parameter
    /*Creationg of useEffect Hook to check the result as NaN, When result is NaN it will display Error Message*/
    useEffect(()=>{
        if(isNaN(result)){
            setResult("Please Enter Valid Numbers");
            setRemark("Error!");
            color(remark);         
        }
    },[result])//Passing the result parameter

    /*Rendering the Calculator Page */
    return(
        <div className="home">
            <div className="calculator">
                <h1>React Calculator</h1>
                <input type="number" min="0" placeholder={num1} id="num1" onChange={getNum1}/>
                <input type="number" min="0" placeholder={num2} id="num2" onChange={getNum2}/>
                <div className="operations">
                    <button value="+" onClick={()=>arthematicOperation("+")}>+</button>
                    <button value="-" onClick={()=>arthematicOperation("-")}>-</button>
                    <button value="*" onClick={()=>arthematicOperation("*")}>*</button>
                    <button value="/" onClick={()=>arthematicOperation("/")}>/</button>
                </div>
                <p id="remark">{remark}</p>
                <p id="result">{result}</p>
            </div>
        </div>
    )
}

export default Calculator;