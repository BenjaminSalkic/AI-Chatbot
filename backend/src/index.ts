import app from "./app.js";
import connectToDB from "./db/connection.js";

const PORT = process.env.PORT || 3000;

//Listener
connectToDB().then(() => {
    app.listen(PORT, () => {console.log('Server is running on port 3000 and DB connected')});
}).catch(err => console.error(err));
