import {Link} from 'react-router-dom'

const Index = ({pieces}) => {
    return <div>
        {pieces.map(x => {
            return <div className="piece-link" key={x.id}>
                <Link to={"/piece/" + x.id}><h2>{x.name}</h2></Link>
                <h3>{x.instrumentation}</h3>
            </div>
        })}
    </div>
}

export default Index