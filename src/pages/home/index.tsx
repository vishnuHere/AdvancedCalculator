import React, { useState, useEffect } from "react";
import constants from "./constants";
import styles from "./index.scss";
import * as QueryString from "query-string";
import wordings from "./wordings";
import { Button, TextInput } from "components";

const { BUTTON_LIST } = constants;

const Home: React.FC = () => {
    const [displayInput, setDisplayInput] = useState("");
    const [displayNumber, setDisplayNumber] = useState("");
    const [mainNumArray, setMainNumArray] = useState([]);
    const [mainOperatorArray, setMainOperatorArray] = useState([]);
    const [enteringNumberOngoing, setEnteringNumberOngoing] = useState(false);
    const operators = ["x", "/", "+", "-", "%", "(", ")"]

    //function to reset the all data and dependencies
    const resetData = () => {
        setDisplayInput("");
        setDisplayNumber("");
        setMainNumArray([]);
        setMainOperatorArray([]);
        setEnteringNumberOngoing(false);
    };

    //function to delete the last entered value
    const clearInput = () => {
        const inp = displayInput.slice(-1);

        if (operators.includes(inp)) {
            const opArray = [...mainOperatorArray];
            opArray.pop();
            setMainOperatorArray(opArray);
        } else {
            const numArry = [...mainNumArray];
            const lastNum = numArry.pop().toString().slice(0, -1);
            if (lastNum)
                numArry.push(Number(lastNum));
            setMainNumArray(numArry);
        }
        setDisplayInput(displayInput.slice(0, -1));
    };

    const storeNumberFunction = (val) => {
        if (mainNumArray.length == 0 || !enteringNumberOngoing) {
            setMainNumArray([...mainNumArray, Number(val)]);
            setEnteringNumberOngoing(true);
        }
        else {
            let numArray = [...mainNumArray];
            let num = numArray.pop();
            numArray.push(num * 10 + Number(val));
            setMainNumArray(numArray);
        }
        setDisplayInput(displayInput + val);
    }

    const storeOperator = (op) => {
        setEnteringNumberOngoing(false);
        if (op == "=") {
            const tempNums = [...mainNumArray];
            const tempOps = [...mainOperatorArray];
            const result = calculateFunction(mainNumArray, mainOperatorArray);

            setMainNumArray(tempNums);
            setMainOperatorArray(tempOps);
            setDisplayNumber(result);
        } else {
            setMainOperatorArray([...mainOperatorArray, op]);
            setDisplayInput(displayInput + op);
        }
    }

    const calculateFunction = (numArray, operatorArray) => {
        let tempArray = [];
        let result = 0, countMultDiv, i, j = 0;

        for (i = 0; i < operatorArray.length; i++) {
            if (operatorArray[i] == "(") {
                let bracketOperatorArray = [], count = 0, k;

                for (k = i + 1; operatorArray[k] != ")"; k++) {
                    if (!operatorArray[k])
                        break;

                    count++;
                    bracketOperatorArray.push(operatorArray[k]);
                }

                operatorArray.splice(i, count + 2);
                let tempNumArray = [...numArray];
                let countNumbers = 0;
                if (count % 2 != 0)
                    countNumbers = count * 2;
                else
                    countNumbers = count * 2 - 1;
                let bracketNumArray = tempNumArray.splice(i, countNumbers);
                result = calculateFunction(bracketNumArray, bracketOperatorArray);
                numArray[i] = result;
                numArray.splice(i + 1, countNumbers - 1);
            }
        }

        countMultDiv = 0;

        for (i = 0; i < operatorArray.length; i++)
            if (operatorArray[i] == "x" || operatorArray[i] == "/" || operatorArray[i] == "%")
                countMultDiv++;
        while (countMultDiv != 0) {
            for (j = 0; j < operatorArray.length; j++) {

                if (operatorArray[j] == "x") {
                    result = numArray[j] * numArray[j + 1];
                    numArray.splice(j, 2, result);
                    operatorArray.splice(j, 1);
                    countMultDiv--;
                    break;
                }
                else if (operatorArray[j] == "/") {
                    result = numArray[j] / numArray[j + 1];
                    operatorArray.splice(j, 1);
                    numArray.splice(j, 2, result);
                    countMultDiv--;
                    break;
                }
                else if (operatorArray[j] == "%") {
                    result = numArray[j] % numArray[j + 1];
                    operatorArray.splice(j, 1);
                    numArray.splice(j, 2, result);
                    countMultDiv--;
                    break;
                }
            }

        }

        while (operatorArray.length != 0) {
            for (i = 0; i < operatorArray.length; i++) {
                if (operatorArray[i] == "+") {
                    result = numArray[i] + numArray[i + 1];
                    numArray.splice(i, 2, result);
                    operatorArray.splice(i, 1);
                    break;
                }
                else if (operatorArray[i] == "-") {
                    result = numArray[i] - numArray[i + 1];
                    operatorArray.splice(i, 1);
                    numArray.splice(i, 2, result);
                    break;
                }
            }
        }

        return numArray[0];
    }

    const handleMathOperation = (operation: string) => {
        switch (operation) {
            case "sin":
                setDisplayNumber(Math.sin(displayInput));
                break;
            case "cos":
                setDisplayNumber(Math.cos(displayInput));
                break;
            case "tan":
                setDisplayNumber(Math.tan(displayInput));
                break;
        }
    }

    const handleFunction = async (operation: string) => {
        switch (operation) {
            case "reset":
                resetData();
                break;
            case "clear":
                clearInput();
                break;
            case "copy":
                await navigator.clipboard.writeText(displayNumber);
                break;
        }
    };

    const handleClick = (button) => {
        switch (button.type) {
            case "function": {
                handleFunction(button.operation);
                break;
            }
            case "math_func": {
                handleMathOperation(button.operation);
                break;
            }
            case "operator": {
                storeOperator(button.label);
                break;
            }
            case "number": {
                storeNumberFunction(button.label);
                break;
            }
        }
    };

    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <TextInput className={styles.home__operation} value={displayInput} disabled />
                <TextInput className={styles.home__result} value={displayNumber} disabled />
                <div className={styles.home__button_container}>
                    {BUTTON_LIST.map((button, index) =>
                        <Button
                            keyValue={index}
                            rounded
                            label={button.label}
                            onClick={() => handleClick(button)}
                        />
                    )
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;
