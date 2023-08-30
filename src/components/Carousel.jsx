import Arrow from "./Arrow";

export default function Carousel () {
    return (
        <div className='max-md:hidden w-full bg-white text-white flex justify-center items-center my-12 divCarrousel'>
            <Arrow direccion="rotate-180 left-20" />
            <div className='flex w-11/12 rounded-md justify-around carrusel'>
                <img className='w-64 h-80 img4' src="./images/image4.png" alt="" />
                <img className='w-40 h-72 img3' src="./images/image3.png" alt="" />
                <div className='self-center md:w-48 lg:w-80'>
                    <h3 className='text-2xl'>Shonen:</h3>
                    <p className='text-sm'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out</p>
                </div>
            </div>
            <Arrow direccion="right-20" />
        </div>
    )
}