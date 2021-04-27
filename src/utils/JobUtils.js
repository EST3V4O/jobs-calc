module.exports = {
    remainingDays(job) {
        // calculo no tempo restante
        let remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
        const isNaN = remainingDays === 'NaN'

        if(isNaN) {
            remainingDays = '0'
        }
    
        const createdDate = new Date(job.createdAt)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)
    
        const timeDiffInMs = dueDateInMs - Date.now()
        // transformar ms em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
    
        // restam n dias
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}