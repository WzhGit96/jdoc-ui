var resourceList = new Vue({
    el: '#resources',
    data: {
        rows: [
            {
                "modelId": "1",
                "seqNo": null,
                "modelName": "UserController",
                "modelDesc": "用户模块",
                "interfaceInfoList": [
                    {
                        "id": "1",
                        "seqNo": null,
                        "functionName": "getToken",
                        "functionDesc": "获取免登token",
                        "requestMethod": "GET",
                        "url": "/white-business-auth/v1/user/get-token",
                        "input": {
                            "fields": [
                                {
                                    "fieldName": "mobileNo",
                                    "fieldDesc": "手机号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "model",
                                    "fieldDesc": "model",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "ssoUrl",
                                    "fieldDesc": "免登链接",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "ssoToken",
                                    "fieldDesc": "token",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "ssoUrl",
                                    "fieldDesc": "免登链接",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "jumpUrl",
                                    "fieldDesc": "跳转链接",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "seqNo": null,
                        "functionName": "acquireMessageCode",
                        "functionDesc": "获取短信验证码",
                        "requestMethod": "POST",
                        "url": "/white-business-auth/v1/user/sms-code",
                        "input": {
                            "fields": [
                                {
                                    "fieldName": "mobileNo",
                                    "fieldDesc": "手机号码",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "smsType",
                                    "fieldDesc": "短信类型，1通用短信，2保险短信，5重置手势密码，6重置支付密码，11和包贷免登",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "captchaCode",
                                    "fieldDesc": "图形验证码",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "verifyCaptchaCode",
                                    "fieldDesc": "是否需要校验图形验证码：1校验，其他不校验",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "captchaId",
                                    "fieldDesc": "图形验证id",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "expireTime",
                                    "fieldDesc": "失效时间",
                                    "fieldType": "Long",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "smsSeqNo",
                                    "fieldDesc": "短信流水号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "seqNo": null,
                        "functionName": "loginInit",
                        "functionDesc": "用户登录初始化",
                        "requestMethod": "POST",
                        "url": "/white-business-auth/v1/user/login-init",
                        "input": {
                            "fields": []
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "displayUserName",
                                    "fieldDesc": "展示姓名",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "displayUserRealName",
                                    "fieldDesc": "展示实名用户姓名",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "displayIdNo",
                                    "fieldDesc": "展示身份证号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "displayMobileNo",
                                    "fieldDesc": "展示手机号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "realNameFlag",
                                    "fieldDesc": "实名标志",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "payPasswordStatus",
                                    "fieldDesc": "支付密码状态：0正常，1锁定，2初始状态",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "blackType",
                                    "fieldDesc": "涉案账户",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "seqNo": null,
                        "functionName": "afterLogin",
                        "functionDesc": "登录后获取用户信息",
                        "requestMethod": "GET",
                        "url": "/white-business-auth/v1/user/after-login",
                        "input": {
                            "fields": []
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "userNo",
                                    "fieldDesc": "内部用户号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "tokenId",
                                    "fieldDesc": "登录令牌ID",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "realNameFlag",
                                    "fieldDesc": "实名标志",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "payPasswordStatus",
                                    "fieldDesc": "支付密码状态：0正常，1锁定，2初始状态",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "blackType",
                                    "fieldDesc": "涉案账户",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "hallAuthorizedStatus",
                                    "fieldDesc": "掌厅授权状态：1已授权，0未授权",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "clientName",
                                    "fieldDesc": "渠道名称",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "hbUserNo",
                                    "fieldDesc": "和包用户号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    }
                ]
            },
            {
                "modelId": "2",
                "seqNo": null,
                "modelName": "UserController",
                "modelDesc": "用户模块",
                "interfaceInfoList": [
                    {
                        "id": "1",
                        "seqNo": null,
                        "functionName": "getToken",
                        "functionDesc": "获取免登token",
                        "requestMethod": "POST",
                        "url": "/white-business-auth/v1/user/get-token",
                        "input": {
                            "fields": [
                                {
                                    "fieldName": "mobileNo",
                                    "fieldDesc": "手机号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "model",
                                    "fieldDesc": "model",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "ssoUrl",
                                    "fieldDesc": "免登链接",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "ssoToken",
                                    "fieldDesc": "token",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "ssoUrl",
                                    "fieldDesc": "免登链接",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "jumpUrl",
                                    "fieldDesc": "跳转链接",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "seqNo": null,
                        "functionName": "acquireMessageCode",
                        "functionDesc": "获取短信验证码",
                        "requestMethod": "POST",
                        "url": "/white-business-auth/v1/user/sms-code",
                        "input": {
                            "fields": [
                                {
                                    "fieldName": "mobileNo",
                                    "fieldDesc": "手机号码",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "smsType",
                                    "fieldDesc": "短信类型，1通用短信，2保险短信，5重置手势密码，6重置支付密码，11和包贷免登",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "captchaCode",
                                    "fieldDesc": "图形验证码",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "verifyCaptchaCode",
                                    "fieldDesc": "是否需要校验图形验证码：1校验，其他不校验",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "captchaId",
                                    "fieldDesc": "图形验证id",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "expireTime",
                                    "fieldDesc": "失效时间",
                                    "fieldType": "Long",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "smsSeqNo",
                                    "fieldDesc": "短信流水号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "seqNo": null,
                        "functionName": "loginInit",
                        "functionDesc": "用户登录初始化",
                        "requestMethod": "POST",
                        "url": "/white-business-auth/v1/user/login-init",
                        "input": {
                            "fields": []
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "displayUserName",
                                    "fieldDesc": "展示姓名",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "displayUserRealName",
                                    "fieldDesc": "展示实名用户姓名",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "displayIdNo",
                                    "fieldDesc": "展示身份证号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "displayMobileNo",
                                    "fieldDesc": "展示手机号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "realNameFlag",
                                    "fieldDesc": "实名标志",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "payPasswordStatus",
                                    "fieldDesc": "支付密码状态：0正常，1锁定，2初始状态",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "blackType",
                                    "fieldDesc": "涉案账户",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "seqNo": null,
                        "functionName": "afterLogin",
                        "functionDesc": "登录后获取用户信息",
                        "requestMethod": "GET",
                        "url": "/white-business-auth/v1/user/after-login",
                        "input": {
                            "fields": []
                        },
                        "output": {
                            "fields": [
                                {
                                    "fieldName": "userNo",
                                    "fieldDesc": "内部用户号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "tokenId",
                                    "fieldDesc": "登录令牌ID",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "realNameFlag",
                                    "fieldDesc": "实名标志",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "payPasswordStatus",
                                    "fieldDesc": "支付密码状态：0正常，1锁定，2初始状态",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "blackType",
                                    "fieldDesc": "涉案账户",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "hallAuthorizedStatus",
                                    "fieldDesc": "掌厅授权状态：1已授权，0未授权",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "clientName",
                                    "fieldDesc": "渠道名称",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                },
                                {
                                    "fieldName": "hbUserNo",
                                    "fieldDesc": "和包用户号",
                                    "fieldType": "String",
                                    "length": null,
                                    "necessary": false,
                                    "remark": null
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    created: function () {
        Vue.component('resource-list', {
            props: ['row'],
            methods: {
                getModelId: function (id) {
                    return "model_" + id;
                },
                getModelPanelId: function (id) {
                  return "mp_" + id;
                },
                getModelPanelChildId: function (id) {
                    return "#mp_" + id;
                },
                getContentId: function (id, modelId) {
                    return modelId + "content_" + id;
                },
                getContentChildId: function(id, modelId) {
                  return "#" + modelId + "content_" + id;
                },
                getPanelId: function (id) {
                    return "panel_" + id;
                },
                getPanelParentId: function (id) {
                    return "#panel_" + id;
                }
            },
            template: '<div class="panel panel-default">\n' +
                '<li v-bind:id="getModelId(row.modelId)" class="resource">\n' +
                '                <div class="heading panel-heading">\n' +
                '                    <h2 class="panel-title">\n' +
                '                        <input type="checkbox" style="float: left;margin-right: 0.5rem;"/>\n' +
                '                        <a v-bind:href="getModelPanelChildId(row.modelId)" data-toggle="collapse" data-parent="#controller-group" class="toggleEndpointList">{{row.modelName}}</a>\n' +
                '                        : {{row.modelDesc}}\n' +
                '                    </h2>\n' +
                '                </div>\n' +
                '                <div v-bind:id="getModelPanelId(row.modelId)" class="interface-area panel-collapse collapse">\n' +
                '                   <div class="panel-group" v-bind:id="getPanelId(row.modelId)">\n' +
                '                    <ul class="endpoints">\n' +
                '                        <li v-for="inf in row.interfaceInfoList" class="endpoint">\n' +
                '                            <ul class="operations">\n' +
                '                            <template v-if="inf.requestMethod==\'GET\'">\n' +
                '                               <div class="panel panel-default">\n' +
                '                                <li class="get operation">\n' +
                '                                    <div class="heading panel-heading">\n' +
                '                                        <h3 class="panel-title">\n' +
                '                                            <span class="http_method">\n' +
                '                                                <a href="#" class="request-method">get</a>\n' +
                '                                            </span>\n' +
                '                                            <span class="path">\n' +
                '                                                <a data-toggle="collapse" v-bind:data-parent="getPanelParentId(row.modelId)" v-bind:href="getContentChildId(inf.id, row.modelId)">{{inf.url}}</a>\n' +
                '                                            </span>\n' +
                '                                        </h3>\n' +
                '                                        <span class="markdown">\n' +
                '                                            <p>{{inf.functionDesc}} <input type="checkbox" value="1"></p>\n' +
                '                                        </span>\n' +
                '                                    </div>\n' +
                '                                    <div v-bind:id="getContentId(inf.id, row.modelId)" class="content panel-collapse collapse">\n' +
                '                                        <h4>接口描述</h4>\n' +
                '                                        <p>{{inf.functionDesc}}</p>\n' +
                '                                        <div class="field-area">\n' +
                '                                            <form class="sandbox">\n' +
                '                                                <div style="margin:0;padding:0;display:inline"></div>\n' +
                '                                                <h4>输入</h4>\n' +
                '                                                <table class="fullwidth parameters table">\n' +
                '                                                    <thead>\n' +
                '                                                        <tr>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field name</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field desc</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field type</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field length</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">necessary</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">operation</th>\n' +
                '                                                        </tr>\n' +
                '                                                    </thead>\n' +
                '                                                    <tbody class="operation-params">\n' +
                '                                                        <tr v-for="input in inf.input.fields">\n' +
                '                                                            <td class="code"><label>{{input.fieldName}}</label></td>\n' +
                '                                                            <td >{{input.fieldDesc}}</td>\n' +
                '                                                            <td >{{input.fieldType}}</td>\n' +
                '                                                            <td >{{input.length}}</td>\n' +
                '                                                            <td >{{input.necessary}}</td>\n' +
                '                                                            <td ><input type="checkbox" class="input-checkbox" value="1"/></td>\n' +
                '                                                        </tr>\n' +
                '                                                    </tbody>\n' +
                '                                                </table>\n' +
                '                                            </form>\n' +
                '                                            <form class="sandbox">\n' +
                '                                                <div style="margin:0;padding:0;display:inline"></div>\n' +
                '                                                <h4>输出</h4>\n' +
                '                                                <table class="fullwidth parameters table">\n' +
                '                                                    <thead>\n' +
                '                                                    <tr>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field name</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field desc</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field type</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field length</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">necessary</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">operation</th>\n' +
                '                                                    </tr>\n' +
                '                                                    </thead>\n' +
                '                                                    <tbody class="operation-params">\n' +
                '                                                    <tr>\n' +
                '                                                        <td class="code"><label>name</label></td>\n' +
                '                                                        <td >desc</td>\n' +
                '                                                        <td >type</td>\n' +
                '                                                        <td >0</td>\n' +
                '                                                        <td >y</td>\n' +
                '                                                        <td ><input type="checkbox" class="output-checkbox" value="1"/></td>\n' +
                '                                                    </tr>\n' +
                '                                                    </tbody>\n' +
                '                                                </table>\n' +
                '                                            </form>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </li>\n' +
                '                               </div>\n' +
                '                            </template>\n' +
                '                            <template v-if="inf.requestMethod==\'POST\'">\n' +
                '                               <div class="panel panel-default">\n' +
                '                                <li class="post operation">\n' +
                '                                    <div class="heading panel-heading">\n' +
                '                                        <h3 class="panel-title">\n' +
                '                                            <span class="http_method">\n' +
                '                                                <a href="#" class="request-method">post</a>\n' +
                '                                            </span>\n' +
                '                                            <span class="path">\n' +
                '                                                <a data-toggle="collapse" v-bind:data-parent="getPanelParentId(row.modelId)" v-bind:href="getContentChildId(inf.id, row.modelId)">{{inf.url}}</a>\n' +
                '                                            </span>\n' +
                '                                        </h3>\n' +
                '                                        <span class="markdown">\n' +
                '                                            <p>{{inf.functionDesc}} <input type="checkbox" id="jdocxxx" value="1"></p>\n' +
                '                                        </span>\n' +
                '                                    </div>\n' +
                '                                    <div v-bind:id="getContentId(inf.id, row.modelId)" class="content panel-collapse collapse">\n' +
                '                                        <h4>接口描述</h4>\n' +
                '                                        <p>{{inf.functionDesc}}</p>\n' +
                '                                        <div class="field-area">\n' +
                '                                            <form class="sandbox">\n' +
                '                                                <div style="margin:0;padding:0;display:inline"></div>\n' +
                '                                                <h4>输入</h4>\n' +
                '                                                <table class="fullwidth parameters table">\n' +
                '                                                    <thead>\n' +
                '                                                        <tr>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field name</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field desc</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field type</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">field length</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">necessary</th>\n' +
                '                                                            <th style="width: 100px; max-width: 100px">operation</th>\n' +
                '                                                        </tr>\n' +
                '                                                    </thead>\n' +
                '                                                    <tbody class="operation-params">\n' +
                '                                                        <tr v-for="input in inf.input.fields">\n' +
                '                                                            <td class="code"><label>{{input.fieldName}}</label></td>\n' +
                '                                                            <td >{{input.fieldDesc}}</td>\n' +
                '                                                            <td >{{input.fieldType}}</td>\n' +
                '                                                            <td >{{input.length}}</td>\n' +
                '                                                            <td >{{input.necessary}}</td>\n' +
                '                                                            <td ><input type="checkbox" class="input-checkbox" value="1"/></td>\n' +
                '                                                        </tr>\n' +
                '                                                    </tbody>\n' +
                '                                                </table>\n' +
                '                                            </form>\n' +
                '                                            <form class="sandbox">\n' +
                '                                                <div style="margin:0;padding:0;display:inline"></div>\n' +
                '                                                <h4>输出</h4>\n' +
                '                                                <table class="fullwidth parameters table">\n' +
                '                                                    <thead>\n' +
                '                                                    <tr>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field name</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field desc</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field type</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">field length</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">necessary</th>\n' +
                '                                                        <th style="width: 100px; max-width: 100px">operation</th>\n' +
                '                                                    </tr>\n' +
                '                                                    </thead>\n' +
                '                                                    <tbody class="operation-params">\n' +
                '                                                    <tr>\n' +
                '                                                        <td class="code"><label>name</label></td>\n' +
                '                                                        <td >desc</td>\n' +
                '                                                        <td >type</td>\n' +
                '                                                        <td >0</td>\n' +
                '                                                        <td >y</td>\n' +
                '                                                        <td ><input type="checkbox" class="output-checkbox" value="1"/></td>\n' +
                '                                                    </tr>\n' +
                '                                                    </tbody>\n' +
                '                                                </table>\n' +
                '                                            </form>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </li>\n' +
                '                               </div>\n' +
                '                            </template>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                    </ul>\n' +
                '               </div>\n' +
                '                </div>\n' +
                '            </li>\n' +
                '</div>'
        });
        console.log("welcome")
    }
});

function expand(id) {
    var el = $("#" + id + ">.interface-area");
    var height = document.getElementById(id).getElementsByClassName("heading")[0].clientHeight;
    if (el.css("height") === "0px") {
        el.css("height", height + "px");
    } else {
        el.css("height", 0 + "px");
    }
}

function showInfList(id) {
    var inf = $("#" + id + ">.interface-area");
    var infHeight = document.getElementById(id).getElementsByClassName("heading")[0].clientHeight;
    var el = $("#" + id).contents().find(".content");
    var height = document.getElementById(id).getElementsByClassName("field-area")[0].clientHeight + 76;
    el.css("border", "1px solid #c3d9ec");
    if (el.css("visibility") === "hidden") {
        el.css("visibility", "visible");
        inf.css("height", infHeight + height + "px");
        el.css("height", height + "px")
    } else {
        el.css("height", 0 + "px");
        inf.css("height", infHeight + "px");
        el.css("visibility", "hidden");
    }
}