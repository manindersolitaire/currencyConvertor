
import './App.css'
import InputBox from './components/InputBox'

function App() {


  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{
      backgroundImage : `url('https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D')`
    }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form>
            <div className='w-full mb-1'>
              <InputBox/>
            </div>
            <div className='relative w-full h-0.5'>
              <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>Swap</button>
            </div>
            <div className='w-full mb-4 mt-1'>
              <InputBox/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
