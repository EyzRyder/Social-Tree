import './App.scss'
import { FiTwitter, FiTwitch,FiGithub } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';

function App() {
  return (
    <main>
     <div className="avatar">
       <img src="https://avatars.githubusercontent.com/u/85580011?v=4" alt=""/>
     </div>
     <p>@EyzRyder</p>
     <div className="links">
       <a href="">LINK 1</a>
       <a href="">LINK 2</a>
       <a href="">LINK 3</a>
       <a href="">LINK 4</a>
     </div>
     <div className="icons">
       <button>
       <FiTwitter/>
       </button>
       <button>
       <FiTwitch/>
       </button>
       <button>
       <BsInstagram/>
       </button>
       <button>
       <SlSocialLinkedin/>
       </button>
       <button>
       <FiGithub/>
       </button>
     </div>
    </main>
  )
}

export default App
