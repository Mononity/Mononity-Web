function convhund(nnum){
    var rettarr=[];
    for (var i = 0; i < nnum; i++) {
        var num=parseInt(Math.random().toFixed(2)*100);
        if (num<10 || num>90) {
            i-=1;
        }
        else{
            rettarr.push(num);
        }
    }
    return rettarr;
}
function locoref(){
	$('#loco').remove(); // this is my <canvas> element
	$('#lococontainer').append('<div id="loco"></div>');
	grmapper();
}
function mbref(nb){
		var cate=String(document.getElementById("subplottitle").innerText).split(" ")[0];
		var ind;
		if(cate=="Users"){
			ind=3;
		}
		else if(cate=="Frame/Sec"){
			ind=0;
		}
		else if(cate=="CPU"){
			ind=1;
		}
		else if(cate=="GPU"){
			ind=2;
		}
		else if(cate=="Memory"){
			ind=4;
		}
		else if(cate=="Models"){
			ind=5;
		}
		else if(cate=="Crashes"){
			ind=6;
		}
		var pnlist=[];
		var abb=retphones(7);
		for (ap in abb)
		{
			pnlist.push(abb[ap].substr(0, 7));
		}
        var avg=convhund(7);
        var clk=convhund(7);
        clk[ind]=nb;
        $('#mybarChart').remove(); // this is my <canvas> element
  		$('#mbcontainer').append('<canvas id="mybarChart" height="100px" style="width: 100%;height:100px;"></canvas>')
        var ctx = document.getElementById("mybarChart");
        var mybarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels:pnlist,
                datasets: [{
                    label: 'Average Proportion(%)',
                    backgroundColor: "#26B99A",
                    data: avg
                }, {
                    label: 'Clicked Proportion(%)',
                    backgroundColor: "#03586A",
                    data: clk
                }]
            },
            options: {
                scales: {
                     xAxes: [{
                        ticks: {
                            callback: function(value) {
                                return value.substr(0, 7);//truncate
                            },
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                enabled: true,
                mode: 'label',
                callbacks: {
                  title: function(tooltipItems, data) {
                    var idx = tooltipItems[0].index;
                    return 'Model: ' + pnlist[idx]; //do something with title
                  }
                }
              }
            }
        });


}
function radref(nb){
		var cate=String(document.getElementById("subplottitle").innerText).split(" ")[0];
		var ind;
		if(cate=="Users"){
			ind=3;
		}
		else if(cate=="Frame/Sec"){
			ind=0;
		}
		else if(cate=="CPU"){
			ind=1;
		}
		else if(cate=="GPU"){
			ind=2;
		}
		else if(cate=="Memory"){
			ind=4;
		}
		else if(cate=="Models"){
			ind=5;
		}
		else if(cate=="Crashes"){
			ind=6;
		}
		$('#canvasRadar').remove(); // this is my <canvas> element
  		$('#radcontainer').append('<canvas id="canvasRadar"  style="height:100%;"></canvas>')
        var ctx = document.getElementById("canvasRadar");
        var avg=convhund(7);
        var clk=convhund(7);
        clk[ind]=nb;
        var data = {
            labels: ["Frame/Sec", "CPU", "GPU", "Users", "Memory", "Models", "Crashes"],
            datasets: [{
                label: "Clicked Proportion(%)",
                backgroundColor: "rgba(3, 88, 106, 0.2)",
                borderColor: "rgba(3, 88, 106, 0.80)",
                pointBorderColor: "rgba(3, 88, 106, 0.80)",
                pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                data: clk
            }, {
                label: "Average Proportion(%)",
                backgroundColor: "rgba(38, 185, 154, 0.2)",
                borderColor: "rgba(38, 185, 154, 0.85)",
                pointColor: "rgba(38, 185, 154, 0.85)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: avg
            }]
        };

        var canvasRadar = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                title: {
                    display: true,
                    text: 'Integrated Metric Analysis(%)',
                    position: 'bottom',
                    fontSize: 15,
                    padding: 10,
                    fontStyle:"bold"

                }
            }

        });

    }
var cal;
function getMetric(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
function getYearMetric(){
	var date = new Date();

	var mind = date.valueOf();
	var maxd = date.setMonth(date.getMonth() - 11);

	var mins = 0;
	var maxs = 100;

	var retobj = {};

	for(var i=0;i<100;i++){
		retobj[getMetric(mind,maxd)/1000] = getMetric(mins,maxs)+1;
	}
	return retobj;
}
function getMonthMetric(){
	var date = new Date();

	var mind = date.valueOf();
	var maxd = date.setMonth(date.getMonth() - 1);

	var mins = 0;
	var maxs = 100;

	var retobj = {};

	for(var i=0;i<100;i++){
		retobj[getMetric(mind,maxd)/1000] = getMetric(mins,maxs)+1;
	}
	return retobj;
}
function getWeekMetric(){
	var date = new Date();

	var mind = date.valueOf();
	var maxd = date.setDate(date.getDate() - 14);

	var mins = 0;
	var maxs = 100;

	var retobj = {};

	for(var i=0;i<2000;i++){
		retobj[getMetric(mind,maxd)/1000] = getMetric(mins,maxs)+1;
	}
	return retobj;
}
function getDayMetric(){
	var date = new Date();

	var mind = date.valueOf();
	var maxd = date.setDate(date.getDate() - 3);

	var mins = 0;
	var maxs = 100;

	var retobj = {};

	for(var i=0;i<500;i++){
		retobj[getMetric(mind,maxd)/1000] = getMetric(mins,maxs)+1;
	}
	return retobj;
}

var yeardata = getYearMetric();
var monthdata = getMonthMetric();
var weekdata = getWeekMetric();
var daydata = getDayMetric();

var currentTime = new Date();
var now=new Date();
currentTime.setDate(currentTime.getDate() - 1);
var year=currentTime.getFullYear()
var month = currentTime.getMonth();
var day = currentTime.getDate();
cal = new CalHeatMap();
cal.init({
	itemSelector:"#cpu",
	legendColors: {
		min: "gainsboro",
		max: "steelblue",
		empty: "white"
		// Will use the CSS for the missing keys
	},
	domain: "hour",
	start: new Date(year, month,day),
	range: 8,
	data: daydata,
	legend:[10,20,30,40,50,60,70,80,90],
	domainLabelFormat: "%H\h",
	legendVerticalPosition: "center",
	legendOrientation: "vertical",
	legendMargin: [0, 10, 0, 0],
	nextSelector: "#cpu-nextbtn",
	previousSelector: "#cpu-prevbtn",
	highlight: ["now", now],
	onClick: function(date, nb) {
		if(nb>0){
			radref(nb);
			mbref(nb);
			locoref();

		}
	}
});
cal.jumpTo(now);
$("#Users").on("click", function() {
				var ndata=getDayMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
$("#Crashes").on("click", function() {
				var ndata=getDayMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
$("#FPS").on("click", function() {
				var ndata=getDayMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
$("#CPU").on("click", function() {
				var ndata=getDayMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
$("#Memory").on("click", function() {
				var ndata=getDayMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
$("#Models").on("click", function() {
				var ndata=getDayMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});

$('#cpu-trange').change(function () {
	$('#cpu').empty();
		if (this.value=="week")
		{
			$('#cpu-title').html('<font color="white">CPU - Past 1 week Avg: 72%</font>');
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 6);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();

			cal = new CalHeatMap();
			cal.init({
				itemSelector:"#cpu",
					legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				start: new Date(year, month, day),
				range: 8, // Number of days to display
				domain: "day", // Display days
				subDomain: "min",
				data: weekdata,
				legend:[10,20,30,40,50,60,70,80,90],
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#cpu-nextbtn",
				previousSelector: "#cpu-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					if(nb>0){
					radref(nb);
					mbref(nb);
					locoref();
				}
				}
			});
			$("#Users").on("click", function() {
				var ndata=getWeekMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
			$("#Crashes").on("click", function() {
							var ndata=getWeekMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#FPS").on("click", function() {
							var ndata=getWeekMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#CPU").on("click", function() {
							var ndata=getWeekMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Memory").on("click", function() {
							var ndata=getWeekMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Models").on("click", function() {
							var ndata=getWeekMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
		}
		else if (this.value=="day")
		{
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();


			cal = new CalHeatMap();
			cal.init({
				itemSelector:"#cpu",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "hour",
				start: new Date(year, month,day),
				range: 8,
				domainLabelFormat: "%H\h",
				data:daydata,
				legend:[10,20,30,40,50,60,70,80,90],
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#cpu-nextbtn",
				previousSelector: "#cpu-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					if(nb>0){
						radref(nb);
						mbref(nb);
						locoref();
					}
				}
			});
			$("#Users").on("click", function() {
				var ndata=getDayMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
			$("#Crashes").on("click", function() {
							var ndata=getDayMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#FPS").on("click", function() {
							var ndata=getDayMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#CPU").on("click", function() {
							var ndata=getDayMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Memory").on("click", function() {
							var ndata=getDayMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Models").on("click", function() {
							var ndata=getDayMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
		}
		else if (this.value=="month")
		{
			var currentTime = new Date();
			var now=new Date();
			currentTime.setMonth(currentTime.getMonth() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();

			cal = new CalHeatMap();
			cal.init({
				itemSelector:"#cpu",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "day",
				start: new Date(year,month,day),
				range: 13,
				rowLimit: 8,
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#cpu-nextbtn",
				previousSelector: "#cpu-prevbtn",
				highlight: ["now", now],
				cellSize: 13,
				data:monthdata,
				legend:[10,20,30,40,50,60,70,80,90],
				onClick: function(date, nb) {
					if(nb>0){
						radref(nb);
						mbref(nb);
						locoref();
					}
				}
			});
			$("#Users").on("click", function() {
				var ndata=getMonthMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
			$("#Crashes").on("click", function() {
							var ndata=getMonthMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#FPS").on("click", function() {
							var ndata=getMonthMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#CPU").on("click", function() {
							var ndata=getMonthMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Memory").on("click", function() {
							var ndata=getMonthMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Models").on("click", function() {
							var ndata=getMonthMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
		}
		else if (this.value=="year")
		{
			var currentTime = new Date();
			var now=new Date();
			currentTime.setFullYear(currentTime.getFullYear() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();
			cal = new CalHeatMap();
			cal.init({
				itemSelector:"#cpu",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "month",
				start: new Date(year, month,day),
				range: 7,
				data:yeardata,
				legend:[10,20,30,40,50,60,70,80,90],
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#cpu-nextbtn",
				previousSelector: "#cpu-prevbtn",
				highlight: ["now", now],
				cellSize: 15,
				onClick: function(date, nb) {
					if(nb>0){
						radref(nb);
						mbref(nb);
						locoref();
					}
				}
			});
			$("#Users").on("click", function() {
				var ndata=getYearMetric();
				cal.update(ndata);
cal.jumpTo(new Date());
			});
			$("#Crashes").on("click", function() {
							var ndata=getYearMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#FPS").on("click", function() {
							var ndata=getYearMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#CPU").on("click", function() {
							var ndata=getYearMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Memory").on("click", function() {
							var ndata=getYearMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
			$("#Models").on("click", function() {
							var ndata=getYearMetric();
							cal.update(ndata);
cal.jumpTo(new Date());
						});
		}
		cal.jumpTo(new Date());
		$("#cpu-getnow").on("click", function(e) {
			cal.jumpTo(new Date());
		});

	/*
	$.ajax({
		url: '/gh/get/response.json/kamisama/cal-heatmap/tree/gh-pages/demo/'
	}).done(function (results) {
		$('#map').empty();
		map.init({
			data: results
		});
	});*/
});
// $(function () {
// 		});
function alllupdate() {
	var category=document.getElementById("cpu-trange").value;
	var ndata;
	if(category=='day'){
		ndata=getDayMetric();
	}
	else if(category=='week'){
		ndata=getWeekMetric();
	}
	else if(category=='month'){
		ndata=getMonthMetric();
	}
	else if(category=='year'){
		ndata=getYearMetric();
	}
	cal.update(ndata);
cal.jumpTo(new Date());
}
