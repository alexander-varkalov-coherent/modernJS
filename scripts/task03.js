let floors;
let entrances;
let apartments;
while (true) {
	if (!floors) floors = Number(prompt('The floors amount(1-25): '));
	if (floors < 1 || floors > 25) {
		alert('out of bounds');
		floors = undefined;
		continue;
	}

	if (!entrances) entrances = Number(prompt('The entrances amount(1-10): '));
	if (entrances < 1 || entrances > 10) {
		alert('out of bounds');
		entrances = undefined;
		continue;
	}

	if (!apartments) apartments = Number(prompt('The apartments amount(1-20): '));
	if (apartments < 1 || apartments > 10) {
		alert('out of bounds');
		apartments = undefined;
		continue;
	}
	let totalApartmentsAmount = floors * entrances * apartments;

	let myApartment = Number(prompt("Apartment's number: "));
	if (myApartment < 1 || myApartment > totalApartmentsAmount) {
		alert('out of bounds');
		continue;
	} 
	let counter = 1;
	for (let i=floors*apartments; i<totalApartmentsAmount; i+=floors*apartments) {
		if (myApartment <= i) break;
		counter++;
	}
	alert(`your entrance is: ${counter}`);
}
