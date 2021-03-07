import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/diego3g.png' alt='img-perfil'/>
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="icon-level"/>
          Level {level}</p>
      </div>
    </div>
  );
}