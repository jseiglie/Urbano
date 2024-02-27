const resp = require("../Helper/resp")

const mainControl = {};

mainControl.test = async (req, res) => {
    try {
      console.log(">> Test OK");
      return resp(req, res, 200, null, "OK", 0);
    } catch (error) {
      console.error(error);
      return resp(req, res, 500, null, error.message, 1);
    }
  };



module.exports = mainControl;