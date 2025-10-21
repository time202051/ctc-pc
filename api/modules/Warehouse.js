/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 供应商信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.supplierCode] - 供应商编码
 * @param {string} [body.supplierName] - 供应商名称
 * @param {string} [body.contacts] - 联系人
 * @param {string} [body.createdOn] - 创建时间
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportsupplier = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-supplier`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除供应商信息
 * @param {Object} params - 请求参数
 * @param {string} params.SupplierId - 
*/
export const deleteWarehouseSupplierBySupplierId = (SupplierId, options = {}) => {
 return api({
  url: `/api/app/warehouse/supplier/${SupplierId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑供应商信息
 * @param {Object} params - 请求参数
 * @param {string} params.SupplierId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.supplierCode - 供应商编码
 * @param {string} body.supplierName - 供应商名称
 * @param {string} [body.orgId] - 公司ID
 * @param {string} [body.contacts] - 联系人
 * @param {string} [body.telephone] - 联系电话
 * @param {string} [body.address] - 地址
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 备注
*/
export const putWarehouseSupplierBySupplierId = (SupplierId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/supplier/${SupplierId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取供应商分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.SupplierCode] - 供应商编码
 * @param {string} [params.SupplierName] - 供应商名称
 * @param {string} [params.Contacts] - 联系人
 * @param {string} [params.CreatedOn] - 创建时间
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseSupplierpages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/supplier-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取供应商下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseSupplierselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/supplier-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取公司下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseOrgselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/org-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.SupplierId - 
*/
export const getWarehouseSupplierbyidBySupplierId = (SupplierId, options = {}) => {
 return api({
  url: `/api/app/warehouse/supplier-by-id/${SupplierId}`,
  method: "get",
  ...options
 });
};

/**
 * 获取多深度通道下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseDepthwayselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/depth-way-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取多深度通道分页信息
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 通道编码
 * @param {string} [params.DepthWayName] - 通道名称
 * @param {string} [params.RegionId] - 通道区域
 * @param {boolean} [params.Enabled] - 通道状态
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseDepthwaypages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/depth-way-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建多深度通道信息
 * @param {Object} body - 请求参数
 * @param {string} body.code - 通道编码
 * @param {string} body.depthWayName - 通道名称
 * @param {number} [body.wayType] - 通道类型
 * @param {number} [body.wayInSort] - 
 * @param {number} [body.wayOutSort] - 
 * @param {boolean} [body.enabled] - 可用状态
 * @param {string} [body.remark] - 备注
*/
export const postWarehouseDepthway = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/depth-way`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑多深度通道信息
 * @param {Object} params - 请求参数
 * @param {string} params.DepthWayId - 
 * @param {Object} body - 请求参数
 * @param {string} body.code - 通道编码
 * @param {string} body.depthWayName - 通道名称
 * @param {number} [body.wayType] - 通道类型
 * @param {number} [body.wayInSort] - 
 * @param {number} [body.wayOutSort] - 
 * @param {boolean} [body.enabled] - 可用状态
 * @param {string} [body.remark] - 备注
*/
export const putWarehouseDepthwayByDepthWayId = (DepthWayId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/depth-way/${DepthWayId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除多深度通道信息
 * @param {Object} params - 请求参数
 * @param {string} params.DepthWayId - 
*/
export const deleteWarehouseDepthwayByDepthWayId = (DepthWayId, options = {}) => {
 return api({
  url: `/api/app/warehouse/depth-way/${DepthWayId}`,
  method: "del",
  ...options
 });
};

/**
 * 根据ID获取单条数据多深度通道信息
 * @param {Object} params - 请求参数
 * @param {string} params.DepthWayId - 
*/
export const getWarehouseRowdepthwaybyidByDepthWayId = (DepthWayId, options = {}) => {
 return api({
  url: `/api/app/warehouse/row-depth-way-by-id/${DepthWayId}`,
  method: "get",
  ...options
 });
};

/**
 * 多深度通道信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.code] - 通道编码
 * @param {string} [body.depthWayName] - 通道名称
 * @param {string} [body.regionId] - 通道区域
 * @param {boolean} [body.enabled] - 通道状态
*/
export const postWarehouseExportdepthway = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-depth-way`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取通道/货架下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseRoadwayselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/road-way-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取巷道分页信息
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 通道编码
 * @param {string} [params.RoadWayName] - 通道名称
 * @param {boolean} [params.Enabled] - 通道状态
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseRoadwaypages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/road-way-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建巷道信息
 * @param {Object} body - 请求参数
 * @param {string} body.code - 巷道编码
 * @param {string} body.roadWayName - 巷道名称
 * @param {string} [body.outPoint] - 出库点位
 * @param {string} [body.inPoint] - 入库点位
 * @param {boolean} [body.enabled] - 可用状态
 * @param {string} [body.regionId] - 区域ID
 * @param {string} [body.remark] - 备注
 * @param {string} [body.areaId] - 库区ID
 * @param {number} [body.maxCount] - 任务阈值（配置）
 * @param {number} [body.reserveCount] - 预留位数（配置）
*/
export const postWarehouseRoadway = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/road-way`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑巷道信息
 * @param {Object} params - 请求参数
 * @param {string} params.roadWayId - 
 * @param {Object} body - 请求参数
 * @param {string} body.code - 巷道编码
 * @param {string} body.roadWayName - 巷道名称
 * @param {string} [body.outPoint] - 出库点位
 * @param {string} [body.inPoint] - 入库点位
 * @param {boolean} [body.enabled] - 可用状态
 * @param {string} [body.regionId] - 区域ID
 * @param {string} [body.remark] - 备注
 * @param {string} [body.areaId] - 库区ID
 * @param {number} [body.maxCount] - 任务阈值（配置）
 * @param {number} [body.reserveCount] - 预留位数（配置）
*/
export const putWarehouseRoadwayByRoadWayId = (roadWayId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/road-way/${roadWayId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除巷道信息
 * @param {Object} params - 请求参数
 * @param {string} params.roadWayId - 
*/
export const deleteWarehouseRoadwayByRoadWayId = (roadWayId, options = {}) => {
 return api({
  url: `/api/app/warehouse/road-way/${roadWayId}`,
  method: "del",
  ...options
 });
};

/**
 * 根据ID获取单条数据通道信息
 * @param {Object} params - 请求参数
 * @param {string} params.roadWayId - 
*/
export const getWarehouseRowwaybyidByRoadWayId = (roadWayId, options = {}) => {
 return api({
  url: `/api/app/warehouse/row-way-by-id/${roadWayId}`,
  method: "get",
  ...options
 });
};

/**
 * 巷道信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.code] - 通道编码
 * @param {string} [body.roadWayName] - 通道名称
 * @param {boolean} [body.enabled] - 通道状态
*/
export const postWarehouseExportroadway = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-road-way`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 创建工作台
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.stagingCode - 工作台编码
 * @param {string} body.stagingName - 工作台名称
 * @param {number} [body.stagingType] - 工作台类型
 * @param {string} [body.point] - 点位
 * @param {string} [body.regionId] - 区域
 * @param {string} [body.remark] - 备注
 * @param {boolean} [body.enabled] - 
*/
export const postWarehouseStaging = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/staging`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 工作台信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.stagingCode] - 工作台编码
 * @param {string} [body.stagingName] - 工作台名称
 * @param {number} [body.stagingType] - 工作台类型
 * @param {boolean} [body.enabled] - 工作台状态
*/
export const postWarehouseExportstaging = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-staging`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除工作台信息
 * @param {Object} params - 请求参数
 * @param {string} params.StagingId - 
*/
export const deleteWarehouseStagingByStagingId = (StagingId, options = {}) => {
 return api({
  url: `/api/app/warehouse/staging/${StagingId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑工作台信息
 * @param {Object} params - 请求参数
 * @param {string} params.StagingId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.stagingCode - 工作台编码
 * @param {string} body.stagingName - 工作台名称
 * @param {number} [body.stagingType] - 工作台类型
 * @param {string} [body.point] - 点位
 * @param {string} [body.regionId] - 区域
 * @param {string} [body.remark] - 备注
 * @param {boolean} [body.enabled] - 
*/
export const putWarehouseStagingByStagingId = (StagingId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/staging/${StagingId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取工作台分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.StagingCode] - 工作台编码
 * @param {string} [params.StagingName] - 工作台名称
 * @param {number} [params.StagingType] - 工作台类型
 * @param {boolean} [params.Enabled] - 工作台状态
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseStagingpages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/staging-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取工作台下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseStagingselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/staging-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.StagingId - 
*/
export const getWarehouseStagingbyidByStagingId = (StagingId, options = {}) => {
 return api({
  url: `/api/app/warehouse/staging-by-id/${StagingId}`,
  method: "get",
  ...options
 });
};

/**
 * 用户绑定工作台
 * @param {Object} params - 请求参数
 * @param {string} [params.workbenchCode] - 
*/
export const postWarehouseUserbindwork = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/user-bind-work`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.warehouseId] - 
 * @param {string} [body.teamName] - 班组名称
 * @param {string} [body.workStartTime] - 
 * @param {string} [body.workEndTime] - 是否可用
 * @param {string} [body.remark] - 备注
*/
export const postWarehouseWorkscheduleplan = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/work-schedule-plan`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取排班计划数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.TeamName] - 班组名称
 * @param {string} [params.WarehouseId] - 
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseWorkscheduleplan = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/work-schedule-plan`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 删除排班计划
 * @param {Object} params - 请求参数
 * @param {string} params.workSchedulePlanId - 排班计划id
*/
export const postWarehouseDeletworkscheduleplanByWorkSchedulePlanId = (workSchedulePlanId, options = {}) => {
 return api({
  url: `/api/app/warehouse/delet-work-schedule-plan/${workSchedulePlanId}`,
  method: "post",
  ...options
 });
};

/**
 * 创建仓库
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.warehouseCode - 仓库编码
 * @param {string} body.warehouseName - 仓库名称
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} [body.remark] - 备注
*/
export const postWarehouse = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/warehouse`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 仓库信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.warehouseCode] - 仓库编码
 * @param {string} [body.warehouseName] - 仓库名称
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportwarehouse = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-warehouse`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除仓库信息
 * @param {Object} params - 请求参数
 * @param {string} params.warehouseId - 
*/
export const deleteWarehouseByWarehouseId = (warehouseId, options = {}) => {
 return api({
  url: `/api/app/warehouse/warehouse/${warehouseId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑仓库信息
 * @param {Object} params - 请求参数
 * @param {string} params.WarehouseId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.warehouseCode - 仓库编码
 * @param {string} body.warehouseName - 仓库名称
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} [body.remark] - 备注
*/
export const putWarehouseByWarehouseId = (WarehouseId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/warehouse/${WarehouseId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取仓库分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.WarehouseCode] - 仓库编码
 * @param {string} [params.WarehouseName] - 仓库名称
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseWarehousepages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/warehouse-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取仓库下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseWarehouseselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/warehouse-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.warehouseId - 
*/
export const getWarehouseWarehousebyidByWarehouseId = (warehouseId, options = {}) => {
 return api({
  url: `/api/app/warehouse/warehouse-by-id/${warehouseId}`,
  method: "get",
  ...options
 });
};

/**
 * 区域信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.code] - 区域编码
 * @param {string} [body.regionName] - 区域名称
 * @param {number} [body.regionAttributes] - 区域属性
 * @param {string} [body.warehouseId] - 仓库ID
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportregion = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-region`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取区域下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.warehouse] - 
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseRegionselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/region-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取 区域属性下拉框数据
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehouseRegionenumselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/region-enum-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取区域分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 区域编码
 * @param {string} [params.RegionName] - 区域名称
 * @param {number} [params.RegionAttributes] - 区域属性
 * @param {string} [params.WarehouseId] - 仓库ID
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseRegionpages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/region-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建区域
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.regionCode - 区域编码
 * @param {string} body.regionName - 区域名称
 * @param {number} body.regionAttributes - 区域属性
 * @param {string} body.warehouseId - 仓库ID
 * @param {boolean} [body.enabled] - 启用状态
 * @param {string} [body.remark] - 备注
*/
export const postWarehouseRegion = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/region`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑区域信息
 * @param {Object} params - 请求参数
 * @param {string} params.regionId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.regionCode - 区域编码
 * @param {string} body.regionName - 区域名称
 * @param {number} body.regionAttributes - 区域属性
 * @param {string} body.warehouseId - 仓库ID
 * @param {boolean} [body.enabled] - 启用状态
 * @param {string} [body.remark] - 备注
*/
export const putWarehouseRegionByRegionId = (regionId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/region/${regionId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除区域信息
 * @param {Object} params - 请求参数
 * @param {string} params.regionId - 
*/
export const deleteWarehouseRegionByRegionId = (regionId, options = {}) => {
 return api({
  url: `/api/app/warehouse/region/${regionId}`,
  method: "del",
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.RegionId - 
*/
export const getWarehouseRegionbyidByRegionId = (RegionId, options = {}) => {
 return api({
  url: `/api/app/warehouse/region-by-id/${RegionId}`,
  method: "get",
  ...options
 });
};

/**
 * 库区信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.code] - 库区编码
 * @param {string} [body.reservoirAreaName] - 库区名称
 * @param {string} [body.regionId] - 区域Id
 * @param {string} [body.gradeId] - 等级
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportarea = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-area`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取库区下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.region] - 区域ID
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseAreaselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/area-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取库区分页数据
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 库区编码
 * @param {string} [params.ReservoirAreaName] - 库区名称
 * @param {string} [params.RegionId] - 区域Id
 * @param {string} [params.GradeId] - 等级
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseAreapages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/area-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建库区
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.code - 库区编码
 * @param {string} body.areaName - 库区编码
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} body.regionId - 区域ID
 * @param {string} body.gradeId - 等级ID
 * @param {string} [body.remark] - 备注
*/
export const postWarehouseArea = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/area`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑库区
 * @param {Object} params - 请求参数
 * @param {string} params.areaId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.code - 库区编码
 * @param {string} body.areaName - 库区编码
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} body.regionId - 区域ID
 * @param {string} body.gradeId - 等级ID
 * @param {string} [body.remark] - 备注
*/
export const putWarehouseAreaByAreaId = (areaId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/area/${areaId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除库区
 * @param {Object} params - 请求参数
 * @param {string} params.areaId - 
*/
export const deleteWarehouseAreaByAreaId = (areaId, options = {}) => {
 return api({
  url: `/api/app/warehouse/area/${areaId}`,
  method: "del",
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.AreaId - 
*/
export const getWarehouseAreabyidByAreaId = (AreaId, options = {}) => {
 return api({
  url: `/api/app/warehouse/area-by-id/${AreaId}`,
  method: "get",
  ...options
 });
};

/**
 * 库位信息导入
*/
export const postWarehouseImportcargolocation = (options = {}) => {
 return api({
  url: `/api/app/warehouse/import-cargo-location`,
  method: "post",
  ...options
 });
};

/**
 * 获取库位类型下拉框数据
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehouseLocationtypeselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/location-type-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取库位分页数据
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 库位编码
 * @param {Array} [params.Codes] - 库位编码
 * @param {string} [params.WarehouseLocationName] - 库位名称
 * @param {number} [params.LocationType] - 货位类型
 * @param {string} [params.WarehouseId] - 仓库ID
 * @param {string} [params.RegionId] - 区域ID
 * @param {string} [params.AreaId] - 库区ID
 * @param {string} [params.RoadWayId] - 巷道/货架ID
 * @param {number} [params.UsageStatus] - 使用状态
 * @param {number} [params.LoadStatus] - 载货状态
 * @param {number} [params.LoadEmptyType] - 空托类型
 * @param {boolean} [params.IsLoadEmpty] - 是否承载空托盘
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.IPAddress] - 通讯IP地址
 * @param {string} [params.ContainerTypeId] - 容器类型主键
 * @param {string} [params.WorkbenchCode] - 工作台编码
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseCargolocationpages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/cargo-location-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建库位
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.warehouseLocationCode - 库位编码
 * @param {string} body.warehouseLocationName - 库位名称
 * @param {number} [body.layerNum] - 层号
 * @param {number} [body.floorNum] - 排号
 * @param {number} [body.columnNum] - 列号
 * @param {number} [body.height] - 库位高度（cm）
 * @param {number} [body.childColumnNum] - 子列号
 * @param {boolean} [body.allowBlendItem] - 是否允许混放
 * @param {number} [body.locationType] - 库位类型
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} [body.ipAddress] - 通讯IP地址
 * @param {string} [body.areaId] - 库区ID
 * @param {string} [body.roadWayId] - 巷道
 * @param {string} [body.depthWayId] - /通道
 * @param {string} [body.warehouseId] - 仓库id
 * @param {string} [body.regionId] - 区域id
 * @param {string} [body.stagingId] - 工作台
 * @param {number} [body.usageStatus] - 使用状态
 * @param {number} [body.loadStatus] - 载货状态
 * @param {boolean} [body.isMixingBatch] - 是否允许混放批次
 * @param {boolean} [body.isLoadEmpty] - 是否承载空托盘
 * @param {number} [body.loadEmptyType] - 
 * @param {string} [body.containerTypeId] - 容器类型ID
 * @param {string} [body.agvLargePoint] - 用来存放堆垛机的入库口的点位和出货口的点位(大点位)
 * @param {string} [body.agvMiddlePoint] - 用来存放堆垛机的入库口的点位和出货口的点位(中点位)
 * @param {string} [body.agvSmallPoint] - 用来存放堆垛机的入库口的点位和出货口的点位(小点位)
 * @param {string} [body.remark] - 备注
*/
export const postWarehouseCargolocation = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/cargo-location`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑库位
 * @param {Object} params - 请求参数
 * @param {string} params.cargoLocationId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.warehouseLocationCode - 库位编码
 * @param {string} body.warehouseLocationName - 库位名称
 * @param {number} [body.layerNum] - 层号
 * @param {number} [body.floorNum] - 排号
 * @param {number} [body.columnNum] - 列号
 * @param {number} [body.height] - 库位高度（cm）
 * @param {number} [body.childColumnNum] - 子列号
 * @param {boolean} [body.allowBlendItem] - 是否允许混放
 * @param {number} [body.locationType] - 库位类型
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} [body.ipAddress] - 通讯IP地址
 * @param {string} [body.areaId] - 库区ID
 * @param {string} [body.roadWayId] - 巷道
 * @param {string} [body.depthWayId] - /通道
 * @param {string} [body.warehouseId] - 仓库id
 * @param {string} [body.regionId] - 区域id
 * @param {string} [body.stagingId] - 工作台
 * @param {number} [body.usageStatus] - 使用状态
 * @param {number} [body.loadStatus] - 载货状态
 * @param {boolean} [body.isMixingBatch] - 是否允许混放批次
 * @param {boolean} [body.isLoadEmpty] - 是否承载空托盘
 * @param {number} [body.loadEmptyType] - 
 * @param {string} [body.containerTypeId] - 容器类型ID
 * @param {string} [body.agvLargePoint] - 用来存放堆垛机的入库口的点位和出货口的点位(大点位)
 * @param {string} [body.agvMiddlePoint] - 用来存放堆垛机的入库口的点位和出货口的点位(中点位)
 * @param {string} [body.agvSmallPoint] - 用来存放堆垛机的入库口的点位和出货口的点位(小点位)
 * @param {string} [body.remark] - 备注
*/
export const putWarehouseCargolocationByCargoLocationId = (cargoLocationId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/cargo-location/${cargoLocationId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除库位
 * @param {Object} params - 请求参数
 * @param {string} params.cargoLocationId - 
*/
export const deleteWarehouseCargolocationByCargoLocationId = (cargoLocationId, options = {}) => {
 return api({
  url: `/api/app/warehouse/cargo-location/${cargoLocationId}`,
  method: "del",
  ...options
 });
};

/**
 * 库位信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.code] - 库位编码
 * @param {Array} [body.codes] - 库位编码
 * @param {string} [body.warehouseLocationName] - 库位名称
 * @param {number} [body.locationType] - 库位类型
 * @param {string} [body.warehouseId] - 仓库ID
 * @param {string} [body.regionId] - 区域ID
 * @param {string} [body.areaId] - 库区ID
 * @param {string} [body.roadWayId] - 巷道/货架ID
 * @param {number} [body.usageStatus] - 使用状态
 * @param {number} [body.loadStatus] - 载货状态
 * @param {number} [body.loadEmptyType] - 
 * @param {boolean} [body.isLoadEmpty] - 是否承载空托盘
 * @param {boolean} [body.enabled] - 是否启用
 * @param {string} [body.ipAddress] - 通讯IP地址
 * @param {string} [body.containerTypeId] - 容器类型主键
 * @param {string} [body.workbenchCode] - 工作台编码
*/
export const postWarehouseExportcargolocation = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-cargo-location`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取库位下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.AreaKey] - 
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseCargolocationselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/cargo-location-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取库位下拉框数据区域为车身出库区域
*/
export const getWarehouseCargolocationselectbyregion = (options = {}) => {
 return api({
  url: `/api/app/warehouse/cargo-location-select-by-region`,
  method: "get",
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.CargoLocationId - 
*/
export const getWarehouseCargolocationbyidByCargoLocationId = (CargoLocationId, options = {}) => {
 return api({
  url: `/api/app/warehouse/cargo-location-by-id/${CargoLocationId}`,
  method: "get",
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} [params.warehouseCode] - 
 * @param {string} [params.areaCode] - 
*/
export const postWarehouseInitcargo = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/init-cargo`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 无描述
*/
export const postWarehouseInitpKCargo = (options = {}) => {
 return api({
  url: `/api/app/warehouse/init-pKCargo`,
  method: "post",
  ...options
 });
};

/**
 * 无描述
*/
export const postWarehouseInitsamplescargolocation = (options = {}) => {
 return api({
  url: `/api/app/warehouse/init-samples-cargo-location`,
  method: "post",
  ...options
 });
};

/**
 * 创建容器类型
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.containerTypeCode - 
 * @param {string} body.containerTypeName - 
 * @param {boolean} [body.isPileUp] - 是否碟盘
 * @param {number} [body.lang] - 长
 * @param {number} [body.height] - 高
 * @param {number} [body.width] - 宽
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 
*/
export const postWarehouseContainertype = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 容器类型信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.containerTypeCode] - 容器类型编码
 * @param {string} [body.containerTypeName] - 容器类型名称
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportcontainertype = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-container-type`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除容器类型信息
 * @param {Object} params - 请求参数
 * @param {string} params.ContainerTypeId - 
*/
export const deleteWarehouseContainertypeByContainerTypeId = (ContainerTypeId, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type/${ContainerTypeId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑容器类型信息
 * @param {Object} params - 请求参数
 * @param {string} params.ContainerTypeId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.containerTypeCode - 
 * @param {string} body.containerTypeName - 
 * @param {boolean} [body.isPileUp] - 是否碟盘
 * @param {number} [body.lang] - 长
 * @param {number} [body.height] - 高
 * @param {number} [body.width] - 宽
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 
*/
export const putWarehouseContainertypeByContainerTypeId = (ContainerTypeId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type/${ContainerTypeId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取容器类型分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.ContainerTypeCode] - 容器类型编码
 * @param {string} [params.ContainerTypeName] - 容器类型名称
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseContainertypepages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取容器类型下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseContainertypeselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取容器类型下拉框数据（获取编号开头为2的数据）
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseContainertypeselectbycode = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type-select-by-code`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取容器类型下拉框数据（获取编号开头为1的数据）
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseContainertypeselectbycode1 = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type-select-by-code1`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.ContainerTypeId - 
*/
export const getWarehouseContainertypebyidByContainerTypeId = (ContainerTypeId, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-type-by-id/${ContainerTypeId}`,
  method: "get",
  ...options
 });
};

/**
 * 导入容器信息
*/
export const postWarehouseImportcontainer = (options = {}) => {
 return api({
  url: `/api/app/warehouse/import-container`,
  method: "post",
  ...options
 });
};

/**
 * 初始化容器数据
*/
export const postWarehouseInitcontainer = (options = {}) => {
 return api({
  url: `/api/app/warehouse/init-container`,
  method: "post",
  ...options
 });
};

/**
 * 无描述
*/
export const postWarehouseInittestcontainer = (options = {}) => {
 return api({
  url: `/api/app/warehouse/init-test-container`,
  method: "post",
  ...options
 });
};

/**
 * 无描述
*/
export const postWarehouseInittestsamplescontainer = (options = {}) => {
 return api({
  url: `/api/app/warehouse/init-test-samples-container`,
  method: "post",
  ...options
 });
};

/**
 * 容器信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.code] - 容器编码
 * @param {string} [body.containerName] - 容器名称
 * @param {number} [body.containerShapeType] - 容器属性
 * @param {string} [body.containerTypeId] - 容器类型
 * @param {number} [body.usageStatus] - 使用状态
 * @param {number} [body.loadStatus] - 载货状态
 * @param {boolean} [body.enabled] - 容器状态
 * @param {string} [body.cargoLocationCode] - 容器库位
*/
export const postWarehouseExportcontainer = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-container`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取容器属性 枚举下拉框数据
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehouseContainershapetypeselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-shape-type-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 使用状态下拉
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehouseUsagestatusselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/usage-status-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取承载状态下拉框数据
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehouseLoadstatusselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/load-status-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取容器分页信息数据
 * @param {Object} params - 请求参数
 * @param {string} [params.Code] - 容器编码
 * @param {string} [params.ContainerName] - 容器名称
 * @param {number} [params.ContainerShapeType] - 容器属性
 * @param {string} [params.ContainerTypeId] - 容器类型
 * @param {number} [params.UsageStatus] - 容器使用状态
 * @param {number} [params.LoadStatus] - 容器承载状态
 * @param {boolean} [params.Enabled] - 容器状态
 * @param {string} [params.CargoLocationCode] - 容器库位
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseContainerpages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建容器信息
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.code - 容器名称
 * @param {string} body.containerName - 容器名称
 * @param {number} body.containerShapeType - 容器属性
 * @param {number} body.usageStatus - 使用状态
 * @param {number} body.loadStatus - 载货状态
 * @param {boolean} body.enabled - 是否可用
 * @param {string} [body.remark] - 备注
 * @param {string} [body.containerTypeId] - 容器类型ID
 * @param {string} [body.regionId] - 区域Id
 * @param {string} [body.araeId] - 库区ID
 * @param {string} [body.cargoLocationId] - 库位ID
 * @param {number} [body.maxvolume] - 最大体积
 * @param {number} [body.maxWeight] - 最大重量
 * @param {number} [body.maxCount] - 最大数量
*/
export const postWarehouseContainer = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/container`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑容器信息
 * @param {Object} params - 请求参数
 * @param {string} params.containerId - 容器ID
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.code - 容器名称
 * @param {string} body.containerName - 容器名称
 * @param {number} body.containerShapeType - 容器属性
 * @param {number} body.usageStatus - 使用状态
 * @param {number} body.loadStatus - 载货状态
 * @param {boolean} body.enabled - 是否可用
 * @param {string} [body.remark] - 备注
 * @param {string} [body.containerTypeId] - 容器类型ID
 * @param {string} [body.regionId] - 区域Id
 * @param {string} [body.araeId] - 库区ID
 * @param {string} [body.cargoLocationId] - 库位ID
 * @param {number} [body.maxvolume] - 最大体积
 * @param {number} [body.maxWeight] - 最大重量
 * @param {number} [body.maxCount] - 最大数量
*/
export const putWarehouseContainerByContainerId = (containerId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/container/${containerId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除容器信息
 * @param {Object} params - 请求参数
 * @param {string} params.containerId - 容器ID
*/
export const deleteWarehouseContainerByContainerId = (containerId, options = {}) => {
 return api({
  url: `/api/app/warehouse/container/${containerId}`,
  method: "del",
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.ContainerId - 
*/
export const getWarehouseContainerbyidByContainerId = (ContainerId, options = {}) => {
 return api({
  url: `/api/app/warehouse/container-by-id/${ContainerId}`,
  method: "get",
  ...options
 });
};

/**
 * 创建等级
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.gradeCode - 
 * @param {string} body.gradeName - 
 * @param {number} body.priority - 优先级
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 
*/
export const postWarehouseGrade = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/grade`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 等级信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.gradeCode] - 等级编码
 * @param {string} [body.gradeName] - 等级名称
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportgrade = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-grade`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除等级信息
 * @param {Object} params - 请求参数
 * @param {string} params.GradeId - 
*/
export const deleteWarehouseGradeByGradeId = (GradeId, options = {}) => {
 return api({
  url: `/api/app/warehouse/grade/${GradeId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑等级信息
 * @param {Object} params - 请求参数
 * @param {string} params.GradeId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.gradeCode - 
 * @param {string} body.gradeName - 
 * @param {number} body.priority - 优先级
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 
*/
export const putWarehouseGradeByGradeId = (GradeId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/grade/${GradeId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取等级分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.GradeCode] - 等级编码
 * @param {string} [params.GradeName] - 等级名称
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseGradepages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/grade-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取等级下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseGradeselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/grade-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.GradeId - 
*/
export const getWarehouseGradebyidByGradeId = (GradeId, options = {}) => {
 return api({
  url: `/api/app/warehouse/grade-by-id/${GradeId}`,
  method: "get",
  ...options
 });
};

/**
 * 创建出入库点位
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.pointCode - 点位编码
 * @param {string} [body.pointName] - 点位名称
 * @param {number} [body.pointType] - 点位性质
 * @param {boolean} [body.enabled] - 启用状态
 * @param {string} [body.regionId] - 区域ID
 * @param {string} [body.eequipmentPoint] - 设备点位
 * @param {string} [body.groupPoint] - 组点位
 * @param {string} [body.remark] - 备注
*/
export const postWarehousePoint = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/point`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 出入库点位信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.pointCode] - 点位编码
 * @param {string} [body.pointName] - 点位名称
 * @param {number} [body.pointType] - 点位性质
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportpoint = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-point`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除出入库点位信息
 * @param {Object} params - 请求参数
 * @param {string} params.PointId - 
*/
export const deleteWarehousePointByPointId = (PointId, options = {}) => {
 return api({
  url: `/api/app/warehouse/point/${PointId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑出入库点位信息
 * @param {Object} params - 请求参数
 * @param {string} params.PointId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.pointCode - 点位编码
 * @param {string} [body.pointName] - 点位名称
 * @param {number} [body.pointType] - 点位性质
 * @param {boolean} [body.enabled] - 启用状态
 * @param {string} [body.regionId] - 区域ID
 * @param {string} [body.eequipmentPoint] - 设备点位
 * @param {string} [body.groupPoint] - 组点位
 * @param {string} [body.remark] - 备注
*/
export const putWarehousePointByPointId = (PointId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/point/${PointId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取出入库点位分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.PointCode] - 点位编码
 * @param {string} [params.PointName] - 点位名称
 * @param {number} [params.PointType] - 点位类型
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehousePointpages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/point-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取出入库点位下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehousePointselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/point-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取点位类型下拉框数据
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehousePointtypeselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/point-type-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.PointId - 
*/
export const getWarehousePointbyidByPointId = (PointId, options = {}) => {
 return api({
  url: `/api/app/warehouse/point-by-id/${PointId}`,
  method: "get",
  ...options
 });
};

/**
 * 创建客户
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.shipperCode - 客户编码
 * @param {string} body.shipperName - 客户名称
 * @param {string} [body.shipperSimpleName] - 客户简称
 * @param {string} [body.fixedShippingPort] - 固定发货口编码
 * @param {string} [body.orgId] - 公司ID
 * @param {boolean} [body.isTurnoverNox] - 周转箱
 * @param {string} [body.contacts] - 联系人
 * @param {string} [body.telephone] - 联系电话
 * @param {string} [body.address] - 地址
 * @param {number} [body.longitude] - 经度
 * @param {number} [body.latitude] - 纬度
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.language] - 语言
 * @param {string} [body.remark] - 备注
*/
export const postWarehouseShipper = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/shipper`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 客户信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.shipperCode] - 供应商编码
 * @param {string} [body.shipperName] - 供应商名称
 * @param {string} [body.contacts] - 联系人
 * @param {string} [body.createdOn] - 创建时间
 * @param {number} [body.shipperType] - 客户类型
 * @param {boolean} [body.enabled] - 是否启用
*/
export const postWarehouseExportshipper = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/export-shipper`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除客户信息
 * @param {Object} params - 请求参数
 * @param {string} params.ShipperId - 
*/
export const deleteWarehouseShipperByShipperId = (ShipperId, options = {}) => {
 return api({
  url: `/api/app/warehouse/shipper/${ShipperId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑客户信息
 * @param {Object} params - 请求参数
 * @param {string} params.ShipperId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.shipperCode - 客户编码
 * @param {string} body.shipperName - 客户名称
 * @param {string} [body.shipperSimpleName] - 客户简称
 * @param {string} [body.fixedShippingPort] - 固定发货口编码
 * @param {string} [body.orgId] - 公司ID
 * @param {boolean} [body.isTurnoverNox] - 周转箱
 * @param {string} [body.contacts] - 联系人
 * @param {string} [body.telephone] - 联系电话
 * @param {string} [body.address] - 地址
 * @param {number} [body.longitude] - 经度
 * @param {number} [body.latitude] - 纬度
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.language] - 语言
 * @param {string} [body.remark] - 备注
*/
export const putWarehouseShipperByShipperId = (ShipperId, body, options = {}) => {
 return api({
  url: `/api/app/warehouse/shipper/${ShipperId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取客户分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.ShipperCode] - 供应商编码
 * @param {string} [params.ShipperName] - 供应商名称
 * @param {string} [params.Contacts] - 联系人
 * @param {string} [params.CreatedOn] - 创建时间
 * @param {number} [params.ShipperType] - 客户类型
 * @param {boolean} [params.Enabled] - 是否启用
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getWarehouseShipperpages = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/shipper-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取客户下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseShipperselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/shipper-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取工作台下拉框数据
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehouseStagingtypeselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/staging-type-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取客户下拉框数据
 * @param {Object} params - 请求参数
 * @param {number} [params.compareKey] - 
*/
export const getWarehouseShippertypeselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/shipper-type-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取创建人下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getWarehouseCreateuserselect = (params, options = {}) => {
 return api({
  url: `/api/app/warehouse/create-user-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.ShipperId - 
*/
export const getWarehouseShipperbyidByShipperId = (ShipperId, options = {}) => {
 return api({
  url: `/api/app/warehouse/shipper-by-id/${ShipperId}`,
  method: "get",
  ...options
 });
};

/**
 * 创建供应商
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.supplierCode - 供应商编码
 * @param {string} body.supplierName - 供应商名称
 * @param {string} [body.orgId] - 公司ID
 * @param {string} [body.contacts] - 联系人
 * @param {string} [body.telephone] - 联系电话
 * @param {string} [body.address] - 地址
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 备注
*/
export const postWarehouseSupplier = (body, options = {}) => {
 return api({
  url: `/api/app/warehouse/supplier`,
  method: "post",
  data: body,
  ...options
 });
};

