import React from "react";
import styles from "../styles/styles.module.css";
import { useState, useEffect } from "react";

function Calculator() {
	const [result, setResult] = useState("");

	const handleClick = (e) => {
		setResult(result.concat(e.target.name));
	};

	const handleAllClear = () => {
		setResult("");
	};

	const handleClear = () => {
		setResult(result.slice(0, -1));
	};

	const handleCalculate = () => {
		try {
			const calcResult = eval(result);

			if (Number.isFinite(calcResult)) {
				setResult(calcResult.toString());
			} else {
				setResult("Invalid");
			}
		} catch (err) {
			setResult("Error");
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleCalculate();
		}
	};

	const isValidInput = (input) => {
		const allowedInputRegex = /^[0-9+\-*/.%()\b]*$/;
		return allowedInputRegex.test(input);
	};

	const handleChange = (event) => {
		const inputValue = event.target.value;
		if (isValidInput(inputValue)) {
			setResult(inputValue);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setResult("");
		}, 3000);

		return () => clearTimeout(timer);
	}, [result]);

	return (
		<div
			className={`container-sm d-flex flex-column justify-content-center align-items-center pt-2`}>
			<div
				className={`bg-black rounded-5 p-4 d-flex flex-column justify-content-center mt-4`}>
				<div>
					<input
						type="text"
						className={`${styles.display} bg-black text-white border-0 rounded`}
						style={{ textAlign: "right" }}
						value={result}
						onChange={handleChange}
						onKeyDown={handleKeyPress}
					/>
				</div>
				<div className="row mt-3">
					<button
						onClick={handleAllClear}
						className={`${styles.buttonsGray} col rounded-circle btn btn-light`}>
						AC
					</button>

					<button
						onClick={handleClear}
						className={`${styles.buttonsGray} col rounded-circle btn btn-light`}
						variant="secondary">
						C
					</button>
					<button
						onClick={handleClick}
						className={`${styles.buttonsGray} col rounded-circle btn btn-light`}
						variant="secondary"
						name="%">
						%
					</button>
					<button
						onClick={handleClick}
						className={`${styles.buttonsOrange} col rounded-circle btn btn-primary`}
						name="/">
						÷
					</button>
				</div>
				<div className="row">
					<button
						name="7"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						7
					</button>
					<button
						name="8"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						8
					</button>
					<button
						name="9"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						9
					</button>
					<button
						name="*"
						onClick={handleClick}
						className={`${styles.buttonsOrange} col rounded-circle btn btn-primary`}>
						x
					</button>
				</div>
				<div className="row">
					<button
						name="4"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						4
					</button>
					<button
						name="5"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						5
					</button>
					<button
						name="6"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						6
					</button>
					<button
						name="-"
						onClick={handleClick}
						className={`${styles.buttonsOrange} col rounded-circle btn btn-primary`}>
						-
					</button>
				</div>
				<div className="row">
					<button
						name="1"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						1
					</button>
					<button
						name="2"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						2
					</button>
					<button
						name="3"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						3
					</button>
					<button
						name="+"
						onClick={handleClick}
						className={`${styles.buttonsOrange} col rounded-circle btn btn-primary`}>
						+
					</button>
				</div>
				<div className="row row-cols-12">
					<button
						name="0"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						0
					</button>
					<button
						name="00"
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						00
					</button>
					<button
						name="."
						onClick={handleClick}
						className={`${styles.buttons} col rounded-circle btn btn-dark`}>
						.
					</button>
					<button
						onClick={handleCalculate}
						className={`${styles.buttonsOrange} col rounded-circle btn btn-primary`}>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
