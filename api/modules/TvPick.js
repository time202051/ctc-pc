/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 当前出库任务及拣选信息
 * @param {Object} params - 请求参数
 * @param {string} [params.tvCode] - 
*/
export const getTvpickStockouttask = (params, options = {}) => {
 return api({
  url: `/api/app/tv-pick/stock-out-task`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取当前工作台的异常信息
 * @param {Object} params - 请求参数
 * @param {string} [params.tvCode] - 
*/
export const getTvpickErrorcachelist = (params, options = {}) => {
 return api({
  url: `/api/app/tv-pick/error-cache-list`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 当日出库计划表
获取当日出库计划
*/
export const getTvpickTodaystockoutplan = (options = {}) => {
 return api({
  url: `/api/app/tv-pick/today-stock-out-plan`,
  method: "get",
  ...options
 });
};

/**
 * 当日盘点计划表
 * @param {Object} params - 请求参数
 * @param {string} [params.tvCode] - 
*/
export const getTvpickTodayiLT = (params, options = {}) => {
 return api({
  url: `/api/app/tv-pick/today-iLT`,
  method: "get",
  params,
  ...options
 });
};

