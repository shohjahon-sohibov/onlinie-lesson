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
        res.json(await model.getLessonById(req.params.id))
        } catch(err) {
            console.log(err);
        }
    }

module.exports = {
    getAllLessons,
    getLessonById
}