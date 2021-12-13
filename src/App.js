import Index from './pages/Index';
import Form from './pages/Form'
import Show from './pages/Show'
import Header from './components/Header'
import {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './styles.scss'

function App() {

  /////////////////////////////
  // State/Variables
  /////////////////////////////

  const navigate = useNavigate()
  const url = "https://dg-sheet-music-backend.herokuapp.com/music/"
  const [pieces, setPieces] = useState([])

  const nullPiece = {
    name: "",
    instrumentation: "",
    link: " "
  }

  const [targetPiece, setTargetPiece] = useState(nullPiece)

  /////////////////////////////
  // Functions
  /////////////////////////////

  const getPieces = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPieces(data)
  }

  const addPiece = async (newPiece) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPiece)
    })

    getPieces()
  }

  const getTargetPiece = (piece) => {
    setTargetPiece(piece)
    navigate('/edit')
  }

  const updatePiece = async (piece) => {
    await fetch(url + piece.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(piece)
    })

    getPieces()
  }

  const deletePiece = async (piece) => {
    await fetch(url+piece.id, {
      method: "delete"
    })
    getPieces()
    navigate('/')
  }


  /////////////////////////////
  // useEffects
  /////////////////////////////

  useEffect(() => {
    getPieces()
  }, [])

  /////////////////////////////
  // JSX
  /////////////////////////////

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Index pieces={pieces}/>}/>
        <Route path='/piece/:id' element={<Show
        pieces={pieces}
        edit={getTargetPiece}
        deletePiece={deletePiece}/>}/>
        <Route path='/new' element={<Form
          initialPiece = {nullPiece}
          handleSubmit = {addPiece}
          buttonLabel = "Add Piece"
        />}/>
        <Route path='/edit' element={<Form
          initialPiece = {targetPiece}
          handleSubmit = {updatePiece}
          buttonLabel = "Update Piece"
        />}/>
      </Routes>
    </div>
  );
}

export default App;
