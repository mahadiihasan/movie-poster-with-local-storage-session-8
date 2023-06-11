import React from 'react';

const Header = () => {
    return (
        <>

            <nav className="d-flex navbar bg-light px-2 my-2">
            <a className="navbar-brand" href="#">Navbar</a>
                <form>                    
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </nav>
        </>
    );
};

export default Header;