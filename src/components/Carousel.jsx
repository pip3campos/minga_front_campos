import { useEffect, useState } from "react";
import Arrow from "./Arrow";
import axios from 'axios'

export default function Carousel () {
    let [categories, setCategories] = useState([])
    let [counter, setCounter] = useState(0)
    function fetchData() {
        axios('https://minga-back-vyqy.onrender.com/categories')
        .then( res => setCategories(res.data.categories))
        .catch( e => console.log(e))
    }
    useEffect(() => {
        fetchData(),
        []
    })
    let next = () => ( counter !== categories.length - 1 ) ? setCounter(counter + 1) : setCounter(0)
    let prev = () => ( counter !== 0 ) ? setCounter(counter - 1) : setCounter(categories.length - 1)
    return (
        <div className='max-md:hidden w-full bg-white text-white flex justify-center items-center my-12 divCarrousel'>
            <Arrow prev={prev} direccion="rotate-180 left-20 cursor-pointer" />
            <div className='flex w-11/12 rounded-md justify-around carrusel'>
                <img className='w-64 h-80 img4' src="{categories[counter]?.character_photo}" alt="" />
                <img className='w-40 h-72 img3' src="{categories[counter]?.cover_photo}" alt="" />
                <div className='self-center md:w-48 lg:w-80'>
                    <h3 className='text-2xl'>{categories[counter]?.name}</h3>
                    <p className='text-sm'>{categories[counter]?.description}</p>
                </div>
            </div>
            <Arrow next={next} direccion="right-20 cursor-pointer" />
        </div>
    )
}