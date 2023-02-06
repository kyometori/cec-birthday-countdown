import { Typography } from '@mui/material'
import Link from './Link'

function Footer() {
	return (
		<footer id="footer">
			<div className="links">
				<Link href="https://github.com/kyometori/cec-birthday-countdown/">Source</Link>
				・
				<Link href="https://github.com/kyometori/">Github</Link>
				・
				<Link href="http://honeyworks.jp/special/">CEC</Link>
			</div>

			<Typography component="div">
				Made with <span style={{ color: '#e25555' }}>&hearts;</span> by <Link href="https://linktr.ee/AC0xRPFS001" wrapped={false}>AC0xRPFS001</Link>.
			</Typography>
		</footer>
	)
}

export default Footer
