        let currentOperand = '';
        let previousOperand = '';
        let operator = '';

        function appendNumber(number) {
            currentOperand += number;
            document.querySelector('.display').value = currentOperand;
        }

        function chooseOperator(op) {
            if (currentOperand === '') return;
            if (previousOperand !== '') calculate();
            operator = op;
            previousOperand = currentOperand;
            currentOperand = '';
        }

        function calculate() {
            let computation;
            const prev = parseFloat(previousOperand);
            const current = parseFloat(currentOperand);

            if (isNaN(prev) || isNaN(current)) return;

            switch (operator) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    computation = prev / current;
                    break;
                case '%':
                    computation = prev % current;
                    break;
                case '^':
                    computation = Math.pow(prev, current);
                    break;
                default:
                    return;
            }

            currentOperand = computation;
            operator = '';
            previousOperand = '';
            document.querySelector('.display').value = currentOperand;
        }

        function squareRoot() {
            if (currentOperand === '') return;
            currentOperand = Math.sqrt(parseFloat(currentOperand));
            document.querySelector('.display').value = currentOperand;
        }

        function clearDisplay() {
            currentOperand = '';
            previousOperand = '';
            operator = '';
            document.querySelector('.display').value = '';
        }