import express from 'express';
import bodyParser, { OptionsUrlencoded } from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morganMiddlewareConfig from './config/morgan-middleware.config';
import { routing } from "./routes/routing";
import { infoUtils } from "./utils/infoUtils";
import { serverConfig } from "./config/server.config";
//import { connectToDb } from "./config/db.config";
const app = express();

async function bootstrap() {

    //set up the middleware for the app
    //@middleware morganMiddlewareConfig logs the request, response and error
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false } as OptionsUrlencoded),
        cookieParser(),
        cors({ credentials: true, origin: true }),
        morganMiddlewareConfig,
    );
    routing(app);

    //@function connectToDb load your db config and connects to the db 
    //await connectToDb();
}
bootstrap().then(() => {
    app.listen(serverConfig, () => infoUtils('serverInfo', serverConfig));
});
