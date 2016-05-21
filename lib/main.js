$(document).ready(function() {
	console.log("ready")

	creeper.init();
});


var creeper = {

init: function() {
// this.initStyling();
	this.initEvents();

},

initStyling: function() {
	// this.renderYoStuff();
},
initEvents: function(){
	$(".searchspot").click(this.seeYoStuff);
	
},

seeYoStuff: function(){
	console.log("i heard you click the go for it button");
	
	$.ajax({
			type:"GET",
			url: "https://community-pipl.p.mashape.com/search/v3/json/?email=brooke.casey%40gmail.com&first_name=Brooke&last_name=Casey&middle_name=Brittany&country=US&state=SC&exact_name=0&query_params_mode=and&key=4G2lEFCOCkZL4E5yAjMzCuKAZ1T66nWQ",
			dataType: "json",
			// data: {email},
			beforeSend: function(xhr) {
			xhr.setRequestHeader("X-Mashape-Authorization", "4G2lEFCOCkZL4E5yAjMzCuKAZ1T66nWQ");
			},
			error: function(jqXHR, status, error){
				alert("no! something is wrong" + error);
			},
			success: function (data, datatype, jqXHR){
				alert(JSON.stringify(data));

				// var person = data;
				// console.log(data);
				
				// var html = '';

				// for (var i = 0; i <person.length; i++){
					
				// html += '<li>' + person.relationships[i].name.display + '</li>';
				// }; 

				// alert("oh man its about to happen");
				// $("#righthere").html(html);
			}
					});
}

}