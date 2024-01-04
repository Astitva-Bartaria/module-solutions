const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SalesModel = mongoose.model("SalesModel");
const protectedResource = require('../middleware/protectedResource');

// route to add sales
router.post("/addSales", protectedResource, (req, res) => {
    const { ProductName, Quantity, Amount } = req.body;
    if (!ProductName || !Quantity || !Amount) {
        return res.status(400).json({ error: "Mandatory field is missing!" });
    }
    req.user.Password = undefined;
    const sale = SalesModel({ ProductName: ProductName, Quantity: Quantity, Amount: Amount, Author: req.user._id });
    sale.save()
        .then((newSale) => {
            res.status(201).json({ sales: newSale });
        })
        .catch((error) => {
            console.log(error);
        })
});

// route to get all sales 
router.get("/allSales", (req, res) => {
    SalesModel.find()
        .then((dbSales) => {
            // Calculate the total amount from the sales data
            const totalAmount = dbSales.reduce((total, sale) => total + sale.Amount, 0);

            res.status(200).json({
                sales: dbSales,
                totalRevenue: totalAmount
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

// Route to get top 5 sales 
router.get("/top5sales", (req, res) => {
    SalesModel.find()
        .sort({ Amount: -1 })
        .limit(5) // Limit the result to the top 5 sales
        .then((topSales) => {
            res.status(200).json({ topSales });
        })
        .catch((error) => {
            console.log(error);
        });
});

// Route to delete a sale by ID
router.delete("/deleteSale/:saleId", (req, res) => {
    const saleId = req.params.saleId;

    if (!mongoose.Types.ObjectId.isValid(saleId)) {
        return res.status(400).json({ error: "Invalid sale ID" });
    }

    SalesModel.findByIdAndRemove(saleId)
        .then((deletedSale) => {
            if (!deletedSale) {
                return res.status(404).json({ error: "Sale not found" });
            }

            res.status(200).json({ message: "Sale deleted successfully" });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        });
});

// router.get("/top5sales/:userId", (req, res) => {
//         const { userId } = req.params;
//         let today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const salesForUser = SalesModel.find({ Author: userId, salesDate: { $gte: today, $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) } })
//         .then(() => {
//             if (!salesForUser) {
//                 res.status(401).json({
//                     message: "You must register first"
//                 })
//             }
//             else {
//                 res.status(200).json({
//                     message: "All sales fetched",
//                     allSales: salesForUser
//                 })
//             }
//         })
        
//     }

// )

module.exports = router;