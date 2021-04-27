const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()
    
        await db.exec(`
            CREATE TABLE profile (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                avatar TEXT,
                monthly_budget INT,
                days_per_week INT,
                hours_per_day INT,
                vacation_per_year INT,
                value_hour INT
            );
        `)
        
        await db.exec(`
            CREATE TABLE jobs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                daily_hours INT,
                total_hours INT,
                createdAt DATETIME
            );
        `)
        
        await db.run(`
            INSERT INTO profile (
                name,
                avatar,
                monthly_budget,
                days_per_week,
                hours_per_day,
                vacation_per_year,
                value_hour
            ) VALUES (
                "Estevão",
                "https://github.com/EST3V4O.png",
                3000,
                5,
                5,
                4,
                70
            );
        `)
        
        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                createdAt
            ) VALUES (
                "Pizzaria Guloso",
                2,
                1,
                1619542178635
            );
        `)
        
        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                createdAt
            ) VALUES (
                "OneTwoProject",
                3,
                47,
                1619542178635
            );
        `)
        
        await db.close()
    }
}

initDb.init()