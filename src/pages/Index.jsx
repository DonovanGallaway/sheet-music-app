import {Link} from 'react-router-dom'

const Index = ({pieces}) => {
    return <div>
        {pieces.map(x => {
            return <div>
                <Link to={"/piece/" + x.id}><h1>{x.name}</h1></Link>
                <h2>{x.instrumentation}</h2>
            </div>
        })}
    </div>
}

export default Index