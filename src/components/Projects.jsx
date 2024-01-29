import Kirche from "../assets/images/project_one_kirche.png"
import ComputerCo from "../assets/images/project_two_computer.png"
import Animation from "../assets/images/project_three_animation.png"
import Afya from "../assets/images/project_four_afya.png"

function Projects() {
    return(
        <section id="projects">
            {/* this is code for the projects section */}
            <div className="projects_heading">
                <h1>PROJECTS</h1>
            </div>
            <div className="main_images_projects">
                <div className="image_div">
                    <a href="https://kirche.netlify.app/" target="_blank" rel="noreferrer"><img src={Kirche} alt="kirche project"/></a>
                </div>
                <div className="image_div">
                    <a href="https://computerco.netlify.app/" target="_blank" rel="noreferrer"><img src={ComputerCo} alt="computer project"/></a>
                </div>
                <div className="image_div">
                    <a href="https://abigaelkirwa.github.io/Animation-Website/" target="_blank" rel="noreferrer"><img src={Animation} alt="animation project"/></a>
                </div>
                <div className="image_div">
                    <a href="https://afyaweb.netlify.app/" target="_blank" rel="noreferrer"><img src={Afya} alt="afya project"/></a>
                </div>
            </div>
        </section>
    )
}

export default Projects