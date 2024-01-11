import React, { useState } from 'react';
import './TipCalculator.css';
import BillInput from '../BillInput';
import TipButtons from '../TipButtons';
import PeopleInput from '../PeopleInput';
import { reset, calcularTip, esCero, claseActivo, calcularTotal } from '../../utilities';

const TipCalculator = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [customTip, setCustomTip] = useState('');
    const [people, setPeople] = useState(1);
    const [showError, setShowError] = useState(false);

    const calculateTipAndTotal = () => {
        let tipAmount = 0;
        let totalAmount = 0;

        const customTipPercentage = parseFloat(customTip);

        if (!isNaN(bill) && !isNaN(people) && (!isNaN(tip) || !isNaN(customTipPercentage))&& people !== 0) {
            tipAmount = isNaN(tip) ? (bill * (customTipPercentage / 100)) / people : (bill * (tip / 100)) / people;
            totalAmount = (bill + tipAmount) / people;
        } else {
            tipAmount = 0;
            totalAmount = 0;
        }

        return { tipAmount, totalAmount };
    };

    const handleReset = () => {

        setBill(0);
        setTip(0);
        setCustomTip('');
        setPeople(1);
        setShowError(false);
    };

    const tipButtonsProps = {
        tip,
        setTip,
        customTip,
        setCustomTip,
    };

    const billInputProps = {
        bill,
        setBill,
    };

    const peopleInputProps = {
        people,
        setPeople,
    };


    const { tipAmount, totalAmount } = calculateTipAndTotal();

    return (
        <div className="tip-calculator">
            <header>
                <img src="./images/logo.svg" alt="" />
            </header>
            <div className="general-wrapper">
                <div className="data-wrapper">
                <BillInput {...billInputProps} />
                <TipButtons {...tipButtonsProps} />
                <PeopleInput {...peopleInputProps} />
                </div>
                <div className="result-wrapper">
                    <div className="result-txt">
                        <div className="text-amount">
                            <div>
                                <h2>Tip Amount</h2>
                                <p>/ person</p>
                            </div>
                            <h3>${tipAmount.toFixed(2)}</h3>
                        </div>
                        <div className="total-amount">
                            <div>
                                <h2>Total</h2>
                                <p>/ person</p>
                            </div>
                            <h3>${totalAmount.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button type="button" id="reset-button" className="reset-button" onClick={handleReset}>
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TipCalculator;