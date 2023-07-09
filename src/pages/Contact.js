import { useState } from "react"
function Contact() {

    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <h1>Contact Us</h1>
            <form>
                <label>Email</label>
                <input type="text" id="email" name="email" value="" onChange={(e) => setEmail(e.target.value)} />
                <label>Message</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Contact