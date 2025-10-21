/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 通过物料编码模糊搜索物料信息
 * @param {Object} params - 请求参数
 * @param {string} [params.productCode] - 
*/
export const getProductProductlistbycode = (params, options = {}) => {
 return api({
  url: `/api/app/product/product-list-by-code`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建货主
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.ownerCode - 货主编码
 * @param {string} body.ownerName - 货主名称
 * @param {string} [body.orgId] - 公司ID
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} [body.remark] - 备注
*/
export const postProductOwner = (body, options = {}) => {
 return api({
  url: `/api/app/product/owner`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 货主信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.ownerCode] - 货主编码
 * @param {string} [body.ownerName] - 货主名称
*/
export const postProductExportowner = (body, options = {}) => {
 return api({
  url: `/api/app/product/export-owner`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除货主信息
 * @param {Object} params - 请求参数
 * @param {string} params.OwnerId - 
*/
export const deleteProductOwnerByOwnerId = (OwnerId, options = {}) => {
 return api({
  url: `/api/app/product/owner/${OwnerId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑货主信息
 * @param {Object} params - 请求参数
 * @param {string} params.OwnerId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.ownerCode - 货主编码
 * @param {string} body.ownerName - 货主名称
 * @param {string} [body.orgId] - 公司ID
 * @param {boolean} [body.enabled] - 是否可用
 * @param {string} [body.remark] - 备注
*/
export const putProductOwnerByOwnerId = (OwnerId, body, options = {}) => {
 return api({
  url: `/api/app/product/owner/${OwnerId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取货主分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.OwnerCode] - 货主编码
 * @param {string} [params.OwnerName] - 货主名称
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getProductOwnerpages = (params, options = {}) => {
 return api({
  url: `/api/app/product/owner-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取货主下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getProductOwnerselect = (params, options = {}) => {
 return api({
  url: `/api/app/product/owner-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取单位字典
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getProductDicbyunit = (params, options = {}) => {
 return api({
  url: `/api/app/product/dic-by-unit`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.OwnerId - 
*/
export const getProductOwnerbyidByOwnerId = (OwnerId, options = {}) => {
 return api({
  url: `/api/app/product/owner-by-id/${OwnerId}`,
  method: "get",
  ...options
 });
};

/**
 * 创建物料分类
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.classCode - 仓库编码
 * @param {string} body.className - 仓库名称
 * @param {string} [body.parentCode] - 上级分类编码
 * @param {number} [body.classLevel] - 分类等级
*/
export const postProductProductclass = (body, options = {}) => {
 return api({
  url: `/api/app/product/product-class`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 物料分类信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.productClassCode] - 物料分类编码
 * @param {string} [body.productClassName] - 物料分类描述
*/
export const postProductExportproductclass = (body, options = {}) => {
 return api({
  url: `/api/app/product/export-product-class`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除物料分类信息
 * @param {Object} params - 请求参数
 * @param {string} params.ProductClassId - 
*/
export const deleteProductProductclassByProductClassId = (ProductClassId, options = {}) => {
 return api({
  url: `/api/app/product/product-class/${ProductClassId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑物料分类信息
 * @param {Object} params - 请求参数
 * @param {string} params.ProductClassId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} body.classCode - 仓库编码
 * @param {string} body.className - 仓库名称
 * @param {string} [body.parentCode] - 上级分类编码
 * @param {number} [body.classLevel] - 分类等级
*/
export const putProductProductclassByProductClassId = (ProductClassId, body, options = {}) => {
 return api({
  url: `/api/app/product/product-class/${ProductClassId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 获取物料分类分页数据信息
 * @param {Object} params - 请求参数
 * @param {string} [params.ProductClassCode] - 物料分类编码
 * @param {string} [params.ProductClassName] - 物料分类描述
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getProductProductclasspages = (params, options = {}) => {
 return api({
  url: `/api/app/product/product-class-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 获取物料分类下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getProductProductclassselect = (params, options = {}) => {
 return api({
  url: `/api/app/product/product-class-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据上级物料分类ID 获取子级物料分类等级
 * @param {Object} params - 请求参数
 * @param {string} [params.compareKey] - 
*/
export const getProductProductclasssublevel = (params, options = {}) => {
 return api({
  url: `/api/app/product/product-class-sub-level`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.ProductClassId - 
*/
export const getProductProductclassbyidByProductClassId = (ProductClassId, options = {}) => {
 return api({
  url: `/api/app/product/product-class-by-id/${ProductClassId}`,
  method: "get",
  ...options
 });
};

/**
 * 创建物料与货主关系
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.ownerId] - 
 * @param {string} [body.productId] - 
 * @param {boolean} [body.isBatch] - 批次管理
 * @param {boolean} [body.isValidity] - 有效期管理
 * @param {boolean} [body.isSerial] - 序列号管理
 * @param {boolean} [body.isInspection] - 质检管理
 * @param {boolean} [body.isDisassemble] - 拆零拣选
 * @param {number} [body.packingCount] - 托包装数量
*/
export const postProductProductowner = (body, options = {}) => {
 return api({
  url: `/api/app/product/product-owner`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 物料与货主关系信息导出
 * @param {Object} body - 请求参数
 * @param {string} [body.productId] - 产品ID
 * @param {string} [body.ownerId] - 货主ID
*/
export const postProductExportproductowner = (body, options = {}) => {
 return api({
  url: `/api/app/product/export-product-owner`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 删除物料与货主关系信息
 * @param {Object} params - 请求参数
 * @param {string} params.ProductOwnerId - 
*/
export const deleteProductProductownerByProductOwnerId = (ProductOwnerId, options = {}) => {
 return api({
  url: `/api/app/product/product-owner/${ProductOwnerId}`,
  method: "del",
  ...options
 });
};

/**
 * 编辑物料与货主关系信息
 * @param {Object} params - 请求参数
 * @param {string} params.ProductOwnerId - 
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.ownerId] - 
 * @param {string} [body.productId] - 
 * @param {boolean} [body.isBatch] - 批次管理
 * @param {boolean} [body.isValidity] - 有效期管理
 * @param {boolean} [body.isSerial] - 序列号管理
 * @param {boolean} [body.isInspection] - 质检管理
 * @param {boolean} [body.isDisassemble] - 拆零拣选
 * @param {number} [body.packingCount] - 托包装数量
*/
export const putProductProductownerByProductOwnerId = (ProductOwnerId, body, options = {}) => {
 return api({
  url: `/api/app/product/product-owner/${ProductOwnerId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.ProductOwnerId - 
*/
export const getProductProductownerbyidByProductOwnerId = (ProductOwnerId, options = {}) => {
 return api({
  url: `/api/app/product/product-owner-by-id/${ProductOwnerId}`,
  method: "get",
  ...options
 });
};

/**
 * 根据货主获取货主相关所有物料数据
 * @param {Object} params - 请求参数
 * @param {string} params.OwnerId - 
*/
export const getProductByowneridByOwnerId = (OwnerId, options = {}) => {
 return api({
  url: `/api/app/product/by-owner-id/${OwnerId}`,
  method: "get",
  ...options
 });
};

/**
 * 根据物料获取货主相关所有货主数据
 * @param {Object} params - 请求参数
 * @param {string} params.ProductId - 
*/
export const getProductByproductidByProductId = (ProductId, options = {}) => {
 return api({
  url: `/api/app/product/by-product-id/${ProductId}`,
  method: "get",
  ...options
 });
};

/**
 * 根据物料ID和货主ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} [params.productId] - 
 * @param {string} [params.ownerId] - 
*/
export const getProductProductownerbyid = (params, options = {}) => {
 return api({
  url: `/api/app/product/product-owner-by-id`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 无描述
 * @param {Object} params - 请求参数
 * @param {string} [params.ProductCode] - 物料编码
 * @param {string} [params.ProductName] - 物料描述
 * @param {number} [params.ProductType] - 存货类别
 * @param {number} [params.ProductLevel] - ABC
 * @param {string} [params.ProductClassId] - 物料分类ID
 * @param {boolean} [params.Enabled] - 可用状态
 * @param {string} [params.CreatedOn] - 创建时间
 * @param {string} [params.Sorting] - 
 * @param {number} [params.Page] - 
 * @param {string} [params.BeginTime] - 
 * @param {string} [params.EndTime] - 
 * @param {number} [params.SkipCount] - 
 * @param {number} [params.MaxResultCount] - 
*/
export const getProductProductpages = (params, options = {}) => {
 return api({
  url: `/api/app/product/product-pages`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 创建产品
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.ownerId] - 
 * @param {string} [body.productId] - 
 * @param {boolean} [body.isBatch] - 批次管理
 * @param {boolean} [body.isValidity] - 有效期管理
 * @param {boolean} [body.isSerial] - 序列号管理
 * @param {boolean} [body.isInspection] - 质检管理
 * @param {boolean} [body.isDisassemble] - 拆零拣选
 * @param {number} [body.packingCount] - 托包装数量
 * @param {string} body.productCode - 产品编码
 * @param {string} body.productName - 产品名称
 * @param {string} [body.productClassId] - 物料分类ID
 * @param {string} [body.basicUnitId] - 基本单位
 * @param {number} [body.packagingRate] - 包装率
 * @param {string} [body.completeUnitId] - 整体单位
 * @param {string} [body.spec] - 包装规格型号
 * @param {number} [body.periodOfValidity] - 有效期/保质期
 * @param {number} [body.maxInventory] - 最大库存量
 * @param {number} [body.secureInventory] - 安全库存量
 * @param {boolean} [body.isWrapFilm] - 
 * @param {number} [body.productLevel] - ABC标识
 * @param {number} [body.productType] - 存货类别
 * @param {number} [body.volume] - 体积
 * @param {string} [body.color] - 颜色
 * @param {number} [body.grossWeight] - 毛重
 * @param {number} [body.netWeight] - 净重
 * @param {number} [body.attribute] - 
 * @param {number} [body.supplyType] - 
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 备注
*/
export const postProduct = (body, options = {}) => {
 return api({
  url: `/api/app/product/product`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 编辑产品
 * @param {Object} params - 请求参数
 * @param {string} params.productId - 产品ID
 * @param {Object} body - 请求参数
 * @param {Object} [body.extraProperties] - 
 * @param {string} [body.ownerId] - 
 * @param {string} [body.productId] - 
 * @param {boolean} [body.isBatch] - 批次管理
 * @param {boolean} [body.isValidity] - 有效期管理
 * @param {boolean} [body.isSerial] - 序列号管理
 * @param {boolean} [body.isInspection] - 质检管理
 * @param {boolean} [body.isDisassemble] - 拆零拣选
 * @param {number} [body.packingCount] - 托包装数量
 * @param {string} body.productCode - 产品编码
 * @param {string} body.productName - 产品名称
 * @param {string} [body.productClassId] - 物料分类ID
 * @param {string} [body.basicUnitId] - 基本单位
 * @param {number} [body.packagingRate] - 包装率
 * @param {string} [body.completeUnitId] - 整体单位
 * @param {string} [body.spec] - 包装规格型号
 * @param {number} [body.periodOfValidity] - 有效期/保质期
 * @param {number} [body.maxInventory] - 最大库存量
 * @param {number} [body.secureInventory] - 安全库存量
 * @param {boolean} [body.isWrapFilm] - 
 * @param {number} [body.productLevel] - ABC标识
 * @param {number} [body.productType] - 存货类别
 * @param {number} [body.volume] - 体积
 * @param {string} [body.color] - 颜色
 * @param {number} [body.grossWeight] - 毛重
 * @param {number} [body.netWeight] - 净重
 * @param {number} [body.attribute] - 
 * @param {number} [body.supplyType] - 
 * @param {boolean} [body.enabled] - 状态
 * @param {string} [body.remark] - 备注
*/
export const putProductByProductId = (productId, body, options = {}) => {
 return api({
  url: `/api/app/product/product/${productId}`,
  method: "put",
  data: body,
  ...options
 });
};

/**
 * 删除产品
 * @param {Object} params - 请求参数
 * @param {string} params.productId - 
*/
export const deleteProductByProductId = (productId, options = {}) => {
 return api({
  url: `/api/app/product/product/${productId}`,
  method: "del",
  ...options
 });
};

/**
 * 根据ID获取单条数据
 * @param {Object} params - 请求参数
 * @param {string} params.ProductId - 
*/
export const getProductProductbyidByProductId = (ProductId, options = {}) => {
 return api({
  url: `/api/app/product/product-by-id/${ProductId}`,
  method: "get",
  ...options
 });
};

/**
 * 获取物料下拉框数据
 * @param {Object} params - 请求参数
 * @param {string} [params.productCode] - 
 * @param {string} [params.compareKey] - 
*/
export const getProductProductselect = (params, options = {}) => {
 return api({
  url: `/api/app/product/product-select`,
  method: "get",
  params,
  ...options
 });
};

/**
 * 物料信息导出
 * @param {Object} body - 请求参数
 * @param {number} [body.maxResultCount] - 
 * @param {string} [body.sorting] - 
 * @param {number} [body.page] - 
 * @param {string} [body.beginTime] - 
 * @param {string} [body.endTime] - 
 * @param {number} [body.skipCount] - 
 * @param {string} [body.productCode] - 物料编码
 * @param {string} [body.productName] - 物料描述
 * @param {number} [body.productType] - 存货类别
 * @param {number} [body.productLevel] - ABC标识
 * @param {string} [body.productClassId] - 物料分类ID
 * @param {boolean} [body.enabled] - 可用状态
 * @param {string} [body.createdOn] - 创建时间
*/
export const postProductExportstock = (body, options = {}) => {
 return api({
  url: `/api/app/product/export-stock`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 物料信息导入
*/
export const postProductImportproduct = (options = {}) => {
 return api({
  url: `/api/app/product/import-product`,
  method: "post",
  ...options
 });
};

/**
 * 物料导入模板下载
*/
export const postProductDownproduct = (options = {}) => {
 return api({
  url: `/api/app/product/down-product`,
  method: "post",
  ...options
 });
};

