/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 系统接口日志
 * @param {Object} params - 请求参数
 * @param {string} [params.StartTime] - 开始时间
 * @param {string} [params.EndTime] - 结束时间
 * @param {string} [params.Url] - 接口地址
 * @param {string} [params.UserName] - 用户名
 * @param {string} [params.ClientIpAddress] - IP地址
 * @param {boolean} [params.HasException] - 是否有异常
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getAuditloggingAuditlogpages = (params, options = {}) => {
 return api({
  url: `/api/app/audit-logging/audit-log-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 系统接口明细日志
 * @param {Object} params - 请求参数
 * @param {string} params.auditId - 
*/
export const getAuditloggingAuditlogactionByAuditId = (auditId, options = {}) => {
 return api({
  url: `/api/app/audit-logging/audit-log-action/${auditId}`,
  method: "get",
  ...options
 });
};

