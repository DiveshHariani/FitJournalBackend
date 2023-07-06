import express, { Request, Response } from 'express';

const app = express();

app.use('/app', (req: Request, res: Response) => {
    res.send("Hello Cloud App");
});

app.use('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log("Server is running");
});