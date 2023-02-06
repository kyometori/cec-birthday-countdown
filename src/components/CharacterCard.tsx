import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { formatSecond } from '../utils/formatSecond'
import { isSameDate } from '../utils/isSameDate'
import Time from './Time'
import CharacterPopup from './CharacterPopup'

interface CharacterInfo {
	name: string,
	avatar: string,
	birthday: [number, number],
	popupImage: string, 
	bgColor?: string
}

export default function CharacterCard(props: CharacterInfo) {
	const [month, date] = props.birthday
	const [shadow, setShadow] = useState(3)
	const [open, setOpen] = useState(false)
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
		<>
      <Card sx={{ 
        display: 'flex', 
        gap: '20px', 
        alignItems: 'center', 
        padding: '15px', 
        backgroundColor: props.bgColor ?? 'white',
        cursor: "pointer"
      }}
        className="character-card"
        elevation={shadow}
        onMouseEnter={() => setShadow(24)}
        onMouseLeave={() => setShadow(3)}
        onClick={() => setOpen(true)}
      >
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
      <CharacterPopup 
        isOpen={open}
        onClose={() => setOpen(false)}
        name={props.name} 
        img={props.popupImage}
      />
    </>
  )
}
