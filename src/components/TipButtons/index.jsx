import React from 'react';

const TipButtons = ({ tip, setTip, customTip, setCustomTip }) => {
    const tipOptions = [5, 10, 15, 25, 50];  // Agrega esta línea para definir tipOptions

    const handleCustomTipChange = (e) => {
        const value = e.target.value;
        setCustomTip(value.toString());
        setTip(value);
    };

    return (
        <>
            <h2>Select Tip %</h2>
            <ul>
                {tipOptions.map((percentage) => (
                    <li key={`percentage-${percentage}`}>
                        <button
                            type="button"
                            className={`percentage-button ${tip === percentage ? 'active' : ''}`}
                            onClick={() => setTip(percentage)}
                        >
                            {percentage}%
                        </button>
                    </li>
                ))}
                <li>
                    <input
                        type="number"
                        placeholder="Custom"
                        id="custom-percentage-button"
                        className={`percentage-button ${customTip !== '' ? 'active' : ''}`}
                        value={customTip}
                        onChange={handleCustomTipChange}
                    />
                </li>
            </ul>
        </>
    );
};

export default TipButtons;