module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      // Giving the Author model a name of type STRING
      description: DataTypes.STRING
    }, 
    {
  
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,
    
      // If don't want createdAt
      createdAt: false,
    
      // If don't want updatedAt
      updatedAt: false,
    
      // your other configuration here
    
    });
  
  
    return Task;
  };
 
  
  