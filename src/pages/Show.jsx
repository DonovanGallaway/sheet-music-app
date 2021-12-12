import {Link, useParams} from 'react-router-dom'
import Sheet from "../components/Sheet"

const Show = ({pieces, edit, deletePiece}) => {
    const params = useParams()
    const id = parseInt(params.id)

    const piece = pieces.find((p) => p.id === id)
    
    
    return <div>
        <h1>{piece?.name}</h1>
        <h2>{piece?.instrumentation}</h2>
        <Sheet piece={piece}/>
        <a href={piece?.link}>Download</a>
        <button onClick={() => edit(piece)}>Edit</button>
        <button onClick={()=>deletePiece(piece)}>Delete</button>
        <Link to='/'>
            <button>Back to Main</button>
        </Link>
    </div>
}

export default Show