export const SearchFilter = ({ search, setSearch, filter, setFilter, country, setCountry }) => {

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleSelectOnChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    const sortCountry = (value) => {
        const sort = [...country].sort((a, b) => {
            return value === "asc" ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        });
        setCountry(sort);
    }

    return <section className="section-searchFilter container">
        <div >
            <input type="text" placeholder="Search" value={search} onChange={handleInputChange} />
        </div>
        <div>
            <button onClick={() => sortCountry("asc")}>Asc</button>
        </div>

        <div>
            <button onClick={() => sortCountry("des")}>Desc</button>
        </div>

        <div>
            <select className="select-section" value={filter} onChange={handleSelectOnChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
}