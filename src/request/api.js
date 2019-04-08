/** 
 * api接口统一管理
 */
import {get, post } from './http'

export const apiAddress = p => get('login', p);
// export const apiAddress2 = p => post('_User', p);