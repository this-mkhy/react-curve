import React, { useState } from 'react';

const MathExpEvalFrame = () => {
	const [expression, setExpression] = useState('');
	const [precision, setPrecision] = useState(2);
	const [result, setResult] = useState('Please enter an expression');

	const handleExpression = (e) => {
		setExpression(e.target.value);
	};

	const handlePrecision = (e) =>{
        if(e.target.value < 0){ 
            alert('Precision cannot be negative');
            return;
        }

        if(e.target.value > 16){
            alert('Precision cannot be greater than 16');
            return;
        }

		setPrecision(e.target.value);
	};

	const evaluate = async () => {
		const value = await fetch(
			`http://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}&precision=${precision}`
		);
		const data = await value.text();
        console.log(data);
		setResult(data);
	};

	const handleResult = () => {
		try {
			evaluate(expression);
		} catch (e) {
			console.error(e);
			setResult('Invalid Expression');
		}
	};

	return (
		<div className='mathExpDiv'>
			<textarea
				type='text'
				placeholder='Enter your expression (You can resize the textarea height)'
				value={expression}
				onChange={handleExpression}
			></textarea>
			<input
				type='number'
				placeholder='2'
				value={precision}
				onChange={handlePrecision}
                max='16'
                min='0'
			/>
			<button onClick={handleResult}>Evaluate</button>
			<h3>{result}</h3>
		</div>
	);
};

export default MathExpEvalFrame;
