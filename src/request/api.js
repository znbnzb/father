/** 
 * api接口统一管理
 */
import {get, post } from './http'

export const Logininfo = data => get('login', data); //登录
export const getreport = data => get('classes/base', data) //获取报告详情