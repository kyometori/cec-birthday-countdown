function timeMachine(day: number, hour: number, minute: number, second: number) {
	return 1e3 * ( second + 60 * ( minute + 60 * (hour + 24 * (day))))
}

export { timeMachine };