import {app, server, io} from "./app.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();


(async () => {
    try {

        await mongoose.connect(process.env.DB_URL);

        console.log("db connect");

        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });

        server.listen(process.env.PORT, (err) => {
            if (err) throw err;
            console.log(`Server started on http://localhost:${process.env.PORT}`);

        });
    } catch (err) {
        console.log(err);
    }
})();



