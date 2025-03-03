export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleSelectOnChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    return <section className="section-searchFilter container">
        <input type="text" placeholder="Search" value={search} onChange={handleInputChange} />

        <div>
            <select className="select-section" value={filter} onChange={handleSelectOnChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
}