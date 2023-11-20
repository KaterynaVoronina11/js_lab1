var arrayFriends = [];

arrayFriends[0] = {
	name: "Web",
	data: "13.12.2023",
	place: "311"
};

arrayFriends[1] = {
	name: "Managment znan",
	data: "15.12.2023",
	place: ""
};

arrayFriends[2] = {
	name: "IT English",
	data: "17.12.2023",
	place: "107"
};

arrayFriends[3] = {
	name: "Math for computer science",
	data: "20.12.2023",
	place: ""
};

arrayFriends[4] = {
	name: "Philisophy",
	data: "22.10.2023",
	place: "223"
};

arrayFriends[5] = {
	name: "Machine Learning",
	data: "23.10.2023",
	place: ""
};

function diff_day(text){
    var currentDate = new Date();
    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    return daysDiff;
}

function output(item){
	var text = item['data'];
	var diffDays = diff_day(text);
	if (diffDays == 5) {
		html = html + "<tr style='background:green;'>";
		diffDays = "Останній день перед іспитом-КОНСУЛЬТАЦІЯ!";
	} else if (diffDays > 5){
		html = html + "<tr>";
		diffDays = "Іспит через " + diffDays + " дні";
	} else if (diffDays == 0){
		html = html + "<tr style='background:yellow;'>";
		diffDays = "День іспиту вже сьогодні!";
	} else {
		html = html + "<tr style='background:red;'>";
		diffDays = "Іспит проведено :)" ;
	}
	var text1 = item['place'];
	if (text1 == "") {
		html = html + "<tr>";
		text1 = "Невідома аудиторія іспиту";
	}
	for (var key in item ){
		html = html + "<td>" + item[key] + "</td>";
	}
    
	html = html + "<td>" + text1 + "</td>" +  "<td>" +  diffDays + "</td>";
	html = html + "</tr>";
    

}


function ras() {
	html = "<table style='b-table'>";
	html = html + "<tr><td>Name</td><td>Date</td> <td></td> <td>Place</td> <td>Termin</td></tr>";

	arrayFriends.forEach(output);
	html = html + "</table>";
	document.getElementById('result').innerHTML = html;
}
