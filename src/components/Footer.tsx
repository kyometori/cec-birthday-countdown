import { Typography } from '@mui/material'
import Link from './Link'

function Footer() {
	return (
		<footer style={{ 
			backgroundColor: 'hsl(230, 60%, 40%)', 
			height: '60px',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '10px 30px',
			color: 'hsl(230, 80%, 80%)'
		}}>
			<Typography component="div">
				Made with <span style={{ color: '#e25555' }}>&hearts;</span> by <Link href="https://linktr.ee/AC0xRPFS001" wrapped={false}>AC0xRPFS001</Link>.
			</Typography>
			<div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '10px' }}>
				<Link href="https://github.com/kyometori/cec-birthday-countdown/">Source</Link>
				・
				<Link href="https://github.com/kyometori/">Github</Link>
				・
				<Link href="http://honeyworks.jp/special/">CEC</Link>
			</div>
		</footer>
	)
}

export default Footer
