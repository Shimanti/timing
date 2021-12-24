export default function App() {
  let timer

  const pomo = (seconds) => {
    const futureTime = Date.now() + seconds * 1000
    timer = setInterval(()=>{
      let seconds = Math.round((futureTime - Date.now())/1000)

      if(seconds<=0) {
        clearInterval(timer)
        Confetti
        return
        }
      }, 1000)
      return seconds
  }

  return (
    <main className="App">
      <h1>25-min Pomodoro Timer</h1>
      {pomo(25)}
      <p>{seconds}</p>
    </main>
  );
}
