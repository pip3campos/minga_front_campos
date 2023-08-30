export default function Footer () {
    return (
        <footer>
            <img src="./images/footer.png" alt="" />
            <div className='flex foot flex-col items-center gap-3 sm:flex-row sm:justify-around'>
                <a href="#">Home</a>
                <a href="#">Mangas</a>
                <img src="./images/inga.svg" alt="" />
                <div className='flex flex-col gap-4'>
                    <img src="./images/Social.svg" alt="" />
                    <button className='button2 self-center flex justify-center items-center rounded-md w-28 h-6 sm:w-52 sm:h-8 mb-2'>Donate <img src="./images/heart.svg" alt="" /></button>
                </div>
            </div>
        </footer>
    )
}