import styles from "./CompaniesFilter.module.scss";
import { TextField } from "@mui/material";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import { fetchSpecialities } from "../../lib/apiClient";
import { Chip } from "@mui/material"

const CompaniesFilter = ({ handleOnChange }) => {
  const [initial, setInitial] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [specialities, setSpecialities] = useState([])
  const [selected, setSelected] = useState([])

  const onKeywordChange = (event) => {
      const value = event.target.value
      if(value && value.length < 3) return
      setKeyword(value)
  }
  const debouncedKeywordOnChange = debounce(onKeywordChange, 300)

  const onSpecialitySelectionChange = (speciality) => {
    const value = specialities.find(s => s === speciality)
    if(selected.includes(value)) {
      setSelected(selected.filter(s => s !== value))
    } else {
      setSelected([...selected, value])
    }
  }

  useEffect(() => {
    getSpecialities()
  }, [])

  useEffect(() => {
    if(!initial) {
      setInitial(true)
    } else {
      handleOnChange({
        keyword,
        specialities: selected
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, selected])

  const getSpecialities = async () => {
    try {
      const data = await fetchSpecialities()
      setSpecialities(data)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.searchInput}>
        <TextField
          onChange={debouncedKeywordOnChange}
          label="Search"
          placeholder="Search by company name.."
          variant="outlined"
          color="primary"
          focused
          fullWidth
        />
      </div>
      {specialities && specialities.length > 0 && (
          <div className={styles.specialities}>
            {specialities.map((speciality, index) => (
              <div key={`speciality-${index}`} className={styles.chip}>
                <Chip label={speciality} clickable onClick={() => onSpecialitySelectionChange(speciality)} color={selected.includes(speciality) ? "success" : "default"} />
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default CompaniesFilter;
