const dictDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

const actualDayIndex = new Date().getDay()
const currentUTCTime = new Date().getTime()


document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dictDay[actualDayIndex]
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime