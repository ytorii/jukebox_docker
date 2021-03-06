import React, { useState } from 'react'

import Header from './Header'
import SelectButton from './SelectButton'
import SongPlayer from './SongPlayer'
import Lylics from './Lylics'

import { TitleRequest, SongRequest } from "./lib/juke_box_pb"
import { JukeBoxClient } from "./lib/juke_box_grpc_web_pb"

const client = new JukeBoxClient("http://localhost:8080", {}, {})

function App() {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [lylic, setLylic] = useState()

  const fetchTitle = () => {
    const request = new TitleRequest()
    client.choose(request, {}, (_, res) => {
      const [title, genre, imageUrl] = res.array
      setTitle(title)
      setGenre(genre)
      setImageUrl(imageUrl)
    })
  }

  const fetchLylics = () => {
    let request = new SongRequest()
    request.setTitle(title)

    let responseStream = client.play(request, {})
    responseStream.on('data', res => { setLylic(res.getLylic()) })
  }

  return (
    <div className="App">
      <Header>
        Jukebox with gRPC
      </Header>
      <SelectButton onClick={fetchTitle}/>
      <SongPlayer
        onPlay={fetchLylics}
        title={title}
        genre={genre}
        imageUrl={imageUrl}
      />
      <Lylics title={title}>{lylic}</Lylics>
    </div>
  )
}

export default App
