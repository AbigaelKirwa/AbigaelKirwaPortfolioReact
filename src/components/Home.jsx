import MainHomeImage from "../assets/images/abigael_home_image.png"

function Home() {
    return(
        <section id="home">
            {/* this is code for the home section */}
            <div className="links">
                <ul>
                    <li><a href="#home"><span className="home_link">Home</span></a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </div>
            <div className="main_home">
                <div className="words">
                    <h1>Abigael Kirwa</h1>
                    <p>Versatile UI/UX designer and software developer with expertise in mobile and web applications.</p>
                    <div className="home_buttons">
                        <a href="#resume"><button className="more">More about me</button></a>
                        <a href="#footer"><button className="contact">contact me</button></a>
                    </div>
                </div>
                <div className="main_pic">
                    <img src={MainHomeImage} alt="abigael Kirwa"/>
                </div>
            </div>
        </section>
    )
}

export default Home