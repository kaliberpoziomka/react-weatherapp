import React, {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --main-color: ${props => props.theme.mode === 'dark' ? '#091921' : '#ecf0f3'};
  --light: ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#ffffff'};
  --shadow: ${props => props.theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : '#d1d9e6'};
  --font-color: ${props => props.theme.mode === 'dark' ? '#ecf0f3' : '#091921'};
}
`

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
.then(response => response.json())
.then(data => console.log(data));
  
const startWave = () => {
  const wave = document.querySelector('.wave');
  wave.classList.add('wave-animate');
  setTimeout(() => {wave.classList.remove('wave-animate');}, 1000);
}
const startSearch = () => {
  // const button = document.querySelector('.button-wrapper');
  // const search = document.querySelector('.search');
  const content = document.querySelector('.content-box');
  // button.classList.remove('transform');
  // search.classList.remove('transform');
  // setTimeout(() => {
    content.classList.remove('hide')
  // }, 700)
}
const handleButton = () => {
  startWave();
  startSearch();
}

function App() {
  const [theme, setTheme] = useState({mode: 'light'});

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="wrapper">
        <div className="top-wrapper">
          <div className="switch-mode">
            <label className="label">
              <div className="toggle">
                <input onChange={
                  e => setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})
                } className="toggle-state" type="checkbox" name="check" value="check" />
                <div className="indicator"></div>
              </div>
              <div className="label-text">dark mode</div>
            </label>
          </div>
          <div className="search">
            <input type="text" className="search__input" placeholder="FInd your city" required/>
          </div>
          <div className="button-wrapper">
            <div className="wave"></div>
            <button onClick={() => handleButton()}>Search</button>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-box hide">
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}


    


export default App;
