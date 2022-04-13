import styles from './LoadingPage.module.css';

const LoadingPage = () => {
  return (
    <div className={styles.ring}>
      Loading
      <span className={styles.spinner}></span>
    </div>
  );
};

export default LoadingPage;
