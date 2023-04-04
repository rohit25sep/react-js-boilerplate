/* eslint-disable @typescript-eslint/no-explicit-any */
import { Env } from 'config/Env'
import { Post } from 'models/postsModel'

import makeApi from './configureAxios';


const api = makeApi(`${Env.API_BASE_URL}`);

const TIME_ZONE = `/comments`

export const getData = (): Promise<Post[]> => api.get(TIME_ZONE)




