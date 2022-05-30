import './header.css'
import { DiGithubBadge } from 'react-icons/di'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiNumbersFill } from 'react-icons/ri'

export const Header = () => {
  return (
    <div className="header">
      <div className='title'>
        <h1>Divisors APP</h1>
        <RiNumbersFill size="30px" color="black"/>
      </div>
      <div className='social'>
        <a href='https://github.com/MidiUP' target="_blank">
          <DiGithubBadge size="30px" color="black" />
        </a>
        <a href='https://www.linkedin.com/in/mateus-mendes-23340021b/' target="_blank" style={ {marginLeft: '10px'} }>
          <AiFillLinkedin size="30px" color="black" />
        </a>
      </div>
    </div>
  )
}