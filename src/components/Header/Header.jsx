// *Styles
import cn from 'classnames';
import baseStyles from '../../styles/base.module.css';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.text}>CSS Weather Forecast</span>
        <i className={cn([`wi wi-sunrise ${baseStyles.icon}`])}></i>
      </div>
    </div>
  );
}

export default Header;
