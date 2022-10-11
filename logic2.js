const input = document.getElementById("itemPrice");
const countBtn = document.getElementById("countBtn");
const resetBtn = document.getElementById("resetBtn");
var valueFromInput;

function wagasCalc(insuranceModel, insuranceMultiplier) {
	document.getElementById(insuranceModel).textContent = `${(
		valueFromInput * insuranceMultiplier
	).toFixed(2)}`;
	if (document.getElementById("monthPay").checked) {
		if (valueFromInput * insuranceMultiplier >= 150) {
			return (document.getElementById(insuranceModel).textContent = `${
				(valueFromInput * insuranceMultiplier * 0.1).toFixed(2)
			}`);
		} else {
			return (document.getElementById(insuranceModel).textContent = "BRAK");
		}
	}
}
const countData = (e) => {
	e.preventDefault();
	valueFromInput = input.value;
	if (input.value == "") {
		alert("Podaj kwote produktu");
	}
	input.value = "";
	if (document.getElementById("RTV").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				wagasCalc("pg36Value", 0.1);
			case valueFromInput:
				wagasCalc("pg48Value", 0.15);
			case valueFromInput:
				wagasCalc("pg60Value", 0.2);
			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";
			case valueFromInput:
				wagasCalc("gn36Value", 0.18);
			case valueFromInput:
				wagasCalc("gn48Value", 0.22);
			case valueFromInput:
				wagasCalc("gn60Value", 0.26);
			case valueFromInput:
				wagasCalc("pu12Value", 0.11);
			case valueFromInput:
				wagasCalc("pu24Value", 0.14);
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				wagasCalc("pg361Value", 0.13);
			case valueFromInput:
				wagasCalc("pg481Value", 0.18);
			case valueFromInput:
				wagasCalc("pg601Value", 0.23);
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				wagasCalc("gn361Value", 0.21);
			case valueFromInput:
				wagasCalc("gn481Value", 0.25);
			case valueFromInput:
				wagasCalc("gn601Value", 0.29);
			case valueFromInput:
				wagasCalc("pu121Value", 0.21);
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// ! koniec RTV
	// * AGD
	if (document.getElementById("AGD").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.1
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.1 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.1 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.15 >= 150) {
						document.getElementById("pg48Value").textContent = `${(
							valueFromInput *
							0.15 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg48Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pg60Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg60Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg72Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg72Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg72Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("gn36Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.22 >= 150) {
						document.getElementById("gn48Value").textContent = `${(
							valueFromInput *
							0.22 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn48Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.26
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.26 >= 150) {
						document.getElementById("gn60Value").textContent = `${(
							valueFromInput *
							0.26 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn60Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.11
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.11 >= 150) {
						document.getElementById("pu12Value").textContent = `${(
							valueFromInput *
							0.11 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.14
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.14 >= 150) {
						document.getElementById("pu24Value").textContent = `${(
							valueFromInput *
							0.14 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.13
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.13 >= 150) {
						document.getElementById("pg361Value").textContent = `${(
							valueFromInput *
							0.13 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pg481Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.23 >= 150) {
						document.getElementById("pg601Value").textContent = `${(
							valueFromInput *
							0.23 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.21 >= 150) {
						document.getElementById("gn361Value").textContent = `${(
							valueFromInput *
							0.21 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("gn481Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.29
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.29 >= 150) {
						document.getElementById("gn601Value").textContent = `${(
							valueFromInput *
							0.29 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.21 >= 150) {
						document.getElementById("pu121Value").textContent = `${(
							valueFromInput *
							0.21 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// !agd koniec
	// *IT
	if (document.getElementById("IT").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.15 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.15 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pg48Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg48Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg60Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg60Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("gn36Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.32 >= 150) {
						document.getElementById("gn48Value").textContent = `${(
							valueFromInput *
							0.32 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn48Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.36 >= 150) {
						document.getElementById("gn60Value").textContent = `${(
							valueFromInput *
							0.36 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn60Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pu12Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.22 >= 150) {
						document.getElementById("pu24Value").textContent = `${(
							valueFromInput *
							0.22 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pg361Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.23 >= 150) {
						document.getElementById("pg481Value").textContent = `${(
							valueFromInput *
							0.23 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("pg601Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.31 >= 150) {
						document.getElementById("gn361Value").textContent = `${(
							valueFromInput *
							0.31 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("gn481Value").textContent = `${(
							valueFromInput *
							0.35 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.39 >= 150) {
						document.getElementById("gn601Value").textContent = `${(
							valueFromInput *
							0.39 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.21 >= 150) {
						document.getElementById("pu121Value").textContent = `${(
							valueFromInput *
							0.21 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// !koniec IT
	// *IT mobile
	if (document.getElementById("IT_MOB").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.15 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.15 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pg48Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg48Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg60Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg60Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("gn36Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.32 >= 150) {
						document.getElementById("gn48Value").textContent = `${(
							valueFromInput *
							0.32 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn48Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.36 >= 150) {
						document.getElementById("gn60Value").textContent = `${(
							valueFromInput *
							0.36 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn60Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pu12Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.22 >= 150) {
						document.getElementById("pu24Value").textContent = `${(
							valueFromInput *
							0.22 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pg361Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.23 >= 150) {
						document.getElementById("pg481Value").textContent = `${(
							valueFromInput *
							0.23 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("pg601Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.31 >= 150) {
						document.getElementById("gn361Value").textContent = `${(
							valueFromInput *
							0.31 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("gn481Value").textContent = `${(
							valueFromInput *
							0.35 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.39 >= 150) {
						document.getElementById("gn601Value").textContent = `${(
							valueFromInput *
							0.39 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.21 >= 150) {
						document.getElementById("pu121Value").textContent = `${(
							valueFromInput *
							0.21 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// !koniec IT mob
	// *FOTO
	if (document.getElementById("FOTO").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.15 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.15 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pg48Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg48Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg60Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg60Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("gn36Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.32 >= 150) {
						document.getElementById("gn48Value").textContent = `${(
							valueFromInput *
							0.32 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn48Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.36 >= 150) {
						document.getElementById("gn60Value").textContent = `${(
							valueFromInput *
							0.36 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn60Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pu12Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.22 >= 150) {
						document.getElementById("pu24Value").textContent = `${(
							valueFromInput *
							0.22 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pg361Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.23 >= 150) {
						document.getElementById("pg481Value").textContent = `${(
							valueFromInput *
							0.23 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("pg601Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.31 >= 150) {
						document.getElementById("gn361Value").textContent = `${(
							valueFromInput *
							0.31 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("gn481Value").textContent = `${(
							valueFromInput *
							0.35 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.39 >= 150) {
						document.getElementById("gn601Value").textContent = `${(
							valueFromInput *
							0.39 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn601alue").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.21 >= 150) {
						document.getElementById("pu121Value").textContent = `${(
							valueFromInput *
							0.21 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// !koniec FOTO
	// *tablety
	if (document.getElementById("TABLETY").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.1
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.1 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.1 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pg48Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg48Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg60Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg60Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.36 >= 150) {
						document.getElementById("pg72Value").textContent = `${(
							valueFromInput *
							0.36 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg72Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("gn36Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn48Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn60Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue12Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pue12Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue24Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("pue24Value").textContent = `${(
							valueFromInput *
							0.35 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pue24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.13
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.13 >= 150) {
						document.getElementById("pg361Value").textContent = `${(
							valueFromInput *
							0.13 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.23 >= 150) {
						document.getElementById("pg481Value").textContent = `${(
							valueFromInput *
							0.23 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("pg601Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn121Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.39 >= 150) {
						document.getElementById("gn121Value").textContent = `${(
							valueFromInput *
							0.39 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn361Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn481Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn601Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// !KONIEC TABLETY
	// *gsm

	if (document.getElementById("GSM").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.15 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.15 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pg48Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg48Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg60Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg60Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn48Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn60Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.3
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("pu12alue").textContent = `${(
							valueFromInput *
							0.3 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue12Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pue12Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pue12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue24Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("pue24Value").textContent = `${(
							valueFromInput *
							0.35 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pue24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pg361Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.23 >= 150) {
						document.getElementById("pg481Value").textContent = `${(
							valueFromInput *
							0.23 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("pg601Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn481Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn601Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.33
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.33 >= 150) {
						document.getElementById("pu121Value").textContent = `${(
							valueFromInput *
							0.33 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// !KONIEC gsm
	// * NAWIGACJE
	if (document.getElementById("NAWIGACJE").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.15 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.15 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pg48Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg48Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg60Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg60Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("gn36Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.32 >= 150) {
						document.getElementById("gn48Value").textContent = `${(
							valueFromInput *
							0.32 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn48Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.36 >= 150) {
						document.getElementById("gn60Value").textContent = `${(
							valueFromInput *
							0.36 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn60Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.2 >= 150) {
						document.getElementById("pu12Value").textContent = `${(
							valueFromInput *
							0.2 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.22 >= 150) {
						document.getElementById("pu24Value").textContent = `${(
							valueFromInput *
							0.22 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue12Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pue12Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pue12Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pue24Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("pue24Value").textContent = `${(
							valueFromInput *
							0.35 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pue24Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pg361Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.23 >= 150) {
						document.getElementById("pg481Value").textContent = `${(
							valueFromInput *
							0.23 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("pg601Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.31 >= 150) {
						document.getElementById("gn361Value").textContent = `${(
							valueFromInput *
							0.31 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn361Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.35 >= 150) {
						document.getElementById("gn481Value").textContent = `${(
							valueFromInput *
							0.35 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn481Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.39 >= 150) {
						document.getElementById("gn601Value").textContent = `${(
							valueFromInput *
							0.39 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("gn601Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.21 >= 150) {
						document.getElementById("pu121Value").textContent = `${(
							valueFromInput *
							0.21 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pu121Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
	// !KONIEC NAWIGACJE
	// *SMARTWATCHE
	if (document.getElementById("SMARTWATCHE").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.15 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.15 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}

			case valueFromInput:
				document.getElementById("pg48Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("pg60Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn48Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn60Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.25 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.25 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.18 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.18 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pg481Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg601Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn481Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn601Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					if (valueFromInput * 0.28 >= 150) {
						document.getElementById("pg36Value").textContent = `${(
							valueFromInput *
							0.28 *
							0.1
						).toFixed(2)}`;
					} else document.getElementById("pg36Value").textContent = "BRAK";
				}
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
};

countBtn.addEventListener("click", countData);
