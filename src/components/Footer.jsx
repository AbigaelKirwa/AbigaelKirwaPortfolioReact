import Linkedin from "../assets/images/LinkedIn.png"
import Mail from "../assets/images/mail.png"
import Youtube from "../assets/images/youtube.png"

function Footer() {
    return(
    <footer id="footer">
        {/* this is code for the footer section */}
        <div class="left_links">
            <div class="left_link">
                <h3>My Contacts</h3>
                <p>abigael.kirwa@strathmore.edu</p>
                <p>P.O.BOX 4921 30100</p>
                <p>Eldoret, Kenya</p>
            </div>
            <div class="left_link">
                <h3>Links</h3>
                <p><a href="#home">Home</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#skills">Skills</a></p>
            </div>
        </div>
        <div class="social_media">
            <div>
                <a href="https://www.linkedin.com/in/abigael-kirwa-40647219b/" target="_blank"><img src={Linkedin} alt="linkedin image"/></a>
            </div>
            <div>
                <a href="https://www.youtube.com/@theuiuxwebdev" target="_blank"><img src={Youtube} alt="youtube image"/></a>
            </div>
            <div>
                <a href="mailto:abigael.kirwa@strathmore.edu"><img src={Mail} alt="mail image"/></a>
            </div>
        </div> 
    </footer>
    )
}

export default Footer