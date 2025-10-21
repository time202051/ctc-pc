/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取组盘数量
 * @param {Object} params - 请求参数
 * @param {string} [params.tvCode] - 
*/
export const getTvinPalletsortcount = (params, options = {}) => {
 return api({
  url: `/api/app/tv-in/pallet-sort-count`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取当前巷道的异常信息
 * @param {Object} params - 请求参数
 * @param {string} [params.tvCode] - 
*/
export const getTvinErrorcachelist = (params, options = {}) => {
 return api({
  url: `/api/app/tv-in/error-cache-list`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取所有巷道可用库位
*/
export const getTvinAvailablecargolocation = (options = {}) => {
 return api({
  url: `/api/app/tv-in/available-cargo-location`,
  method: "get",
  ...options
 });
};

/**
 * 获取当日入库任务
*/
export const getTvinInwarehousetask = (options = {}) => {
 return api({
  url: `/api/app/tv-in/in-ware-house-task`,
  method: "get",
  ...options
 });
};

/**
 * 车身库位
*/
export const getTvinCarbodycargocount = (options = {}) => {
 return api({
  url: `/api/app/tv-in/car-body-cargo-count`,
  method: "get",
  ...options
 });
};

/**
 * 样件库位
*/
export const getTvinSamplescargocount = (options = {}) => {
 return api({
  url: `/api/app/tv-in/samples-cargo-count`,
  method: "get",
  ...options
 });
};

/**
 * 当前车身类类型占比
当前车身库存类型
*/
export const getTvinCarbodypercent = (options = {}) => {
 return api({
  url: `/api/app/tv-in/car-body-percent`,
  method: "get",
  ...options
 });
};

/**
 * 货位月占用数
*/
export const getTvinCargomonthusedcount = (options = {}) => {
 return api({
  url: `/api/app/tv-in/cargo-month-used-count`,
  method: "get",
  ...options
 });
};

/**
 * 获取月车身出入数量
*/
export const getTvinCarbodyinoutcount = (options = {}) => {
 return api({
  url: `/api/app/tv-in/car-body-in-out-count`,
  method: "get",
  ...options
 });
};

/**
 * 样件订单处理量趋势
*/
export const getTvinSamplestockincompletedcount = (options = {}) => {
 return api({
  url: `/api/app/tv-in/sample-stock-in-completed-count`,
  method: "get",
  ...options
 });
};

/**
 * 已用货位占比
*/
export const getTvinUsedcargoprecent = (options = {}) => {
 return api({
  url: `/api/app/tv-in/used-cargo-precent`,
  method: "get",
  ...options
 });
};

/**
 * 样件出入库数量趋势
*/
export const getTvinSamplestockinoutcount = (options = {}) => {
 return api({
  url: `/api/app/tv-in/sample-stock-in-out-count`,
  method: "get",
  ...options
 });
};

/**
 * 库位使用报表
*/
export const getTvinCargousagereport = (options = {}) => {
 return api({
  url: `/api/app/tv-in/cargo-usage-report`,
  method: "get",
  ...options
 });
};

/**
 * 巷道载货率
*/
export const getTvinRoadwayavailcargo = (options = {}) => {
 return api({
  url: `/api/app/tv-in/road-way-avail-cargo`,
  method: "get",
  ...options
 });
};

/**
 * 无描述
*/
export const postTvinTestutils = (options = {}) => {
 return api({
  url: `/api/app/tv-in/test-utils`,
  method: "post",
  ...options
 });
};

/**
 * 获取拣选台类型
 * @param {Object} params - 请求参数
 * @param {string} [params.tvCode] - 
*/
export const getTvinStagingtype = (params, options = {}) => {
 return api({
  url: `/api/app/tv-in/staging-type`,
  method: "get",
  params,
  ...options
 });
};

