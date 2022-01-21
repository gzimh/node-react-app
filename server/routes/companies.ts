import express from 'express'

import {
	getCompanies, getSpecialities
} from '../controllers/companies'

const router = express.Router()

router.get('/', getCompanies)
router.get('/specialities', getSpecialities)


export default router
