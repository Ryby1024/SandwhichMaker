var db = require("../models");

module.exports = function(app){
  app.get("/", function(req, res){
    db.sandwhiches.findAll({}).then(function(data){
      var hbsObject = {
        sandwhiches: data
      }
      res.render("index", hbsObject );
    });
  });

  app.post("/api/sandwhiches", function(req, res){
    db.sandwhiches.create({
      name: req.body.name,
      devoured: req.body.devoured
    }).then(function(data){
      res.redirect("/");
    });
  });

  app.delete("/api/sandwhiches/:id", function(req, res){
    db.sandwhiches.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.redirect("/");
    });
  });


  app.put("/api/sandwhiches/:id", function(req, res){
    db.sandwhiches.update({
      
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.redirect("/");
    });
  });
};