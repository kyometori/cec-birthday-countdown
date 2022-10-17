function compareDate(dA: [number, number], dB: [number, number]) {
	const [,tA] = dA, [, tB] = dB
	const now = new Date()

	const dN: [number, number] = [now.getMonth() + 1, now.getDate()]

	if (m12(dA, dN) < m12(dB, dN)) return -1
	if (m12(dA, dN) > m12(dB, dN)) return 1

	if (tA < tB) return -1
	if (tA > tB) return 1

	return 0
}

function m12(k: [number, number], m: [number, number]) {
	if (k[0] < m[0]) return k[0] + 12 - m[0]
	if (k[0] > m[0]) return k[0] - m[0]
	return k[1] > m[1] ? 0 : 12
}

export { compareDate }