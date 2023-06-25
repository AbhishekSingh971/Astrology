const {calculateDasha} = require('../Helper/keys')

const getAstro = async (req, res)=>{
    try {
        const result = await calculateDasha(27, 8, 2000, 17, 23, 28.70, 77.10, 'vimshottari');
        // console.log(result);
        res.status(200).send({
            success: false,
            message: "get Astrology successfully",
            result
        });
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "something went worng",
            error: error.message
        });
    }
}

module.exports = {getAstro};
  