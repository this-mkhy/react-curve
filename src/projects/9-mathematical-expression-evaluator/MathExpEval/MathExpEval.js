import React from 'react';

import './../../projects.css';
import './MathExpEval.css';

import MathExpEvalFrame from './MathExpEvalFrame';
import Desc from './../Desc/Desc';
import Code from './../Code/Code';

const MathExpEval = () => {
	return (
		<div className='container'>
			<div className='projectName'>
				<h1>MathExpEval</h1>
				<MathExpEvalFrame />
			</div>
			<div className='description'>
				<Desc />
			</div>
			<div className='codeRight'>
				<h1>Code</h1>
				<Code />
			</div>
		</div>
	);
};

export default MathExpEval;
