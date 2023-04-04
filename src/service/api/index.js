import { Env } from "config/Env"

import makeApi from "./configureAxios"

const api = makeApi(`${Env.API_BASE_URL}`)

const TIME_ZONE = `/comments`

export const getData = () => api.get(TIME_ZONE)
