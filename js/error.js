var error = {
	_0: "WebSocket 正常关闭，可能发生在服务器重启，或本地网络异常的情况。SDK 会自动重连，无需人工干预。",
	_1: "服务器内部错误或者参数错误，一般是因为传入了错误的参数，或者没有在本文档里明确定义的运行时错误，都会以代码 1 指代。",
	_100: "无法建立 TCP 连接到 LeanCloud 服务器，通常是因为网络故障，或者我们服务器故障引起的，我们的服务器状态可以查看健康状态检查。",
	_101: "查询的 Class 不存在，或者要关联的 Pointer 对象不存在。",
	_103: "非法的 Class 名称，Class 名称大小写敏感，并且必须以英文字母开头，有效的字符仅限在英文字母、数字以及下划线。",
	_104: "缺少 objectId，通常是在查询的时候没有传入 objectId，或者 objectId 非法。objectId 只能为字母、数字组成的字符串。",
	_105: "无效的 key 名称，也就是 Class 的列名无效，列名必须以英文字母开头，有效的字符仅限在英文字母、数字以及下划线。",
	_106: "无效的 Pointer 格式，Pointer必须为形如 {className: 'Post', objectId:'xxxxxx'} 的 JSON 对象。",
	_107: "无效的 JSON 对象，解析 JSON 数据失败。",
	_108: "此 API 仅供内部使用。",
	_109: "共享的 Class 无权限执行此操作，请检查 Class 共享的权限设置。",
	_111: "想要存储的值不匹配列的类型，请检查你的数据管理平台中列定义的类型，查看存储的数据是否匹配这些类型。",
	_112: "推送订阅的频道无效，频道名称必须不是空字符串，只能包含英文字母、数字以及下划线，并且只能以英文字母开头。",
	_113: "Class 中的某个字段设定成必须，保存的对象缺少该字段。",
	_114: "iOS 推送存储的 deviceToken 无效，如何存储 installation 请阅读消息推送开发指南。",
	_116: "要存储的对象超过了大小限制，我们限制单个对象的最大大小在 16 M。",
	_117: "更新的 Key 是只读属性，无法更新。",
	_119: "该操作无法从客户端发起。请检查该错误由哪个操作引起，然后进入应用控制台 > 设置 > 应用选项 启用相应的选项。",
	_120: "查询结果无法从缓存中找到，SDK 在使用从查询缓存的时候，如果发生缓存没有命中，返回此错误。",
	_121: "JSON 对象中 key 的名称不能包含 $ 和 . 符号。",
	_122: "无效的文件名称，文件名称只能是英文字母、数字和下划线组成，并且名字长度限制在 1 到 36 之间。",
	_123: "ACL 格式错误，如果您是使用 SDK 提供的 AVACL 类，理论上这不应该发生，正确的 ACL 格式请参考REST API。",
	_124: "请求超时，超过一定时间（默认 10 秒）没有返回，通常是因为网络故障或者该操作太耗时引起的。",
	_125: "电子邮箱地址无效。",
	_126: "无效的用户 Id，可能用户不存在。",
	_127: "手机号码无效。",
	_128: "无效的 Relation 数据，通常是因为添加或者删除的 Relation 数据为空或者过多（单次超过 1000 个）。",
	_137: "违反 class 中的唯一性索引约束（unique），尝试存储重复的值。",
	_139: "角色名称非法，角色名称只能以英文字母、数字或下划线组成。",
	_140: "通常是因为超过开发版的使用额度，比如每天 3 万次 API 调用限制、云引擎域名绑定限制等，可以通过升级商用版解决。",
	_141: "云引擎调用超时。错误信息里会有具体的 Class 和 Hook 名称。",
	_142: "云引擎校验错误，通常是因为 beforeSave、beforeDelete 等 hook 函数返回 error。",
	_145: "本设备没有启用支付功能。",
	_150: "转换数据到图片失败。",
	_154: "超过应用阈值限制，例如短信消费超过每日最大上限等。通常可以在应用设置的服务阈值菜单修改上限值。",
	_160: "账户余额不足。",
	_200: "没有提供用户名，或者用户名为空。",
	_201: "没有提供密码，或者密码为空。",
	_202: "用户名已经被占用。",
	_203: "电子邮箱地址已经被占用。",
	_204: "没有提供电子邮箱地址。",
	_205: "找不到电子邮箱地址对应的用户。",
	_206: "没有提供 session，无法修改用户信息，这通常是因为没有登录的用户想修改信息。修改用户信息必须登录，除非在云引擎里使用 master key 来更改。",
	_207: "只能通过注册创建用户，不允许第三方登录。",
	_208: "第三方帐号已经绑定到一个用户，不可绑定到其他用户。",
	_210: "用户名和密码不匹配。",
	_211: "找不到用户。",
	_212: "请提供手机号码。",
	_213: "手机号码对应的用户不存在。",
	_214: "手机号码已经被注册。",
	_215: "未验证的手机号码。",
	_216: "未验证的邮箱地址。",
	_217: "无效的用户名，不允许空白用户名。",
	_218: "无效的密码，不允许空白密码。",
	_219: "含义 -如果在 15 分钟内，同一个用户登录失败的次数大于 6 次，该用户账户即被云端暂时锁定。锁定将在最后一次错误登录的 15 分钟之后由云端自动解除。如果需要立刻解锁，可以先重置密码再登录。",
	_250: "连接的第三方账户没有返回用户唯一标示 id。",
	_251: "无效的账户连接，一般是因为 access token 非法引起的。",
	_252: "无效的微信授权信息。",
	_300: "CQL 语法错误。详情参考CQL 语法详细指南。",
	_301: "新增对象失败，通常是数据格式问题。",
	_302: "无效的 GeoPoint 类型，请确保经度在 -180 到 180 之间，纬度在 -90 到 90 之间。",
	_303: "插入数据库失败，一般是数据格式或者内部错误，通常错误里包含更具体的错误信息。",
	_304: "数据操作错误，一般是语法错误或者内部异常，请及时联系我们。",
	_305: "根据 where 条件更新或者删除对象不起作用，通常是因为条件不满足。",
	_401: "未经授权的访问，没有提供 App id，或者 App id 和 App key 校验失败，请检查配置。",
	_403: "操作被禁止，因为 Class 表没有打开「读」或者「写」的权限。进入 控制台 > 存储，点击相应的 Class，从右侧选择 其他 下拉菜单，进入 权限管理 来调整。",
	_429: "用户没有登录，无法修改用户信息。",
	_430: "超过应用的流控限制，即超过每个应用同一时刻最多可使用的工作线程数，或者说同一时刻最多可以同时处理的数据请求。通过 控制台 > 存储 > API 统计 > API 性能 > 总览 可以查看应用产生的请求统计数据，如平均工作线程、平均响应时间等。使用 LeanCloud商用版或企业版 的用户，如有需要，可以联系我们来调整工作线程数。",
	_431: "超过 REST API 上传文件流控限制。通过 REST API 每秒限制上传一个文件，并且每分钟最多上传 30 个文件。使用 SDK 上传没有限制，并且可以获得更高的性能。大规模批量上传请使用云引擎命令行工具提供的 upload 命令。",
	_502: "超过云引擎 hook 调用流控限制，通常绝大多数应用不会触发此限制。如有遇到，请联系我们处理。可以通过 控制台 > 存储 > API 统计 > API 性能 > 慢查询 查看应用的云引擎 Hook 请求状况。",
	_503: "服务器维护中。",
	_511: "应用被临时禁用或者进入只读状态，通常是进行运维或者故障处理操作，我们会提前告知开发者。如果是调用云引擎报错，可能是预备环境或者体验实例已进入强制休眠阶段，可以稍等几秒后重试。",
	_524: "该请求 API 暂时不可用，请稍后重试。一般是运维操作临时禁止了某个 API 访问，一段时间后会自然恢复，或者联系我们处理。",
	_529: "Web 服务器与后端应用服务器通讯失败，一般是某个应用服务器异常，Web 服务器会在几秒后移除此实例。如果频繁遇到 524，请联系我们处理。",
	_600: "当前 IP 超过并发限制。使用云引擎时遇到 http 响应码为 529 的错误页面，解决方案请参考↵					Exceeded Limit。",
	_601: "无效的短信签名。具体要求请参考↵					短信签名规范。",
	_602: "发送短信过于频繁。我们限制验证类短信一分钟一条，每天每个号码限制在 10 条左右。我们强烈建议用户使用图形验证码或者倒数计时等方式来避免用户重复发送验证码，以及可能存在的短信验证码攻击。",
	_603: "发送短信或者语音验证码失败，这是短信提供商返回错误，如果确认手机号码没有问题，请联系我们处理。",
	_604: "无效的短信验证码，通常是不匹配或者过期。",
	_605: "找不到自定义的短信模板，请检查模板名称是否正确或者模板是否已经创建并审核通过。",
	_606: "短信模板未审核。",
	_700: "没有设置默认签名。请进入控制台 > 消息 > 短信 > 设置 中设置一个默认短信签名。",
	_1006: "渲染短信模板失败，通常是模板语法问题，我们的短信模板仅支持handlerbars 模板语法。",
	_4100: "无效的查询或者排序字段，请确认查询或者排序的字段在表中存在。",
	_4101: "WebSocket 连接非正常关闭，通常见于路由器配置对长连接限制的情况。SDK 会自动重连，无需人工干预。",
	_4102: "应用不存在或应用禁用了实时通信服务。",
	_4103: "同一个设备重复登录推送服务。该错误码与实时通信服务无关。",
	_4105: "登录签名验证失败。",
	_4107: "Client Id 格式错误，超过 64 个字符。",
	_4108: "Session 没有打开就发送消息，或执行其他操作。常见的错误场景是调用 open session 后直接发送消息，正确的用法是在 Session 打开的回调里执行。",
	_4109: "读超时，云端长时间没有收到客户端的数据，切断连接。SDK 包装了心跳包的机制，出现此错误通常是网络问题。SDK 会自动重连，无需人工干预。",
	_4110: "登录超时，连接后长时间没有完成 session open。通常是登录被拒绝等原因，出现此问题可能是使用方式有误，可以创建工单，由我们技术顾问来给出建议。",
	_4111: "包过长。消息大小超过 5 KB，请缩短消息或者拆分消息。",
	_4112: "设置安全域名后，当前登录的域名与安全域名不符合。",
	_4113: "设置单设备登录后，客户端被其他设备挤下线。",
	_4114: "Session 过期，请重新登录。",
	_4115: "应用容量超限，当天登录用户数已经超过应用设定的最大值。",
	_4116: "客户端发送的序列化数据服务器端无法解析。",
	_4200: "客户端被 REST API 管理接口强制下线。",
	_4201: "应用单位时间内发送消息量超过限制，消息被拒绝。",
	_4301: "服务器内部错误，如果反复出现请收集相关线索并创建工单，我们会尽快解决。",
	_4302: "通过 API 发送消息超时。",
	_4303: "上游 API 调用异常，请查看报错信息了解错误详情。",
	_4304: "对话相关操作签名错误。",
	_4305: "发送消息，或邀请等操作对应的对话不存在。",
	_4306: "对话成员已满，不能再添加。",
	_4307: "对话操作被应用的云引擎 Hook 拒绝。",
	_4308: "更新对话操作失败。",
	_4309: "该对话为只读，不能更新或增删成员。",
	_4310: "该对话禁止当前用户发送消息。",
	_4311: "更新对话的请求被拒绝，当前用户不在对话中。",
	_4312: "查询对话失败，常见于慢查询导致的超时或受其他慢查询导致的数据库响应慢。",
	_4313: "拉取对话消息记录失败，常见与超时的情况。",
	_4314: "拉取对话消息记录被拒绝，当前用户不在对话中。",
	_4315: "该功能仅对系统对话有效。",
	_4316: "该功能仅对普通对话有效。",
	_4317: "当前用户被加入此对话的黑名单，无法发送消息。",
	_4318: "该功能仅对暂态对话有效。",
	_4401: "该操作要求用户是对话成员。",
	_4402: "对话操作超出了 API 请求限制，需要提升应用级别。",
	_4403: "发送消息的对话不存在，或当前用户不在对话中。",
	_4404: "发送的消息被应用的云引擎 Hook 拒绝。",
	showError: function(str) {
		var msg = JSON.parse(str);
		return this["_" + msg.code];
	}
}