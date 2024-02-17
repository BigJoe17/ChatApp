import { express } from "express"

router = express.Router()

router.post("/user/", protectRoute, user)