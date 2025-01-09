import React from 'react'
import './BWhatsapp.css'
import { AiOutlineWhatsApp } from "react-icons/ai"


export default function BWhatsapp() {
    return (
        <div className='boton'>
            {/* <a href="https://api.whatsapp.com/send?phone=573118284067" target="_blank" rel="noopener noreferrer">
                <AiOutlineWhatsApp className='iconoWhatsapp'></AiOutlineWhatsApp>
            </a> */}
            <a onclick="return gtag_report_conversion('https://api.whatsapp.com/send?phone=573118284067');"
                href="https://api.whatsapp.com/send?phone=573118284067"
                target='_blank'
                rel='noopener noreferrer'
            >
                <AiOutlineWhatsApp className='iconoWhatsapp'></AiOutlineWhatsApp>
            </a>
        </div>
    )
}
