import styles from "./CompanyItem.module.scss";
import { Chip } from "@mui/material";

const CompanyItem = ({ name, logo, specialities, city }) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={logo} alt="company logo"></img>
      </div>
      <div className={styles.content}>
        <h3>
          {name} ({city})
        </h3>
        {specialities && (
          <div className={styles.specialities}>
            {specialities.map((speciality, index) => (
              <div key={`speciality-${index}`} className={styles.chip}>
                <Chip label={speciality} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyItem;
