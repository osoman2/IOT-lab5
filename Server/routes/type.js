const express = require("express"),
router = express.Router();
const sequelize=  require('../database/db');
const initModels = require("../models/init-models");
const models = initModels(sequelize);
let type =  models.type;


//Create
router.post("/create-bbox", (req, res, next) => {
    type.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

//READ 
router.get("/", (req, res) => {
    type.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

// UPDATE type
router
  .route("/update-bbox/:id")
  // Get Single bbox
  .get((req, res) => {
    type.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  // Update bbox Data
  .put((req, res, next) => {
    type.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("bbox updated successfully !");
        }
      }
    );
  });
  
// Delete bbox
router.delete("/delete-bbox/:id", 
(req, res, next) => {
  type.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;