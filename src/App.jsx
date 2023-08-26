import './App.css'

export default function App() {
  return (
    <>
      <div className='w-screen h-96 text-white' style={{backgroundImage:"url('./images/branden-skeli-kQ0_flbwBI4-unsplash.jpg')", backgroundSize:"cover"}}>
        <header>
          <nav className='flex justify-between'>
            <img className='w-28' src="./images/Menu.svg" alt="" />
            <img className='w-28' src="./images/Logo.png" alt="" />
          </nav>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl'>Your favorite comic book store ✨</h1>
            <h2 className='text-2xl'>Explore our catalog to live the adventure of your life</h2>
            <button className='flex w-64 h-14 p-4 justify-center items-center text-2xl rounded-md' style={{background:"var(--gradient, linear-gradient(45deg, #4338CA 0%, #5E52F3 100%))"}}>Let's go!</button>
          </div>
        </header>
      </div>
      <div className='w-screen bg-white text-white flex justify-center my-12'>
        <div className='flex w-11/12 rounded-md justify-around' style={{background:"linear-gradient(45deg, #4338CA 0%, #5E52F3 100%)"}}>
          <img className='w-64 h-80 img4' src="./images/image4.png" alt="" />
          <img className='w-40 h-72 img3' src="./images/image3.png" alt="" />
          <div className='self-center w-80'>
            <h3 className='text-2xl'>Shonen:</h3>
            <p className='text-sm'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out</p>
          </div>
        </div>
      </div>
    </>
  )
}