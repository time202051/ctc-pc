/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 申请入库任务
 * @param {Object} body - 请求参数
 * @param {string} [body.containerCode] - 容器编码
*/
export const postApiWcsApplyInTask = (options = {}) => {
 return api({
  url: `/api/Wcs/ApplyInTask`,
  method: "post",
  ...options
 });
};

/**
 * 获取可用货位
 * @param {Object} body - 请求参数
 * @param {string} [body.wmsTaskCode] - wcs任务号
 * @param {string} [body.laneWayCode] - 巷道编码
CTC	LW001	1巷道车身库
CTC LW002	2巷道车身库
CTC LW003	3巷道
CTC LW004	4巷道
 * @param {number} [body.serialNumber] - WCS任务流水号
*/
export const postApiWcsApplyFinalLocation = (body, options = {}) => {
 return api({
  url: `/api/Wcs/ApplyFinalLocation`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 任务回调
 * @param {Object} body - 请求参数
 * @param {string} [body.wmsTaskCode] - 任务号
*/
export const postApiWcsNoticeCompleteTask = (options = {}) => {
 return api({
  url: `/api/Wcs/NoticeCompleteTask`,
  method: "post",
  ...options
 });
};

/**
 * 申请是否允许执行出库
 * @param {Object} body - 请求参数
 * @param {string} [body.wmsTaskCode] - WMS任务编码
*/
export const postApiWcsApplyCanExecute = (options = {}) => {
 return api({
  url: `/api/Wcs/ApplyCanExecute`,
  method: "post",
  ...options
 });
};

/**
 * 回传入库异常信息
 * @param {Object} body - 请求参数
 * @param {string} [body.portCode] - 点位编码
 * @param {string} [body.errorMessage] - 异常信息
*/
export const postApiWcsNoticeEntranceError = (body, options = {}) => {
 return api({
  url: `/api/Wcs/NoticeEntranceError`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 申请取消任务
 * @param {Object} body - 请求参数
 * @param {Array} [body.wmsTaskCodeList] - 取消任务集合
*/
export const postApiWcsCancelTask = (options = {}) => {
 return api({
  url: `/api/Wcs/CancelTask`,
  method: "post",
  ...options
 });
};

/**
 * 申请空托盘入库
 * @param {Object} body - 请求参数
 * @param {string} [body.pointCode] - 发起入库点位
 * @param {number} [body.trayType] - 托盘类型
 * @param {Array} [body.availableChannelNoList] - 可用巷道列表
 * @param {Array} [body.disabledChannelNoList] - 不可用巷道列表
*/
export const postApiWcsApplyPalletGroupIn = (body, options = {}) => {
 return api({
  url: `/api/Wcs/ApplyPalletGroupIn`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 申请空托盘出库
 * @param {Object} body - 请求参数
 * @param {string} [body.pointCode] - 发起出库点位
 * @param {Array} [body.availableFloorNoList] - 可用层
 * @param {number} [body.trayType] - 托盘类型
 * @param {number} [body.trayCount] - 托盘数量
*/
export const postApiWcsApplyPalletGroupOut = (body, options = {}) => {
 return api({
  url: `/api/Wcs/ApplyPalletGroupOut`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 到达目标位置通知
 * @param {Object} body - 请求参数
 * @param {string} [body.serialNumber] - WCS流水号
 * @param {string} [body.wmsTaskCode] - WMS任务编码
 * @param {string} [body.portCode] - 点位编码
 * @param {string} [body.containerNo] - 容器号
*/
export const postApiWcsNoticeArrivedPort = (body, options = {}) => {
 return api({
  url: `/api/Wcs/NoticeArrivedPort`,
  method: "post",
  data: body,
  ...options
 });
};

