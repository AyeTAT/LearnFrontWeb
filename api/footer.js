import { request } from '~/utils/request'

export const accessToPoetry = payload => request('https://v1.hitokoto.cn/', payload)
