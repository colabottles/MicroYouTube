import { useState, useEffect, useCallback } from 'react'
import SearchBar from './components/SearchBar'
import VideoPlayer from './components/VideoPlayer'
import VideoList from './components/VideoList'
import { searchVideos } from './api/youtube'
import './styles/App.css'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [error, setError] = useState(null)

  const fetchVideos = useCallback(async (query) => {
    try {
      setError(null)
      const results = await searchVideos(query)
      setVideos(results.slice(1))
      setSelectedVideo(results[0])
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error(err)
    }
  }, [])

  const handleSearch = (query) => {
    fetchVideos(query)
  }

  useEffect(() => {
    const loadDefault = async () => {
      try {
        const results = await searchVideos('learning programming')
        setVideos(results.slice(1))
        setSelectedVideo(results[0])
      } catch (err) {
        setError('Something went wrong. Please try again.')
        console.error(err)
      }
    }

    loadDefault()
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>MicroYouTube</h1>
      </header>
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="app-error">{error}</p>}
        <section className="app-content">
          <VideoPlayer video={selectedVideo} />
          <VideoList videos={videos} onSelect={setSelectedVideo} />
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; <a href="https://toddl.dev">Todd Libby</a> {new Date().getFullYear()}. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            <li><a href="https://toddl.dev">Website</a></li>
            <li><a href="https://github.com/colabottles">GitHub</a></li>
            <li><a href="https://twitch.tv/toddcodes">Twitch</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App