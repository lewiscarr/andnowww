webpackJsonp([115],{

/***/ 2032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataEditPageModule", function() { return AddonModDataEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_comments_components_components_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit__ = __webpack_require__(2188);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AddonModDataEditPageModule = /** @class */ (function () {
    function AddonModDataEditPageModule() {
    }
    AddonModDataEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__edit__["a" /* AddonModDataEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* AddonModDataComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_compile_components_compile_html_compile_html_module__["a" /* CoreCompileHtmlComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_comments_components_components_module__["a" /* CoreCommentsComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__edit__["a" /* AddonModDataEditPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModDataEditPageModule);
    return AddonModDataEditPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 2188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModDataEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_groups__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fileuploader_providers_fileuploader__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_course_providers_course__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_helper__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_offline__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_fields_delegate__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_components_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_tag_providers_tag__ = __webpack_require__(131);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















/**
 * Page that displays the view edit page.
 */
var AddonModDataEditPage = /** @class */ (function () {
    function AddonModDataEditPage(params, utils, groupsProvider, domUtils, fieldsDelegate, courseProvider, dataProvider, dataOffline, dataHelper, sitesProvider, navCtrl, translate, eventsProvider, fileUploaderProvider, tagProvider) {
        this.utils = utils;
        this.groupsProvider = groupsProvider;
        this.domUtils = domUtils;
        this.fieldsDelegate = fieldsDelegate;
        this.courseProvider = courseProvider;
        this.dataProvider = dataProvider;
        this.dataOffline = dataOffline;
        this.dataHelper = dataHelper;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.fileUploaderProvider = fileUploaderProvider;
        this.tagProvider = tagProvider;
        this.fields = {};
        this.fieldsArray = [];
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.initialSelectedGroup = null;
        this.isEditing = false;
        this.title = '';
        this.component = __WEBPACK_IMPORTED_MODULE_11__providers_data__["a" /* AddonModDataProvider */].COMPONENT;
        this.loaded = false;
        this.selectedGroup = 0;
        this.cssClass = '';
        this.editFormRender = '';
        this.extraImports = [__WEBPACK_IMPORTED_MODULE_15__components_components_module__["a" /* AddonModDataComponentsModule */]];
        this.errors = {};
        this.module = params.get('module') || {};
        this.entryId = params.get('entryId') || null;
        this.courseId = params.get('courseId');
        this.selectedGroup = this.entryId ? null : (params.get('group') || 0);
        // If entryId is lower than 0 or null, it is a new entry or an offline entry.
        this.isEditing = this.entryId && this.entryId > 0;
        this.siteId = sitesProvider.getCurrentSiteId();
        this.title = this.module.name;
        this.editForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({});
    }
    /**
     * View loaded.
     */
    AddonModDataEditPage.prototype.ionViewDidLoad = function () {
        this.fetchEntryData(true);
    };
    /**
     * Check if we can leave the page or not and ask to confirm the lost of data.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModDataEditPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inputData, changed, files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.forceLeave || !this.entry) {
                            return [2 /*return*/];
                        }
                        inputData = this.editForm.value;
                        return [4 /*yield*/, this.dataHelper.hasEditDataChanged(inputData, this.fieldsArray, this.data.id, this.entry.contents)];
                    case 1:
                        changed = _a.sent();
                        changed = changed || (!this.isEditing && this.initialSelectedGroup != this.selectedGroup);
                        if (!changed) return [3 /*break*/, 3];
                        // Show confirmation if some data has been modified.
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 2:
                        // Show confirmation if some data has been modified.
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.dataHelper.getEditTmpFiles(inputData, this.fieldsArray, this.data.id, this.entry.contents)];
                    case 4:
                        files = _a.sent();
                        this.fileUploaderProvider.clearTmpFiles(files);
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.siteId);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch the entry data.
     *
     * @param [refresh] To refresh all downloaded data.
     * @return Resolved when done.
     */
    AddonModDataEditPage.prototype.fetchEntryData = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, entry, haveAccess, _c, canAddGroup_1, accessData, message_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 13, , 14]);
                        _a = this;
                        return [4 /*yield*/, this.dataProvider.getDatabase(this.courseId, this.module.id)];
                    case 1:
                        _a.data = _d.sent();
                        this.title = this.data.name || this.title;
                        this.cssClass = 'addon-data-entries-' + this.data.id;
                        _b = this;
                        return [4 /*yield*/, this.dataProvider.getFields(this.data.id, { cmId: this.module.id })];
                    case 2:
                        _b.fieldsArray = _d.sent();
                        this.fields = this.utils.arrayToObject(this.fieldsArray, 'id');
                        return [4 /*yield*/, this.dataHelper.fetchEntry(this.data, this.fieldsArray, this.entryId)];
                    case 3:
                        entry = _d.sent();
                        this.entry = entry.entry;
                        // Load correct group.
                        this.selectedGroup = this.selectedGroup == null ? this.entry.groupid : this.selectedGroup;
                        if (!!this.isEditing) return [3 /*break*/, 12];
                        haveAccess = false;
                        if (!refresh) return [3 /*break*/, 5];
                        _c = this;
                        return [4 /*yield*/, this.groupsProvider.getActivityGroupInfo(this.data.coursemodule)];
                    case 4:
                        _c.groupInfo = _d.sent();
                        this.selectedGroup = this.groupsProvider.validateGroupId(this.selectedGroup, this.groupInfo);
                        this.initialSelectedGroup = this.selectedGroup;
                        _d.label = 5;
                    case 5:
                        if (!(this.groupInfo.groups.length > 0)) return [3 /*break*/, 9];
                        if (!refresh) return [3 /*break*/, 7];
                        canAddGroup_1 = {};
                        return [4 /*yield*/, Promise.all(this.groupInfo.groups.map(function (group) { return __awaiter(_this, void 0, void 0, function () {
                                var accessData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.dataProvider.getDatabaseAccessInformation(this.data.id, {
                                                cmId: this.module.id, groupId: group.id
                                            })];
                                        case 1:
                                            accessData = _a.sent();
                                            canAddGroup_1[group.id] = accessData.canaddentry;
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 6:
                        _d.sent();
                        this.groupInfo.groups = this.groupInfo.groups.filter(function (group) {
                            return !!canAddGroup_1[group.id];
                        });
                        haveAccess = canAddGroup_1[this.selectedGroup];
                        return [3 /*break*/, 8];
                    case 7:
                        // Groups already filtered, so it have access.
                        haveAccess = true;
                        _d.label = 8;
                    case 8: return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.dataProvider.getDatabaseAccessInformation(this.data.id, { cmId: this.module.id })];
                    case 10:
                        accessData = _d.sent();
                        haveAccess = accessData.canaddentry;
                        _d.label = 11;
                    case 11:
                        if (!haveAccess) {
                            // You shall not pass, go back.
                            this.domUtils.showErrorModal('addon.mod_data.noaccess', true);
                            // Go back to entry list.
                            this.forceLeave = true;
                            this.navCtrl.pop();
                            return [2 /*return*/];
                        }
                        _d.label = 12;
                    case 12:
                        this.editFormRender = this.displayEditFields();
                        return [3 /*break*/, 14];
                    case 13:
                        message_1 = _d.sent();
                        this.domUtils.showErrorModalDefault(message_1, 'core.course.errorgetmodule', true);
                        return [3 /*break*/, 14];
                    case 14:
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Saves data.
     *
     * @param e Event.
     * @return Resolved when done.
     */
    AddonModDataEditPage.prototype.save = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var inputData = this.editForm.value;
        return this.dataHelper.hasEditDataChanged(inputData, this.fieldsArray, this.data.id, this.entry.contents).then(function (changed) {
            changed = changed || (!_this.isEditing && _this.initialSelectedGroup != _this.selectedGroup);
            if (!changed) {
                if (_this.entryId) {
                    return _this.returnToEntryList();
                }
                // New entry, no changes means no field filled, warn the user.
                return Promise.reject('addon.mod_data.emptyaddform');
            }
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            // Create an ID to assign files.
            var entryTemp = _this.entryId ? _this.entryId : -(new Date().getTime());
            return _this.dataHelper.getEditDataFromForm(inputData, _this.fieldsArray, _this.data.id, entryTemp, _this.entry.contents, _this.offline).catch(function (e) {
                if (!_this.offline) {
                    // Cannot submit in online, prepare for offline usage.
                    _this.offline = true;
                    return _this.dataHelper.getEditDataFromForm(inputData, _this.fieldsArray, _this.data.id, entryTemp, _this.entry.contents, _this.offline);
                }
                return Promise.reject(e);
            }).then(function (editData) {
                if (editData.length > 0) {
                    if (_this.isEditing) {
                        return _this.dataProvider.editEntry(_this.data.id, _this.entryId, _this.courseId, editData, _this.fields, undefined, _this.offline);
                    }
                    return _this.dataProvider.addEntry(_this.data.id, entryTemp, _this.courseId, editData, _this.selectedGroup, _this.fields, undefined, _this.offline);
                }
                return false;
            }).then(function (result) {
                if (!result) {
                    // No field filled, warn the user.
                    return Promise.reject('addon.mod_data.emptyaddform');
                }
                // This is done if entry is updated when editing or creating if not.
                if ((_this.isEditing && result.updated) || (!_this.isEditing && result.newentryid)) {
                    _this.domUtils.triggerFormSubmittedEvent(_this.formElement, result.sent, _this.siteId);
                    var promises = [];
                    if (result.sent) {
                        _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_8__providers_events__["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'data' });
                        if (_this.isEditing) {
                            promises.push(_this.dataProvider.invalidateEntryData(_this.data.id, _this.entryId, _this.siteId));
                        }
                        promises.push(_this.dataProvider.invalidateEntriesData(_this.data.id, _this.siteId));
                    }
                    return Promise.all(promises).then(function () {
                        _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_11__providers_data__["a" /* AddonModDataProvider */].ENTRY_CHANGED, { dataId: _this.data.id, entryId: _this.entryId }, _this.siteId);
                    }).finally(function () {
                        return _this.returnToEntryList();
                    });
                }
                else {
                    _this.errors = {};
                    if (result.fieldnotifications) {
                        result.fieldnotifications.forEach(function (fieldNotif) {
                            var field = _this.fieldsArray.find(function (field) { return field.name == fieldNotif.fieldname; });
                            if (field) {
                                _this.errors[field.id] = fieldNotif.notification;
                            }
                        });
                    }
                    _this.jsData['errors'] = _this.errors;
                    setTimeout(function () {
                        _this.scrollToFirstError();
                    });
                }
            }).finally(function () {
                modal.dismiss();
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Cannot edit entry', true);
        });
    };
    /**
     * Set group to see the database.
     *
     * @param groupId Group identifier to set.
     * @return Resolved when done.
     */
    AddonModDataEditPage.prototype.setGroup = function (groupId) {
        this.selectedGroup = groupId;
        this.loaded = false;
        return this.fetchEntryData();
    };
    /**
     * Displays Edit Search Fields.
     *
     * @return Generated HTML.
     */
    AddonModDataEditPage.prototype.displayEditFields = function () {
        this.jsData = {
            fields: this.fields,
            contents: this.utils.clone(this.entry.contents),
            form: this.editForm,
            data: this.data,
            errors: this.errors
        };
        var replace, render, template = this.dataHelper.getTemplate(this.data, 'addtemplate', this.fieldsArray);
        // Replace the fields found on template.
        this.fieldsArray.forEach(function (field) {
            replace = '[[' + field.name + ']]';
            replace = replace.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            replace = new RegExp(replace, 'gi');
            // Replace field by a generic directive.
            render = '<addon-mod-data-field-plugin mode="edit" [field]="fields[' + field.id + ']"\
                [value]="contents[' + field.id + ']" [form]="form" [database]="data" [error]="errors[' + field.id + ']">\
                </addon-mod-data-field-plugin>';
            template = template.replace(replace, render);
            // Replace the field id tag.
            replace = '[[' + field.name + '#id]]';
            replace = replace.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            replace = new RegExp(replace, 'gi');
            template = template.replace(replace, 'field_' + field.id);
        });
        // Editing tags is not supported.
        replace = new RegExp('##tags##', 'gi');
        var message = '<p class="item-dimmed">{{ \'addon.mod_data.edittagsnotsupported\' | translate }}</p>';
        template = template.replace(replace, this.tagProvider.areTagsAvailableInSite() ? message : '');
        return template;
    };
    /**
     * Return to the entry list (previous page) discarding temp data.
     *
     * @return Resolved when done.
     */
    AddonModDataEditPage.prototype.returnToEntryList = function () {
        var _this = this;
        var inputData = this.editForm.value;
        return this.dataHelper.getEditTmpFiles(inputData, this.fieldsArray, this.data.id, this.entry.contents).then(function (files) {
            _this.fileUploaderProvider.clearTmpFiles(files);
        }).finally(function () {
            // Go back to entry list.
            _this.forceLeave = true;
            _this.navCtrl.pop();
        });
    };
    /**
     * Scroll to first error or to the top if not found.
     */
    AddonModDataEditPage.prototype.scrollToFirstError = function () {
        if (!this.domUtils.scrollToElementBySelector(this.content, '.addon-data-error')) {
            this.domUtils.scrollToTop(this.content);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AddonModDataEditPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('editFormEl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddonModDataEditPage.prototype, "formElement", void 0);
    AddonModDataEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-data-edit',template:/*ion-inline-start:"/Users/lewiscarr/Documents/moodleapp/src/addon/mod/data/pages/edit/edit.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></ion-title>\n        <ion-buttons end>\n            <button *ngIf="entry" ion-button clear (click)="save($event)" [attr.aria-label]="\'core.save\' | translate">\n                {{ \'core.save\' | translate }}\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]="loaded">\n        <ion-item text-wrap *ngIf="groupInfo && (groupInfo.separateGroups || groupInfo.visibleGroups)">\n            <ion-label id="addon-data-groupslabel" *ngIf="groupInfo.separateGroups">{{ \'core.groupsseparate\' | translate }}</ion-label>\n            <ion-label id="addon-data-groupslabel" *ngIf="groupInfo.visibleGroups">{{ \'core.groupsvisible\' | translate }}</ion-label>\n            <ion-select [(ngModel)]="selectedGroup" (ionChange)="setGroup(selectedGroup)" aria-labelledby="addon-data-groupslabel" interface="action-sheet">\n                <ion-option *ngFor="let groupOpt of groupInfo.groups" [value]="groupOpt.id">{{groupOpt.name}}</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <div class="addon-data-contents {{cssClass}}" *ngIf="data">\n            <core-style [css]="data.csstemplate" prefix=".{{cssClass}}"></core-style>\n\n            <form (ngSubmit)="save($event)" [formGroup]="editForm" #editFormEl>\n                <core-compile-html [text]="editFormRender" [jsData]="jsData" [extraImports]="extraImports"></core-compile-html>\n            </form>\n        </div>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"/Users/lewiscarr/Documents/moodleapp/src/addon/mod/data/pages/edit/edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["b" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_groups__["a" /* CoreGroupsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_fields_delegate__["a" /* AddonModDataFieldsDelegate */],
            __WEBPACK_IMPORTED_MODULE_10__core_course_providers_course__["b" /* CoreCourseProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_data__["a" /* AddonModDataProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_offline__["a" /* AddonModDataOfflineProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_helper__["a" /* AddonModDataHelperProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_9__core_fileuploader_providers_fileuploader__["b" /* CoreFileUploaderProvider */],
            __WEBPACK_IMPORTED_MODULE_16__core_tag_providers_tag__["a" /* CoreTagProvider */]])
    ], AddonModDataEditPage);
    return AddonModDataEditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=115.js.map