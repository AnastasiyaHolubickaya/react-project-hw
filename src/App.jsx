import Header from './components/Header/Header';
import List from './components/List/List';
// * Styles
import baseStyles from './styles/base.module.css';
import 'weather-icons/css/weather-icons.css';

function App() {
  return (
    <div className={baseStyles.wrapper}>
      <div className={baseStyles.forecast}>
        <Header />
        <List />
      </div>
    </div>
  );
}

export default App;
