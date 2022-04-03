import app from "./app.js";
import { mongoose } from "mongoose";

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});