import { useState } from "react";

const operators = ["+", "*", "-", "/"];

const Calculator = () => {
	const [nb1, setNb1] = useState();
	const [nb2, setNb2] = useState();
	const [operator, setOperator] = useState("+");
	const [result, setResult] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		switch (operator) {
			case "+":
				setResult(nb1 + nb2);
				break;
			case "-":
				setResult(nb1 - nb2);
				break;
			case "*":
				setResult(nb1 * nb2);
				break;
			case "/":
				if (nb2 === 0) {
					setResult('Division par 0 impossible')
				}else {
					setResult(nb1 / nb2);
				}
				break;
			default:
				setResult(0);
				break;
		}
		// setResult(eval(`${nb1}${operator}${nb2}`));
	}

	return (<div>
		<form onSubmit={handleSubmit}>
			<label htmlFor="nb1">Nb1:</label>
			<input type="text" id="nb1" name="nb1"
				onChange={(e) => setNb1(+e.target.value)}
			/>
			<label htmlFor="operator">Operator</label>
			<select name="operator" id="operator"
				value={operator} onChange={(e) => setOperator(e.target.value)}
			>
				{
					operators.map((operator) => {
						return <option key={operator} value={operator}>{operator}</option>
					})
				}
			</select>
			<label htmlFor="nb2">Nb2:</label>
			<input type="text" id="nb2" name="nb2"
				onChange={(e) => setNb2(+e.target.value)}
			 />
			<button>Calculer</button>
			<input type="text" readOnly value={result} />
		</form>
	</div>)
};

export default Calculator;
