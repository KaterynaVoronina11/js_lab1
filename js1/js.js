var arrayFriends = [];

arrayFriends[0] = {
	name: "Web",
	data: "13.12.2023",
	place: "311"
};

arrayFriends[1] = {
	name: "Managment znan",
	data: "15.11.2023",
	place: ""
};

arrayFriends[2] = {
	name: "IT English",
	data: "27.11.2023",
	place: "107"
};

arrayFriends[3] = {
	name: "Math for computer science",
	data: "26.11.2023",
	place: ""
};

arrayFriends[4] = {
	name: "Philisophy",
	data: "20.11.2023",
	place: "223"
};

arrayFriends[5] = {
	name: "Machine Learning",
	data: "25.11.2023",
	place: ""
};

function diff_day(text){
    var currentDate = new Date("2023-11-26");
    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
   
    let timeDiff=Math.abs(currentDate.getTime()-date1.getTime());

    let daysDiff=Math.round(timeDiff/(1000*3600*24));

    return daysDiff;
}


function output(item){
	var text = item['data'];
	var diffDays = diff_day(text);


if (diffDays < 0) {
    html = html + "<tr style='background-color: #f58a75;'>";
    diffDays = "Іспит проведено";
} else if (diffDays === 0) {
    html = html + "<tr style='background-color: #faff86;'>";
    diffDays = "Іспит сьогодні";
} else if (diffDays === 1) {
    html = html + "<tr style='background-color: #aaee82;'>";
    diffDays = "Сьогодні консультація";
} else {
    
    diffDays = "Іспит через " + diffDays + " днів";
}

    
    var text1 = item['place'];
	if (text1 == "") {
		text1 = "Невідома аудиторія";
	}

    for (var key in item ){
        if (key == "place" &&  item[key]=="" ) {
           item[key]= "Невідома аудиторія";
         }
           html = html + "<td>" + item[key] + "</td>";
         }

    html = html +  "<td>" + diffDays + "</td>";
	html = html + "</tr>";

}

function ras() {
	html = "<table style='table; background: #ccccf4'>";
	
    html=html+"<tr><td>Назва дисципліти</td><td>Дата іспиту</td><td>Аудиторія</td><td>Повідомлення</td></tr>";

	arrayFriends.forEach(output);
	html = html + "</table>";
	document.getElementById('result').innerHTML = html;
}
