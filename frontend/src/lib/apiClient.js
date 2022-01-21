import qs from "qs";

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const fetchCompanies = (filters) => {
  const query = qs.stringify(filters);
  return fetch(`${process.env.REACT_APP_SERVER_URL}/companies?${query}`)
    .then(handleErrors)
    .then((res) => res.json())
    .catch((err) => err);
};

const fetchSpecialities = () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/companies/specialities`)
    .then(handleErrors)
    .then((res) => res.json())
    .catch((err) => err);
};

export { fetchCompanies, fetchSpecialities };
