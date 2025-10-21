/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * AGV回调任务完成(MRS)
 * @param {Object} body - 请求参数
 * @param {string} [body.robotTaskCode] - 任务号
 * @param {string} [body.singleRobotCode] - agv车号
 * @param {Object} [body.extra] - 
*/
export const postApiOpenAgvCallback = (body, options = {}) => {
 return api({
  url: `/api/open/agv/callback`,
  method: "post",
  data: body,
  ...options
 });
};

