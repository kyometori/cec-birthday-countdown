function formatSecond(time: number) {
	const seconds = time % 60
	time = ~~(time / 60)
	const minutes = time % 60
	time = ~~(time / 60)
	const hours = time % 24
	time = ~~(time / 24)
	const days = time
	if (days) return `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`
	if (hours) return `${hours} 時 ${minutes} 分 ${seconds} 秒`
	if (minutes) return `${minutes} 分 ${seconds} 秒`
	if (seconds) return `${seconds} 秒`
}

export { formatSecond }