import React, { useState } from 'react';


import '../Bmi.css';
function Bmi(props) {

    const [height, setHeightError] = useState('');
    const [weight, setWeightError] = useState('');
    const [bmiResult, setBmiResult] = useState('');

    let button = document.getElementById('btn');

    const handleCalOverall = () => {

        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('weight').value);

        if (height === '' || isNaN(height) || (height <= 0)) {
            setHeightError('Please provide a valid height');
        } else {
            setHeightError('');

        }

        if (weight === '' || isNaN(weight) || (weight <= 0)) {
            setWeightError('Please provide a valid weight');
        } else {
            setWeightError('');
        }

        if (height > 0 && weight > 0) {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            if (bmi < 18.6) {
                setBmiResult('Under weight : ' + bmi);

            } else if (bmi >= 18.6 && bmi < 24.9) {
                setBmiResult('Normal : ');
            } else {
                setBmiResult('Over weight : ' + bmi);
            }
        } else {
            alert('The form has errors');
            setBmiResult('');

        }
    };
    return (props.trigger) ? (
        <div className="wrapper">

            <p>Height (CM):</p>      <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
            <input type="text" id="height" /><br /><span>{setHeightError}</span>


            <p>Weight (KG):</p>
            <input type="text" id="weight" /><br /><span>{setWeightError}</span>


            <button onClick={handleCalOverall} id="btn">Calculate</button>

            <p>{bmiResult}</p>


        </div>

    ) : "";

}

export default Bmi;
