//Styles
import styles from './Spinner.module.scss';
const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles['header__item']}></div>
    </div>
  );
};

export default Spinner;
