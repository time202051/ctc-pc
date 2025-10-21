/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 空托盘出库
 * @param {Object} body - 请求参数
 * @param {number} [body.trayCount] - 托数
 * @param {string} [body.trayTypeId] - 托盘类型ID
 * @param {string} [body.cargoLocationCode] - 出入库库位编码（码盘位）
 * @param {string} [body.containerTypeCode] - 容器类型编码
*/
export const postStockoutTrayoutmate = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/tray-out-mate`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 无描述
*/
export const getStockoutTaskpickjobtest = (options = {}) => {
 return api({
  url: `/api/app/stock-out/task-pick-job-test`,
  method: "get",
  ...options
 });
};

/**
 * 创建样品出库订单和明细
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.warehouse] - 仓库编码(域编码)
 * @param {string} [body.remark] - 备注
 * @param {string} [body.costCenter] - 成本中心
 * @param {string} [body.inspector] - 检测工程师
 * @param {string} [body.inspectorPhone] - 检测工程师电话
 * @param {string} [body.engineer] - 系统/客服/产品工程师
 * @param {string} [body.engineerPhone] - 系统/客服/产品工程师电话
 * @param {string} [body.requiredDate] - 需求日期
 * @param {string} [body.loadingStandard] - 装车执行标准
 * @param {string} [body.soNumber] - SO号
 * @param {string} [body.experimentToNumber] - 实验TO号
 * @param {string} [body.experimentTtpNumber] - 实验T/TP号
 * @param {number} [body.orderState] - 单据状态
 * @param {number} [body.businessType] - 业务类型
 * @param {string} [body.projectId] - 项目Id
 * @param {string} [body.outWarehouseStagingId] - 出库查看工作台Id
 * @param {string} [body.id] - 出库单ID，修改时使用
 * @param {string} [body.sourceNo] - 来源单号
 * @param {number} [body.stockOutType] - 
 * @param {Array} [body.stockOutDetailCreateDtos] - 出库单明细
*/
export const postStockoutSamplestockout = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/sample-stock-out`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 创建车身出库订单和明细
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.warehouse] - 仓库编码(域编码)
 * @param {string} [body.remark] - 备注
 * @param {string} [body.costCenter] - 成本中心
 * @param {string} [body.inspector] - 检测工程师
 * @param {string} [body.inspectorPhone] - 检测工程师电话
 * @param {string} [body.engineer] - 系统/客服/产品工程师
 * @param {string} [body.engineerPhone] - 系统/客服/产品工程师电话
 * @param {string} [body.requiredDate] - 需求日期
 * @param {string} [body.loadingStandard] - 装车执行标准
 * @param {string} [body.soNumber] - SO号
 * @param {string} [body.experimentToNumber] - 实验TO号
 * @param {string} [body.experimentTtpNumber] - 实验T/TP号
 * @param {number} [body.orderState] - 单据状态
 * @param {number} [body.businessType] - 业务类型
 * @param {string} [body.projectId] - 项目Id
 * @param {string} [body.outWarehouseStagingId] - 出库查看工作台Id
 * @param {string} [body.id] - 出库单ID，修改时使用
 * @param {string} [body.sourceNo] - 来源单号
 * @param {number} [body.stockOutType] - 
 * @param {Array} [body.stockOutDetailCreateDtos] - 出库单明细
*/
export const postStockout = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/stock-out`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 修改出库订单和明细
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.warehouse] - 仓库编码(域编码)
 * @param {string} [body.remark] - 备注
 * @param {string} [body.costCenter] - 成本中心
 * @param {string} [body.inspector] - 检测工程师
 * @param {string} [body.inspectorPhone] - 检测工程师电话
 * @param {string} [body.engineer] - 系统/客服/产品工程师
 * @param {string} [body.engineerPhone] - 系统/客服/产品工程师电话
 * @param {string} [body.requiredDate] - 需求日期
 * @param {string} [body.loadingStandard] - 装车执行标准
 * @param {string} [body.soNumber] - SO号
 * @param {string} [body.experimentToNumber] - 实验TO号
 * @param {string} [body.experimentTtpNumber] - 实验T/TP号
 * @param {number} [body.orderState] - 单据状态
 * @param {number} [body.businessType] - 业务类型
 * @param {string} [body.projectId] - 项目Id
 * @param {string} [body.outWarehouseStagingId] - 出库查看工作台Id
 * @param {string} [body.id] - 出库单ID，修改时使用
 * @param {string} [body.sourceNo] - 来源单号
 * @param {number} [body.stockOutType] - 
 * @param {Array} [body.stockOutDetailCreateDtos] - 出库单明细
*/
export const putStockout = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/stock-out`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取工作台下拉列表
*/
export const getStockoutStagingselect = (options = {}) => {
 return api({
  url: `/api/app/stock-out/staging-select`,
  method: "get",
  ...options
 });
};

/**
 * 绑定托盘和货位关系
 * @param {Object} params - 请求参数
 * @param {string} [params.containerCode] - 托盘编号
 * @param {string} [params.cargoLocationCode] - 货位编号
*/
export const postStockoutBindcontainerandcargolocation = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/bind-container-and-cargo-location`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 解绑托盘和货位关系
 * @param {Object} params - 请求参数
 * @param {string} [params.containerCode] - 
 * @param {string} [params.cargoLocationCode] - 
*/
export const postStockoutUnbindcontainerandcargolocation = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/un-bind-container-and-cargo-location`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} [params.getcargo] - 
 * @param {string} [params.putcargo] - 
 * @param {string} [params.trayNo] - 
*/
export const postStockoutBindcontainerwcstask = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/bind-container-wcs-task`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 出库信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.billNo] - 出货单号
 * @param {number} [body.orderState] - 单据状态
 * @param {string} [body.shipperCode] - 客户编码
 * @param {number} [body.type] - 业务类型
 * @param {string} [body.arrivalBeginTime] - 开始时间
 * @param {string} [body.arrivalEndTime] - 结束时间
 * @param {string} [body.warehouseName] - 仓库
 * @param {string} [body.warehouseCode] - 仓库编码
 * @param {string} [body.waveId] - 波次
 * @param {string} [body.requiredDate] - 要货日期
 * @param {string} [body.requiredDateBeginTime] - 要货日期开始时间
 * @param {string} [body.requiredDateEndTime] - 要货日期结束时间
 * @param {string} [body.planDateBegin] - 计划日期开始时间
 * @param {string} [body.planDateEnd] - 计划日期结束时间
 * @param {string} [body.sourceNo] - 
 * @param {string} [body.projectCode] - 项目编码
 * @param {string} [body.soNumber] - SO号
 * @param {string} [body.experimentToNumber] - 实验TO号
 * @param {string} [body.engineerPhone] - 系统/客服/产品工程师电话
 * @param {number} [body.stockOutType] - 
*/
export const postStockoutExportstock = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/export-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取出库订单明细详情分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.StockOutId] - 出货单ID
 * @param {string} [params.WaveId] - 波次ID
 * @param {string} [params.TaskCode] - 任务号
 * @param {number} [params.TaskStatus] - 任务状态
 * @param {boolean} [params.LackStatus] - 缺货状态 false 否  true是
 * @param {string} [params.OwnerCode] - 客户编码
 * @param {string} [params.ProductCode] - 物料编码
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockoutStockoutdetailpages = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/stock-out-detail-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取出库订单分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.BillNo] - 出货单号
 * @param {number} [params.OrderState] - 单据状态
 * @param {string} [params.ShipperCode] - 客户编码
 * @param {number} [params.Type] - 订单类别
 * @param {string} [params.ArrivalBeginTime] - 开始时间
 * @param {string} [params.ArrivalEndTime] - 结束时间
 * @param {string} [params.WarehouseName] - 仓库
 * @param {string} [params.WarehouseCode] - 仓库编码
 * @param {string} [params.WaveId] - 波次
 * @param {string} [params.RequiredDate] - 要货日期
 * @param {string} [params.RequiredDateBeginTime] - 要货日期开始时间
 * @param {string} [params.RequiredDateEndTime] - 要货日期结束时间
 * @param {string} [params.PlanDateBegin] - 计划日期开始时间
 * @param {string} [params.PlanDateEnd] - 计划日期结束时间
 * @param {string} [params.SourceNo] - 
 * @param {string} [params.ProjectCode] - 项目编码
 * @param {string} [params.SoNumber] - SO号
 * @param {string} [params.ExperimentToNumber] - 实验TO号
 * @param {string} [params.EngineerPhone] - 系统/客服/产品工程师电话
 * @param {number} [params.StockOutType] - 出库单类型
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockoutStockoutpages = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/stock-out-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * TO, TP, SO 号生成
*/
export const getStockoutSerialno = (options = {}) => {
 return api({
  url: `/api/app/stock-out/serial-no`,
  method: "get",
  ...options
 });
};

/**
 * TS号生成2024+4位随机数
 * @param {Object} params - 请求参数
 * @param {number} [params.sum] - 
*/
export const getStockoutTsNo = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/t-sNo`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 修改状态
 * @param {Object} params - 请求参数
 * @param {string} params.StockoutId - 出库订单ID
*/
export const putStockoutByStockoutId = (StockoutId, options = {}) => {
 return api({
  url: `/api/app/stock-out/stock-out/${StockoutId}`,
  method: "put",
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} params.StockoutId - 
*/
export const putStockoutSamplestockoutByStockoutId = (StockoutId, options = {}) => {
 return api({
  url: `/api/app/stock-out/sample-stock-out/${StockoutId}`,
  method: "put",
  ...options
 });
};

/**
 * 根据项目数据Id和检测人员的人员信息数据Id查询入场信息
 * @param {Object} params - 请求参数
 * @param {string} [params.projectId] - 
 * @param {string} [params.employeeInfoId] - 
*/
export const getStockoutAdmissioninfo = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/admission-info`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 打印样件出库单
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 出库单Id
 * @param {number} [body.printType] - 打印类型枚举值
*/
export const postStockoutPrintsamplesstockout = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/print-samples-stock-out`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 打印样件领料单
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 出库单Id
 * @param {number} [body.printType] - 打印类型枚举值
*/
export const postStockoutPrintsamplespick = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/print-samples-pick`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 打印车身入场信息
 * @param {Object} body - 请求参数
 * @param {string} [body.id] - 入场信息Id
*/
export const postStockoutPrintcarbodystockout = (options = {}) => {
 return api({
  url: `/api/app/stock-out/print-carbody-stock-out`,
  method: "post",
  ...options
 });
};

/**
 * 删除出库订单和明细
 * @param {Object} params - 请求参数
 * @param {string} params.stockoutId - 
*/
export const deleteStockoutByStockoutId = (stockoutId, options = {}) => {
 return api({
  url: `/api/app/stock-out/stock-out/${stockoutId}`,
  method: "del",
  ...options
 });
};

/**
 * 获取出库的车身信息
 * @param {Object} params - 请求参数
 * @param {string} [params.CargoLocationCode] - 库位号
 * @param {string} [params.CarBodyTagNumber] - 标签号和车架号
*/
export const getStockoutAdmissioninfopickasyc = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/admission-info-pick-asyc`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 车身出库确认 - 处理车身从仓库出库的业务逻辑
 * @param {Object} body - 请求参数
 * @param {string} [body.carNumber] - 车架号
 * @param {string} [body.locationId] - 货位ID
*/
export const postStockoutConfirmpick = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/confirm-pick`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 拣货信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.stockOutDetailId] - 出货单明细id
 * @param {string} [body.tagNumber] - 收货样品标签号
 * @param {string} [body.billNo] - 拣选任务号
 * @param {string} [body.boxCardNumber] - 箱卡号
 * @param {string} [body.tsNumber] - ts号
 * @param {string} [body.projectCode] - 项目号
 * @param {string} [body.stockOutOrderNo] - 出库订单号
 * @param {string} [body.materialCode] - 标签号
 * @param {string} [body.productCode] - 零件编码
 * @param {number} [body.wavePickTaskStateEnum] - 
 * @param {string} [body.containerCode] - 容器号
 * @param {string} [body.stagingCargoLocationName] - 工作台编码
 * @param {string} [body.wcsTaskNo] - wcs任务号
 * @param {string} [body.stagingId] - 工作台ID
 * @param {string} [body.cargoLocationCode] - 库位编码
*/
export const postStockoutExportpick = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/export-pick`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 拣货记录导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.productCode] - 物料编码
 * @param {string} [body.batchNo] - 物料批次
 * @param {string} [body.stockOutBillNo] - 出库单号
 * @param {string} [body.pickBillNo] - 拣货单号
 * @param {string} [body.containerCode] - 容器编码
 * @param {string} [body.createUser] - 操作人
*/
export const postStockoutExportpickrecord = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/export-pick-record`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取拣货单分页记录
 * @param {Object} params - 请求参数
 * @param {string} [params.StockOutDetailId] - 出货单明细id
 * @param {string} [params.TagNumber] - 收货样品标签号
 * @param {string} [params.BillNo] - 拣选任务号
 * @param {string} [params.BoxCardNumber] - 箱卡号
 * @param {string} [params.TSNumber] - ts号
 * @param {string} [params.ProjectCode] - 项目号
 * @param {string} [params.StockOutOrderNo] - 出库订单号
 * @param {string} [params.MaterialCode] - 标签号
 * @param {string} [params.ProductCode] - 零件编码
 * @param {number} [params.wavePickTaskStateEnum] - 任务状态
 * @param {string} [params.ContainerCode] - 容器号
 * @param {string} [params.StagingCargoLocationName] - 工作台编码
 * @param {string} [params.WCSTaskNo] - wcs任务号
 * @param {string} [params.StagingId] - 工作台ID
 * @param {string} [params.CargoLocationCode] - 库位编码
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockoutPickpages = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/pick-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据拣选Id和拣选台获取暂存托盘和箱卡号
 * @param {Object} params - 请求参数
 * @param {string} params.pickId - 
*/
export const getStockoutBuffertrayByPickId = (pickId, options = {}) => {
 return api({
  url: `/api/app/stock-out/buffer-tray/${pickId}`,
  method: "get",
  ...options
 });
};

/**
 * 样品拣货
 * @param {Object} body - 请求参数
 * @param {string} [body.pickId] - 拣货id
 * @param {string} [body.trayCode] - 托盘编码
 * @param {number} [body.pickQty] - 拣选数量
 * @param {string} [body.loadPercent] - 载货百分比
 * @param {string} [body.tempContainerCode] - 其他工作台暂存容器号
 * @param {boolean} [body.isManualPickUp] - 是否为人工取货拣货
*/
export const postStockoutSamplepick = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/sample-pick`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 样品缺货
 * @param {Object} body - 请求参数
 * @param {string} [body.pickId] - 拣货id
 * @param {string} [body.trayCode] - 托盘编码
 * @param {number} [body.pickQty] - 拣选数量
 * @param {string} [body.loadPercent] - 载货百分比
 * @param {string} [body.tempContainerCode] - 其他工作台暂存容器号
 * @param {boolean} [body.isManualPickUp] - 是否为人工取货拣货
*/
export const postStockoutSampleoutofstock = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/sample-out-of-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 外仓拣货（平库）
 * @param {Object} body - 请求参数
 * @param {string} [body.pickId] - 拣货id
 * @param {string} [body.trayCode] - 托盘编码
 * @param {number} [body.pickQty] - 拣选数量
 * @param {string} [body.loadPercent] - 载货百分比
 * @param {string} [body.tempContainerCode] - 其他工作台暂存容器号
 * @param {boolean} [body.isManualPickUp] - 是否为人工取货拣货
*/
export const postStockoutPick = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/pick`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 获取暂存托盘上面的出库单信息
 * @param {Object} params - 请求参数
 * @param {string} [params.TrayNo] - 托盘编号
*/
export const getStockoutPicktray = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/pick-tray`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 暂存托盘直接发货回实验室
 * @param {Object} body - 请求参数
 * @param {string} [body.trayNo] - 托盘号
*/
export const postStockoutSendpicktray = (options = {}) => {
 return api({
  url: `/api/app/stock-out/send-pick-tray`,
  method: "post",
  ...options
 });
};

/**
 * 暂存托盘回库
 * @param {Object} body - 请求参数
 * @param {string} [body.trayNo] - 托盘号
*/
export const postStockoutSendpicktrayback = (options = {}) => {
 return api({
  url: `/api/app/stock-out/send-pick-tray-back`,
  method: "post",
  ...options
 });
};

/**
 * 获取待实验出库的库存信息
 * @param {Object} params - 请求参数
 * @param {string} [params.StockBillNo] - 
*/
export const getStockoutSampleback = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/sample-back`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 待实验出库
 * @param {Object} body - 请求参数
 * @param {Array} [body.trayNo] - 托盘号
 * @param {string} [body.stockOutBillNo] - 出库单号
*/
export const postStockoutSampleback = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/sample-back`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 确认实验出库
 * @param {Object} body - 请求参数
 * @param {string} body.trayNo - 托盘号
 * @param {Array} body.boxCardNumbers - 箱卡号集合
*/
export const postStockoutConfirmexperimentout = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/confirm-experiment-out`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 完成回库
 * @param {Object} params - 请求参数
 * @param {string} [params.trayNo] - 托盘号
*/
export const postStockoutCompleterestock = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/complete-restock`,
  method: "post",
  params,
  ...options
 });
};

/**
 * 获取拣货记录分页记录
 * @param {Object} params - 请求参数
 * @param {string} [params.ProductCode] - 物料编码
 * @param {string} [params.BatchNo] - 物料批次
 * @param {string} [params.StockOutBillNo] - 出库单号
 * @param {string} [params.PickBillNo] - 拣货单号
 * @param {string} [params.ContainerCode] - 容器编码
 * @param {string} [params.CreateUser] - 操作人
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getStockoutPickrecordpages = (params, options = {}) => {
 return api({
  url: `/api/app/stock-out/pick-record-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 绑定托盘
 * @param {Object} body - 请求参数
 * @param {string} [body.trayNo] - 托盘号
 * @param {string} [body.locationNo] - 货位号
*/
export const postStockoutBindtray = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/bind-tray`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 解绑托盘
 * @param {Object} body - 请求参数
 * @param {string} [body.trayNo] - 托盘号
 * @param {string} [body.locationNo] - 货位号
*/
export const postStockoutUnbindtray = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/unbind-tray`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 制单
 * @param {Object} body - 请求参数
 * @param {string} [body.stockoutId] - 出库单ID
 * @param {string} [body.regionId] - 出库区域
*/
export const postStockoutStockoutmate = (body, options = {}) => {
 return api({
  url: `/api/app/stock-out/stock-out-mate`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 无描述
*/
export const postStockoutTest = (options = {}) => {
 return api({
  url: `/api/app/stock-out/test`,
  method: "post",
  ...options
 });
};

