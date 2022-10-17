import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { useContext } from 'react'
import { formatSecond } from '../utils/formatSecond'
import { isSameDate } from '../utils/isSameDate'
import Time from './Time'

interface CharacterInfo {
	name: string,
	avatar: string,
	birthday: [number, number],
	bgColor?: string
}

export default function CharacterCard(props: CharacterInfo) {
	const [month, date] = props.birthday
	const now = useContext(Time)

	const [currentMonth, currentDate] = [now.getMonth() + 1, now.getDate()]

	const isBirthday = isSameDate(now, props.birthday)

	let upcoming_bd_year = 0

	if (!isBirthday) {
		if (currentMonth > month) upcoming_bd_year = now.getFullYear() + 1
		else if (currentMonth === month && currentDate > date) upcoming_bd_year = now.getFullYear() + 1
		else upcoming_bd_year = now.getFullYear()
	}

	const birthday_date = new Date(upcoming_bd_year, month-1, date)

	const distance = ~~(((+birthday_date) - +(now)) / 1000)

	return (
		<Card sx={{ 
			display: 'flex', 
			gap: '20px', 
			alignItems: 'center', 
			padding: '15px', 
			backgroundColor: props.bgColor ?? 'white'
		}}>
      <CardMedia
        component="img"
        image={props.avatar}
        sx={{ width: '150px' }}
        alt={props.name}
      />
      <Box>
      	<CardContent>
	        <Typography component="div" variant="h5">
	          {props.name}
	        </Typography>
	        {isBirthday && <Typography component="div" variant="h5" color="red">
	        	生日快樂！
	        </Typography>}
	        {!isBirthday && <Typography component="div">
	        	{`${month} 月 ${date} 日`} <br /> {`還有 ${formatSecond(distance)}`}
	        </Typography>}
        </CardContent>
      </Box>
    </Card>
  )
}