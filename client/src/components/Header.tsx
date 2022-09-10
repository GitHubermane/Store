import React from 'react'

export const Header = () => {
    return (
        <div className='Header'>
            <div className='Header__wrapper'>
                <div className='Header__logo'>
                </div>
                <div>
                    <input
                        className='Header__searchInput'
                        placeholder='Search' />
                </div>
            </div>
        </div>
    )
}
