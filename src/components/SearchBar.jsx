import '../styles/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.search.value.trim()
    if (query) onSearch(query)
  }

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          className="search-input"
          placeholder="Search videos..."
          aria-label="Search videos"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  )
}

export default SearchBar