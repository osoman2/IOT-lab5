const express = require("express"),
router = express.Router();
const sequelize=  require('../database/db');
const initModels = require("../models/init-models");
const models = initModels(sequelize);
let bboxSchema =  models.bounding_box;

//Create
router.post("/create-bbox", (req, res, next) => {
    bboxSchema.create(req.body, (error, data) => {
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
    bboxSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

// UPDATE Bbox
router
  .route("/update-bbox/:id")
  // Get Single bbox
  .get((req, res) => {
    bboxSchema.findById(
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
    bboxSchema.findByIdAndUpdate(
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
  bboxSchema.findByIdAndRemove(
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

// GET ALL
router.get("/bbox-all", (req, res) => {
    return bboxSchema.findAll().
    then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
  });



module.exports = router;