const express = require('express');
const listRouter = express.Router();
const listModel = require('../models/locations.js');

listRouter.route('/')
    .post((req, res) => {
        let newList = new listModel(req.body);
        newList.save((err, savedList) => {
            if(err){
                console.log(err);
            }else {
                res.send(savedList);
            }
        });
    })

    .get((req, res) => {
        listModel.find(req.query, (err, foundList) => {
            if(err){
                return res.status(500).send(err);
            }else {
                res.send(foundList);
            }
        });
    })

listRouter.route('/:id')
    .get((req, res) => {
        let { id } = req.params;
        listModel.findById(id, (err, foundList) => {
            if(err){
                console.log(err);
            }else {
                res.send(foundList);
            }
        });
    })

    .delete((req, res) => {
        let { id } = req.params;
        listModel.findByIdAndRemove(id, (err, removedList) => {
            if(err){
                console.log(err);
            }else {
                res.send(removedList);
            }
        });
    })

    .put((req, res) => {
        let { id } = req.params;
        listModel.findByIdAndUpdate(id, req.body, {new: true},(err, updatedList) => {
            if(err){
                console.log(err);
            }else {
                res.send(updatedList);
            }
        });
    })

    module.exports = listRouter;