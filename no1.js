var price = [];
$.get("data.json", function (data) {
	$.each(data, function (i, item) {
		if (item.name == document.getElementById("myCheckbox1").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox2").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox3").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox4").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox5").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox6").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox7").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox8").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox9").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox10").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox11").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox12").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox13").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox14").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox15").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox16").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox17").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox18").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox19").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox20").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox21").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox22").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox23").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox24").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox25").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox26").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox27").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox28").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox29").value) {
			price.push(item.price);
		}
		if (item.name == document.getElementById("myCheckbox30").value) {
			price.push(item.price);
			
		}
	});
},"json");

$(function () { //tab
	var $li = $('ul.tab-title li');
	$($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();

	$li.click(function () {
		$($(this).find('a').attr('href')).show().siblings('.tab-inner').hide();
		$(this).addClass('active').siblings('.active').removeClass('active');
		
	});
});
function myFunction() {
	var n = 0;//幾檔
	var data = [];
	var ctx = document.getElementById('myChart'); //股價圖
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'DAY6', 'DAY7', 'DAY8', 'DAY9', 'DAY10',
				'DAY11', 'DAY12', 'DAY13', 'DAY14', 'DAY15', 'DAY16', 'DAY17', 'DAY18', 'DAY19', 'DAY20'],
			datasets: []
		}
	});

	$('#myChart1').remove();
	$('#tab02').append('<canvas id="myChart1" width="300px" height="200px"></canvas>');

	
	

	if (document.getElementById("myCheckbox1").checked == true) {
		data.push(price[0]);
		n++;
		myChart.data.datasets.push({
			data: price[0],
			label: document.getElementById("myCheckbox1").value,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
		
	}
	if (document.getElementById("myCheckbox2").checked == true) {
		data.push(price[1]);
		n++;
		myChart.data.datasets.push({
			data: price[1],
			label: document.getElementById("myCheckbox2").value,
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgba(54, 162, 235, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox3").checked == true) {
		data.push(price[2]);
		n++;
		myChart.data.datasets.push({
			data: price[2],
			label: document.getElementById("myCheckbox3").value,
			backgroundColor: 'rgba(153, 102, 255, 0.2)',
			borderColor: 'rgba(153, 102, 255, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox4").checked == true) {
		data.push(price[3]);
		n++;
		myChart.data.datasets.push({
			data: price[3],
			label: document.getElementById("myCheckbox4").value,
			backgroundColor: 'rgba(255, 205, 86, 0.2)',
			borderColor: 'rgba(255, 205, 86, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox5").checked == true) {
		data.push(price[4]);
		n++
		myChart.data.datasets.push({
			data: price[4],
			label: document.getElementById("myCheckbox5").value,
			backgroundColor: 'rgba(75, 192, 192, 0.2)',
			borderColor: 'rgba(75, 192, 192, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox6").checked == true) {
		data.push(price[5]);
		n++
		myChart.data.datasets.push({
			data: price[5],
			label: document.getElementById("myCheckbox6").value,
			backgroundColor: 'rgba(255, 153, 51, 0.2)',
			borderColor: 'rgba(255, 153, 51, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox7").checked == true) {
		data.push(price[6]);
		n++
		myChart.data.datasets.push({
			data: price[6],
			label: document.getElementById("myCheckbox7").value,
			backgroundColor: 'rgba(153, 255, 51, 0.2)',
			borderColor: 'rgba(153, 255, 51, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox8").checked == true) {
		data.push(price[7]);
		n++
		myChart.data.datasets.push({
			data: price[7],
			label: document.getElementById("myCheckbox8").value,
			backgroundColor: 'rgba(204, 102, 255, 0.2)',
			borderColor: 'rgba(204, 102, 255, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox9").checked == true) {
		data.push(price[8]);
		n++
		myChart.data.datasets.push({
			data: price[8],
			label: document.getElementById("myCheckbox9").value,
			backgroundColor: 'rgba(0, 204, 153, 0.2)',
			borderColor: 'rgba(0, 204, 153, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox10").checked == true) {
		data.push(price[9]);
		n++
		myChart.data.datasets.push({
			data: price[9],
			label: document.getElementById("myCheckbox10").value,
			backgroundColor: 'rgba(0, 51, 153, 0.2)',
			borderColor: 'rgba(0, 51, 153, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox11").checked == true) {
		data.push(price[10]);
		n++
		myChart.data.datasets.push({
			data: price[10],
			label: document.getElementById("myCheckbox11").value,
			backgroundColor: 'rgba(204, 51, 0, 0.2)',
			borderColor: 'rgba(204, 51, 0, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox12").checked == true) {
		data.push(price[11]);
		n++
		myChart.data.datasets.push({
			data: price[11],
			label: document.getElementById("myCheckbox12").value,
			backgroundColor: 'rgba(153, 51, 102, 0.2)',
			borderColor: 'rgba(153, 51, 102, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox13").checked == true) {
		data.push(price[13]);
		n++
		myChart.data.datasets.push({
			data: price[13],
			label: document.getElementById("myCheckbox13").value,
			backgroundColor: 'rgba(153, 153, 255, 0.2)',
			borderColor: 'rgba(153, 153, 255, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox14").checked == true) {
		data.push(price[13]);
		n++
		myChart.data.datasets.push({
			data: price[13],
			label: document.getElementById("myCheckbox14").value,
			backgroundColor: 'rgba(51, 102, 153, 0.2)',
			borderColor: 'rgba(51, 102, 153, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox15").checked == true) {
		data.push(price[14]);
		n++
		myChart.data.datasets.push({
			data: price[14],
			label: document.getElementById("myCheckbox15").value,
			backgroundColor: 'rgba(153, 102, 0, 0.2)',
			borderColor: 'rgba(153, 102, 0, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox16").checked == true) {
		data.push(price[15]);
		n++
		myChart.data.datasets.push({
			data: price[15],
			label: document.getElementById("myCheckbox16").value,
			backgroundColor: 'rgba(102, 102, 153, 0.2)',
			borderColor: 'rgba(102, 102, 153, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox17").checked == true) {
		data.push(price[16]);
		n++
		myChart.data.datasets.push({
			data: price[16],
			label: document.getElementById("myCheckbox17").value,
			backgroundColor: 'rgba(204, 255, 102, 0.2)',
			borderColor: 'rgba(204, 255, 102, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox18").checked == true) {
		data.push(price[17]);
		n++
		myChart.data.datasets.push({
			data: price[17],
			label: document.getElementById("myCheckbox18").value,
			backgroundColor: 'rgba(0, 102, 102, 0.2)',
			borderColor: 'rgba(0, 102, 102, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox19").checked == true) {
		data.push(price[18]);
		n++
		myChart.data.datasets.push({
			data: price[18],
			label: document.getElementById("myCheckbox19").value,
			backgroundColor: 'rgba(255, 153, 102, 0.2)',
			borderColor: 'rgba(255, 153, 102, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox20").checked == true) {
		data.push(price[19]);
		n++
		myChart.data.datasets.push({
			data: price[19],
			label: document.getElementById("myCheckbox20").value,
			backgroundColor: 'rgba(0, 153, 204, 0.2)',
			borderColor: 'rgba(0, 153, 204, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox21").checked == true) {
		data.push(price[20]);
		n++
		myChart.data.datasets.push({
			data: price[20],
			label: document.getElementById("myCheckbox21").value,
			backgroundColor: 'rgba(204, 0, 153, 0.2)',
			borderColor: 'rgba(204, 0, 153, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox22").checked == true) {
		data.push(price[21]);
		n++
		myChart.data.datasets.push({
			data: price[21],
			label: document.getElementById("myCheckbox22").value,
			backgroundColor: 'rgba(255, 204, 102, 0.2)',
			borderColor: 'rgba(255, 204, 102, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox23").checked == true) {
		data.push(price[22]);
		n++
		myChart.data.datasets.push({
			data: price[22],
			label: document.getElementById("myCheckbox23").value,
			backgroundColor: 'rgba(153, 0, 255, 0.2)',
			borderColor: 'rgba(153, 0, 255, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox24").checked == true) {
		data.push(price[23]);
		n++
		myChart.data.datasets.push({
			data: price[23],
			label: document.getElementById("myCheckbox24").value,
			backgroundColor: 'rgba(0, 153, 51, 0.2)',
			borderColor: 'rgba(0, 153, 51, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox25").checked == true) {
		data.push(price[24]);
		n++
		myChart.data.datasets.push({
			data: price[24],
			label: document.getElementById("myCheckbox25").value,
			backgroundColor: 'rgba(102, 51, 0, 0.2)',
			borderColor: 'rgba(102, 51, 0, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox26").checked == true) {
		data.push(price[25]);
		n++
		myChart.data.datasets.push({
			data: price[25],
			label: document.getElementById("myCheckbox26").value,
			backgroundColor: 'rgba(153, 51, 153, 0.2)',
			borderColor: 'rgba(153, 51, 153, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox27").checked == true) {
		data.push(price[26]);
		n++
		myChart.data.datasets.push({
			data: price[26],
			label: document.getElementById("myCheckbox27").value,
			backgroundColor: 'rgba(153, 0, 0, 0.2)',
			borderColor: 'rgba(153, 0, 0, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox28").checked == true) {
		data.push(price[27]);
		n++
		myChart.data.datasets.push({
			data: price[27],
			label: document.getElementById("myCheckbox28").value,
			backgroundColor: 'rgba(51, 204, 255, 0.2)',
			borderColor: 'rgba(51, 204, 255, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox29").checked == true) {
		data.push(price[28]);
		n++
		myChart.data.datasets.push({
			data: price[28],
			label: document.getElementById("myCheckbox29").value,
			backgroundColor: 'rgba(102, 0, 102, 0.2)',
			borderColor: 'rgba(102, 0, 102, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}
	if (document.getElementById("myCheckbox30").checked == true) {
		data.push(price[29]);
		n++
		myChart.data.datasets.push({
			data: price[29],
			label: document.getElementById("myCheckbox30").value,
			backgroundColor: 'rgba(204, 255, 102, 0.2)',
			borderColor: 'rgba(204, 255, 102, 1)',
			fill: false
		});
		myChart.update();
	}else{
		myChart.update();
	}

	//資金水位
	if (n > 0) {
		var allmoney = 10000000;
		var distrimoney = (allmoney / n) | 0;
		var stock = [];
		for (let i = 0; i < n; i++) {
			stock.push((distrimoney / (data[i][0])) | 0);
		}
		var remainmoney = 0;
		for (let i = 0; i < n; i++) {
			remainmoney += distrimoney - stock[i] * data[i][0];
		}
		remainmoney += (allmoney - distrimoney * n);
		var funding = [];
		for (let i = 0; i < 20; i++) //day
		{
			var temp = 0;
			for (let j = 0; j < n; j++) //幾檔
			{
				temp += stock[j] * data[j][i];
			}
			funding.push(remainmoney + temp);
		}
		//趨勢線
		var m;
		var temp1 = 0,temp2 = 0;
		for (let i = 1; i < 21; i++){
			temp1 += i*funding[i-1] - i*allmoney;
        	temp2 += i*i
		}
		m = temp1 / temp2;
		var y = [];
		for (let i = 0; i < 20; i++) {
			y.push(m*(i+1)+allmoney);
		}
	} else {
	funding = [];
	y = [];
	}

	var ctx1 = document.getElementById('myChart1'); //資金水位圖
	var myChart1 = new Chart(ctx1, {
		type: 'line',
		data: {
			labels: ['DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'DAY6', 'DAY7', 'DAY8', 'DAY9', 'DAY10',
				'DAY11', 'DAY12', 'DAY13', 'DAY14', 'DAY15', 'DAY16', 'DAY17', 'DAY18', 'DAY19', 'DAY20'],
			datasets: [{
				data: funding,
				label: "資金水位",
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				fill: false
			},{
				data: y,
				label: "趨勢線",
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 0.2)',
				fill: false
			}]
		}
	});
	
	
	myChart1.update();
	

}

function check_all(obj, cName) { //全選
	var checkboxs = document.getElementsByName(cName);
	for (var i = 0; i < checkboxs.length; i++) { checkboxs[i].checked = true; }
	myFunction();
}
function clear_all(obj, cName) { //清除
	var checkboxs = document.getElementsByName(cName);
	for (var i = 0; i < checkboxs.length; i++) { checkboxs[i].checked = false; }
	myFunction();
}