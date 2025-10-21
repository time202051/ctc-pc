/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取接口信息
 * @param {Object} params - 请求参数
 * @param {string} [params.path] - 路由
*/
export const getApidescription = (params, options = {}) => {
 return api({
  url: `/api/app/api-description/api-description`,
  method: "get",
  params,
  ...options
 });
};

