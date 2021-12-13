import {Link, useParams} from 'react-router-dom'
import {useState} from 'react'
import Sheet from "../components/Sheet"

const Show = ({pieces, edit, deletePiece}) => {
    const params = useParams()
    const id = parseInt(params.id)

    const piece = pieces.find((p) => p.id === id)
    
    const [modalStyle, setStyle] = useState({display: 'none'})



    const showModal = () => {
        setStyle({display: "block"})
    }

    const hideModal= () => {
        setStyle({display: 'none'})
    }

    return <div>
        <div className="modal" style={modalStyle}>
            <div>
            <Sheet piece={piece} hideModal={hideModal}/>
            </div>
        </div>
        <h1>{piece?.name}</h1>
        <h2>{piece?.instrumentation}</h2>
        {/* <Sheet piece={piece}/> */}
        <div>
        <button onClick={showModal} className="display-btn">Display Piece</button>
        <a href={piece?.link}><button>Download</button></a>
        </div>
        <div>
        <button onClick={() => edit(piece)}>Edit</button>
        <button onClick={()=>deletePiece(piece)}>Delete</button>
        <Link to='/'>
            <button>Back to Main</button>
        </Link>
        </div>
    </div>
}

export default Show