
import './App.css'
import Form from 'react-bootstrap/Form';


function App() {

  const displayData=(data)=>{
    result.value +=data;
  }

  const reset=()=>{
    result.value=""
  }

  const output=()=>{
    if(result.value !=0){
        try{
            result.value = eval(result.value)
        }
        catch{
            result.value = "ERROR!!!!!!"
        }
    }
  }
  
  const removeLast = ()=>{
    result.value= result.value.slice(0,-1)
  }

  return (
    <>
    <div className='container d-flex justify-content-center align-items-center w-25  mt-5 flex-column bg-dark rounded shadow bg-opacity-90' style={{height:'400px'}}>
      <div className='text-light mb-5 shadow  text-center ' ></div>
      <Form className='w-100'>
        <Form.Group className="mb-5 " controlId="result">
          <Form.Control  readOnly  type="text" placeholder="0" />
        </Form.Group>
      </Form>
      <div className='d-flex  w-100  '>
            <button className='btn btn-warning shadow w-25  mb-1 me-1 fs-5' onClick={()=>displayData('7')}>7</button>
            <button className='btn btn-warning  shadow mb-1 me-1 w-25 fs-5' onClick={()=>displayData('8')}>8</button>
            <button className='btn btn-warning   shadow  mb-1 me-1 w-25 fs-5' onClick={()=>displayData('9')}>9</button>
            <button className='btn btn-dark   shadow  mb-1 w-25 fs-5' onClick={()=>displayData('+')}>&#43;</button>
      </div>
      <div className='d-flex w-100 '>
          <button className='btn btn-warning   shadow w-25 mb-1 me-1 fs-5' onClick={()=>displayData('4')}>4</button>
          <button className='btn btn-warning   shadow w-25  mb-1 me-1 fs-5' onClick={()=>displayData('5')}>5</button>
          <button className='btn btn-warning   shadow w-25 mb-1 me-1 fs-5' onClick={()=>displayData('6')}>6</button>
          <button className='btn btn-dark   shadow w-25 mb-1 fs-5' onClick={()=>displayData('*')}>&#215;</button>
      </div>
      
      <div className="d-flex  w-100">
        <button className='btn btn-warning   shadow w-25 mb-1 me-1 fs-5' onClick={()=>displayData('3')}>3</button>
        <button className='btn btn-warning   shadow w-25 mb-1 me-1 fs-5' onClick={()=>displayData('2')}>2</button> 
        <button className='btn btn-warning   shadow w-25 mb-1 me-1 fs-5' onClick={()=>displayData('1')}>1</button>
        <button className='btn btn-dark   shadow w-25  mb-1 fs-5' onClick={()=>displayData('-')}>&#8722;</button>
      </div>
      <div className="d-flex w-100 ">
        <button className='btn btn-danger shadow mb-1 w-25 me-1 fs-5' onClick={reset}>C</button>
        <button className='btn btn-warning shadow mb-1 w-25 me-1 fs-5' onClick={()=>displayData('0')}>0</button>
        <button className='btn btn-warning shadow mb-1 w-25 me-1 fs-5' onClick={output}>=</button>
        <button className='btn btn-dark shadow mb-1 w-25 fs-5' onClick={()=>displayData('/')}>&#247;</button>
      </div> 
      <div className="d-flex w-100">
        <button  class="btn  shadow btn-secondary w-25 me-1 fs-5" onClick={removeLast}>&#9003;</button>
        <button  class="btn  shadow btn-dark w-25 me-1 fs-5" onClick={()=>displayData('(')}>&#40;</button>
        <button  class="btn  shadow btn-dark w-25 me-1 fs-5" onClick={()=>displayData(')')}>&#41;</button>
        <button  class="btn shadow btn-info  w-25 fs-5" onClick={()=>displayData('**')}>exp</button>
      </div>
               

           
               
          

      
       
    </div>
    </>
  )
}

export default App
