var  users = [{
		"name":"Qi Zhang",
		"id": "001",
		"location": "Chicago",
		"social_media":"facebook",
		"gitname": "QiZhang79",
	},{
		"name":"JunFeng Wang",
		"id": "002",
		"location": "Chicago",
		"social_media":"instagram",
		"gitname": "jwang206"
	},{
		"name":"Sara Lopez",
		"id": "003",
		"location": "Chicago",
		"social_media":"instagram",
		"gitname": "slopez12"
	},{
		"name":"Meiqi Zhao",
		"id": "004",
		"location": "Chicago",
		"social_media":"facebook",
		"gitname": "mzhao22"
	}
];


$('#button').on("click",function(e){
	var container = ["name", "id", "loaction", "social_media"];
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
	}
});
