const express = require('express');
const hbs = require('express-handlebars');
const Task = require('./models/taskModel');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



var db = require("./models");
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    // let query = "SELECT * FROM b74rw874u7z0n46k";
    // let items = []
    // con.query(query, (err, result) => {
    //     if (err) throw err;
    //     items = result
    //     console.log(items)
    //     res.render('index', {
    //         items: items
    //     })
    // })
    db.Task.findAll({}).then(results => {
      console.log(results)
      let data2 = []
      
      for (let task of results) {
        let newTask = task.dataValues.description;
        data2.push({task:newTask})
      }
      console.log(data2)

      res.render("index", {
        tasks: data2
      })
    })
}); 

app.post('/sendTask', (req, res) => {
    let newTask = req.body.task;
    
    db.Task.create({
      description: newTask
    }).then(data => {
    
      res.redirect("/")
    })
}) 

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎 Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});


 