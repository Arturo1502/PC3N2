import React from 'react';

const BillInput = ({ bill, setBill }) => {
    return (
        <div className="data-wrapper">
            <h1>Bill</h1>
            <label htmlFor="input-bill">
                <input
                    className="input-bill"
                    id="input-bill"
                    type="number"
                    value={bill}
                    min="0"
                    onChange={(e) => setBill(parseFloat(e.target.value))}
                />
            </label>
        </div>
    );
};

export default BillInput;