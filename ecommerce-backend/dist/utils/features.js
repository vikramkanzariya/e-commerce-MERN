import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecommerce_25"
    })
        .then(() => console.log("DB Connected SuccessFully"))
        .catch((e) => console.log("Error:", e));
};
