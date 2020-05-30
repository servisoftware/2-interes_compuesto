$(function(){
	$("#calcular").click(function(){
		//calculo de interes compuesto
		var capital  = parseInt($("#capital").val());
		var interes  = parseFloat($("#interes").val())/100;
		var periodos = parseInt($("#periodos").val());
		var total    = capital * Math.pow(( 1 + interes ), periodos );
		var capitalFinal = Math.round(total * 100) / 100;
		$("#total").val(capitalFinal);

	})
});
