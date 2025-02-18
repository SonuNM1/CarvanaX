
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const FinancialCalculator = ({carDetail}) => {

    const [carPrice, setCarPrice] = useState()
    const [interestRate, setInterestRate] = useState()
    const [loanTerm, setLoanTerm] = useState()
    const [downPayment, setDownPayment] = useState()

    const CalculateMonthlyPayment = () => {
        const Principal = carPrice - downPayment ; 
        const MonthlyInterestRate = interestRate / 1200 ; // convert to decimal 

        const MonthlyPayment = (Principal * MonthlyInterestRate * Math.pow(1+ MonthlyInterestRate, loanTerm)) / (Math.pow(1+MonthlyInterestRate, loanTerm) - 1) ; 

        console.log('monthly payment: ', MonthlyPayment)
    }

  return (
    <div className='p-10 border rounded-xl shadow-md mt-7'>
      <h2 className='font-medium text-2xl'>Financial Calculator</h2>

      <div className='flex gap-5 mt-5'>
        <div className='w-full'>
            <label>Price (in $)</label>
            <Input 
                type="number"
                onChange={(e)=> setCarPrice(e.target.value)}
            />
        </div>
        <div className='w-full'>
            <label>Interest Rate</label>
            <Input 
                type="number"
                onChange={(e)=> setInterestRate(e.target.value)}
            />
        </div>
      </div>

      <div className='flex gap-5 mt-5'>
        <div className='w-full'>
            <label>Loan Term (in months)</label>
            <Input 
                type="number"
                onChange={(e)=> setLoanTerm(e.target.value)}
            />
        </div>
        <div className='w-full'>
            <label>Down Payment</label>
            <Input 
                type="number"
                onChange={(e)=> setDownPayment(e.target.value)}
                />
        </div>
      </div>

      <Button 
        className="w-full mt-5 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white" 
        size="lg"
        onClick={CalculateMonthlyPayment}
      >
        Calculate 
      </Button>

    </div>
  )
}

export default FinancialCalculator


// 5.40