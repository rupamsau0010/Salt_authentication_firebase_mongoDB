// Import depandencies

// Import local depandencies
const GeneralUser = require("../models/generalUser")

module.exports.generalController_get = async(req, res) => {
    GeneralUser.find({}, function(err1, data1) {
        if(data1 && !err1) {
            res.json({
                status: "success",
                payload: data1
            })
        } else {
            res.json({
                status: "failure",
                payload: null
            })
        }
    })
}
