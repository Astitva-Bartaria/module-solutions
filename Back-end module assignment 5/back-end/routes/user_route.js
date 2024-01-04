const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserModel = mongoose.model("UserModel");
const { JWT_SECRET } = require('../config');

// route to register a user
router.post("/signup", (req, res) => {

    const { FirstName, LastName, Email, Password } = req.body;

    if (!FirstName || !LastName || !Email || !Password) {
        return res.status(400).json({ error: "Mandatory field is missing!" });
    }

    UserModel.findOne({ Email: Email })
        .then((userInDB) => {
            if (userInDB) {
                return res.status(500).json({ error: "User already exists!" });
            }
            bcryptjs.hash(Password, 16)
                .then((hashedPassword) => {
                    const user = new UserModel({ FirstName, LastName, Email, Password: hashedPassword });
                    user.save()
                        .then((newUser) => {
                            res.status(201).json({ result: "User signed up successfully!" });
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

// route to login the user
router.post("/login", (req, res) => {

    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ error: "Mandatory field missing!" });
    }

    UserModel.findOne({ Email: Email })
        .then((userInDB) => {
            if (!userInDB) {
                return res.status(401).json({ error: "User not found!" });
            }
            bcryptjs.compare(Password, userInDB.Password)
                .then((matched) => {
                    if (matched) {
                        const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);
                        const userInfo = { "Id":userInDB._id, "Email": userInDB.Email, "FirstName": userInDB.FirstName, "LastName": userInDB.LastName };

                        res.status(200).json({ result: { token: jwtToken, user: userInfo } });
                    }
                    else {
                        return res.status(401).json({ error: "Invalid credentials" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;