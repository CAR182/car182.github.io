import { Link } from 'react-router-dom';
import logo from 'logo.svg';
import styles from './cards.module.css';

import { Card } from 'components/Card';

export const Home = (props) => {
  const { url, iconPath } = props;

  return (
    <div className='App'>
      <h1>Chris Rayner</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at arcu diam. Vivamus vestibulum vestibulum
        turpis, sed bibendum risus euismod id. Nullam pellentesque, orci at fringilla blandit, odio mauris gravida erat,
        a mattis orci dui sed sem. Cras massa dui, varius nec imperdiet a, fermentum at lorem. Proin tortor lorem,
        porttitor et imperdiet a, euismod et ex. Sed convallis dictum risus, vitae ullamcorper erat condimentum
        accumsan. Morbi rhoncus metus eget augue condimentum, vel volutpat leo accumsan. Duis non molestie mauris, a
        pretium risus. Mauris ut leo eros. Morbi cursus et est et gravida. Morbi sit amet orci augue. Proin fermentum
        dictum erat vitae efficitur. Donec vehicula at augue nec sollicitudin. Duis ultrices magna tristique porttitor
        bibendum.
      </p>

      <section className={styles.tiles}>
        <Card
          title='Angier'
          link='project-angier'
          image='tiles/Angier_Tile.png'
          subTitle='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        />
        <Card
          title='Iro'
          link='project-iro'
          image='tiles/Iro_Tile.png'
          subTitle='Pokemon style RPG built with JavaScript & React'
        />
        <Card
          title='Iro'
          link='project-iro'
          image='tiles/Iro_Tile.png'
          subTitle='Pokemon style RPG built with JavaScript & React'
        />
        <Card
          title='Iro'
          link='project-iro'
          image='tiles/Iro_Tile.png'
          subTitle='Pokemon style RPG built with JavaScript & React'
        />
      </section>
    </div>
  );
};
