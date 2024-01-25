import express from "express";
import cors from "cors";
import morganMiddleware from "./middleware/morganMiddleware";
import errorHandlerMiddleware from "./middleware/errorHandlingMiddleware";
import configureBodyParsers from "./middleware/bodyParsersMiddleware";
import configureCookieParser from "./middleware/cookieParserMiddleware";
import routes from "./routes";

const app: express.Express = express();
// Logging Middleware
app.use(morganMiddleware());
// This is CORS-enabled for all origins!
app.use(cors());
// Configure body parsers and cookie parsers.
configureBodyParsers(app);
configureCookieParser(app);
//Routing
app.use('/', routes)

// Error Catching Endware
app.use(errorHandlerMiddleware);
export default app;
