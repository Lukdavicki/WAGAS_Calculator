const input = document.getElementById("itemPrice");
const countBtn = document.getElementById("countBtn");
const resetBtn = document.getElementById("resetBtn");

const countData = (e) => {
	e.preventDefault();
	const valueFromInput = input.value;
	if (valueFromInput == "") {
		alert("Wpisz wartość towaru");
	}
	input.value = "";
	// countCheck();
	if (document.getElementById("RTV").checked) {
		switch (valueFromInput) {
			case valueFromInput:
				document.getElementById("pg36Value").textContent = `${(
					valueFromInput * 0.1
				).toFixed()}`;
				if (document.getElementById("monthPay").checked) {
					document.getElementById("pg36Value").textContent = `${(
						valueFromInput *
						0.1 *
						0.1
					).toFixed()}`;
				}
			// ? try to figure out how to make the F to check and calc if the minimum insurance cost is above 150

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.26
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.11
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.14
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.13
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.29
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
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

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.15
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg72Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.26
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.11
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.14
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.13
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.29
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
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

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
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

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
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

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue12Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
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

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;

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
			case valueFromInput:
				document.getElementById("pue24Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.13
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn121Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
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

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;

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
			case valueFromInput:
				document.getElementById("pu24Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("pue12Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue24Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
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

			case valueFromInput:
				document.getElementById("pg48Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg60Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("pg72Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn12Value").textContent = "BRAK";

			case valueFromInput:
				document.getElementById("gn36Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;

			case valueFromInput:
				document.getElementById("gn48Value").textContent = `${(
					valueFromInput * 0.32
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn60Value").textContent = `${(
					valueFromInput * 0.36
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu12Value").textContent = `${(
					valueFromInput * 0.2
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu24Value").textContent = `${(
					valueFromInput * 0.22
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue12Value").textContent = `${(
					valueFromInput * 0.25
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pue24Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg361Value").textContent = `${(
					valueFromInput * 0.18
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg481Value").textContent = `${(
					valueFromInput * 0.23
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pg601Value").textContent = `${(
					valueFromInput * 0.28
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn121Value").textContent = "BRAK";
			case valueFromInput:
				document.getElementById("gn361Value").textContent = `${(
					valueFromInput * 0.31
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn481Value").textContent = `${(
					valueFromInput * 0.35
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("gn601Value").textContent = `${(
					valueFromInput * 0.39
				).toFixed()}`;
			case valueFromInput:
				document.getElementById("pu121Value").textContent = `${(
					valueFromInput * 0.21
				).toFixed()}`;
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
			case valueFromInput:
				document.getElementById("pu241Value").textContent = "BRAK";
		}
	}
};

countBtn.addEventListener("click", countData);
