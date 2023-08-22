import './App.css';

const App = () => {
  const search = (q) => {
    console.log({ q });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AFIF MOVIE FINDER</h1>
        <input
          type="text"
          placeholder='Find your favourite movies'
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">CONTOH PERTAMA</div>
            <img src="" alt="" className="Movie-image" />
            <div className="Movie-date">22-08-2023</div>
            <div className="Movie-rate">9.0</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
