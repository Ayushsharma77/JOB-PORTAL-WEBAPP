import React, { useContext } from 'react'
import {Context} from "../../main"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
      <div className="footer-contact">
        <span>&copy; All Rights Reserved by Ayush Sharma.</span>
        <a href="mailto:ayushsharma23052006@gmail.com">ayushsharma23052006@gmail.com</a>
        <a href="tel:+917877281809">+91 78772 81809</a>
      </div>
      <div className="footer-profiles" aria-label="Online profiles">
        <a href="https://www.linkedin.com/in/ayush-sharma-389289322" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin aria-hidden="true" />
        </a>
        <a href="https://github.com/Ayushsharma77" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub aria-hidden="true" />
        </a>
        <a href="https://leetcode.com/u/ayushsharma77/" target="_blank" rel="noreferrer" aria-label="LeetCode">
          <SiLeetcode aria-hidden="true" />
        </a>
        <a href="https://www.geeksforgeeks.org/profile/ayushsharmbtdm" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks">
          <SiGeeksforgeeks aria-hidden="true" />
        </a>
        <a href="https://www.instagram.com/ayushsharma77_/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <RiInstagramFill aria-hidden="true" />
        </a>
      </div>
      
    </footer>
  )
}

export default Footer
