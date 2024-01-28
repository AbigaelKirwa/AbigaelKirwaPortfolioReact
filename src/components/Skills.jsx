function Skills() {
    return(
        <section id="skills">
            {/* this is code for the skills section */}
            <div class="skills_heading">
                <h1>SKILLS</h1>
            </div>
            <div class="numerical_skills">
                <div class="skill" id="skill-one">
                    <h1 class="count" data-val="10">00</h1>
                    <p>Happy Clients</p>
                </div>
                <div class="skill" id="skill-two">
                    <h1 class="count" data-val="6">00</h1>
                    <p>Projects</p>
                </div>
                <div class="skill" id="skill-three">
                    <h1 class="count" data-val="5">00</h1>
                    <p>Awards</p>
                </div>
                <div class="skill" id="skill-four">
                    <h1 class="count" data-val="8">00</h1>
                    <p>Languages</p>
                </div>
            </div>
            <div class="languages">
                <div class="language">
                    <p>HTML</p>
                    <div class="language_stats">
                        <div class="overall">
                            <div class="current" id="html"></div>
                        </div>
                    </div>
                </div>
                <div class="language" data-percentage="90">
                    <p>CSS</p>
                    <div class="language_stats">
                        <div class="overall">
                            <div class="current" id="css"></div>
                        </div>
                    </div>
                </div>
                <div class="language" data-percentage="50">
                    <p>JavaScript</p>
                    <div class="language_stats">
                        <div class="overall">
                            <div class="current" id="js"></div>
                        </div>
                    </div>
                </div>
                <div class="language" data-percentage="50">
                    <p>React</p>
                    <div class="language_stats">
                        <div class="overall">
                            <div class="current" id="react"></div>
                        </div>
                    </div>
                </div>
                <div class="language" data-percentage="70">
                    <p>PHP</p>
                    <div class="language_stats">
                        <div class="overall">
                            <div class="current" id="php"></div>
                        </div>
                    </div>
                </div>
                <div class="language" data-percentage="60">
                    <p>Python</p>
                    <div class="language_stats">
                        <div class="overall">
                            <div class="current" id="python"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills