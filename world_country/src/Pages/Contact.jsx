export function Contact() {

    const handelFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData)
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">
                Contact Us
            </h2>

            <div className="contact-wrapper container">
                <form action={handelFormSubmit} >

                    <input type="text" required name="username" className="form-control" placeholder="Enter your name" autoComplete="false" />

                    <input type="email" className="form-control" required name="email" placeholder="Enter your email" autoComplete="false" />

                    <textarea className="form-control" rows="10" placeholder="Enter your message" name="message" required autoComplete="false"></textarea>

                    <button type="submit" value="Send" >Send</button>
                </form>
            </div>
        </section>
    )
}