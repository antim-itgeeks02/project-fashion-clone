import React, { useEffect, useState } from 'react'
import '../styles/Common/NavLogo.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SideCartButton from './sideCart/SideCartButton';
import LoadingNow from '../LoadingNow';
import NewComponent from '../NewComponent';

const NavLogo = (props) => {
    const [toSearch, setToSearch] = useState('');
    const [dataToBeSearched, setDataToBeSearched] = useState([]);
    const [lod, setLod] = useState(false);

    const handleSearch = (e) => {
        setToSearch(e.target.value);
    }
    async function fetchSearch() {
        setLod(true);
        try {
            const response = await fetch("https://fashionopolism-galleria.myshopify.com/products.json");
            const mainData = await response.json();
            setDataToBeSearched(mainData.products);
        }
        catch (error) {
            console.log("error hai" + error);
        }
        setLod(false)
    }
    var ankit;
    const functionThatHandle = () => {
        if (dataToBeSearched.length > 0) {
            ankit = dataToBeSearched.filter((item) => (item.title.toLocaleLowerCase().includes(toSearch.toLocaleLowerCase()) || (item.vendor.toLocaleLowerCase().includes(toSearch.toLocaleLowerCase()))))
        }
        else {
            console.log("nhi hai data")
        }
    }
    functionThatHandle();
    useEffect(() => {
        fetchSearch();
    }, []);

    return (
        <div className='navLogo' onMouseEnter={props.handleHoverRemover} >
            <div className='search'>
                <input className='inputField' type='text' placeholder='Search' onChange={handleSearch} value={toSearch} />
                <button className='searchButton'><FaSearch /></button>
                <div>
                    {
                        lod ? (<LoadingNow/>):(toSearch.length > 0 && <NewComponent data={ankit} />)
                    }
                </div>
            </div>
            <div className='imageDiv'><Link to={'/'}><img className='logo' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/galleria.jpg?v=1620934656&width=1200' alt='Image Not Found' /></Link></div>
            <div className='cartDivButton' >
                <SideCartButton settingTrue={props.settingTrue} sideShow={props.sideShow} />
            </div>
        </div>
    )
}

export default NavLogo