function isSameDate(now: Date, theDay: [number, number]) {
	return now.getMonth() + 1 === theDay[0] && now.getDate() === theDay[1]
}

export { isSameDate }