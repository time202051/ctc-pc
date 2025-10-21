/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 生成余料回库任务
 * @param {Object} params - 请求参数
 * @param {string} [params.containerCode] - 
*/
export const postInoutstockservicehelperGeneraterestock = (params, options = {}) => {
 return api({
  url: `/api/app/in-out-stock-service-helper/generate-restock`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 下发WCS任务
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.concurrencyStamp] - 
 * @param {string} [body.creationTime] - 
 * @param {string} [body.creatorId] - 
 * @param {string} [body.lastModificationTime] - 
 * @param {string} [body.lastModifierId] - 
 * @param {boolean} [body.isDeleted] - 
 * @param {string} [body.deleterId] - 
 * @param {string} [body.deletionTime] - 
 * @param {string} [body.taskNo] - 
 * @param {number} [body.interactionSystem] - 交互系统
 * @param {number} [body.taskStatus] - 任务状态
 * @param {number} [body.taskType] - 业务类型
 * @param {number} [body.taskNode] - 
 * @param {number} [body.taskNature] - 任务性质
 * @param {string} [body.regionId] - 
 * @param {string} [body.regionCode] - 
 * @param {Object} [body.region] - 
 * @param {string} [body.containerType] - 
 * @param {string} [body.containerTypeId] - 
 * @param {string} [body.containerId] - 
 * @param {Object} [body.container] - 
 * @param {string} [body.containerCode] - 
 * @param {Object} [body.getCargoLocation] - 
 * @param {string} [body.getCargoLocationId] - 
 * @param {string} [body.getCargoLocationCode] - 
 * @param {Object} [body.putCargoLocation] - 
 * @param {string} [body.putCargoLocationId] - 
 * @param {string} [body.putCargoLocationCode] - 
 * @param {string} [body.getRoadWayCode] - 
 * @param {string} [body.getRoadWayId] - 
 * @param {Object} [body.getRoadWay] - 
 * @param {string} [body.putRoadWayCode] - 
 * @param {string} [body.putRoadWayId] - 
 * @param {Object} [body.putRoadWay] - 
 * @param {number} [body.priorty] - 
 * @param {number} [body.palletQty] - 
 * @param {string} [body.downTaskTime] - 
 * @param {string} [body.comletedTime] - 
 * @param {number} [body.requestCount] - 
 * @param {number} [body.taskReponse] - 响应结果
 * @param {boolean} [body.isTwine] - 
 * @param {number} [body.highlyType] - 
 * @param {number} [body.weight] - 
 * @param {number} [body.palletType] - 
 * @param {string} [body.agvTaskType] - 
 * @param {string} [body.productId] - 
 * @param {Object} [body.product] - 
 * @param {string} [body.remark] - 
 * @param {boolean} [body.isWcsReceive] - 
 * @param {boolean} [body.needDownTask] - 
 * @param {string} [body.robotCode] - 
 * @param {string} [body.originCode] - 
 * @param {string} [body.rawCargoLocationId] - 
 * @param {string} [body.pointCode] - 
 * @param {string} [body.currentPositionCode] - 
 * @param {string} [body.errorMessage] - 
 * @param {string} [body.scanContainerCode] - 
 * @param {string} [body.mrsSourceTaskNo] - 
*/
export const postInoutstockservicehelperDownwcstask = (body, options = {}) => {
 return api({
  url: `/api/app/in-out-stock-service-helper/down-wcs-task`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 批量下发WCS任务
 * @param {Array<string>} body - 数组类型的入参
*/
export const postInoutstockservicehelperDownbatchwcstask = (body, options = {}) => {
 return api({
  url: `/api/app/in-out-stock-service-helper/down-batch-wcs-task`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 取消WCS任务
 * @param {Object} params - 请求参数
 * @param {string} [params.taskNo] - 
*/
export const postInoutstockservicehelperCancelwcstask = (params, options = {}) => {
 return api({
  url: `/api/app/in-out-stock-service-helper/cancel-wcs-task`,
  method: "post",
  params,
  ...options
 });
};

