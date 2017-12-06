/** LOG */
var LOG_OPT_TIME = '操作时间';
var LOG_MODULE_NAME = '模块名称';
var LOG_OPT_USER = '用户名称';
var LOG_IP_ADDR = 'IP地址';
var LOG_HOST_ADDR = '响应服务器';
var LOG_USE_TIME = '用时（ms）';
var LOG_STATUS = '操作状态';
var LOG_LOG = '日志内容';
var LOG_USER_LEVEL = '用户级别';

var LOG_MODULE_NAME_CN = "中文名称";

/** 公告通知 */
var NOTIFY_TITLE = "标题";
var NOTIFY_TYPE = "类型";
var NOTITY_LEVEL = "消息级别";
var NOTIFY_CONTENT = "内容";
var NOTIFY_PUBLISH_TIME = "创建时间";
var NOTIFY_DETAIL = "详细信息";
var NOTIFY_UNREAD = "未读";
var NOTIFY_READ = "已读";
var NOTIFY_ALL = "全部";
var NOTIFY_DUSTBIN = "垃圾箱";
var NOTIFY_NOT = "通知消息";
var NOTIFY_ANC = "公告消息";
var NOTIFY_WARN = "告警消息";
var NOTIFY_EFF_START_TIME = "生效时间";
var NOTIFY_EFF_END_TIME = "终止时间";
var NOTIFY_STATUS = "状态";
var NOTIFY_EDITWIN_EXSIST_MSG = "您当前已经打开新增通知界面，请勿重复打开！";
var NOTIFY_SELECT = "当前选中了";
var NOTIFY_OPEN_ALL = "条公告通知，确定要打开所有公告吗?";
var NOTIFY_VIEW_LOG = "浏览日志";
var NOTIFY_MUTIL_ERR_MSG = "您当前选中了多个公告通知，无法同时操作，请选择一条记录！";
var NOTIFY_CALCEL_OPT = "取消当前操作吗?";
var NOTIFY_ENABLE = "生效";
var NOTIFY_DISABLE = "终止";
var NOTIFY_ALREADY_START = "以下公告已经生效期已经开始，终止操作未能生效: ";
var NOTIFY_PUBLISH_SCOPE = "发布范围"
var NOTIFY_SELECT_ATTACHMENT = "选择附件";
var NOTIFY_ATTACHMENT = "附件";
var NOTIFY_BROWSE = "浏览";
var NOTIFY_SAME_ATTACHMENT = "您已提交过同名附件，请不要重复提交！";
var NOTIFY_PLEASE_BROWSE = "请先点击【浏览】选择需要上传的附件！";
var NOTIFY_ROLE_LIST = "角色列表";
var NOTIFY_USER_LIST = "待选名单";
var NOTIFY_USER_SELECTED = "已选名单";
var NOTIFY_USER_SEARCH_KEY_TEXT = "输入汉字或简拼(如张三|zs),按回车查询";
var NOTIFY_DEPT = "部门";
var NOTIFY_ROLE = "角色";
var NOTIFY_USER = "用户";
var NOTIFY_TARGETS = "关联对象";
var NOTIFY_TARGETS_NUM = "个关联对象)";
var NOTIFY_ACCACHMENT_NOT_UPLOAD = "您当前还有已选择但是未上传的附件，请先上传！";
var NOTIFY_CLOSE_DEL_ATTACHMENT = "现在关闭将会删除已上传的附件，确定关闭吗?";
var NOTIFY_ATT_DELETED_MUST_SAVE = "当前已有附件被删除且无法恢复，必须执行保存操作！";

/** Portal */
var PORT_ADD_GADGETS = "添加工具";
var PORT_CHOOSE_MODEL = "选择模板";
var PORT_PORT_NUM = "每个用户必须至少保留一个Potral";
var PORT_DEL_CONFIRM = "当前操作将会删除此Portal及其工具配置，确定删除？";
var PORT_GADGETS_REFRESH_INTERVAL = "刷新间隔";
var PORT_GADGETS_REFRESH_MANUAL = "手动刷新";
var PORT_LAYOUT_JSON_URL = "/scripts/portal/portletfactory/layout_zh_CN.json";

/** redis 管理 */
var REDIS_SYS_CONF = "系统参数";
var REDIS_ONLINE_USER = "在线用户";
var REDIS_USER_BASE_INFO = "用户基本信息";
var REDIS_SESSION_STATUS = "session状态";
var REDIS_LOGIN_LOGS = "用户登录日志";
var REDIS_USER_LOCK_STATUS = "用户锁定状态";
var REDIS_PWD_WRONG_TIMES = "时间间隔内错误密码次数";
var REDIS_USER_USUAL_MENU = "用户常用菜单";
var REDIS_COMMON_DATA = "基础数据信息";
var REDIS_COMMON_DATA_REL = "基础数据关系";
var REDIS_COMMON_DATA_ID_NAME_REL = "基础数据名称与ID关系";
var REDIS_DEPARTMENTS = "部门关系";
var REDIS_RESOURCES_BASE_INFO = "资源基本信息";
var REDIS_RESOURCE_REL = "资源关系";
var REDIS_ROLE_RESOURCE = "菜单角色关系";
var REDIS_RESOURCE_LOCATION = "资源名称与权限地址关系";
var REDIS_USER_ROLE = "用户角色";
var REDIS_NOTIFY = "通告基本信息";
var REDIS_USER_NOTIFY = "用户消息关系";
var REDIS_CUSTOM_FUZZY = "自定义匹配规则";
var REDIS_INPUT_CUSTON_MSG = '请输入自定义规则...';
var REDIS_NEW_TAB_SHOW = "新Tab显示";
var REDIS_REMOVE_KEY = "删除KEY";
var REDIS_KEY_TYPE = "Redis键分类";

/** 基础数据管理 */
var BASEINFO_LABEL = "中文名称";
var BASEINFO_NAME = "名称";
var BASEINFO_VALUE = "值";
var BASEINFO_ATTR = "属性";
var BASEINFO_DESC = "描述";

/** 系统监控*/
var MONITOR_NAME = '资源名称';
var INDICATOR_NAME = '指标名称';
var INSTANCE_NAME = '实例名称';
var MONITOR_IP = '属性KEY';
var MONITOR_CREATETIME = '监控时间';
var MONITOR_INDICATOR = '监控指标';
var MONITOR_EXCEPTION = '告警信息';
var MONITOR_VALUE_THR = '指标值';
var MONITOR_REMARK = '备注';
var MONITOR_USE_KIND = '资源类型';
var MONITOR_OS_TYPE = '操作系统';
var MONITOR_ACCESS_TYPE = '访问类型';
var MONITOR_PORT = '属性名称';
var MONITOR_ACCOUNT = '属性值';
var MONITOR_PASSWORD = '访问密码';
var MONITOR_PATH = '访问路径';
var MONITOR_CYCLE = '监控周期';
var MONITOR_THRESHOLD_REF1 = '一级告警阀值参考';
var MONITOR_THRESHOLD_REF2 = '二级告警阀值参考';
var MONITOR_THRESHOLD_REF3 = '三级告警阀值参考';
var MONITOR_THRESHOLD_REF4 = '四级告警阀值参考';
var MONITOR_OPERATOR = '符号';
var MONITOR_THRESHOLD = '告警阀值';
var MONITOR_VALUE = '监控值';
var MONITOR_EXCEPTION_WARN = '异常警示';
var MONITOR_EDIT_TIME = '告警时间';
var MONITOR_NEXT_EDIT_TIME = '下次更新时间';
var MONITOR_ALARM_LEVEL = '告警级别';
var MONITOR_VALUE_REF = '指标阀值';
var MONITOR_SIGAR_OPR = 'Sigar操作';
var MONITOR_EXCEPTION_HANDLE = '异常处理';
var MONITOR_EXCEPTION_MAIL = '邮件处理';
var MONITOR_EXCEPTION_SMS = '短信处理';
var PROC_LAUNCH_CMD = '进程操作命令';
var PROC_EXPECT_STATE = '进程默认状态';
var PROC_EXPECT_RUN = 'RUN';
var PROC_EXPECT_STOP = 'STOP';
var DISK_HOME = '磁盘挂载点';
var MONITOR_NO = '资源编号';
var NETWORK_CARD_IP = '网卡IP';
var NET_VALUE_RECEIVE = '接收指标值';
var NET_VALUE_SEND = '发送指标值';

var CALLER_NAME = '调用者名称';
var CALLER_HOST = '调用者主机地址';
var CALLER_RESULT = '调用结果';

/** 监控指标配置*/
var MONITOR_INDICATOR_CN = '指标名称';
var INDICATOR_EN = '指标英文名称';
var INDICATOR_CN = '中文名称';
var MONITOR_INDICATOR_TYPE = '指标类型';
var MONITOR_INDICATOR_SUBTYPE = '子指标类型';
var MONITOR_THRESHOLD_TYPE = '阀值类型';
var MONITOR_OPERATOR = '阀值运算符';
var MONITOR_THRESHOLD_REF = '参考阀值';
var MONITOR_SIGAR_REF = '参考Sigar操作';
var MONITOR_CYCLE = '监控周期表达式';
var MONITOR_MUTIL_ERR_MSG = "您当前选中了多条信息，无法同时操作，请选择一条记录！";
var MONITOR_EDITWIN_EXSIST_MSG = "您当前已经打开新增界面，请勿重复打开！";
var MONITOR_CYCLE_EXAMPLE = "例：CYCLE_=5，CYCLE_LEVEL=m（m/M，h/H）"
var THRESHOLD_REF_1 ='一级告警阀值';
var THRESHOLD_REF_2 ='二级告警阀值';
var THRESHOLD_REF_3 ='三级告警阀值';
var THRESHOLD_REF_4 ='四级告警阀值';
var MONITOR_PARAM_1 = '参数1';
var MONITOR_PARAM_2 = '参数2';
var MONITOR_PARAM_3 = '参数3';
var MONITOR_LOADAVERAGE_1 = '1分钟负载';
var MONITOR_LOADAVERAGE_5 = '5分钟负载';
var MONITOR_LOADAVERAGE_15 = '15分钟负载';
var DISK_NAME = '硬盘名称';
var VALUE_READ = 'IO负载';
var VALUE_WRITE = '写指标值';
var PROC_INFO = '进程信息';

/** 系统配置 */
var CONTROL_SYS_ARGS = "系统参数设置";
var CONTROL_STARTUP_ARGS = "启动参数设置";
var CONTROL_SECURITY_MNG_ARGS = "安全管理参数配置";
var CONTROL_REDIS_SERVER = "Redis服务器";
var CONTROL_REDIS_INIT = "Redis初始化";
var SYS_REDIS_INIT = "系统Redis数据初始化";
var CUSTOM_REDIS_INIT = "自定义Redis数据初始化";
var CONTROL_REDIS_DESC = '<h1>Redis服务器的相关配置操作说明:<br></h1>'
		+ '<h2>redis初始化：</h2>'
		+ '<ul style="margin-left:20px;">'
		+ '<li><span>清空数据库:&nbsp;&nbsp;</span>清空当前数据库中的所有 key；</li>'
		+ '<li><span>消息通告基础信息：&nbsp;&nbsp;</span>key格式为（notification:消息ID:info）,类型（Hash），通过指令：HGETALL key返回该key的所有域和值；</li>'
		+ '<li><span>部门上下级关系：&nbsp;&nbsp;</span>key格式为（department:部门ID:children）,类型（Set）,通过指令：SMEMBERS key返回集合key中所有成员；</li>'
		+ '<li><span>系统基础数据：&nbsp;&nbsp;</span>key格式为（commondatas:id:info）,类型（Hash）,通过指令HGETALL key返回该key的所有域和值；</li>'
		+ '<li><span>资源基础信息：&nbsp;&nbsp;</span>key格式为（resource:id:info）,类型（Hash）；</li>'
		+ '<li><span>资源角色关系：&nbsp;&nbsp;</span>key格式为（menu:资源ID:permission）,类型（Set）；</li>'
		+ '<li><span>用户角色关系：&nbsp;&nbsp;</span>key格式为（user:用户ID:role）,类型（Set）；</li>'
		+ '</ul>';
var CONTROL_SHOW_NOTIFY = '显示系统通告';
var CONTROL_SHOW_USUAL = '显示常用菜单';
var CONTROL_FLODER_STRONG = '目录高对比度';
var CONTROL_SHOW_QUICK_SEAARCH = '菜单快速搜索';
var CONTROL_SHOW_SUB_NAVI = "显示子导航栏";
var CONTROL_SHOW_HIDDEN_COLUMN = '显示隐藏列';
var CONTROL_SHOW_USER_GUIDE = "用户指南";
var CONTROL_USER_GUIDE_NAME_MSG = "请输入在src/main/resources/ducuments目录下的文件名称";
var CONTROL_MAIN_MENU_NUM = "主页菜单数";
var CONTROL_TITLE_WORD_NUM = "主菜单最大字数";
var CONTROL_USUAL_MENU_TOPN = "常用菜单TopN";
var CONTROL_TABS_NUM = "Tabs数目";
var CONTROL_AUTO_LOAD_ONLINEUSER_INTERVAL = "在线用户自动刷新间隔(秒,0为手动刷新)";
var CONTROL_GRID_PAGESIZE = "Grid每页行数";
var CONTROL_MENU_EXPAND_DEPTH = "菜单展开深度";
var CONTROL_TIME_BEFORE_MENU_AUTO_HIDE = "菜单自动收缩间隔(毫秒,-1为点击收缩)";
var CONTROL_SYS_THEME = "指定主题风格";
var CONTROL_SYS_THEME_EMPTY_TEXT = "为空则用户自行选择";
var PD_DESKTOP = "快捷桌面";
var CONTROL_MAIN_PAGE = "首页信息";
var CONTROL_MAIN_PAGE_CLOSABLE = "允许关闭";
var CONTROL_WIN_DESKTOP = "窗口显示快捷桌面";
var CONTROL_REDIS_BUTTON_JSON = "/scripts/controlpanel/conf/buttons_zh_CN.json";
var CONTROL_USERMNG_CONF = "用户管理配置";
var CONTROL_USER_LOGIN_CONF = "用户登录配置";
var CONTROL_ROLEMNG_CONF = "角色管理配置";
var CONTROL_DEPTMNG_CONF = "部门管理配置";
var CONTROL_RESMNG_CONF = "资源管理配置";
var CONTROL_USERMNG_RANDOMPSD = "新用户随机密码";
var CONTROL_USERMNG_USERREGION = "管理用户归属地市";
var CONTROL_USERMNG_USERLEVELS = "管理用户等级范围";
var CONTROL_LOGIN_TIMEINTERVAL = "登录时间间隔";
var CONTROL_LOGIN_ALLOWPSDERRORTIMES = "允许密码错误次数";
var CONTROL_USER_EXT = {
	title : '用户扩展表配置',
	enable : '是否启用',
	table : '扩展表名',
	fields : {
		title : '用户扩展表字段列表',
		name : '列名',
		nameCn : '中文名',
		regExp : '校验正则',
		valueField : '值字段',
		allowMulti : '多选',
		dataOrigin : '数据来源',
		types : {
			title : '类型',
			textField : '文本',
			time : '时间',
			numberField : '数字',
			commonData : '基础数据下拉',
			customData : '自定义数据下拉',
			user : '用户选择',
			menu : '菜单选择'
		}
	}
};

var CONTROL_STARTUP2_ARGS="新版主页配置";
var CONTROL_STARTUP2_PAGENAME="页面名称";
var CONTROL_STARTUP2_SHOWMENU = '菜单数目';
var CONTROL_STARTUP2_MENUCACHENUM = 'Iframe缓存个数';
var CONTROL_STARTUP2_LEFTTREEPARENT = '左侧树根节点';
var CONTROL_STARTUP2_DEFAULTPAGELOCATION = '主页地址';
var CONTROL_STARTUP2_DEFAULTPAGENAME = '主页名称';
var CONTROL_STARTUP2_SHOWTABBAR = '是否显示TAB';
var CONTROL_STARTUP2_SHOWTOOLBAR = '是否显示工具栏';
var CONTROL_STARTUP2_SHOWFOOT = '是否显示脚标';
var CONTROL_STARTUP2_SHOWFOOTMSG = '脚标内容';
var CONTROL_STARTUP2_THEME = '主题';