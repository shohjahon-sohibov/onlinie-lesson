const model = require('./lessonModel')

const getAllLessons = async(_, res) => {
        try {
        res.json(await model.getAllLessons())
        } catch(err) {
            console.log(err);
        }
    }

const getLessonById = async(req, res) => {
        try {
            const { id } = req.body
        res.json(await model.getLessonById(id))
        } catch(err) {
            console.log(err);
        }
    }

module.exports = {
    getAllLessons,
    getLessonById
}