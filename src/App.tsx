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
       <a href="https://bessiportfolio.vercel.app">Portfolio</a>
       <a href="https://eyzryder.github.io/">old portfolio</a>
       <a href="https://app.rocketseat.com.br/me/gabriel-de-morais-bessi-04850">Rocketseat</a>
       <a href="https://stackblitz.com/@EyzRyder">StackBlitz</a>
     </div>
     <div className="icons">
       <button disabled>
         <a href="#">
       <FiTwitter size={24}/>
         </a>
       </button>
       <button disabled>
         <a href="#">
       <FiTwitch size={24}/>
         </a>
       </button>
       <button>
         <a href="https://www.instagram.com/eyz_ryder/">
       <BsInstagram size={24}/>
         </a>
       </button>
       <button>
         <a href="https://www.linkedin.com/in/gabriel-bessi-5b0160230/">
       <SlSocialLinkedin size={24}/>
         </a>
       </button>
       <button>
         <a href="https://github.com/EyzRyder">
       <FiGithub size={24}/>
         </a>
       </button>
     </div>
    </main>
  )
}

export default App
