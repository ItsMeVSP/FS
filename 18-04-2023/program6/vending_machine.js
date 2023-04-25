const stationery_items = {
	1: {name: "four-line note", stock: 2},
	2: {name : "two-line note", stock: 8},
	3: {name: "HB-pencil", stock: 10},
	4: {name: "eraser", stock: 3},
	5: {name: "drawing note", stock: 2}
};

function sale() {
	const itemId = document.getElementById("itemId").value;
	
	if (stationery_items[itemId].stock > 0) {
		stationery_items[itemId].stock--;
		document.getElementById("result").innerHTML = `${stationery_items[itemId].name} purchased successfully`;
	} else {
		document.getElementById("result").innerHTML = "Out of stock";
	}
}

function checkStock() {
	let totalStock = 0;
	for (const item in stationery_items) {
		totalStock += stationery_items[item].stock;
	}
	if (totalStock > 0) {
		document.getElementById("result").innerHTML = "Total stock: " + totalStock;
	} else {
		document.getElementById("result").innerHTML = "Out of stock";
	}
}

