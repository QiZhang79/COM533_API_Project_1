var  users = [{
		"name":"Qi Zhang",
		"id": "001",
		"location": "Chicago",
		"social_media":"facebook",
		"gitname": "QiZhang79",
		"avatar_url": "https://avatars2.githubusercontent.com/u/21212693?v=4"
	},{
		"name":"JunFeng Wang",
		"id": "002",
		"location": "Chicago",
		"social_media":"instagram",
		"gitname": "jwang206",
		"avatar_url": "https://avatars1.githubusercontent.com/u/16583879?v=4"
	},{
		"name":"Sara Lopez",
		"id": "003",
		"location": "Chicago",
		"social_media":"instagram",
		"gitname": "slopez12",
		"avatar_url": "https://avatars1.githubusercontent.com/u/25110727?v=4"
	},{
		"name":"Meiqi Zhao",
		"id": "004",
		"location": "Chicago",
		"social_media":"facebook",
		"gitname": "mzhao22",
		"avatar_url": "https://avatars2.githubusercontent.com/u/21227715?v=4"
	}
];


$("#datetime").append("It is " + new Date($.now()));


var main = function(){
	"use strict";

	var container = ["name", "id", "location", "social_media"];
	var tbody = $("#user_table tbody");

	for(var i = 0; i < users.length; i++){
		var row = '<tr>';

		for(var j=0; j < container.length; j++) {
			var record = container[j]
			row += "<td>" + users[i][record] + "</td>";
	  }
		row += '<td><a href="https://github.com/'
				+ users[i]["gitname"] + '">' + users[i]["gitname"] + '</a></td>'
		row += "</tr>";
		tbody.append(row);

		$("#pictures").append('<img src="' + users[i]['avatar_url'] + '" />')
	}



	$("#user_form").on("submit", function(e) {
	  var name = $("#name").val();
	  var studentid = $("#studentid").val();
	  var location = $("#location").val();
	  var social_media = $("#social").val();
	  var gitname = $("#gitname").val();
	  var new_row = " ";

	  if(name === "" && studentid === "" && location === "" && social_media === "" && gitname === ""){
	  	alert("Please insert info : )");
	    e.preventDefault();
	  } else {
	    new_row = "<tr><td>" + name + "</td><td>" + studentid 
	            + "</td><td>" + location + "</td><td>" + social_media 
	            + '</td><td><a href="https://github.com/' + gitname + '">'
	            + gitname + '</a></td></tr>';
	    tbody.append(new_row);

	    $("#name").val("");
	    $("#studentid").val("");
	    $("#location").val("");
	    $("#social").val("");
	    $("#gitname").val("");
	    e.preventDefault();
	  }

	});

	$("#user_form").on("reset", function(e){
	  $("#name").val("");
	  $("#studentid").val("");
	  $("#location").val("");
	  $("#social").val("");
	  $("#gitname").val("");
	});
};
$(document).ready(main);


