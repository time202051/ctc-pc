/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取所有枚举信息
*/
export const getPublicenumEnums = (options = {}) => {
 return api({
  url: `/api/app/public-enum/enums`,
  method: "get",
  ...options
 });
};

/**
 * 获取单个枚举
 * @param {Object} params - 请求参数
 * @param {string} [params.key] - 
*/
export const getPublicenumSingleenum = (params, options = {}) => {
 return api({
  url: `/api/app/public-enum/single-enum`,
  method: "get",
  params,
  ...options
 });
};

