/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 获取库存分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.ProductCode] - 零件编码
 * @param {string} [params.ProductName] - 零件名称
 * @param {string} [params.CustomProductCode] - 客户件号
 * @param {string} [params.RegionCode] - 区域编码
 * @param {string} [params.RegionId] - 区域id
 * @param {string} [params.CargoLocationCode] - 库位编码
 * @param {string} [params.CreateTimeBegin] - 创建时间开始
 * @param {string} [params.CreateTimeEnd] - 创建时间结束
 * @param {string} [params.ProductBatch] - 物料批次
 * @param {string} [params.ProjectCode] - 项目号
 * @param {string} [params.ProjectName] - 项目名称
 * @param {string} [params.ExactProjectCode] - 项目号(精确)
 * @param {string} [params.EmployeeInfoCode] - 接收人编号
 * @param {string} [params.EmployeeName] - PE
 * @param {number} [params.InformationEnum] - 库存状态
 * @param {string} [params.BoxCode] - 箱卡号
 * @param {string} [params.ContainerCode] - 容器编码
 * @param {string} [params.ContainerId] - 容器id
 * @param {string} [params.ContainerTypeId] - 容器类型Id
 * @param {string} [params.SubtrayCode] - 子容器号
 * @param {Array} [params.SubtrayCodes] - 子容器号List
 * @param {number} [params.StockType] - 库存类型
 * @param {string} [params.CarBodyTagNumber] - 车身标签号
 * @param {string} [params.StockOutBillNo] - 出库单号
 * @param {string} [params.TempDate] - 
 * @param {boolean} [params.IsExpired] - 是否过期
 * @param {boolean} [params.IsInStock] - 是否是库内库存
 * @param {string} [params.ExpiredTimeBegin] - 到期时间-开始
 * @param {string} [params.ExpiredTimeEnd] - 到期时间-结束
 * @param {boolean} [params.MinQuantity] - 可用库存数量要大于0
 * @param {string} [params.ProductId] - 物料Id
 * @param {string} [params.WarehouseId] - 仓库
 * @param {string} [params.RoadWayId] - 巷道id
 * @param {string} [params.RoadWayCode] - 巷道编码
 * @param {string} [params.ReceivingTime] - 收货日期
 * @param {string} [params.ReferenceCode] - 参考号
 * @param {boolean} [params.IsNoStock] - 是否寄售库存
 * @param {string} [params.Remark] - 备注
 * @param {boolean} [params.HasBoxCode] - 是否有箱卡号
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockStockpages = (params, options = {}) => {
 return api({
  url: `/api/app/stock/stock-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 手动出库
 * @param {Object} params - 请求参数
 * @param {string} params.stockId - 
*/
export const postStockOutwarehousebystockidByStockId = (stockId, options = {}) => {
 return api({
  url: `/api/app/stock/out-ware-house-by-stock-id/${stockId}`,
  method: "post",
  ...options
 });
};

/**
 * 选择出库查看货物的出库库位
*/
export const getStockOutwarehousetoseecargo = (options = {}) => {
 return api({
  url: `/api/app/stock/out-warehouse-tosee-cargo`,
  method: "get",
  ...options
 });
};

/**
 * 出库查看
 * @param {Object} body - 请求参数
 * @param {string} [body.stockId] - 库存Id
 * @param {string} [body.regionId] - 出库区域Id
 * @param {string} [body.cargoLocationId] - 库位Id
*/
export const postStockOutwarehousetosee = (body, options = {}) => {
 return api({
  url: `/api/app/stock/out-warehouse-tosee`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 申请报废
 * @param {Object} body - 请求参数
 * @param {Array} [body.stockIdList] - 库存Id
 * @param {string} [body.inspectorId] - 检测工程师Id
 * @param {number} [body.approvalScrapType] - 报废类型 1选中库存报废  2选中库存整托报废
*/
export const postStockApprovalscrap = (body, options = {}) => {
 return api({
  url: `/api/app/stock/approval-scrap`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 修改库存对应的PE
 * @param {Object} body - 请求参数
 * @param {string} [body.employeeId] - PE员工Id
 * @param {Array} [body.stockIdList] - 库存Id集合
*/
export const postStockModifystockemployee = (body, options = {}) => {
 return api({
  url: `/api/app/stock/modify-stock-employee`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取过期库存分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.ProductCode] - 零件编码
 * @param {string} [params.ProductName] - 零件名称
 * @param {string} [params.CustomProductCode] - 客户件号
 * @param {string} [params.RegionCode] - 区域编码
 * @param {string} [params.RegionId] - 区域id
 * @param {string} [params.CargoLocationCode] - 库位编码
 * @param {string} [params.CreateTimeBegin] - 创建时间开始
 * @param {string} [params.CreateTimeEnd] - 创建时间结束
 * @param {string} [params.ProductBatch] - 物料批次
 * @param {string} [params.ProjectCode] - 项目号
 * @param {string} [params.ProjectName] - 项目名称
 * @param {string} [params.ExactProjectCode] - 项目号(精确)
 * @param {string} [params.EmployeeInfoCode] - 接收人编号
 * @param {string} [params.EmployeeName] - PE
 * @param {number} [params.InformationEnum] - 库存状态
 * @param {string} [params.BoxCode] - 箱卡号
 * @param {string} [params.ContainerCode] - 容器编码
 * @param {string} [params.ContainerId] - 容器id
 * @param {string} [params.ContainerTypeId] - 容器类型Id
 * @param {string} [params.SubtrayCode] - 子容器号
 * @param {Array} [params.SubtrayCodes] - 子容器号List
 * @param {number} [params.StockType] - 库存类型
 * @param {string} [params.CarBodyTagNumber] - 车身标签号
 * @param {string} [params.StockOutBillNo] - 出库单号
 * @param {string} [params.TempDate] - 
 * @param {boolean} [params.IsExpired] - 是否过期
 * @param {boolean} [params.IsInStock] - 是否是库内库存
 * @param {string} [params.ExpiredTimeBegin] - 到期时间-开始
 * @param {string} [params.ExpiredTimeEnd] - 到期时间-结束
 * @param {boolean} [params.MinQuantity] - 可用库存数量要大于0
 * @param {string} [params.ProductId] - 物料Id
 * @param {string} [params.WarehouseId] - 仓库
 * @param {string} [params.RoadWayId] - 巷道id
 * @param {string} [params.RoadWayCode] - 巷道编码
 * @param {string} [params.ReceivingTime] - 收货日期
 * @param {string} [params.ReferenceCode] - 参考号
 * @param {boolean} [params.IsNoStock] - 是否寄售库存
 * @param {string} [params.Remark] - 备注
 * @param {boolean} [params.HasBoxCode] - 是否有箱卡号
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockExpiredstockpages = (params, options = {}) => {
 return api({
  url: `/api/app/stock/expired-stock-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 过期库存导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.productCode] - 零件编码
 * @param {string} [body.productName] - 零件名称
 * @param {string} [body.customProductCode] - 客户件号
 * @param {string} [body.regionCode] - 区域编码
 * @param {string} [body.regionId] - 区域id
 * @param {string} [body.cargoLocationCode] - 库位编码
 * @param {string} [body.createTimeBegin] - 创建时间开始
 * @param {string} [body.createTimeEnd] - 创建时间结束
 * @param {string} [body.productBatch] - 物料批次
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {string} [body.exactProjectCode] - 项目号(精确)
 * @param {string} [body.employeeInfoCode] - 接收人编号
 * @param {string} [body.employeeName] - PE
 * @param {number} [body.informationEnum] - 质检状态
 * @param {string} [body.boxCode] - 箱卡号
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.containerId] - 容器id
 * @param {string} [body.containerTypeId] - 容器类型Id
 * @param {string} [body.subtrayCode] - 子容器号
 * @param {Array} [body.subtrayCodes] - 子容器号List
 * @param {number} [body.stockType] - 库存类别
 * @param {string} [body.carBodyTagNumber] - 车身标签号
 * @param {string} [body.stockOutBillNo] - 出库单号
 * @param {string} [body.tempDate] - 
 * @param {boolean} [body.isExpired] - 是否过期
 * @param {boolean} [body.isInStock] - 是否是库内库存
 * @param {string} [body.expiredTimeBegin] - 到期时间-开始
 * @param {string} [body.expiredTimeEnd] - 到期时间-结束
 * @param {boolean} [body.minQuantity] - 可用库存数量要大于0
 * @param {string} [body.productId] - 物料Id
 * @param {string} [body.warehouseId] - 仓库
 * @param {string} [body.roadWayId] - 巷道id
 * @param {string} [body.roadWayCode] - 巷道编码
 * @param {string} [body.receivingTime] - 收货日期
 * @param {string} [body.referenceCode] - 参考号
 * @param {boolean} [body.isNoStock] - 是否寄售库存
 * @param {string} [body.remark] - 备注
 * @param {boolean} [body.hasBoxCode] - 是否有箱卡号
*/
export const postStockExportexpiredstock = (body, options = {}) => {
 return api({
  url: `/api/app/stock/export-expired-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 冻结库存
 * @param {Array<string>} body - 数组类型的入参
*/
export const postStockFreezestock = (body, options = {}) => {
 return api({
  url: `/api/app/stock/freeze-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 解冻库存
 * @param {Array<string>} body - 数组类型的入参
*/
export const postStockUnfreezestock = (body, options = {}) => {
 return api({
  url: `/api/app/stock/un-freeze-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * VMI隔离/放行
 * @param {Object} params - 请求参数
 * @param {number} [params.type] - 类型
 * @param {Array<string>} body - 数组类型的入参
*/
export const postStockChangevmistock = (params, body, options = {}) => {
 return api({
  url: `/api/app/stock/change-vmi-stock`,
  method: "post",
  params,
  data: body,
  ...options
 });
};

/**
 * 获取库存流水分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.ProductCode] - 零件编码
 * @param {string} [params.ProductName] - 零件名称
 * @param {string} [params.RegionCode] - 区域编码
 * @param {string} [params.RegionId] - 区域id
 * @param {string} [params.CargoLocationCode] - 库位编码
 * @param {string} [params.CreateTimeBegin] - 创建时间开始
 * @param {string} [params.CreateTimeEnd] - 创建时间结束
 * @param {string} [params.ProductBatch] - 物料批次
 * @param {string} [params.ProjectCode] - 项目号
 * @param {number} [params.InformationEnum] - 箱号状态
 * @param {string} [params.BoxCode] - 箱卡号
 * @param {string} [params.ContainerCode] - 容器编码
 * @param {string} [params.ContainerId] - 容器id
 * @param {string} [params.SubtrayCode] - 子容器号
 * @param {Array} [params.SubtrayCodes] - 子容器号List
 * @param {number} [params.StockType] - 库存类型
 * @param {string} [params.TagNumber] - 标签号
 * @param {string} [params.BatchNo] - 物料批次
 * @param {string} [params.OrginalBillNo] - 来源单号
 * @param {number} [params.HistoryType] - 库存流水类型
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockStockhistorypages = (params, options = {}) => {
 return api({
  url: `/api/app/stock/stock-history-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 库存导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.productCode] - 零件编码
 * @param {string} [body.productName] - 零件名称
 * @param {string} [body.customProductCode] - 客户件号
 * @param {string} [body.regionCode] - 区域编码
 * @param {string} [body.regionId] - 区域id
 * @param {string} [body.cargoLocationCode] - 库位编码
 * @param {string} [body.createTimeBegin] - 创建时间开始
 * @param {string} [body.createTimeEnd] - 创建时间结束
 * @param {string} [body.productBatch] - 物料批次
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.projectName] - 项目名称
 * @param {string} [body.exactProjectCode] - 项目号(精确)
 * @param {string} [body.employeeInfoCode] - 接收人编号
 * @param {string} [body.employeeName] - PE
 * @param {number} [body.informationEnum] - 质检状态
 * @param {string} [body.boxCode] - 箱卡号
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.containerId] - 容器id
 * @param {string} [body.containerTypeId] - 容器类型Id
 * @param {string} [body.subtrayCode] - 子容器号
 * @param {Array} [body.subtrayCodes] - 子容器号List
 * @param {number} [body.stockType] - 库存类别
 * @param {string} [body.carBodyTagNumber] - 车身标签号
 * @param {string} [body.stockOutBillNo] - 出库单号
 * @param {string} [body.tempDate] - 
 * @param {boolean} [body.isExpired] - 是否过期
 * @param {boolean} [body.isInStock] - 是否是库内库存
 * @param {string} [body.expiredTimeBegin] - 到期时间-开始
 * @param {string} [body.expiredTimeEnd] - 到期时间-结束
 * @param {boolean} [body.minQuantity] - 可用库存数量要大于0
 * @param {string} [body.productId] - 物料Id
 * @param {string} [body.warehouseId] - 仓库
 * @param {string} [body.roadWayId] - 巷道id
 * @param {string} [body.roadWayCode] - 巷道编码
 * @param {string} [body.receivingTime] - 收货日期
 * @param {string} [body.referenceCode] - 参考号
 * @param {boolean} [body.isNoStock] - 是否寄售库存
 * @param {string} [body.remark] - 备注
 * @param {boolean} [body.hasBoxCode] - 是否有箱卡号
*/
export const postStockExportstock = (body, options = {}) => {
 return api({
  url: `/api/app/stock/export-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 库存流水导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.productCode] - 零件编码
 * @param {string} [body.productName] - 零件名称
 * @param {string} [body.regionCode] - 区域编码
 * @param {string} [body.regionId] - 区域id
 * @param {string} [body.cargoLocationCode] - 库位编码
 * @param {string} [body.createTimeBegin] - 创建时间开始
 * @param {string} [body.createTimeEnd] - 创建时间结束
 * @param {string} [body.productBatch] - 物料批次
 * @param {string} [body.projectCode] - 项目号
 * @param {number} [body.informationEnum] - 质检状态
 * @param {string} [body.boxCode] - 箱卡号
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.containerId] - 容器id
 * @param {string} [body.subtrayCode] - 子容器号
 * @param {Array} [body.subtrayCodes] - 子容器号List
 * @param {number} [body.stockType] - 库存类别
 * @param {string} [body.tagNumber] - 标签号
 * @param {string} [body.batchNo] - 物料批次
 * @param {string} [body.orginalBillNo] - 来源单号
 * @param {number} [body.historyType] - 库存流水类别
*/
export const postStockExportstockhistory = (body, options = {}) => {
 return api({
  url: `/api/app/stock/export-stock-history`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 修改库存数据的过期时间
 * @param {Object} body - 请求参数
 * @param {Array} [body.ids] - 数据Id
 * @param {string} [body.expireTime] - 过期时间
*/
export const putStockStockexpiretime = (body, options = {}) => {
 return api({
  url: `/api/app/stock/stock-expire-time`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 手动出库
 * @param {Object} params - 请求参数
 * @param {string} [params.stockIds] - 库存ID列表
*/
export const postStockManualstockout = (params, options = {}) => {
 return api({
  url: `/api/app/stock/manual-stock-out`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getStockStockstateselect = (params, options = {}) => {
 return api({
  url: `/api/app/stock/stock-state-select`,
  method: "get",
  params,
  ...options
 });
};

