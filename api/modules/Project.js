/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 通过项目号模糊搜索项目信息
 * @param {Object} params - 请求参数
 * @param {string} [params.projectCode] - 
*/
export const getProjectProjectlistbycode = (params, options = {}) => {
 return api({
  url: `/api/app/project/project-list-by-code`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取全部的项目
*/
export const getProjectProjectlist = (options = {}) => {
 return api({
  url: `/api/app/project/project-list`,
  method: "get",
  ...options
 });
};

/**
 * 获取全部的项目(去除本身)
 * @param {Object} params - 请求参数
 * @param {string} params.projectInfoId - 
*/
export const getProjectProjectlistnotselfByProjectInfoId = (projectInfoId, options = {}) => {
 return api({
  url: `/api/app/project/project-list-not-self/${projectInfoId}`,
  method: "get",
  ...options
 });
};

/**
 * 分页查询项目信息数据
 * @param {Object} params - 请求参数
 * @param {string} [params.ProjectCode] - 项目号
 * @param {string} [params.ProjectName] - 项目名称
 * @param {number} [params.ProjectStatus] - 保密等级
 * @param {number} [params.EnableStatus] - 关闭状态
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getProjectPagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/project/paged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 新增项目信息
 * @param {Object} body - 请求参数
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {number} [body.projectStatus] - 保密等级枚举值
 * @param {number} [body.enableStatus] - 关闭状态枚举值
*/
export const postProject = (body, options = {}) => {
 return api({
  url: `/api/app/project/project`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑项目信息
 * @param {Object} params - 请求参数
 * @param {string} params.projectInfoId - 
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {number} [body.projectStatus] - 保密等级枚举值
 * @param {number} [body.enableStatus] - 关闭状态枚举值
 * @param {string} [body.enableStatusStr] - 
 * @param {string} [body.createdBy] - 创建人
 * @param {string} [body.createdTime] - 创建时间
*/
export const putProjectByProjectInfoId = (projectInfoId, body, options = {}) => {
 return api({
  url: `/api/app/project/project/${projectInfoId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除项目
 * @param {Object} params - 请求参数
 * @param {string} params.projectInfoId - 
*/
export const deleteProjectByProjectInfoId = (projectInfoId, options = {}) => {
 return api({
  url: `/api/app/project/project/${projectInfoId}`,
  method: "del",
  ...options
 });
};

/**
 * 批量关闭项目
 * @param {Array<string>} body - 数组类型的入参
*/
export const postProjectBatchcloseproject = (body, options = {}) => {
 return api({
  url: `/api/app/project/batch-close-project`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 关闭项目
 * @param {Object} params - 请求参数
 * @param {string} params.projectInfoId - 
*/
export const postProjectCloseprojectByProjectInfoId = (projectInfoId, options = {}) => {
 return api({
  url: `/api/app/project/close-project/${projectInfoId}`,
  method: "post",
  ...options
 });
};

/**
 * 启用项目
 * @param {Object} params - 请求参数
 * @param {string} params.projectInfoId - 
*/
export const postProjectOpenprojectByProjectInfoId = (projectInfoId, options = {}) => {
 return api({
  url: `/api/app/project/open-project/${projectInfoId}`,
  method: "post",
  ...options
 });
};

/**
 * 余料转移
 * @param {Object} body - 请求参数
 * @param {string} [body.beforeProjectInfoId] - 
 * @param {string} [body.afterProjectInfoId] - 
*/
export const postProjectTransferremnants = (body, options = {}) => {
 return api({
  url: `/api/app/project/transfer-remnants`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 项目信息导入
*/
export const postProjectImportprojectinfo = (options = {}) => {
 return api({
  url: `/api/app/project/import-project-info`,
  method: "post",
  ...options
 });
};

