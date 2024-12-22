import { footerLogo } from '../assets/images'
import {socialMedia} from '../constants'
import {footerLinks} from '../constants'
import {copyrightSign} from '../assets/icons'
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start  max-lg:flex-col justify-evenly flex-wrap gap-20">
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} /></a>
          <p className='text-white-400 mt-6 leading-7 sm:max-w-sm font-montserrat'>get shoes ready for the next term at your neraest Nike store find your perfect size in store. Get rewards </p>
          <div className='flex items-center mt-8 gap-5'>
                {socialMedia.map((icon)=>(
                  <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full '>
                    <img className='bg-white'
                    src={icon.src}
                     alt={icon.alt}
                     width={24}
                     height={24} />
                  </div>

                ))}
          </div>
        </div>

        <div className='flex flex-wrap justify-between lg:gap-10 gap-20 '>
          {
            footerLinks.map((section, index) => (
              <div className='flex flex-col'>
                <h4 className='text-white font-montserrat text-2xl font-medium mb-6'>
                  {section.title}
                </h4>
                <ul>
                  {
                    section.links.map((link)=>(
                      <li className='text-white-400 hover:text-white transition duration-300 mt-3 font-montserrat cursor-pointer'>
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>

              </div>   
            )
          )
          }

        </div>
      </div>
      <div className='flex text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img 
            src= {copyrightSign} 
            alt="copyright" 
            width={20}
            className='rounded-full m-0 '
            />
            <p className='cursor-pointer font-montserrat'>Copyright. All rights reserved.</p>
            <p>Terms & Conditions</p>
        </div>

      </div>
    </footer>)
}

export default Footer