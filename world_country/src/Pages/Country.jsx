import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export function Country() {
    const [isPanding, setTransition] = useTransition();
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        setTransition(async () => {
            const res = await getCountryData();
            setCountry(res.data);
        });
    }, []);

    if (isPanding) return <Loader />

    return (
        <section className="country-section">

            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />

            <ul className="grid grid-four-cols">
                {
                    country.map((currCountry, index) => {
                        return <CountryCard country={currCountry} key={index} />
                    })
                }
            </ul>
        </section>
    )
}