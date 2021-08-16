var resourceList = new Vue({
    el: '#resources',
    data: {
        rows: null
    },
    created: function () {
        $.ajax({
            url: '/jdoc-apis',
            data: null,
            dataType: 'JSON',
            method: 'GET',
            async: false,
            success: function (e) {
                resourceList.rows = e.modelProperties;
            }
        });

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