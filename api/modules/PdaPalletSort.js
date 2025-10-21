/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 校验入库位状态
 * @param {Object} params - 请求参数
 * @param {string} [params.cargoLocationCode] - 
*/
export const postPdapalletsortVerifycargolocation = (params, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/verify-cargo-location`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 根据车身标签号或车架号获取入场信息（车身追溯信息）
 * @param {Object} params - 请求参数
 * @param {string} [params.number] - 
*/
export const getPdapalletsortAdmissioninfobytagnumberframenumber = (params, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/admission-info-by-tagnumber-framenumber`,
  method: "get",
  params,
  ...options
 });
};

/**
 * PDA组盘-车身
 * @param {Object} body - 请求参数
 * @param {number} [body.carStatusDescription] - 车身状态描述1
 * @param {string} [body.admissionInfoId] - 入场信息（车身追溯）
 * @param {string} [body.containerCode] - 容器编码
*/
export const postPdapalletsortCarbodypalletsort = (body, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/carbody-pallet-sort`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * PDA组盘-样件
 * @param {Object} body - 请求参数
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.loadPercent] - 百分比
 * @param {Array} [body.palletSortSampleDataList] - 组盘数据
*/
export const postPdapalletsortSamplespalletsort = (body, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/samples-pallet-sort`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 根据样件标签号查询收货订单
 * @param {Object} params - 请求参数
 * @param {string} [params.TagNumber] - 标签号
 * @param {number} [params.Qty] - 本次组盘数量
*/
export const getPdapalletsortSamplesbytagnumber = (params, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/samples-by-tagnumber`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 校验样件组盘状态
 * @param {Object} params - 请求参数
 * @param {string} [params.tagNumber] - 
*/
export const postPdapalletsortCheckplatingstatus = (params, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/check-plating-status`,
  method: "post",
  params,
  ...options
 });
};

/**
 * PDA外仓入库-车身信息获取
 * @param {Object} params - 请求参数
 * @param {string} [params.number] - 
*/
export const getPdapalletsortAdmissioninfobytagno = (params, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/admission-info-by-tagno`,
  method: "get",
  params,
  ...options
 });
};

/**
 * PDA外仓入库-确认车身入库
 * @param {Object} body - 请求参数
 * @param {string} [body.admissionInfoId] - 入场信息Id
 * @param {string} [body.stockInId] - 入库单Id
 * @param {string} [body.cargoLocationCode] - 库位编码
*/
export const postPdapalletsortConfirmcarbodyenter = (body, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/confirm-carbody-enter`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * PDA外仓入库-收货单获取
 * @param {Object} params - 请求参数
 * @param {string} [params.tagNumber] - 
*/
export const getPdapalletsortSamplesbytagno = (params, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/samples-by-tagno`,
  method: "get",
  params,
  ...options
 });
};

/**
 * PDA外仓入库-确认样件入库
 * @param {Object} body - 请求参数
 * @param {string} [body.admissionInfoId] - 入场信息Id
 * @param {string} [body.stockInId] - 入库单Id
 * @param {string} [body.cargoLocationCode] - 库位编码
*/
export const postPdapalletsortConfirmsamplesenter = (body, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/confirm-samples-enter`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 根据托盘码下发WCS任务
 * @param {Object} params - 请求参数
 * @param {string} [params.containerCode] - 
*/
export const postPdapalletsortDowntask = (params, options = {}) => {
 return api({
  url: `/api/app/pda-pallet-sort/down-task`,
  method: "post",
  params,
  ...options
 });
};

