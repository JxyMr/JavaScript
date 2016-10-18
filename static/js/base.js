/**
 * 常用检测操作函数
 * Created by Administrator on 2016/9/20.
 */

/**
 * 检测参数是否为空
 * <p>常用于函数调用时，参数是否未设置，以便于设置“缺省参数值”</p>
 * <ul>
 * <li>检测参数是否为“空字符串”</li>
 * <li>检测参数是否为 null</li>
 * <li>检测参数是否为 undefined</li>
 * </ul>
 * @param value
 * @returns {boolean}
 */
function is_empty( value )
{
	// "" null undefined
	return value == "" || value == null || value == void(0);
}

/**
 * 检测参数是否为数值类型
 * @param value 任意参数
 * @returns {boolean}
 */
function is_number( value )
{
	return typeof value == "number";
}

// typeof value - 运算符
// typeof(value) - 函数

/**
 * 检测参数是否为布尔类型
 * @param value 任意参数
 * @returns {boolean}
 */
function is_boolean( value )
{
	return typeof value == "boolean";
}

/**
 * 检测参数是否为字符串类型
 * @param value 任意参数
 * @returns {boolean}
 */
function is_string( value )
{
	return typeof value == "string";
}

/**
 * 检测参数是否为函数类型
 * @param value 任意参数
 * @returns {boolean}
 */
function is_function( value )
{
	// 函数的 typeof 值为 "function"
	return typeof value == "function";
}

/**
 * 检测参数是否为数组类型
 * @param value 任意参数
 * @returns {boolean}
 */
function is_array( value )
{
	return typeof value == "object" && value instanceof Array;
}

/**
 * 检测参数是否为日期类型
 * @param value 任意参数
 * @returns {boolean}
 */
function is_date( value )
{
	return typeof value == "object" && value instanceof Date;
}
