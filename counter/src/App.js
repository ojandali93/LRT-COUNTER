import React, { useState } from 'react'
import Counter from './components/counter'
import CounterHooks from './components/counterHooks'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('green')
  return ( // the () allows us to return multiple lines of code'
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      counter
      <Counter initialCount={0}/>
      counter hooks
      <CounterHooks initialCount={5}/>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
