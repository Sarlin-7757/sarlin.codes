import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div id={styles.header_prop}>
      <nav className= " z-10  px-20 pt-2 ">
        <div className="">
            <div className="flex items-center justify-between h-16">
              <span className="text-2xl text-white-900 font-semibold">SL</span>
              <div className="flex space-x-4 text-white-900 gap-6" >
                <Link href="https://github.com/Sarlin-7757" target='_blank'>
                  <Image 
                      className="image_styles"src="/assets/icons/giticon.svg" alt='github logo' width={35} height={35} />
                </Link>
                <Link href="https://www.linkedin.com/in/saransh-lingwal-829a35233/" target='_blank'>
                  <Image className='image_styles rounded-sm' src="/assets/icons/linkedin.svg" alt='linkedin logo' width={30} height={30}/>
                </Link>
              </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;