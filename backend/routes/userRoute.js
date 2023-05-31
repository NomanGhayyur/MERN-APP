const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();

//create
router.post("/createuser", async (req, res) => {
    //way to get value
    // var name = req.body.name;

    // destructuring body
    const { name, email, age } = req.body;

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        });

        res
            .status(201)
            .json({ message: "User created successfully", data: userAdded });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

router.get("/userlist", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({ data: allUsers });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});


router.get("/userdetails/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const userData = await User.findById({ _id: id });
        res.status(200).json({ data: userData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }

});

router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const userData = await User.findByIdAndDelete({ _id: id });
        res
            .status(200)
            .json({ message: "User deleted successfully", data: userData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }

});

router.patch("/updateuser/:id", async (req, res) => {
    const { id } = req.params;

    const { name, email, age } = req.body;

    try {
        const updatedData = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res
            .status(200)
            .json({ message: "User updated successfully", data: updatedData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;
