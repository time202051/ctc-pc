import { Dialog, Form, FormItem } from 'element-ui'

// dialogTemplate的入参form的类型定义
interface IForm extends Pick<Dialog, 'width' | 'showClose'>, Pick<Form, 'model' | 'rules'> {
    dialogFormVisible: boolean;//dialog是否可见 visible.sync
    title?: string;//dialog标题
    model: IModelItem[];//表单项model,用于渲染表单组件
    value: Record<string, any>;//组件值
    requestData: {
        url: string;
        methodsType: 'get' | 'post';
        flage?: string;
        fn: () => void; //接口成功的回调，一般是this.getTable用于刷新表格数据
        [key: string]: any;

        // 特殊场景
        specialFn?: boolean; // 是否有特殊处理
        password?: boolean; // 是否需要密码验证
        flagesPD?: boolean; // 特殊页面标识
        flages?: boolean; // 任务页面标识
        taskovercomelted?: boolean; // 特殊任务标识
    };
    attrs?: Record<string, any>;//组件属性 form的$attrs
    [key: string]: any;
}

interface IModelItem extends Pick<FormItem, 'label' | 'prop' | 'required'> {
    type: 'input' | 'number' | 'textarea' | 'checkbox' | 'switch' | 'date' | 'treeSelect' | 'select' | 'inputSpecial' | 'slot' | string;//组件类型
    width?: string;//el-form-item的宽度 75%
    placeholder?: string;//组件placeholder
    readonly?: boolean;//是否只读
    clearable?: boolean;//是否可清空
    disabled?: boolean;//是否禁用
    child?: Array<{ key: string; value: string }>;// 复选框或下拉框的选项

    // 特殊场景
    showPassword?: boolean; // 是否显示密码
    autosize?: boolean; // 自动调整文本域大小
    props?: Record<string, any>; // 其他参数 内置类型
    name?: string //具名插槽(只type='slot'时有效)
}