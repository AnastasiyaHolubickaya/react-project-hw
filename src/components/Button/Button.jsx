// Styles
import styles from './Button.module.css';
import cn from 'classnames';

function Button({
  text = 'default button',
  type = 'button',
  alertMode = false,
  onClick,
}) {
  return (
    <button
      className={cn([styles.button, alertMode && styles.alert])}
      type={type}
      onClick={onClick}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
}

export default Button;
