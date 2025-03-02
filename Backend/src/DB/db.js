import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("✅ MongoDB connected (initial)");
    } catch (err) {
        console.log("MongoDB connection failed (initial):", err);
    }
};

// MongoDB events handling
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
    console.log("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

// Handle app termination (Ctrl+C)
process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB closed due to app termination");
    process.exit(0);
});

export default connectDB;

