import { useState } from "react"
import Display from './Display'

export default function NavBar () {
    let [open, setOpen] = useState(false)
    return (
        <>
            <nav className='absolute w-full flex justify-between p-4'>
                <img onClick={() => setOpen(true)} className='max-md:w-14 ms-4 cursor-pointer' src="./images/Menu.svg" alt="" />
                <img className='w-14 me-4' src="./images/Logo.png" alt="" />
            </nav>
            {open && <Display openClose={setOpen} />}
        </>
    )
}