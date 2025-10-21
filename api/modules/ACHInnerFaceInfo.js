/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取TB号
 * @param {Object} params - 请求参数
 * @param {string} [params.TpType] - TP类型
 * @param {number} [params.Number] - 数量
*/
export const getAcHInnerfaceinfoAcHTbnumber = (params, options = {}) => {
 return api({
  url: `/api/app/a-cHInner-face-info/a-cHTb-number`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取箱卡数据
 * @param {Object} params - 请求参数
 * @param {string} [params.boxCardCode] - 箱卡编码
*/
export const getAcHInnerfaceinfoAcHBoxdata = (params, options = {}) => {
 return api({
  url: `/api/app/a-cHInner-face-info/a-cHBox-data`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建箱卡信息
 * @param {Object} body - 请求参数
 * @param {number} [body.boxId] - 箱号ID
 * @param {string} [body.so] - SO编号
 * @param {string} [body.to] - TO编号
 * @param {string} [body.projectName] - 项目名称
 * @param {string} [body.peName] - PE名称
 * @param {string} [body.pePhone] - PE电话
 * @param {string} [body.owner] - 所有者
 * @param {string} [body.tcName] - TC名称
 * @param {Array} [body.tpList] - TP列表
*/
export const postAcHInnerfaceinfoAcHBoxdata = (body, options = {}) => {
 return api({
  url: `/api/app/a-cHInner-face-info/a-cHBox-data`,
  method: "post",
  data: body,
  ...options
 });
};

