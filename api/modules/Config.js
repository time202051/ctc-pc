/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取后台工作配置分页信息
 * @param {Object} params - 请求参数
 * @param {number} [params.MaxResultCount] - 
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
*/
export const getConfigBackgroundworkerconfigpages = (params, options = {}) => {
 return api({
  url: `/api/app/config/background-worker-config-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 改变后台工作任务启用状态
 * @param {Object} params - 请求参数
 * @param {string} [params.bwid] - 
*/
export const postConfigChangedbackgroundworkerconfigenabled = (params, options = {}) => {
 return api({
  url: `/api/app/config/changed-background-worker-config-enabled`,
  method: "post",
  params,
  ...options
 });
};

