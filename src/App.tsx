import { Typography } from '@mui/material'
import { useState } from 'react'
import CharacterCard from './components/CharacterCard'
import LazyButton from './components/LazyButton'
import Time from './components/Time'
import Footer from './components/Footer'
import info from './data/info'
// import { timeMachine } from './utils/timeMachine'

function App() {
  const [now, setNow] = useState(new Date())
  setInterval(() => setNow(new Date()), 1e3)
  return (
    <>
      <Typography id="title" mt={5} textAlign="center" variant="h3">
        <span className="line">告白實行委員會</span>
        <span className="line">生日倒計時</span>
      </Typography>
      <Time.Provider value={now}>
        <LazyButton />
        <div id="main-grid">
          {info.map(i => (
            <CharacterCard
              name={i.name}
              avatar={i.avatar}
              bgColor={i.bg_color}
              popupImage={i.popupImage}
              birthday={i.birthday}
            />
          ))}
        </div>
      </Time.Provider>
      <div style={{ height: '100px' }} />
      <Footer />
    </>
  )
}

export default App
