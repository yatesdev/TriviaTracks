const errorHandler = (app) => {
  app.use((error, req, res) => {
    // Gets called because of `asyncMiddleware()`
    res.json({ message: error.message });
  });
};

export default errorHandler;
