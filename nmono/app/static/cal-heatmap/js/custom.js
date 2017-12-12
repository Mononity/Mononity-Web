$(function () {
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();
			var cal = new CalHeatMap();
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
				range: 7,
				domainLabelFormat: "%H\h",
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#cpu-nextbtn",
				previousSelector: "#cpu-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					 $('<div class="panel panel-info">'+
						'<div class="panel-heading">'+
							'<div class="panel-title">'+
								date+
							'</div>'+
						'</div>'+
						'<div class="panel-body">'+
							'<div class="panel-body">'+
										//(nb === null ? "CPU Resource Detail" : nb)+'<iframe src="http://210.94.194.82:5959" width="100%" frameborder="0" height="100%"></iframe>'+
										 "CPU Resource Detail"+
						 	'</div>'+
						'</div>'+
					'</div>'+'<script></script>').appendTo("#cpu-info");
					$('.panel').lobiPanel({
						//Options go here
					});
					$('#cpu-spacer').empty();
				}
			});
			cal.jumpTo(now);
		    $('#cpu-trange').change(function () {
		    	console.log(this.value);
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

					    var cal = new CalHeatMap();
					    cal.init({
					    	itemSelector:"#cpu",
					    		legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
					      	start: new Date(year, month, day),
					        range: 7, // Number of days to display
					        domain: "day", // Display days
					        subDomain: "min",
					        legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#cpu-nextbtn",
							previousSelector: "#cpu-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										//(nb === null ? "CPU Resource Detail" : nb)+'<iframe src="http://210.94.194.82:5959" width="100%" frameborder="0" height="100%"></iframe>'+
										 "CPU Resource Detail"+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#cpu-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#cpu-spacer').empty();
							}
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


						var cal = new CalHeatMap();
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
							range: 7,
							domainLabelFormat: "%H\h",
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#cpu-nextbtn",
							previousSelector: "#cpu-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#cpu-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#cpu-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
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
							range: 11,
							rowLimit: 8,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#cpu-nextbtn",
							previousSelector: "#cpu-prevbtn",
							highlight: ["now", now],
							cellSize: 13,
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#cpu-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#cpu-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
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
							range: 6,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#cpu-nextbtn",
							previousSelector: "#cpu-prevbtn",
							highlight: ["now", now],
							cellSize: 15,
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#cpu-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#cpu-spacer').empty();
							}
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
		});

$(function () {
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();
			var cal = new CalHeatMap();
			cal.init({
				itemSelector:"#gpu",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "hour",
				start: new Date(year, month,day),
				range: 7,
				domainLabelFormat: "%H\h",
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#gpu-nextbtn",
				previousSelector: "#gpu-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					 $('<div class="panel panel-info">'+
						'<div class="panel-heading">'+
							'<div class="panel-title">'+
								date+
							'</div>'+
						'</div>'+
						'<div class="panel-body">'+
							(nb === null ? "unknown" : nb)+
						'</div>'+
					'</div>'+'<script></script>').appendTo("#gpu-info");
					$('.panel').lobiPanel({
						//Options go here
					});
					$('#gpu-spacer').empty();
				}
			});
			cal.jumpTo(now);
		    $('#gpu-trange').change(function () {
		    	console.log(this.value);
		    	$('#gpu').empty();
		    		if (this.value=="week")
		    		{
		    			var currentTime = new Date();
						var now=new Date();
						currentTime.setDate(currentTime.getDate() - 6);
						var year=currentTime.getFullYear()
						var month = currentTime.getMonth();
						var day = currentTime.getDate();

					    var cal = new CalHeatMap();
					    cal.init({
					    	itemSelector:"#gpu",
					    		legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
					      	start: new Date(year, month, day),
					        range: 7, // Number of days to display
					        domain: "day", // Display days
					        subDomain: "min",
					        legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#gpu-nextbtn",
							previousSelector: "#gpu-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#gpu-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#gpu-spacer').empty();
							}
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


						var cal = new CalHeatMap();
		    			cal.init({
							itemSelector:"#gpu",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "hour",
							start: new Date(year, month,day),
							range: 7,
							domainLabelFormat: "%H\h",
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#gpu-nextbtn",
							previousSelector: "#gpu-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#gpu-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#gpu-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#gpu",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "day",
							start: new Date(year,month,day),
							range: 11,
							rowLimit: 8,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#gpu-nextbtn",
							previousSelector: "#gpu-prevbtn",
							highlight: ["now", now],
							cellSize: 13,
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#gpu-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#gpu-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#gpu",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "month",
							start: new Date(year, month,day),
							range: 6,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#gpu-nextbtn",
							previousSelector: "#gpu-prevbtn",
							highlight: ["now", now],
							cellSize: 15,
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#gpu-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#gpu-spacer').empty();
							}
						});
		    		}
		    		cal.jumpTo(new Date());
					$("#gpu-getnow").on("click", function(e) {
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
		});

$(function () {
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();
			var cal = new CalHeatMap();
			cal.init({
				itemSelector:"#hdd",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "hour",
				start: new Date(year, month,day),
				range: 7,
				domainLabelFormat: "%H\h",
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#hdd-nextbtn",
				previousSelector: "#hdd-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					 $('<div class="panel panel-info">'+
						'<div class="panel-heading">'+
							'<div class="panel-title">'+
								date+
							'</div>'+
						'</div>'+
						'<div class="panel-body">'+
							(nb === null ? "unknown" : nb)+
						'</div>'+
					'</div>'+'<script></script>').appendTo("#hdd-info");
					$('.panel').lobiPanel({
						//Options go here
					});
					$('#hdd-spacer').empty();
				}
			});
			cal.jumpTo(now);
		    $('#hdd-trange').change(function () {
		    	console.log(this.value);
		    	$('#hdd').empty();
		    		if (this.value=="week")
		    		{
		    			var currentTime = new Date();
						var now=new Date();
						currentTime.setDate(currentTime.getDate() - 6);
						var year=currentTime.getFullYear()
						var month = currentTime.getMonth();
						var day = currentTime.getDate();

					    var cal = new CalHeatMap();
					    cal.init({
					    	itemSelector:"#hdd",
					    		legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
					      	start: new Date(year, month, day),
					        range: 7, // Number of days to display
					        domain: "day", // Display days
					        subDomain: "min",
					        legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#hdd-nextbtn",
							previousSelector: "#hdd-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#hdd-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#hdd-spacer').empty();
							}
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


						var cal = new CalHeatMap();
		    			cal.init({
							itemSelector:"#hdd",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "hour",
							start: new Date(year, month,day),
							range: 7,
							domainLabelFormat: "%H\h",
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#hdd-nextbtn",
							previousSelector: "#hdd-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#hdd-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#hdd-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#hdd",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "day",
							start: new Date(year,month,day),
							range: 11,
							rowLimit: 8,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#hdd-nextbtn",
							previousSelector: "#hdd-prevbtn",
							highlight: ["now", now],
							cellSize: 13,
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#hdd-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#hdd-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#hdd",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "month",
							start: new Date(year, month,day),
							range: 6,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#hdd-nextbtn",
							previousSelector: "#hdd-prevbtn",
							highlight: ["now", now],
							cellSize: 15,
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#hdd-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#hdd-spacer').empty();
							}
						});
		    		}
		    		cal.jumpTo(new Date());
					$("#hdd-getnow").on("click", function(e) {
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
		});

$(function () {
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();
			var cal = new CalHeatMap();
			cal.init({
				itemSelector:"#mem",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "hour",
				start: new Date(year, month,day),
				range: 7,
				domainLabelFormat: "%H\h",
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#mem-nextbtn",
				previousSelector: "#mem-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					 $('<div class="panel panel-info">'+
						'<div class="panel-heading">'+
							'<div class="panel-title">'+
								date+
							'</div>'+
						'</div>'+
						'<div class="panel-body">'+
							(nb === null ? "unknown" : nb)+
						'</div>'+
					'</div>'+'<script></script>').appendTo("#mem-info");
					$('.panel').lobiPanel({
						//Options go here
					});
					$('#mem-spacer').empty();
				}
			});
			cal.jumpTo(now);
		    $('#mem-trange').change(function () {
		    	console.log(this.value);
		    	$('#mem').empty();
		    		if (this.value=="week")
		    		{
		    			var currentTime = new Date();
						var now=new Date();
						currentTime.setDate(currentTime.getDate() - 6);
						var year=currentTime.getFullYear()
						var month = currentTime.getMonth();
						var day = currentTime.getDate();

					    var cal = new CalHeatMap();
					    cal.init({
					    	itemSelector:"#mem",
					    		legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
					      	start: new Date(year, month, day),
					        range: 7, // Number of days to display
					        domain: "day", // Display days
					        subDomain: "min",
					        legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#mem-nextbtn",
							previousSelector: "#mem-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#mem-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#mem-spacer').empty();
							}
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


						var cal = new CalHeatMap();
		    			cal.init({
							itemSelector:"#mem",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "hour",
							start: new Date(year, month,day),
							range: 7,
							domainLabelFormat: "%H\h",
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#mem-nextbtn",
							previousSelector: "#mem-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#mem-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#mem-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#mem",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "day",
							start: new Date(year,month,day),
							range: 11,
							rowLimit: 8,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#mem-nextbtn",
							previousSelector: "#mem-prevbtn",
							highlight: ["now", now],
							cellSize: 13,
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#mem-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#mem-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#mem",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "month",
							start: new Date(year, month,day),
							range: 6,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#mem-nextbtn",
							previousSelector: "#mem-prevbtn",
							highlight: ["now", now],
							cellSize: 15,
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#mem-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#mem-spacer').empty();
							}
						});
		    		}
		    		cal.jumpTo(new Date());
					$("#mem-getnow").on("click", function(e) {
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
		});

$(function () {
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();
			var cal = new CalHeatMap();
			cal.init({
				itemSelector:"#net",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "hour",
				start: new Date(year, month,day),
				range: 7,
				domainLabelFormat: "%H\h",
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#net-nextbtn",
				previousSelector: "#net-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					 $('<div class="panel panel-info">'+
						'<div class="panel-heading">'+
							'<div class="panel-title">'+
								date+
							'</div>'+
						'</div>'+
						'<div class="panel-body">'+
							(nb === null ? "unknown" : nb)+
						'</div>'+
					'</div>'+'<script></script>').appendTo("#net-info");
					$('.panel').lobiPanel({
						//Options go here
					});
					$('#net-spacer').empty();
				}
			});
			cal.jumpTo(now);
		    $('#net-trange').change(function () {
		    	console.log(this.value);
		    	$('#net').empty();
		    		if (this.value=="week")
		    		{
		    			var currentTime = new Date();
						var now=new Date();
						currentTime.setDate(currentTime.getDate() - 6);
						var year=currentTime.getFullYear()
						var month = currentTime.getMonth();
						var day = currentTime.getDate();

					    var cal = new CalHeatMap();
					    cal.init({
					    	itemSelector:"#net",
					    		legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
					      	start: new Date(year, month, day),
					        range: 7, // Number of days to display
					        domain: "day", // Display days
					        subDomain: "min",
					        legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#net-nextbtn",
							previousSelector: "#net-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#net-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#net-spacer').empty();
							}
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


						var cal = new CalHeatMap();
		    			cal.init({
							itemSelector:"#net",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "hour",
							start: new Date(year, month,day),
							range: 7,
							domainLabelFormat: "%H\h",
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#net-nextbtn",
							previousSelector: "#net-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#net-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#net-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#net",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "day",
							start: new Date(year,month,day),
							range: 11,
							rowLimit: 8,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#net-nextbtn",
							previousSelector: "#net-prevbtn",
							highlight: ["now", now],
							cellSize: 13,
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#net-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#net-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#net",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "month",
							start: new Date(year, month,day),
							range: 6,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#net-nextbtn",
							previousSelector: "#net-prevbtn",
							highlight: ["now", now],
							cellSize: 15,
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#net-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#net-spacer').empty();
							}
						});
		    		}
		    		cal.jumpTo(new Date());
					$("#net-getnow").on("click", function(e) {
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
		});

$(function () {
			var currentTime = new Date();
			var now=new Date();
			currentTime.setDate(currentTime.getDate() - 1);
			var year=currentTime.getFullYear()
			var month = currentTime.getMonth();
			var day = currentTime.getDate();
			var cal = new CalHeatMap();
			cal.init({
				itemSelector:"#fps",
				legendColors: {
					min: "gainsboro",
					max: "steelblue",
					empty: "white"
					// Will use the CSS for the missing keys
				},
				domain: "hour",
				start: new Date(year, month,day),
				range: 7,
				domainLabelFormat: "%H\h",
				legendVerticalPosition: "center",
				legendOrientation: "vertical",
				legendMargin: [0, 10, 0, 0],
				nextSelector: "#fps-nextbtn",
				previousSelector: "#fps-prevbtn",
				highlight: ["now", now],
				onClick: function(date, nb) {
					 $('<div class="panel panel-info">'+
						'<div class="panel-heading">'+
							'<div class="panel-title">'+
								date+
							'</div>'+
						'</div>'+
						'<div class="panel-body">'+
							(nb === null ? "unknown" : nb)+
						'</div>'+
					'</div>'+'<script></script>').appendTo("#fps-info");
					$('.panel').lobiPanel({
						//Options go here
					});
					$('#fps-spacer').empty();
				}
			});
			cal.jumpTo(now);
		    $('#fps-trange').change(function () {
		    	console.log(this.value);
		    	$('#fps').empty();
		    		if (this.value=="week")
		    		{
		    			var currentTime = new Date();
						var now=new Date();
						currentTime.setDate(currentTime.getDate() - 6);
						var year=currentTime.getFullYear()
						var month = currentTime.getMonth();
						var day = currentTime.getDate();

					    var cal = new CalHeatMap();
					    cal.init({
					    	itemSelector:"#fps",
					    		legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
					      	start: new Date(year, month, day),
					        range: 7, // Number of days to display
					        domain: "day", // Display days
					        subDomain: "min",
					        legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#fps-nextbtn",
							previousSelector: "#fps-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#fps-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#fps-spacer').empty();
							}
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


						var cal = new CalHeatMap();
		    			cal.init({
							itemSelector:"#fps",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "hour",
							start: new Date(year, month,day),
							range: 7,
							domainLabelFormat: "%H\h",
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#fps-nextbtn",
							previousSelector: "#fps-prevbtn",
							highlight: ["now", now],
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#fps-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#fps-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#fps",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "day",
							start: new Date(year,month,day),
							range: 11,
							rowLimit: 8,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#fps-nextbtn",
							previousSelector: "#fps-prevbtn",
							highlight: ["now", now],
							cellSize: 13,
							onClick: function(date, nb) {
							 $('<div class="panel panel-info">'+
								'<div class="panel-heading">'+
									'<div class="panel-title">'+
										date+
									'</div>'+
								'</div>'+
								'<div class="panel-body">'+
									(nb === null ? "unknown" : nb)+
								'</div>'+
							'</div>'+'<script></script>').appendTo("#fps-info");
							$('.panel').lobiPanel({
								//Options go here
							});
							$('#fps-spacer').empty();
						}
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
						;
						var cal = new CalHeatMap();
		    			cal.init({
		    				itemSelector:"#fps",
		    				legendColors: {
								min: "gainsboro",
								max: "steelblue",
								empty: "white"
								// Will use the CSS for the missing keys
							},
							domain: "month",
							start: new Date(year, month,day),
							range: 6,
							legendVerticalPosition: "center",
							legendOrientation: "vertical",
							legendMargin: [0, 10, 0, 0],
							nextSelector: "#fps-nextbtn",
							previousSelector: "#fps-prevbtn",
							highlight: ["now", now],
							cellSize: 15,
							onClick: function(date, nb) {
								 $('<div class="panel panel-info">'+
									'<div class="panel-heading">'+
										'<div class="panel-title">'+
											date+
										'</div>'+
									'</div>'+
									'<div class="panel-body">'+
										(nb === null ? "unknown" : nb)+
									'</div>'+
								'</div>'+'<script></script>').appendTo("#fps-info");
								$('.panel').lobiPanel({
									//Options go here
								});
								$('#fps-spacer').empty();
							}
						});
		    		}
		    		cal.jumpTo(new Date());
					$("#fps-getnow").on("click", function(e) {
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
		});