import { React, Fragment } from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {

    const bank_limit = 300000

    return (
        <Fragment>

            {/* HOME VALUE */}
            <SliderComponent
                defaultValue={data.homeValue}
                value={data.homeValue}
                label="Home Value"
                min={1000}
                max={bank_limit}
                step={1000}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: value * 0.2,
                    loanAmount: value * 0.8,
                    homeValue: value,
                })}
                unit="€"
                amount={data.homeValue}
            />

                {/* DOWN PAYMENT */}
             <SliderComponent
                defaultValue={data.downPayment}
                value={data.downPayment}
                label="Down payment"
                min={0}
                max={data.homeValue}
                step={1000}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount: (data.homeValue - value),
                    downPayment: value
                })}
                unit="€"
                amount={data.downPayment}
            /> 

                {/* LOAN AMOUNT */}
            <SliderComponent
                defaultValue={data.loanAmount}
                value={data.loanAmount}
                label="Loan Amount"
                min={0}
                max={data.homeValue}
                step={1000}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: (data.homeValue - value),
                    loanAmount: value
                })}
                unit="€"
                amount={data.loanAmount}
            />

                {/* INTEREST RATE */}
            <SliderComponent
                defaultValue={data.interestRate}
                value={data.interestRate}
                label="Interest Rate"
                min={2}
                max={18}
                step={0.5}
                onChange={(e, value) => setData({
                    ...data,
                    interestRate: value
                })}
                unit="%"
                amount={data.interestRate}
            />
        </Fragment>
    );

};

export default SliderSelect; 