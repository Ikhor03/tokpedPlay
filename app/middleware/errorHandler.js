function errorHandler(err, req, res, next) {
    console.error(err)
    if (err && err.name === 'ValidationError') {
        return res.status(400).json({
            error: 1,
            message: err.message,
            fields: err.errors
        })
    }

    if (err.status === 404) {
        return res.status(404).json({ message: "Endpoint not found" });
    }

    res.status(500).json({ message: 'Internal Server Error' });
}

export default errorHandler;
