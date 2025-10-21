/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 查询巷道接驳口模式
 * @param {Object} params - 请求参数
 * @param {string} [params.roadWayCode] - 巷道编码
*/
export const postPdatranshipmodeQuerylanewaymode = (params, options = {}) => {
 return api({
  url: `/api/app/pda-tran-ship-mode/query-lane-way-mode`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 修改巷道接驳口模式
 * @param {Object} body - 请求参数
 * @param {string} body.roadWayCode - 巷道编码
 * @param {string} body.deviceCode - 设备编码
 * @param {number} body.mode - 模式
0 无模式
1 入库
2 出库
3 拣选
*/
export const postPdatranshipmodeChangelanewaytranshipmode = (body, options = {}) => {
 return api({
  url: `/api/app/pda-tran-ship-mode/change-lane-way-tran-ship-mode`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取全部巷道及其接驳口模式信息
*/
export const getPdatranshipmodeLanewaymodes = (options = {}) => {
 return api({
  url: `/api/app/pda-tran-ship-mode/lane-way-modes`,
  method: "get",
  ...options
 });
};

