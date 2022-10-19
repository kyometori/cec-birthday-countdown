import { Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface LinkProps {
	href: string
	children: ReactNode
	wrapped?: boolean
}

function Link(props: LinkProps) {
	if (props.wrapped) return (
		<Typography>
			<a href={props.href} target="_blank" rel="noreferrer noopenner">
				{props.children}
			</a>
		</Typography>
	)

	return (
		<a href={props.href} target="_blank" rel="noreferrer noopenner">
			{props.children}
		</a>
	)
}

export default Link