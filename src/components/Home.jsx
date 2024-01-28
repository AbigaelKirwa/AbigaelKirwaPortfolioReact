import MainHomeImage from "../assets/images/abigael_home_image.png"

function Home() {
    return(
        <section id="home">
            {/* this is code for the home section */}
            <div class="links">
                <ul>
                    <li><a href="#home"><span class="home_link">Home</span></a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </div>
            <div class="main_home">
                <div class="words">
                    <h1>Abigael Kirwa</h1>
                    <p>Versatile UI/UX designer and software developer with expertise in mobile and web applications.</p>
                    <div class="home_buttons">
                        <a href="#resume"><button class="more">More about me</button></a>
                        <a href="#footer"><button class="contact">contact me</button></a>
                    </div>
                </div>
                <div class="main_pic">
                    <img src={MainHomeImage} alt="abigael Kirwa"/>
                </div>
            </div>
        </section>
    )
}

export default Home