const columns = {
  generalPloyment: [
    {
      prop: "productName",
      label: "样件名称"
    },
    {
      prop: "qty",
      label: "数量"
    },
    {
      prop: "batchNumber",
      label: "批次状态"
    },
    {
      prop: "cargoLocationCode",
      label: "库位号"
    },
    {
      prop: "experimentTtpNumber",
      label: "T-/TP-"
    },
    {
      prop: "remarks",
      label: "备注"
    },
    {
      prop: "torqueRequirement",
      label: "扭矩需求"
    }
  ],
  cePeng: [
    {
      prop: "productName",
      label: "样件名称"
    },
    {
      prop: "qty",
      label: "数量"
    },
    {
      prop: "batchNumber",
      label: "批次状态"
    },
    {
      prop: "remarks",
      label: "备注"
    },
    {
      prop: "torqueRequirement",
      label: "扭矩需求"
    },
    {
      prop: "cargoLocationCode",
      label: "库位号"
    },
    {
      prop: "tsNumber",
      label: "TS编号"
    }
  ],
  zhengPeng: [
    {
      prop: "productName",
      label: "样件名称"
    },
    {
      prop: "remarks",
      label: "备注"
    },
    {
      prop: "qty",
      label: "数量"
    },
    {
      prop: "batchNumber",
      label: "批次状态"
    },
    {
      prop: "experimentTtpNumber",
      label: "T-/TP-"
    },
    {
      prop: "torqueRequirement",
      label: "扭矩需求"
    },
    {
      prop: "cargoLocationCode",
      label: "库位号"
    },
    {
      prop: "tsNumber",
      label: "TS编号"
    }
  ],
  zuoyihuache: [
    {
      prop: "productName",
      label: "样件名称"
    },
    {
      prop: "qty",
      label: "数量"
    },
    {
      prop: "experimentTtpNumber",
      label: "T-/TP-"
    },
    {
      prop: "batchNumber",
      label: "批次状态"
    },
    {
      prop: "cargoLocationCode",
      label: "库位号"
    },
    {
      prop: "remarks",
      label: "备注"
    },
    {
      prop: "tsNumber",
      label: "TS编号"
    }
  ]
};

export const typeGroupEnum = {
  // carBodyTraceManagement: [0, 10, 13], // 车身追溯管理单选
  carBodyTraceManagement: [0, 10, 13, 14, 15, 16, 17, 18, 19, 20], // 车身追溯管理单选
  // carBodyTraceManagement: [0, 10, 13, 14, 15], // 车身追溯管理单选
  carBodyTraceManagementMore: [8], // 车身追溯管理多选
  receiveOrderSample: [12], // 收获订单-样件
  CKOrder: [1, 2, 3, 4, 5, 6, 7, 9, 11] // 出库订单
};

export const staticData = [
  {
    type: 0,
    componentName: "VehicleHandoverRegistration",
    label: "F113 实验车辆交接登记单 2.1",
    titleCN: "整车出入库登记表",
    titleEN: ""
  },
  {
    type: 1,
    componentName: "GeneralPloyment",
    label: "F115 样件准备工作单-IC爆破 2.3",
    titleCN: "样件准备工作单-IC爆破",
    titleEN: "Part Kitting Request-IC Deployment",
    tableColumns: columns.generalPloyment,
    hiddenAutoliv: true,
    img1: require("@/assets/print/ic1.png"),
    img2: require("@/assets/print/ic2.png")
  },
  {
    type: 2,
    componentName: "GeneralPloyment",
    label: "F115 样件准备工作单-PAB爆破  2.3",
    titleCN: "样件准备工作单-PAB爆破",
    titleEN: "Part Kitting Request-PAB Deployment",
    tableColumns: columns.generalPloyment,
    hiddenAutoliv: true,
    img1: require("@/assets/print/pab1.png"),
    img2: require("@/assets/print/pab2.png")
  },
  {
    type: 3,
    componentName: "GeneralPloyment",
    label: "F115 样件准备工作单-OOP  2.3",
    titleCN: "样件准备工作单-OOP",
    titleEN: "Part Kitting Request-OOP",
    tableColumns: columns.generalPloyment,
    hiddenAutoliv: true,
    img1: require("@/assets/print/oop1.png"),
    img2: require("@/assets/print/pab2.png")
  },
  {
    type: 4,
    componentName: "GeneralPloyment",
    label: "F115 样件准备工作单-SAB爆破  2.3",
    titleCN: "样件准备工作单-SAB爆破",
    titleEN: "Part Kitting Request-SAB Deployment",
    tableColumns: columns.generalPloyment,
    hiddenAutoliv: true,
    img1: require("@/assets/print/sab1.png"),
    img2: require("@/assets/print/pab2.png")
  },
  {
    type: 5,
    componentName: "GeneralPloyment",
    label: "F115 样件准备工作单-侧碰  2.3",
    titleCN: "样件准备工作单-实车/侧滑",
    titleEN: "Part Kitting Request-Crash &Side sled",
    tableColumns: columns.cePeng,
    hiddenAutoliv: true,
    img1: require("@/assets/print/cepeng1.png"),
    img2: require("@/assets/print/pab2.png")
  },
  {
    type: 6,
    componentName: "GeneralPloyment",
    label: "F115 样件准备工作单-正碰  2.3",
    titleCN: "样件准备工作单-正碰",
    titleEN: "Part Kitting Request-Frontal Sled Test",
    tableColumns: columns.zhengPeng,
    hiddenAutoliv: true,
    img1: require("@/assets/print/zhengpeng1.png"),
    img2: require("@/assets/print/pab2.png")
  },
  {
    type: 7,
    componentName: "GeneralPloyment",
    label: "F115 样件准备工作单-座椅滑车试验  2.3",
    titleCN: "样件准备工作单-座椅滑车试验",
    titleEN: "Part Kitting Request-Seat Sled Test",
    tableColumns: columns.zuoyihuache,
    hiddenAutoliv: true,
    img3: require("@/assets/print/zuoyihuache.png")
  },
  {
    type: 8,
    componentName: "ApplicationDisposal",
    label: "F121 车辆报废申请单",
    titleCN: "车辆报废申请单",
    titleEN: "",
    hiddenAutoliv: true,
    img1: require("@/assets/print/baofeiHeader.png"),
    img2: require("@/assets/print/baofei.png")
  },
  {
    type: 9,
    componentName: "SampleAccepted",
    label: "F344 CTC实验后样件领用单 1.0",
    titleCN: "CTC实验后样件领用单",
    titleEN: "",
    hiddenAutoliv: true,
    img2: require("@/assets/print/yangjianlinyong.png")
  },
  {
    type: 10,
    componentName: "HandoverRegistration",
    label: "F441 实验车辆交接登记表  1.0",
    titleCN: "实验车辆交接登记表",
    titleEN: "",
    logo: require("@/assets/print/autoliv-logo.png"),
    width: "40px",
    img: require("@/assets/print/handoverRegistration.png")
  },
  {
    type: 11,
    componentName: "ProductionMaterialOrderCTC",
    label: "F036 CTC非生产领料单 2.0",
    titleCN: "CTC非生产领料单",
    titleEN: "Non-Production Material Order for CTC",
    hiddenAutoliv: true,
    img2: require("@/assets/print/ctc2.png")
  },
  {
    type: 12,
    componentName: "NonProductionWarehousing",
    label: "F038 CTC非生产入库单 2.0",
    titleCN: "CTC非生产入库单",
    hiddenAutoliv: true,
    img: require("@/assets/print/nonProductionWarehousing.png")
  },
  {
    type: 13,
    componentName: "AcceptionRecord",
    label: "F043 试验车辆接收登记表",
    titleCN: "试验车辆接收登记表",
    titleEN: "Accepting Record",
    hiddenAutoliv: true,
    img: require("@/assets/print/acceptionRecord.png")
  },
  {
    type: 14,
    componentName: "WhiteBodyRegistrationForm",
    label: "F440 白车身登记表",
    titleCN: "白车身登记表",
    img: require("@/assets/print/whiteBodyRegistrationForm.png")
  },
  {
    type: 15,
    componentName: "WhiteBodyEntryAndExitRegistrationForm",
    label: "F440 白车身出入登记表",
    titleCN: "白车身出入登记表",
    logo: require("@/assets/print/autoliv-logo.png"),
    width: "40px"
  },
  {
    type: 16,
    componentName: "ExperimentalVehicleHandoverRegistrationForm",
    label: "F113 实验车辆交接登记单",
    titleCN: "实验车辆交接登记表",
    img: require("@/assets/print/experimentalVehicleHandoverRegistrationForm.png")
  },
  {
    type: 17,
    componentName: "VehicleInAndOutInventoryRegistrationForm",
    label: "F113 整车出入库登记表",
    titleCN: "整车出入库登记表",
    img: require("@/assets/print/vehicleInAndOutInventoryRegistrationForm.png")
  },
  {
    type: 18,
    componentName: "PictureVehicleExperiment",
    label: "F113 实验车辆交接图片（一）",
    titleCN: "实验车辆交接图片（一）",
    hiddenAutoliv: true,
    isShowLogo: false,
    list: ["入场1:", "入场2:", "出厂1:", "出厂2:"]
  },
  {
    type: 19,
    componentName: "PictureVehicleExperiment",
    label: "F113 整车车身图片（二）",
    titleCN: "整车车身图片（二）",
    hiddenAutoliv: true,
    isShowLogo: false,
    list: [
      "车架号:",
      "发动机号:",
      "车身前部取照:",
      "车身后部取照:",
      "车身左侧取照:",
      "车身右侧取照:"
    ]
  },
  {
    type: 20,
    componentName: "PictureVehicleExperiment",
    label: "F113 整车车身图片（三）",
    titleCN: "整车车身图片（三）",
    hiddenAutoliv: true,
    isShowLogo: false,
    list: [
      "发动机舱取照:",
      "后备箱取照（拍随车工具、备胎等）:",
      "主驾处向仪表板取照:",
      "主驾处向主副驾座椅取照:",
      "副驾处向仪表板取照:",
      "后排座椅取照:"
    ]
  }
];
