/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取用户工作台信息(每5秒拉一次)
*/
export const getPickscreenOnlinestagginfodto = (options = {}) => {
 return api({
  url: `/api/app/pick-screen/online-stagg-info-dto`,
  method: "get",
  ...options
 });
};

/**
 * 无描述
*/
export const getPickscreenOnliestaging = (options = {}) => {
 return api({
  url: `/api/app/pick-screen/onlie-staging`,
  method: "get",
  ...options
 });
};

/**
 * 获取波次拣选任务
 * @param {Object} params - 请求参数
 * @param {string} [params.containerCode] - 
*/
export const getPickscreenPickallocationtask = (params, options = {}) => {
 return api({
  url: `/api/app/pick-screen/pick-allocation-task`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取容器任务进度
 * @param {Object} params - 请求参数
 * @param {string} [params.containerCode] - 
*/
export const getPickscreenContainertaskprocessing = (params, options = {}) => {
 return api({
  url: `/api/app/pick-screen/container-task-processing`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取拣选
 * @param {Object} params - 请求参数
 * @param {string} [params.PickCargoLocationId] - 拣选货位id
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getPickscreenPickcargolocationinput = (params, options = {}) => {
 return api({
  url: `/api/app/pick-screen/pick-cargo-location-input`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取未拣选任务行汇总
 * @param {Object} params - 请求参数
 * @param {string} [params.PickCargoLocationId] - 拣选货位id
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getPickscreenNotpickcargolocation = (params, options = {}) => {
 return api({
  url: `/api/app/pick-screen/not-pick-cargo-location`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 分页获取波次拣选序列号
 * @param {Object} params - 请求参数
 * @param {string} [params.WaveAllocationKey] - 波次分配主键
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getPickscreenPickserialnumberpages = (params, options = {}) => {
 return api({
  url: `/api/app/pick-screen/pick-serial-number-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取分播格口信息
*/
export const getPickscreenPickcargolocationinfo = (options = {}) => {
 return api({
  url: `/api/app/pick-screen/pick-cargo-location-info`,
  method: "get",
  ...options
 });
};

/**
 * 无描述
 * @param {Object} body - 请求参数
 * @param {string} [body.wavePickAllocationId] - 拣选分配任务主键
 * @param {string} [body.serialNumber] - 序列号
*/
export const postPickscreenScanserialnumber = (body, options = {}) => {
 return api({
  url: `/api/app/pick-screen/scan-serial-number`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 缺货提交
 * @param {Object} body - 请求参数
 * @param {string} [body.wavePickAllocationId] - 拣选分配任务主键
 * @param {string} [body.serialNumber] - 序列号
*/
export const postPickscreenOutofstockpick = (body, options = {}) => {
 return api({
  url: `/api/app/pick-screen/out-of-stock-pick`,
  method: "post",
  data: body,
  ...options
 });
};

