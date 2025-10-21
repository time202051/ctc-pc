/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 根据名称查询员工信息（若不填写名称则是全量）
 * @param {Object} params - 请求参数
 * @param {string} [params.employeeName] - 
*/
export const getEmployeeinfoEmployeeinfobyname = (params, options = {}) => {
 return api({
  url: `/api/app/employee-info/employee-info-by-name`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据职员信息数据id查询职员
 * @param {Object} params - 请求参数
 * @param {string} params.employeeInfoId - 
*/
export const getEmployeeinfoEmployeebyidByEmployeeInfoId = (employeeInfoId, options = {}) => {
 return api({
  url: `/api/app/employee-info/employee-by-id/${employeeInfoId}`,
  method: "get",
  ...options
 });
};

/**
 * 分页查询职员信息数据
 * @param {Object} params - 请求参数
 * @param {string} [params.EmployeeCode] - 职员编码
 * @param {string} [params.EmployeeName] - 职员名称
 * @param {string} [params.EmployeePhoneNumber] - 手机号
 * @param {number} [params.EnableStatus] - 启用状态
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getEmployeeinfoPagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/employee-info/paged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 新增职员信息
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 职员信息数据Id
 * @param {string} [body.employeeCode] - 职员编码
 * @param {string} [body.employeeName] - 职员名称
 * @param {string} [body.employeePhoneNumber] - 手机号
 * @param {number} [body.enableStatus] - 关闭状态枚举值
 * @param {string} [body.enableStatusStr] - 
 * @param {string} [body.createdBy] - 创建人
 * @param {string} [body.createdTime] - 创建时间
*/
export const postEmployeeinfo = (body, options = {}) => {
 return api({
  url: `/api/app/employee-info/employee-info`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑职员信息
 * @param {Object} params - 请求参数
 * @param {string} params.employeeInfoId - 
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 职员信息数据Id
 * @param {string} [body.employeeCode] - 职员编码
 * @param {string} [body.employeeName] - 职员名称
 * @param {string} [body.employeePhoneNumber] - 手机号
 * @param {number} [body.enableStatus] - 关闭状态枚举值
 * @param {string} [body.enableStatusStr] - 
 * @param {string} [body.createdBy] - 创建人
 * @param {string} [body.createdTime] - 创建时间
*/
export const putEmployeeinfoByEmployeeInfoId = (employeeInfoId, body, options = {}) => {
 return api({
  url: `/api/app/employee-info/employee-info/${employeeInfoId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 职员信息导入
*/
export const postEmployeeinfoImportemployeeinfo = (options = {}) => {
 return api({
  url: `/api/app/employee-info/import-employee-info`,
  method: "post",
  ...options
 });
};

/**
 * 职员信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.employeeCode] - 职员编码
 * @param {string} [body.employeeName] - 职员名称
 * @param {string} [body.employeePhoneNumber] - 手机号
 * @param {number} [body.enableStatus] - 关闭状态枚举值
*/
export const postEmployeeinfoExportemployeeinfo = (body, options = {}) => {
 return api({
  url: `/api/app/employee-info/export-employee-info`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 职员信息导入模板下载
*/
export const postEmployeeinfoDownemployeeinfo = (options = {}) => {
 return api({
  url: `/api/app/employee-info/down-employee-info`,
  method: "post",
  ...options
 });
};

