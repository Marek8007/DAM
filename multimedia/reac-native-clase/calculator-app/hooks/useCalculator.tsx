import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '/',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');

    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operator>(undefined);


    useEffect(() => {
        if (lastOperation.current) {
            const firstFormula = formula.split(' ').at(0);
            setFormula(`${firstFormula} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number)
        }
    }, [number])

    useEffect(() =>{
        const subResult = calculateSubresult();
        setPreviousNumber(`${subResult}`);
    }, [formula])

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (number === '.') {
                return setNumber(number+numberString)
            }

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number+numberString)
            }

            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            if (numberString == '0' && !number.includes('.')) return;
        };

        setNumber(number+numberString);
    }

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
        setFormula('0');

        lastOperation.current = undefined;
    };

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        return setNumber('-' + number);
    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    }

    const setLastNumber = () => {
        calculateResult

        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        }

        setPreviousNumber(number);
        setNumber('0')
    }

    const whatevOperator = (operation: string) => {
        setLastNumber();

        switch (operation) {
            case '+':
                lastOperation.current = Operator.add;
                break;
            case '-':
                lastOperation.current = Operator.substract;
                break;
            case 'x':
                lastOperation.current = Operator.multiply;
                break;
            case '/':
                lastOperation.current = Operator.divide;
                break;
            default:
                throw new Error(`Operation ${operation} not implemented`);
        }

    }

    // const divideOperation = () => {
    //     setLastNumber();
    //     lastOperation.current = Operator.divide
    // }

    // const multiplyOperation = () => {
    //     setLastNumber();
    //     lastOperation.current = Operator.multiply
    // }

    // const substractOperation = () => {
    //     setLastNumber();
    //     lastOperation.current = Operator.substract
    // }

    // const addOperation = () => {
    //     setLastNumber();
    //     lastOperation.current = Operator.add
    // }

    const calculateSubresult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);


        if (isNaN(num2)) return num1;

        switch(operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.substract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                throw new Error(`Operation ${operation} not implemented`)
        }
    }

    const calculateResult = () => {
        const result = calculateSubresult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPreviousNumber('0');
    }

    return {
        formula,
        number,
        previousNumber,

        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        // divideOperation,
        // multiplyOperation,
        // substractOperation,
        // addOperation,
        calculateResult,
        whatevOperator
    };


}