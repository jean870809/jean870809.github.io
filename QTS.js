var price = []; //股價
var stock_name = []; //股票名稱
var temp_data = []; //所選資料
var solution = []; //解集合

var allmoney = 10000000; //初始資金
var times = 10000; // 迭代次數
var p = 10; //族群規模
var change = 0.0004; //加減角度
$.get("2014_Nov.json", function (data) {
	$.each(data, function (i, item) {
		stock_name.push(item.name);
		price.push(item.price);
	});
}, "json");


$(function () {

	//================QTS 
	var globalbest = [];
	var localbest = [];
	var localworst = [];
	var bestt = 0;
	var length = stock_name.length;
	var day = price[0].length;
	
	for (let tt = 0; tt < 10; tt++) {

	var r = [];
	for (let i = 0; i < length; i++) {
		r.push(0.5);
	}
	for (let t = 0; t < times; t++) {
		for (let i = 0; i < p; i++) {
			var a = [];
			for (let j = 0; j < length; j++) {
				var x = Math.random();
				if (x > r[j]) {
					a.push(0);
				} else {
					a.push(1);
				}
			}
			solution.push(a);

		}
		//======測量
		for (let i = 0; i < p; i++) {
			if (localbest.length == 0) {
				localbest = solution[i];
			}
			if (globalbest.length == 0) {
				globalbest = solution[i];
			}
			if (localworst.length == 0) {
				localworst = solution[i];
			}

			if (fundings(solution[i]) > fundings(localbest)) {
				localbest.length = 0;
				localbest = solution[i];
			}
			if (fundings(solution[i]) < fundings(localworst)) {
				localworst.length = 0;
				localworst = solution[i];
			}
		}
		if (fundings(localbest) > fundings(globalbest)) {
			globalbest.length = 0;
			globalbest = localbest;
			bestt = t;
		}
		//===========更新機率陣列
		for (let n = 0; n < length; n++) {
			if (globalbest[n] == 1) {
				r[n] += change;
			}
			if (localworst[n] == 1) {
				r[n] -= change;
			}
		}
	}
	r.length = 0;
	}
	//======畫圖
	var n = 0;
	for (let i = 0; i < globalbest.length; i++) {
		if (globalbest[i] == 1) {
			n++;
			temp_data.push(price[i]);
		}
	}
	var distrimoney = (allmoney / n) | 0;
	var stock = [];
	for (let i = 0; i < n; i++) {
		stock.push((distrimoney / (price[i][0])) | 0);
	}

	var remainmoney = 0; //剩餘資金
	for (let i = 0; i < n; i++) {
		remainmoney += distrimoney - stock[i] * price[i][0];
	}
	remainmoney += (allmoney - distrimoney * n);
	var funding = [];
	for (let i = 0; i < day; i++) //day
	{
		var temp = 0;
		for (let j = 0; j < n; j++) //幾檔
		{
			temp += stock[j] * price[j][i];
		}
		funding.push(remainmoney + temp);
	}
	var res_funding = []
	for (let j = 0; j < n; j++) {//第幾檔
		var temp = [];
		for (let i = 0; i < day; i++) {
			temp.push(stock[j] * temp_data[j][i] + (distrimoney - stock[j] * temp_data[j][0]))
		}
		res_funding.push(temp);
	}
	//趨勢線
	var m;
	var temp1 = 0, temp2 = 0;
	for (let i = 1; i < day+1; i++) {
		temp1 += i * funding[i - 1] - i * allmoney;
		temp2 += i * i
	}
	m = temp1 / temp2;
	var y = [];
	for (let i = 0; i < day; i++) {
		y.push(m * (i + 1) + allmoney);
	}
	var label = [];
	var best_label = "";
	for (let i = 0; i < globalbest.length; i++) {
		if (globalbest[i] == 1) {
			label.push(stock_name[i]);
			best_label = best_label + stock_name[i] + ",";
		}
	}
	
	//=============test
	var test_start = 0,test_end = 0;
	for (let i = 0; i < res_funding.length; i++) {
		test_start += res_funding[i][0];
		test_end += res_funding[i][19];
	}
	console.log(funding);
	console.log(res_funding);
	
	//============畫圖
	var ctx = document.getElementById('myChart');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'DAY6', 'DAY7', 'DAY8', 'DAY9', 'DAY10',
				'DAY11', 'DAY12', 'DAY13', 'DAY14', 'DAY15', 'DAY16', 'DAY17', 'DAY18', 'DAY19', 'DAY20'],
			datasets: [{
				data: funding,
				label: best_label,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 5,
				fill: false,
				yAxisID: 'B'
			}, {
				data: y,
				label: "趨勢線",
				backgroundColor: 'rgba(0, 0, 0, 0.2)',
				borderColor: 'rgba(0, 0, 0, 1)',
				borderWidth: 5,
				borderDash: [10,5],
				fill: false,
				yAxisID: 'B'
			}]
		}, options: {
			title: {
				display: true,
				text: "QTS",
				fontSize: 24
			},
			scales: {
				yAxes: [{
					id: 'A',
					type: 'linear',
					position: 'left',
				}, {
					id: 'B',
					type: 'linear',
					position: 'right',
				}]
			}
		}
	});

	for (let i = 0; i < n; i++) {
		myChart.data.datasets.push({
			data: res_funding[i],
			label: label[i],
			backgroundColor: getbgcolor(),
			borderColor: getbdcolor(),
			fill: false,
			yAxisID: 'A'
		});
	}

	myChart.update();
});

function fundings(num) {
	var n = 0;
	for (let i = 0; i < num.length; i++) {
		if (num[i] == 1) {
			n++;
			temp_data.push(price[i]);
		}
	}

	var distrimoney = (allmoney / n) | 0;
	var stock = [];
	for (let i = 0; i < n; i++) {
		stock.push((distrimoney / (price[i][0])) | 0);
	}
	var remainmoney = 0;
	for (let i = 0; i < n; i++) {
		remainmoney += distrimoney - stock[i] * price[i][0];
	}
	remainmoney += (allmoney - distrimoney * n);
	var funding = [];
	for (let i = 0; i < price[0].length; i++) //day
	{
		var temp = 0;
		for (let j = 0; j < n; j++) //幾檔
		{
			temp += stock[j] * price[j][i];
		}
		funding.push(remainmoney + temp);
	}

	temp_data.length = 0;
	stock.length = 0;
	funding.length = 0;
}



function getbgcolor() {
	var numone = parseInt(Math.random() * (255 + 1), 10);
	var numtwo = parseInt(Math.random() * (255 + 1), 10);
	var numthree = parseInt(Math.random() * (255 + 1), 10);

	color = "rgba(" + numone + "," + numtwo + "," + numthree + ",0.2)";
	return color;
}
function getbdcolor() {
	var numone = parseInt(Math.random() * (255 + 1), 10);
	var numtwo = parseInt(Math.random() * (255 + 1), 10);
	var numthree = parseInt(Math.random() * (255 + 1), 10);

	color = "rgba(" + numone + "," + numtwo + "," + numthree + ",0.5)";
	return color;
}