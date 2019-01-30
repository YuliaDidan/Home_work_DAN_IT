function createTable() {
	let table = document.createElement('table');
	table.setAttribute('id', 'table');
	table.className = 'white';
	document.body.appendChild(table);
	
	for (let i = 1; i <= 3; i++) {
		let tr = document.createElement('tr');
		tr.className = 'tr transparent';
		
		for (let j = 1; j <= 3; j++) {
			let td = document.createElement('td');
			td.className = 'td transparent';
			tr.appendChild(td); 
		}

		table.appendChild(tr); 
	}

	table.addEventListener('click', changeColor);

	function changeColor(event) {
		event.stopPropagation();
		let td = event.target;				
		if(td.className == 'td transparent')	{		
			td.className = 'td black'; 		
		} else {
			td.className = 'td transparent'
		}
	}
}

createTable();

document.body.addEventListener('click', changeColorOposite);

function changeColorOposite(event) {	
	let target = event.target.closest('body');	
	let table = document.getElementById('table');
	let tr = document.querySelector('tr');	
	console.log(table);			
		if(table.className == 'white'){		
			table.className = 'black';							
		} else {
			table.className = 'white';
		}	
}


