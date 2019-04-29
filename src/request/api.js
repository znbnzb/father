/** 
 * api接口统一管理
 */
import {get, post } from './http'

export const Logininfo = data => get('login', data); //登录
export const getinspection = data => get('classes/baseProject', data) //获取单项检查名称
export const getreport = data => get('classes/inspection', data) //获取单项报告详情