$(document).ready(function() {


	// var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	// var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	// var completedDo = _.template($("#completeTmpl").html(), completedToDos);


	// $(".duetodayul").append(todayDo);
	// $(".duetomorrowul").append(tomorrowDo);
	// $(".completeditemsul").append(completedDo);
	 //$(".duetodayleft").append(todayToDos.length + " To-Do(s) left");

	 // $(".duetomorrowleft").append(tomorrowToDos.length + " To-Do(s) left");
	 // $(".completeleft").append(completedToDos.length + " To-Do(s) complete");


	  

	//Today Submit 
	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();

	var todayTask = $(".taskToday").val();

	$.ajax({
			url:"http://tiy-fee-rest.herokuapp.com/collections/devon",
			type:'POST',
			data: todayTask,
			dataType: 'JSON',
			error: function (jqXHR, status, error){
				alert ("could not add post");
			},
			success: function(data){
				console.log("hi");
			}
	})


	});








	//strikes through the complete task and adds it to complete array
	$(".thedoer").on("click", ".finishedItem", function(){
		// var total = completedToDos.push();
		// console.log (total);
		$(this).closest("li").addClass("line");
		//$(this).find("li.tomItem").addClass("line");
		var completedTask = $(this).closest("li");
		$(".completeditemsul").append(completedTask);

		//$(".duetomorrowul").append(completedTask);
		var toRemove = $(this).closest("li").data("index");
		console.log(toRemove);
		todayToDos.splice(toRemove, 1);
		completedToDos.unshift(completedTask);

		//splice tomorrowToDos in the morning here
			//$(".completeleft").html(completedToDos.length + " To-Do(s) completed");
			$(".todaycount").html("(" + todayToDos.length + ")");
			$(".completecount").html("(" + completedToDos.length + ")");

	});

$(".reset").click(function(event){
  		$(".completeditemsul").empty();
  		 completedToDos.length = 0;	
  		$(".completecount").html("(" + completedToDos.length + ")");

  	});


	//removes the to-do
	$('.thedoer').on('click', '.removeToDo', function(){
		$(this).closest("li").remove();

	});	



//next: compile template with new data, and then add that to mark up again
    // push or unshift then render the template
     
     // Don't just hide, remove the element.

    //add new item to array
});




