

function SearchNotes({updateSearch}) {
    const handleSearch = (e) => {
        updateSearch(e.target.value)
    }
    return (
        <div>
            search: <input onChange={handleSearch}/>
        </div>
    )
}

export default SearchNotes
