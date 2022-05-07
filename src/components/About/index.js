import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  ;<div className="container about-page">
    <div className="text-zone">
      <h1>
        <AnimatedLetters
          strArray={['A', 'B', 'O', 'U', 'T', ' ', 'm', 'e']}
          idx={15}
        ></AnimatedLetters>
      </h1>
      <p>
        I'm a very ambitious front-end developer looking for a role in
        established IT company with the oppurtunity to work with the latest
        technology on challenging and diversre projects.
      </p>
      <p>
        I'm quietly confident. naturally curious, and perpectually working on
        improving my chops one design problem at a time.
      </p>
      <p>
        If i intent to define myself in one sentence that would be a family
        person, a sports fanatic , and tech obsessed.
      </p>
    </div>
  </div>
}

export default About
