const PG = require('../../utils/db')

class Lessons extends PG {
    getAllLessons() {
        return this.fetchAll(`
        SELECT 
            * 
        FROM
            lessons
        `)
    }
    getLessonById(id1) {
        return this.fetchAll(`
        SELECT 
            * 
        FROM
            lessons
        WHERE
            id = $1
        `, id1)
    }
}

module.exports = new Lessons();