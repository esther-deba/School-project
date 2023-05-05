import React, { useContext, useEffect, useState } from 'react'
import { EndPointContext } from '../context/EndPointContext'
import { SearchContext } from '../context/SearchContext'
import { Card } from './Card'
import '../styling/results.css';
import { ProfileCard } from './ProfileCard';
import { SearchBar } from './SearchBar';
import { Header } from './Header';
import { Navigate } from 'react-router-dom';
import "../styling/destinationNotFound.css"
import { Footer } from './Footer';
export const Results = () => {
    const [nav, setNav] = useState(false)
    const [results, setResults] = useState([])
    const { endpoint } = useContext(EndPointContext)
    const { search, setSearch, mode } = useContext(SearchContext)
    const getResults = async () => {
        const response = await fetch(
            `${endpoint}/${mode}/${search ? `?search=${search}` : ''}`
        )
        const data = await response.json()
        setResults(data)
    }
    const handleAdd = () => { setNav(true); console.log(nav) }
    useEffect(() => {
        getResults()
    }, [search, mode])
    return (
        <div className='CardsList'>
            <Header />
            <SearchBar />
            {results.length ?
                <div className={`${mode}-list`}>
                    {results.map((result) => (
                        mode == "destinations" ?
                            <Card destination={result} />
                            :
                            <ProfileCard profile={result} />
                    ))}
                </div>
                :
                <div className='add-destination'>
                    {
                        !search ?
                            <h1>Start searching ... </h1>
                            :
                            <h1>No added destination related to "{search}"</h1>
                    }
                    <p>
                        To create the destination you have to enter the information in the form
                    </p>
                    <button onClick={handleAdd}>+ new destination</button>
                </div>
            }
            {nav && <Navigate replace to="/add-destination/" />}
            <Footer />
        </div>
    )
}
