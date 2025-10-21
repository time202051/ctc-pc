/**
 * ⚠️  警告：此文件由脚本自动生成，请勿手动编辑！
 * ��  如需修改，请重新运行生成脚本
 * 📅  生成时间: 2025/9/12 09:12:25
 */

import { api } from "@/api/request/sendRuest"
/**
 * 发送ZPL指令到打印机
 * @param {Object} body - 请求参数
 * @param {string} [body.zplCommand] - ZPL指令
 * @param {string} [body.printerIp] - 打印机IP地址
 * @param {number} [body.printerPort] - 打印机端口
*/
export const postPrintlabelSendzpltoprinter = (body, options = {}) => {
 return api({
  url: `/api/app/print-label/send-zpl-to-printer`,
  method: "post",
  data: body,
  ...options
 });
};

/**
 * 无描述
*/
export const getPrintlabelPrinter = (options = {}) => {
 return api({
  url: `/api/app/print-label/printer`,
  method: "get",
  ...options
 });
};

