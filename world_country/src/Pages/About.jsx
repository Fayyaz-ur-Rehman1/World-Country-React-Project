import countryData from "../api/countryData.json";

export function About() {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Interesting Facts
                <br />
                we're proud of
            </h2>

            <div className="gradient-cards" >
                {
                    countryData.map((country) => {
                        const { id, countryname, capital, population, interesting_fact } = country;
                        return (
                            <div className="card" key={id}>
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{countryname}</p>
                                    <p>
                                        <span className="card-description">Capital:</span>
                                        {capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Population:</span>
                                        {population}
                                    </p>
                                    <p>
                                        <span className="card-description">Intersting Fact:</span>
                                        {interesting_fact}
                                    </p>

                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}