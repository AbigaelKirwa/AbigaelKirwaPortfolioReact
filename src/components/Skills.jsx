import React, {useEffect, useState} from 'react';

function Skills() {
  // State for counting animation
  const [countingElements, setCountingElements] = useState([]);
  const interval = 1000;

  // Function to animate counting effect
  const animateCounting = (valueDisplay, endValue) => {
    let startValue = 0;
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(() => {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  };

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  // Initialize Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger counting animation for each visible element
          countingElements.forEach((valueDisplay) => {
            let endValue = parseInt(valueDisplay.getAttribute('data-val'));
            animateCounting(valueDisplay, endValue);
          });

          // Disconnect the observer to stop further updates
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    // Observe each element with the className "count"
    countingElements.forEach((valueDisplay) => {
      observer.observe(valueDisplay);
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, [countingElements]);

  // State for language progress bars
  const [animatedLanguages, setAnimatedLanguages] = useState([]);

  // Function to animate the loading effect
  const animateLoading = (element) => {
    let current = element.querySelector('.current');

    // Get the specified percentage from the data-percentage attribute
    let targetPercentage = parseInt(element.getAttribute('data-percentage'));

    // Check if the animation has already been triggered
    if (element.getAttribute('data-animated') === 'true') {
      return;
    }

    // Calculate the step increment based on the target percentage and animation duration
    let animationDuration = 1000;

    // Set up an interval to update the current width
    let currentWidth = 0;

    const updateWidth = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(1, elapsed / animationDuration);

      currentWidth = progress * targetPercentage;
      current.style.width = currentWidth + '%';

      if (progress < 1) {
        requestAnimationFrame(updateWidth);
      } else {
        // Mark the element as animated
        element.setAttribute('data-animated', 'true');
      }
    };

    let startTimestamp = null;
    requestAnimationFrame(updateWidth);
  };

  // Function to handle scroll events
  const handleScroll = () => {
    let allAnimated = true; // Assume all elements have been animated

    // Check if each language element is in the viewport
    animatedLanguages.forEach((languageElement) => {
      if (!isInViewport(languageElement)) {
        // If any element is not in the viewport, set the flag to false
        allAnimated = false;
      } else {
        // If the element is in the viewport, trigger the loading effect
        animateLoading(languageElement);
      }
    });

    // If all elements have been animated, remove the scroll event listener
    if (allAnimated) {
      window.removeEventListener('scroll', handleScroll);
    }
  };

  // Attach the handleScroll function to the scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animatedLanguages]);

  useEffect(() => {
    // Populate countingElements and animatedLanguages arrays
    const countingEls = document.querySelectorAll('.count');
    const languageEls = document.querySelectorAll('.language');

    setCountingElements(Array.from(countingEls));
    setAnimatedLanguages(Array.from(languageEls));
  }, []);
    return(
        <section id="skills">
            {/* this is code for the skills section */}
            <div className="skills_heading">
                <h1>SKILLS</h1>
            </div>
            <div className="numerical_skills">
                <div className="skill" id="skill-one">
                    <h1 className="count" data-val="10">00</h1>
                    <p>Happy Clients</p>
                </div>
                <div className="skill" id="skill-two">
                    <h1 className="count" data-val="6">00</h1>
                    <p>Projects</p>
                </div>
                <div className="skill" id="skill-three">
                    <h1 className="count" data-val="5">00</h1>
                    <p>Awards</p>
                </div>
                <div className="skill" id="skill-four">
                    <h1 className="count" data-val="8">00</h1>
                    <p>Languages</p>
                </div>
            </div>
            <div className="languages">
                <div className="language">
                    <p>HTML</p>
                    <div className="language_stats">
                        <div className="overall">
                            <div className="current" id="html"></div>
                        </div>
                    </div>
                </div>
                <div className="language" data-percentage="90">
                    <p>CSS</p>
                    <div className="language_stats">
                        <div className="overall">
                            <div className="current" id="css"></div>
                        </div>
                    </div>
                </div>
                <div className="language" data-percentage="50">
                    <p>JavaScript</p>
                    <div className="language_stats">
                        <div className="overall">
                            <div className="current" id="js"></div>
                        </div>
                    </div>
                </div>
                <div className="language" data-percentage="50">
                    <p>React</p>
                    <div className="language_stats">
                        <div className="overall">
                            <div className="current" id="react"></div>
                        </div>
                    </div>
                </div>
                <div className="language" data-percentage="70">
                    <p>PHP</p>
                    <div className="language_stats">
                        <div className="overall">
                            <div className="current" id="php"></div>
                        </div>
                    </div>
                </div>
                <div className="language" data-percentage="60">
                    <p>Python</p>
                    <div className="language_stats">
                        <div className="overall">
                            <div className="current" id="python"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills