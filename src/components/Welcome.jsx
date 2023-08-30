import Button from './Button'

export default function Welcome () {
    return (
        <div className='w-full text-white bg-image bg-cover'>
            <div className='flex flex-col justify-center items-center gap-4 pt-48 md:pt-20'>
                <h1 className='max-sm:hidden text-4xl md:text-5xl'>Your favorite comic book store ✨</h1>
                <h1 className='sm:hidden text-4xl text-center'>Your favorite comic book store</h1>
                <h2 className='max-sm:hidden text-xl md:text-2xl'>Explore our catalog to live the adventure of your life</h2>
                <h2 className='sm:hidden text-sm text-center'>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</h2>
                <Button />
            </div>
        </div>
    )
}