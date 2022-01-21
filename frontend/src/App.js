import styles from "./App.module.scss";
import CompaniesList from "./components/CompaniesList/CompaniesList";

const App = () => {
  return (
    <div className={styles.root}>
      <CompaniesList />
    </div>
  );
};

export default App;
