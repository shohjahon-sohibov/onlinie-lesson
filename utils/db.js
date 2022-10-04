require("dotenv").config
const { Pool } = require('pg')

console.log(process.env.CONNECTION)

const poolOutside = new Pool({
    connectionString: process.env.CONNECTION

})

class PG {
    constructor(pool) {
        this.pool = pool || poolOutside
    }

    async fetch(SQL, ...params) {
        const client = await this.pool.connect()

        try {
            const { rows: [ row ] } = await client.query(SQL, params || null)
            return row
        } finally {
            client.release()
        }
    }

    async fetchAll(SQL, ...params) {
        const client = await this.pool.connect()

        try {
            const { rows } = await client.query(SQL, params || null)
            return rows
        } finally {
            client.release()
        }
    }
}

module.exports = PG