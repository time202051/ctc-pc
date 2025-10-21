/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 创建样件收货订单
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.id] - 
 * @param {string} [body.tagNumber] - 标签号
 * @param {string} [body.stockInOrderStateStr] - 入库订单状态
 * @param {number} [body.stockInOrderState] - 入库订单状态
 * @param {string} [body.billNo] - 入库单号
 * @param {string} [body.company] - 公司
 * @param {string} [body.wareHouseName] - 仓库
 * @param {string} [body.customProductCode] - 零件号
 * @param {string} [body.productId] - 
 * @param {string} [body.productCode] - 零件号
 * @param {string} [body.productName] - 零件名称
 * @param {number} [body.qty] - 收货数量
 * @param {number} [body.assembledQty] - 已组盘数量
 * @param {string} [body.statusDescription] - 状态描述
 * @param {string} [body.unit] - 单位
 * @param {string} [body.unitId] - 
 * @param {string} [body.projectId] - 
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {number} [body.projectStatus] - 保密等级枚举值
 * @param {string} [body.projectStatusStr] - 项目状态名称
 * @param {string} [body.tempProject] - 临时项目
 * @param {string} [body.receivedBatch] - 收货批次
 * @param {number} [body.tagPrintNumber] - 标签打印次数
 * @param {string} [body.employeeInfoId] - 接收人
 * @param {string} [body.receivedUser] - 
 * @param {string} [body.employeePhoneNumber] - 手机号
 * @param {string} [body.storageLocation] - 存放位置
 * @param {string} [body.storageLocationStr] - 存放位置名称
 * @param {string} [body.remark] - 单据备注
 * @param {string} [body.createdBy] - 创建人
 * @param {string} [body.createdTime] - 创建时间
*/
export const postStockin = (body, options = {}) => {
 return api({
  url: `/api/app/stock-in/stock-in`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 收货订单更新
 * @param {Object} params - 请求参数
 * @param {string} params.stockInId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.id] - 
 * @param {string} [body.tagNumber] - 标签号
 * @param {string} [body.stockInOrderStateStr] - 入库订单状态
 * @param {number} [body.stockInOrderState] - 入库订单状态
 * @param {string} [body.billNo] - 入库单号
 * @param {string} [body.company] - 公司
 * @param {string} [body.wareHouseName] - 仓库
 * @param {string} [body.customProductCode] - 零件号
 * @param {string} [body.productId] - 
 * @param {string} [body.productCode] - 零件号
 * @param {string} [body.productName] - 零件名称
 * @param {number} [body.qty] - 收货数量
 * @param {number} [body.assembledQty] - 已组盘数量
 * @param {string} [body.statusDescription] - 状态描述
 * @param {string} [body.unit] - 单位
 * @param {string} [body.unitId] - 
 * @param {string} [body.projectId] - 
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {number} [body.projectStatus] - 保密等级枚举值
 * @param {string} [body.projectStatusStr] - 项目状态名称
 * @param {string} [body.tempProject] - 临时项目
 * @param {string} [body.receivedBatch] - 收货批次
 * @param {number} [body.tagPrintNumber] - 标签打印次数
 * @param {string} [body.employeeInfoId] - 接收人
 * @param {string} [body.receivedUser] - 
 * @param {string} [body.employeePhoneNumber] - 手机号
 * @param {string} [body.storageLocation] - 存放位置
 * @param {string} [body.storageLocationStr] - 存放位置名称
 * @param {string} [body.remark] - 单据备注
 * @param {string} [body.createdBy] - 创建人
 * @param {string} [body.createdTime] - 创建时间
*/
export const putStockinByStockInId = (stockInId, body, options = {}) => {
 return api({
  url: `/api/app/stock-in/stock-in/${stockInId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取样件收货订单详情信息
 * @param {Object} params - 请求参数
 * @param {string} params.stockInId - 
*/
export const getStockinByStockInId = (stockInId, options = {}) => {
 return api({
  url: `/api/app/stock-in/stock-in/${stockInId}`,
  method: "get",
  ...options
 });
};

/**
 * 删除收货订单
 * @param {Object} params - 请求参数
 * @param {string} params.stockInId - 
*/
export const deleteStockinByStockInId = (stockInId, options = {}) => {
 return api({
  url: `/api/app/stock-in/stock-in/${stockInId}`,
  method: "del",
  ...options
 });
};

/**
 * 分页查询样件收货订单
 * @param {Object} params - 请求参数
 * @param {string} [params.StockInId] - 入库单Id
 * @param {string} [params.TagNumber] - 标签号
 * @param {string} [params.ProductCode] - 零件号
 * @param {string} [params.ProjectCode] - 项目号
 * @param {string} [params.StatusDescription] - 状态描述
 * @param {number} [params.StockInOrderState] - 订单状态
 * @param {string} [params.ProductName] - 零件名称
 * @param {string} [params.ProjectName] - 项目名称
 * @param {string} [params.TempProject] - 临时项目
 * @param {string} [params.ProductBatch] - 物料批次
 * @param {string} [params.ReceivedBatch] - 收货批次
 * @param {number} [params.TagPrintNumber] - 标签打印次数
 * @param {string} [params.BillNo] - 通知单号
 * @param {string} [params.OrginalBillNo] - 来源单号
 * @param {string} [params.ProdcutCode] - 物料描述
 * @param {number} [params.OrderBusinessType] - 业务类型
 * @param {string} [params.CreateUserId] - 创建人
 * @param {Array} [params.BoxCodes] - 入库明细箱码集合
 * @param {string} [params.BoxCode] - 箱号
 * @param {string} [params.SupplierId] - 
 * @param {string} [params.SupplierCode] - 供应商编码
 * @param {Array} [params.SubtrayCodes] - 子容器号List
 * @param {string} [params.SupplierBatch] - 供应商批次
 * @param {string} [params.ReferenceCode] - 参考号
 * @param {string} [params.SubtrayCode] - 子托盘号
 * @param {string} [params.CreatedBy] - 创建人
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockinPagedresult = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/paged-result`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 审核收货订单
 * @param {Array<string>} body - 数组类型的入参
*/
export const postStockinAuditstockin = (body, options = {}) => {
 return api({
  url: `/api/app/stock-in/audit-stock-in`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 批量删除收货订单
 * @param {Object} body - 请求参数
 * @param {Array} [body.stockInIdList] - 
*/
export const postStockinBatchdeletestockin = (options = {}) => {
 return api({
  url: `/api/app/stock-in/batch-delete-stock-in`,
  method: "post",
  ...options
 });
};

/**
 * 打印收货订单标签
 * @param {Object} params - 请求参数
 * @param {string} params.stockInId - 
*/
export const postStockinPrintlabelByStockInId = (stockInId, options = {}) => {
 return api({
  url: `/api/app/stock-in/print-label/${stockInId}`,
  method: "post",
  ...options
 });
};

/**
 * 批量打印收货单标签
 * @param {Object} body - 请求参数
 * @param {Array} [body.stockInIds] - 
*/
export const postStockinBatchprintlabel = (options = {}) => {
 return api({
  url: `/api/app/stock-in/batch-print-label`,
  method: "post",
  ...options
 });
};

/**
 * 收货订单导入模板下载
*/
export const postStockinImporttemplatestockin = (options = {}) => {
 return api({
  url: `/api/app/stock-in/import-template-stock-in`,
  method: "post",
  ...options
 });
};

/**
 * 收货订单导入
*/
export const postStockinImportstockin = (options = {}) => {
 return api({
  url: `/api/app/stock-in/import-stock-in`,
  method: "post",
  ...options
 });
};

/**
 * 样件收货单导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.stockInId] - 入库单Id
 * @param {string} [body.tagNumber] - 标签号
 * @param {string} [body.productCode] - 零件号
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.statusDescription] - 状态描述
 * @param {number} [body.stockInOrderState] - 入库订单状态
 * @param {string} [body.productName] - 零件名称
 * @param {string} [body.projectName] - 项目名称
 * @param {string} [body.tempProject] - 临时项目
 * @param {string} [body.productBatch] - 物料批次
 * @param {string} [body.receivedBatch] - 收货批次
 * @param {number} [body.tagPrintNumber] - 标签打印次数
 * @param {string} [body.billNo] - 通知单号
 * @param {string} [body.orginalBillNo] - 来源单号
 * @param {string} [body.prodcutCode] - 物料描述
 * @param {number} [body.orderBusinessType] - 业务类型枚举
 * @param {string} [body.createUserId] - 创建人
 * @param {Array} [body.boxCodes] - 入库明细箱码集合
 * @param {string} [body.boxCode] - 箱号
 * @param {string} [body.supplierId] - 
 * @param {string} [body.supplierCode] - 供应商编码
 * @param {Array} [body.subtrayCodes] - 子容器号List
 * @param {string} [body.supplierBatch] - 供应商批次
 * @param {string} [body.referenceCode] - 参考号
 * @param {string} [body.subtrayCode] - 子托盘号
 * @param {string} [body.createdBy] - 创建人
*/
export const postStockinExportstockin = (body, options = {}) => {
 return api({
  url: `/api/app/stock-in/export-stock-in`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 复制收货单
 * @param {Object} params - 请求参数
 * @param {string} params.id - 
*/
export const postStockinByIdCopystockin = (id, options = {}) => {
 return api({
  url: `/api/app/stock-in/${id}/copy-stock-in`,
  method: "post",
  ...options
 });
};

/**
 * 判断收货单的项目、样件是否为新数据
 * @param {Object} params - 请求参数
 * @param {string} [params.projectCode] - 
 * @param {string} [params.productCode] - 
*/
export const getStockinCheckisnewrecord = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/check-is-new-record`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据项目号或零件号精确获取收货单列表
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockinStockinlistbyprojectcodeproductcode = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/stock-in-list-by-projectcode-productcode`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取物料信息下拉框
 * @param {Object} params - 请求参数
 * @param {string} [params.productCode] - 
 * @param {string} [params.compareKey] - 
*/
export const getStockinProductselect = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/product-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 零件下拉
 * @param {Object} params - 请求参数
 * @param {string} [params.keyword] - 
 * @param {string} [params.compareKey] - 
*/
export const getStockinProductselectwithcodename = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/product-select-with-code-name`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取供应商信息下拉框
 * @param {Object} params - 请求参数
 * @param {string} [params.supplierCode] - 
 * @param {string} [params.compareKey] - 
*/
export const getStockinSupplierselect = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/supplier-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取码盘记录汇总数据
 * @param {Object} params - 请求参数
 * @param {string} [params.TagNumber] - 标签号（样件是入库标签号，车身是车身标签号）
 * @param {string} [params.ProductCode] - 物料编码
 * @param {string} [params.ContainerCode] - 容器编码
 * @param {string} [params.Batch] - 批次号
 * @param {string} [params.ProductName] - 物料名称
 * @param {string} [params.BillNo] - 流水码
 * @param {string} [params.OrginalBillNo] - 流水码
 * @param {string} [params.SubtrayCode] - 子托盘号
 * @param {number} [params.BindStateEnum] - 码盘状态
 * @param {string} [params.RegionId] - 上架区域
 * @param {number} [params.GroundShelfType] - 上架类型
 * @param {string} [params.BusinessTaskId] - 任务id
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockinBindrecordpages = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/bind-record-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取物料详情
 * @param {Object} params - 请求参数
 * @param {string} [params.OrginalBillNo] - 来源单号
 * @param {string} [params.ContainerCode] - 容器编码
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockinBindcontainerinfo = (params, options = {}) => {
 return api({
  url: `/api/app/stock-in/bind-container-info`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 码盘记录明细导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.tagNumber] - 标签号（样件是入库标签号，车身是车身标签号）
 * @param {string} [body.productCode] - 物料编码
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.batch] - 批次号
 * @param {string} [body.productName] - 物料名称
 * @param {string} [body.billNo] - 流水码
 * @param {string} [body.orginalBillNo] - 流水码
 * @param {string} [body.subtrayCode] - 子托盘号
 * @param {number} [body.bindStateEnum] - 码盘状态
 * @param {string} [body.regionId] - 上架区域
 * @param {number} [body.groundShelfType] - 上架类型
 * @param {string} [body.businessTaskId] - 任务id
*/
export const postStockinExportbindrecorddetail = (body, options = {}) => {
 return api({
  url: `/api/app/stock-in/export-bind-record-detail`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 码盘记录汇总导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.tagNumber] - 标签号（样件是入库标签号，车身是车身标签号）
 * @param {string} [body.productCode] - 物料编码
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.batch] - 批次号
 * @param {string} [body.productName] - 物料名称
 * @param {string} [body.billNo] - 流水码
 * @param {string} [body.orginalBillNo] - 流水码
 * @param {string} [body.subtrayCode] - 子托盘号
 * @param {number} [body.bindStateEnum] - 码盘状态
 * @param {string} [body.regionId] - 上架区域
 * @param {number} [body.groundShelfType] - 上架类型
 * @param {string} [body.businessTaskId] - 任务id
*/
export const postStockinExportbindrecord = (body, options = {}) => {
 return api({
  url: `/api/app/stock-in/export-bind-record`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 撤销码盘
 * @param {Object} body - 请求参数
 * @param {string} [body.bindRecordId] - 码盘主键
 * @param {number} [body.bindCancleType] - 托盘取消枚举
 * @param {string} [body.tagNumber] - 标签号
*/
export const postStockinCanclebindrecord = (body, options = {}) => {
 return api({
  url: `/api/app/stock-in/cancle-bind-record`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 补发
 * @param {Array<string>} body - 数组类型的入参
*/
export const postStockinResend = (body, options = {}) => {
 return api({
  url: `/api/app/stock-in/re-send`,
  method: "post",
  data: body,
  ...options
 });
};

