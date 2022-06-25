import express, {Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app : Express = express();
const port = 5500;

app.use('/', express.static('./public'));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server');
});

app.listen(port, () => {console.log(`[Server]: Server is running at http://localhost:${port}`);
});                    

