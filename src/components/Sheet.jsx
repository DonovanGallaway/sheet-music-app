import {Document, Page, pdfjs} from 'react-pdf/dist/esm/entry.webpack';
import {useState} from 'react'

const Sheet = ({piece, hideModal}) => {

    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // document.addEventListener("contextmenu", (event) => {
    //     event.preventDefault();
    //   });
        

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages)
        // setPageNumber(1)
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
      
      function previousPage() {
        changePage(-1);
      }
      
      function nextPage() {
        changePage(1);
      }

      

    let url = ""
    if(piece){
        url = `https://dgallaway-cors-anywhere.herokuapp.com/${piece.link}`
    }

    
    if(!piece){
        return <div>Loading</div>
    }

    else if(piece){
        return <div>
        <Document
            file={{
                url: url,
                header: {'Access-Control-Allow-Origin': "*"}
            }}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.log(console.error)}
        >
            <Page pageNumber={pageNumber}/>
        </Document>
        <div>
            <div className="pagec">
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </div>
            <div className="buttonc">
            <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="Pre"
                
            >
            Previous
            </button>
            <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            
            >
            Next
            </button>
            <button onClick={hideModal}>Close</button>
            </div>
        </div>
    </div>
    }

    
}

export default Sheet