const internModel = require("../Models/internModel")
const collegeModel = require("../Models/collegeModel")

const createintern = async (req, res) => {
    try {
        data = req.body
        res.setHeader('Access-Control-Allow-Origin', '*')
        //check college register or not
        let validCollage = await collegeModel.findOne({ name: data.collegeName })
        if (!validCollage) return res.status(404).send({ status: false, msg: "college is not register " })

        // set the college id into the data object and delete key collegename
        let collageId = validCollage._id.toString()
        data.collegeId = collageId
        delete data.collegName

        //create the intern
        let creatintern = await internModel.create(data);
        return res.status(201).send({ status: true, data: creatintern });
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.createintern = createintern;

