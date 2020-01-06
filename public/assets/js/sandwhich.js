$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg")
          .val()
          .trim(),
        devoured: 0
      };
  
      $.ajax("/api/sandwhiches", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added new sandwhich");
        location.reload();
      });
    });
  
    $(".devourburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
  
      $.ajax("/api/sandwhiches/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });
  
    $("#trashbutton").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      
      $.ajax({
        type: "DELETE",
        url: "/api/sandwhiches/" + id
      }).then(location.reload());
    });
  });