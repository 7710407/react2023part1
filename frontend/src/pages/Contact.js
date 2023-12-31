import { useState, useEffect } from "react"
import axios from "axios"

function Contact() {

    const [email, setEmail] = useState('ars@gmail.com')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [selectData, setSelectData] = useState([])
    const [selectValue, setSelectValue] = useState('')

    // useEffect(() => {
    //     let processing = true
    //     fetchData(processing)
    //     return () => {
    //         processing = false
    //     }
    // }, [])

    useEffect(() => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    }, [])

    const axiosFetchData = async(processing) => {

        await axios.get('http://localhost:4000/users')
            .then(res => {
                if (processing)
                    setSelectData(res.data)
            })
            .catch(err => console.log(err))        
    }

    const axiosPostData = async() => {
        const postData = {
            email: email,
            website: selectValue,
            message: message
        }

        await axios.post('http://localhost:4000/contact', postData)
        .then(res => setError(<p className="success">{res.data}</p>))
    }

    const SelectDropdown = () => {
        return (
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                {
                    selectData?.map((item) => (
                        <option value={item.website} key={item.website}>{item.website}</option>
                    ))
                }
            </select>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(email + ' | ' + selectValue + ' | ' + message)

        if(!message) {
            setError(<p className="required">Message is empty. Please type a message.</p>)
        } else {
            setError('')
        }
                
        setError('')
        axiosPostData()
    }

    return (
        <>
            <h1>Contact Us</h1>
            <form className="contactForm">
                <label>Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>How Did You Hear About Us?</label>
                <SelectDropdown />
                <select>
                    <option>Google Websearch</option>
                    <option>From a friend</option>
                </select>
                <label>Message</label>
                <textarea id="message" name="message" value={message} onChange={ (e) => setMessage(e.target.value)}></textarea>
                {error}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Contact