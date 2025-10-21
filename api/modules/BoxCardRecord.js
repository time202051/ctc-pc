/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取箱卡记录分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.ProjectCode] - 项目号
 * @param {string} [params.BoxCardCode] - 箱卡号
 * @param {string} [params.ContainerCode] - 容器号
 * @param {number} [params.InWarehouseStatus] - 状态
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getBoxcardrecordPagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/box-card-record/paged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 箱卡记录导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.boxCardCode] - 箱卡号
 * @param {string} [body.containerCode] - 容器号
 * @param {number} [body.inWarehouseStatus] - 在库状态枚举值
*/
export const postBoxcardrecordExportboxcardrecord = (body, options = {}) => {
 return api({
  url: `/api/app/box-card-record/export-box-card-record`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 通过箱卡号查询SMS箱卡数据
 * @param {Object} params - 请求参数
 * @param {string} [params.boxCardCode] - 
*/
export const getBoxcardrecordBoxdata = (params, options = {}) => {
 return api({
  url: `/api/app/box-card-record/box-data`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 实验提交回库
 * @param {Object} body - 请求参数
 * @param {string} [body.containerCode] - 容器编码
 * @param {number} [body.boxRestockType] - 箱卡回库类型枚举值
 * @param {Array} [body.boxRestockDataList] - 箱卡回库数据
*/
export const postBoxcardrecordBoxrestock = (body, options = {}) => {
 return api({
  url: `/api/app/box-card-record/box-restock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 审批出库
 * @param {Object} body - 请求参数
 * @param {Array} [body.boxCardIdList] - 
*/
export const postBoxcardrecordApprovaloutstock = (options = {}) => {
 return api({
  url: `/api/app/box-card-record/approval-out-stock`,
  method: "post",
  ...options
 });
};

/**
 * 通过箱卡号查询SMS箱卡数据
 * @param {Object} params - 请求参数
 * @param {number} params.boxId - 
*/
export const getBoxcardrecordBoxdatabyboxidByBoxId = (boxId, options = {}) => {
 return api({
  url: `/api/app/box-card-record/box-data-by-box-id/${boxId}`,
  method: "get",
  ...options
 });
};

/**
 * 箱卡实验入库
 * @param {Object} body - 请求参数
 * @param {string} [body.containerCode] - 容器编码
 * @param {number} [body.boxRestockType] - 箱卡回库类型枚举值
 * @param {Array} [body.boxRestockDataList] - 箱卡回库数据
*/
export const postBoxcardrecordSamplespalletsort = (body, options = {}) => {
 return api({
  url: `/api/app/box-card-record/samples-pallet-sort`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * Test增加托盘码生成实验回库的任务
 * @param {Object} params - 请求参数
 * @param {string} [params.containerCode] - 
*/
export const postBoxcardrecordGeneraterestocktask = (params, options = {}) => {
 return api({
  url: `/api/app/box-card-record/generate-restock-task`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 导出每天的PV样件入库量
 * @param {Object} params - 请求参数
 * @param {string} [params.dateTime] - 
*/
export const postBoxcardrecordExportrestock = (params, options = {}) => {
 return api({
  url: `/api/app/box-card-record/export-restock`,
  method: "post",
  params,
  ...options
 });
};

