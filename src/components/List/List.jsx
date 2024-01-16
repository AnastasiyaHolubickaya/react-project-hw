// *Base
import { useState } from 'react';
import Button from '../Button/Button';
import list from './List.data';
// *Styles
import cn from 'classnames';
import baseStyles from '../../styles/base.module.css';
import styles from './List.module.css';

function List() {
  const [state, setState] = useState(false);
  const onClick = () => {
    setState(!state);
  };

  return (
    <div className={styles.wrapper}>
      <Button text="change colors" onClick={onClick}></Button>
      <ul className={styles.list}>
        {list.map((item, index) => {
          return (
            <Item
              key={'list item -' + item + index}
              city={item.city}
              temp={item.temp}
              icon={item.icon}
              index={index}
            ></Item>
          );
        })}
      </ul>
    </div>
  );
}

function Item({ city, temp, icon, index }) {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  return (
    <li
      className={cn([
        styles.item,
        (index === 0 || index === 8) && styles.itemSpan2,
        index === 10 && styles.itemSpan4,
      ])}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span>{city}</span>
      <span>
        {temp}
        <span>
          <i className={cn(['wi', `${icon}`, baseStyles.icon])}></i>
        </span>
      </span>
    </li>
  );
}
export default List;
