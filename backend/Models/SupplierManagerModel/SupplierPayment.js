const mongoose = require("mongoose");

const supplierDetailsSchema = new mongoose.Schema(
    {
        InvoiceNo: {
            type: String,
            required: [true, "Invoice No is required"],
        },

        Date: {
            type: Date,
            required: [true, "Date is required"],
        },

        NoOfItems: {
            type: Number,
            required: [true, "Number of Items is required"],
        },

        PaidAmount: {
            type: Number,
            required: [true, "Paid Amount is required"],
        },

        SupplierID: {
            type: String,
            required: [true, "Supplier ID is required"],
        },

        Company: {
            type: String,
            required: [true, "Company is required"],
        },

        TotalAmount: {
            type: Number,
            required: [true, "Total Amount is required"],
        },

    }
);

module.exports = mongoose.model("supplierPayment", supplierDetailsSchema);
