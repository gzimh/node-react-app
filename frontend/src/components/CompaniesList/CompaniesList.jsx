import React, { useEffect, useState, useCallback } from "react";
import styles from "./CompaniesList.module.scss";
import { fetchCompanies } from "../../lib/apiClient";
import CompanyItem from "../CompanyItem/CompanyItem";
import CompaniesFilter from "../CompaniesFilter/CompaniesFilter";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null)

  const filterCompanies = useCallback(async () => {
    setLoading(true)
    try {
      const companies = await fetchCompanies(filters)
      setCompanies(companies)
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    filterCompanies()
  }, [filterCompanies]);

  useEffect(() => {
    if(filters) {
      filterCompanies()
    }
  }, [filters, filterCompanies])


  return (
    <div className={styles.root}>
      <h1>Companies List</h1>
      <CompaniesFilter handleOnChange={(value) => {
        setFilters(value)
      }} />

      {loading && <p>Loading...</p>}

      <div className={styles.companiesContainer}>
        {!loading &&
          companies.length > 0 &&
          companies.map((company) => (
            <CompanyItem key={company.id} {...company} />
          ))}

        {!loading && companies.length === 0 && (
          <p>No companies found for the applied search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default CompaniesList;
