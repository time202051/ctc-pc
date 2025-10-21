/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取数据模板分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 
 * @param {boolean} [params.IsSystem] - 
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getPublicaggregateDatatemplatepages = (params, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/data-template-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建数据模板数据
 * @param {Object} body - 请求参数
 * @param {string} body.code - 编码
 * @param {string} body.displayName - 模板名称
 * @param {string} [body.remark] - 备注
*/
export const postPublicaggregateDatatemplate = (body, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/data-template`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 上传数据模板
 * @param {Object} params - 请求参数
 * @param {string} [params.dataTemplate] - 
*/
export const postPublicaggregateUploaddatatemplate = (params, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/upload-data-template`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 下载模板
 * @param {Object} params - 请求参数
 * @param {string} params.dataTemplateId - 
*/
export const getPublicaggregateDowndatatemplateByDataTemplateId = (dataTemplateId, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/down-data-template/${dataTemplateId}`,
  method: "get",
  ...options
 });
};

/**
 * 编辑数据模板
 * @param {Object} params - 请求参数
 * @param {string} params.dataTemplateId - 
 * @param {Object} body - 请求参数
 * @param {string} body.code - 编码
 * @param {string} body.displayName - 模板名称
 * @param {string} [body.remark] - 备注
*/
export const putPublicaggregateDatatemplateByDataTemplateId = (dataTemplateId, body, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/data-template/${dataTemplateId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除数据模板
 * @param {Object} params - 请求参数
 * @param {string} params.dataTemplateId - 
*/
export const deletePublicaggregateDatatemplateByDataTemplateId = (dataTemplateId, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/data-template/${dataTemplateId}`,
  method: "del",
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} [params.code] - 
*/
export const getPublicaggregateDictionaries = (params, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/dictionaries`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} [params.code] - 
*/
export const getPublicaggregateDictionarieslist = (params, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/dictionaries-list`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 
 * @param {string} [body.tenantId] - 
 * @param {string} [body.code] - 
 * @param {string} [body.valueOrDisplayName] - 
 * @param {string} [body.parentId] - 
*/
export const postPublicaggregateDic = (body, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/dic`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} [params.DicKey] - 
*/
export const getPublicaggregateDcibyid = (params, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/dci-by-id`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} [params.PraentKey] - 
*/
export const getPublicaggregateDicbyparentid = (params, options = {}) => {
 return api({
  url: `/api/app/public-aggregate/dic-by-parent-id`,
  method: "get",
  params,
  ...options
 });
};

