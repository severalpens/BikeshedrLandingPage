import viteLogo from '/bikeshedr.svg'
import './App.css'


function App() {
  return (
    <>
      <div>
        <a href="https://en.wikipedia.org/wiki/Law_of_triviality" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Bikeshedr.com</h1>
      <p>
        Azure Cloud hosted demo applications
      </p>
        <p  className="read-the-docs">
          A subsidiary of the <a style={{color:"white"}} href="https://severalpens.com" target="blank" rel="noopener noreferrer">Severalpens</a> corporation.
        </p>
    </>
  )
}

export default App
