// const Antardasha = require("../Models/AntardashaModel")
// const Mahadasha = require("../Models/MahadashaModel")

// const createAstro = async(req, res)=>{
//     try {
//         const {nesting, type, key, duration, start, end} = req.body
//         // if(!nesting || !type || !key || !duration ||!start || !end){
//         //     return res.status(404).send({
//         //         success: false,
//         //         message: "parameters can't be blank"
//         //     })
//         // }
//         const astro = await new Antardasha({nesting, type, key, duration, start, end}).save()
//         res.status(201).send({
//             success: true,
//             message: "created successfully",
//             astro
//         })
//     } catch (error) {
//         res.status(500).send({
//             success: false,
//             message: "Errro while createing the dasha"
//         })
//     }
// }

// const createMaha = async(req, res)=>{
//     try {
//         const {id} = req.params
//         const {nesting, type, key, duration, start, end} = req.body;
//         const astro = await new Mahadasha({nesting, type, key, duration, start, end}).save()
//     } catch (error) {
//         res.status(500).send({
//             success: false,
//             message: "Errro while createing the dasha"
//         })
//     }
// }


const {calculateDasha, durationGraha} = require('../Helper/keys')

const getAstro = async (req, res)=>{
    try {
        const result = calculateDasha(27, 8, 2000, 17, 23, 28.70, 77.10, 'vimshottari');
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
  