module.exports = function respuesta(req, res, code, data, message, error) {

    res.status(code).send(data || message);
};
