import React from 'react';
import './button.css'
import Youtube from '../../assets/youtube.svg'

const Button = () => (

    <a className='Button' href='https://www.youtube.com/channel/UCz-QyCCL_itusMxXAU1V6zw'>
        <img className='youtube'src={Youtube} alt=''/>
        <h2 className='youtubetitle'>YouTube</h2>
    </a> 

);

export default Button
