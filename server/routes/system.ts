import express from 'express'

const router = express.Router()

router.route('/health').get((_req, res) => {
    res.send("OK")
})

router.route('/version').get((_req, res) => {
    res.send(process.env.npm_package_version)
})

export default router
