import Image from 'next/image'
import React from 'react'
import Logo from "../public/dynage-logo.svg"
import Button from './Button'

interface NavItemProps {
    text: string
    href: string
}

export function NavItem({text, href}: NavItemProps) {
    return (
        <li className='flex'>
            <a href={href}>{text}</a>
        </li>
    )

    }

function NavBar() {
    return (
        <div className='sticky top-0 flex justify-between items-center p-2 bg-gray-200'>
            <Image
            src={Logo}
            alt={'Dynage Logo'}
            width={100}
            height={50}

            />
            <nav className='flex gap-2 items-center'>
                    <NavItem text="Home" href="/" />
                    <NavItem text="About" href="/about" />
                    <NavItem text="Contact" href="/contact" />
                    <Button
                    text='Contact Us'
                    type='button'
                    size='small'
                    variant='primary'
                    />
            </nav>
        </div>
    )
}

export default NavBar
