import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FaceIcon from '@mui/icons-material/Face';
import { IconButton } from '@mui/material';

export const Header = () => {
    return (
        <div className='Header'>
            <div className='Header__wrapper'>
                <div className='Header__logo'>
                    <FaceIcon />
                </div>
                <div>
                    <input
                        className='Header__searchInput'
                        placeholder='Search' />
                </div>
                <IconButton className='Header__cartBtn'>
                    <ShoppingCartIcon className='Header__cartIcon' />
                </IconButton>
            </div>
        </div>
    )
}
