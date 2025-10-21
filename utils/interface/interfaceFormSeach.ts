import { DatePicker } from 'element-ui'

interface IAttrs {
    [key: string]: any
}

interface ITableSearchItemBase {
    show?: boolean;//是否显示
    label?: string;//标签
    value: keyof IValues | string;//值
    placeholder?: string;//占位符 (如果不传则用label)
    labelProps?: any;//标签属性继承el-form-item的attrs属性
    props?: Omit<IAttrs, 'label' | 'value' | 'clearable' | 'placeholder'>
}

interface ISelectOptionsItem {
    key: string;//就是label
    value: keyof IValues | string;
}

interface IInputItem extends ITableSearchItemBase {
    inputType: 'input';//类型
    maxlength?: number;//最大长度
    props?: Omit<IAttrs, 'label' | 'value' | 'clearable' | 'placeholder' | 'maxlength'>
}


interface ISelectItem extends ITableSearchItemBase {
    inputType: 'select';//类型
    loadmores?: any;//自定义指令
    props: Omit<IAttrs, 'label' | 'value' | 'clearable' | 'placeholder' | 'popper-append-to-body'>;//组件el-select属性继承
    children: ISelectOptionsItem[];//选项数组
    change?: (event: any) => void;//change事件
}


interface ITableSearchSelectTEMP extends ITableSearchItemBase {
    inputType: 'selectTEMP';//类型
    loadmores?: any;//自定义指令
    props: Omit<IAttrs, 'label' | 'value' | 'clearable' | 'placeholder' | 'popper-append-to-body'>;//组件el-select属性继承
    children: ISelectOptionsItem[];//选项数组
    change?: (event: any) => void;//change事件
}

interface IPickerItem {
    inputType: 'picker',
    value: string, //v-model双向绑定的值
    props?: Omit<DatePicker, 'defaultValue' | 'clearable'> //type默认date

}

interface IValues {
    [key: string]: any
}

type ITableSearchItem = IInputItem | ISelectItem | ITableSearchSelectTEMP | IPickerItem | ITableSearchItemBase;

interface IFormSearchData {
    value: IValues; //双向绑定的值
    rules?: any;//表单验证规则
    tableSearchSlice?: number;//默认为展开4当出现特色情况可以自行设置
    tableSearch: ITableSearchItem[];
    expendShow?: boolean;
    reset?: boolean; //是否显示查询和重置按钮
    options: any;//el-form的attrs属性，或者formSearchData.options.formProps
}