Templates = {};


// Templates.sidebarPosts = [
// 	 "<% _.each(titles, function(title, index , list) { %>",
//         "<li><a href=\"\"><%= title %></a></li>",
//     "<% }); %>"
// ].join("\n");


// Templates.todayTasks = [


//     "<% _.each(todayToDos, function(todayToDos, index, list) { %>",
// 	"<li data-index=\"<%= index %>\" class=\"toDoItem\"> <span class=\"glyphicon glyphicon-ok finishedItem\"></span>
//     <%= todayToDos.todayDo %></li>"
// 	"<% }); %>"
// ].join("\n");



Templates.todayTasks = [



    "<% _.each(newToDo, function(newToDo, index, list) { %>",

	"<li data-todayid=\"<%= newToDo._id %>\" data-index=\"<%= index %>\" class=\"toDoItem\"><div class=\"newCheck\"><span class=\"glyphicon glyphicon-ok finishedItem\"></span></div>",
            
	//"<li data-todayid=\"<%= newToDoInput._id %>\" data-index=\"<%= index %>\" class=\"toDoItem\"> <span class=\"glyphicon glyphicon-ok finishedItem\"></span><span class=\"glyphicon glyphicon-pencil editStuff\" data-toggle=\"modal\" data-target=\".bs-example-modal-sm\"></span>",

    "<%= newToDo.task %>",
     "</li>",


    "<% }); %>"


    ].join("\n");
