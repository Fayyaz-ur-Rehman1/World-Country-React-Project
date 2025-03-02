import { FaLongArrowAltRight } from "react-icons/fa";
export function HomePage() {
    return (
        <main className="hero-section-main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a Time.
                    </h1>

                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort search, and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </div>

                <div className="hero-image">
                    <img src="https://www.shutterstock.com/shutterstock/videos/1057532398/thumb/1.jpg?ip=x480" alt="" className="banner-image" />
                </div>
            </div>
        </main>
    )
}