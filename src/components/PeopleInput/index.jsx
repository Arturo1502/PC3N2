import React, { useState } from 'react';

const PeopleInput = ({ people, setPeople }) => {
    const [showError, setShowError] = useState(false);

    const InputCambiado = (e) => {
        const value = parseFloat(e.target.value);
        setPeople(value);

        if (value === 0 || isNaN(value)) {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    return (
        <div className="data-wrapper">
            <h2>Number of People</h2>
            {showError && (
                <span id="aloha" className="aloha">
                </span>
            )}
            <label htmlFor="input-people">
                <input
                    id="input-people"
                    className={`input-people ${showError ? 'input-invalid' : ''}`}
                    type="number"
                    value={people}
                    min="1"
                    onChange={InputCambiado}
                />
            </label>
        </div>
    );
};

export default PeopleInput;