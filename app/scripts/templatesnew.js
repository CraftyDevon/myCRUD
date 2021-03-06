$(document).ready(function() {

  myToDos.init();

});

var myToDos = {
  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    
    this.renderToDos();
    this.renderCompletes();


  },
  initEvents: function() {

      $("#todaytodoSubmit").on("submit", this.addToDo);
      $(".duetodayul").on("click", ".finishedItem", this.removeToDo);

 


  },
  render: function($el, template, data) {
      var tmpl = _.template(template, data);

      $el.html(tmpl);

  },

    addToDo: function(e) {
      e.preventDefault();

        var newToDo = {
              task: $(".taskToday").val(),
 
        };

    $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/devon",
      type: "POST",
      data: newToDo, 
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("couldn't add post");
      },
      success: function(data, dataType, jqXHR) {

        console.log("imma fork your mom in the githubz");
        $(".taskToday").val(""); 
        myToDos.renderToDos();
 
        // myBlog.renderPosts();  
        // myBlog.renderSideBar();
      }
    });

  },
  renderToDos: function() {

     $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/devon",
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("you broke the internet");
      },
      success: function(data, dataType, jqXHR) {
        
        var newToDo = window.newToDo = data; // have to make global for underscore to work
        myToDos.render($(".duetodayul"), Templates.todayTasks, newToDo);
        $(".todaycount").html("(" + newToDo.length + ")");
     

      }
    });

  },
  renderCompletes: function() {


      $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/devoncomplete",
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("you broke the internet");
      },
      success: function(data, dataType, jqXHR) {
        
        var completeToDo = window.completeToDo = data; // have to make global for underscore to work
        completeToDo.render($(".completeditemsul"), Templates.completedTasks, completeToDo);
     

      }
    });



  },
 removeToDo: function(e){
    e.preventDefault();





    var $newToDo = $(this).closest("li");
    var todayid = $newToDo.data("todayid");
    var todayTasker = newToDo;

     var completeToDo = {
             completeTask: todayTasker
 
        };


       $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/devoncomplete",
      type: "POST",
      data: completeToDo, 
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("couldn't add post");
      },
      success: function(data, dataType, jqXHR) {

        console.log("imma fork your mom in the githubz");
 
        // myBlog.renderPosts();  
        // myBlog.renderSideBar();
      }
    });


    $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/devon/" + todayid,
      type: "DELETE",
      error: function (data){
        //alert ("DELETE Failed");
      },
      success: function(data){
        //alert ("Delete good!");

      }
    });
  },
//   encodeToString: function(str) {
//     return str.replace(/[&<>"']/g, function($0) {
//         return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";";
//     });
// }

};


