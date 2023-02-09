const ReS = function (res, data, code) {
    // Success Web Response
    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json(data);
};

const ReE = function (res, err, code) {
    // Error Web Response
    let errorMsg = err;
    res.statusCode = 400; // Added to have as default

    if (typeof err === 'object' && typeof err.message !== 'undefined') {
        errorMsg = err.message;
        if (err.parent) {
            errorMsg += ' : ' + err.parent.message;
        }
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    const response = { error: errorMsg };
    return res.json(response);
};

module.exports = {
    ReS,
    ReE
};
