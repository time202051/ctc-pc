/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:32
 */

// AGV接口
export const Agv = {
  postApiOpenAgvCallback: "/api/open/agv/callback" //post AGV回调任务完成(MRS)
};

// WCS接口
export const Wcs = {
  postApiWcsApplyInTask: "/api/Wcs/ApplyInTask", //post 申请入库任务
  postApiWcsApplyFinalLocation: "/api/Wcs/ApplyFinalLocation", //post 获取可用货位
  postApiWcsNoticeCompleteTask: "/api/Wcs/NoticeCompleteTask", //post 任务回调
  postApiWcsApplyCanExecute: "/api/Wcs/ApplyCanExecute", //post 申请是否允许执行出库
  postApiWcsNoticeEntranceError: "/api/Wcs/NoticeEntranceError", //post 回传入库异常信息
  postApiWcsCancelTask: "/api/Wcs/CancelTask", //post 申请取消任务
  postApiWcsApplyPalletGroupIn: "/api/Wcs/ApplyPalletGroupIn", //post 申请空托盘入库
  postApiWcsApplyPalletGroupOut: "/api/Wcs/ApplyPalletGroupOut", //post 申请空托盘出库
  postApiWcsNoticeArrivedPort: "/api/Wcs/NoticeArrivedPort" //post 到达目标位置通知
};

// ACH箱卡服务接口
export const ACHInnerFaceInfo = {
  getAcHInnerfaceinfoAcHTbnumber: "/api/app/a-cHInner-face-info/a-cHTb-number", //get 获取TB号
  getAcHInnerfaceinfoAcHBoxdata: "/api/app/a-cHInner-face-info/a-cHBox-data", //get 获取箱卡数据
  postAcHInnerfaceinfoAcHBoxdata: "/api/app/a-cHInner-face-info/a-cHBox-data" //post 创建箱卡信息
};

// 入场信息（车身追溯）相关接口
export const AdmissionInfo = {
  postAdmissioninfo: "/api/app/admission-info/admission-info", //post 入场信息（车身追溯）创建
  putAdmissioninfoByAdmissionId: "/api/app/admission-info/admission-info", //put 入场信息（车身追溯）更新
  putAdmissioninfoByAdmissionIdCompleteUrl: "/api/app/admission-info/admission-info/{admissionId}", //put 入场信息（车身追溯）更新
  getAdmissioninfoByAdmissionInfoId: "/api/app/admission-info/admission-info", //get 获取入场信息（车身追溯）详情信息
  getAdmissioninfoByAdmissionInfoIdCompleteUrl:
    "/api/app/admission-info/admission-info/{admissionInfoId}", //get 获取入场信息（车身追溯）详情信息
  deleteAdmissioninfoByAdmissionInfoId: "/api/app/admission-info/admission-info", //delete 删除入场信息
  deleteAdmissioninfoByAdmissionInfoIdCompleteUrl:
    "/api/app/admission-info/admission-info/{admissionInfoId}", //delete 删除入场信息
  getAdmissioninfoPagedresult: "/api/app/admission-info/paged-result", //get 分页查询入场信息
  postAdmissioninfoAuditadmissioninfo: "/api/app/admission-info/audit-admission-info", //post 审核入场信息
  postAdmissioninfoPrintlabelByAdmissionInfoId: "/api/app/admission-info/print-label", //post 打印入场信息标签
  postAdmissioninfoPrintlabelByAdmissionInfoIdCompleteUrl:
    "/api/app/admission-info/print-label/{admissionInfoId}", //post 打印入场信息标签
  postAdmissioninfoExportstock: "/api/app/admission-info/export-stock", //post 导出入场信息
  putAdmissioninfoFinalprocessedadmissioninfo:
    "/api/app/admission-info/final-processed-admission-info", //put 终处理入场信息
  getAdmissioninfoAdmissioninfotbnumber: "/api/app/admission-info/admission-info-tbnumber", //get 获取入场信息tb号
  postAdmissioninfoByIdUploadfile: "/api/app/admission-info/upload-file", //post 上传车身登记表
  postAdmissioninfoByIdUploadfileCompleteUrl: "/api/app/admission-info/{id}/upload-file", //post 上传车身登记表
  postAdmissioninfoByIdDownfile: "/api/app/admission-info/down-file", //post 下载车身登记表
  postAdmissioninfoByIdDownfileCompleteUrl: "/api/app/admission-info/{id}/down-file", //post 下载车身登记表
  getAdmissioninfoAdmissioninfobytagnumberframenumber:
    "/api/app/admission-info/admission-info-by-tagnumber-framenumber", //get 根据车身标签号或车架号获取入场信息（车身追溯信息）
  getAdmissioninfoCheckisnewrecord: "/api/app/admission-info/check-is-new-record", //get 判断入场信息的项目是否为新数据
  getAdmissioninfoVirtualcargolocation: "/api/app/admission-info/virtual-cargo-location", //get 获取虚拟库位（存放位置）
  getAdmissioninfoVirtualcargo: "/api/app/admission-info/virtual-cargo" //get 根据名称模糊搜索外仓库位（传空则显示全部）
};

// 接口信息管理
export const ApiDescription = {
  getApidescription: "/api/app/api-description/api-description" //get 获取接口信息
};

// 审计日志接口管理
export const AuditLogging = {
  getAuditloggingAuditlogpages: "/api/app/audit-logging/audit-log-pages", //get 系统接口日志
  getAuditloggingAuditlogactionByAuditId: "/api/app/audit-logging/audit-log-action", //get 系统接口明细日志
  getAuditloggingAuditlogactionByAuditIdCompleteUrl:
    "/api/app/audit-logging/audit-log-action/{auditId}" //get 系统接口明细日志
};

// 码盘记录相关接口
export const BindRecord = {
  getBindrecordBindrecorddetailpages: "/api/app/bind-record/bind-record-detail-pages", //get 获取码盘记录数据
  postBindrecordExportbindrecord: "/api/app/bind-record/export-bind-record", //post 导出码盘记录数据
  postBindrecordCanclebindrecord: "/api/app/bind-record/cancle-bind-record" //post 撤销码盘
};

// 箱卡回库记录接口
export const BoxCardRecord = {
  getBoxcardrecordPagedresult: "/api/app/box-card-record/paged-result", //get 获取箱卡记录分页数据信息
  postBoxcardrecordExportboxcardrecord: "/api/app/box-card-record/export-box-card-record", //post 箱卡记录导出
  getBoxcardrecordBoxdata: "/api/app/box-card-record/box-data", //get 通过箱卡号查询SMS箱卡数据
  postBoxcardrecordBoxrestock: "/api/app/box-card-record/box-restock", //post 实验提交回库
  postBoxcardrecordApprovaloutstock: "/api/app/box-card-record/approval-out-stock", //post 审批出库
  getBoxcardrecordBoxdatabyboxidByBoxId: "/api/app/box-card-record/box-data-by-box-id", //get 通过箱卡号查询SMS箱卡数据
  getBoxcardrecordBoxdatabyboxidByBoxIdCompleteUrl:
    "/api/app/box-card-record/box-data-by-box-id/{boxId}", //get 通过箱卡号查询SMS箱卡数据
  postBoxcardrecordSamplespalletsort: "/api/app/box-card-record/samples-pallet-sort", //post 箱卡实验入库
  postBoxcardrecordGeneraterestocktask: "/api/app/box-card-record/generate-restock-task", //post Test增加托盘码生成实验回库的任务
  postBoxcardrecordExportrestock: "/api/app/box-card-record/export-restock" //post 导出每天的PV样件入库量
};

// 配置服务接口
export const Config = {
  getConfigBackgroundworkerconfigpages: "/api/app/config/background-worker-config-pages", //get 获取后台工作配置分页信息
  postConfigChangedbackgroundworkerconfigenabled:
    "/api/app/config/changed-background-worker-config-enabled" //post 改变后台工作任务启用状态
};

// 职员信息相关接口
export const EmployeeInfo = {
  getEmployeeinfoEmployeeinfobyname: "/api/app/employee-info/employee-info-by-name", //get 根据名称查询员工信息（若不填写名称则是全量）
  getEmployeeinfoEmployeebyidByEmployeeInfoId: "/api/app/employee-info/employee-by-id", //get 根据职员信息数据id查询职员
  getEmployeeinfoEmployeebyidByEmployeeInfoIdCompleteUrl:
    "/api/app/employee-info/employee-by-id/{employeeInfoId}", //get 根据职员信息数据id查询职员
  getEmployeeinfoPagedresult: "/api/app/employee-info/paged-result", //get 分页查询职员信息数据
  postEmployeeinfo: "/api/app/employee-info/employee-info", //post 新增职员信息
  putEmployeeinfoByEmployeeInfoId: "/api/app/employee-info/employee-info", //put 编辑职员信息
  putEmployeeinfoByEmployeeInfoIdCompleteUrl:
    "/api/app/employee-info/employee-info/{employeeInfoId}", //put 编辑职员信息
  postEmployeeinfoImportemployeeinfo: "/api/app/employee-info/import-employee-info", //post 职员信息导入
  postEmployeeinfoExportemployeeinfo: "/api/app/employee-info/export-employee-info", //post 职员信息导出
  postEmployeeinfoDownemployeeinfo: "/api/app/employee-info/down-employee-info" //post 职员信息导入模板下载
};

// 物料管理
export const Product = {
  getProductProductlistbycode: "/api/app/product/product-list-by-code", //get 通过物料编码模糊搜索物料信息
  postProductOwner: "/api/app/product/owner", //post 创建货主
  postProductExportowner: "/api/app/product/export-owner", //post 货主信息导出
  deleteProductOwnerByOwnerId: "/api/app/product/owner", //delete 删除货主信息
  deleteProductOwnerByOwnerIdCompleteUrl: "/api/app/product/owner/{OwnerId}", //delete 删除货主信息
  putProductOwnerByOwnerId: "/api/app/product/owner", //put 编辑货主信息
  putProductOwnerByOwnerIdCompleteUrl: "/api/app/product/owner/{OwnerId}", //put 编辑货主信息
  getProductOwnerpages: "/api/app/product/owner-pages", //get 获取货主分页数据信息
  getProductOwnerselect: "/api/app/product/owner-select", //get 获取货主下拉框数据
  getProductDicbyunit: "/api/app/product/dic-by-unit", //get 获取单位字典
  getProductOwnerbyidByOwnerId: "/api/app/product/owner-by-id", //get 根据ID获取单条数据
  getProductOwnerbyidByOwnerIdCompleteUrl: "/api/app/product/owner-by-id/{OwnerId}", //get 根据ID获取单条数据
  postProductProductclass: "/api/app/product/product-class", //post 创建物料分类
  postProductExportproductclass: "/api/app/product/export-product-class", //post 物料分类信息导出
  deleteProductProductclassByProductClassId: "/api/app/product/product-class", //delete 删除物料分类信息
  deleteProductProductclassByProductClassIdCompleteUrl:
    "/api/app/product/product-class/{ProductClassId}", //delete 删除物料分类信息
  putProductProductclassByProductClassId: "/api/app/product/product-class", //put 编辑物料分类信息
  putProductProductclassByProductClassIdCompleteUrl:
    "/api/app/product/product-class/{ProductClassId}", //put 编辑物料分类信息
  getProductProductclasspages: "/api/app/product/product-class-pages", //get 获取物料分类分页数据信息
  getProductProductclassselect: "/api/app/product/product-class-select", //get 获取物料分类下拉框数据
  getProductProductclasssublevel: "/api/app/product/product-class-sub-level", //get 根据上级物料分类ID 获取子级物料分类等级
  getProductProductclassbyidByProductClassId: "/api/app/product/product-class-by-id", //get 根据ID获取单条数据
  getProductProductclassbyidByProductClassIdCompleteUrl:
    "/api/app/product/product-class-by-id/{ProductClassId}", //get 根据ID获取单条数据
  postProductProductowner: "/api/app/product/product-owner", //post 创建物料与货主关系
  postProductExportproductowner: "/api/app/product/export-product-owner", //post 物料与货主关系信息导出
  deleteProductProductownerByProductOwnerId: "/api/app/product/product-owner", //delete 删除物料与货主关系信息
  deleteProductProductownerByProductOwnerIdCompleteUrl:
    "/api/app/product/product-owner/{ProductOwnerId}", //delete 删除物料与货主关系信息
  putProductProductownerByProductOwnerId: "/api/app/product/product-owner", //put 编辑物料与货主关系信息
  putProductProductownerByProductOwnerIdCompleteUrl:
    "/api/app/product/product-owner/{ProductOwnerId}", //put 编辑物料与货主关系信息
  getProductProductownerbyidByProductOwnerId: "/api/app/product/product-owner-by-id", //get 根据ID获取单条数据
  getProductProductownerbyidByProductOwnerIdCompleteUrl:
    "/api/app/product/product-owner-by-id/{ProductOwnerId}", //get 根据ID获取单条数据
  getProductByowneridByOwnerId: "/api/app/product/by-owner-id", //get 根据货主获取货主相关所有物料数据
  getProductByowneridByOwnerIdCompleteUrl: "/api/app/product/by-owner-id/{OwnerId}", //get 根据货主获取货主相关所有物料数据
  getProductByproductidByProductId: "/api/app/product/by-product-id", //get 根据物料获取货主相关所有货主数据
  getProductByproductidByProductIdCompleteUrl: "/api/app/product/by-product-id/{ProductId}", //get 根据物料获取货主相关所有货主数据
  getProductProductownerbyid: "/api/app/product/product-owner-by-id", //get 根据物料ID和货主ID获取单条数据
  getProductProductpages: "/api/app/product/product-pages", //get
  postProduct: "/api/app/product/product", //post 创建产品
  putProductByProductId: "/api/app/product/product", //put 编辑产品
  putProductByProductIdCompleteUrl: "/api/app/product/product/{productId}", //put 编辑产品
  deleteProductByProductId: "/api/app/product/product", //delete 删除产品
  deleteProductByProductIdCompleteUrl: "/api/app/product/product/{productId}", //delete 删除产品
  getProductProductbyidByProductId: "/api/app/product/product-by-id", //get 根据ID获取单条数据
  getProductProductbyidByProductIdCompleteUrl: "/api/app/product/product-by-id/{ProductId}", //get 根据ID获取单条数据
  getProductProductselect: "/api/app/product/product-select", //get 获取物料下拉框数据
  postProductExportstock: "/api/app/product/export-stock", //post 物料信息导出
  postProductImportproduct: "/api/app/product/import-product", //post 物料信息导入
  postProductDownproduct: "/api/app/product/down-product" //post 物料导入模板下载
};

// 项目管理相关接口
export const Project = {
  getProjectProjectlistbycode: "/api/app/project/project-list-by-code", //get 通过项目号模糊搜索项目信息
  getProjectProjectlist: "/api/app/project/project-list", //get 获取全部的项目
  getProjectProjectlistnotselfByProjectInfoId: "/api/app/project/project-list-not-self", //get 获取全部的项目(去除本身)
  getProjectProjectlistnotselfByProjectInfoIdCompleteUrl:
    "/api/app/project/project-list-not-self/{projectInfoId}", //get 获取全部的项目(去除本身)
  getProjectPagedresult: "/api/app/project/paged-result", //get 分页查询项目信息数据
  postProject: "/api/app/project/project", //post 新增项目信息
  putProjectByProjectInfoId: "/api/app/project/project", //put 编辑项目信息
  putProjectByProjectInfoIdCompleteUrl: "/api/app/project/project/{projectInfoId}", //put 编辑项目信息
  deleteProjectByProjectInfoId: "/api/app/project/project", //delete 删除项目
  deleteProjectByProjectInfoIdCompleteUrl: "/api/app/project/project/{projectInfoId}", //delete 删除项目
  postProjectBatchcloseproject: "/api/app/project/batch-close-project", //post 批量关闭项目
  postProjectCloseprojectByProjectInfoId: "/api/app/project/close-project", //post 关闭项目
  postProjectCloseprojectByProjectInfoIdCompleteUrl:
    "/api/app/project/close-project/{projectInfoId}", //post 关闭项目
  postProjectOpenprojectByProjectInfoId: "/api/app/project/open-project", //post 启用项目
  postProjectOpenprojectByProjectInfoIdCompleteUrl: "/api/app/project/open-project/{projectInfoId}", //post 启用项目
  postProjectTransferremnants: "/api/app/project/transfer-remnants", //post 余料转移
  postProjectImportprojectinfo: "/api/app/project/import-project-info" //post 项目信息导入
};

// 公共聚合模型接口
export const PublicAggregate = {
  getPublicaggregateDatatemplatepages: "/api/app/public-aggregate/data-template-pages", //get 获取数据模板分页数据信息
  postPublicaggregateDatatemplate: "/api/app/public-aggregate/data-template", //post 创建数据模板数据
  postPublicaggregateUploaddatatemplate: "/api/app/public-aggregate/upload-data-template", //post 上传数据模板
  getPublicaggregateDowndatatemplateByDataTemplateId:
    "/api/app/public-aggregate/down-data-template", //get 下载模板
  getPublicaggregateDowndatatemplateByDataTemplateIdCompleteUrl:
    "/api/app/public-aggregate/down-data-template/{dataTemplateId}", //get 下载模板
  putPublicaggregateDatatemplateByDataTemplateId: "/api/app/public-aggregate/data-template", //put 编辑数据模板
  putPublicaggregateDatatemplateByDataTemplateIdCompleteUrl:
    "/api/app/public-aggregate/data-template/{dataTemplateId}", //put 编辑数据模板
  deletePublicaggregateDatatemplateByDataTemplateId: "/api/app/public-aggregate/data-template", //delete 删除数据模板
  deletePublicaggregateDatatemplateByDataTemplateIdCompleteUrl:
    "/api/app/public-aggregate/data-template/{dataTemplateId}", //delete 删除数据模板
  getPublicaggregateDictionaries: "/api/app/public-aggregate/dictionaries", //get
  getPublicaggregateDictionarieslist: "/api/app/public-aggregate/dictionaries-list", //get
  postPublicaggregateDic: "/api/app/public-aggregate/dic", //post
  getPublicaggregateDcibyid: "/api/app/public-aggregate/dci-by-id", //get
  getPublicaggregateDicbyparentid: "/api/app/public-aggregate/dic-by-parent-id" //get
};

// 公共枚举接口
export const PublicEnum = {
  getPublicenumEnums: "/api/app/public-enum/enums", //get 获取所有枚举信息
  getPublicenumSingleenum: "/api/app/public-enum/single-enum" //get 获取单个枚举
};

// 库存接口管理
export const Stock = {
  getStockStockpages: "/api/app/stock/stock-pages", //get 获取库存分页数据信息
  postStockOutwarehousebystockidByStockId: "/api/app/stock/out-ware-house-by-stock-id", //post 手动出库
  postStockOutwarehousebystockidByStockIdCompleteUrl:
    "/api/app/stock/out-ware-house-by-stock-id/{stockId}", //post 手动出库
  getStockOutwarehousetoseecargo: "/api/app/stock/out-warehouse-tosee-cargo", //get 选择出库查看货物的出库库位
  postStockOutwarehousetosee: "/api/app/stock/out-warehouse-tosee", //post 出库查看
  postStockApprovalscrap: "/api/app/stock/approval-scrap", //post 申请报废
  postStockModifystockemployee: "/api/app/stock/modify-stock-employee", //post 修改库存对应的PE
  getStockExpiredstockpages: "/api/app/stock/expired-stock-pages", //get 获取过期库存分页数据信息
  postStockExportexpiredstock: "/api/app/stock/export-expired-stock", //post 过期库存导出
  postStockFreezestock: "/api/app/stock/freeze-stock", //post 冻结库存
  postStockUnfreezestock: "/api/app/stock/un-freeze-stock", //post 解冻库存
  postStockChangevmistock: "/api/app/stock/change-vmi-stock", //post VMI隔离/放行
  getStockStockhistorypages: "/api/app/stock/stock-history-pages", //get 获取库存流水分页数据信息
  postStockExportstock: "/api/app/stock/export-stock", //post 库存导出
  postStockExportstockhistory: "/api/app/stock/export-stock-history", //post 库存流水导出
  putStockStockexpiretime: "/api/app/stock/stock-expire-time", //put 修改库存数据的过期时间
  postStockManualstockout: "/api/app/stock/manual-stock-out", //post 手动出库
  getStockStockstateselect: "/api/app/stock/stock-state-select" //get
};

// 入库相关接口
export const StockIn = {
  postStockin: "/api/app/stock-in/stock-in", //post 创建样件收货订单
  putStockinByStockInId: "/api/app/stock-in/stock-in", //put 收货订单更新
  putStockinByStockInIdCompleteUrl: "/api/app/stock-in/stock-in/{stockInId}", //put 收货订单更新
  getStockinByStockInId: "/api/app/stock-in/stock-in", //get 获取样件收货订单详情信息
  getStockinByStockInIdCompleteUrl: "/api/app/stock-in/stock-in/{stockInId}", //get 获取样件收货订单详情信息
  deleteStockinByStockInId: "/api/app/stock-in/stock-in", //delete 删除收货订单
  deleteStockinByStockInIdCompleteUrl: "/api/app/stock-in/stock-in/{stockInId}", //delete 删除收货订单
  getStockinPagedresult: "/api/app/stock-in/paged-result", //get 分页查询样件收货订单
  postStockinAuditstockin: "/api/app/stock-in/audit-stock-in", //post 审核收货订单
  postStockinBatchdeletestockin: "/api/app/stock-in/batch-delete-stock-in", //post 批量删除收货订单
  postStockinPrintlabelByStockInId: "/api/app/stock-in/print-label", //post 打印收货订单标签
  postStockinPrintlabelByStockInIdCompleteUrl: "/api/app/stock-in/print-label/{stockInId}", //post 打印收货订单标签
  postStockinBatchprintlabel: "/api/app/stock-in/batch-print-label", //post 批量打印收货单标签
  postStockinImporttemplatestockin: "/api/app/stock-in/import-template-stock-in", //post 收货订单导入模板下载
  postStockinImportstockin: "/api/app/stock-in/import-stock-in", //post 收货订单导入
  postStockinExportstockin: "/api/app/stock-in/export-stock-in", //post 样件收货单导出
  postStockinByIdCopystockin: "/api/app/stock-in/copy-stock-in", //post 复制收货单
  postStockinByIdCopystockinCompleteUrl: "/api/app/stock-in/{id}/copy-stock-in", //post 复制收货单
  getStockinCheckisnewrecord: "/api/app/stock-in/check-is-new-record", //get 判断收货单的项目、样件是否为新数据
  getStockinStockinlistbyprojectcodeproductcode:
    "/api/app/stock-in/stock-in-list-by-projectcode-productcode", //get 根据项目号或零件号精确获取收货单列表
  getStockinProductselect: "/api/app/stock-in/product-select", //get 获取物料信息下拉框
  getStockinProductselectwithcodename: "/api/app/stock-in/product-select-with-code-name", //get 零件下拉
  getStockinSupplierselect: "/api/app/stock-in/supplier-select", //get 获取供应商信息下拉框
  getStockinBindrecordpages: "/api/app/stock-in/bind-record-pages", //get 获取码盘记录汇总数据
  getStockinBindcontainerinfo: "/api/app/stock-in/bind-container-info", //get 获取物料详情
  postStockinExportbindrecorddetail: "/api/app/stock-in/export-bind-record-detail", //post 码盘记录明细导出
  postStockinExportbindrecord: "/api/app/stock-in/export-bind-record", //post 码盘记录汇总导出
  postStockinCanclebindrecord: "/api/app/stock-in/cancle-bind-record", //post 撤销码盘
  postStockinResend: "/api/app/stock-in/re-send" //post 补发
};

// 出库业务相关接口
export const StockOut = {
  postStockoutTrayoutmate: "/api/app/stock-out/tray-out-mate", //post 空托盘出库
  getStockoutTaskpickjobtest: "/api/app/stock-out/task-pick-job-test", //get
  postStockoutSamplestockout: "/api/app/stock-out/sample-stock-out", //post 创建样品出库订单和明细
  postStockout: "/api/app/stock-out/stock-out", //post 创建车身出库订单和明细
  putStockout: "/api/app/stock-out/stock-out", //put 修改出库订单和明细
  getStockoutStagingselect: "/api/app/stock-out/staging-select", //get 获取工作台下拉列表
  postStockoutBindcontainerandcargolocation: "/api/app/stock-out/bind-container-and-cargo-location", //post 绑定托盘和货位关系
  postStockoutUnbindcontainerandcargolocation:
    "/api/app/stock-out/un-bind-container-and-cargo-location", //post 解绑托盘和货位关系
  postStockoutBindcontainerwcstask: "/api/app/stock-out/bind-container-wcs-task", //post
  postStockoutExportstock: "/api/app/stock-out/export-stock", //post 出库信息导出
  getStockoutStockoutdetailpages: "/api/app/stock-out/stock-out-detail-pages", //get 获取出库订单明细详情分页数据信息
  getStockoutStockoutpages: "/api/app/stock-out/stock-out-pages", //get 获取出库订单分页数据信息
  getStockoutSerialno: "/api/app/stock-out/serial-no", //get TO, TP, SO 号生成
  getStockoutTsNo: "/api/app/stock-out/t-sNo", //get TS号生成2024+4位随机数
  putStockoutByStockoutId: "/api/app/stock-out/stock-out", //put 修改状态
  putStockoutByStockoutIdCompleteUrl: "/api/app/stock-out/stock-out/{StockoutId}", //put 修改状态
  putStockoutSamplestockoutByStockoutId: "/api/app/stock-out/sample-stock-out", //put
  putStockoutSamplestockoutByStockoutIdCompleteUrl:
    "/api/app/stock-out/sample-stock-out/{StockoutId}", //put
  getStockoutAdmissioninfo: "/api/app/stock-out/admission-info", //get 根据项目数据Id和检测人员的人员信息数据Id查询入场信息
  postStockoutPrintsamplesstockout: "/api/app/stock-out/print-samples-stock-out", //post 打印样件出库单
  postStockoutPrintsamplespick: "/api/app/stock-out/print-samples-pick", //post 打印样件领料单
  postStockoutPrintcarbodystockout: "/api/app/stock-out/print-carbody-stock-out", //post 打印车身入场信息
  deleteStockoutByStockoutId: "/api/app/stock-out/stock-out", //delete 删除出库订单和明细
  deleteStockoutByStockoutIdCompleteUrl: "/api/app/stock-out/stock-out/{stockoutId}", //delete 删除出库订单和明细
  getStockoutAdmissioninfopickasyc: "/api/app/stock-out/admission-info-pick-asyc", //get 获取出库的车身信息
  postStockoutConfirmpick: "/api/app/stock-out/confirm-pick", //post 车身出库确认 - 处理车身从仓库出库的业务逻辑
  postStockoutExportpick: "/api/app/stock-out/export-pick", //post 拣货信息导出
  postStockoutExportpickrecord: "/api/app/stock-out/export-pick-record", //post 拣货记录导出
  getStockoutPickpages: "/api/app/stock-out/pick-pages", //get 获取拣货单分页记录
  getStockoutBuffertrayByPickId: "/api/app/stock-out/buffer-tray", //get 根据拣选Id和拣选台获取暂存托盘和箱卡号
  getStockoutBuffertrayByPickIdCompleteUrl: "/api/app/stock-out/buffer-tray/{pickId}", //get 根据拣选Id和拣选台获取暂存托盘和箱卡号
  postStockoutSamplepick: "/api/app/stock-out/sample-pick", //post 样品拣货
  postStockoutSampleoutofstock: "/api/app/stock-out/sample-out-of-stock", //post 样品缺货
  postStockoutPick: "/api/app/stock-out/pick", //post 外仓拣货（平库）
  getStockoutPicktray: "/api/app/stock-out/pick-tray", //get 获取暂存托盘上面的出库单信息
  postStockoutSendpicktray: "/api/app/stock-out/send-pick-tray", //post 暂存托盘直接发货回实验室
  postStockoutSendpicktrayback: "/api/app/stock-out/send-pick-tray-back", //post 暂存托盘回库
  getStockoutSampleback: "/api/app/stock-out/sample-back", //get 获取待实验出库的库存信息
  postStockoutSampleback: "/api/app/stock-out/sample-back", //post 待实验出库
  postStockoutConfirmexperimentout: "/api/app/stock-out/confirm-experiment-out", //post 确认实验出库
  postStockoutCompleterestock: "/api/app/stock-out/complete-restock", //post 完成回库
  getStockoutPickrecordpages: "/api/app/stock-out/pick-record-pages", //get 获取拣货记录分页记录
  postStockoutBindtray: "/api/app/stock-out/bind-tray", //post 绑定托盘
  postStockoutUnbindtray: "/api/app/stock-out/unbind-tray", //post 解绑托盘
  postStockoutStockoutmate: "/api/app/stock-out/stock-out-mate", //post 制单
  postStockoutTest: "/api/app/stock-out/test" //post
};

// 入库大屏
export const TvIn = {
  getTvinPalletsortcount: "/api/app/tv-in/pallet-sort-count", //get 获取组盘数量
  getTvinErrorcachelist: "/api/app/tv-in/error-cache-list", //get 获取当前巷道的异常信息
  getTvinAvailablecargolocation: "/api/app/tv-in/available-cargo-location", //get 获取所有巷道可用库位
  getTvinInwarehousetask: "/api/app/tv-in/in-ware-house-task", //get 获取当日入库任务
  getTvinCarbodycargocount: "/api/app/tv-in/car-body-cargo-count", //get 车身库位
  getTvinSamplescargocount: "/api/app/tv-in/samples-cargo-count", //get 样件库位
  getTvinCarbodypercent: "/api/app/tv-in/car-body-percent", //get 当前车身类类型占比当前车身库存类型
  getTvinCargomonthusedcount: "/api/app/tv-in/cargo-month-used-count", //get 货位月占用数
  getTvinCarbodyinoutcount: "/api/app/tv-in/car-body-in-out-count", //get 获取月车身出入数量
  getTvinSamplestockincompletedcount: "/api/app/tv-in/sample-stock-in-completed-count", //get 样件订单处理量趋势
  getTvinUsedcargoprecent: "/api/app/tv-in/used-cargo-precent", //get 已用货位占比
  getTvinSamplestockinoutcount: "/api/app/tv-in/sample-stock-in-out-count", //get 样件出入库数量趋势
  getTvinCargousagereport: "/api/app/tv-in/cargo-usage-report", //get 库位使用报表
  getTvinRoadwayavailcargo: "/api/app/tv-in/road-way-avail-cargo", //get 巷道载货率
  postTvinTestutils: "/api/app/tv-in/test-utils", //post
  getTvinStagingtype: "/api/app/tv-in/staging-type" //get 获取拣选台类型
};

// 拣选大屏接口
export const TvPick = {
  getTvpickStockouttask: "/api/app/tv-pick/stock-out-task", //get 当前出库任务及拣选信息
  getTvpickErrorcachelist: "/api/app/tv-pick/error-cache-list", //get 获取当前工作台的异常信息
  getTvpickTodaystockoutplan: "/api/app/tv-pick/today-stock-out-plan", //get 当日出库计划表获取当日出库计划
  getTvpickTodayiLT: "/api/app/tv-pick/today-iLT" //get 当日盘点计划表
};

// 仓库管理
export const Warehouse = {
  postWarehouseExportsupplier: "/api/app/warehouse/export-supplier", //post 供应商信息导出
  deleteWarehouseSupplierBySupplierId: "/api/app/warehouse/supplier", //delete 删除供应商信息
  deleteWarehouseSupplierBySupplierIdCompleteUrl: "/api/app/warehouse/supplier/{SupplierId}", //delete 删除供应商信息
  putWarehouseSupplierBySupplierId: "/api/app/warehouse/supplier", //put 编辑供应商信息
  putWarehouseSupplierBySupplierIdCompleteUrl: "/api/app/warehouse/supplier/{SupplierId}", //put 编辑供应商信息
  getWarehouseSupplierpages: "/api/app/warehouse/supplier-pages", //get 获取供应商分页数据信息
  getWarehouseSupplierselect: "/api/app/warehouse/supplier-select", //get 获取供应商下拉框数据
  getWarehouseOrgselect: "/api/app/warehouse/org-select", //get 获取公司下拉框数据
  getWarehouseSupplierbyidBySupplierId: "/api/app/warehouse/supplier-by-id", //get 根据ID获取单条数据
  getWarehouseSupplierbyidBySupplierIdCompleteUrl: "/api/app/warehouse/supplier-by-id/{SupplierId}", //get 根据ID获取单条数据
  getWarehouseDepthwayselect: "/api/app/warehouse/depth-way-select", //get 获取多深度通道下拉框数据
  getWarehouseDepthwaypages: "/api/app/warehouse/depth-way-pages", //get 获取多深度通道分页信息
  postWarehouseDepthway: "/api/app/warehouse/depth-way", //post 创建多深度通道信息
  putWarehouseDepthwayByDepthWayId: "/api/app/warehouse/depth-way", //put 编辑多深度通道信息
  putWarehouseDepthwayByDepthWayIdCompleteUrl: "/api/app/warehouse/depth-way/{DepthWayId}", //put 编辑多深度通道信息
  deleteWarehouseDepthwayByDepthWayId: "/api/app/warehouse/depth-way", //delete 删除多深度通道信息
  deleteWarehouseDepthwayByDepthWayIdCompleteUrl: "/api/app/warehouse/depth-way/{DepthWayId}", //delete 删除多深度通道信息
  getWarehouseRowdepthwaybyidByDepthWayId: "/api/app/warehouse/row-depth-way-by-id", //get 根据ID获取单条数据多深度通道信息
  getWarehouseRowdepthwaybyidByDepthWayIdCompleteUrl:
    "/api/app/warehouse/row-depth-way-by-id/{DepthWayId}", //get 根据ID获取单条数据多深度通道信息
  postWarehouseExportdepthway: "/api/app/warehouse/export-depth-way", //post 多深度通道信息导出
  getWarehouseRoadwayselect: "/api/app/warehouse/road-way-select", //get 获取通道/货架下拉框数据
  getWarehouseRoadwaypages: "/api/app/warehouse/road-way-pages", //get 获取巷道分页信息
  postWarehouseRoadway: "/api/app/warehouse/road-way", //post 创建巷道信息
  putWarehouseRoadwayByRoadWayId: "/api/app/warehouse/road-way", //put 编辑巷道信息
  putWarehouseRoadwayByRoadWayIdCompleteUrl: "/api/app/warehouse/road-way/{roadWayId}", //put 编辑巷道信息
  deleteWarehouseRoadwayByRoadWayId: "/api/app/warehouse/road-way", //delete 删除巷道信息
  deleteWarehouseRoadwayByRoadWayIdCompleteUrl: "/api/app/warehouse/road-way/{roadWayId}", //delete 删除巷道信息
  getWarehouseRowwaybyidByRoadWayId: "/api/app/warehouse/row-way-by-id", //get 根据ID获取单条数据通道信息
  getWarehouseRowwaybyidByRoadWayIdCompleteUrl: "/api/app/warehouse/row-way-by-id/{roadWayId}", //get 根据ID获取单条数据通道信息
  postWarehouseExportroadway: "/api/app/warehouse/export-road-way", //post 巷道信息导出
  postWarehouseStaging: "/api/app/warehouse/staging", //post 创建工作台
  postWarehouseExportstaging: "/api/app/warehouse/export-staging", //post 工作台信息导出
  deleteWarehouseStagingByStagingId: "/api/app/warehouse/staging", //delete 删除工作台信息
  deleteWarehouseStagingByStagingIdCompleteUrl: "/api/app/warehouse/staging/{StagingId}", //delete 删除工作台信息
  putWarehouseStagingByStagingId: "/api/app/warehouse/staging", //put 编辑工作台信息
  putWarehouseStagingByStagingIdCompleteUrl: "/api/app/warehouse/staging/{StagingId}", //put 编辑工作台信息
  getWarehouseStagingpages: "/api/app/warehouse/staging-pages", //get 获取工作台分页数据信息
  getWarehouseStagingselect: "/api/app/warehouse/staging-select", //get 获取工作台下拉框数据
  getWarehouseStagingbyidByStagingId: "/api/app/warehouse/staging-by-id", //get 根据ID获取单条数据
  getWarehouseStagingbyidByStagingIdCompleteUrl: "/api/app/warehouse/staging-by-id/{StagingId}", //get 根据ID获取单条数据
  postWarehouseUserbindwork: "/api/app/warehouse/user-bind-work", //post 用户绑定工作台
  postWarehouseWorkscheduleplan: "/api/app/warehouse/work-schedule-plan", //post
  getWarehouseWorkscheduleplan: "/api/app/warehouse/work-schedule-plan", //get 获取排班计划数据信息
  postWarehouseDeletworkscheduleplanByWorkSchedulePlanId:
    "/api/app/warehouse/delet-work-schedule-plan", //post 删除排班计划
  postWarehouseDeletworkscheduleplanByWorkSchedulePlanIdCompleteUrl:
    "/api/app/warehouse/delet-work-schedule-plan/{workSchedulePlanId}", //post 删除排班计划
  postWarehouse: "/api/app/warehouse/warehouse", //post 创建仓库
  postWarehouseExportwarehouse: "/api/app/warehouse/export-warehouse", //post 仓库信息导出
  deleteWarehouseByWarehouseId: "/api/app/warehouse/warehouse", //delete 删除仓库信息
  deleteWarehouseByWarehouseIdCompleteUrl: "/api/app/warehouse/warehouse/{warehouseId}", //delete 删除仓库信息
  putWarehouseByWarehouseId: "/api/app/warehouse/warehouse", //put 编辑仓库信息
  putWarehouseByWarehouseIdCompleteUrl: "/api/app/warehouse/warehouse/{WarehouseId}", //put 编辑仓库信息
  getWarehouseWarehousepages: "/api/app/warehouse/warehouse-pages", //get 获取仓库分页数据信息
  getWarehouseWarehouseselect: "/api/app/warehouse/warehouse-select", //get 获取仓库下拉框数据
  getWarehouseWarehousebyidByWarehouseId: "/api/app/warehouse/warehouse-by-id", //get 根据ID获取单条数据
  getWarehouseWarehousebyidByWarehouseIdCompleteUrl:
    "/api/app/warehouse/warehouse-by-id/{warehouseId}", //get 根据ID获取单条数据
  postWarehouseExportregion: "/api/app/warehouse/export-region", //post 区域信息导出
  getWarehouseRegionselect: "/api/app/warehouse/region-select", //get 获取区域下拉框数据
  getWarehouseRegionenumselect: "/api/app/warehouse/region-enum-select", //get 获取 区域属性下拉框数据
  getWarehouseRegionpages: "/api/app/warehouse/region-pages", //get 获取区域分页数据信息
  postWarehouseRegion: "/api/app/warehouse/region", //post 创建区域
  putWarehouseRegionByRegionId: "/api/app/warehouse/region", //put 编辑区域信息
  putWarehouseRegionByRegionIdCompleteUrl: "/api/app/warehouse/region/{regionId}", //put 编辑区域信息
  deleteWarehouseRegionByRegionId: "/api/app/warehouse/region", //delete 删除区域信息
  deleteWarehouseRegionByRegionIdCompleteUrl: "/api/app/warehouse/region/{regionId}", //delete 删除区域信息
  getWarehouseRegionbyidByRegionId: "/api/app/warehouse/region-by-id", //get 根据ID获取单条数据
  getWarehouseRegionbyidByRegionIdCompleteUrl: "/api/app/warehouse/region-by-id/{RegionId}", //get 根据ID获取单条数据
  postWarehouseExportarea: "/api/app/warehouse/export-area", //post 库区信息导出
  getWarehouseAreaselect: "/api/app/warehouse/area-select", //get 获取库区下拉框数据
  getWarehouseAreapages: "/api/app/warehouse/area-pages", //get 获取库区分页数据
  postWarehouseArea: "/api/app/warehouse/area", //post 创建库区
  putWarehouseAreaByAreaId: "/api/app/warehouse/area", //put 编辑库区
  putWarehouseAreaByAreaIdCompleteUrl: "/api/app/warehouse/area/{areaId}", //put 编辑库区
  deleteWarehouseAreaByAreaId: "/api/app/warehouse/area", //delete 删除库区
  deleteWarehouseAreaByAreaIdCompleteUrl: "/api/app/warehouse/area/{areaId}", //delete 删除库区
  getWarehouseAreabyidByAreaId: "/api/app/warehouse/area-by-id", //get 根据ID获取单条数据
  getWarehouseAreabyidByAreaIdCompleteUrl: "/api/app/warehouse/area-by-id/{AreaId}", //get 根据ID获取单条数据
  postWarehouseImportcargolocation: "/api/app/warehouse/import-cargo-location", //post 库位信息导入
  getWarehouseLocationtypeselect: "/api/app/warehouse/location-type-select", //get 获取库位类型下拉框数据
  getWarehouseCargolocationpages: "/api/app/warehouse/cargo-location-pages", //get 获取库位分页数据
  postWarehouseCargolocation: "/api/app/warehouse/cargo-location", //post 创建库位
  putWarehouseCargolocationByCargoLocationId: "/api/app/warehouse/cargo-location", //put 编辑库位
  putWarehouseCargolocationByCargoLocationIdCompleteUrl:
    "/api/app/warehouse/cargo-location/{cargoLocationId}", //put 编辑库位
  deleteWarehouseCargolocationByCargoLocationId: "/api/app/warehouse/cargo-location", //delete 删除库位
  deleteWarehouseCargolocationByCargoLocationIdCompleteUrl:
    "/api/app/warehouse/cargo-location/{cargoLocationId}", //delete 删除库位
  postWarehouseExportcargolocation: "/api/app/warehouse/export-cargo-location", //post 库位信息导出
  getWarehouseCargolocationselect: "/api/app/warehouse/cargo-location-select", //get 获取库位下拉框数据
  getWarehouseCargolocationselectbyregion: "/api/app/warehouse/cargo-location-select-by-region", //get 获取库位下拉框数据区域为车身出库区域
  getWarehouseCargolocationbyidByCargoLocationId: "/api/app/warehouse/cargo-location-by-id", //get 根据ID获取单条数据
  getWarehouseCargolocationbyidByCargoLocationIdCompleteUrl:
    "/api/app/warehouse/cargo-location-by-id/{CargoLocationId}", //get 根据ID获取单条数据
  postWarehouseInitcargo: "/api/app/warehouse/init-cargo", //post
  postWarehouseInitpKCargo: "/api/app/warehouse/init-pKCargo", //post
  postWarehouseInitsamplescargolocation: "/api/app/warehouse/init-samples-cargo-location", //post
  postWarehouseContainertype: "/api/app/warehouse/container-type", //post 创建容器类型
  postWarehouseExportcontainertype: "/api/app/warehouse/export-container-type", //post 容器类型信息导出
  deleteWarehouseContainertypeByContainerTypeId: "/api/app/warehouse/container-type", //delete 删除容器类型信息
  deleteWarehouseContainertypeByContainerTypeIdCompleteUrl:
    "/api/app/warehouse/container-type/{ContainerTypeId}", //delete 删除容器类型信息
  putWarehouseContainertypeByContainerTypeId: "/api/app/warehouse/container-type", //put 编辑容器类型信息
  putWarehouseContainertypeByContainerTypeIdCompleteUrl:
    "/api/app/warehouse/container-type/{ContainerTypeId}", //put 编辑容器类型信息
  getWarehouseContainertypepages: "/api/app/warehouse/container-type-pages", //get 获取容器类型分页数据信息
  getWarehouseContainertypeselect: "/api/app/warehouse/container-type-select", //get 获取容器类型下拉框数据
  getWarehouseContainertypeselectbycode: "/api/app/warehouse/container-type-select-by-code", //get 获取容器类型下拉框数据（获取编号开头为2的数据）
  getWarehouseContainertypeselectbycode1: "/api/app/warehouse/container-type-select-by-code1", //get 获取容器类型下拉框数据（获取编号开头为1的数据）
  getWarehouseContainertypebyidByContainerTypeId: "/api/app/warehouse/container-type-by-id", //get 根据ID获取单条数据
  getWarehouseContainertypebyidByContainerTypeIdCompleteUrl:
    "/api/app/warehouse/container-type-by-id/{ContainerTypeId}", //get 根据ID获取单条数据
  postWarehouseImportcontainer: "/api/app/warehouse/import-container", //post 导入容器信息
  postWarehouseInitcontainer: "/api/app/warehouse/init-container", //post 初始化容器数据
  postWarehouseInittestcontainer: "/api/app/warehouse/init-test-container", //post
  postWarehouseInittestsamplescontainer: "/api/app/warehouse/init-test-samples-container", //post
  postWarehouseExportcontainer: "/api/app/warehouse/export-container", //post 容器信息导出
  getWarehouseContainershapetypeselect: "/api/app/warehouse/container-shape-type-select", //get 获取容器属性 枚举下拉框数据
  getWarehouseUsagestatusselect: "/api/app/warehouse/usage-status-select", //get 使用状态下拉
  getWarehouseLoadstatusselect: "/api/app/warehouse/load-status-select", //get 获取承载状态下拉框数据
  getWarehouseContainerpages: "/api/app/warehouse/container-pages", //get 获取容器分页信息数据
  postWarehouseContainer: "/api/app/warehouse/container", //post 创建容器信息
  putWarehouseContainerByContainerId: "/api/app/warehouse/container", //put 编辑容器信息
  putWarehouseContainerByContainerIdCompleteUrl: "/api/app/warehouse/container/{containerId}", //put 编辑容器信息
  deleteWarehouseContainerByContainerId: "/api/app/warehouse/container", //delete 删除容器信息
  deleteWarehouseContainerByContainerIdCompleteUrl: "/api/app/warehouse/container/{containerId}", //delete 删除容器信息
  getWarehouseContainerbyidByContainerId: "/api/app/warehouse/container-by-id", //get 根据ID获取单条数据
  getWarehouseContainerbyidByContainerIdCompleteUrl:
    "/api/app/warehouse/container-by-id/{ContainerId}", //get 根据ID获取单条数据
  postWarehouseGrade: "/api/app/warehouse/grade", //post 创建等级
  postWarehouseExportgrade: "/api/app/warehouse/export-grade", //post 等级信息导出
  deleteWarehouseGradeByGradeId: "/api/app/warehouse/grade", //delete 删除等级信息
  deleteWarehouseGradeByGradeIdCompleteUrl: "/api/app/warehouse/grade/{GradeId}", //delete 删除等级信息
  putWarehouseGradeByGradeId: "/api/app/warehouse/grade", //put 编辑等级信息
  putWarehouseGradeByGradeIdCompleteUrl: "/api/app/warehouse/grade/{GradeId}", //put 编辑等级信息
  getWarehouseGradepages: "/api/app/warehouse/grade-pages", //get 获取等级分页数据信息
  getWarehouseGradeselect: "/api/app/warehouse/grade-select", //get 获取等级下拉框数据
  getWarehouseGradebyidByGradeId: "/api/app/warehouse/grade-by-id", //get 根据ID获取单条数据
  getWarehouseGradebyidByGradeIdCompleteUrl: "/api/app/warehouse/grade-by-id/{GradeId}", //get 根据ID获取单条数据
  postWarehousePoint: "/api/app/warehouse/point", //post 创建出入库点位
  postWarehouseExportpoint: "/api/app/warehouse/export-point", //post 出入库点位信息导出
  deleteWarehousePointByPointId: "/api/app/warehouse/point", //delete 删除出入库点位信息
  deleteWarehousePointByPointIdCompleteUrl: "/api/app/warehouse/point/{PointId}", //delete 删除出入库点位信息
  putWarehousePointByPointId: "/api/app/warehouse/point", //put 编辑出入库点位信息
  putWarehousePointByPointIdCompleteUrl: "/api/app/warehouse/point/{PointId}", //put 编辑出入库点位信息
  getWarehousePointpages: "/api/app/warehouse/point-pages", //get 获取出入库点位分页数据信息
  getWarehousePointselect: "/api/app/warehouse/point-select", //get 获取出入库点位下拉框数据
  getWarehousePointtypeselect: "/api/app/warehouse/point-type-select", //get 获取点位类型下拉框数据
  getWarehousePointbyidByPointId: "/api/app/warehouse/point-by-id", //get 根据ID获取单条数据
  getWarehousePointbyidByPointIdCompleteUrl: "/api/app/warehouse/point-by-id/{PointId}", //get 根据ID获取单条数据
  postWarehouseShipper: "/api/app/warehouse/shipper", //post 创建客户
  postWarehouseExportshipper: "/api/app/warehouse/export-shipper", //post 客户信息导出
  deleteWarehouseShipperByShipperId: "/api/app/warehouse/shipper", //delete 删除客户信息
  deleteWarehouseShipperByShipperIdCompleteUrl: "/api/app/warehouse/shipper/{ShipperId}", //delete 删除客户信息
  putWarehouseShipperByShipperId: "/api/app/warehouse/shipper", //put 编辑客户信息
  putWarehouseShipperByShipperIdCompleteUrl: "/api/app/warehouse/shipper/{ShipperId}", //put 编辑客户信息
  getWarehouseShipperpages: "/api/app/warehouse/shipper-pages", //get 获取客户分页数据信息
  getWarehouseShipperselect: "/api/app/warehouse/shipper-select", //get 获取客户下拉框数据
  getWarehouseStagingtypeselect: "/api/app/warehouse/staging-type-select", //get 获取工作台下拉框数据
  getWarehouseShippertypeselect: "/api/app/warehouse/shipper-type-select", //get 获取客户下拉框数据
  getWarehouseCreateuserselect: "/api/app/warehouse/create-user-select", //get 获取创建人下拉框数据
  getWarehouseShipperbyidByShipperId: "/api/app/warehouse/shipper-by-id", //get 根据ID获取单条数据
  getWarehouseShipperbyidByShipperIdCompleteUrl: "/api/app/warehouse/shipper-by-id/{ShipperId}", //get 根据ID获取单条数据
  postWarehouseSupplier: "/api/app/warehouse/supplier" //post 创建供应商
};

// 出入库服务通用工具
export const InOutStockServiceHelper = {
  postInoutstockservicehelperGeneraterestock:
    "/api/app/in-out-stock-service-helper/generate-restock", //post 生成余料回库任务
  postInoutstockservicehelperDownwcstask: "/api/app/in-out-stock-service-helper/down-wcs-task", //post 下发WCS任务
  postInoutstockservicehelperDownbatchwcstask:
    "/api/app/in-out-stock-service-helper/down-batch-wcs-task", //post 批量下发WCS任务
  postInoutstockservicehelperCancelwcstask: "/api/app/in-out-stock-service-helper/cancel-wcs-task" //post 取消WCS任务
};

// 打印标签服务接口
export const PrintLabel = {
  postPrintlabelSendzpltoprinter: "/api/app/print-label/send-zpl-to-printer", //post 发送ZPL指令到打印机
  getPrintlabelPrinter: "/api/app/print-label/printer" //get
};

// PDA码盘相关接口
export const PdaPalletSort = {
  postPdapalletsortVerifycargolocation: "/api/app/pda-pallet-sort/verify-cargo-location", //post 校验入库位状态
  getPdapalletsortAdmissioninfobytagnumberframenumber:
    "/api/app/pda-pallet-sort/admission-info-by-tagnumber-framenumber", //get 根据车身标签号或车架号获取入场信息（车身追溯信息）
  postPdapalletsortCarbodypalletsort: "/api/app/pda-pallet-sort/carbody-pallet-sort", //post PDA组盘-车身
  postPdapalletsortSamplespalletsort: "/api/app/pda-pallet-sort/samples-pallet-sort", //post PDA组盘-样件
  getPdapalletsortSamplesbytagnumber: "/api/app/pda-pallet-sort/samples-by-tagnumber", //get 根据样件标签号查询收货订单
  postPdapalletsortCheckplatingstatus: "/api/app/pda-pallet-sort/check-plating-status", //post 校验样件组盘状态
  getPdapalletsortAdmissioninfobytagno: "/api/app/pda-pallet-sort/admission-info-by-tagno", //get PDA外仓入库-车身信息获取
  postPdapalletsortConfirmcarbodyenter: "/api/app/pda-pallet-sort/confirm-carbody-enter", //post PDA外仓入库-确认车身入库
  getPdapalletsortSamplesbytagno: "/api/app/pda-pallet-sort/samples-by-tagno", //get PDA外仓入库-收货单获取
  postPdapalletsortConfirmsamplesenter: "/api/app/pda-pallet-sort/confirm-samples-enter", //post PDA外仓入库-确认样件入库
  postPdapalletsortDowntask: "/api/app/pda-pallet-sort/down-task" //post 根据托盘码下发WCS任务
};

// PDA接驳口模式管理应用服务
export const PdaTranShipMode = {
  postPdatranshipmodeQuerylanewaymode: "/api/app/pda-tran-ship-mode/query-lane-way-mode", //post 查询巷道接驳口模式
  postPdatranshipmodeChangelanewaytranshipmode:
    "/api/app/pda-tran-ship-mode/change-lane-way-tran-ship-mode", //post 修改巷道接驳口模式
  getPdatranshipmodeLanewaymodes: "/api/app/pda-tran-ship-mode/lane-way-modes" //get 获取全部巷道及其接驳口模式信息
};

// 拣选屏接口
export const PickScreen = {
  getPickscreenOnlinestagginfodto: "/api/app/pick-screen/online-stagg-info-dto", //get 获取用户工作台信息(每5秒拉一次)
  getPickscreenOnliestaging: "/api/app/pick-screen/onlie-staging", //get
  getPickscreenPickallocationtask: "/api/app/pick-screen/pick-allocation-task", //get 获取波次拣选任务
  getPickscreenContainertaskprocessing: "/api/app/pick-screen/container-task-processing", //get 获取容器任务进度
  getPickscreenPickcargolocationinput: "/api/app/pick-screen/pick-cargo-location-input", //get 获取拣选
  getPickscreenNotpickcargolocation: "/api/app/pick-screen/not-pick-cargo-location", //get 获取未拣选任务行汇总
  getPickscreenPickserialnumberpages: "/api/app/pick-screen/pick-serial-number-pages", //get 分页获取波次拣选序列号
  getPickscreenPickcargolocationinfo: "/api/app/pick-screen/pick-cargo-location-info", //get 获取分播格口信息
  postPickscreenScanserialnumber: "/api/app/pick-screen/scan-serial-number", //post
  postPickscreenOutofstockpick: "/api/app/pick-screen/out-of-stock-pick" //post 缺货提交
};

// 报表业务接口
export const BusinessReport = {
  getBusinessreportStockbIPagedresult: "/api/app/business-report/stock-bIPaged-result", //get 分页查询当日库存报表数据
  postBusinessreportExportstockbI: "/api/app/business-report/export-stock-bI", //post 导出当日库存报表数据
  postBusinessreportGeneratestockbI: "/api/app/business-report/generate-stock-bI", //post 生成库存报表数据
  getBusinessreportDevicebIPagedresult: "/api/app/business-report/device-bIPaged-result", //get 分页查询设备异常信息报表数据
  postBusinessreportExportdevicebI: "/api/app/business-report/export-device-bI", //post 导出设备异常信息报表数据
  postBusinessreportGeneratedevicebI: "/api/app/business-report/generate-device-bI", //post 生成设备异常信息报表数据
  getBusinessreportDevicereportdetailpagedresult:
    "/api/app/business-report/device-report-detail-paged-result", //get 分页查询设备异常报警详情数据
  postBusinessreportExportdevicereportdetail:
    "/api/app/business-report/export-device-report-detail", //post 导出设备异常报警详情数据
  postBusinessreportGeneratedevicebIDetail: "/api/app/business-report/generate-device-bIDetail", //post 生成设备异常报警详情数据
  getBusinessreportOrderpagedresult: "/api/app/business-report/order-paged-result", //get 分页查询出入库订单报表数据
  postBusinessreportExportorder: "/api/app/business-report/export-order" //post 导出出入库订单报表数据
};

