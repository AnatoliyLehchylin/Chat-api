import express from 'express';
import { postsRouter } from "./chat/posts/routes.js";
import { usersRouter } from "./chat/users/routes.js";
import { userNewsRouter } from "./chatNew/userNews/routes.js";
import {postNewsRouter} from "./chatNew/postNews/routes.js";
import {Server} from "socket.io";
import { createServer } from 'http';

import cors from "cors";
export const app = express();

app.use(express.json({ limit: '7mb' }));
app.use(cors());

export const server = createServer(app);

export const io = new Server(server, {cors: {origin: "*"}});

app.use("/posts", postsRouter(io));
app.use("/users", usersRouter);

app.use("/postNews", postNewsRouter(io));
app.use("/userNews", userNewsRouter);

app.get('/', (req, res) => {
    res.send('<h1>Chat</h1>');
});





