/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取码盘记录数据
 * @param {Object} params - 请求参数
 * @param {string} [params.TagNumber] - 标签号（样件是入库标签号，车身是车身标签号）
 * @param {string} [params.ProductCode] - 物料编码
 * @param {string} [params.ContainerCode] - 容器编码
 * @param {string} [params.Batch] - 批次号
 * @param {string} [params.ProductName] - 物料名称
 * @param {string} [params.BillNo] - 流水码
 * @param {string} [params.OrginalBillNo] - 流水码
 * @param {string} [params.SubtrayCode] - 子托盘号
 * @param {number} [params.BindStateEnum] - 码盘状态
 * @param {string} [params.RegionId] - 上架区域
 * @param {number} [params.GroundShelfType] - 上架类型
 * @param {string} [params.BusinessTaskId] - 任务id
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getBindrecordBindrecorddetailpages = (params, options = {}) => {
 return api({
  url: `/api/app/bind-record/bind-record-detail-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 导出码盘记录数据
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.tagNumber] - 标签号（样件是入库标签号，车身是车身标签号）
 * @param {string} [body.productCode] - 物料编码
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.batch] - 批次号
 * @param {string} [body.productName] - 物料名称
 * @param {string} [body.billNo] - 流水码
 * @param {string} [body.orginalBillNo] - 流水码
 * @param {string} [body.subtrayCode] - 子托盘号
 * @param {number} [body.bindStateEnum] - 码盘状态
 * @param {string} [body.regionId] - 上架区域
 * @param {number} [body.groundShelfType] - 上架类型
 * @param {string} [body.businessTaskId] - 任务id
*/
export const postBindrecordExportbindrecord = (body, options = {}) => {
 return api({
  url: `/api/app/bind-record/export-bind-record`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 撤销码盘
 * @param {Object} body - 请求参数
 * @param {string} [body.bindRecordId] - 码盘主键
 * @param {number} [body.bindCancleType] - 托盘取消枚举
 * @param {string} [body.tagNumber] - 标签号
*/
export const postBindrecordCanclebindrecord = (body, options = {}) => {
 return api({
  url: `/api/app/bind-record/cancle-bind-record`,
  method: "post",
  data: body,
  ...options
 });
};

