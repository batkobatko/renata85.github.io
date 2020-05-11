var dugmePokusaja = document.getElementById("pogadjaj_dugme");
var tekstPokusaja = document.getElementById("pogadjaj_input");
var rjesenjePokusaja = document.getElementById("rjesenje");
    
dugmePokusaja.addEventListener("click", function() {
	if( ( tekstPokusaja.value.toLowerCase().indexOf("drama") === 0 && tekstPokusaja.value.length === 5 )  
		|| 
		( tekstPokusaja.value.toLowerCase().indexOf("fantazija") === 0 && tekstPokusaja.value.length === 9 ) ) {
		rjesenjePokusaja.innerText = "Tačno.";
	} 
	else {
		rjesenjePokusaja.innerText = "Pogrešno. Pokušaj ponovo.";
	}
	rjesenjePokusaja.style.display = "block";
});

tekstPokusaja.addEventListener("keydown", function() {
	rjesenjePokusaja.style.display = "none";
});