/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 分页查询当日库存报表数据
 * @param {Object} params - 请求参数
 * @param {string} [params.Date] - 日期
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getBusinessreportStockbIPagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/business-report/stock-bIPaged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 导出当日库存报表数据
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.date] - 日期
*/
export const postBusinessreportExportstockbI = (body, options = {}) => {
 return api({
  url: `/api/app/business-report/export-stock-bI`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 生成库存报表数据
 * @param {Object} params - 请求参数
 * @param {string} [params.dateStr] - 
*/
export const postBusinessreportGeneratestockbI = (params, options = {}) => {
 return api({
  url: `/api/app/business-report/generate-stock-bI`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 分页查询设备异常信息报表数据
 * @param {Object} params - 请求参数
 * @param {number} [params.DeviceReportType] - 设备报表类型：1 日报 2 时报
 * @param {string} [params.Day] - 日期
 * @param {string} [params.DeviceNo] - 设备号
 * @param {string} [params.DeviceName] - 设备名称
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getBusinessreportDevicebIPagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/business-report/device-bIPaged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 导出设备异常信息报表数据
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {number} [body.deviceReportType] - 设备报表类型枚举值
 * @param {string} [body.day] - 日期
 * @param {string} [body.deviceNo] - 设备号
 * @param {string} [body.deviceName] - 设备名称
*/
export const postBusinessreportExportdevicebI = (body, options = {}) => {
 return api({
  url: `/api/app/business-report/export-device-bI`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 生成设备异常信息报表数据
 * @param {Object} params - 请求参数
 * @param {string} [params.dateStr] - 
*/
export const postBusinessreportGeneratedevicebI = (params, options = {}) => {
 return api({
  url: `/api/app/business-report/generate-device-bI`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 分页查询设备异常报警详情数据
 * @param {Object} params - 请求参数
 * @param {string} [params.Day] - 日期
 * @param {string} [params.Code] - 编码
 * @param {string} [params.Name] - 名称
 * @param {string} [params.FaultCode] - 故障代码
 * @param {string} [params.FaultInfo] - 故障信息
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getBusinessreportDevicereportdetailpagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/business-report/device-report-detail-paged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 导出设备异常报警详情数据
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.day] - 日期
 * @param {string} [body.code] - 编码
 * @param {string} [body.name] - 名称
 * @param {string} [body.faultCode] - 故障代码
 * @param {string} [body.faultInfo] - 故障信息
*/
export const postBusinessreportExportdevicereportdetail = (body, options = {}) => {
 return api({
  url: `/api/app/business-report/export-device-report-detail`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 生成设备异常报警详情数据
 * @param {Object} params - 请求参数
 * @param {string} [params.dateStr] - 
*/
export const postBusinessreportGeneratedevicebIDetail = (params, options = {}) => {
 return api({
  url: `/api/app/business-report/generate-device-bIDetail`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 分页查询出入库订单报表数据
 * @param {Object} params - 请求参数
 * @param {string} [params.BillNo] - 单号
 * @param {number} [params.OrderReportType] - 单据类型
 * @param {string} [params.So] - So
 * @param {string} [params.To] - To
 * @param {string} [params.PlanDateBegin] - 日期
 * @param {string} [params.PlanDateEnd] - 日期
 * @param {string} [params.RequiredDateBegin] - 日期
 * @param {string} [params.RequiredDateEnd] - 日期
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getBusinessreportOrderpagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/business-report/order-paged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 导出出入库订单报表数据
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.billNo] - 单号
 * @param {number} [body.orderReportType] - 样件单据报表类型
 * @param {string} [body.so] - So
 * @param {string} [body.to] - To
 * @param {string} [body.planDateBegin] - 日期
 * @param {string} [body.planDateEnd] - 日期
 * @param {string} [body.requiredDateBegin] - 日期
 * @param {string} [body.requiredDateEnd] - 日期
*/
export const postBusinessreportExportorder = (body, options = {}) => {
 return api({
  url: `/api/app/business-report/export-order`,
  method: "post",
  data: body,
  ...options
 });
};

