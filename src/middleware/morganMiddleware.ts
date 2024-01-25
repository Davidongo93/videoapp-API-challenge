import morgan from 'morgan';

const morganMiddleware = () => {
  return morgan(
    '[Logger] Method: :method URL: :url Status: :status :response-time ms - :res[content-length] kilobytes - :date[clf].'
  );
};

export default morganMiddleware;
