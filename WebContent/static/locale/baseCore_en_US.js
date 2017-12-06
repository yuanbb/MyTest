/*------LOG-------*/
var LOG_OPT_TIME = 'Time';
var LOG_MODULE_NAME = 'Module Name';
var LOG_OPT_USER = 'User';
var LOG_IP_ADDR = 'IP';
var LOG_HOST_ADDR = 'Host';
var LOG_USE_TIME = 'Time used(ms)';
var LOG_STATUS = 'Status';
var LOG_LOG = 'Content';
var LOG_USER_LEVEL = 'User Level';

var LOG_MODULE_NAME_CN = "Name CN";

/** NOTIFY */
var NOTIFY_TITLE = "Title";
var NOTIFY_TYPE = "Type";
var NOTITY_LEVEL = "Level";
var NOTIFY_CONTENT = "Content";
var NOTIFY_PUBLISH_TIME = "Publish Time";
var NOTIFY_DETAIL = "Detail";
var NOTIFY_UNREAD = "Unread";
var NOTIFY_READ = "Read";
var NOTIFY_ALL = "All";
var NOTIFY_DUSTBIN = "Deleted";
var NOTIFY_NOT = "Notifications";
var NOTIFY_ANC = "Announcement";
var NOTIFY_WARN = "Warn";
var NOTIFY_EFF_START_TIME = "Effective Time";
var NOTIFY_EFF_END_TIME = "End Time";
var NOTIFY_STATUS = "Status";
var NOTIFY_EDITWIN_EXSIST_MSG = "You are in new notification view already.";
var NOTIFY_SELECT = "Select ";
var NOTIFY_OPEN_ALL = " Notifications，Open all?";
var NOTIFY_VIEW_LOG = "View Logs";
var NOTIFY_MUTIL_ERR_MSG = "You have selected mutil notifications,it is illegal,please select one.";
var NOTIFY_CALCEL_OPT = "cancel?";
var NOTIFY_ENABLE = "Enable";
var NOTIFY_DISABLE = "Disable";
var NOTIFY_ALREADY_START = "The notifications below are in effective time now,can not be disabled:";
var NOTIFY_PUBLISH_SCOPE = "Publish scope";
var NOTIFY_SELECT_ATTACHMENT = "Choose";
var NOTIFY_ATTACHMENT = "Attachment";
var NOTIFY_BROWSE = "Browse";
var NOTIFY_SAME_ATTACHMENT = "Attachment already exsist!";
var NOTIFY_PLEASE_BROWSE = "Please click [browse] and select your accachment！";
var NOTIFY_ROLE_LIST = "Roles";
var NOTIFY_USER_LIST = "User List";
var NOTIFY_USER_SELECTED = "User Selected";
var NOTIFY_USER_SEARCH_KEY_TEXT = "Key of fullname or short name";
var NOTIFY_DEPT = "Department";
var NOTIFY_ROLE = "Role";
var NOTIFY_USER = "User";
var NOTIFY_TARGETS = "Targets";
var NOTIFY_TARGETS_NUM = " Targets)";
var NOTIFY_ACCACHMENT_NOT_UPLOAD = "Your attachment have not been uploaded,click [upload] first!";
var NOTIFY_CLOSE_DEL_ATTACHMENT = "Close this window will remove the attachment uploaded,close?";
var NOTIFY_ATT_DELETED_MUST_SAVE = "The deleted attachment(s) can not be reverted,you must save it right now !";

/** Portal */
var PORT_ADD_GADGETS = "Add Gadgets";
var PORT_CHOOSE_MODEL = "Choose Model";
var PORT_PORT_NUM = "The portal num at least one";
var PORT_DEL_CONFIRM = "The portal configs will be removed with the portal,continue?";
var PORT_GADGETS_REFRESH_INTERVAL = "Refresh Interval";
var PORT_GADGETS_REFRESH_MANUAL = "Refresh Manually";
var PORT_LAYOUT_JSON_URL = "/scripts/portal/portletfactory/layout_en.json";

/** redis 管理 */
var REDIS_SYS_CONF = "System Args";
var REDIS_ONLINE_USER = "Online Users";
var REDIS_USER_BASE_INFO = "User Base Info";
var REDIS_SESSION_STATUS = "Session Status";
var REDIS_LOGIN_LOGS = "Login Logs";
var REDIS_USER_LOCK_STATUS = "User Lock Status";
var REDIS_PWD_WRONG_TIMES = "PWD Wrong Times";
var REDIS_USER_USUAL_MENU = "User Usual Menu";
var REDIS_COMMON_DATA = "Common Data";
var REDIS_COMMON_DATA_REL = "Common Data Rel";
var REDIS_COMMON_DATA_ID_NAME_REL = "Common Data Name And ID";
var REDIS_DEPARTMENTS = "Departments";
var REDIS_RESOURCES_BASE_INFO = "Resources";
var REDIS_RESOURCE_REL = "Resources Rel";
var REDIS_ROLE_RESOURCE = "Role Resources";
var REDIS_RESOURCE_LOCATION = "Resources Location";
var REDIS_USER_ROLE = "User Role";
var REDIS_NOTIFY = "Notifications";
var REDIS_USER_NOTIFY = "User Notifications";
var REDIS_CUSTOM_FUZZY = "Custom fuzzy";
var REDIS_INPUT_CUSTON_MSG = 'Input a custom regx';
var REDIS_NEW_TAB_SHOW = "New Tab Show";
var REDIS_REMOVE_KEY = "Delete KEY";
var REDIS_KEY_TYPE = "Redis KEY Types";

/** baseinfo mng */
var BASEINFO_LABEL = "Label";
var BASEINFO_NAME = "Name";
var BASEINFO_VALUE = "Value";
var BASEINFO_ATTR = "Attribute";
var BASEINFO_DESC = "Description";

/** system monitor*/
var MONITOR_NAME = 'Server Name';
var INDICATOR_NAME = 'Indicator Name';
var INSTANCE_NAME = 'Instance Name';
var MONITOR_IP = 'Host IP';
var MONITOR_INDICATOR = 'Monitor Indicator';
var MONITOR_CREATETIME = 'Monitor CreateTime';
var MONITOR_VALUE_THR = 'Value';
var MONITOR_EXCEPTION = 'Exception';
var MONITOR_REMARK = 'Remark';
var MONITOR_USE_KIND = 'Monitor Use Kind';
var MONITOR_OS_TYPE = 'OS Type';
var MONITOR_ACCESS_TYPE = 'Access Type';
var MONITOR_PORT = 'Port';
var MONITOR_ACCOUNT = 'Account';
var MONITOR_PASSWORD = 'Password';
var MONITOR_PATH = 'Path';
var MONITOR_CYCLE = 'Cycle';
var MONITOR_THRESHOLD_REF = 'Monitor Threshold Ref';
var MONITOR_OPERATOR = 'Operator';
var MONITOR_THRESHOLD = 'Threshold';
var MONITOR_VALUE = 'Monitor value';
var MONITOR_EXCEPTION_WARN = 'Exception Warning';
var MONITOR_EDIT_TIME = 'Update Time';
var MONITOR_NEXT_EDIT_TIME = 'Next Update Time';
var MONITOR_ALARM_LEVEL = 'Monitor Alarm Level';
var MONITOR_VALUE_REF = 'Monitor Value Ref';
var MONITOR_SIGAR_OPR = 'Sigar Operate';
var MONITOR_EXCEPTION_HANDLE = 'Monitor Exception Handle';
var MONITOR_EXCEPTION_MAIL = 'Handle Exception by Mail';
var MONITOR_EXCEPTION_SMS = 'Handle Exception by Message';
var PROC_LAUNCH_CMD = 'Proc launch cmd';
var PROC_EXPECT_STATE = 'Proc expect state';
var PROC_EXPECT_RUN = 'RUN';
var PROC_EXPECT_STOP = 'STOP';
var DISK_HOME = 'Disk Home';
var MONITOR_NO = 'Server No';
var NETWORK_CARD_IP = 'NetWork Card Ip';
var NET_VALUE_RECEIVE = 'Receive Value';
var NET_VALUE_SEND = 'Send Value';
var DISK_NAME = 'Disk Name ';
var VALUE_READ = 'Read Value';
var VALUE_WRITE = 'Write Value';
var PROC_INFO = 'Proc Info';

var CALLER_NAME = 'Caller Name';
var CALLER_HOST = 'Caller Host';
var CALLER_RESULT = 'Caller Result';

/** monitor target */
var MONITOR_INDICATOR_CN = 'Monitor Indicator Name';
var INDICATOR_EN = 'Indicator En';
var INDICATOR_CN = 'Indicator Cn';
var MONITOR_INDICATOR_TYPE = 'Monitor Indicator Type';
var MONITOR_INDICATOR_SUBTYPE = 'Monitor Indicator SubType';
var MONITOR_THRESHOLD_TYPE = 'Monitor Threshold Type';
var MONITOR_OPERATOR = 'Monitor Operator';
var MONITOR_THRESHOLD_REF ='Monitor Threshold Ref';
var MONITOR_THRESHOLD_REF1 = 'One Alarm Threshold Ref(reference)';
var MONITOR_THRESHOLD_REF2 = 'Two Alarm Threshold Ref(reference)';
var MONITOR_THRESHOLD_REF3 = 'Three Alarm Threshold Ref(reference)';
var MONITOR_THRESHOLD_REF4 = 'Four Alarm Threshold Ref(reference)';
var MONITOR_SIGAR_REF ='Monitor Sigar Ref';
var MONITOR_CYCLE = 'Monitor CYCLE';
var MONITOR_MUTIL_ERR_MSG = "You have selected mutil monitor target,it is illegal,please select one.";
var MONITOR_EDITWIN_EXSIST_MSG = "You are in new monitor target view already.";
var MONITOR_CYCLE_EXAMPLE = "Example：CYCLE_=5，CYCLE_LEVEL=m（m/M，h/H）"
var THRESHOLD_REF_1 ='One Alarm Threshold Ref';
var THRESHOLD_REF_2 ='Two Alarm Threshold Ref';
var THRESHOLD_REF_3 ='Three Alarm Threshold Ref';
var THRESHOLD_REF_4 ='Four Alarm Threshold Ref';
var MONITOR_PARAM_1 = 'Param 1';
var MONITOR_PARAM_2 = 'Param 2';
var MONITOR_PARAM_3 = 'Param 3';
var MONITOR_LOADAVERAGE_1 = '1 Minute Loadaverage';
var MONITOR_LOADAVERAGE_5 = '5 Minute Loadaverage';
var MONITOR_LOADAVERAGE_15 = '15 Minute Loadaverage';

/** SYS_CONFIG */
var CONTROL_SYS_ARGS = "System args";
var CONTROL_STARTUP_ARGS = "Startup args";
var CONTROL_SECURITY_MNG_ARGS = "Security mng args";
var CONTROL_REDIS_SERVER = "Redis Server";
var CONTROL_REDIS_INIT = "Redis Init";
var SYS_REDIS_INIT = "System Redis Init";
var CUSTOM_REDIS_INIT = "Custom Redis Init";
var CONTROL_REDIS_DESC = '<h1>Redis description:<br></h1>'
		+ '<h2>redis init：</h2>'
		+ '<ul style="margin-left:20px;">'
		+ '<li><span>clear db:&nbsp;&nbsp;</span>clean all keys in the redis db;</li>'
		+ '<li><span>notification：&nbsp;&nbsp;</span>key(notification:ID:info),type(Hash),command：HGETALL key		Return all areas and values of this key</li>'
		+ '<li><span>department：&nbsp;&nbsp;</span>key(department:ID:children),type(Set),command：SMEMBERS key		Return all members of this key</li>'
		+ '<li><span>commondata：&nbsp;&nbsp;</span>key(commondatas:ID:info),type(Hash),command:HGETALL key		Return all areas and values of this key</li>'
		+ '<li><span>rescource：&nbsp;&nbsp;</span>key(resource:ID:info),type(Hash);</li>'
		+ '<li><span>role：&nbsp;&nbsp;</span>key(menu:ID:permission),type(Set);</li>'
		+ '<li><span>user_role：&nbsp;&nbsp;</span>key(user:ID:role),type(Set);</li>'
		+ '</ul>';
var CONTROL_SHOW_NOTIFY = 'SYS Notice';
var CONTROL_SHOW_USUAL = 'Usual Menus';
var CONTROL_FLODER_STRONG = 'Strong Floder';
var CONTROL_SHOW_QUICK_SEAARCH = 'Menu quick search';
var CONTROL_SHOW_SUB_NAVI = "Show cuttent path";
var CONTROL_SHOW_HIDDEN_COLUMN = 'Hidden Columns';
var CONTROL_SHOW_USER_GUIDE = "User Guide";
var CONTROL_USER_GUIDE_NAME_MSG = "Please input the name of file in src/main/resources/ducuments";
var CONTROL_MAIN_MENU_NUM = "Menu nums";
var CONTROL_TITLE_WORD_NUM = "Menu length";
var CONTROL_USUAL_MENU_TOPN = "Usual Menus TopN";
var CONTROL_TABS_NUM = "Tabs Num";
var CONTROL_AUTO_LOAD_ONLINEUSER_INTERVAL = "Auto reload online user interval(seconds)";
var CONTROL_GRID_PAGESIZE = "Grid PageSize";
var CONTROL_MENU_EXPAND_DEPTH = "Menu Expand Depth";
var CONTROL_TIME_BEFORE_MENU_AUTO_HIDE = "Time before menu auto hide(ms,-1:not auto)";
var CONTROL_SYS_THEME = "Theme";
var CONTROL_SYS_THEME_EMPTY_TEXT = "User choose theme when it is empty";
var PD_DESKTOP = "Personal Desktop";
var CONTROL_MAIN_PAGE = "Main Page";
var CONTROL_MAIN_PAGE_CLOSABLE = "Closable";
var CONTROL_WIN_DESKTOP = "Desktop in Window";
var CONTROL_REDIS_BUTTON_JSON = "/scripts/controlpanel/conf/buttons_en_US.json";
var CONTROL_USERMNG_CONF = "User mng config";
var CONTROL_USER_LOGIN_CONF = "User login config";
var CONTROL_ROLEMNG_CONF = "Role mng config";
var CONTROL_DEPTMNG_CONF = "Department mng config";
var CONTROL_RESMNG_CONF = "Resource mng config";
var CONTROL_USERMNG_RANDOMPSD = "Random password for new user";
var CONTROL_USERMNG_USERREGION = "Manage user region";
var CONTROL_USERMNG_USERLEVELS = "User manager levels";
var CONTROL_LOGIN_TIMEINTERVAL = "Login interval";
var CONTROL_LOGIN_ALLOWPSDERRORTIMES = "Allow error times";
var CONTROL_USER_EXT_CONF = "";
var CONTROL_USER_EXT_SWITCH = "";
var CONTROL_USER_EXT_TABLE = "";
var CONTROL_USER_EXT_FIELDS = "";
var CONTROL_USER_EXT_FIELDS_NAME = "";
var CONTROL_USER_EXT_FIELDS_NAME_CN = "";
var CONTROL_USER_EXT_FIELDS_TYPE = "";
var CONTROL_USER_EXT_FIELDS_ALLOWMULTI = "";
var CONTROL_USER_EXT_FIELDS_CUSTOMURL = "";
var CONTROL_USER_EXT = {
	title : 'User extension config',
	enable : 'Enabled',
	table : 'User extension table name',
	fields : {
		title : 'User extension fields',
		name : 'Column name',
		nameCn : 'Alias name',
		regExp : 'RegExp',
		valueField : 'Value field',
		allowMulti : 'Allow multi',
		dataOrigin : 'Data origin',
		types : {
			title : 'Type',
			textField : 'Text Field',
			time : 'Time Field',
			numberField : 'Number Field',
			commonData : 'Common Data',
			customData : 'Custom Data',
			user : 'User',
			menu : 'Menu'
		}
	}
};

var CONTROL_STARTUP2_ARGS="New main page";
var CONTROL_STARTUP2_PAGENAME="Page name";
var CONTROL_STARTUP2_SHOWMENU = 'Menu num';
var CONTROL_STARTUP2_MENUCACHENUM = 'Iframe cache num';
var CONTROL_STARTUP2_LEFTTREEPARENT = 'Left tree parent';
var CONTROL_STARTUP2_DEFAULTPAGELOCATION = 'Index location';
var CONTROL_STARTUP2_DEFAULTPAGENAME = 'Index name';
var CONTROL_STARTUP2_SHOWTABBAR = 'Show tab';
var CONTROL_STARTUP2_SHOWTOOLBAR = 'Show toolbar';
var CONTROL_STARTUP2_SHOWFOOT = 'Show foot';
var CONTROL_STARTUP2_SHOWFOOTMSG = 'Foot content';