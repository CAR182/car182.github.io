import styles from './card.module.css';
import { useNavigate } from 'react-router-dom';

// import './card.css';

export const Card = ({ image, alt, link, title, subTitle, background = ' background-color: #f2849e;' }) => {
  let navigate = useNavigate();

  return (
    <div className={`${styles.article} ${background}`} onClick={() => navigate(link)}>
      <span className={styles.image}>
        <img src={image} alt={alt} />
      </span>
      <a className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.content}>
          <p>{subTitle}</p>
        </div>
      </a>
    </div>
  );
};
