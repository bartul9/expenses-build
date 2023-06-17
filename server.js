import app from "./app.js";
import { mongoose } from "mongoose";

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

mongoose.connect('mongodb+srv://bartul_9:jasamkralj222@cluster0.u0dqa.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", async function () {
    console.log("Connected successfully");
});
