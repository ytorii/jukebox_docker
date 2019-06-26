import React, { useState } from 'react';

import { TitleRequest, SongRequest } from "./lib/juke_box_pb";
import { JukeBoxClient } from "./lib/juke_box_grpc_web_pb";

const client = new JukeBoxClient("http://localhost:8080", {}, {})

const Title = ({children}) => (
  <h3>Selected Song: {children} </h3>
)

function App() {
  const [title, setTitle] = useState('')
  const [lylic, setLylic] = useState()

  const fetchTitle = () => {
    const request = new TitleRequest();
    client.choose(request, {}, (_, res) => {
      const title = res.array[0]
      setTitle(title)
    })
  }

  const fetchLylics = () => {
    let request = new SongRequest();
    request.setTitle(title)

    let responseStream = client.play(request, {})
    responseStream.on('data', res => { setLylic(res.getLylic()) });
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>gRPC-web test</span>
      </header>
      <button onClick={fetchTitle} >Select a song</button>
      <Title>{title}</Title>
      <button onClick={fetchLylics} >Play!</button>
      <div>
        <span>{lylic}</span>
      </div>
    </div>
  );
}

export default App;
