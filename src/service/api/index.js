import { axiosGet } from "./configureAxios"
const TIME_ZONE = `/comments`
export const getData = () => axiosGet(TIME_ZONE)
