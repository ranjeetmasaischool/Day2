const errorHandler = (err, req, res, next) => {
const stsusCode = res.stsusCode? res.stsusCode : 500;
res.json({message: err.message, stackTrace: err.stack});
};

module.exports = errorHandler;