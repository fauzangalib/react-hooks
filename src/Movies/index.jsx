import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieComponent from './MovieComponent'
import { motion, AnimatePresence } from 'framer-motion'

function Movies() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        const fetchPopular = async () => {
            const data = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ed4d5d9ed28ba43922ff616a7797738a&language=en-US')
            const movies = await data.data.results
            setPopular(movies)

        }
        fetchPopular()
    }, [])


    return (
        <>
            <h1 className='text-center text-3xl font-bold mt-5'>Popular Movies</h1>
            <motion.div layout className="movies grid auto-cols-auto grid-cols-4 gap-14 container mx-auto">
                <AnimatePresence>
                    {popular.map(movie => (
                        <MovieComponent key={movie.id} movie={movie} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default Movies