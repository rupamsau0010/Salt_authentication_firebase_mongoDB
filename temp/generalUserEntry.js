// Import depandencies

// Import local depandencies
const GeneralUser = require("../models/generalUser")

const generalUserEntry = () => {
    const generalUser = {
        fullName: "Rupam Sau",
        firstName: "Rupam",
        lastName: "Sau",
        profileImage: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
    }

    GeneralUser.create(generalUser, (err, data) => {
        if(data && !err) {
            console.log(data);
        } else {
            console.log(err);
        }
    })
}

module.exports = generalUserEntry