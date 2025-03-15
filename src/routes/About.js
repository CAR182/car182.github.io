import logo from 'logo.svg';
import { Link } from 'react-router-dom';
export const About = (props) => {
  const { url, iconPath } = props;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>About Me</p>
        <Link to='/'>Home</Link>
      </header>
    </div>
  );
};

{
  /* <article class="style5">
                                      <span class="image">
                                          <img src="images/Dinah/Dinah_Tile.jpg" alt="A white cube rolling in a grey sci-fi-esque level" />
                                      </span>
                                      <a href="Dinah.html">
                                          <h2>Dinah</h2>
                                          <div class="content">
                                              <p>Building a 3D Cube Roller in Unity.</p>
                                          </div>
                                      </a>
                                  </article> */
}
