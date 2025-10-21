/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 入场信息（车身追溯）创建
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.admissionInfoId] - 入场信息Id
 * @param {string} [body.carBodyTagNumber] - 标签号
 * @param {number} [body.tagStatus] - 标签状态枚举
 * @param {string} [body.tagStatusStr] - 
 * @param {string} [body.company] - 公司
 * @param {string} [body.wareHouseName] - 仓库
 * @param {string} [body.frameNumber] - 车架号
 * @param {number} [body.bodyWorkType] - 车身类别枚举
 * @param {string} [body.bodyWorkTypeStr] - 车身类型名称
 * @param {string} [body.regionName] - 区域
 * @param {string} [body.cargoLocationCode] - 库位编码
 * @param {number} [body.qty] - 数量
 * @param {number} [body.statusDescription1] - 车身状态描述1
 * @param {string} [body.statusDescription1Str] - 状态描述1名称
 * @param {string} [body.statusDescription2] - 状态描述2
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {number} [body.projectStatus] - 保密等级枚举值
 * @param {string} [body.projectStatusStr] - 项目状态名称
 * @param {string} [body.tempProject] - 临时项目
 * @param {string} [body.customerName] - 客户名称
 * @param {string} [body.admissionDate] - 入场日期
 * @param {number} [body.experimentStatus] - 实验状态枚举
 * @param {string} [body.experimentStatusStr] - 
 * @param {number} [body.tagPrintNumber] - 标签打印次数
 * @param {string} [body.employeeInfoId] - 接收人
 * @param {string} [body.receivedUser] - 
 * @param {string} [body.employeePhoneNumber] - 
 * @param {string} [body.carNumber] - 车型编号
 * @param {string} [body.storageLocation] - 存放位置
 * @param {string} [body.storageLocationStr] - 存放位置名称
 * @param {string} [body.containerCodeStr] - 承载容器号
 * @param {string} [body.agvTaskNo] - RCS关联任务号
 * @param {string} [body.wcsTaskNo] - WCS关联任务号
 * @param {string} [body.otherRemark] - 其他备注
 * @param {string} [body.createdBy] - 创建人
 * @param {string} [body.auditUser] - 审核人
 * @param {string} [body.createdTime] - 创建时间
*/
export const postAdmissioninfo = (body, options = {}) => {
 return api({
  url: `/api/app/admission-info/admission-info`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 入场信息（车身追溯）更新
 * @param {Object} params - 请求参数
 * @param {string} params.admissionId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.admissionInfoId] - 入场信息Id
 * @param {string} [body.carBodyTagNumber] - 标签号
 * @param {number} [body.tagStatus] - 标签状态枚举
 * @param {string} [body.tagStatusStr] - 
 * @param {string} [body.company] - 公司
 * @param {string} [body.wareHouseName] - 仓库
 * @param {string} [body.frameNumber] - 车架号
 * @param {number} [body.bodyWorkType] - 车身类别枚举
 * @param {string} [body.bodyWorkTypeStr] - 车身类型名称
 * @param {string} [body.regionName] - 区域
 * @param {string} [body.cargoLocationCode] - 库位编码
 * @param {number} [body.qty] - 数量
 * @param {number} [body.statusDescription1] - 车身状态描述1
 * @param {string} [body.statusDescription1Str] - 状态描述1名称
 * @param {string} [body.statusDescription2] - 状态描述2
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {number} [body.projectStatus] - 保密等级枚举值
 * @param {string} [body.projectStatusStr] - 项目状态名称
 * @param {string} [body.tempProject] - 临时项目
 * @param {string} [body.customerName] - 客户名称
 * @param {string} [body.admissionDate] - 入场日期
 * @param {number} [body.experimentStatus] - 实验状态枚举
 * @param {string} [body.experimentStatusStr] - 
 * @param {number} [body.tagPrintNumber] - 标签打印次数
 * @param {string} [body.employeeInfoId] - 接收人
 * @param {string} [body.receivedUser] - 
 * @param {string} [body.employeePhoneNumber] - 
 * @param {string} [body.carNumber] - 车型编号
 * @param {string} [body.storageLocation] - 存放位置
 * @param {string} [body.storageLocationStr] - 存放位置名称
 * @param {string} [body.containerCodeStr] - 承载容器号
 * @param {string} [body.agvTaskNo] - RCS关联任务号
 * @param {string} [body.wcsTaskNo] - WCS关联任务号
 * @param {string} [body.otherRemark] - 其他备注
 * @param {string} [body.createdBy] - 创建人
 * @param {string} [body.auditUser] - 审核人
 * @param {string} [body.createdTime] - 创建时间
*/
export const putAdmissioninfoByAdmissionId = (admissionId, body, options = {}) => {
 return api({
  url: `/api/app/admission-info/admission-info/${admissionId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取入场信息（车身追溯）详情信息
 * @param {Object} params - 请求参数
 * @param {string} params.admissionInfoId - 
*/
export const getAdmissioninfoByAdmissionInfoId = (admissionInfoId, options = {}) => {
 return api({
  url: `/api/app/admission-info/admission-info/${admissionInfoId}`,
  method: "get",
  ...options
 });
};

/**
 * 删除入场信息
 * @param {Object} params - 请求参数
 * @param {string} params.admissionInfoId - 
*/
export const deleteAdmissioninfoByAdmissionInfoId = (admissionInfoId, options = {}) => {
 return api({
  url: `/api/app/admission-info/admission-info/${admissionInfoId}`,
  method: "del",
  ...options
 });
};

/**
 * 分页查询入场信息
 * @param {Object} params - 请求参数
 * @param {string} [params.CarBodyTagNumber] - 车身标签号
 * @param {string} [params.FrameNumber] - 车架号
 * @param {string} [params.ProjectCode] - 项目号
 * @param {string} [params.ProjectName] - 项目名称
 * @param {string} [params.TempProject] - 临时项目
 * @param {number} [params.ExperimentStatus] - 实验状态
 * @param {number} [params.TagStatus] - 标签状态
 * @param {number} [params.BodyWorkType] - 车身类型
 * @param {string} [params.AdmissionDate] - 入场日期
 * @param {number} [params.StatusDescription] - 状态描述1
 * @param {number} [params.TagPrintNumber] - 标签打印次数
 * @param {string} [params.CargoLocationCode] - 库位编码
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getAdmissioninfoPagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/admission-info/paged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 审核入场信息
 * @param {Array<string>} body - 数组类型的入参
*/
export const postAdmissioninfoAuditadmissioninfo = (body, options = {}) => {
 return api({
  url: `/api/app/admission-info/audit-admission-info`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 打印入场信息标签
 * @param {Object} params - 请求参数
 * @param {string} params.admissionInfoId - 
*/
export const postAdmissioninfoPrintlabelByAdmissionInfoId = (admissionInfoId, options = {}) => {
 return api({
  url: `/api/app/admission-info/print-label/${admissionInfoId}`,
  method: "post",
  ...options
 });
};

/**
 * 导出入场信息
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.carBodyTagNumber] - 车身标签号
 * @param {string} [body.frameNumber] - 车架号
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {string} [body.tempProject] - 临时项目
 * @param {number} [body.experimentStatus] - 实验状态枚举
 * @param {number} [body.tagStatus] - 标签状态枚举
 * @param {number} [body.bodyWorkType] - 车身类别枚举
 * @param {string} [body.admissionDate] - 入场日期
 * @param {number} [body.statusDescription] - 车身状态描述1
 * @param {number} [body.tagPrintNumber] - 标签打印次数
 * @param {string} [body.cargoLocationCode] - 库位编码
*/
export const postAdmissioninfoExportstock = (body, options = {}) => {
 return api({
  url: `/api/app/admission-info/export-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 终处理入场信息
 * @param {Object} params - 请求参数
 * @param {number} [params.tagStatus] - 
 * @param {Array<string>} body - 数组类型的入参
*/
export const putAdmissioninfoFinalprocessedadmissioninfo = (params, body, options = {}) => {
 return api({
  url: `/api/app/admission-info/final-processed-admission-info`,
  method: "put",
  params,
  data: body,
  ...options
 });
};

/**
 * 获取入场信息tb号
*/
export const getAdmissioninfoAdmissioninfotbnumber = (options = {}) => {
 return api({
  url: `/api/app/admission-info/admission-info-tbnumber`,
  method: "get",
  ...options
 });
};

/**
 * 上传车身登记表
 * @param {Object} params - 请求参数
 * @param {string} params.id - 
*/
export const postAdmissioninfoByIdUploadfile = (id, options = {}) => {
 return api({
  url: `/api/app/admission-info/${id}/upload-file`,
  method: "post",
  ...options
 });
};

/**
 * 下载车身登记表
 * @param {Object} params - 请求参数
 * @param {string} params.id - 
*/
export const postAdmissioninfoByIdDownfile = (id, options = {}) => {
 return api({
  url: `/api/app/admission-info/${id}/down-file`,
  method: "post",
  ...options
 });
};

/**
 * 根据车身标签号或车架号获取入场信息（车身追溯信息）
 * @param {Object} params - 请求参数
 * @param {string} [params.number] - 
*/
export const getAdmissioninfoAdmissioninfobytagnumberframenumber = (params, options = {}) => {
 return api({
  url: `/api/app/admission-info/admission-info-by-tagnumber-framenumber`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 判断入场信息的项目是否为新数据
 * @param {Object} params - 请求参数
 * @param {string} [params.projectCode] - 
*/
export const getAdmissioninfoCheckisnewrecord = (params, options = {}) => {
 return api({
  url: `/api/app/admission-info/check-is-new-record`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取虚拟库位（存放位置）
*/
export const getAdmissioninfoVirtualcargolocation = (options = {}) => {
 return api({
  url: `/api/app/admission-info/virtual-cargo-location`,
  method: "get",
  ...options
 });
};

/**
 * 根据名称模糊搜索外仓库位（传空则显示全部）
 * @param {Object} params - 请求参数
 * @param {string} [params.name] - 
*/
export const getAdmissioninfoVirtualcargo = (params, options = {}) => {
 return api({
  url: `/api/app/admission-info/virtual-cargo`,
  method: "get",
  params,
  ...options
 });
};

