import fs from "fs"

interface Company {
  id: number,
  name: string,
  logo: string,
  specialities: string [],
  city: string
}

const loadData = () => {
  return JSON.parse(fs.readFileSync("data.json").toString())
}

const getCompanies = async (req: any, res: any) => {
  const filters = {
    keyword: req.query.keyword as string,
    specialities: req.query.specialities as string[]
  }

  let companies = loadData() as Company[]
  if (filters && filters.keyword) {
    companies = companies.filter((company) =>
      company.name?.toLowerCase().includes(filters.keyword?.toLowerCase())
    );
  }

  if (filters && filters.specialities && filters.specialities.length > 0) {
    companies = companies.filter((company) => {
      for(const speciality of filters.specialities) {
        if(company.specialities
            .map((speciality: string) => speciality.toLowerCase())
            .includes(speciality.toLowerCase())) {
          return true
        }
      }

      return false
    })
  }

  return res.send(companies)
}

const getSpecialities = async (_req: any, res: any) => {
  const companies = loadData() as Company[]
  const specialities = companies.reduce((acc: string[], company: Company) => {
    if (company.specialities) {
      const toBeAdded: string[] = []
      company.specialities.forEach((speciality: string) => {
        if (!acc.includes(speciality)) {
          toBeAdded.push(speciality)
        }
      })
      return [...acc, ...toBeAdded]
    }
    return acc
  }, [])

  return res.send(specialities)
}

export { getCompanies, getSpecialities }
