$(document).ready(function() {


	//Same page, different albums? No problemo!

	var $todayTasks = $(".duetoday");
	var $tomorrowTasks = $(".duetomorrow");
	var $completeTasks = $(".completedtasks");



	$(".duetodayLink").click(function(){
		event.preventDefault();
		if($todayTasks.hasClass("show")){
			return;
		} else{
			$todayTasks.siblings().removeClass("show");
			$(".duetodayLink").addClass("current");
			$(".duetodayLink").parent().siblings().children().removeClass("current");

			$todayTasks.addClass("show");

			}


	});

	$(".duetomorrowLink").click(function(){
		event.preventDefault();
		if($tomorrowTasks.hasClass("show")){
			return;
		} else{
			$tomorrowTasks.siblings().removeClass("show");
			$tomorrowTasks.addClass("show");
			$(".duetomorrowLink").addClass("current");
			$(".duetomorrowLink").parent().siblings().children().removeClass("current");

		}


	});

	$(".completedtasksLink").click(function(){
		event.preventDefault();
		if($completeTasks.hasClass("show")){
			return;
		} else{
			$completeTasks.siblings().removeClass("show");
			$completeTasks.addClass("show");
			$(".completedtasksLink").addClass("current");
			$(".completedtasksLink").parent().siblings().children().removeClass("current");

		}



	});
	










});