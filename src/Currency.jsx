import React, { useState } from 'react'
import axios from 'axios';
import { PiArrowFatLinesRightBold } from "react-icons/pi";

function Currency() {
  

	const [amount, setamount]=useState(0);
	const [amountUnit, setamountUnit]=useState('USD');
	const [convertedUnit, setConvertedUnit]=useState('TRY');
	const [result, setResult]=useState('');

	const base_url="https://api.freecurrencyapi.com/v1/latest"
	const api_key="fca_live_CiK6tJF7YrG4ZC6X4swVJND7QOROFqrOjMQSWYLX"

	const amountChange=(e)=>{
		const newAmount=e.target.value;
		setamount(newAmount);
	}
	const amountUnitChange=(e)=>{
		const newUnit=e.target.value;
		setamountUnit(newUnit);
	 }

	const convertedUnitChange=(e)=>{
		const newConvertedUnit=e.target.value;
		setConvertedUnit(newConvertedUnit);
	}
	const excange= async (e)=>{
      const response = await	axios.get(`${base_url}?apikey=${api_key}&base_currency=${amountUnit}`); 
	  const newresult= (response.data.data[convertedUnit]* amount).toFixed(2);
	  setResult(newresult);
	}

	return (
	<div>
		<div className="container">
			<div className="box">
				<div className="box-title">
					<h2>DÖVİZ KURU UYGULAMASI</h2>
				</div>
				<div className="box-change">
					<div className="amount-div">
					<input type="number" id='amount' value={amount} onChange={amountChange}/>
					</div>
					<div className="units">
						<select id="amountUnits" value={amountUnit} onChange={amountUnitChange}>
						<option value="USD">USD</option>
						<option value="TRY">TRY</option>
						<option value="EUR">EUR</option>
						</select>
						<PiArrowFatLinesRightBold style={{fontSize:'35px'}}/>
						<select id="convertedUnits" value={convertedUnit} onChange={convertedUnitChange}>
						<option value="TRY">TRY</option>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						</select>
					</div>
					<div className="converted-div">
					<input type='number' id='converted' value={result}></input>
					</div>
				</div>

				<div className="btn">
					<button onClick={excange}>Çevir</button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Currency