import Counter from './components/counter'
import CounterHooks from './components/counterHooks'
function App() {
  return ( // the () allows us to return multiple lines of code'
    <>
      counter
      <Counter initialCount={0}/>
      counter hooks
      <CounterHooks initialCount={5}/>
    </>
  )
}

export default App;
