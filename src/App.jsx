import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="news-app">
      <header className="news-header">
        <nav className="navbar">
          <div className="navbar-brand">
            <h1>News Today</h1>
          </div>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-bar"
            />
          </div>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <main className="news-content">
        <div className="news-grid">
          <article className="news-article card">
            <h2>Article Title 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae odio sagittis tincidunt.</p>
          </article>
          <article className="news-article card">
            <h2>Article Title 2</h2>
            <p>Phasellus vehicula justo eget diam posuere sollicitudin eu tincidunt nulla. Curabitur sit amet eros at elit.</p>
          </article>
          <article className="news-article card">
            <h2>Article Title 3</h2>
            <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.</p>
          </article>
          <article className="news-article card">
            <h2>Article Title 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae odio sagittis tincidunt.</p>
          </article>
          <article className="news-article card">
            <h2>Article Title 5</h2>
            <p>Phasellus vehicula justo eget diam posuere sollicitudin eu tincidunt nulla. Curabitur sit amet eros at elit.</p>
          </article>
          <article className="news-article card">
            <h2>Article Title 6</h2>
            <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.</p>
          </article>
        </div>
        <div className="counter">
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </main>
      <footer className="news-footer">
        <p>&copy; 2023 News Today. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App