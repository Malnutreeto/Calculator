import { Stack, Typography } from "@mui/material";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const Result = ({ data }) => {

    const { homeValue, loanAmount, loanTerm, interestRate } = data;

    const totalLoanMonths = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;

    // calcolata con ChatGPT
    const monthlyPayment =
        (loanAmount *
            interestPerMonth *
            (1 + interestPerMonth) ** totalLoanMonths) /
        ((1 + interestPerMonth) ** totalLoanMonths - 1);

    const totalInterestGenerated = monthlyPayment + totalLoanMonths - loanAmount;

    const donutData = {
        labels: ['Principle', 'Interest'],
        datasets: [
            {
                label: 'Ratio of Principle Interest',
                data: [homeValue, totalInterestGenerated],
                backgroundColor: [
                    'rgba(255, 255, 10, 0.5)',
                    'rgba(54, 162, 235, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 255, 10, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 3,
            },
        ],
    };

    return <Stack gap={2}>
        <Typography textAlign="center" variant="h5">
            Monthly Payment: {monthlyPayment.toFixed(2)} €
        </Typography>
        <Stack direction="row" justifyContent="center"> 
            <div>
                <Doughnut data={donutData} />
            </div>
        </Stack>
    </Stack>
};

export default Result;