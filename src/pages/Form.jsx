import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = ({initialPiece, handleSubmit, buttonLabel}) => {
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialPiece)
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        navigate('/')
    }
    return <form onSubmit={handleSubmission}>
        <label for="name">Name</label>
        <input
            type='text'
            onChange={handleChange}
            value={formData.name}
            name='name'/>
        <label for='instrumentation'>Instrumentation</label>
        <input
            type='text'
            onChange={handleChange}
            value={formData.instrumentation}
            name='instrumentation'/>
        <label for='link'>Link</label>
        <input
            type='text'
            onChange={handleChange}
            value={formData.link}
            name='link'/>
        <input type='submit' value={buttonLabel}/>
    </form>
}

export default Form