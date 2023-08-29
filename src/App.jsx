import './App.css'

export default function App() {
  return (
    <>
      <div className='w-full text-white bg-image bg-cover'>
        <header className='mb-36'>
          <nav className='flex justify-between p-4'>
            <img className='max-md:w-14 ms-4' src="./images/Menu.svg" alt="" />
            <img className='w-14 me-4' src="./images/Logo.png" alt="" />
          </nav>
        </header>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='max-sm:hidden text-4xl md:text-5xl'>Your favorite comic book store ✨</h1>
          <h1 className='sm:hidden text-4xl text-center'>Your favorite comic book store</h1>
          <h2 className='max-sm:hidden text-xl md:text-2xl'>Explore our catalog to live the adventure of your life</h2>
          <h2 className='sm:hidden text-sm text-center'>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</h2>
          <button className='flex w-64 h-14 p-4 justify-center items-center text-2xl rounded-full md:rounded-md button font-bold'>Let's go!</button>
        </div>
      </div>
      <div className='max-md:hidden w-full bg-white text-white flex justify-center items-center my-12 main'>
        <img className='rotate-180 absolute left-20' src="./images/circlearrow.svg" alt="" />
        <div className='flex w-11/12 rounded-md justify-around carrusel'>
          <img className='w-64 h-80 img4' src="./images/image4.png" alt="" />
          <img className='w-40 h-72 img3' src="./images/image3.png" alt="" />
          <div className='self-center md:w-48 lg:w-80'>
            <h3 className='text-2xl'>Shonen:</h3>
            <p className='text-sm'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out</p>
          </div>
        </div>
        <img className='absolute right-20' src="./images/circlearrow.svg" alt="" />
      </div>
      <footer>
        <img src="./images/footer.png" alt="" />
        <div className='flex foot flex-col items-center gap-3 sm:flex-row sm:justify-around'>
          <a href="#">Home</a>
          <a href="#">Mangas</a>
          <img src="./images/inga.svg" alt="" />
          <div className='flex flex-col gap-4'>
            <img src="./images/Social.svg" alt="" />
            <button className='button2 self-center flex justify-center items-center rounded-md w-28 h-6 sm:w-52 sm:h-8'>Donate <img src="./images/heart.svg" alt="" /></button>
          </div>
        </div>
      </footer>
    </>
  )
}