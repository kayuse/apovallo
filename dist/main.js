(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@page/layouts/simplywhite/simplywhite.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@page/layouts/simplywhite/simplywhite.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>simplywhite works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/card-social/card-social.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/card-social/card-social.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"_type === 'widget'\" class=\"card social-card share {{_additionalClasses}}\" data-social=\"item\">\n  <div class=\"card-header \">\n    <h5 class=\"{{_titleClass}} pull-left fs-12 d-flex\">{{_title}}\n      <i class=\"pg-icon text-complete\">circle_fill</i>\n    </h5>\n    <div class=\"pull-right small hint-text d-flex\">\n      {{_comments}}\n      <i class=\"pg-icon\">comment</i>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"card-description\">\n    <h3>{{_body}}</h3>\n    <ng-template [ngTemplateOutlet]=\"CustomBody\"></ng-template>\n  </div>\n  <div class=\"card-footer clearfix\">\n    <div class=\"pull-left\">via\n      <span class=\"{{_titleClass}}\">{{_source}}</span>\n    </div>\n    <div class=\"pull-right hint-text\">\n      {{_timestamp}}\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</div>\n\n\n<div *ngIf=\"_type == 'text'\" class=\"card social-card share  {{_additionalClasses}}\">\n  <!-- START ITEM -->\n  <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\n  </div>\n  <div class=\"card-header clearfix\">\n    <div class=\"user-pic\">\n      <ng-template [ngTemplateOutlet]=\"AuthorAvatar\"></ng-template>\n    </div>\n    <h5>{{_author}}</h5>\n    <h6 class=\"d-flex align-items-center\">{{_activity}}\n      <i class=\"pg-icon\">map</i>\n      <span class=\"location semi-bold\"> {{_location}}</span>\n    </h6>\n  </div>\n  <div class=\"card-description\">\n    <ng-template [ngTemplateOutlet]=\"CustomBody\"></ng-template>\n    <div class=\"via\">{{_source}}</div>\n  </div>\n  <div *ngIf=\"_image.length > 0\" class=\"card-content\">\n      <ul class=\"buttons \">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"pg-icon\">expand</i>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"pg-icon\">heart</i>\n          </a>\n        </li>\n      </ul>\n      <img alt=\"Social post\" src=\"{{_image}}\">\n  </div>\n  <div *ngIf=\"_image.length > 0\" class=\"card-footer clearfix\">\n      <div class=\"time\">{{_timestamp}}</div>\n      <ul class=\"reactions\">\n        <li>\n          <a href=\"javascript:void(0)\" class=\"d-flex align-items-center\">{{_comments}}\n            <i class=\"pg-icon\">comment</i>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\" class=\"d-flex align-items-center\">{{_likes}}\n            <i class=\"pg-icon\">heart</i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  <!-- END ITEM -->\n</div>\n\n<div  *ngIf=\"_type == 'image'\" class=\"card social-card share {{_additionalClasses}}\">\n    <!-- START ITEM -->\n    <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\n\t</div>\n\t<div class=\"card-content flex-1\" data-pages-bg-image [ngStyle]=\"{'background-image':'url('+_image+')'}\">\n\t\t<ul class=\"buttons \">\n\t\t  <li>\n\t\t\t<a href=\"#\"> <i class=\"pg-icon\">expand</i>\n\t\t\t</a>\n\t\t  </li>\n\t\t  <li>\n\t\t\t<a href=\"#\"><i class=\"pg-icon\">heart</i>\n\t\t\t</a>\n\t\t  </li>\n\t\t</ul>\n\t</div>\n    <div class=\"card-description\">\n      <p>{{_body}}</p>\n      <ng-template [ngTemplateOutlet]=\"CustomBody\"></ng-template>\n    </div>\n    <div class=\"card-footer clearfix\">\n      <div class=\"time\">{{_timestamp}}</div>\n      <ul class=\"reactions\">\n        <li>\n          <a href=\"javascript:void(0)\" class=\"d-flex align-items-center\">{{_comments}}\n            <i class=\"pg-icon\">comment</i>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\" class=\"d-flex align-items-center\">{{_likes}}\n            <i class=\"pg-icon\">heart</i>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-header clearfix last\">\n      <div class=\"user-pic\">\n        <ng-template [ngTemplateOutlet]=\"AuthorAvatar\"></ng-template>\n      </div>\n      <h5>{{_author}}</h5>\n      <h6 class=\"d-flex align-items-center\">{{_activity}}</h6>\n    </div>\n    <!-- END ITEM -->\n  </div>\n\n\n\n  <div  *ngIf=\"_type == 'status'\" class=\"card social-card status {{_additionalClasses}}\">\n      <!-- START ITEM -->\n      <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\n      </div>\n      <h5>{{_author}} {{_activity}}\n        <span class=\"hint-text\">{{_timestamp}}</span>\n      </h5>\n      <h2>{{_body}}</h2>\n      <ul class=\"reactions\">\n        <li>\n          <a href=\"javascript:void(0)\" class=\"d-flex align-items-center\">{{_comments}}\n            <i class=\"pg-icon\">comment</i>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\" class=\"d-flex align-items-center\">{{_likes}}\n            <i class=\"pg-icon\">heart</i>\n          </a>\n        </li>\n      </ul>\n      <!-- END ITEM -->\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/card/card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/card/card.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card card-{{_type}} {{_additionalClasses}}\" *ngIf=\"!_close_card\"\n    [class.card-collapsed]=\"_isCollapsed\"\n    [class.card-maximized]=\"_isMaximixed\"\n    #hostContent>\n    <div class=\"card-header {{_extraHeaderClass}}\">\n        <div class=\"card-title\">\n            <ng-template [ngTemplateOutlet]=\"CardTitle\"></ng-template>\n        </div>\n        <div class=\"card-controls\" *ngIf=\"_showTools == true\">\n            <ul *ngIf=\"_minimalHeader == false; else minimalBlock\">\n                <ng-template [ngTemplateOutlet]=\"CardExtraControls\"></ng-template>\n                <li *ngIf=\"_toggle == true\"><a href=\"javascript:void(0);\" data-toggle class=\"card-collapse\" (click)='toggle()'><i class=\"card-icon card-icon-collapse\" [class.pg-arrow_minimize]=\"_isCollapsed\"></i></a>\n                </li>\n                <li *ngIf=\"_refresh == true\"><a href=\"javascript:void(0);\" data-toggle class=\"card-refresh\" (click)='refresh()'><i class=\"card-icon card-icon-refresh\"></i></a>\n                </li>\n                <li *ngIf=\"_maximize == true\"><a  href=\"javascript:void(0);\" data-toggle class=\"card-maximize\" (click)='maximize()'><i class=\"card-icon card-icon-maximize\"></i></a>\n                </li>\n                <li *ngIf=\"_close == true\"><a href=\"javascript:void(0);\" data-toggle class=\"card-close\" (click)='close()'><i class=\"card-icon card-icon-close\"></i></a>\n                </li>\n            </ul>\n        <ng-template #minimalBlock>\n            <ul>\n                <li>\n                    <a href=\"javascript:void(0);\" (click)='refresh()' class=\"card-refresh minimal\" [class.refreshing]=\"_isLoading\">\n                        <i #minimalCircleLoadingTrigger class=\"card-icon card-icon-refresh-lg-{{_refreshColor == 'light' ? 'white' : 'master'}}\" [class.fade]=\"_isLoading\"></i>\n                        <i #minimalCircleLoading\n                        class=\"card-icon-refresh-lg-{{_refreshColor == 'light' ? 'white' : 'master'}}-animated\" style=\"position: absolute;top:0;left:0\" [class.active]=\"_isLoading\"  [class.hide]=\"_isLoading != true\"></i>\n                    </a>\n                </li>\n            </ul>\n        </ng-template>\n        </div>\n    </div>\n    <div class=\"card-body {{_extraBodyClass}}\" [@collapseState]=\"_isCollapsed == true ?'inactive':'active'\">\n        <ng-content></ng-content>\n    </div>\n    <div *ngIf=\"_messageVisible == true\" class=\"pgn-wrapper\" data-position=\"top\">\n        <div class=\"pgn pgn-bar push-on-sidebar-open\">\n            <div class=\"alert alert-danger\">\n                <span>{{_message}}</span><button class=\"close\" (click)='alertDismiss()' type=\"button\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"_messageVisible == true\" class=\"card-progress\" [style.backgroundColor] = \"_minimalHeader && _refreshColor == 'white' ? 'rgba(0,0,0, 0.6)' : 'rgba(255, 255, 255, 0.8)'\" style=\" display: block;\">\n\n    </div>\n    <div [@fadeAnimation]=\"_isLoading\" class=\"card-progress\"  [style.backgroundColor] = \"_minimalHeader && _refreshColor == 'white' ? 'rgba(0,0,0, 0.6)' : 'rgba(255, 255, 255, 0.8)'\" style=\"display: block;pointer-events: none\">\n        <pg-progress *ngIf=\"_minimalHeader == false\" type=\"{{_progressType}}\" color=\"{{_progressColor}}\" indeterminate=\"true\" class=\"\"></pg-progress>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/collapse/collapse.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/collapse/collapse.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header\" [attr.aria-expanded]=\"_active\" (click)=\"clickHeader($event)\" role=\"tab\">\n  <ng-template [ngIf]=\"Title\">\n      <h4 class=\"card-title\">\n        <a href=\"javascript:;\" [ngClass]=\"{'collapsed':!_active}\">\n        {{ Title }}\n        </a>\n      </h4>\n  </ng-template>\n  <ng-template [ngIf]=\"!Title\">\n    <ng-content select=\"[collapse-title]\"></ng-content>\n  </ng-template>\n</div>\n<div class=\"collapse\" [ngClass]=\"{'show':true,'active':_active,'inactive':!_active}\" [@collapseState]=\"_active?'active':'inactive'\">\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/container/container.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/container/container.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"_enableHorizontalContainer; else determineBlock\" class=\"container {{_extraHorizontalClass}}\"> \n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n</div>\n<ng-template #determineBlock>\n    <div class=\"container-fluid container-fixed-lg {{_extraClass}}\"> \n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container> \n    </div>\n</ng-template>\n<ng-template #contentTpl><ng-content></ng-content></ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/cs-select/select.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/cs-select/select.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n      tabindex=\"0\"\n      #trigger\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      class=\"cs-wrapper\"\n      (keydown.Enter)=\"handleKeyEnterEvent($event)\"\n      (keydown.Backspace)=\"handleKeyBackspaceEvent($event)\"\n      (keydown.ArrowUp)=\"handleKeyUpEvent($event)\"\n      (keydown.ArrowDown)=\"handleKeyDownEvent($event)\">\n      <!-- <div class=\"pg-select-selection__rendered\" >\n        <div class=\"pg-select-selection__placeholder\">\n          <ng-template [ngIf]=\"!_selectedOption\">\n            {{ PlaceHolder }}\n          </ng-template>\n        </div>\n   \n      </div> -->\n      <div class=\"cs-select cs-skin-slide cs-main\" #placeHolder>\n          <span class=\"cs-placeholder\">\n              <ng-template [ngIf]=\"!_selectedOption\">\n                  {{ PlaceHolder }}\n              </ng-template>\n            {{ _selectedOption?.Label }}\n          </span>\n        <div class=\"cs-options\" style=\"width: 100%; overflow-y: auto;\" #csOptions>\n          <ul>\n            <li\n            *ngFor=\"let option of _filterOptions\">\n            <span>\n              <ng-template\n                *ngIf=\"option.OptionTemplate\"\n                [ngTemplateOutlet]=\"option.OptionTemplate\">\n              </ng-template>\n              <ng-template [ngIf]=\"!option.OptionTemplate\">\n                {{ option.Label }}\n              </ng-template>\n              </span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"cs-backdrop\"></div>    \n      </div> \n    </div>\n    <ng-template\n      cdkConnectedOverlay\n      cdkConnectedOverlayHasBackdrop\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      (backdropClick)=\"closeDropDown()\"\n      (detach)=\"closeDropDown();\"\n      (positionChange)=\"onPositionChange($event)\"\n      [cdkConnectedOverlayWidth]=\"_triggerWidth\"\n      [cdkConnectedOverlayOpen]=\"_isOpen\"\n    >\n      <div class=\"cs-select cs-skin-slide\"\n        [ngClass]=\"_dropDownClassMap\" [ngStyle]=\"top\" [class.cs-active]=\"_openBackdrop\">\n          <span class=\"cs-placeholder\">\n              <ng-template [ngIf]=\"!_selectedOption\">\n                  {{ PlaceHolder }}\n              </ng-template>\n            {{ _selectedOption?.Label }}\n          </span>\n          <div class=\"cs-options\" style=\"width: 100%; overflow-y: auto;\">\n            <ul>\n              <li\n              *ngFor=\"let option of _filterOptions\"\n              [class.active]=\"option.Value == _activeFilterOption?.Value\"\n              [class.selected]=\"(option.Value==(_selectedOption?.Value))||(isInSet(_selectedOptions,option))\"\n              (click)=\"clickOption(option,$event)\">\n              <span>\n                <ng-template\n                  *ngIf=\"option.OptionTemplate\"\n                  [ngTemplateOutlet]=\"option.OptionTemplate\">\n                </ng-template>\n                <ng-template [ngIf]=\"!option.OptionTemplate\">\n                  {{ option.Label }}\n                </ng-template>\n              </span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"cs-backdrop\" [ngStyle]=\"_backDropStyles\"></div>\n      </div>\n    </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header {{extraClass}} {{_headerClass}}\" >\n  <div *ngIf=\"boxed; else nonBoxedBlock\" class=\"container\">\n    <div class=\"header-inner\"  *ngIf=\"!isHorizontalLayout; else boxedHorizontal\">\n      <ng-container *ngTemplateOutlet=\"nonBoxedBlock\"></ng-container>\n    </div>\n    <ng-template #boxedHorizontal>\n        <ng-container *ngTemplateOutlet=\"nonBoxedBlock\"></ng-container>\n    </ng-template>\n  </div>\n  <ng-template #nonBoxedBlock><ng-content></ng-content>\n  </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/horizontal-menu/horizontal-menu.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/horizontal-menu/horizontal-menu.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu-bar header-sm-height\" #menuWrapper [class.open]=\"_horizontalMobileMenu\">\n  <a href=\"javascript:void(0)\" (click)=\"toggleHorizontalMenu()\" class=\"btn-link header-icon toggle-sidebar d-lg-none\">\n    <i class=\"pg-icon\">close</i>\n  </a>\n  <ul (cdkObserveContent)=\"_onContentChanges()\">\n    <li *ngFor=\"let item of _renduerMenuItems\" [class.open]=\"item.open || item.mToggle ==='open'\"\n      [class.opening]=\"item.opening\" [class.more]=\"item.type\" [routerLinkActive]=\"['active']\"\n      [routerLinkActiveOptions]=\"{exact: true}\">\n      <a href=\"javascript:void(0);\" *ngIf=\"item.submenu;else singleLink\" (click)=\"toggleLink($event,item)\">\n        <span class=\"title\">\n          <ng-template [ngIf]=\"item.type != 'more'\">{{ item.label }}</ng-template>\n          <i *ngIf=\"item.type\" class=\"pg-icon\">more_horizontal</i>\n        </span>\n        <span *ngIf=\"item.submenu && !item.type\" class=\" arrow\" [class.open]=\"item.mToggle ==='open'\"></span>\n      </a>\n      <ng-template #singleLink>\n        <a *ngIf=\"item.routerLink\" [routerLink]=\"[item.routerLink]\"><span class=\"title\">{{ item.label }}</span>\n        </a>\n        <a *ngIf=\"item.externalLink\" href=\"{{item.externalLink}}\" [attr.target]=\"item.target\"><span\n            class=\"title\">{{ item.label }}</span>\n        </a>\n      </ng-template>\n      <ul *ngIf=\"item.submenu\">\n        <li *ngFor=\"let child of item.submenu\">\n          <a href=\"javascript:void(0);\" *ngIf=\"child.submenu;else singleLinkChild\"><span\n              class=\"title\">{{ child.label }}</span>\n            <span *ngIf=\"item.submenu\" class=\" arrow\" [class.open]=\"item.mToggle ==='open'\"></span>\n          </a>\n          <ng-template #singleLinkChild>\n            <a *ngIf=\"child.routerLink\" [routerLink]=\"[child.routerLink]\"><span class=\"title\">{{ child.label }}</span>\n            </a>\n            <a *ngIf=\"child.externalLink\" href=\"{{child.externalLink}}\" [attr.target]=\"child.target\"><span\n                class=\"title\">{{ child.label }}</span>\n            </a>\n          </ng-template>\n          <ul *ngIf=\"child.submenu\" class=\"sub-menu\">\n            <li *ngFor=\"let lvl2 of child.submenu\">\n              <a *ngIf=\"lvl2.routerLink\" [routerLink]=\"[lvl2.routerLink]\"><span class=\"title\">{{ lvl2.label }}</span>\n              </a>\n              <a *ngIf=\"lvl2.externalLink\" [routerLink]=\"[lvl2.externalLink]\" [attr.target]=\"lvl2.target\"><span\n                  class=\"title\">{{ item.label }}</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n      <div class=\"ghost-nav-dropdown\" [ngStyle]=\"item.ghost\"></div>\n    </li>\n  </ul>\n  <ul #menuItemsList class=\"ghost-ul d-none d-lg-block\">\n    <li *ngFor=\"let item of menuItems\">\n      <a href=\"javascript:void(0);\">\n        <span class=\"title\">{{ item.label }}</span>\n        <span *ngIf=\"item.submenu\" class=\" arrow\"></span>\n      </a>\n    </li>\n  </ul>\n  <ng-template [ngTemplateOutlet]=\"mobileSidebarFooter\"></ng-template>\n</div>\n<div class=\"horizontal-menu-backdrop-dekstop\" [style.display]=\"(currentItem?.open) ? 'block':'none'\"\n  (click)=\"closeHorizontalMenu()\"></div>\n<div class=\"horizontal-menu-backdrop\" [style.display]=\"_horizontalMobileMenu ? 'block':'none'\"\n  (click)=\"toggleHorizontalMenu()\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/list-view/list-item/list-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/list-view/list-item/list-item.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template>\n    <ng-content></ng-content>\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/list-view/list-view-container/list-view-container.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/list-view/list-view-container/list-view-container.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-view boreded no-top-border scrollable full-height relative\" (cdkObserveContent)=\"cacheElements()\">\n    <div class=\"list-view-fake-header\" [class.list-view-hidden]=\"fakeHeaderHidden\">\n        <ng-template [ngTemplateOutlet]=\"topHeader\"></ng-template>\n    </div>\n    <div class=\"scroll-wrapper list-view-wrapper\" (scroll)=\"computeHeader()\" #itemListWrapper [perfectScrollbar]=\"config\" [disabled]=\"isPerfectScrollbarDisabled\">\n      <div class=\"list-view-group-container\" [class.list-view-animated]=\"elems[elem_i]?.animated\" *ngFor=\"let item of _items; let elem_i = index\" [class.list-view-animated]=\"item.animated\">\n          <div class=\"list-view-group-header text-uppercase\"><ng-template [ngTemplateOutlet]=\"item._itemHeading\"></ng-template></div>\n          <ul>\n            <!-- BEGIN List Item  !-->\n            <ng-template [ngTemplateOutlet]=\"item._content\"></ng-template>\n            <!-- END List Item  !-->\n          </ul>\n        </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu-alt.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu-alt.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"main-menu mt-5\">\n    <li *ngFor=\"let item of menuItems\" [class.open]=\"item.toggle ==='open'\" >\n            <a  href=\"javascript:;\" *ngIf=\"item.submenu;else singleLink\" (click)=\"toggleNavigationSub($event,item)\" [class.detailed]=\"item.details\">\n                <pg-menu-icon *ngIf=\"item.iconType\" [IconType]=\"item.iconType\" [IconName]=\"item.iconName\"></pg-menu-icon>\n                <span class=\"title\">{{ item.label }}</span>\n                <span  *ngIf=\"item.submenu\" class=\" arrow\" [class.open]=\"item.toggle ==='open'\"></span>\n                <span  *ngIf=\"item.badgeCount\" class=\"badge pull-right\">{{item.badgeCount}}</span>\n            </a>\n            <ng-template #singleLink>\n                <a *ngIf=\"item.routerLink\" [routerLink]=\"[item.routerLink]\" [class.detailed]=\"item.details\">\n                    <pg-menu-icon *ngIf=\"item.iconType\" [IconType]=\"item.iconType\" [IconName]=\"item.iconName\"></pg-menu-icon>\n                    <span class=\"title\">{{ item.label }}</span>\n                    <span  *ngIf=\"item.submenu\" class=\" arrow\" [class.open]=\"item.toggle ==='open'\"></span>\n                    <span  *ngIf=\"item.badgeCount\" class=\"badge pull-right\">{{item.badgeCount}}</span>\n                </a>\n                <a *ngIf=\"item.externalLink\" href=\"{{item.externalLink}}\" [attr.target]=\"item.target\" [class.detailed]=\"item.details\">\n                    <pg-menu-icon *ngIf=\"item.iconType\" [IconType]=\"item.iconType\" [IconName]=\"item.iconName\"></pg-menu-icon>\n                    <span class=\"title\">{{ item.label }}</span>\n                    <span  *ngIf=\"item.submenu\" class=\" arrow\" [class.open]=\"item.toggle ==='open'\"></span>\n                    <span  *ngIf=\"item.badgeCount\" class=\"badge pull-right\">{{item.badgeCount}}</span>\n                </a>\n            </ng-template>\n            <ul class=\"sub-menu\" *ngIf=\"item.submenu\" [@toggleHeight]=\"item.toggle\">\n                <li *ngFor=\"let child of item.submenu\" [class.open]=\"child.toggle ==='open'\">\n                    <a href=\"javascript:;\" *ngIf=\"child.submenu;else singleLinkChild\" (click)=\"toggleNavigationSub($event,item)\">\n                        <pg-menu-icon *ngIf=\"child.iconType\" [IconType]=\"child.iconType\" [IconName]=\"child.iconName\"></pg-menu-icon>\n                        <span class=\"title\">{{ child.label }}</span>\n                        <span  *ngIf=\"child.submenu\" class=\" arrow\" [class.open]=\"child.toggle ==='open'\"></span>\n                        <span  *ngIf=\"child.badgeCount\" class=\"badge pull-right\">{{child.badgeCount}}</span>\n                    </a>\n                    <ng-template #singleLinkChild>\n                        <a *ngIf=\"child.routerLink\" [routerLink]=\"[child.routerLink]\">\n                            <pg-menu-icon *ngIf=\"child.iconType\" [IconType]=\"child.iconType\" [IconName]=\"child.iconName\"></pg-menu-icon>\n                            <span class=\"title\">{{ child.label }}</span>\n                            <span  *ngIf=\"child.submenu\" class=\" arrow\" [class.open]=\"child.toggle ==='open'\"></span>\n                            <span  *ngIf=\"child.badgeCount\" class=\"badge pull-right\">{{child.badgeCount}}</span>\n                        </a>\n                        <a *ngIf=\"child.externalLink\" href=\"{{child.externalLink}}\" [attr.target]=\"item.target\">\n                            <pg-menu-icon *ngIf=\"child.iconType\" [IconType]=\"child.iconType\" [IconName]=\"child.iconName\"></pg-menu-icon>\n                            <span class=\"title\">{{ child.label }}</span>\n                            <span  *ngIf=\"child.submenu\" class=\" arrow\" [class.open]=\"child.toggle ==='open'\"></span>\n                            <span  *ngIf=\"child.badgeCount\" class=\"badge pull-right\">{{child.badgeCount}}</span>\n                        </a>\n                    </ng-template>\n                </li>\n            </ul>\n    </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu-icon.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu-icon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container [ngSwitch]=\"IconType\">\n    <svg\n    class=\"feather\"\n    fill=\"none\"\n    stroke=\"currentColor\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    *ngSwitchCase=\"'fi'\"\n    >\n        <use attr.xlink:href=\"assets/fonts/feather/feather-sprite.svg#{{IconName}}\"/>\n    </svg>\n    <ng-container *ngSwitchCase=\"'letter'\">\n        {{IconName}}\n    </ng-container>\n    <i *ngSwitchDefault class=\"{{IconType}}-icon\">{{IconName}}</i>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"menu-items p-t-25 mt-5\" [perfectScrollbar]=\"config\" [disabled]=\"isPerfectScrollbarDisabled\">\n    <li *ngFor=\"let item of menuItems\" [class.open]=\"item.toggle ==='open'\" >\n        <a  href=\"javascript:;\" *ngIf=\"item.submenu;else singleLink\" (click)=\"toggleNavigationSub($event,item)\" [class.detailed]=\"item.details\">\n            <span class=\"title\">{{ item.label }}</span>\n            <span  *ngIf=\"item.details\" class=\"details\">{{item.details}}</span>\n            <span  *ngIf=\"item.submenu\" class=\" arrow\" [class.open]=\"item.toggle ==='open'\"></span>\n        </a>\n        <ng-template #singleLink>\n        <a *ngIf=\"item.routerLink\" [routerLink]=\"[item.routerLink]\" [class.detailed]=\"item.details\">\n            <span class=\"title\">{{ item.label }}</span>\n            <span  *ngIf=\"item.details\" class=\"details\">{{item.details}}</span>\n        </a>\n        <a *ngIf=\"item.externalLink\" href=\"{{item.externalLink}}\" [attr.target]=\"item.target\" [class.detailed]=\"item.details\">\n            <span class=\"title\">{{ item.label }}</span>\n            <span  *ngIf=\"item.details\" class=\"details\">{{item.details}}</span>\n        </a>\n        </ng-template>\n        <pg-menu-icon *ngIf=\"item.iconType\" [IconType]=\"item.iconType\" [IconName]=\"item.iconName\" [ExtraClass]=\"item.thumbNailClass\"></pg-menu-icon>\n        <ul class=\"sub-menu\" *ngIf=\"item.submenu\" [@toggleHeight]=\"item.toggle\">\n            <li *ngFor=\"let child of item.submenu\" [class.open]=\"child.toggle ==='open'\">\n                <a href=\"javascript:;\" *ngIf=\"child.submenu;else singleLinkChild\" (click)=\"toggleNavigationSub($event,item)\"><span class=\"title\">{{ child.label }}</span>\n                    <span  *ngIf=\"child.submenu\" class=\" arrow\" [class.open]=\"item.toggle ==='open'\"></span>\n                </a>\n                <ng-template #singleLinkChild>\n                <a *ngIf=\"child.routerLink\" [routerLink]=\"[child.routerLink]\"><span class=\"title\">{{ child.label }}</span>\n                </a>\n                <a *ngIf=\"child.externalLink\" href=\"{{child.externalLink}}\" [attr.target]=\"item.target\"><span class=\"title\">{{ child.label }}</span>\n                </a>\n                <pg-menu-icon *ngIf=\"child.iconType\" [IconType]=\"child.iconType\" [IconName]=\"child.iconName\"></pg-menu-icon>\n                </ng-template>\n                <ul class=\"sub-menu\" *ngIf=\"child.submenu\" [@toggleHeight]=\"child.toggle\">\n                    <li *ngFor=\"let lvl2 of child.submenu\">\n                        <a *ngIf=\"lvl2.routerLink\" [routerLink]=\"[lvl2.routerLink]\"><span class=\"title\">{{ lvl2.label }}</span>\n                            <span  *ngIf=\"lvl2.submenu\" class=\" arrow\" [class.open]=\"lvl2.toggle\"></span>\n                        </a>\n                        <a *ngIf=\"lvl2.externalLink\" [routerLink]=\"[lvl2.externalLink]\"><span class=\"title\">{{ item.label }}</span></a>\n                        <pg-menu-icon *ngIf=\"lvl2.iconType\" [IconType]=\"lvl2.iconType\" [IconName]=\"lvl2.iconName\"></pg-menu-icon>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/progress/progress.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/progress/progress.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"type === 'bar';else circleBlock\">\n\t<div *ngIf=\"indeterminate; else determineBarBlock\">\n\t\t<div class=\"progress\" [class.progress-small]=!thick>\n\t\t\t<div class=\"progress-bar-{{color}}\" [class.progress-bar-indeterminate]=indeterminate></div>\n\t\t</div>\n\t</div>\n\t<ng-template #determineBarBlock>\n\t\t<div class=\"progress\" [class.progress-small]=!thick>\n\t\t\t<div class=\"progress-bar progress-bar-{{color}}\" [ngStyle]=\"{'width':value+'%'}\"></div>\n\t\t</div>\n\t</ng-template>\n</div>\n<ng-template #circleBlock>\n\t<div class=\"progress-circle-{{color}}\"\n\t[class.progress-circle-indeterminate]=indeterminate \n\t[class.progress-circle]=!indeterminate \n\t[class.progress-circle-thick]=thick\n\t>\n\t\t<div *ngIf=\"indeterminate; else determineBlock\"></div>\n\t    <ng-template #determineBlock>\n\t\t\t<div class=\"pie\" [ngStyle]=\"_value2 && {'clip': 'rect(auto, auto, auto, auto)'}\">\n\t\t\t\t<div class=\"left-side half-circle\" [ngStyle]=\"_value2 && {'transform': 'rotate('+value+'deg)'}\"></div>\n\t\t\t\t<div class=\"right-side half-circle\" [ngStyle]=\"{'transform': _value2 === true ? 'rotate(180deg)' : 'rotate('+value+'deg)'}\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"shadow\"></div>\n\t\t</ng-template>\n\t</div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/quickview/quickview.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/quickview/quickview.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"quickview\" class=\"quickview-wrapper\" [class.open]=isOpen>\n<!-- Nav tabs -->\n<tabset>\n\t<tab heading=\"Notes\" id=\"quickview-notes\" customClass=\"full-height\">\n\t  <div class=\"view-port clearfix quickview-notes\" [class.push]=\"isNoteOpen\" id=\"note-views\">\n\t    <!-- BEGIN Note List !-->\n\t    <div class=\"view\" id=\"quick-note-list\">\n\t\t\t\t<div class=\"full-height d-flex flex-column list\">\n\t\t\t\t\t<div class=\"toolbar clearfix\">\n\t\t\t\t\t\t<ul class=\"pull-right \">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"delete-note-link\" (click)=\"deleteMode()\" [class.selected]=\"deleteNoteMode\"><i class=\"pg-icon\">trash_alt</i></a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a class=\"new-note-link\" (click)=\"composeNote()\" [class.hide]=\"deleteNoteMode\"><i class=\"pg-icon\">add</i></a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<button class=\"btn-remove-notes btn btn-xs btn-block\" [class.hide]=\"!deleteNoteMode\" (click)=\"deleteNote()\"><i class=\"pg-icon\">close</i> Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul perfectScrollbar class=\"full-height\">\n\t\t\t\t\t\t<!-- BEGIN Note Item !-->\n\t\t\t\t\t\t<li *ngFor=\"let note of noteList\" (click)=\"onSelectNote(note)\" class=\"d-flex justify-space-between\">\n\t\t\t\t\t\t\t<div class=\"left\">\n\t\t\t\t\t\t\t\t<!-- BEGIN Note Action !-->\n\t\t\t\t\t\t\t\t<div class=\"form-check warning no-margin\" [ngStyle]=\"deleteNoteMode && {'display': 'block'}\">\n\t\t\t\t\t\t\t\t\t<input id=\"qncheckbox{{note.id}}\" type=\"checkbox\" value=\"1\" (change)=\"onCheck($event,note)\">\n\t\t\t\t\t\t\t\t\t<label for=\"qncheckbox{{note.id}}\"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- END Note Action !-->\n\t\t\t\t\t\t\t\t<!-- BEGIN Note Preview Text !-->\n\t\t\t\t\t\t\t\t<p class=\"note-preview\" [innerHTML]=\"note.notes\"></p>\n\t\t\t\t\t\t\t\t<!-- BEGIN Note Preview Text !-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- BEGIN Note Details !-->\n\t\t\t\t\t\t\t<div class=\"d-flex right justify-content-end\">\n\t\t\t\t\t\t\t\t<!-- BEGIN Note Date !-->\n\t\t\t\t\t\t\t\t<span class=\"date\">{{note.date | date:'dd/MM/yy'}}</span>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-flex align-items-center\"><i class=\"pg-icon\">chevron_right</i></a>\n\t\t\t\t\t\t\t\t<!-- END Note Date !-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END Note Details !-->\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!-- END Note List !-->\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t    </div>\n\t    <!-- END Note List !-->\n\t    <div class=\"view note\" id=\"quick-note\">\n\t\t\t\t\t<div class=\"extra-component\" *ngIf=\"selectedNote\">\n\t\t\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t\t\t<span>{{selectedNote.date | date:'dd LLLL yyyy'}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<quill-editor class=\"full-height full-width\" placeholder=\"\" [(ngModel)]=\"noteText\" [modules]=\"editorModules\">\n\t\t\t\t\t\t\t<ul quill-editor-toolbar class=\"ql-toolbar ql-snow\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"toggleNotesView()\" class=\"close-note-link\"><i class=\"pg-icon\">chevron_left</i></button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"ql-formats\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"ql-bold\" [title]=\"'Bold'\"></button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"ql-formats\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"ql-italic\" [title]=\"'Italic'\"></button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"ql-formats\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"ql-link\" [title]=\"'Link'\"></button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</quill-editor>\n\t    </div>\n\t  </div>\n\n\t</tab>\n\t<tab heading=\"Alerts\" id=\"quickview-alerts\" customClass=\"full-height\">\n\t  <div class=\"view-port clearfix\" id=\"alerts\">\n\t    <!-- BEGIN Alerts View !-->\n\t    <div class=\"view bg-white\">\n\t\t\t\t<div class=\"full-height d-flex flex-column\">\n\t\t\t\t\t<!-- BEGIN View Header !-->\n\t\t\t\t\t<div class=\"navbar navbar-default navbar-sm\">\n\t\t\t\t\t\t<div class=\"navbar-inner\">\n\t\t\t\t\t\t\t<!-- BEGIN Header Controler !-->\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"action p-l-10 link text-color\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\n\t\t\t\t\t\t\t\t<i class=\"pg-icon\">more_horizontal</i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<!-- END Header Controler !-->\n\t\t\t\t\t\t\t<div class=\"view-heading\">\n\t\t\t\t\t\t\t\tNotications\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- BEGIN Header Controler !-->\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"action p-r-10 pull-right link text-color\">\n\t\t\t\t\t\t\t\t<i class=\"pg-icon\">search</i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<!-- END Header Controler !-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- END View Header !-->\n\t\t\t\t\t<!-- BEGIN Alert List !-->\n\t\t\t\t\t<div perfectScrollbar class=\"full-height list-view boreded no-top-border\">\n\t\t\t\t\t\t<!-- BEGIN List Group !-->\n\t\t\t\t\t\t<div class=\"list-view-group-container\">\n\t\t\t\t\t\t\t<!-- BEGIN List Group Header!-->\n\t\t\t\t\t\t\t<div class=\"list-view-group-header text-uppercase\">\n\t\t\t\t\t\t\t\tCalendar\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END List Group Header!-->\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning fs-10\"><i class=\"pg-icon\">circle_fill</i></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-l-10 overflow-ellipsis fs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color\">David Nester Birthday</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-r-10 ml-auto fs-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning\">Today <br></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color\">All Day</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\n\t\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning fs-10\"><i class=\"pg-icon\">circle_fill</i></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-l-10 overflow-ellipsis fs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color\">Meeting at 2:30</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-r-10 ml-auto fs-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-warning\">Today</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END List Group !-->\n\t\t\t\t\t\t<div class=\"list-view-group-container\">\n\t\t\t\t\t\t\t<!-- BEGIN List Group Header!-->\n\t\t\t\t\t\t\t<div class=\"list-view-group-header text-uppercase\">\n\t\t\t\t\t\t\t\tSocial\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END List Group Header!-->\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"p-t-10 p-b-10 align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-complete fs-10\"><i class=\"pg-icon\">circle_fill</i></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"col overflow-ellipsis fs-12 p-l-10\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color link\">Jame Smith commented on your status<br></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color\">“Perfection Simplified - Company Revox\"</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"p-t-10 p-b-10 align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-complete fs-10\"><i class=\"pg-icon\">circle_fill</i></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"col overflow-ellipsis fs-12 p-l-10\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color link\">Jame Smith commented on your status<br></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color\">“Perfection Simplified - Company Revox\"</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"list-view-group-container\">\n\t\t\t\t\t\t\t<!-- BEGIN List Group Header!-->\n\t\t\t\t\t\t\t<div class=\"list-view-group-header text-uppercase\">\n\t\t\t\t\t\t\t\tSever Status\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END List Group Header!-->\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<!-- BEGIN List Group Item!-->\n\t\t\t\t\t\t\t\t<li class=\"alert-list\">\n\t\t\t\t\t\t\t\t\t<!-- BEGIN Alert Item Set Animation using data-view-animation !-->\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"p-t-10 p-b-10 align-items-center\" data-navigate=\"view\" data-view-port=\"#chat\" data-view-animation=\"push-parrallax\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-danger fs-10\"><i class=\"pg-icon\">circle_fill</i></span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"col overflow-ellipsis fs-12 p-l-10\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color link\">12:13AM GTM, 10230, ID:WR174s<br></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color\">Server Load Exceeted. Take action</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<!-- END Alert Item!-->\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<!-- END List Group Item!-->\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- END Alert List !-->\n\t\t\t\t</div>\n\t    </div>\n\t    <!-- EEND Alerts View !-->\n\t  </div>\n\t</tab>\n\t<tab heading=\"Chat\" id=\"quickview-chat\" active=\"true\" customClass=\"full-height\">\n\t  <div class=\"view-port clearfix\" id=\"chat\">\n\t    <div class=\"view bg-white\">\n\t      <!-- BEGIN View Header !-->\n\t      <div class=\"navbar navbar-default\">\n\t        <div class=\"navbar-inner\">\n\t          <!-- BEGIN Header Controler !-->\n\t          <a href=\"javascript:;\" class=\"action p-l-10 link text-color\"  pg-view-trigger parentView=\"chat\" animationType=\"push-parrallax\">\n\t            <i class=\"pg-icon\">add</i>\n\t          </a>\n\t          <!-- END Header Controler !-->\n\t          <div class=\"view-heading\">\n\t            Chat List\n\t            <div class=\"fs-11\">Show All</div>\n\t          </div>\n\t          <!-- BEGIN Header Controler !-->\n\t          <a href=\"javascript:void(0)\" class=\"action p-r-10 pull-right link text-color\">\n\t            <i class=\"pg-icon\">more_horizontal</i>\n\t          </a>\n\t          <!-- END Header Controler !-->\n\t        </div>\n\t      </div>\n\t      <!-- END View Header !-->\n\t      <pg-list-view-container class=\"scrollable full-height\">\n\t\t\t\t\t\t<pg-list-item *ngFor=\"let group of userList\">\n\t\t\t\t\t\t\t\t<ng-template #ItemHeading>\n\t\t\t\t\t\t\t\t\t\t{{group.group}}\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<li class=\"chat-user-list clearfix\"  *ngFor=\"let user of group.users\">\n\t\t\t\t\t\t\t\t<a pg-view-trigger parentView=\"chat\" animationType=\"push-parrallax\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"thumbnail-wrapper d32 circular bg-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"34\" height=\"34\" alt=\"\" src=\"{{user.img}}\" class=\"col-top\">\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<p class=\"p-l-10 \">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-color\">{{user.username}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"block text-color hint-text fs-12\">{{user.lastMessage}}</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</pg-list-item>\n\t\t\t\t</pg-list-view-container>\n\t    </div>\n\t    <!-- BEGIN Conversation View  !-->\n\t    <div class=\"view chat-view bg-white clearfix\">\n\t      <!-- BEGIN Header  !-->\n\t      <div class=\"navbar navbar-default\">\n\t        <div class=\"navbar-inner\" *ngIf=\"chatHistory\">\n\t          <a href=\"javascript:;\" class=\"link text-color action p-l-10 p-r-10\" pg-view-trigger parentView=\"chat\" animationType=\"push-parrallax\">\n\t            <i class=\"pg-icon\">chevron_left</i>\n\t          </a>\n\t          <div class=\"view-heading\">\n\t            {{chatHistory.username}}\n\t            <div class=\"fs-11 hint-text\">{{chatHistory.status}}</div>\n\t          </div>\n\t          <a href=\"javascript:void(0)\" class=\"link text-color action p-r-10 pull-right \">\n\t            <i class=\"pg-icon\">more_horizontal</i>\n\t          </a>\n\t        </div>\n\t      </div>\n\t      <!-- END Header  !-->\n\t      <!-- BEGIN Conversation  !-->\n\t      <div class=\"chat-inner\" perfectScrollbar #chatHistoryWrapper>\n\t        <!-- BEGIN Message  !-->\n\t        <div class=\"message clearfix\"  *ngFor=\"let message of chatHistory?.log\">\n\t\t\t\t\t\t<div class=\"profile-img-wrapper m-t-5 inline\" *ngIf=\"message.from != 'me'\">\n\t\t\t\t\t\t\t<img class=\"col-top\" width=\"30\" height=\"30\" src=\"{{chatHistory.img}}\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"chat-bubble from-them\"  [class.from-me]=\"message.from == 'me'\" [class.from-them]=\"message.from != 'me'\">\n\t\t\t\t\t\t\t{{message.message}}\n\t\t\t\t\t\t</div>\n\t        </div>\n\t        <!-- END Message  !-->\n\t      </div>\n\t      <!-- BEGIN Conversation  !-->\n\t      <!-- BEGIN Chat Input  !-->\n\t      <div class=\"b-t b-grey bg-white clearfix p-l-10 p-r-10\">\n\t        <div class=\"row\">\n\t          <div class=\"col-1 p-t-15\">\n\t            <a href=\"javascript:void(0)\" class=\"link text-color\"><i class=\"pg-icon\">add</i></a>\n\t          </div>\n\t          <div class=\"col-8 no-padding\">\n\t            <input type=\"text\" class=\"form-control chat-input\" [(ngModel)]=\"userMessage\" (keypress)=\"onMessageKeyPress($event)\" placeholder=\"Say something\">\n\t          </div>\n\t          <div class=\"col-2 link text-color m-l-10 m-t-15 p-l-10 b-l b-grey col-top\">\n\t            <a href=\"javascript:void(0)\" class=\"link text-color\"><i class=\"pg-icon\">camera</i></a>\n\t          </div>\n\t        </div>\n\t      </div>\n\t      <!-- END Chat Input  !-->\n\t    </div>\n\t    <!-- END Conversation View  !-->\n\t  </div>\n\t</tab>\n</tabset>\n<a class=\"btn-icon-link invert quickview-toggle\" (click)=\"toggle()\"><i class=\"pg-icon\">close</i></a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/search-overlay/search-overlay.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/search-overlay/search-overlay.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\" [class.hide]=!isVisible [@fadeAnimation]=\"isVisible\">\n\t<!-- BEGIN Overlay Content !-->\n\n\t<div class=\"overlay-content has-results m-t-20\">\n\t\t<!-- BEGIN Overlay Header !-->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- BEGIN Overlay Logo !-->\n\t\t\t<img alt=\"logo\" class=\"overlay-brand\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" height=\"22\" src=\n\t\t\t\"assets/img/logo.png\" width=\"78\"> <!-- END Overlay Logo !-->\n\t\t\t <!-- BEGIN Overlay Close !-->\n\t\t\t <a class=\"close-icon-light btn-link btn-rounded  overlay-close text-black\" href=\"javascript:void(0)\" (click)=\"close($event)\"><i class=\"pg-icon\">close</i></a> <!-- END Overlay Close !-->\n\t\t</div>\n\t\t<!-- END Overlay Header !-->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- BEGIN Overlay Controls !-->\n\t\t\t<input autocomplete=\"off\" #searchField (keyup)=\"searchKeyPress($event)\" class=\"no-border overlay-search bg-transparent\" [(ngModel)]=\"value\" placeholder=\"Search...\" spellcheck=\n      \"false\">\n      <br>\n      <div class=\"d-flex align-items-center\">\n        <div class=\"form-check right m-b-0 d-flex\">\n          <input id=\"checkboxn\" type=\"checkbox\" value=\"1\" checked=\"checked\">\n          <label for=\"checkboxn\" class=\"d-flex\"><i class=\"pg-icon m-r-5\">search</i> Search within page</label>\n        </div>\n        <p class=\"fs-13  m-l-10 m-b-0\">Press enter to search</p>\n      </div>\n\t\t\t<!-- END Overlay Controls !-->\n\t\t</div>\n\t\t<!-- BEGIN Overlay Search Results, This part is for demo purpose, you can add anything you like !-->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<span><strong>suggestions :</strong></span> {{value}}<br>\n\n\t\t\t<div class=\"search-results m-t-40\">\n\t\t\t\t<p class=\"bold\">\n\t\t\t\t\tPages Search Results\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\n\n\t\t\t\t\t\t<div class=\"d-flex m-t-15\">\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-success text-white inline m-t-10\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<img alt=\"\" pgRetina src1x=\"assets/img/profiles/avatar.jpg\" src2x=\"assets/img/profiles/avatar2x.jpg\" height=\"40\" src=\n\t\t\t\t\t\t\t\t\t\"assets/img/profiles/avatar.jpg\" width=\"40\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"p-l-10\">\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> on pages\n\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\n\t\t\t\t\t\t\t\t\tvia john smith\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END Search Result Item !-->\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\n\n\t\t\t\t\t\t<div class=\"d-flex m-t-15\">\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-success text-white inline m-t-10\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\tT\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"p-l-10\">\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> related topics\n\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\n\t\t\t\t\t\t\t\t\tvia pages\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END Search Result Item !-->\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\n\n\t\t\t\t\t\t<div class=\"d-flex m-t-15\">\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"thumbnail-wrapper d48 circular bg-success text-white inline m-t-10\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\tM\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"p-l-10\">\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> music\n\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\n\t\t\t\t\t\t\t\t\tvia pagesmix\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END Search Result Item !-->\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\n\n\t\t\t\t\t\t<div class=\"d-flex m-t-15\">\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\n              <div class=\"thumbnail-wrapper d48 circular bg-info text-white d-flex align-items-center m-t-10\">\n                  <i class=\"pg-icon large-text \">facebook</i>\n              </div>\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"p-l-10\">\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\n\t\t\t\t\t\t\t\t\t<span class=\"semi-bold result-name\">{{value}}</span> on facebook\n                </h5>\n\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\n\t\t\t\t\t\t\t\t\tvia facebook\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END Search Result Item !-->\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\n\n\t\t\t\t\t\t<div class=\"d-flex m-t-15\">\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\n              <div class=\"thumbnail-wrapper d48 circular bg-complete text-white d-flex align-items-center m-t-10\">\n                  <i class=\"pg-icon large-text \">twitter</i>\n              </div>\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"p-l-10\">\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\n\t\t\t\t\t\t\t\t\tTweats on <span class=\"semi-bold result-name\">{{value}}</span>\n\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\n\t\t\t\t\t\t\t\t\tvia twitter\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END Search Result Item !-->\n\t\t\t\t\t\t<!-- BEGIN Search Result Item !-->\n\n\t\t\t\t\t\t<div class=\"d-flex m-t-15\">\n\t\t\t\t\t\t\t<!-- BEGIN Search Result Item Thumbnail !-->\n              <div class=\"thumbnail-wrapper d48 circular text-white bg-danger d-flex align-items-center m-t-10\">\n                  <i class=\"pg-icon large-text \">google_plus</i>\n              </div>\n\t\t\t\t\t\t\t<!-- END Search Result Item Thumbnail !-->\n\n\t\t\t\t\t\t\t<div class=\"p-l-10\">\n\t\t\t\t\t\t\t\t<h5 class=\"m-b-5\">\n\t\t\t\t\t\t\t\t\tCircles on <span class=\"semi-bold result-name\">{{value}}</span>\n\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t<p class=\"hint-text\">\n\t\t\t\t\t\t\t\t\tvia google plus\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- END Search Result Item !-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- END Overlay Search Results !-->\n\t</div>\n\t<!-- END Overlay Content !-->\n</div>\n<!-- END OVERLAY -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START SECONDARY SIDEBAR MENU-->\n<div class=\"secondary-sidebar {{_extraClass}}\" [ngStyle]=\"_togglePosition\" [class.secondary-show]=\"_toggleMobileSidebar\" [class.secondary-hide]=\"!_toggleMobileSidebar\" >\n    <ng-content></ng-content>\n  </div>\n    <!-- END SECONDARY SIDEBAR MENU -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/select/select.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/select/select.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n      tabindex=\"0\"\n      #trigger\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      [ngClass]=\"_selectionClassMap\"\n      (keydown.Enter)=\"handleKeyEnterEvent($event)\"\n      (keydown.Backspace)=\"handleKeyBackspaceEvent($event)\"\n      (keydown.ArrowUp)=\"handleKeyUpEvent($event)\"\n      (keydown.ArrowDown)=\"handleKeyDownEvent($event)\">\n      <div class=\"pg-select-selection__rendered\" *ngIf=\"!ShowSearch\">\n        <div class=\"pg-select-selection__placeholder\">\n          <ng-template [ngIf]=\"!_selectedOption\">\n            {{ PlaceHolder }}\n          </ng-template>\n        </div>\n        <div class=\"pg-select-selection-selected-value\">\n          {{ _selectedOption?.Label }}\n        </div>\n      </div>\n      <div class=\"pg-select-selection__rendered\" *ngIf=\"ShowSearch\">\n        <div\n          [hidden]=\"_searchText||(!Open&&_selectedOption)||_selectedOptions.size\"\n          class=\"pg-select-selection__placeholder\">\n          <ng-template [ngIf]=\"(!_composing)&&_selectedOption\">\n            {{ _selectedOption.Label }}\n          </ng-template>\n          <ng-template [ngIf]=\"(!_composing)&&(!_selectedOption)\">\n            {{ PlaceHolder }}\n          </ng-template>\n        </div>\n        <ul *ngIf=\"Multiple\">\n          <li\n            *ngFor=\"let option of _selectedOptions\"\n            [@tagAnimation]\n            [attr.title]=\"option?.Label || option?.Value\"\n            class=\"pg-select-selection__choice\" style=\"-webkit-user-select: none;\">\n            <span class=\"pg-select-selection__choice__remove\" (click)=\"unSelectMultipleOption(option,$event)\"></span><div class=\"pg-select-selection__choice__content\">{{ option?.Label }}</div>\n          </li>\n          <li class=\"pg-select-search pg-select-search--inline\">\n            <div class=\"pg-select-search__field__wrap\">\n              <input\n                class=\"pg-select-search__field\"\n                (compositionstart)=\"compositionStart()\"\n                (compositionend)=\"compositionEnd();updateWidth(searchInput,_searchText);\"\n                [(ngModel)]=\"_searchText\"\n                (ngModelChange)=\"updateFilterOption();onSearchChange($event);\"\n                (keydown)=\"updateWidth(searchInput,_searchText)\"\n                (input)=\"updateWidth(searchInput,_searchText)\"\n                (blur)=\"onTouched()\"\n                #searchInput>\n              <span class=\"pg-select-search__field__mirror\"></span></div>\n          </li>\n        </ul>\n        <div\n          *ngIf=\"!Multiple\"\n          class=\"pg-select-selection-selected-value\"\n          [hidden]=\"!(_selectedOption?.Label)||Open\">\n          {{ _selectedOption?.Label }}\n        </div>\n        <div *ngIf=\"!Multiple\" [hidden]=\"!Open\" class=\"pg-select-search pg-select-search--inline\">\n          <div class=\"pg-select-search__field__wrap\">\n            <input\n              class=\"pg-select-search__field\"\n              (blur)=\"onTouched()\"\n              (compositionstart)=\"compositionStart()\"\n              (compositionend)=\"compositionEnd()\"\n              [(ngModel)]=\"_searchText\"\n              (ngModelChange)=\"updateFilterOption();onSearchChange($event);\"\n              #searchInput>\n            <span class=\"pg-select-search__field__mirror\"></span>\n          </div>\n        </div>\n      </div>\n      <span\n        (click)=\"onTouched();clearSelect($event)\"\n        class=\"pg-select-selection__clear\"\n        style=\"-webkit-user-select: none;\"\n        *ngIf=\"_selectedOption?.Label&&AllowClear&&!Multiple\">\n      </span>\n      <span class=\"pg-select-arrow\"><b></b></span></div>\n    <ng-template\n      cdkConnectedOverlay\n      cdkConnectedOverlayHasBackdrop\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      (backdropClick)=\"closeDropDown()\"\n      (detach)=\"closeDropDown();\"\n      (positionChange)=\"onPositionChange($event)\"\n      [cdkConnectedOverlayWidth]=\"_triggerWidth\"\n      [cdkConnectedOverlayOpen]=\"_isOpen\"\n    >\n      <div\n        [ngClass]=\"_dropDownClassMap\" [@dropDownAnimation]=\"_dropDownPosition\">\n        <div style=\"overflow: auto;\">\n          <ul class=\"pg-select-dropdown-menu pg-select-dropdown-menu-vertical pg-select-dropdown-menu-root\" #dropdownUl (scroll)=\"dropDownScroll(dropdownUl)\">\n            <li\n              *ngFor=\"let option of _filterOptions\"\n              [class.pg-select-dropdown-menu-item-disabled]=\"option.Disabled\"\n              [class.pg-select-dropdown-menu-item-active]=\"option.Value == _activeFilterOption?.Value\"\n              [class.pg-select-dropdown-menu-item-selected]=\"(option.Value==(_selectedOption?.Value))||(isInSet(_selectedOptions,option))\"\n              class=\"pg-select-dropdown-menu-item\"\n              (click)=\"clickOption(option,$event)\">\n              <ng-template\n                *ngIf=\"option.OptionTemplate\"\n                [ngTemplateOutlet]=\"option.OptionTemplate\">\n              </ng-template>\n              <ng-template [ngIf]=\"!option.OptionTemplate\">\n                {{ option.Label }}\n              </ng-template>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/sidebar/sidebar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n      <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->\n      <div class=\"sidebar-overlay-slide from-top\" [class.show]=\"drawer\" >\n        <ng-template [ngTemplateOutlet]=\"sideBarOverlay\"></ng-template>\n      </div>\n      <!-- END SIDEBAR MENU TOP TRAY CONTENT-->\n      <!-- BEGIN SIDEBAR MENU HEADER-->\n      <div class=\"sidebar-header\">\n        <ng-template [ngTemplateOutlet]=\"sideBarHeader\"></ng-template>\n      </div>\n      <!-- END SIDEBAR MENU HEADER-->\n      <!-- START SIDEBAR MENU -->\n      <div class=\"sidebar-menu\">\n        <ng-template [ngTemplateOutlet]=\"menuItems\"></ng-template>\n        <!-- BEGIN SIDEBAR MENU ITEMS-->\n        <div class=\"clearfix\"></div>\n      </div>\n      <!-- END SIDEBAR MENU -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/blank/blank.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/blank/blank.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/root/root.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/root/root.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  root works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/session/register/register.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/session/register/register.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!is_successful\" class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\r\n    <div class=\"d-flex justify-content-center flex-column full-height \">\r\n\r\n          <img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\" src2x=\"assets/img/pock_2x.png\" width=\"150\" height=\"90\">\r\n          <h4>Apovallo makes it easy to send money</h4>\r\n          <p>\r\n            If you already have an account<a routerLink=\"/login\" class=\"text-info\"> Sign in Here</a>\r\n          </p>\r\n          <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"register(registerForm.value)\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\r\n                  <label>First Name</label>\r\n                  <input type=\"text\"  class=\"form-control\" id=\"txtfname\" name=\"txtfname\" [(ngModel)]=\"txtfname\"  #fName=\"ngModel\" required >\r\n                </div>\r\n                <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\r\n                    <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\r\n                  <label>Last Names</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"txtlname\" name=\"txtlname\" [(ngModel)]=\"txtlname\"  #LName=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\r\n                    <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"userName.invalid && (userName.dirty || userName.touched)\">\r\n                  <label>Preferred Username</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"txtusername\" name=\"txtusername\" [(ngModel)]=\"txtusername\"  #userName=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" >\r\n                    <label  *ngIf=\"userName.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\r\n                  <label>Create Password</label>\r\n                  <input type=\"password\"  class=\"form-control\" id=\"txtpassword\" name=\"txtpassword\" [(ngModel)]=\"txtpassword\"  #password=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" >\r\n                    <label  *ngIf=\"password.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"email.invalid && (email.dirty || email.touched)\">\r\n                  <label>Email</label>\r\n                  <input type=\"email\"  class=\"form-control\" id=\"txtemail\" name=\"txtemail\" [(ngModel)]=\"txtemail\"  #email=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\r\n                    <label  *ngIf=\"email.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"phone.invalid && (phone.dirty || phone.touched)\">\r\n                  <label>Phone</label>\r\n                  <input type=\"email\"  class=\"form-control\" id=\"txtphone\" name=\"txtphone\" [(ngModel)]=\"txtphone\"  #phone=\"ngModel\" required>\r\n                </div>\r\n                <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" >\r\n                  <label  *ngIf=\"email.errors.required\" class=\"error\" >This field is required.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row m-t-10\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-check \">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"1\" id=\"checkbox1\" required>\r\n\t\t\t\t\t\t\t<label for=\"checkbox1\"><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Apovallo Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></label>\r\n\t\t\t\t\t\t</div>\r\n                <!--<p><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Pages Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></p>-->\r\n              </div>\r\n              <div class=\"col-lg-6 text-right\">\r\n                <a href=\"javascript:void(0)\" class=\"text-info small\"></a>\r\n              </div>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Create a new account</button>\r\n          </form>\r\n\r\n    </div>\r\n  </div>\r\n  <!--<div class=\" full-width\">\r\n    <div class=\"register-container mt-2 m-b-10 clearfix\">\r\n      <div class=\"m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up\">\r\n        <div class=\"col-md-2 no-padding d-flex align-items-center\">\r\n          <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\r\n        </div>\r\n        <div class=\"col-md-9 no-padding d-flex align-items-center\">\r\n          <p class=\"hinted-text small inline sm-p-t-10\">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\r\n\r\n<div *ngIf=\"is_successful\" class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\r\n  <div class=\"d-flex justify-content-center flex-column full-height \" style=\"margin-top:23%;\">\r\n\r\n    <h3>Your registration is successful, check your email to activate</h3>\r\n    <!--<p>\r\n      Create a account or sign in <a routerLink=\"\" class=\"text-info\">Here</a>\r\n    </p>-->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/about/about.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/about/about.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <!--START ABOUT-US-->\n   <section class=\"section\" id=\"about\">\n     <div class=\"container\">\n       <div class=\"row\">\n         <div class=\"col-lg-8 offset-lg-2\">\n           <div class=\"about-title mx-auto text-center\">\n             <h2 class=\"font-weight-light\">What We Do\n             </h2>\n             <p class=\"text-muted pt-4\">Apovallo is a platform that makes international transfer of money easily, flexibly reliably\n             and secure. Our Service is available 24/7</p>\n             <p>Apovallo provide customers with reliable international money transfer to friends, loved ones and business associates.\n             We deliver your money withing minutes at most competitive rates</p>\n           </div>\n         </div>\n       </div>\n    <!--   <div class=\"row margin-t-50\">\n         <div class=\"col-lg-3 col-sm-6\">\n           <div class=\"team-box text-center\">\n             <div class=\"team-wrapper\">\n               <div class=\"team-member\">\n                 <img alt=\"\" src=\"assets/images/team/img-1.jpg\" class=\"img-fluid rounded\">\n               </div>\n             </div>\n             <h4 class=\"team-name\">Frank Johnson</h4>\n             <p class=\"text-uppercase team-designation\">CEO</p>\n           </div>\n         </div>\n\n         <div class=\"col-lg-3 col-sm-6\">\n           <div class=\"team-box text-center\">\n             <div class=\"team-wrapper\">\n               <div class=\"team-member\">\n                 <img alt=\"\" src=\"assets/images/team/img-2.jpg\" class=\"img-fluid rounded\">\n               </div>\n             </div>\n             <h4 class=\"team-name\">Elaine Stclair</h4>\n             <p class=\"text-uppercase team-designation\">Designer</p>\n           </div>\n         </div>\n\n         <div class=\"col-lg-3 col-sm-6\">\n           <div class=\"team-box text-center\">\n             <div class=\"team-wrapper\">\n               <div class=\"team-member\">\n                 <img alt=\"\" src=\"assets/images/team/img-3.jpg\" class=\"img-fluid rounded\">\n               </div>\n             </div>\n             <h4 class=\"team-name\">Wanda Arthur</h4>\n             <p class=\"text-uppercase team-designation\">Developer</p>\n           </div>\n         </div>\n\n         <div class=\"col-lg-3 col-sm-6\">\n           <div class=\"team-box text-center\">\n             <div class=\"team-wrapper\">\n               <div class=\"team-member\">\n                 <img alt=\"\" src=\"assets/images/team/img-4.jpg\" class=\"img-fluid rounded\">\n               </div>\n             </div>\n             <h4 class=\"team-name\">Joshua Stemple</h4>\n             <p class=\"text-uppercase team-designation\">Manager</p>\n           </div>\n         </div>\n\n       </div>-->\n     </div>\n   </section>\n   <!--END ABOUT-US-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Banks</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Transaction History\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"5\"\n                    [rows]='basicRows'>\n\n                    <!--<ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"name\" name=\"Name\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"country\" name=\"Country\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"code\" name=\"Code\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                            <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                                <div class=\"btn-group\">\n                                    <button routerLink=\"/dashboard/beneficiary/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">Edit\n                                    </button>\n                                    <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                    </button>\n                                    <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                    </button>-->\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n\n        <!--<img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\" src2x=\"assets/img/pock_2x.png\" width=\"150\" height=\"90\">-->\n        <!--<h4>Pages makes it easy to enjoy what matters the most in your life</h4>-->\n        <p>\n            Create or Update Your profile\n        </p>\n        <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"createProfile(registerForm.value)\">\n           <!-- <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\n                        <label>City</label>\n                        <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\" [(ngModel)]=\"city\"  #LName=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\n                        <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>-->\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\n                        <label>Address</label>\n                        <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" [(ngModel)]=\"address\"  #fName=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\n                        <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\n                        <label>City</label>\n                        <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\" [(ngModel)]=\"city\"  #LName=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\n                        <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"county.invalid && (county.dirty || county.touched)\">\n                        <label>Country</label>\n                        <input type=\"text\" class=\"form-control\" id=\"country\" name=\"country\" [(ngModel)]=\"country\"  #county=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"county.invalid && (county.dirty || county.touched)\" >\n                        <label  *ngIf=\"county.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"gender.invalid && (gender.dirty || gender.touched)\">\n                   <!-- <label>Gender</label>-->\n                    <pg-select style=\"width: 100%;\" [(ngModel)]=\"selectedOption\" id=\"gender\" name=\"gender\" #gender=\"ngModel\" PlaceHolder=\"Gender\"  AllowClear\n                               ShowSearch>\n                        <pg-option *ngFor=\"let option of options\" Label=\"{{option}}\"  [Value]=\"option\">\n                        </pg-option>\n                    </pg-select>\n                    <div *ngIf=\"gender.invalid && (gender.dirty || gender.touched)\" >\n                        <label  *ngIf=\"gender.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"phoneno.invalid && (phoneno.dirty || phoneno.touched)\">\n                        <label>Phone</label>\n                        <input type=\"tel\" class=\"form-control\" id=\"phone\" name=\"phone\" [(ngModel)]=\"phone\"  #phoneno=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"phoneno.invalid && (phoneno.dirty || phoneno.touched)\" >\n                        <label  *ngIf=\"phoneno.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <!--<div class=\"row m-t-10\">\n                <div class=\"col-lg-6\">\n                    <p><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Pages Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></p>\n                </div>\n                <div class=\"col-lg-6 text-right\">\n                    <a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\n                </div>\n            </div>-->\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">{{ buttonText}}</button>\n        </form>\n\n    </div>\n</div>\n<!--\n<div class=\" full-width\">\n    <div class=\"register-container mt-2 m-b-10 clearfix\">\n        <div class=\"m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up\">\n            <div class=\"col-md-2 no-padding d-flex align-items-center\">\n                <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\n            </div>\n            <div class=\"col-md-9 no-padding d-flex align-items-center\">\n                <p class=\"hinted-text small inline sm-p-t-10\">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\n            </div>\n        </div>\n    </div>\n</div>\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Beneficiary Details</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<div class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n\n        <!--<img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\" src2x=\"assets/img/pock_2x.png\" width=\"150\" height=\"90\">-->\n        <!--<h4>Pages makes it easy to enjoy what matters the most in your life</h4>-->\n        <p>\n            Update Beneficiary\n        </p>\n        <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"createProfile(registerForm.value)\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\n                        <label>Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"name\"  #fName=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\n                        <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"faccount.invalid && (faccount.dirty || faccount.touched)\">\n                        <label>Account</label>\n                        <input type=\"text\" class=\"form-control\" id=\"account\" name=\"account\" [(ngModel)]=\"account\"  #faccount=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"faccount.invalid && (faccount.dirty || faccount.touched)\" >\n                        <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\n                        <label>Email</label>\n                        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\"  #LName=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\n                        <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"county.invalid && (county.dirty || county.touched)\">\n                        <label>Bank</label>\n                        <input type=\"text\" class=\"form-control\" id=\"bank_name\" name=\"bank_name\" [(ngModel)]=\"bank_name\"  #county=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"county.invalid && (county.dirty || county.touched)\" >\n                        <label  *ngIf=\"county.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"phoneno.invalid && (phoneno.dirty || phoneno.touched)\">\n                        <label>Phone</label>\n                        <input type=\"tel\" class=\"form-control\" id=\"phone\" name=\"phone\" [(ngModel)]=\"phone\"  #phoneno=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"phoneno.invalid && (phoneno.dirty || phoneno.touched)\" >\n                        <label  *ngIf=\"phoneno.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <!--<div class=\"row m-t-10\">\n                <div class=\"col-lg-6\">\n                    <p><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Pages Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></p>\n                </div>\n                <div class=\"col-lg-6 text-right\">\n                    <a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\n                </div>\n            </div>-->\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Update Details</button>\n        </form>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Beneficiaries</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Transaction History\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"5\"\n                    [rows]='basicRows'>\n\n                    <!--<ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"name\" name=\"Name\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"bank_name\" name=\"Name of bank\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"account\" name=\"Account\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"email\" name=\"Email\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"phone\" name=\"Phone\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                            <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                                <div class=\"btn-group\">\n                                    <button routerLink=\"/dashboard/beneficiary/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">Edit\n                                    </button>\n                                    <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                    </button>\n                                    <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                    </button>-->\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/contact/contact.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/contact/contact.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <!-- CONTACT FORM START-->\n    <section class=\"section \" id=\"contact\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 offset-lg-2\">\n            <h1 class=\"section-title text-center\">Get In Touch</h1>\n            <div class=\"section-title-border margin-t-20\"></div>\n            <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">We thrive when coming up with\n              innovative ideas but also understand that a smart concept should be supported with measurable results.</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <div class=\"mt-4 pt-4\">\n              <p class=\"mt-4\"><span class=\"h5\">OFFICE ADDRESS NIGERIA:</span><br> <span class=\"text-muted d-block mt-2\">22K, LIIGS AVE, BESIDE OFFSHORE ZONE,<br /> IKEJA, LAGOS<br />\n              TEL: </span></p>\n              <p class=\"mt-4\"><span class=\"h5\">OFFICE ADDRESS U.S:</span><br> <span class=\"text-muted d-block mt-2\">2467 SWICK HILL STREET<br />New Orleans, LA 70171<br />\n              TEL</span></p>\n              <!--<p class=\"mt-4\"><span class=\"h5\">Working Hours:</span><br> <span class=\"text-muted d-block mt-2\">9:00AM To\n                  6:00PM</span></p>-->\n            </div>\n          </div>\n          <div class=\"col-lg-8\">\n            <div class=\"custom-form mt-4 pt-4\">\n              <div id=\"message\"></div>\n              <form method=\"post\" action=\"\" name=\"contact-form\" id=\"contact-form\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group mt-2\">\n                      <input name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Your name*\">\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group mt-2\">\n                      <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Your email*\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                    <div class=\"form-group mt-2\">\n                      <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Your Subject..\" />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                    <div class=\"form-group mt-2\">\n                      <textarea name=\"comments\" id=\"comments\" rows=\"4\" class=\"form-control\"\n                        placeholder=\"Your message...\"></textarea>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-12 text-right\">\n                    <input type=\"button\" id=\"submit\" name=\"send\" class=\"submitBnt btn btn-custom\" value=\"Send Message\">\n                    <div id=\"simple-msg\"></div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- CONTACT FORM END-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Bank Details</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<div class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n\n        <!--<img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\" src2x=\"assets/img/pock_2x.png\" width=\"150\" height=\"90\">-->\n        <!--<h4>Pages makes it easy to enjoy what matters the most in your life</h4>-->\n        <p>\n            Update Beneficiary\n        </p>\n        <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"createProfile(registerForm.value)\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\n                        <label>Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"name\"  #fName=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\n                        <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"dCountry.invalid && (dCountry.dirty || dCountry.touched)\">\n                        <!-- <label>Destination Country</label>-->\n                        <pg-select style=\"width: 100%;\" [(ngModel)]=\"destination_country\"  PlaceHolder=\"Choose Destination country\"   id=\"destination_country\" name=\"destination_country\" #dCountry=\"ngModel\"  AllowClear\n                                   ShowSearch required>\n                            <pg-option *ngFor=\"let option of optionsDestination\" Label=\"{{option.name}}\"  [Value]=\"option\">\n                            </pg-option>\n                        </pg-select>\n                        <div *ngIf=\"dCountry.invalid && (dCountry.dirty || dCountry.touched)\" >\n                            <label  *ngIf=\"dCountry.errors.required\" class=\"error\" >This field is required.</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\n                        <label>Email</label>\n                        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"code\"  #LName=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\n                        <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <!--<div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"county.invalid && (county.dirty || county.touched)\">\n                        <label>Bank</label>\n                        <input type=\"text\" class=\"form-control\" id=\"bank_name\" name=\"bank_name\" [(ngModel)]=\"bank_name\"  #county=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"county.invalid && (county.dirty || county.touched)\" >\n                        <label  *ngIf=\"county.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"phoneno.invalid && (phoneno.dirty || phoneno.touched)\">\n                        <label>Phone</label>\n                        <input type=\"tel\" class=\"form-control\" id=\"phone\" name=\"phone\" [(ngModel)]=\"phone\"  #phoneno=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"phoneno.invalid && (phoneno.dirty || phoneno.touched)\" >\n                        <label  *ngIf=\"phoneno.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>-->\n            <!--<div class=\"row m-t-10\">\n                <div class=\"col-lg-6\">\n                    <p><small>I agree to the <a href=\"javascript:void(0)\" class=\"text-info\">Pages Terms</a> and <a href=\"javascript:void(0)\" class=\"text-info\">Privacy</a>.</small></p>\n                </div>\n                <div class=\"col-lg-6 text-right\">\n                    <a href=\"javascript:void(0)\" class=\"text-info small\">Help? Contact Support</a>\n                </div>\n            </div>-->\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Update Details</button>\n        </form>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/features/features.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/features/features.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--START FEATURES -->\n<section class=\"section\" id=\"features\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-5 order-2 order-lg-1\">\n        <div class=\"features-box mt-5 mt-lg-0\">\n          <h3>Features</h3>\n          <p class=\"text-muted web-desc\">CURRENCY: Dollars, Pounds, Euros and Canadian Dollars</p>\n          <p class=\"text-muted web-desc\">Rates: We offer the best rate in the business</p>\n          <p class=\"text-muted web-desc\">HOW IT WORKS.</p>\n          <ul class=\"text-muted list-unstyled margin-t-30 features-item-list\">\n            <li class=\"\">Login/Register</li>\n            <li class=\"\">Select Amount</li>\n            <li class=\"\">Choose Beneficiary</li>\n          </ul>\n          <a href=\"#\" class=\"btn btn-custom margin-t-30\">Learn More <i\n              class=\"mdi mdi-arrow-right\"></i></a>\n        </div>\n      </div>\n      <div class=\"col-lg-7 order-1 order-lg-2\">\n        <div class=\"features-img mx-auto mr-lg-0\">\n          <img src=\"assets/images/growth-analytics.svg\" alt=\"macbook image\" class=\"img-fluid\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--END FEATURES-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/footer/footer.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/footer/footer.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--START FOOTER-->\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 margin-t-20\">\n        <h4>HIRIC</h4>\n        <div class=\"text-muted margin-t-20\">\n          <ul class=\"list-unstyled footer-list\">\n            <li><a href=\"javascript: void(0);\">Home</a></li>\n            <li><a href=\"javascript: void(0);\">About us</a></li>\n            <li><a href=\"javascript: void(0);\">Careers</a></li>\n            <li><a href=\"javascript: void(0);\">Contact us</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-3 margin-t-20\">\n        <h4>Information</h4>\n        <div class=\"text-muted margin-t-20\">\n          <ul class=\"list-unstyled footer-list\">\n            <li><a href=\"javascript: void(0);\">Terms & Condition</a></li>\n            <li><a href=\"javascript: void(0);\">About us</a></li>\n            <li><a href=\"javascript: void(0);\">Jobs</a></li>\n            <li><a href=\"javascript: void(0);\">Bookmarks</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-3 margin-t-20\">\n        <h4>Support</h4>\n        <div class=\"text-muted margin-t-20\">\n          <ul class=\"list-unstyled footer-list\">\n            <li><a href=\"javascript: void(0);\">FAQ</a></li>\n            <li><a href=\"javascript: void(0);\">Contact</a></li>\n            <li><a href=\"javascript: void(0);\">Disscusion</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-3 margin-t-20\">\n        <h4>Subscribe</h4>\n        <div class=\"text-muted margin-t-20\">\n          <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy\n            before the design starts.</p>\n        </div>\n        <form class=\"form subscribe\">\n          <input placeholder=\"Email\" class=\"form-control\" required>\n          <a href=\"javascript: void(0);\" class=\"submit\"><i class=\"pe-7s-paper-plane\"></i></a>\n        </form>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--END FOOTER-->\n\n<!--START FOOTER ALTER-->\n<div class=\"footer-alt\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"float-left pull-none\">\n          <p class=\"copy-rights text-muted mb-3 mb-sm-0\">2019 - {{year}} © Hiric - Themesbrand</p>\n        </div>\n        <div class=\"float-right pull-none \">\n          <ul class=\"list-inline social m-0\">\n            <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"social-icon\"><i class=\"mdi mdi-facebook\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"social-icon\"><i class=\"mdi mdi-twitter\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"social-icon\"><i class=\"mdi mdi-linkedin\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"social-icon\"><i class=\"mdi mdi-google-plus\"></i></a></li>\n            <li class=\"list-inline-item\"><a href=\"javascript: void(0);\" class=\"social-icon\"><i class=\"mdi mdi-dribbble\"></i></a></li>\n          </ul>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--START FOOTER ALTER-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/hom/hom.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/hom/hom.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>hom works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/homm/homm.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/homm/homm.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- STRAT NAVBAR -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky sticky-dark\">\n  <div class=\"container\">\n    <!-- LOGO -->\n   <!-- <a class=\"navbar-brand logo text-uppercase\" href=\"/\">\n      <i class=\"mdi mdi-alien\"></i>Hiric\n    </a>-->\n    <div class=\"navbar-brand mb-sm-10\">\n      <img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\"\n           src2x=\"assets/img/pock_2x.png\" width=\"150\" height=\"90\">\n    </div>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n      aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\">\n      <i class=\"mdi mdi-menu\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav navbar-center\" id=\"mySidenav\">\n        <li class=\"nav-item\" [ngClass]=\"{'active':currentSection === 'home'}\">\n          <a href=\"javascript: void(0);\" [ngx-scroll-to]=\"'home'\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\" [ngClass]=\"{'active':currentSection === 'features'}\">\n          <a href=\"javascript: void(0);\" [ngx-scroll-to]=\"'features'\" class=\"nav-link\">Features</a>\n        </li>\n        <li class=\"nav-item\" [ngClass]=\"{'active':currentSection === 'services'}\">\n          <a href=\"javascript: void(0);\" [ngx-scroll-to]=\"'services'\" class=\"nav-link\">Services</a>\n        </li>\n        <li class=\"nav-item\" [ngClass]=\"{'active':currentSection === 'about'}\">\n          <a href=\"javascript: void(0);\" [ngx-scroll-to]=\"'about'\" class=\"nav-link\">About</a>\n        </li>\n        <li class=\"nav-item\" [ngClass]=\"{'active':currentSection === 'pricing'}\">\n          <a href=\"javascript: void(0);\" [ngx-scroll-to]=\"'pricing'\" class=\"nav-link\"></a>\n        </li>\n       <!-- <li class=\"nav-item\" [ngClass]=\"{'active':currentSection === 'blog'}\">\n          <a href=\"javascript: void(0);\" [ngx-scroll-to]=\"'blog'\" class=\"nav-link\">Blog</a>\n        </li>-->\n        <li class=\"nav-item\" [ngClass]=\"{'active':currentSection === 'contact'}\">\n          <a href=\"javascript: void(0);\" [ngx-scroll-to]=\"'contact'\" class=\"nav-link\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"login\"  class=\"nav-link\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"register\"  class=\"nav-link\">Register</a>\n        </li>\n      </ul>\n      <div class=\"nav-button ml-auto\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <!--<li>\n            <button type=\"button\" class=\"btn btn-custom navbar-btn btn-rounded\">Try it\n              Free</button>\n          </li>-->\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n<!-- END NAVBAR -->\n\n<div appScrollspy [spiedTags]=\"['SECTION']\" (sectionChange)=\"onSectionChange($event)\">\n  <!--START HOME-->\n  <section class=\"section bg-home home-half\" id=\"home\" data-image-src=\"images/bg-home.jpg\">\n    <div class=\"bg-overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\n          <h4 class=\"home-small-title\">WELCOME TO APOVALLO</h4>\n          <h1 class=\"home-title\">WHERE MONEY MOVES</h1>\n          <p class=\"padding-t-15 home-desc mx-auto\">We deliver your money within minutes at the most competitive rates</p>\n          <p class=\"play-shadow margin-l-r-auto\"><a routerLink=\"login\"\n                  class=\"play-btn video-play-icon\"><i class=\"mdi mdi-play text-center\"></i></a></p>\n          Send Money Now\n        </div>\n      </div>\n    </div>\n  </section>\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <youtube-player [videoId]=\"'JlvxDa7Sges'\" height=\"450\" width=\"780\">\n      </youtube-player>\n    </div>\n  </ng-template>\n  <!--END HOME-->\n\n  <section class=\"section-sm bg-light\">\n    <div class=\"container\">\n      <div class=\"row\">\n<!--        <div class=\"col-md-3\">\n          <div class=\"client-images my-3 my-md-0\">\n            <img src=\"assets/images/clients/1.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"client-images my-3 my-md-0\">\n            <img src=\"assets/images/clients/2.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n          </div>\n        </div>\n\n        <div class=\"col-md-3 \">\n          <div class=\"client-images my-3 my-md-0\">\n            <img src=\"assets/images/clients/3.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"client-images my-3 my-md-0\">\n            <img src=\"assets/images/clients/4.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n          </div>\n        </div>-->\n      </div>\n    </div>\n  </section>\n\n  <app-features></app-features>\n  <app-services></app-services>\n  <app-about></app-about>\n <!-- <app-pricing></app-pricing>-->\n <!-- <app-blog></app-blog>-->\n  <app-contact></app-contact>\n  <app-footer></app-footer>\n <!-- <app-switcher></app-switcher>-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/login/login.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/login/login.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"login-wrapper\" style=\"position: fixed\">\r\n\t<!-- START Login Background Pic Wrapper-->\r\n\t<div class=\"bg-pic\" style=\"height: 100%\">\r\n\t\t<!-- START Background Pic-->\r\n\t\t<div class=\"img-holder\"  [ngStyle]=\"{'background':'url(assets/img/demo/himg.jpg)'}\"></div>\r\n\t\t<!-- START Background Caption-->\r\n\t\t<!--<div class=\"bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20\">\r\n\t\t\t<h2 class=\"semi-bold text-white\">\r\n\t\t\t\tPages make it easy to enjoy what matters the most in the life</h2>\r\n\t\t\theeekkdkdkkdkdkdk\r\n\t\t\t<p class=\"small\">\r\n\t\t\t\timages Displayed are solely for representation purposes only, All work copyright of respective\r\n\t\t\t\towner, otherwise © 2013-2014 REVOX.\r\n\t\t\t</p>\r\n\t\t</div>-->\r\n\t\t<!-- END Background Caption-->\r\n\t</div>\r\n\t<!-- END Login Background Pic Wrapper-->\r\n\t<!-- START Login Right Container-->\r\n\t<div *ngIf=\"!is_reset\" class=\"login-container bg-white\">\r\n\t\t<div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\r\n\t\t\t<img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\" src2x=\"assets/img/pock_2x.png\"\r\n\t\t\t\t width=\"150\" height=\"90\">\r\n\r\n\t\t\t<p class=\"p-t-35\" style=\"font-size: 16px\">Sign into your Apovallo account</p>\r\n\t\t\t<!-- START Login Form -->\r\n\t\t\t<form class=\"p-t-15\" role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\">\r\n\t\t\t\t\t<label>Username</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"userName\" name=\"userName\" [(ngModel)]=\"userName\"  #loginUserName=\"ngModel\" required class=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"loginUserName.invalid && (loginUserName.dirty || loginUserName.touched)\" >\r\n\t\t\t\t\t<label  *ngIf=\"loginUserName.errors.required\" class=\"error\" >This field is required.</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END Form Control-->\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\">\r\n\t\t\t\t\t<label>Password</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\"  #loginPassword=\"ngModel\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\" >\r\n\t\t\t\t\t<label  *ngIf=\"loginPassword.errors.required\" class=\"error\" >This field is required.</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 no-padding sm-p-l-10\">\r\n\t\t\t\t\t\t<!--<div class=\"form-check \">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\r\n\t\t\t\t\t\t\t<label for=\"checkbox1\">Keep Me Signed in</label>\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t<a (click)=\"is_reset=true\" class=\"text-info small\" style=\"cursor: pointer; font-size: 14px\"> Forgot password? </a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 d-flex align-items-center justify-content-end\">\r\n\t\t\t\t\t\t<a routerLink=\"/register\" class=\"text-info small\"> Create an account here </a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END Form Control-->\r\n\t\t\t\t<button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"loginForm.invalid\">Sign in</button>\r\n\t\t\t</form>\r\n\t\t\t<!--END Login Form-->\r\n\t\t\t<!--<div class=\"pull-bottom sm-pull-bottom\">\r\n\t\t\t\t<div class=\"m-b-30 p-r-50 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix\">\r\n\t\t\t\t\t&lt;!&ndash;<div class=\"col-sm-3 col-md-3 no-padding\">\r\n\t\t\t\t\t\t<img alt=\"\" class=\"m-t-5\" pgRetina src1x=\"assets/img/demo/pages_icon.png\"\r\n\t\t\t\t\t\t\t src2x=\"assets/img/demo/pages_icon_2x.png\" height=\"60\"\r\n\t\t\t\t\t\t\t src=\"assets/img/demo/pages_icon.png\" width=\"60\">\r\n\t\t\t\t\t</div>&ndash;&gt;\r\n\t\t\t\t\t<div class=\"col-sm-9 no-padding m-t-10\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\tCreate an account</small>  <a  routerLink=\"register\" class=\"text-info\"><h3> Here </h3></a>\r\n\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>-->\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- END Login Right Container-->\r\n\r\n\t<div *ngIf=\"is_reset\" class=\"login-container bg-white\">\r\n\t\t<div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\r\n\t\t\t<img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\" src2x=\"assets/img/pock_2x.png\"\r\n\t\t\t\t width=\"150\" height=\"90\">\r\n\r\n\t\t\t<p class=\"p-t-35\">Reset your password, enter your email below</p>\r\n\t\t\t<!-- START Login Form -->\r\n\t\t\t<form class=\"p-t-15\" role=\"form\" #requestForm=\"ngForm\" (ngSubmit)=\"requestPassword(requestForm.value)\">\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"passReset.invalid && (passReset.dirty || passReset.touched)\">\r\n\t\t\t\t\t<label>Email</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"email\" name=\"email\" [(ngModel)]=\"email\"  #passReset=\"ngModel\" required class=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"passReset.invalid && (passReset.dirty || passReset.touched)\" >\r\n\t\t\t\t\t<label  *ngIf=\"passReset.errors.required\" class=\"error\" >This field is required.</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END Form Control-->\r\n\t\t\t\t<!-- START Form Control\r\n\t\t\t\t<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\">\r\n\t\t\t\t\t<label>Password</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\"  #loginPassword=\"ngModel\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\" >\r\n\t\t\t\t\t<label  *ngIf=\"loginPassword.errors.required\" class=\"error\" >This field is required.</label>\r\n\t\t\t\t</div>-->\r\n\t\t\t\t<!-- START Form Control-->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 no-padding sm-p-l-10\">\r\n\t\t\t\t\t\t<!--<div class=\"form-check \">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\r\n\t\t\t\t\t\t\t<label for=\"checkbox1\">Keep Me Signed in</label>\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 d-flex align-items-center justify-content-end\">\r\n\t\t\t\t\t\t<!--<small>\r\n\t\t\t\t\t\t\tCreate an account </small><span style=\"padding-left: 0.5em;\"><a routerLink=\"register\" class=\"text-info small\"> Here</a> </span>-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END Form Control-->\r\n\t\t\t\t<button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"passReset.invalid\">Request Reset</button>\r\n\t\t\t</form>\r\n\t\t\t<!--END Login Form-->\r\n\t\t\t<!--<div class=\"pull-bottom sm-pull-bottom\">\r\n\t\t\t\t<div class=\"m-b-30 p-r-50 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix\">\r\n\t\t\t\t\t&lt;!&ndash;<div class=\"col-sm-3 col-md-3 no-padding\">\r\n\t\t\t\t\t\t<img alt=\"\" class=\"m-t-5\" pgRetina src1x=\"assets/img/demo/pages_icon.png\"\r\n\t\t\t\t\t\t\t src2x=\"assets/img/demo/pages_icon_2x.png\" height=\"60\"\r\n\t\t\t\t\t\t\t src=\"assets/img/demo/pages_icon.png\" width=\"60\">\r\n\t\t\t\t\t</div>&ndash;&gt;\r\n\t\t\t\t\t<div class=\"col-sm-9 no-padding m-t-10\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\tCreate an account</small>  <a  routerLink=\"register\" class=\"text-info\"><h3> Here </h3></a>\r\n\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>-->\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/logout/logout.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/logout/logout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- START CONTAINER FLUID -->\n<pg-container>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card card-transparent\">\n                <div class=\"card-header \">\n                    <div class=\"card-title\">\n\n                    </div>\n\n                </div>\n                <div class=\"card-body\">\n\n                    <div class=\"row\">\n                        <div class=\"col-lg-3\">\n\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <pgcard Maximize=\"false\" Refresh=\"false\" Toggle=\"false\">\n                                <h3>Reset Password</h3>\n                                <form class=\"p-t-15\" role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"resetPassword(loginForm.value)\">\n                                    <!-- START Form Control-->\n                                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"newPassword.invalid && (newPassword.dirty || newPassword.touched)\">\n                                        <label>New Password</label>\n                                        <input type=\"password\" id=\"newPass\" name=\"newPass\" [(ngModel)]=\"newPass\"  #newPassword=\"ngModel\" required class=\"form-control\">\n                                    </div>\n                                    <div *ngIf=\"newPassword.invalid && (newPassword.dirty || newPassword.touched)\" >\n                                        <label  *ngIf=\"newPassword.errors.required\" class=\"error\" >This field is required.</label>\n                                    </div>\n                                    <!-- END Form Control-->\n                                    <!-- START Form Control-->\n                                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\">\n                                        <label>Confirm New Password</label>\n                                        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\"  #loginPassword=\"ngModel\" required>\n                                    </div>\n                                    <div *ngIf=\"loginPassword.invalid && (loginPassword.dirty || loginPassword.touched)\" >\n                                        <label  *ngIf=\"loginPassword.errors.required\" class=\"error\" >This field is required.</label>\n                                    </div>\n                                    <!-- START Form Control-->\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6 no-padding sm-p-l-10\">\n                                            <!--<div class=\"form-check \">\n                                                <input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\n                                                <label for=\"checkbox1\">Keep Me Signed in</label>\n                                            </div>-->\n                                            <small>\n                                                 </small><span style=\"padding-left: 0.5em;\"><a routerLink=\"\" class=\"text-info small\"> </a> </span>\n                                        </div>\n                                        <div class=\"col-md-6 d-flex align-items-center justify-content-end\">\n                                            <small>\n                                                </small><span style=\"padding-left: 0.5em;\"><a routerLink=\"register\" class=\"text-info small\"> </a> </span>\n                                        </div>\n                                    </div>\n                                    <!-- END Form Control-->\n                                    <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"loginForm.invalid\">Reset Password</button>\n                                </form>\n                            </pgcard>\n                        </div>\n                        <div class=\"col-lg-3\">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/pent/pent.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/pent/pent.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\r\n<div data-pages=\"parallax\" class=\"mt-10\">\r\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\r\n        <div class=\"inner\">\r\n            <!-- START BREADCRUMB -->\r\n            <ol class=\"breadcrumb sm-p-b-5\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a href=\"javascript:void(0)\">Home</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\">Dashboard</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END JUMBOTRON -->\r\n<!-- START CONTAINER FLUID -->\r\n<div class=\"container-fluid p-l-25 p-r-25 p-t-0 p-b-25 sm-padding-10 sm-gutter\">\r\n    <!-- START ROW -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-sm-6  d-flex flex-column\">\r\n            <!-- START WIDGET -->\r\n            <!-- START ITEM -->\r\n            <!--<pgcardsocial Type=\"widget\" AdditionalClasses=\"full-width m-b-10 no-border\" Title=\"New Transfer\" TitleClass=\"text-success\"\r\n                           Source=\"Apovallo\" >\r\n                <ng-template #CustomBody>\r\n                    <h3 class='no-margin'>Total: <span><small>${{ nSuccessfulSum }}</small></span></h3>\r\n                    <h3 class=\"small hint-text no-margin\">Number of transactions: <span><small> {{ nSuccessful }}</small></span></h3>\r\n                    &lt;!&ndash;<h3 class=\"m-b-0\">111.25\r\n                        <span class=\"text-success\">\r\n              <i class=\"fa fa-sort-up small tex\"></i> 0.15</span>\r\n                    </h3>&ndash;&gt;\r\n\r\n                </ng-template>\r\n            </pgcardsocial>-->\r\n            <!--<div class=\"card card-default\">\r\n                <div class=\"card-header \">\r\n                    <div class=\"card-title\">New Transfer\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>You can Initiate a fresh transfer here.\r\n                    </p>\r\n                    <button routerLink=\"transfer\" aria-label=\"\" style=\"background-color: #8be8a4\" type=\"button\" class=\"btn btn-block btn-primary btn-lg btn-icon-right\">\r\n                        <span>Initiate New Transaction</span>\r\n                        <i class=\"pg-icon md-18\">arrow_right</i>\r\n                    </button>\r\n                </div>\r\n\r\n            &lt;!&ndash; END card &ndash;&gt;\r\n            &lt;!&ndash; </div> &ndash;&gt;\r\n        </div>-->\r\n            <!-- END ITEM -->\r\n            <!-- END WIDGET -->\r\n            <!-- START WIDGET -->\r\n\r\n            <!--<weekly-sales-widget></weekly-sales-widget>-->\r\n            <!-- END WIDGET -->\r\n            <!-- START WIDGET -->\r\n            <!--<quick-stats-widget></quick-stats-widget>-->\r\n            <!-- END WIDGET -->\r\n        </div>\r\n        <div class=\"col-lg-6 col-sm-6  d-flex flex-column\">\r\n\r\n            <h2 style=\"text-align: center;\">Welcome to Apovallo,  Where Money moves. </h2>\r\n\r\n            <div class=\"card card-default\">\r\n                <div class=\"card-header \">\r\n                    <div class=\"card-title\">New Transfer\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>You can Initiate a new transfer here.\r\n                    </p>\r\n                    <button routerLink=\"transfer\" aria-label=\"\" style=\"background-color: #8be8a4\" type=\"button\" class=\"btn btn-block btn-primary btn-lg btn-icon-right\">\r\n                        <span>Initiate New Transaction</span>\r\n                        <i class=\"pg-icon md-18\">arrow_right</i>\r\n                    </button>\r\n                </div>\r\n\r\n                <!-- END card -->\r\n                <!-- </div> -->\r\n            </div>\r\n        </div>\r\n\r\n        <!--  <div class=\"col-lg-4 col-sm-6  d-flex flex-column\">\r\n              &lt;!&ndash; START ITEM &ndash;&gt;\r\n\r\n              <pgcardsocial Type=\"widget\" AdditionalClasses=\"full-width m-b-10 no-border\" Title=\"Failed Transactions\" style=\"color: #ff0000\" TitleClass=\"text-danger\"\r\n                            Source=\"Apovallo\" Timestamp=\"{{ lastSuccesful.created | date: 'dd-MM-yyyy'}}\">\r\n                  <ng-template #CustomBody>\r\n                      <h3 class='no-margin'>Total: <span><small>${{nFailedSum}}</small></span></h3>\r\n                      <h3 class=\"small hint-text no-margin\">Number of transactions:  <span><small>{{ nFailed }}</small></span></h3>\r\n                     &lt;!&ndash; <h3 class=\"m-b-0\">111.25\r\n                          <span class=\"text-success\">\r\n                <i class=\"fa fa-sort-up small text-success\"></i> 0.15</span>\r\n                      </h3>&ndash;&gt;\r\n                  </ng-template>\r\n              </pgcardsocial>\r\n          </div>-->\r\n       <!-- <div class=\"col-lg-4 m-b-10 d-flex\">\r\n            &lt;!&ndash; START WIDGET &ndash;&gt;\r\n            &lt;!&ndash;<table-widget></table-widget>&ndash;&gt;\r\n            &lt;!&ndash; END WIDGET &ndash;&gt;\r\n        </div>-->\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-sm-6  d-flex flex-column\">\r\n            <!-- START WIDGET -->\r\n            <!-- START ITEM -->\r\n           <!-- <pgcardsocial Type=\"widget\" AdditionalClasses=\"full-width m-b-10 no-border\" Title=\"Successful Transactions\" TitleClass=\"text-success\"\r\n                          Source=\"Pages\" Timestamp=\"Jul 24\">\r\n                <ng-template #CustomBody>\r\n                    <h5 class='no-margin'>Apple Inc.</h5>\r\n                    <h5 class=\"small hint-text no-margin\">NASDAQ: AAPL - Nov 13 8:37 AM ET</h5>\r\n                    <h3 class=\"m-b-0\">111.25\r\n                        <span class=\"text-success\">\r\n              <i class=\"fa fa-sort-up small tex\"></i> 0.15</span>\r\n                    </h3>\r\n                </ng-template>\r\n            </pgcardsocial>-->\r\n            <!-- END ITEM -->\r\n            <!-- END WIDGET -->\r\n            <!-- START WIDGET -->\r\n\r\n            <!--<weekly-sales-widget></weekly-sales-widget>-->\r\n            <!-- END WIDGET -->\r\n            <!-- START WIDGET -->\r\n            <!--<quick-stats-widget></quick-stats-widget>-->\r\n            <!-- END WIDGET -->\r\n        </div>\r\n        <div class=\"col-lg-6 col-sm-6  d-flex flex-column\">\r\n            <!-- START ITEM -->\r\n            <div class=\"card card-default\">\r\n                <div class=\"card-header \">\r\n                    <div class=\"card-title\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <!--<button routerLink=\"transfer\" aria-label=\"\" class=\"btn btn-block btn-primary btn-lg\" type=\"button\">\r\n                        <i class=\"pg-icon\">send</i>\r\n                        <span>Send Money</span>\r\n                    </button>-->\r\n                    <button routerLink=\"transactions\" style=\"background-color: #007bff\" aria-label=\"\" class=\"btn btn-block btn-info btn-lg\" type=\"button\">\r\n                        <i class=\"pg-icon\"></i>\r\n                        <span>Show my Transactions</span>\r\n                    </button>\r\n                   <!-- <button routerLink=\"transactions/pending\" aria-label=\"\" class=\"btn btn-block btn-danger btn-lg\" type=\"button\">\r\n                        <i class=\"fa fa-pause\"></i>\r\n                        <span>Pending Transactions</span>\r\n                    </button-->\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-sm-6  d-flex flex-column\">\r\n            <!-- START ITEM -->\r\n\r\n            <!--<pgcardsocial Type=\"widget\" AdditionalClasses=\"full-width m-b-10 no-border\" Title=\"Failed Transactions\" style=\"color: #ff0000\" TitleClass=\"text-danger\"\r\n                          Source=\"John Smith\" Timestamp=\"Apr 24\">\r\n                <ng-template #CustomBody>\r\n                    <h5 class='no-margin'>Apple Inc.</h5>\r\n                    <h5 class=\"small hint-text no-margin\">NASDAQ: AAPL - Nov 13 8:37 AM ET</h5>\r\n                    <h3 class=\"m-b-0\">111.25\r\n                        <span class=\"text-success\">\r\n              <i class=\"fa fa-sort-up small text-success\"></i> 0.15</span>\r\n                    </h3>\r\n                </ng-template>\r\n            </pgcardsocial>-->\r\n        </div>\r\n        <!-- <div class=\"col-lg-4 m-b-10 d-flex\">\r\n             &lt;!&ndash; START WIDGET &ndash;&gt;\r\n             &lt;!&ndash;<table-widget></table-widget>&ndash;&gt;\r\n             &lt;!&ndash; END WIDGET &ndash;&gt;\r\n         </div>-->\r\n    </div>\r\n\r\n</div>\r\n<!-- END CONTAINER FLUID -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/profile/profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/profile/profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pg-container>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card card-borderless\">\n                <pg-tabset tabAnimation=\"slide-left\" Type=\"simple\" ShowPagination=\"true\">\n                    <pg-tab>\n                        <ng-template #TabHeading>\n                            Basic Profile\n                        </ng-template>\n                        <div class=\"row column-seperation\">\n                            <div class=\"col-lg-6\">\n                                <app-basic-profile></app-basic-profile>\n                            </div>\n                            <div class=\"col-lg-6 align-content-end\">\n                               <!-- <img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\" src2x=\"assets/img/pock_2x.png\" width=\"150\" height=\"90\">-->\n                            </div>\n                        </div>\n                    </pg-tab>\n                    <pg-tab>\n                        <ng-template #TabHeading>\n                            Update Password\n                        </ng-template>\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-lg-5\">\n                                <app-user-password></app-user-password>\n                            </div>\n                            <div class=\"col-lg-4\"></div>\n                        </div>\n                    </pg-tab>\n                    <pg-tab>\n                        <ng-template #TabHeading>\n                            User Detail Update\n                        </ng-template>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <app-user-detail></app-user-detail>\n                            </div>\n                        </div>\n                    </pg-tab>\n                </pg-tabset>\n            </div>\n        </div>\n    </div>\n</pg-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/services/services.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/services/services.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!--START SERVICES-->\n <section class=\"section bg-light\" id=\"services\">\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-lg-8 offset-lg-2\">\n         <h1 class=\"section-title text-center\">Our Services</h1>\n         <div class=\"section-title-border margin-t-20\"></div>\n         <p class=\"section-subtitle text-muted text-center padding-t-30 font-secondary\"></p>\n       </div>\n     </div>\n     <div class=\"row margin-t-30\">\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-diamond text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>Money Transfer</h4>\n               <p class=\"pt-2 text-muted\"></p>\n             </div>\n           </div>\n         </div>\n       </div>\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-display2 text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>International Vendor Payment</h4>\n               <p class=\"pt-2 text-muted\"></p>\n             </div>\n           </div>\n         </div>\n       </div>\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-piggy text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>School Fees</h4>\n               <p class=\"pt-2 text-muted\"></p>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"row\">\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-science text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>Medical Fees</h4>\n               <p class=\"pt-2 text-muted\"></p>\n             </div>\n           </div>\n         </div>\n       </div>\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-news-paper text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>Vacation</h4>\n               <p class=\"pt-2 text-muted\"></p>\n             </div>\n           </div>\n         </div>\n       </div>\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-plane text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>Conferences and Seminars</h4>\n               <p class=\"pt-2 text-muted\"></p>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n\n     <!--<div class=\"row\">\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-arc text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>Pixel Perfect Design</h4>\n               <p class=\"pt-2 text-muted\">There are many variations of passages of Lorem Ipsum available, but the\n                 majority have suffered alteration.</p>\n             </div>\n           </div>\n         </div>\n       </div>\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-tools text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>Perfect Toolbox</h4>\n               <p class=\"pt-2 text-muted\">Hampden-Sydney College in Virginia, looked up one of the more obscure Latin\n                 words, consectetur.</p>\n             </div>\n           </div>\n         </div>\n       </div>\n       <div class=\"col-lg-4 margin-t-20\">\n         <div class=\"services-box\">\n           <div class=\"media\">\n             <i class=\"pe-7s-timer text-custom\"></i>\n             <div class=\"media-body ml-4\">\n               <h4>Awesome Design</h4>\n               <p class=\"pt-2 text-muted\">All the Lorem Ipsum generators on the Internet tend to repeat predefined\n                 chunks as necessary.</p>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>-->\n   </div>\n </section>\n <!--START SERVICES-->\n\n\n <!--START WEBSITE-DESCRIPTION-->\n <section class=\"section bg-web-desc\">\n   <div class=\"bg-overlay\"></div>\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-lg-12 text-center\">\n         <h2 class=\"text-white\">Make Special Arrangement for International Payment Now</h2>\n         <p class=\"padding-t-15 home-desc mx-auto\"></p>\n         <a routerLink=\"login\" class=\"btn btn-bg-white margin-t-30\">Start Now</a>\n       </div>\n     </div>\n   </div>\n </section>\n\n <!--END WEBSITE-DESCRIPTION-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/simplywhite.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/simplywhite.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- WRAP LAYOUT IF BOXED -->\n<div class=\"container\" *ngIf=\"_boxed; else basicLayoutBlock\">\n  <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n</div>\n<ng-template #basicLayoutBlock>\n  <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n</ng-template>\n<!-- YOUR LAYOUT CONTENT GOES INSIDE HERE -->\n<ng-template #contentTpl>\n  <!-- PAGE SIDEBAR -->\n  <pg-sidebar>\n    <ng-template #sideBarOverlay>\n      <div class=\"row\">\n        <div class=\"col-xs-6 no-padding\">\n          <a href=\"javascript:void(0)\" class=\"p-l-40\"><img src=\"assets/img/demo/social_app.svg\" alt=\"socail\">\n          </a>\n        </div>\n        <div class=\"col-xs-6 no-padding\">\n          <a href=\"javascript:void(0)\" class=\"p-l-10\"><img src=\"assets/img/demo/email_app.svg\" alt=\"socail\">\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6 m-t-20 no-padding\">\n          <a href=\"javascript:void(0)\" class=\"p-l-40\"><img src=\"assets/img/demo/calendar_app.svg\" alt=\"socail\">\n          </a>\n        </div>\n        <div class=\"col-xs-6 m-t-20 no-padding\">\n          <a href=\"javascript:void(0)\" class=\"p-l-10\"><img src=\"assets/img/demo/add_more.svg\" alt=\"socail\">\n          </a>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #sideBarHeader>\n     <a routerLink=\"\"> <img src=\"assets/img/pock.png\" pgRetina src2x=\"assets/img/pock_2x.png\" alt=\"logo\" class=\"brand\"\n        width=\"150\" height=\"90\"></a>\n      <div class=\"dropdown-divider mt-10 mb-10\">Hello</div>\n    </ng-template>\n\n    <ng-template  #menuItems>\n      <div class=\"mt-10 mb-20\"></div>\n      <pg-menu-items [Items]=\"menuLinks\">\n      </pg-menu-items>\n      <a href=\"#\" class=\"dropdown-item\" (click)=\"logOut()\">Logout</a>\n    </ng-template>\n    <a href=\"#\" class=\"dropdown-item\" (click)=\"logOut()\">Logout</a>\n  </pg-sidebar>\n  <!-- PAGE CONTAINER -->\n  <page-container>\n    <pg-header [boxed]=\"_boxed\">\n      <!-- START MOBILE SIDEBAR TOGGLE -->\n      <a href=\"javascript:void(0);\" class=\"btn-icon-link toggle-sidebar d-lg-none\" (click)=\"toggleMobileSidebar()\">\n        <i class=\"pg-icon\">menu</i>\n      </a>\n      <!-- END MOBILE SIDEBAR TOGGLE -->\n      <div class=\"d-flex align-items-center mb-10\">\n        <!-- START EMAIL MOBILE TOGGLE -->\n        <a href=\"javascript:void(0);\" class=\"toggle-secondary-sidebar align-items-center\"\n          (click)=\"toggleSecondarySideBar()\" *ngIf=\"_layoutOption === 'email'\">\n          <span class=\"d-flex align-items-center\">\n            Inbox <span class=\"text-info\">(12)</span> <span class=\"pg-icon\">drop_down</span>\n          </span>\n        </a>\n        <!-- END EMAIL MOBILE TOGGLE -->\n        <div class=\"brand mb-sm-20\" [class.d-none]=\"_layoutOption === 'email'\" [class.d-xl-block]=\"_layoutOption === 'email'\"\n          [class.d-lg-block]=\"_layoutOption === 'email'\">\n          <img src=\"assets/img/pock.png\" alt=\"logo\" pgRetina src1x=\"assets/img/pock.png\"\n            src2x=\"assets/img/pock_2x.png\" width=\"150\" height=\"90\">\n        </div>\n        <!--<a href=\"#\" class=\"btn btn-link text-primary m-l-20 d-none d-lg-inline-flex d-xl-inline-flex\">Add New Item</a>\n        <a href=\"javascript:void(0)\" class=\"search-link d-none d-lg-block d-xl-block\" (click)=\"openSearch($event)\"><i\n            class=\"pg-icon\">search</i>Type anywhere to <span class=\"bold\">search</span></a>-->\n      </div>\n      <div class=\"d-flex align-items-center\">\n    <!--    &lt;!&ndash; START NOTIFICATION LIST &ndash;&gt;\n        <ul class=\"d-lg-inline-block d-none notification-list no-margin  b-grey b-l b-r no-style p-l-20 p-r-20\">\n          <li class=\"p-r-10 inline\">\n            <div class=\"dropdown\" dropdown>\n              <a href=\"javascript:;\" id=\"notification-center\" class=\"header-icon btn-icon-link\" dropdownToggle>\n                <i class=\"pg-icon\">world</i>\n                <span class=\"bubble\"></span>\n              </a>\n              &lt;!&ndash; START Notification Dropdown &ndash;&gt;\n              <div *dropdownMenu class=\"dropdown-menu notification-toggle\">\n                &lt;!&ndash; START Notification &ndash;&gt;\n                <div class=\"notification-panel\">\n                  &lt;!&ndash; START Notification Body&ndash;&gt;\n                  <div class=\"notification-body scrollable\">\n                    &lt;!&ndash; START Notification Item&ndash;&gt;\n                    <div class=\"notification-item unread clearfix\">\n                      &lt;!&ndash; START Notification Item&ndash;&gt;\n                      <div class=\"heading open\">\n                        <a href=\"#\" class=\"text-complete pull-left d-flex align-items-center\">\n                          <i class=\"pg-icon m-r-10\">map</i>\n                          <span class=\"bold\">Carrot Design</span>\n                          <span class=\"fs-12 m-l-10\">David Nester</span>\n                        </a>\n                        <div class=\"pull-right\">\n                          <div class=\"thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details\">\n                            <div><i class=\"pg-icon\">chevron_down</i>\n                            </div>\n                          </div>\n                          <span class=\" time\">few sec ago</span>\n                        </div>\n                        <div class=\"more-details\">\n                          <div class=\"more-details-inner\">\n                            <h5 class=\"semi-bold fs-16\">“Apple’s Motivation - Innovation <br>\n                              distinguishes between <br>\n                              A leader and a follower.”</h5>\n                            <p class=\"small hint-text\">\n                              Commented on john Smiths wall.\n                              <br> via pages framework.\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                      &lt;!&ndash; END Notification Item&ndash;&gt;\n                      &lt;!&ndash; START Notification Item Right Side&ndash;&gt;\n                      <div class=\"option\" tooltip=\"mark as read\" placement=\"right\">\n                        <a href=\"javascript:void(0)\" class=\"mark\"></a>\n                      </div>\n                      &lt;!&ndash; END Notification Item Right Side&ndash;&gt;\n                    </div>\n                    &lt;!&ndash; START Notification Body&ndash;&gt;\n                    &lt;!&ndash; START Notification Item&ndash;&gt;\n                    <div class=\"notification-item  clearfix\">\n                      <div class=\"heading\">\n                        <a href=\"javascript:void(0)\" class=\"text-danger pull-left\">\n                          <i class=\"pg-icon m-r-10\">alert_warning</i>\n                          <span class=\"bold\">98% Server Load</span>\n                          <span class=\"fs-12 m-l-10\">Take Action</span>\n                        </a>\n                        <span class=\"pull-right time\">2 mins ago</span>\n                      </div>\n                      &lt;!&ndash; START Notification Item Right Side&ndash;&gt;\n                      <div class=\"option\">\n                        <a href=\"javascript:void(0)\" class=\"mark\"></a>\n                      </div>\n                      &lt;!&ndash; END Notification Item Right Side&ndash;&gt;\n                    </div>\n                    &lt;!&ndash; END Notification Item&ndash;&gt;\n                    &lt;!&ndash; START Notification Item&ndash;&gt;\n                    <div class=\"notification-item  clearfix\">\n                      <div class=\"heading\">\n                        <a href=\"javascript:void(0)\" class=\"text-warning pull-left\">\n                          <i class=\"pg-icon m-r-10\">alert_warning</i>\n                          <span class=\"bold\">Warning Notification</span>\n                          <span class=\"fs-12 m-l-10\">Buy Now</span>\n                        </a>\n                        <span class=\"pull-right time\">yesterday</span>\n                      </div>\n                      &lt;!&ndash; START Notification Item Right Side&ndash;&gt;\n                      <div class=\"option\">\n                        <a href=\"javascript:void(0)\" class=\"mark\"></a>\n                      </div>\n                      &lt;!&ndash; END Notification Item Right Side&ndash;&gt;\n                    </div>\n                    &lt;!&ndash; END Notification Item&ndash;&gt;\n                    &lt;!&ndash; START Notification Item&ndash;&gt;\n                    <div class=\"notification-item unread clearfix\">\n                      <div class=\"heading\">\n                        <div class=\"thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10\">\n                          <img width=\"30\" height=\"30\" src2x=\"assets/img/profiles/1x.jpg\" pgRetina\n                            src1x=\"assets/img/profiles/1.jpg\" alt=\"\" src=\"assets/img/profiles/1.jpg\">\n                        </div>\n                        <a href=\"javascript:void(0)\" class=\"text-complete pull-left\">\n                          <span class=\"bold\">Revox Design Labs</span>\n                          <span class=\"fs-12 m-l-10\">Owners</span>\n                        </a>\n                        <span class=\"pull-right time\">11:00pm</span>\n                      </div>\n                      &lt;!&ndash; START Notification Item Right Side&ndash;&gt;\n                      <div class=\"option\" tooltip=\"mark as read\" placement=\"right\">\n                        <a href=\"javascript:void(0)\" class=\"mark\"></a>\n                      </div>\n                      &lt;!&ndash; END Notification Item Right Side&ndash;&gt;\n                    </div>\n                    &lt;!&ndash; END Notification Item&ndash;&gt;\n                  </div>\n                  &lt;!&ndash; END Notification Body&ndash;&gt;\n                  &lt;!&ndash; START Notification Footer&ndash;&gt;\n                  <div class=\"notification-footer text-center\">\n                    <a href=\"javascript:void(0)\" class=\"\">Read all notifications</a>\n                    <a data-toggle=\"refresh\" class=\"portlet-refresh text-black pull-right\" href=\"javascript:void(0)\">\n                      <i class=\"pg-refresh_new\"></i>\n                    </a>\n                  </div>\n                  &lt;!&ndash; START Notification Footer&ndash;&gt;\n                </div>\n                &lt;!&ndash; END Notification &ndash;&gt;\n              </div>\n              &lt;!&ndash; END Notification Dropdown &ndash;&gt;\n            </div>\n          </li>\n\n          <ng-template [ngIf]=\"_layoutOption != 'email'\">\n            <li class=\"p-r-10 inline\">\n              <a href=\"javascript:void(0)\" class=\"header-icon btn-icon-link\">\n                <i class=\"pg-icon\">link_alt</i>\n              </a>\n            </li>\n            <li class=\"p-r-10 inline\">\n              <a href=\"javascript:void(0)\" class=\"header-icon btn-icon-link\">\n                <i class=\"pg-icon\">grid_alt</i>\n              </a>\n            </li>\n          </ng-template>\n\n          <ng-template [ngIf]=\"_layoutOption == 'email'\">\n            <li class=\"inline\">\n              <a href=\"javascript:void(0)\" id=\"mark-email\" class=\"mark-email btn-icon-link m-l-10\"><i\n                  class=\"pg-icon\">edit</i></a>\n            </li>\n          </ng-template>\n        </ul>-->\n        <!-- END NOTIFICATIONS LIST -->\n        <!-- START User Info-->\n        <div class=\"pull-left p-r-10 fs-14 font-heading d-lg-inline-block d-none m-l-20\">\n          <span class=\"semi-bold\">{{user.first_name}}</span> <span class=\"text-color\">{{\" \" + user.last_name}}</span>\n        </div>\n        <div class=\"dropdown pull-right d-lg-block d-none\" dropdown>\n          <button class=\"profile-dropdown-toggle\" type=\"button\" dropdownToggle id=\"profileDropdown\"\n            aria-label=\"profile dropdown\">\n            <span class=\"thumbnail-wrapper d32 circular inline\">\n              <img src=\"assets/img/profiles/male.png\" alt=\"\" pgRetina src1x=\"assets/img/profiles/male.png\"\n                src2x=\"assets/img/profiles/male_small2x.png\" width=\"32\" height=\"32\">\n            </span>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right profile-dropdown\" *dropdownMenu role=\"menu\">\n           <!-- <p class=\"dropdown-item\"><span>Signed in as <br /><b>{{user.first_name}} {{\" \" + user.last_name}}</b></span></p>-->\n            <div class=\"dropdown-divider\"></div>\n            <a routerLink=\"profile\" class=\"dropdown-item\">Your Profile</a>\n          <!--  <a href=\"#\" class=\"dropdown-item\">Your Activity</a>\n            <a href=\"#\" class=\"dropdown-item\">Your Archive</a>-->\n            <div class=\"dropdown-divider\"></div>\n           <!-- <a href=\"#\" class=\"dropdown-item\">Features</a>\n            <a href=\"#\" class=\"dropdown-item\">Help</a>\n            <a href=\"#\" class=\"dropdown-item\">Settings</a>-->\n            <a href=\"#\" class=\"dropdown-item\" (click)=\"logOut()\">Logout</a>\n            <div class=\"dropdown-divider\"></div>\n           <!-- <span class=\"dropdown-item fs-12 hint-text\">Last edited by David<br />on Friday at 5:27PM</span>-->\n          </div>\n        </div>\n        <!-- END User Info-->\n       <!-- <a href=\"javascript:void(0)\" class=\"header-icon btn-icon-link m-l-5 sm-no-margin d-inline-block btn-icon-link\"\n          (click)=\"openQuickView($event)\">\n          <i class=\"pg-icon\">menu_add</i>\n        </a>-->\n      </div>\n    </pg-header>\n    <div class=\"page-content-wrapper {{_pageContainerClass}}\">\n      <!-- START PAGE CONTENT -->\n      <div class=\"content {{_contentClass}}\">\n        <router-outlet></router-outlet>\n      </div>\n      <!-- END PAGE CONTENT -->\n      <!-- START COPYRIGHT -->\n      <ng-template [ngIf]=\"_footer\">\n        <div class=\" container-fluid container-fixed-lg footer\">\n          <div class=\"copyright sm-text-center\">\n            <p class=\"small no-margin pull-left sm-pull-reset\">\n              <span class=\"hint-text\">Copyright &copy; 2020</span>&nbsp;<span class=\"font-montserrat\">Apovallo</span>.\n              <span class=\"hint-text\">All rights\n                reserved.</span> <span class=\"sm-block\"><a class=\"m-l-10 m-r-10\" href=\"javascript:void(0)\">Terms of\n                  use</a> <span class=\"muted\">|</span> <a class=\"m-l-10\" href=\"javascript:void(0)\">Privacy\n                  Policy</a></span>\n            </p>\n\n            <p class=\"small no-margin pull-right sm-pull-reset\">\n               <span class=\"hint-text\"></span>\n            </p>\n\n            <div class=\"clearfix\">\n            </div>\n          </div>\n        </div>\n        <!-- END COPYRIGHT -->\n      </ng-template>\n    </div>\n  </page-container>\n<!--  &lt;!&ndash; QUICKSEARCH &ndash;&gt;\n  <app-search-overlay></app-search-overlay>\n   QUICKVIEW\n  <app-quickview></app-quickview>-->\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/switcher/switcher.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/switcher/switcher.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Style switcher -->\n <div id=\"style-switcher\" [style.left]=\"isVisible == true ? '0px' : '-189px'\">\n   <div>\n     <h3>Select your color</h3>\n     <ul class=\"pattern\">\n       <li>\n         <a class=\"color1\" href=\"javascript: void(0);\" (click)=\"setTheme('cyan')\"></a>\n       </li>\n       <li>\n         <a class=\"color2\" href=\"javascript: void(0);\" (click)=\"setTheme('red')\"></a>\n       </li>\n       <li>\n         <a class=\"color3\" href=\"javascript: void(0);\" (click)=\"setTheme('green')\"></a>\n       </li>\n       <li>\n         <a class=\"color4\" href=\"javascript: void(0);\" (click)=\"setTheme('pink')\"></a>\n       </li>\n       <li>\n         <a class=\"color5\" href=\"javascript: void(0);\" (click)=\"setTheme('blue')\"></a>\n       </li>\n       <li>\n         <a class=\"color6\" href=\"javascript: void(0);\" (click)=\"setTheme('purple')\"></a>\n       </li>\n       <li>\n         <a class=\"color7\" href=\"javascript: void(0);\" (click)=\"setTheme('orange')\"></a>\n       </li>\n       <li>\n         <a class=\"color8\" href=\"javascript: void(0);\" (click)=\"setTheme('yellow')\"></a>\n       </li>\n     </ul>\n   </div>\n   <div class=\"bottom\">\n     <a href=\"javascript: void(0);\" class=\"settings rounded-right\" (click)=\"ToogleMenu()\"><i\n         class=\"mdi mdi-settings mdi-spin\"></i></a>\n   </div>\n </div>\n <!-- end Style switcher -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Pending Transactions\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"15\"\n                    [rows]='basicRows'>\n\n                    <!-- <ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"to_name\" name=\"Receiver\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"to_email\" name=\"Receiver Email\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"amount\" name=\"Amount\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Currency\">\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                            <strong>{{ value.toUpperCase() }}</strong>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column prop=\"transfer_status\" name=\"Status\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                            <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                                <div class=\"btn-group\">\n                                    <button routerLink=\"/dashboard/transactions/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">View\n                                    </button>\n                                    <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                    </button>\n                                    <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                    </button>-->\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Transaction Details</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<!-- START CONTAINER FLUID -->\n<pg-container>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card card-transparent\">\n                <div class=\"card-header \">\n                    <!--<div class=\"card-title\">Transaction Details\n                    </div>-->\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-3\">\n\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <pgcard Maximize=\"false\" Refresh=\"false\" Toggle=\"false\">\n                                <ng-template #CardTitle>Transaction Details</ng-template>\n\n                                <div><p><span><b>Payment Ref : </b><small>{{ transaction.pay_ref }}</small></span></p></div>\n                                <div><p><span><b>Amount : </b><small>{{ transaction.amount }}</small></span></p></div>\n                                <div *ngIf=\"transaction.currency\"><p><span><b>Currency : </b><small>{{ transaction?.currency.toUpperCase() }}</small></span></p></div>\n                                <!--div><p><span><b>Transaction Status : </b><small>{{ transaction.tnx_status }}</small></span></p></div>-->\n                                <div><p><span><b>Transfer Status: </b><small>{{ transaction.transfer_status }}</small></span></p></div>\n                                <div><p><span><b>Receiver's Name : </b><small>{{ transaction.to_name }}</small></span></p></div>\n                                <div><p><span><b>Receiver's bank : </b><small>{{ transaction.to_bank }}</small></span></p></div>\n                                <div><p><span><b>Receiver's Phone: </b><small>{{ transaction.to_phone }}</small></span></p></div>\n                                <div><p><span><b>Payment Account Number : </b><small>{{ transaction.to_account_number }}</small></span></p></div>\n                                <div><p><span><b>Receiver's Country : </b><small>{{ \" \" + transaction.to_country}}</small></span></p></div>\n                                <div><p><span><b>Sending Rate : </b><small>{{ transaction.rate }}</small></span></p></div>\n                                <div><p><span><b>Receiver's Email : </b><small>{{ transaction.to_email }}</small></span></p></div>\n                                <div><p><span><b>Total in Destination Country : </b><small>{{ transaction.rate * transaction.amount }}</small></span></p></div>\n                            </pgcard>\n                        </div>\n                        <div class=\"col-lg-3\">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Failed Transactions</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Transaction History\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"15\"\n                    [rows]='basicRows'>\n\n                    <!--<ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"to_name\" name=\"Receiver\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"to_email\" name=\"Receiver Email\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"amount\" name=\"Amount\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"transfer_status\" name=\"Status\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                            <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                                <div class=\"btn-group\">\n                                    <button routerLink=\"/dashboard/transactions/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">View\n                                    </button>\n                                    <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                    </button>\n                                    <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                    </button>-->\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Pending Transactions\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"15\"\n                    [rows]='basicRows'>\n\n                    <!-- <ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"to_name\" name=\"Receiver\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"to_email\" name=\"Receiver Email\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"amount\" name=\"Amount\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Currency\">\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                            <strong>{{ value.toUpperCase() }}</strong>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column prop=\"transfer_status\" name=\"Status\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                            <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                                <div class=\"btn-group\">\n                                    <button routerLink=\"/dashboard/transactions/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">View\n                                    </button>\n                                    <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                    </button>\n                                    <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                    </button>-->\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\" class=\"mt-10\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Pending Transactions</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Transaction History\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"15\"\n                    [rows]='basicRows'>\n\n                    <!--<ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"to_name\" name=\"Receiver\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"to_email\" name=\"Receiver Email\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"amount\" name=\"Amount\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Currency\">\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                            <strong>{{ value.toUpperCase() }}</strong>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column prop=\"transfer_status\" name=\"Status\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                            <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                                <div class=\"btn-group\">\n                                    <button routerLink=\"/dashboard/transactions/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">View\n                                    </button>\n                                    <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                    </button>\n                                    <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                    </button>-->\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Successful Transactions</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Transaction History\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"15\"\n                    [rows]='basicRows'>\n\n                   <!-- <ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"to_name\" name=\"Receiver\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"to_email\" name=\"Receiver Email\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"amount\" name=\"Amount\"></ngx-datatable-column>\n                    <ngx-datatable-column class=\"text-uppercase\" prop=\"currency\" name=\"Currency\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"to_status\" name=\"Status\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                            <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                                <div class=\"btn-group\">\n                                    <button routerLink=\"/dashboard/transactions/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">View\n                                    </button>\n                                    <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                    </button>\n                                    <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                    </button>-->\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/transactions/transactions.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/transactions/transactions.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- START JUMBOTRON -->\n<div data-pages=\"parallax\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n            <!-- START BREADCRUMB -->\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Transactions</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<!-- START JUMBOTRON\n<div data-pages=\"parallax\" class=\"mt-10\">\n    <div class=\"container-fluid p-l-25 p-r-25 sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\">\n             START BREADCRUMB\n            <ol class=\"breadcrumb sm-p-b-5\">\n                <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Dashboard</li>\n            </ol>\n        </div>\n    </div>\n</div>\n END JUMBOTRON -->\n<!-- START CONTAINER FLUID -->\n<div class=\"container-fluid p-l-25 p-r-25 p-t-0 p-b-25 sm-padding-10 sm-gutter\">\n    <!-- START ROW -->\n    <div class=\"row\">\n        <div routerLink=\"successful\" class=\"col-lg-4 col-sm-6  d-flex flex-column\">\n            <!-- START WIDGET -->\n            <!-- START ITEM -->\n            <pgcardsocial style=\"color: green\" Type=\"widget\" AdditionalClasses=\"full-width m-b-10 no-border\" Title=\"Successful Transactions\" TitleClass=\"text-pen\"\n                          Source=\"Apovallo\" Timestamp=\"{{ lastSuccesful?.created | date: 'dd-MM-yyyy' }}\">\n                <ng-template #CustomBody>\n                    <h4 class='no-margin'>Number of transactions: <span><small>{{ nSuccessful }}</small></span></h4>\n                   <!-- <h3 class=\"small hint-text no-margin\">Number of transactions: <span><small> {{ nSuccessful }}</small></span></h3>-->\n                    <!--<h3 class=\"m-b-0\">111.25\n                        <span class=\"text-success\">\n              <i class=\"fa fa-sort-up small tex\"></i> 0.15</span>\n                    </h3>-->\n                </ng-template>\n            </pgcardsocial>\n            <!-- END ITEM -->\n            <!-- END WIDGET -->\n            <!-- START WIDGET -->\n\n            <!--<weekly-sales-widget></weekly-sales-widget>-->\n            <!-- END WIDGET -->\n            <!-- START WIDGET -->\n            <!--<quick-stats-widget></quick-stats-widget>-->\n            <!-- END WIDGET -->\n        </div>\n        <div routerLink=\"pending\" class=\"col-lg-4 col-sm-6  d-flex flex-column\">\n            <!-- START ITEM -->\n\n            <pgcardsocial Type=\"widget\" AdditionalClasses=\"full-width m-b-10 no-border\" Title=\"Pending Transactions\" TitleClass=\"text-success\"\n                          Source=\"Apovallo\" Timestamp=\"{{ lastPending?.created | date: 'dd-MM-yyyy'}}\">\n                <ng-template #CustomBody>\n                    <h4 class='no-margin'>Number of transactions: <span><small>{{npending}}</small></span></h4>\n                    <!--<h3 class=\"small hint-text no-margin\">Number of transactions:  <span><small>{{ npending }}</small></span></h3>-->\n                    <!--<h3 class=\"m-b-0\">111.25\n                        <span class=\"text-success\">\n              <i class=\"fa fa-sort-up small text-success\"></i> 0.15</span>\n                    </h3>-->\n                </ng-template>\n            </pgcardsocial>\n        </div>\n\n        <div routerLink=\"failed\" class=\"col-lg-4 col-sm-6  d-flex flex-column\">\n            <!-- START ITEM -->\n\n            <pgcardsocial Type=\"widget\" AdditionalClasses=\"full-width m-b-10 no-border\" Title=\"Failed Transactions\" style=\"color: #ff0000\" TitleClass=\"text-danger\"\n                          Source=\"Apovallo\" Timestamp=\"{{ lastFailed?.created | date: 'dd-MM-yyyy'}}\">\n                <ng-template #CustomBody>\n                    <h4 class='no-margin'>Number of transactions: <span><small>{{nFailed}}</small></span></h4>\n                   <!-- <h3 class=\"small hint-text no-margin\">Number of transactions:  <span><small>{{ nFailed }}</small></span></h3>-->\n                    <!-- <h3 class=\"m-b-0\">111.25\n                         <span class=\"text-success\">\n               <i class=\"fa fa-sort-up small text-success\"></i> 0.15</span>\n                     </h3>-->\n                </ng-template>\n            </pgcardsocial>\n        </div>\n        <!-- <div class=\"col-lg-4 m-b-10 d-flex\">\n             &lt;!&ndash; START WIDGET &ndash;&gt;\n             &lt;!&ndash;<table-widget></table-widget>&ndash;&gt;\n             &lt;!&ndash; END WIDGET &ndash;&gt;\n         </div>-->\n    </div>\n\n\n</div>\n\n<!-- START CONTAINER FLUID -->\n<pg-container extraHorizontalClass=\"bg-white\" extraClass=\"bg-white\">\n    <!-- START card -->\n    <div class=\"card card-transparent\">\n        <div class=\"card-header \">\n            <div class=\"card-title\">Transaction History\n            </div>\n            <div class=\"pull-right\">\n                <div class=\"col-xs-12\">\n                    <input type=\"text\" class=\"form-control pull-right\" placeholder=\"Search\" (keyup)='updateFilter($event)'>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive\">\n                <ngx-datatable\n                    #table\n                    class='table table-hover'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnModeSetting\"\n                    [scrollbarH]=\"scrollBarHorizontal\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"'auto'\"\n                    [limit]=\"15\"\n                    [rows]='basicRows'>\n\n                   <!-- <ngx-datatable-column prop=\"id\" name=\"ID\"></ngx-datatable-column>-->\n                    <ngx-datatable-column prop=\"to_name\" name=\"Receiver\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"to_email\" name=\"Receiver Email\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"amount\" name=\"Amount\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Currency\">\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                            <strong>{{ value.toUpperCase() }}</strong>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column prop=\"transfer_status\" name=\"Status\"></ngx-datatable-column>\n                    <ngx-datatable-column prop=\"id\" name=\"Action\">\n                        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\">\n                        <div class=\"btn-group btn-toolbar  col-6 no-padding\">\n                            <div class=\"btn-group\">\n                                <button routerLink=\"/dashboard/transactions/{{value}}\" aria-label=\"\" type=\"button\" class=\"btn btn-success\">View\n                                </button>\n                                <!--<button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Help\n                                </button>\n                                <button aria-label=\"\" type=\"button\" class=\"btn btn-success\">Create\n                                </button>-->\n                            </div>\n                        </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ng-template\n                            ngx-datatable-footer-template\n                            let-rowCount=\"rowCount\"\n                            let-pageSize=\"pageSize\"\n                            let-selectedCount=\"selectedCount\"\n                            let-curPage=\"curPage\"\n                            let-offset=\"offset\">\n                        Showing {{curPage}} to {{pageSize}} of {{rowCount}} entries\n                    </ng-template>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n    <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/transfer/transfer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/transfer/transfer.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!is_ready\" class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n\n        <!--<img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">-->\n        <h4>Transfer Money</h4>\n        <!--<p>\n            We accept various types of cards: Debit, Credit, Amex, Visa, and others.\n        </p>-->\n        <form class=\"p-t-15\" role=\"form\" name=\"transferForm\" #transferForm=\"ngForm\" (ngSubmit)=\"confirmTransaction(transferForm)\">\n            <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                        <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"useCurrency.invalid && (useCurrency.dirty || useCurrency.touched)\">\n                            <!--<label>Currency</label>-->\n                            <pg-select style=\"width: 100%;\" [(ngModel)]=\"currency\" (ngModelChange)=\"changeSource(transferForm)\" id=\"currency\" name=\"currency\" #useCurrency= \"ngModel\" PlaceHolder=\"Choose currency\" required>\n                                <pg-option *ngFor=\"let option of optionsSource\" Label=\"{{option.currency_label.toUpperCase()}}\"  [Value]=\"option\">\n                                </pg-option>\n                            </pg-select>\n                            <div *ngIf=\"useCurrency.invalid && (useCurrency.dirty || useCurrency.touched)\" >\n                                <label  *ngIf=\"useCurrency.errors.required\" class=\"error\" >This field is required.</label>\n                            </div>\n\n                        </div>\n                </div>\n\n                   <!-- <div class=\"col-md-6\">\n                        <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"sAmount.invalid && (sAmount.dirty || sAmount.touched || sAmount.value >2000)\">\n                            <label>Amount</label>\n                            <input type=\"number\" class=\"form-control\" id=\"amount\" name=\"amount\" [(ngModel)]=\"amount\"  #sAmount=\"ngModel\" required>\n                        </div>\n                        <div *ngIf=\"sAmount.invalid && (sAmount.dirty || sAmount.touched || sAmount.value > 2000)\" >\n                            <label  *ngIf=\"sAmount.errors.required\" class=\"error\" >This field is required or value greater than 2000.</label>\n                        </div>\n                    </div>-->\n                <div class=\"col-md-6\">\n                <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"(sAmount.invalid && (sAmount.dirty || sAmount.touched))|| sAmount.value > 2000\">\n                    <label>Amount (max is 2000)</label>\n                    <input type=\"number\"  class=\"form-control\" id=\"amount\" name=\"amount\" [(ngModel)]=\"amount\"  #sAmount=\"ngModel\" required >\n                </div>\n                <div *ngIf=\"(sAmount.invalid && (sAmount.dirty || sAmount.touched)) || sAmount.value > 2000\" >\n                    <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required or amount is greater than 2000</label>\n                </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"dCountry.invalid && (dCountry.dirty || dCountry.touched)\">\n                        <!-- <label>Destination Country</label>-->\n                        <pg-select style=\"width: 100%;\" [(ngModel)]=\"destination_country\"  PlaceHolder=\"Choose Destination country\"  (ngModelChange)=\"changeDestination($event)\"  id=\"destination_country\" name=\"destination_country\" #dCountry=\"ngModel\"  AllowClear\n                                   ShowSearch required>\n                            <pg-option *ngFor=\"let option of optionsDestination\" Label=\"{{option.name}}\"  [Value]=\"option\">\n                            </pg-option>\n                        </pg-select>\n                        <div *ngIf=\"dCountry.invalid && (dCountry.dirty || dCountry.touched)\" >\n                            <label  *ngIf=\"dCountry.errors.required\" class=\"error\" >This field is required.</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"cRate.invalid && (cRate.dirty || cRate.touched)\">\n                        <label>Current Exchange Rate</label>\n                        <input readonly type=\"number\" placeholder=\"\" class=\"form-control\" id=\"rate\" name=\"rate\" [(ngModel)]=\"rate\"  #cRate=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"cRate.invalid && (cRate.dirty || cRate.touched)\" >\n                        <label  *ngIf=\"cRate.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div class=\"form-check complete\">\n                        <input type=\"checkbox\" id=\"checkColorOpt2\" name=\"saveBeneficiary\" [(ngModel)]=\"loadBeneficiary\" (ngModelChange)=\"loadDataBeneficiary($event)\">\n                        <label for=\"checkColorOpt2\">\n                            Choose a saved beneficiary?\n                        </label>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf=\"loadBeneficiary\" class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"useBen.invalid \">\n                        <pg-select style=\"width: 100%;\" [(ngModel)]=\"beneficiary\" (ngModelChange)=\"fillBeneficiary($event)\" id=\"beneficiary\" name=\"beneficiary\" #useBen= \"ngModel\" PlaceHolder=\"Choose Beneficiary\" AllowClear\n                                   ShowSearch>\n                            <pg-option *ngFor=\"let option of beneficiaries\" Label=\"{{option.name + '| ' + option.bank_name + '|' + option.account}}\"  [Value]=\"option\">\n                            </pg-option>\n                        </pg-select>\n                        <div *ngIf=\"useBen.invalid\" >\n                            <label  *ngIf=\"useBen.errors.required\" class=\"error\" >This field is required.</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\n                        <label>Receiver's Full Name</label>\n                        <input type=\"text\"  class=\"form-control\" id=\"to_firstname\" name=\"to_firstname\" [(ngModel)]=\"to_firstname\"  #fName=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\n                        <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"toBank.invalid && (toBank.dirty || toBank.touched)\">\n                        <!-- <label>Destination Country</label>-->\n                        <pg-select style=\"width: 100%;\" [(ngModel)]=\"to_bank\"  PlaceHolder=\"Choose Beneficiary Bank\"  (ngModelChange)=\"changeDestination($event)\"  id=\"to_bank\" name=\"to_bank\" #toBank=\"ngModel\"  AllowClear\n                                   ShowSearch required>\n                            <pg-option *ngFor=\"let option of bankOptions\" Label=\"{{option.name}}\"  [Value]=\"option.name\">\n                            </pg-option>\n                        </pg-select>\n                        <div *ngIf=\"toBank.invalid && (toBank.dirty || toBank.touched)\" >\n                            <label  *ngIf=\"toBank.errors.required\" class=\"error\" >This field is required.</label>\n                        </div>\n                    </div>\n\n                  <!--  <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"toBank.invalid && (toBank.dirty || toBank.touched)\">\n                        <label>Name of Bank</label>\n                        <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"to_bank\" name=\"to_bank\" [(ngModel)]=\"to_bank\"  #toBank=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"toBank.invalid && (toBank.dirty || toBank.touched)\" >\n                        <label  *ngIf=\"toBank.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>-->\n                </div>\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"toAccount.invalid && (toAccount.dirty || toAccount.touched)\">\n                        <label>Account Number</label>\n                        <input type=\"text\" placeholder=\"\" maxlength=\"18\" class=\"form-control\" id=\"to_account_number\" name=\"to_account_number\" [(ngModel)]=\"to_account_number\"  #toAccount=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"toAccount.invalid && (toAccount.dirty || toAccount.touched)\" >\n                        <label  *ngIf=\"toAccount.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"toPhone.invalid && (toPhone.dirty || toPhone.touched)\">\n                        <label>Receiver's Phone</label>\n                        <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"to_phone\" name=\"to_phone\" [(ngModel)]=\"to_phone\"  #toPhone=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"toPhone.invalid && (toPhone.dirty || toPhone.touched)\" >\n                        <label  *ngIf=\"toPhone.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"toEmail.invalid && (toEmail.dirty || toEmail.touched)\">\n                        <label>Receiver's Email</label>\n                        <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"to_email\" name=\"to_email\" [(ngModel)]=\"to_email\"  #toEmail=\"ngModel\">\n                    </div>\n                    <div *ngIf=\"toEmail.invalid && (toEmail.dirty || toEmail.touched)\" >\n                        <label  *ngIf=\"toEmail.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"row mt-2\">\n                <div class=\"col-md-12 mb-2\">\n                    <div class=\"form-check complete\">\n                        <input type=\"checkbox\" id=\"checkColorOpt1\" name=\"saveBeneficiary\" [(ngModel)]=\"saveBeneficiary\" (ngModelChange)=\"createBeneficiary($event)\">\n                        <label for=\"checkColorOpt1\">\n                            Save Beneficiary\n                        </label>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <!--<div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"cRate.invalid && (cRate.dirty || cRate.touched)\">\n                        <label>Current Exchange Rate</label>\n                        <input readonly type=\"number\" placeholder=\"\" class=\"form-control\" id=\"rate\" name=\"rate\" [(ngModel)]=\"rate\"  #cRate=\"ngModel\" required >\n                    </div>\n                    <div *ngIf=\"cRate.invalid && (cRate.dirty || cRate.touched)\" >\n                        <label  *ngIf=\"cRate.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>-->\n                </div>\n                <div class=\"col-md-6\">\n                   <!-- <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"cTotal.invalid && (cTotal.dirty || cTotal.touched)\">\n                        <label>Destination Total</label>\n                        <input readonly type=\"text\" value=\"{{ amount * rate}}\" placeholder=\"{{ amount * rate }}\" class=\"form-control\" id=\"total\" name=\"total\" [(ngModel)]=\"total\"  #cTotal=\"ngModel\" required>\n                    </div>\n                    <div *ngIf=\"cTotal.invalid && (cTotal.dirty || cTotal.touched)\" >\n                        <label  *ngIf=\"cTotal.errors.required\" class=\"error\" >This field is required.</label>\n                    </div>-->\n                    <h3 *ngIf=\"destination_country\">Total : <span><small>{{ amount * rate + \"\" }} {{ destination_country?.currency }}</small></span></h3>\n                </div>\n            </div>\n\n\n\n            <button class=\"btn btn-primary btn-lg btn-cons m-t-10\"  [class.disabled]=\"!transferForm.valid\">Confirm Transaction</button>\n        </form>\n\n    </div>\n\n\n</div>\n\n<div *ngIf=\"middle\" class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n        <!-- START CONTAINER FLUID -->\n        <pg-container>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"card card-transparent\">\n                        <div class=\"card-header \">\n                            <h4>Please confirm transaction, then proceed to make payment</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-1\">\n\n                                </div>\n                                <div class=\"col-lg-10\">\n                                    <pgcard Maximize=\"false\" Refresh=\"false\" Toggle=\"false\">\n                                        <ng-template #CardTitle>Transaction Details</ng-template>\n\n                                        <!--<div><p><span><b>Payment Ref : </b><small>{{ transaction.pay_ref }}</small></span></p></div>-->\n                                        <div><p><span><b>Amount : </b><small>{{ tnx.amount }}</small></span></p></div>\n                                        <div><p><span><b>Currency : </b><small>{{ tnx.currency.toUpperCase() }}</small></span></p></div>\n                                        <!--<div><p><span><b>Transaction Status : </b><small>{{ tnx_status }}</small></span></p></div>-->\n                                        <!--<div><p><span><b>Transfer Status: </b><small>{{ transaction.transfer_status }}</small></span></p></div>-->\n                                        <div><p><span><b>Receiver's FullName : </b><small>{{ tnx.to_name }}</small></span></p></div>\n                                        <div><p><span><b>Receiver's Bank : </b><small>{{ tnx.to_bank }}</small></span></p></div>\n                                        <div><p><span><b>Receiver's Phone: </b><small>{{ tnx.to_phone }}</small></span></p></div>\n                                        <div><p><span><b>Payment Account Number : </b><small>{{ tnx.to_account_number }}</small></span></p></div>\n                                        <div><p><span><b>Receiver's Country : </b><small>{{ tnx.to_country}}</small></span></p></div>\n                                        <div><p><span><b>Sending Rate : </b><small>{{ tnx.rate }}</small></span></p></div>\n                                        <div><p><span><b>Receiver's Email : </b><small>{{ tnx.to_email }}</small></span></p></div>\n                                        <div><p><span><b>Total in Destination Country : </b><small>{{ tnx.total }} {{destination_country?.currency}}</small></span></p></div>\n                                    </pgcard>\n\n                                    <div>\n                                        <button class=\"btn btn-primary btn-lg btn-cons m-t-10 mr-lg-5\" (click)=\"is_ready = false; middle =false \">Edit Payments</button>\n                                        <button class=\"btn btn-primary btn-lg btn-cons m-t-10 ml-lg-3\" (click)=\"is_goal = true; middle=false;\" >Make Payment</button>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </pg-container>\n\n\n        <!--<img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">-->\n\n    </div>\n</div>\n\n<div *ngIf=\"is_goal\" class=\"register-container mt-20 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n        <h3> {{tnx.amount +\"\" + tnx.currency.toUpperCase()}} equivalent in local currency will be transferred  to {{\" \" +tnx.to_name}}.</h3>\n        <!-- END CONTAINER FLUID -->\n        <h4>Supply your card details to make payment</h4>\n        <form class=\"p-t-1\" role=\"form\" name=\"transferForm\" #payForm=\"ngForm\" (ngSubmit)=\"sendTransaction()\">\n            <div class=\"row\">\n                <div class=\"col-md-10\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" >\n                        <label>Credit Card Details</label>\n                        <ngx-stripe-card\n                                [options]=\"cardOptions\"\n                                [elementsOptions]=\"elementsOptions\"\n                        ></ngx-stripe-card>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn btn-primary btn-lg btn-cons m-t-10\"  [class.disabled]=\"!payForm.valid\">Make Payment</button>\n        </form>\n\n       <!-- <ngx-stripe-card-group\n                [formGroup]=\"stripeTest\"\n                [elementsOptions]=\"elementsOptions\"\n        >\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\">\n                        <label>Name</label>\n                        &lt;!&ndash; <label>Destination Country</label>&ndash;&gt;\n                        <input class=\"form-control\" formControlName=\"name\" readonly />\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\">\n                        &lt;!&ndash; <label>Destination Country</label>&ndash;&gt;\n                        <label>Amount</label>\n                        <input class=\"form-control\" formControlName=\"amount\" readonly />\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\">\n                        &lt;!&ndash; <label>Destination Country</label>&ndash;&gt;\n                        <label>Card Numbers</label>\n                        <ngx-stripe-card-number [options]=\"cardOptions\"></ngx-stripe-card-number>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\">\n                        &lt;!&ndash; <label>Destination Country</label>&ndash;&gt;\n                        <label>Expiring Date</label>\n                        <ngx-stripe-card-expiry [options]=\"cardOptions\"></ngx-stripe-card-expiry>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <div pgFormGroupDefault class=\"form-group form-group-default\">\n                        &lt;!&ndash; <label>Destination Country</label>&ndash;&gt;\n                        <label>CVC</label>\n                        <ngx-stripe-card-cvc [options]=\"cardOptions\"></ngx-stripe-card-cvc>\n                    </div>\n                </div>\n            </div>\n\n            <button class=\"btn btn-primary btn-lg btn-cons m-t-10\" type=\"submit\" (click)=\"sendTransaction()\">\n                PAY\n            </button>\n        </ngx-stripe-card-group>\n-->\n    </div>\n\n</div>\n\n\n\n<div *ngIf=\"is_successful\" class=\"register-container mt-40 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n\n        <div class=\"card card-default\" style=\"margin-top: 20%\">\n            <div class=\"card-header \">\n                <div class=\"card-title\">\n                    Transfer Successful\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <!--<button routerLink=\"transfer\" aria-label=\"\" class=\"btn btn-block btn-primary btn-lg\" type=\"button\">\n                    <i class=\"pg-icon\">send</i>\n                    <span>Send Money</span>\n                </button>-->\n                <h3>Your transfer to {{ tnx.to_name + \" \"}} is <span style=\"color: #2ca02c\">Successful </span></h3>\n                <button (click)=\"reLoad()\" style=\"background-color: #007bff\" aria-label=\"\" class=\"btn btn-block btn-info btn-lg\" type=\"button\">\n                    <i class=\"pg-icon\"></i>\n                    <span>Initiate New Transactions</span>\n                </button>\n                <!-- <button routerLink=\"transactions/pending\" aria-label=\"\" class=\"btn btn-block btn-danger btn-lg\" type=\"button\">\n                     <i class=\"fa fa-pause\"></i>\n                     <span>Pending Transactions</span>\n                 </button-->\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div *ngIf=\"is_failed\" class=\"register-container mt-40 pt-1 full-height sm-p-t-30\">\n    <div class=\"d-flex justify-content-center flex-column full-height \">\n        <h3>Your transfer to {{ tnx?.to_name + \" \"}} <span style=\"color: red\"><h2>Failed</h2></span>  </h3>\n        <button (click)=\"reLoad()\" style=\"background-color: #007bff\" aria-label=\"\" class=\"btn btn-block btn-info btn-lg\" type=\"button\">\n            <i class=\"pg-icon\"></i>\n            <span>Initiate New Transactions</span>\n        </button>\n        <button (click)=\"is_failed = false; is_ready = false;\" style=\"background-color: #007bff\" aria-label=\"\" class=\"btn btn-block btn-info btn-lg\" type=\"button\">\n            <i class=\"pg-icon\"></i>\n            <span>Try Again</span>\n        </button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-activation works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\r\n    <div class=\"d-flex justify-content-center flex-column full-height \">\r\n\r\n        <!--<img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">-->\r\n        <h4>Update your user Details</h4>\r\n      <!--  <p>\r\n            Create a pages account. If you have a facebook account, log into it for this process. Sign in with <a href=\"javascript:void(0)\" class=\"text-info\">Facebook</a> or <a href=\"javascript:void(0)\" class=\"text-info\">Google</a>\r\n        </p>-->\r\n        <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"register(registerForm.value)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"fName.invalid && (fName.dirty || fName.touched)\">\r\n                        <label>First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"txtfname\" name=\"txtfname\" [(ngModel)]=\"txtfname\"  #fName=\"ngModel\" required >\r\n                    </div>\r\n                    <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" >\r\n                        <label  *ngIf=\"fName.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"LName.invalid && (LName.dirty || LName.touched)\">\r\n                        <label>Last Names</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"txtlname\" name=\"txtlname\" [(ngModel)]=\"txtlname\"  #LName=\"ngModel\" required>\r\n                    </div>\r\n                    <div *ngIf=\"LName.invalid && (LName.dirty || LName.touched)\" >\r\n                        <label  *ngIf=\"LName.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"userName.invalid && (userName.dirty || userName.touched)\">\r\n                        <label>Apovallo User name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"txtusername\" name=\"txtusername\" [(ngModel)]=\"txtusername\"  #userName=\"ngModel\" readonly required>\r\n                    </div>\r\n                    <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" >\r\n                        <label  *ngIf=\"userName.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          <!--  <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\r\n                        <label>Password</label>\r\n                        <input type=\"password\"  placeholder=\"Minimum of 4 Charactors\" class=\"form-control\" id=\"txtpassword\" name=\"txtpassword\" [(ngModel)]=\"txtpassword\"  #password=\"ngModel\" required>\r\n                    </div>\r\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" >\r\n                        <label  *ngIf=\"password.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"email.invalid && (email.dirty || email.touched)\">\r\n                        <label>Email</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"txtemail\" name=\"txtemail\" [(ngModel)]=\"txtemail\" readonly #email=\"ngModel\" required>\r\n                    </div>\r\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\r\n                        <label  *ngIf=\"email.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row m-t-10\">\r\n                <div class=\"col-lg-6\">\r\n                    <p><small> <a href=\"javascript:void(0)\" class=\"text-info\"></a> <a href=\"javascript:void(0)\" class=\"text-info\"></a>.</small></p>\r\n                </div>\r\n                <div class=\"col-lg-6 text-right\">\r\n                    <a href=\"javascript:void(0)\" class=\"text-info small\"></a>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Update User Detail</button>\r\n        </form>\r\n\r\n    </div>\r\n</div>\r\n<!--<div class=\" full-width\">\r\n    <div class=\"register-container mt-2 m-b-10 clearfix\">\r\n        <div class=\"m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up\">\r\n            <div class=\"col-md-2 no-padding d-flex align-items-center\">\r\n                <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\r\n            </div>\r\n            <div class=\"col-md-9 no-padding d-flex align-items-center\">\r\n                <p class=\"hinted-text small inline sm-p-t-10\">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-password/user-password.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-password/user-password.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-container mt-1 pt-1 full-height sm-p-t-30\">\r\n    <div class=\"d-flex justify-content-center flex-column full-height \">\r\n\r\n        <!--<img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">-->\r\n        <h4>Update your user Password</h4>\r\n        <p>\r\n\r\n        </p>\r\n        <form class=\"p-t-15\" role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"changePassword(registerForm.value)\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"oldPassword.invalid && (oldPassword.dirty || oldPassword.touched)\">\r\n                        <label>Old Password</label>\r\n                        <input type=\"password\"  class=\"form-control\" id=\"oldpassword\" name=\"oldpassword\" [(ngModel)]=\"oldpassword\"  #oldPassword=\"ngModel\" required>\r\n                    </div>\r\n                    <div *ngIf=\"oldPassword.invalid && (oldPassword.dirty || oldPassword.touched)\" >\r\n                        <label  *ngIf=\"oldPassword.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"password.invalid && (password.dirty || password.touched)\">\r\n                          <label>New Password</label>\r\n                          <input type=\"password\"  class=\"form-control\" id=\"txtpassword\" name=\"txtpassword\" [(ngModel)]=\"txtpassword\"  #password=\"ngModel\" required>\r\n                      </div>\r\n                      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" >\r\n                          <label  *ngIf=\"password.errors.required\" class=\"error\" >This field is required.</label>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div pgFormGroupDefault class=\"form-group form-group-default\" [class.has-error]=\"passwordConfirm.invalid && (passwordConfirm.dirty || passwordConfirm.touched)\">\r\n\r\n                        <label>Confirm New Password</label>\r\n\r\n\r\n                        <input type=\"password\" class=\"form-control\" id=\"confirmTxtPassword\" name=\"confirmTxtPassword\" [(ngModel)]=\"confirmTxtpassword\"  #passwordConfirm=\"ngModel\" required>\r\n                    </div>\r\n                    <div *ngIf=\"passwordConfirm.invalid && (passwordConfirm.dirty || passwordConfirm.touched)\" >\r\n                        <label  *ngIf=\"passwordConfirm.errors.required\" class=\"error\" >This field is required.</label>\r\n                    </div>\r\n                    <div *ngIf=\"passwordConfirm.value != password.value\">\r\n                        <label class=\"error\">Your new password and confirmation defers</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row m-t-10\">\r\n                <div class=\"col-lg-6\">\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"col-lg-6 text-right\">\r\n                    <a href=\"javascript:void(0)\" class=\"text-info small\"></a>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-cons m-t-10\" type=\"submit\" [class.disabled]=\"registerForm.invalid\">Update Password</button>\r\n        </form>\r\n\r\n    </div>\r\n</div>\r\n<!--<div class=\" full-width\">\r\n    <div class=\"register-container mt-2 m-b-10 clearfix\">\r\n        <div class=\"m-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up\">\r\n            <div class=\"col-md-2 no-padding d-flex align-items-center\">\r\n                <img src=\"assets/img/demo/pages_icon.png\" alt=\"\" class=\"\" pgRetina src1x=\"assets/img/demo/pages_icon.png\" src2x=\"assets/img/demo/pages_icon_2x.png\" width=\"60\" height=\"60\">\r\n            </div>\r\n            <div class=\"col-md-9 no-padding d-flex align-items-center\">\r\n                <p class=\"hinted-text small inline sm-p-t-10\">No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@page/layouts/simplywhite/simplywhite.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/@page/layouts/simplywhite/simplywhite.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlL2xheW91dHMvc2ltcGx5d2hpdGUvc2ltcGx5d2hpdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@page/layouts/simplywhite/simplywhite.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@page/layouts/simplywhite/simplywhite.component.ts ***!
  \********************************************************************/
/*! exports provided: SimplywhiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplywhiteComponent", function() { return SimplywhiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SimplywhiteComponent = /** @class */ (function () {
    function SimplywhiteComponent() {
    }
    SimplywhiteComponent.prototype.ngOnInit = function () {
    };
    SimplywhiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simplywhite',
            template: __importDefault(__webpack_require__(/*! raw-loader!./simplywhite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@page/layouts/simplywhite/simplywhite.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./simplywhite.component.scss */ "./src/app/@page/layouts/simplywhite/simplywhite.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SimplywhiteComponent);
    return SimplywhiteComponent;
}());



/***/ }),

/***/ "./src/app/@pages/animations/dropdown-animations.ts":
/*!**********************************************************!*\
  !*** ./src/app/@pages/animations/dropdown-animations.ts ***!
  \**********************************************************/
/*! exports provided: dropDownAnimation, scaleInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropDownAnimation", function() { return dropDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function() { return scaleInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var dropDownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dropDownAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => bottom', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => top', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 100%'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms 100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])
]);
var scaleInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleInAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '0',
        opacity: '0',
        transform: 'scale(0.7)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        display: 'block',
        opacity: '1',
        transform: 'scale(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('140ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('140ms ease-out'))
]);


/***/ }),

/***/ "./src/app/@pages/animations/fade-animations.ts":
/*!******************************************************!*\
  !*** ./src/app/@pages/animations/fade-animations.ts ***!
  \******************************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0.4, 0.0, 1, 1)'))
]);


/***/ }),

/***/ "./src/app/@pages/animations/tag-animations.ts":
/*!*****************************************************!*\
  !*** ./src/app/@pages/animations/tag-animations.ts ***!
  \*****************************************************/
/*! exports provided: tagAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagAnimation", function() { return tagAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var tagAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tagAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms linear')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms linear')])
]);


/***/ }),

/***/ "./src/app/@pages/components/breadcrumb/breadcrumb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/@pages/components/breadcrumb/breadcrumb.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@pages/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-breadcrumb',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/@pages/components/breadcrumb/breadcrumb.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/card-social/card-social.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/@pages/components/card-social/card-social.component.ts ***!
  \************************************************************************/
/*! exports provided: pgCardSocial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCardSocial", function() { return pgCardSocial; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var pgCardSocial = /** @class */ (function () {
    function pgCardSocial() {
        this._title = '';
        this._titleClass = 'text-complete';
        this._type = 'text';
        this._comments = '';
        this._likes = '';
        this._body = '';
        this._timestamp = '';
        this._source = '';
        this._image = '';
        this._author = '';
        this._activity = '';
        this._location = '';
        this._additionalClasses = '';
        this.classList = '';
    }
    Object.defineProperty(pgCardSocial.prototype, "Title", {
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "TitleClass", {
        set: function (value) {
            this._titleClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Type", {
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Comments", {
        set: function (value) {
            this._comments = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Likes", {
        set: function (value) {
            this._likes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Body", {
        set: function (value) {
            this._body = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Timestamp", {
        set: function (value) {
            this._timestamp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Source", {
        set: function (value) {
            this._source = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Author", {
        set: function (value) {
            this._author = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Activity", {
        set: function (value) {
            this._activity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Image", {
        set: function (value) {
            this._image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "Location", {
        set: function (value) {
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCardSocial.prototype, "AdditionalClasses", {
        set: function (value) {
            this._additionalClasses = value;
        },
        enumerable: true,
        configurable: true
    });
    pgCardSocial.prototype.ngOnInit = function () {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hostContent', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgCardSocial.prototype, "_hostContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('CustomBody', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgCardSocial.prototype, "CustomBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('AuthorAvatar', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgCardSocial.prototype, "AuthorAvatar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], pgCardSocial.prototype, "classList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgCardSocial.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Title", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "TitleClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Comments", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Likes", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Body", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Timestamp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Source", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Author", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Activity", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Image", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "Location", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCardSocial.prototype, "AdditionalClasses", null);
    pgCardSocial = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pgcardsocial',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __importDefault(__webpack_require__(/*! raw-loader!./card-social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/card-social/card-social.component.html")).default
        })
    ], pgCardSocial);
    return pgCardSocial;
}());



/***/ }),

/***/ "./src/app/@pages/components/card-social/card-social.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@pages/components/card-social/card-social.module.ts ***!
  \*********************************************************************/
/*! exports provided: pgCardSocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCardSocialModule", function() { return pgCardSocialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-social.component */ "./src/app/@pages/components/card-social/card-social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// import { pgRetinaDirective } from '../retina/retina.directive';
var pgCardSocialModule = /** @class */ (function () {
    function pgCardSocialModule() {
    }
    pgCardSocialModule_1 = pgCardSocialModule;
    pgCardSocialModule.forRoot = function () {
        return {
            ngModule: pgCardSocialModule_1
        };
    };
    var pgCardSocialModule_1;
    pgCardSocialModule = pgCardSocialModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_card_social_component__WEBPACK_IMPORTED_MODULE_2__["pgCardSocial"]],
            exports: [_card_social_component__WEBPACK_IMPORTED_MODULE_2__["pgCardSocial"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        })
    ], pgCardSocialModule);
    return pgCardSocialModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/@pages/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: pgCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCard", function() { return pgCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var pgCard = /** @class */ (function () {
    function pgCard() {
        this._isCollapsed = false;
        this._isMaximixed = false;
        this._isLoading = false;
        this._minimalHeader = false;
        this._message = '';
        this._messageType = 'danger';
        this._messageVisible = false;
        this._progressType = 'circle';
        this._progressColor = '';
        this._showTools = true;
        this._close_card = false;
        this._refresh = true;
        this._refreshColor = '';
        this._close = true;
        this._toggle = true;
        this._maximize = true;
        this._timeout = 0;
        this._titleText = '';
        this._type = '';
        this._extraHeaderClass = '';
        this._extraBodyClass = '';
        this._additionalClasses = '';
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(pgCard.prototype, "Title", {
        get: function () {
            return this._titleText;
        },
        set: function (value) {
            this._titleText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Type", {
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "MinimalHeader", {
        set: function (value) {
            this._minimalHeader = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "ProgressType", {
        set: function (value) {
            this._progressType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "ProgressColor", {
        set: function (value) {
            this._progressColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Refresh", {
        set: function (value) {
            this._refresh = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "RefreshColor", {
        set: function (value) {
            this._refreshColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Maximize", {
        set: function (value) {
            this._maximize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Close", {
        set: function (value) {
            this._close = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Toggle", {
        set: function (value) {
            this._toggle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "HeaderClass", {
        set: function (value) {
            this._extraHeaderClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "BodyClass", {
        set: function (value) {
            this._extraBodyClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "AdditionalClasses", {
        set: function (value) {
            this._additionalClasses = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Controls", {
        set: function (value) {
            this._showTools = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "ShowMessage", {
        set: function (value) {
            this._messageVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Message", {
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "Loading", {
        set: function (value) {
            this._isLoading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCard.prototype, "TimeOut", {
        set: function (value) {
            this._timeout = value;
        },
        enumerable: true,
        configurable: true
    });
    pgCard.prototype.toggle = function () {
        this._isCollapsed = this._isCollapsed === true ? false : true;
    };
    pgCard.prototype.maximize = function () {
        var nativeElement = this._hostContent.nativeElement;
        if (this._isMaximixed) {
            this._isMaximixed = false;
            nativeElement.style.left = null;
            nativeElement.style.top = null;
        }
        else {
            this._isMaximixed = true;
            var pagecontainer = document.querySelector('.content');
            var rect = pagecontainer.getBoundingClientRect();
            var elementRect = nativeElement.getBoundingClientRect();
            var style_1 = window.getComputedStyle(pagecontainer);
            nativeElement.style.left = parseFloat(style_1['marginLeft']) + parseFloat(style_1['paddingLeft']) + rect.left + 'px';
            nativeElement.style.top = parseFloat(style_1['padding-top']) + rect.top + 'px';
        }
    };
    pgCard.prototype.alertDismiss = function () {
        this._messageVisible = false;
    };
    pgCard.prototype.refresh = function () {
        var _this = this;
        if (!this._isLoading) {
            this._isLoading = true;
            this.onRefresh.emit();
        }
        if (this._timeout > 0) {
            setTimeout(function () {
                _this._isLoading = false;
            }, this._timeout);
        }
    };
    pgCard.prototype.close = function () {
        this._close_card = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hostContent', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgCard.prototype, "_hostContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('minimalCircleLoading', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgCard.prototype, "minimalCircleLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('minimalCircleLoadingTrigger', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgCard.prototype, "minimalCircleLoadingTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('CardTitle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgCard.prototype, "CardTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('CardExtraControls', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgCard.prototype, "CardExtraControls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "Title", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "Type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "MinimalHeader", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "ProgressType", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "ProgressColor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "Refresh", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "RefreshColor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "Maximize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "Close", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "Toggle", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "HeaderClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "BodyClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "AdditionalClasses", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "Controls", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "ShowMessage", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgCard.prototype, "Message", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCard.prototype, "Loading", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], pgCard.prototype, "TimeOut", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgCard.prototype, "onRefresh", void 0);
    pgCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pgcard',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __importDefault(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/card/card.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapseState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '0',
                        height: 0,
                        paddingBottom: '0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '1',
                        height: '*',
                        paddingBottom: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('125ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '0',
                        visibility: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '1',
                        visibility: 'visible'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out'))
                ])
            ]
        })
    ], pgCard);
    return pgCard;
}());



/***/ }),

/***/ "./src/app/@pages/components/card/card.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/@pages/components/card/card.module.ts ***!
  \*******************************************************/
/*! exports provided: pgCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCardModule", function() { return pgCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/@pages/components/card/card.component.ts");
/* harmony import */ var _progress_progress_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress/progress.module */ "./src/app/@pages/components/progress/progress.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var pgCardModule = /** @class */ (function () {
    function pgCardModule() {
    }
    pgCardModule_1 = pgCardModule;
    pgCardModule.forRoot = function () {
        return {
            ngModule: pgCardModule_1
        };
    };
    var pgCardModule_1;
    pgCardModule = pgCardModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["pgCard"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["pgCard"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _progress_progress_module__WEBPACK_IMPORTED_MODULE_3__["ProgressModule"]]
        })
    ], pgCardModule);
    return pgCardModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/collapse/collapse.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/collapse/collapse.component.ts ***!
  \******************************************************************/
/*! exports provided: pgCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCollapseComponent", function() { return pgCollapseComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collapseset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapseset.component */ "./src/app/@pages/components/collapse/collapseset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgCollapseComponent = /** @class */ (function () {
    function pgCollapseComponent(_collapseSet, _elementRef) {
        this._collapseSet = _collapseSet;
        this._elementRef = _elementRef;
        this._disabled = false;
        this._active = false;
        this._el = this._elementRef.nativeElement;
        this._collapseSet.addTab(this);
    }
    Object.defineProperty(pgCollapseComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCollapseComponent.prototype, "Active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            var active = value;
            if (this._active === active) {
                return;
            }
            if (!this.Disabled) {
                this._active = active;
            }
        },
        enumerable: true,
        configurable: true
    });
    pgCollapseComponent.prototype.clickHeader = function ($event) {
        this.Active = !this.Active;
        /** trigger host collapseSet click event */
        this._collapseSet.pgClick(this);
    };
    pgCollapseComponent.ctorParameters = function () { return [
        { type: _collapseset_component__WEBPACK_IMPORTED_MODULE_2__["pgCollapsesetComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], pgCollapseComponent.prototype, "Title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCollapseComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCollapseComponent.prototype, "Active", null);
    pgCollapseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-collapse',
            template: __importDefault(__webpack_require__(/*! raw-loader!./collapse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/collapse/collapse.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapseState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: '0',
                        height: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: '1',
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('125ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('125ms ease-out'))
                ])
            ],
            host: {
                '[class.card]': 'true',
                '[class.card-default]': 'true',
                '[class.m-b-0]': 'true'
            }
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        __metadata("design:paramtypes", [_collapseset_component__WEBPACK_IMPORTED_MODULE_2__["pgCollapsesetComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], pgCollapseComponent);
    return pgCollapseComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/collapse/collapse.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/collapse/collapse.module.ts ***!
  \***************************************************************/
/*! exports provided: PG_COLLAPSE_DIRECTIVES, pgCollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PG_COLLAPSE_DIRECTIVES", function() { return PG_COLLAPSE_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCollapseModule", function() { return pgCollapseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collapse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse.component */ "./src/app/@pages/components/collapse/collapse.component.ts");
/* harmony import */ var _collapseset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapseset.component */ "./src/app/@pages/components/collapse/collapseset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PG_COLLAPSE_DIRECTIVES = [_collapseset_component__WEBPACK_IMPORTED_MODULE_3__["pgCollapsesetComponent"], _collapse_component__WEBPACK_IMPORTED_MODULE_2__["pgCollapseComponent"]];
var pgCollapseModule = /** @class */ (function () {
    function pgCollapseModule() {
    }
    pgCollapseModule_1 = pgCollapseModule;
    pgCollapseModule.forRoot = function () {
        return {
            ngModule: pgCollapseModule_1
        };
    };
    var pgCollapseModule_1;
    pgCollapseModule = pgCollapseModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: PG_COLLAPSE_DIRECTIVES,
            exports: PG_COLLAPSE_DIRECTIVES,
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        })
    ], pgCollapseModule);
    return pgCollapseModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/collapse/collapseset.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@pages/components/collapse/collapseset.component.ts ***!
  \*********************************************************************/
/*! exports provided: pgCollapsesetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgCollapsesetComponent", function() { return pgCollapsesetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var pgCollapsesetComponent = /** @class */ (function () {
    function pgCollapsesetComponent() {
        this._accordion = false;
        this._horizontal = true;
        this.panels = [];
    }
    Object.defineProperty(pgCollapsesetComponent.prototype, "Accordion", {
        get: function () {
            return this._accordion;
        },
        set: function (value) {
            this._accordion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgCollapsesetComponent.prototype, "Horizontal", {
        get: function () {
            return this._horizontal;
        },
        set: function (value) {
            this._horizontal = value;
        },
        enumerable: true,
        configurable: true
    });
    pgCollapsesetComponent.prototype.pgClick = function (collapse) {
        var _this = this;
        if (this.Accordion) {
            this.panels.map(function (item, index) {
                var curIndex = _this.panels.indexOf(collapse);
                if (index !== curIndex) {
                    item.Active = false;
                }
            });
        }
    };
    pgCollapsesetComponent.prototype.addTab = function (collapse) {
        this.panels.push(collapse);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCollapsesetComponent.prototype, "Accordion", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgCollapsesetComponent.prototype, "Horizontal", null);
    pgCollapsesetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-collapseset',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"card-group\" [class.horizontal]=\"Horizontal\">\n      <ng-content></ng-content>\n    </div>\n  "
        })
    ], pgCollapsesetComponent);
    return pgCollapsesetComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/container/container.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/@pages/components/container/container.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/components/container/container.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@pages/components/container/container.component.ts ***!
  \********************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this._enableHorizontalContainer = false;
        this._extraClass = '';
        this._extraHorizontalClass = '';
    }
    Object.defineProperty(ContainerComponent.prototype, "extraClass", {
        set: function (value) {
            this._extraClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerComponent.prototype, "extraHorizontalClass", {
        set: function (value) {
            this._extraHorizontalClass = value;
        },
        enumerable: true,
        configurable: true
    });
    ContainerComponent.prototype.ngOnInit = function () {
        this._enableHorizontalContainer = pg.isHorizontalLayout;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ContainerComponent.prototype, "extraClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ContainerComponent.prototype, "extraHorizontalClass", null);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-container',
            template: __importDefault(__webpack_require__(/*! raw-loader!./container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/container/container.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./container.component.scss */ "./src/app/@pages/components/container/container.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/container/page-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@pages/components/container/page-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: pageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageContainer", function() { return pageContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var pageContainer = /** @class */ (function () {
    function pageContainer(toggler) {
        this.toggler = toggler;
    }
    pageContainer.prototype.triggerMouseOverCall = function () {
        this.toggler.triggerPageContainerHover(true);
    };
    pageContainer.ctorParameters = function () { return [
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('tap', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], pageContainer.prototype, "triggerMouseOverCall", null);
    pageContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-container',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                class: 'page-container'
            },
            styles: [__importDefault(__webpack_require__(/*! ./page-container.scss */ "./src/app/@pages/components/container/page-container.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], pageContainer);
    return pageContainer;
}());



/***/ }),

/***/ "./src/app/@pages/components/container/page-container.scss":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/container/page-container.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-container {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvY29udGFpbmVyL0M6XFxmcm9udGVuZFxcYW5ndWxhci9zcmNcXGFwcFxcQHBhZ2VzXFxjb21wb25lbnRzXFxjb250YWluZXJcXHBhZ2UtY29udGFpbmVyLnNjc3MiLCJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL2NvbnRhaW5lci9wYWdlLWNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvY29udGFpbmVyL3BhZ2UtY29udGFpbmVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCJwYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/@pages/components/cs-select/option.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/option.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgOptionComponent", function() { return pgOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.component */ "./src/app/@pages/components/cs-select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgOptionComponent = /** @class */ (function () {
    function pgOptionComponent(_Select) {
        this._Select = _Select;
        this._disabled = false;
    }
    Object.defineProperty(pgOptionComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value === value) {
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            if (this._label === value) {
                return;
            }
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgOptionComponent.prototype.ngOnInit = function () {
        this._Select.addOption(this);
    };
    pgOptionComponent.prototype.ngOnDestroy = function () {
        this._Select.removeOption(this);
    };
    pgOptionComponent.ctorParameters = function () { return [
        { type: _select_component__WEBPACK_IMPORTED_MODULE_2__["pgSelectFXComponent"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('OptionTemplate', { static: true }),
        __metadata("design:type", Object)
    ], pgOptionComponent.prototype, "OptionTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Label", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgOptionComponent.prototype, "Disabled", null);
    pgOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-selectfx-option',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [_select_component__WEBPACK_IMPORTED_MODULE_2__["pgSelectFXComponent"]])
    ], pgOptionComponent);
    return pgOptionComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/option.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/option.pipe.ts ***!
  \************************************************************/
/*! exports provided: OptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionPipe", function() { return OptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/* tslint:disable:no-any */

var OptionPipe = /** @class */ (function () {
    function OptionPipe() {
    }
    // TODO: enable type checking for this method
    OptionPipe.prototype.transform = function (options, value) {
        if (value.searchText) {
            var _options = options.filter(function (option) { return option.Label && option.Label.toLowerCase().indexOf(value.searchText.toLowerCase()) !== -1; });
            if (value.tags) {
                _options = options.filter(function (option) { return option.Label && option.Label.toLowerCase() === value.searchText.toLowerCase(); });
            }
            if (_options.length) {
                return _options;
            }
            else {
                return [
                    {
                        Value: value.value,
                        _value: value.value,
                        Disabled: value.disabled,
                        _disabled: value.disabled,
                        Label: value.notFoundContent,
                        _label: value.notFoundContent
                    }
                ];
            }
        }
        else {
            return options;
        }
    };
    OptionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'OptionPipe' })
    ], OptionPipe);
    return OptionPipe;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/select.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/select.component.ts ***!
  \*****************************************************************/
/*! exports provided: pgSelectFXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectFXComponent", function() { return pgSelectFXComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/app/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/tag-animations */ "./src/app/@pages/animations/tag-animations.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./option.pipe */ "./src/app/@pages/components/cs-select/option.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * complex but work well
 * TODO: rebuild latter
 */






//import { LocaleService } from '../locale/index';


var pgSelectFXComponent = /** @class */ (function () {
    function pgSelectFXComponent(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._allowClear = false;
        this._disabled = false;
        this._isTags = false;
        this._isMultiple = false;
        this._keepUnListOptions = false;
        this._isOpen = false;
        this._prefixCls = 'pg-select';
        this._classList = [];
        this._dropDownPrefixCls = this._prefixCls + "-dropdown";
        this._selectionPrefixCls = this._prefixCls + "-selection";
        this._placeholder = 'placeholder';
        this._notFoundContent = 'No Content';
        this._searchText = '';
        this._triggerWidth = 0;
        this._selectedOptions = new Set();
        this._options = [];
        this._cacheOptions = [];
        this._filterOptions = [];
        this._tagsOptions = [];
        this._isMultiInit = false;
        this._dropDownPosition = 'bottom';
        this._composing = false;
        this._backDropStyles = {
            transform: 'scale3d(1,1,1)'
        };
        this._openBackdrop = false;
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.SearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.OpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.ScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.Filter = true;
        this.MaxMultiple = Infinity;
        /** new -option insert or new tags insert */
        this.addOption = function (option) {
            _this._options.push(option);
            if (!_this._isTags) {
                if (option.Value) {
                    _this.updateSelectedOption(_this._value);
                }
                else {
                    _this.forceUpdateSelectedOption(_this._value);
                }
            }
        };
        /** cancel select multiple option */
        this.unSelectMultipleOption = function (option, $event, emitChange) {
            if (emitChange === void 0) { emitChange = true; }
            _this._operatingMultipleOption = option;
            _this._selectedOptions.delete(option);
            if (emitChange) {
                _this.emitMultipleOptions();
            }
            // 对Tag进行特殊处理
            if (_this._isTags && _this._options.indexOf(option) !== -1 && _this._tagsOptions.indexOf(option) !== -1) {
                _this.removeOption(option);
                _this._tagsOptions.splice(_this._tagsOptions.indexOf(option), 1);
            }
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        };
        this._el = this._elementRef.nativeElement;
    }
    pgSelectFXComponent_1 = pgSelectFXComponent;
    Object.defineProperty(pgSelectFXComponent.prototype, "AllowClear", {
        get: function () {
            return this._allowClear;
        },
        set: function (value) {
            this._allowClear = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "KeepUnListOptions", {
        get: function () {
            return this._keepUnListOptions;
        },
        set: function (value) {
            this._keepUnListOptions = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Mode", {
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Multiple", {
        get: function () {
            return this._isMultiple;
        },
        set: function (value) {
            this._isMultiple = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "PlaceHolder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "NotFoundContent", {
        get: function () {
            return this._notFoundContent;
        },
        set: function (value) {
            this._notFoundContent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = { large: 'lg', small: 'sm' }[value];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Tags", {
        get: function () {
            return this._isTags;
        },
        set: function (value) {
            var isTags = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this._isTags = isTags;
            this.Multiple = isTags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this.closeDropDown();
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectFXComponent.prototype, "Open", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            var isOpen = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            if (this._isOpen === isOpen) {
                setTimeout(function () {
                    _this._backDropStyles = {
                        transform: 'scale3d(1,1,1)'
                    };
                });
                return;
            }
            if (isOpen) {
                this.scrollToActive();
                this._setTriggerWidth();
                var contentHeight = this.csOptions.nativeElement.offsetHeight;
                var originalHeight = this.placeHolder.nativeElement.offsetHeight;
                var contentWidth = this.csOptions.nativeElement.offsetWidth;
                var originalWidth = this.placeHolder.nativeElement.offsetWidth;
                var scaleV = contentHeight / originalHeight;
                var scaleH = contentWidth > originalWidth ? contentWidth / originalWidth : 1.05;
                setTimeout(function () {
                    _this._openBackdrop = true;
                    _this._backDropStyles = {
                        transform: 'scale3d(' + 1 + ', ' + scaleV + ', 1)'
                    };
                });
            }
            this._isOpen = isOpen;
            this.OpenChange.emit(this._isOpen);
            this.setClassMap();
            if (this._isOpen) {
                setTimeout(function () {
                    _this.checkDropDownScroll();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /** -option remove or tags remove */
    pgSelectFXComponent.prototype.removeOption = function (option) {
        this._options.splice(this._options.indexOf(option), 1);
        if (!this._isTags) {
            this.forceUpdateSelectedOption(this._value);
        }
    };
    /** dropdown position changed */
    pgSelectFXComponent.prototype.onPositionChange = function (position) {
        this._dropDownPosition = position.connectionPair.originY;
    };
    pgSelectFXComponent.prototype.compositionStart = function () {
        this._composing = true;
    };
    pgSelectFXComponent.prototype.compositionEnd = function () {
        this._composing = false;
    };
    /** clear single selected option */
    pgSelectFXComponent.prototype.clearSelect = function ($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._selectedOption = null;
        this.Value = null;
        this.onChange(null);
    };
    /** click dropdown option by user */
    pgSelectFXComponent.prototype.clickOption = function (option, $event) {
        if (!option) {
            return;
        }
        this.chooseOption(option, true, $event);
        this.closeDropDown();
    };
    /** choose option */
    pgSelectFXComponent.prototype.chooseOption = function (option, isUserClick, $event) {
        if (isUserClick === void 0) { isUserClick = false; }
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._activeFilterOption = option;
        if (option && !option.Disabled) {
            if (!this.Multiple) {
                this._selectedOption = option;
                this._value = option.Value;
                if (isUserClick) {
                    this.onChange(option.Value);
                }
            }
            else {
                if (isUserClick) {
                    this.isInSet(this._selectedOptions, option) ? this.unSelectMultipleOption(option) : this.selectMultipleOption(option);
                }
            }
        }
    };
    pgSelectFXComponent.prototype.updateWidth = function (element, text) {
        var _this = this;
        if (text) {
            /** wait for scroll width change */
            setTimeout(function (_) {
                _this._renderer.setStyle(element, 'width', element.scrollWidth + "px");
            });
        }
        else {
            this._renderer.removeStyle(element, 'width');
        }
    };
    /** determine if option in set */
    pgSelectFXComponent.prototype.isInSet = function (set, option) {
        return Array.from(set).find(function (data) { return data.Value === option.Value; });
    };
    /** select multiple option */
    pgSelectFXComponent.prototype.selectMultipleOption = function (option, $event) {
        /** if tags do push to tag option */
        if (this._isTags && this._options.indexOf(option) === -1 && this._tagsOptions.indexOf(option) === -1) {
            this.addOption(option);
            this._tagsOptions.push(option);
        }
        this._operatingMultipleOption = option;
        if (this._selectedOptions.size < this.MaxMultiple) {
            this._selectedOptions.add(option);
        }
        this.emitMultipleOptions();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    /** emit multiple options */
    pgSelectFXComponent.prototype.emitMultipleOptions = function () {
        if (this._isMultiInit) {
            return;
        }
        var arrayOptions = Array.from(this._selectedOptions);
        this._value = arrayOptions.map(function (item) { return item.Value; });
        this.onChange(this._value);
    };
    /** update selected option when add remove option etc */
    pgSelectFXComponent.prototype.updateSelectedOption = function (currentModelValue, triggerByNgModel) {
        var _this = this;
        if (triggerByNgModel === void 0) { triggerByNgModel = false; }
        if (currentModelValue == null) {
            return;
        }
        if (this.Multiple) {
            var selectedOptions = this._options.filter(function (item) {
                return item != null && currentModelValue.indexOf(item.Value) !== -1;
            });
            if ((this.KeepUnListOptions || this.Tags) && !triggerByNgModel) {
                var _selectedOptions_1 = Array.from(this._selectedOptions);
                selectedOptions.forEach(function (option) {
                    var _exist = _selectedOptions_1.some(function (item) { return item._value === option._value; });
                    if (!_exist) {
                        _this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(function (option) {
                    _this._selectedOptions.add(option);
                });
            }
        }
        else {
            var selectedOption = this._options.filter(function (item) {
                return item != null && item.Value === currentModelValue;
            });
            this.chooseOption(selectedOption[0]);
        }
    };
    pgSelectFXComponent.prototype.forceUpdateSelectedOption = function (value) {
        var _this = this;
        /** trigger dirty check */
        setTimeout(function (_) {
            _this.updateSelectedOption(value);
        });
    };
    Object.defineProperty(pgSelectFXComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._updateValue(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSelectFXComponent.prototype.clearAllSelectedOption = function (emitChange) {
        var _this = this;
        if (emitChange === void 0) { emitChange = true; }
        this._selectedOptions.forEach(function (item) {
            _this.unSelectMultipleOption(item, null, emitChange);
        });
    };
    pgSelectFXComponent.prototype.handleKeyEnterEvent = function (event) {
        /** when composing end */
        if (!this._composing && this._isOpen) {
            event.preventDefault();
            event.stopPropagation();
            this.updateFilterOption(false);
            this.clickOption(this._activeFilterOption);
        }
    };
    pgSelectFXComponent.prototype.handleKeyBackspaceEvent = function (event) {
        if (!this._searchText && !this._composing && this._isMultiple) {
            event.preventDefault();
            var lastOption = Array.from(this._selectedOptions).pop();
            this.unSelectMultipleOption(lastOption);
        }
    };
    pgSelectFXComponent.prototype.handleKeyDownEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.nextOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectFXComponent.prototype.handleKeyUpEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.preOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectFXComponent.prototype.preOption = function (option, options) {
        return options[options.indexOf(option) - 1] || options[options.length - 1];
    };
    pgSelectFXComponent.prototype.nextOption = function (option, options) {
        return options[options.indexOf(option) + 1] || options[0];
    };
    pgSelectFXComponent.prototype.clearSearchText = function () {
        this._searchText = '';
        this.updateFilterOption();
    };
    pgSelectFXComponent.prototype.updateFilterOption = function (updateActiveFilter) {
        if (updateActiveFilter === void 0) { updateActiveFilter = true; }
        if (this.Filter) {
            this._filterOptions = new _option_pipe__WEBPACK_IMPORTED_MODULE_7__["OptionPipe"]().transform(this._options, {
                searchText: this._searchText,
                tags: this._isTags,
                notFoundContent: this._isTags ? this._searchText : this._notFoundContent,
                disabled: !this._isTags,
                value: this._isTags ? this._searchText : 'disabled'
            });
        }
        else {
            this._filterOptions = this._options;
        }
        /** TODO: cause pre & next key selection not work */
        if (updateActiveFilter && !this._selectedOption) {
            this._activeFilterOption = this._filterOptions[0];
        }
    };
    pgSelectFXComponent.prototype.onSearchChange = function (searchValue) {
        this.SearchChange.emit(searchValue);
    };
    pgSelectFXComponent.prototype.onClick = function (e) {
        e.preventDefault();
        if (!this._disabled) {
            this.Open = !this.Open;
        }
    };
    pgSelectFXComponent.prototype.onKeyDown = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && this.Open) {
            this.Open = false;
            return;
        }
        if ((keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DOWN_ARROW"] && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) || this.Open) {
            return;
        }
        e.preventDefault();
        if (!this._disabled) {
            this.Open = true;
        }
    };
    pgSelectFXComponent.prototype.closeDropDown = function () {
        var _this = this;
        if (!this.Open) {
            return;
        }
        this._openBackdrop = false;
        this._backDropStyles = {
            transform: 'scale3d(1,1,1)'
        };
        setTimeout(function () {
            _this.onTouched();
            _this.clearSearchText();
            _this.Open = false;
        }, 300);
    };
    pgSelectFXComponent.prototype.setClassMap = function () {
        var _a;
        var _this = this;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this._prefixCls,
            this._mode === 'combobox' && this._prefixCls + "-combobox",
            !this._disabled && this._prefixCls + "-enabled",
            this._disabled && this._prefixCls + "-disabled",
            this._isOpen && this._prefixCls + "-open",
            this._size && this._prefixCls + "-" + this._size
        ].filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
        this._selectionClassMap = (_a = {},
            _a[this._selectionPrefixCls] = true,
            _a[this._selectionPrefixCls + "--single"] = !this.Multiple,
            _a[this._selectionPrefixCls + "--multiple"] = this.Multiple,
            _a);
    };
    pgSelectFXComponent.prototype.setDropDownClassMap = function () {
        // setTimeout(()=>{
        //   this._dropDownClassMap = {
        //     [' cs-active']                               : true,
        //   }
        // },300);
    };
    pgSelectFXComponent.prototype.scrollToActive = function () {
        var _this = this;
        /** wait for dropdown display */
        setTimeout(function (_) {
            if (_this._activeFilterOption && _this._activeFilterOption.Value) {
                var index = _this._filterOptions.findIndex(function (option) { return option.Value === _this._activeFilterOption.Value; });
                try {
                    var scrollPane = _this.dropdownUl.nativeElement.children[index];
                    // TODO: scrollIntoViewIfNeeded is not a standard API, why doing so?
                    /* tslint:disable-next-line:no-any */
                    scrollPane.scrollIntoViewIfNeeded(false);
                }
                catch (e) { }
            }
        });
    };
    pgSelectFXComponent.prototype.flushComponentState = function () {
        this.updateFilterOption();
        if (!this.Multiple) {
            this.updateSelectedOption(this._value);
        }
        else {
            if (this._value) {
                this.updateSelectedOption(this._value);
            }
        }
    };
    pgSelectFXComponent.prototype._setTriggerWidth = function () {
        var _this = this;
        this._triggerWidth = this._getTriggerRect().width;
        var rect = this._getTriggerRect();
        /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
        setTimeout(function () {
            if (_this._cdkOverlay && _this._cdkOverlay.overlayRef) {
                _this._cdkOverlay.overlayRef.updateSize({
                    width: _this._triggerWidth,
                    height: rect.height
                });
            }
        });
    };
    pgSelectFXComponent.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    pgSelectFXComponent.prototype.writeValue = function (value) {
        this._updateValue(value, false);
    };
    pgSelectFXComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgSelectFXComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgSelectFXComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgSelectFXComponent.prototype.dropDownScroll = function (ul) {
        if (ul && ul.scrollHeight - ul.scrollTop === ul.clientHeight) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectFXComponent.prototype.checkDropDownScroll = function () {
        if (this.dropdownUl && this.dropdownUl.nativeElement.scrollHeight === this.dropdownUl.nativeElement.clientHeight) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectFXComponent.prototype.ngAfterContentInit = function () {
        if (this._value != null) {
            this.flushComponentState();
        }
    };
    pgSelectFXComponent.prototype.ngOnInit = function () {
        this.updateFilterOption();
        this.setClassMap();
        this.setDropDownClassMap();
    };
    pgSelectFXComponent.prototype.ngAfterContentChecked = function () {
        if (this._cacheOptions !== this._options) {
            /** update filter option after every content check cycle */
            this.updateFilterOption();
            this._cacheOptions = this._options;
        }
        else {
            this.updateFilterOption(false);
        }
    };
    pgSelectFXComponent.prototype._updateValue = function (value, emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        if (this._value === value) {
            return;
        }
        if (value == null && this.Multiple) {
            this._value = [];
        }
        else {
            this._value = value;
        }
        if (!this.Multiple) {
            if (value == null) {
                this._selectedOption = null;
            }
            else {
                this.updateSelectedOption(value);
            }
        }
        else {
            if (value) {
                if (value.length === 0) {
                    this.clearAllSelectedOption(emitChange);
                }
                else {
                    this.updateSelectedOption(value, true);
                }
            }
            else if (value == null) {
                this.clearAllSelectedOption(emitChange);
            }
        }
    };
    var pgSelectFXComponent_1;
    pgSelectFXComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('searchInput', { static: false }),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "searchInputElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trigger', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dropdownUl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "dropdownUl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('csOptions', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "csOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('placeHolder', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectFXComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "SearchChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "OpenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectFXComponent.prototype, "ScrollToBottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "Filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectFXComponent.prototype, "MaxMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"], { static: true }),
        __metadata("design:type", _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"])
    ], pgSelectFXComponent.prototype, "_cdkOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "AllowClear", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "KeepUnListOptions", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "Mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Multiple", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "PlaceHolder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "NotFoundContent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectFXComponent.prototype, "Size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Tags", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectFXComponent.prototype, "Open", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectFXComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectFXComponent.prototype, "onKeyDown", null);
    pgSelectFXComponent = pgSelectFXComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'pg-select-fx',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return pgSelectFXComponent_1; }),
                    multi: true
                }
            ],
            animations: [_animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__["dropDownAnimation"], _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__["tagAnimation"]],
            template: __importDefault(__webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/cs-select/select.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./style/index.scss */ "./src/app/@pages/components/cs-select/style/index.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]])
    ], pgSelectFXComponent);
    return pgSelectFXComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/select.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/select.module.ts ***!
  \**************************************************************/
/*! exports provided: pgSelectfx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectfx", function() { return pgSelectfx; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option.component */ "./src/app/@pages/components/cs-select/option.component.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option.pipe */ "./src/app/@pages/components/cs-select/option.pipe.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.component */ "./src/app/@pages/components/cs-select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var pgSelectfx = /** @class */ (function () {
    function pgSelectfx() {
    }
    pgSelectfx = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]],
            declarations: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectFXComponent"]],
            exports: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectFXComponent"]]
        })
    ], pgSelectfx);
    return pgSelectfx;
}());



/***/ }),

/***/ "./src/app/@pages/components/cs-select/style/index.scss":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/cs-select/style/index.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pg-select {\n  outline: 0;\n}\n.pg-select > *:focus {\n  outline: 0;\n}\n.form-group-default-selectFx .cs-backdrop {\n  border: 0;\n}\n.form-control.cs-select:not(.cs-active) {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvY3Mtc2VsZWN0L3N0eWxlL0M6XFxmcm9udGVuZFxcYW5ndWxhci9zcmNcXGFwcFxcQHBhZ2VzXFxjb21wb25lbnRzXFxjcy1zZWxlY3RcXHN0eWxlXFxpbmRleC5zY3NzIiwic3JjL2FwcC9AcGFnZXMvY29tcG9uZW50cy9jcy1zZWxlY3Qvc3R5bGUvaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7QUNBSjtBRENLO0VBQ0csVUFBQTtBQ0NSO0FESUk7RUFDSSxTQUFBO0FDRFI7QURLQTtFQUNJLGFBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL2NzLXNlbGVjdC9zdHlsZS9pbmRleC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9TdHlsZSBGaXhlcyBvbmx5IGZvciBhbmd1bGFyXG4ucGctc2VsZWN0e1xuICAgIG91dGxpbmU6IDA7XG4gICAgICYgPiAqOmZvY3Vze1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbn1cblxuLmZvcm0tZ3JvdXAtZGVmYXVsdC1zZWxlY3RGeHtcbiAgICAuY3MtYmFja2Ryb3B7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICB9XG59XG5cbi5mb3JtLWNvbnRyb2wuY3Mtc2VsZWN0Om5vdCguY3MtYWN0aXZlKXtcbiAgICBtYXJnaW4tdG9wOiAwO1xufSIsIi5wZy1zZWxlY3Qge1xuICBvdXRsaW5lOiAwO1xufVxuLnBnLXNlbGVjdCA+ICo6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZm9ybS1ncm91cC1kZWZhdWx0LXNlbGVjdEZ4IC5jcy1iYWNrZHJvcCB7XG4gIGJvcmRlcjogMDtcbn1cblxuLmZvcm0tY29udHJvbC5jcy1zZWxlY3Q6bm90KC5jcy1hY3RpdmUpIHtcbiAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/@pages/components/forms/form-group-default.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@pages/components/forms/form-group-default.directive.ts ***!
  \*************************************************************************/
/*! exports provided: FormGroupDefaultDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDefaultDirective", function() { return FormGroupDefaultDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FormGroupDefaultDirective = /** @class */ (function () {
    function FormGroupDefaultDirective(El, renderer) {
        this.El = El;
        this.renderer = renderer;
        this._isActive = false;
    }
    FormGroupDefaultDirective.prototype.onclick = function () {
        if (this._isActive) {
            return;
        }
        this._isActive = true;
        var inputEl = this.El.nativeElement.querySelector('input');
        if (inputEl) {
            inputEl.focus();
        }
    };
    FormGroupDefaultDirective.prototype.ngOnInit = function () {
        var _this = this;
        var inputEl = this.El.nativeElement.querySelector('input');
        if (inputEl) {
            this.renderer.listen(inputEl, 'focus', function (event) {
                _this._isActive = true;
            });
            this.renderer.listen(inputEl, 'focusout', function (event) {
                if (!inputEl.value) {
                    _this._isActive = false;
                }
            });
        }
    };
    FormGroupDefaultDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.focused'),
        __metadata("design:type", Boolean)
    ], FormGroupDefaultDirective.prototype, "_isActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormGroupDefaultDirective.prototype, "onclick", null);
    FormGroupDefaultDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pgFormGroupDefault]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], FormGroupDefaultDirective);
    return FormGroupDefaultDirective;
}());



/***/ }),

/***/ "./src/app/@pages/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@pages/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(toggler) {
        this.toggler = toggler;
        this._headerClass = '';
        this.boxed = false;
        this.extraClass = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isHorizontalLayout = pg.isHorizontalLayout;
        this._service = this.toggler.headerClass.subscribe(function (state) {
            _this._headerClass = state;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._service.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "boxed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "extraClass", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.scss */ "./src/app/@pages/components/header/header.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/horizontal-menu/horizontal-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/@pages/components/horizontal-menu/horizontal-menu.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".horizontal-app-menu .menu-bar > ul {\n  flex-flow: row;\n}\n.horizontal-app-menu .ghost-nav-dropdown {\n  height: 0;\n}\n.horizontal-app-menu .ghost-ul {\n  visibility: hidden;\n  position: absolute;\n  pointer-events: none;\n}\n.horizontal-app-menu .horizontal-menu-backdrop-dekstop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvaG9yaXpvbnRhbC1tZW51L0M6XFxmcm9udGVuZFxcYW5ndWxhci9zcmNcXGFwcFxcQHBhZ2VzXFxjb21wb25lbnRzXFxob3Jpem9udGFsLW1lbnVcXGhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvaG9yaXpvbnRhbC1tZW51L2hvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0ksU0FBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9AcGFnZXMvY29tcG9uZW50cy9ob3Jpem9udGFsLW1lbnUvaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtYXBwLW1lbnUge1xuICAgIC5tZW51LWJhciA+IHVse1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIH1cbiAgICAuZ2hvc3QtbmF2LWRyb3Bkb3due1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIC5naG9zdC11bHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICAuaG9yaXpvbnRhbC1tZW51LWJhY2tkcm9wLWRla3N0b3B7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxufSIsIi5ob3Jpem9udGFsLWFwcC1tZW51IC5tZW51LWJhciA+IHVsIHtcbiAgZmxleC1mbG93OiByb3c7XG59XG4uaG9yaXpvbnRhbC1hcHAtbWVudSAuZ2hvc3QtbmF2LWRyb3Bkb3duIHtcbiAgaGVpZ2h0OiAwO1xufVxuLmhvcml6b250YWwtYXBwLW1lbnUgLmdob3N0LXVsIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhvcml6b250YWwtYXBwLW1lbnUgLmhvcml6b250YWwtbWVudS1iYWNrZHJvcC1kZWtzdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/@pages/components/horizontal-menu/horizontal-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/@pages/components/horizontal-menu/horizontal-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(toggler) {
        var _this = this;
        this.toggler = toggler;
        this.menuItems = [];
        this._renduerMenuItems = [];
        this._hideExtra = 0;
        this._autoHideItems = true;
        this.currentItem = null;
        this._horizontalMobileMenu = false;
        // Simple hack flag to check if its wrapped
        this._wrapped = false;
        this._service = this.toggler.mobileHorizontaMenu.subscribe(function (state) {
            _this._horizontalMobileMenu = state;
            _this.closeHorizontalMenu();
        });
    }
    Object.defineProperty(HorizontalMenuComponent.prototype, "HideExtra", {
        set: function (value) {
            this._hideExtra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalMenuComponent.prototype, "AutoHideItems", {
        set: function (value) {
            this._autoHideItems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalMenuComponent.prototype, "Items", {
        set: function (value) {
            this.menuItems = value;
            this._renduerMenuItems = this.menuItems.slice();
        },
        enumerable: true,
        configurable: true
    });
    HorizontalMenuComponent.prototype.ngAfterContentInit = function () { };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (pg.isVisibleSm() || pg.isVisibleXs()) {
                return false;
            }
            _this._onContentChanges();
        });
    };
    HorizontalMenuComponent.prototype.ngOnDestroy = function () {
        this._service.unsubscribe();
    };
    HorizontalMenuComponent.prototype.closeHorizontalMenu = function () {
        if (!this.currentItem) {
            return;
        }
        this.currentItem['open'] = false;
        this.currentItem['opening'] = false;
        this.currentItem['ghost'] = {
            visibility: 'hidden'
        };
    };
    HorizontalMenuComponent.prototype.toggleLink = function (event, item) {
        // Mobile
        if (pg.isVisibleSm() || pg.isVisibleXs()) {
            if (this.currentItem && this.currentItem !== item) {
                this.currentItem['mToggle'] = 'close';
            }
            this.currentItem = item;
            item.mToggle = item.mToggle === 'close' ? 'open' : 'close';
            return false;
        }
        // Desktop
        if (this.currentItem && this.currentItem !== item) {
            this.currentItem['open'] = false;
            this.currentItem['opening'] = false;
            this.currentItem['ghost'] = {
                visibility: 'hidden'
            };
        }
        this.currentItem = item;
        var elParent = event.currentTarget.parentNode;
        if (item['open']) {
            var el = elParent.querySelector('ul');
            var rect = el.getBoundingClientRect();
            item.ghost = {
                width: rect.width + 'px',
                height: 0,
                zIndex: 'auto'
            };
            item['open'] = false;
            setTimeout(function () {
                item['opening'] = false;
            }, 240);
        }
        else {
            item['open'] = true;
            setTimeout(function () {
                var el = elParent.querySelector('ul');
                var rect = el.getBoundingClientRect();
                item.ghost = {
                    height: '0',
                    width: rect.width + 'px',
                    zIndex: 'auto'
                };
                item.ghost = {
                    width: rect.width + 'px',
                    height: rect.height + 'px',
                    zIndex: 'auto'
                };
                setTimeout(function () {
                    item['opening'] = true;
                }, 140);
            }, 0);
        }
    };
    HorizontalMenuComponent.prototype.onResize = function (event) {
        var _this = this;
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(function () {
            if (pg.isVisibleSm() || pg.isVisibleXs()) {
                _this._renduerMenuItems = _this.menuItems.slice();
                return false;
            }
            _this._onContentChanges();
        }, 140);
    };
    HorizontalMenuComponent.prototype._onContentChanges = function () {
        // Cache User Items
        console.log(this._autoHideItems);
        if (this._autoHideItems === false) {
            return;
        }
        this._renduerMenuItems = this.menuItems.slice();
        console.log(this._renduerMenuItems);
        var children = this._menuItemsList.nativeElement.childNodes;
        var totalChildrenWidth = 0;
        var liCount = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i]['nodeName'] === 'LI') {
                totalChildrenWidth = totalChildrenWidth + children[i].offsetWidth;
                if (totalChildrenWidth > this._menuWrapper.nativeElement.offsetWidth) {
                    this.wrap(liCount);
                    break;
                }
                liCount++;
            }
        }
        // @TODO:Will Force Wrap
        if (!this._wrapped) {
            this.wrap(liCount);
        }
    };
    HorizontalMenuComponent.prototype.wrap = function (startIndex) {
        this._wrapped = true;
        startIndex--;
        startIndex = startIndex - this._hideExtra;
        var temp = {
            type: 'more',
            toggle: 'close',
            submenu: []
        };
        for (var i = startIndex; i < this._renduerMenuItems.length; i++) {
            temp['submenu'].push(this._renduerMenuItems[i]);
        }
        this._renduerMenuItems.splice(startIndex, this._renduerMenuItems.length);
        this._renduerMenuItems.push(temp);
    };
    HorizontalMenuComponent.prototype.toggleHorizontalMenu = function () {
        if (this._horizontalMobileMenu) {
            this._horizontalMobileMenu = false;
        }
        else {
            this._horizontalMobileMenu = true;
        }
        this.toggler.toggleMobileHorizontalMenu(this._horizontalMobileMenu);
    };
    HorizontalMenuComponent.ctorParameters = function () { return [
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuItemsList', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HorizontalMenuComponent.prototype, "_menuItemsList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuWrapper', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HorizontalMenuComponent.prototype, "_menuWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('mobileSidebarFooter', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], HorizontalMenuComponent.prototype, "mobileSidebarFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HorizontalMenuComponent.prototype, "HideExtra", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HorizontalMenuComponent.prototype, "AutoHideItems", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HorizontalMenuComponent.prototype, "Items", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HorizontalMenuComponent.prototype, "onResize", null);
    HorizontalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-horizontal-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./horizontal-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/horizontal-menu/horizontal-menu.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/app/@pages/components/horizontal-menu/horizontal-menu.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/list-view/list-item/list-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-item/list-item.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL2xpc3Qtdmlldy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/components/list-view/list-item/list-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-item/list-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-view-container/list-view-container.component */ "./src/app/@pages/components/list-view/list-view-container/list-view-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(pgItemView) {
        this.pgItemView = pgItemView;
    }
    Object.defineProperty(ListItemComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    ListItemComponent.prototype.ngOnInit = function () {
        this.pgItemView._items.push(this);
    };
    ListItemComponent.prototype.ngOnDestroy = function () {
        this.pgItemView._items.splice(this.pgItemView._items.indexOf(this), 1);
    };
    ListItemComponent.ctorParameters = function () { return [
        { type: _list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_1__["ListViewContainerComponent"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('ItemHeading', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ListItemComponent.prototype, "_itemHeading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ListItemComponent.prototype, "_content", void 0);
    ListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-list-item',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/list-view/list-item/list-item.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list-item.component.scss */ "./src/app/@pages/components/list-view/list-item/list-item.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_1__["ListViewContainerComponent"]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/list-view/list-view-container/list-view-container.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-view-container/list-view-container.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL2xpc3Qtdmlldy9saXN0LXZpZXctY29udGFpbmVyL2xpc3Qtdmlldy1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/components/list-view/list-view-container/list-view-container.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-view-container/list-view-container.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ListViewContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewContainerComponent", function() { return ListViewContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ListViewContainerComponent = /** @class */ (function () {
    function ListViewContainerComponent(el) {
        this.el = el;
        this._items = [];
        this.elems = [];
        this.fakeHeaderHidden = false;
        this.topClassAnimated = false;
        this.config = {};
        this.isPerfectScrollbarDisabled = false;
    }
    ListViewContainerComponent.prototype.ngOnInit = function () { };
    ListViewContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.togglePerfectScrollbar();
        });
    };
    ListViewContainerComponent.prototype.onResize = function () {
        this.togglePerfectScrollbar();
    };
    ListViewContainerComponent.prototype.togglePerfectScrollbar = function () {
        this.isPerfectScrollbarDisabled = window.innerWidth < 1025;
    };
    ListViewContainerComponent.prototype.cacheElements = function () {
        var rootRect = this.el.nativeElement.getBoundingClientRect();
        var els = this.el.nativeElement.querySelectorAll('.list-view-group-container');
        for (var i = 0; i < els.length; i++) {
            var rect = els[i].getBoundingClientRect();
            var offsetTop = rect.top - rootRect.top;
            var headerElement = els[i].querySelector('.list-view-group-header');
            this.elems.push({
                listHeight: rect.height,
                headerHeight: headerElement.offsetHeight,
                listOffset: offsetTop,
                listBottom: rect.height + offsetTop,
                animated: false
            });
        }
        this.computeHeader();
    };
    ListViewContainerComponent.prototype.computeHeader = function () {
        var currentTop = this.itemListWrapper.nativeElement.scrollTop;
        var offscreenElement, topElementBottom, topIndex = 0;
        var i = 0;
        if (this.elems.length === 0) {
            return;
        }
        while (this.elems[i].listOffset - currentTop <= 0) {
            this.topElement = this.elems[i];
            topIndex = i;
            topElementBottom = this.topElement.listBottom - currentTop;
            if (topElementBottom < -this.topElement.headerHeight) {
                offscreenElement = this.topElement;
            }
            i++;
            if (i >= this.elems.length) {
                break;
            }
        }
        if (topElementBottom < this.topElement.headerHeight && topElementBottom > 0) {
            this.fakeHeaderHidden = true;
            this.topElement.animated = true;
        }
        else {
            this.fakeHeaderHidden = false;
            if (this.topElement) {
                this.topElement.animated = false;
            }
        }
        if (this.topElement && this._items[topIndex]) {
            this.topHeader = this._items[topIndex]._itemHeading;
        }
    };
    ListViewContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('itemListWrapper', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListViewContainerComponent.prototype, "itemListWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListViewContainerComponent.prototype, "onResize", null);
    ListViewContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-list-view-container',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list-view-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/list-view/list-view-container/list-view-container.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list-view-container.component.scss */ "./src/app/@pages/components/list-view/list-view-container/list-view-container.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ListViewContainerComponent);
    return ListViewContainerComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/list-view/list-view.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-view.module.ts ***!
  \*****************************************************************/
/*! exports provided: pgListViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgListViewModule", function() { return pgListViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgListViewModule = /** @class */ (function () {
    function pgListViewModule() {
    }
    pgListViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]],
            declarations: []
        })
    ], pgListViewModule);
    return pgListViewModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/menu/menu-alt.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/menu/menu-alt.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuAltComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAltComponent", function() { return MenuAltComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/@pages/components/menu/menu.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MenuAltComponent = /** @class */ (function (_super) {
    __extends(MenuAltComponent, _super);
    function MenuAltComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuAltComponent.prototype.ngOnInit = function () { };
    MenuAltComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-menu-items-alt',
            template: __importDefault(__webpack_require__(/*! raw-loader!./menu-alt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu-alt.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleHeight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0',
                        overflow: 'hidden',
                        marginBottom: '0',
                        display: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        display: 'block',
                        height: '*',
                        marginBottom: '10px',
                        overflow: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms ease-out'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./menu-alt.scss */ "./src/app/@pages/components/menu/menu-alt.scss")).default]
        })
    ], MenuAltComponent);
    return MenuAltComponent;
}(_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]));



/***/ }),

/***/ "./src/app/@pages/components/menu/menu-alt.scss":
/*!******************************************************!*\
  !*** ./src/app/@pages/components/menu/menu-alt.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-thumbnail {\n  display: inline-block;\n  background: #21252d;\n  height: 40px;\n  width: 40px;\n  line-height: 25px;\n  text-align: center;\n  vertical-align: middle;\n  position: relative;\n  left: 0;\n  float: right;\n  margin-right: 14px;\n  color: #788195;\n  font-size: 12px;\n  font-weight: bold;\n  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.27, 0.99);\n  -webkit-backface-visibility: hidden;\n  -webkit-perspective: 1000;\n  font-family: segoe ui, helvetica neue, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  font-weight: 700;\n}\n.icon-thumbnail > svg {\n  -ms-grid-row-align: center;\n  align-self: center;\n}\n.icon-thumbnail > svg.feather {\n  width: 16px;\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvbWVudS9DOlxcZnJvbnRlbmRcXGFuZ3VsYXIvc3JjXFxhcHBcXEBwYWdlc1xcY29tcG9uZW50c1xcbWVudVxcbWVudS1hbHQuc2NzcyIsInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvbWVudS9tZW51LWFsdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLCtEQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1FQUFBO0VBQ0EsbUNBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRENJO0VBR0ksMEJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvbWVudS9tZW51LWFsdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaWNvbi10aHVtYm5haWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTJkO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIGNvbG9yOiAjNzg4MTk1O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjA1LC43NCwuMjcsLjk5KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGN1YmljLWJlemllciguMDUsLjc0LC4yNywuOTkpO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDFlMztcbiAgICBmb250LWZhbWlseTogc2Vnb2UgdWksaGVsdmV0aWNhIG5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgJiA+IHN2ZyB7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1ncmlkLXJvdy1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICYuZmVhdGhlcntcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLmljb24tdGh1bWJuYWlsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMjEyNTJkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzc4ODE5NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjI3LCAwLjk5KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMjcsIDAuOTkpO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDtcbiAgZm9udC1mYW1pbHk6IHNlZ29lIHVpLCBoZWx2ZXRpY2EgbmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaWNvbi10aHVtYm5haWwgPiBzdmcge1xuICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xuICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmljb24tdGh1bWJuYWlsID4gc3ZnLmZlYXRoZXIge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/@pages/components/menu/menu-icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/menu/menu-icon.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feather {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvbWVudS9DOlxcZnJvbnRlbmRcXGFuZ3VsYXIvc3JjXFxhcHBcXEBwYWdlc1xcY29tcG9uZW50c1xcbWVudVxcbWVudS1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AcGFnZXMvY29tcG9uZW50cy9tZW51L21lbnUtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9AcGFnZXMvY29tcG9uZW50cy9tZW51L21lbnUtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0aGVye1xuICAgIHdpZHRoOjI0cHg7XG4gICAgaGVpZ2h0OjI0cHhcbn0iLCIuZmVhdGhlciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/@pages/components/menu/menu-icon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/menu/menu-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIconComponent", function() { return MenuIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MenuIconComponent = /** @class */ (function () {
    function MenuIconComponent() {
        this._classMap = 'icon-thumbnail ';
    }
    Object.defineProperty(MenuIconComponent.prototype, "ExtraClass", {
        set: function (value) {
            if (value !== undefined) {
                this._classMap = this._classMap + value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MenuIconComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuIconComponent.prototype, "IconType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MenuIconComponent.prototype, "IconName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MenuIconComponent.prototype, "ExtraClass", null);
    MenuIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-menu-icon',
            template: __importDefault(__webpack_require__(/*! raw-loader!./menu-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu-icon.component.html")).default,
            host: {
                '[class]': '_classMap'
            },
            styles: [__importDefault(__webpack_require__(/*! ./menu-icon.component.scss */ "./src/app/@pages/components/menu/menu-icon.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MenuIconComponent);
    return MenuIconComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/menu/menu.component.scss":
/*!************************************************************!*\
  !*** ./src/app/@pages/components/menu/menu.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-sidebar .sidebar-menu .menu-items > li ul.sub-menu {\n  margin: 0;\n  padding: 0;\n}\n.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > :first-child {\n  margin-top: 19px;\n}\n.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > :last-child {\n  margin-bottom: 10px;\n}\n.page-sidebar {\n  overflow: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvbWVudS9DOlxcZnJvbnRlbmRcXGFuZ3VsYXIvc3JjXFxhcHBcXEBwYWdlc1xcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7QUNDWjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBREtBO0VBQ0ksNEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAubWVudS1pdGVtc3tcbiAgICAmID4gbGkgdWwuc3ViLW1lbnV7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgJiA+IDpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE5cHg7XG4gICAgICAgIH1cbiAgICAgICAgJiA+IDpsYXN0LWNoaWxke1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4ucGFnZS1zaWRlYmFye1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4iLCIucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLm1lbnUtaXRlbXMgPiBsaSB1bC5zdWItbWVudSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAubWVudS1pdGVtcyA+IGxpIHVsLnN1Yi1tZW51ID4gOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMTlweDtcbn1cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAubWVudS1pdGVtcyA+IGxpIHVsLnN1Yi1tZW51ID4gOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucGFnZS1zaWRlYmFyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/@pages/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/@pages/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuItems = [];
        this.currentItem = null;
        this.isPerfectScrollbarDisabled = false;
        this.config = {};
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.togglePerfectScrollbar();
        });
    };
    MenuComponent.prototype.onResize = function () {
        this.togglePerfectScrollbar();
    };
    MenuComponent.prototype.togglePerfectScrollbar = function () {
        this.isPerfectScrollbarDisabled = window.innerWidth < 1025;
    };
    Object.defineProperty(MenuComponent.prototype, "Items", {
        set: function (value) {
            this.menuItems = value;
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.toggleNavigationSub = function (event, item) {
        event.preventDefault();
        if (this.currentItem && this.currentItem !== item) {
            this.currentItem['toggle'] = 'close';
        }
        this.currentItem = item;
        item.toggle = item.toggle === 'close' ? 'open' : 'close';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MenuComponent.prototype, "Items", null);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-menu-items',
            template: __importDefault(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/menu/menu.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleHeight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0',
                        overflow: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                        overflow: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('140ms ease-out'))
                ])
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./menu.component.scss */ "./src/app/@pages/components/menu/menu.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/parallax/parallax.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/parallax/parallax.directive.ts ***!
  \******************************************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ParallaxDirective = /** @class */ (function () {
    function ParallaxDirective(parallaxEl, renderer) {
        this.parallaxEl = parallaxEl;
        this.renderer = renderer;
        this.scrollElement = 'window';
        this.scrollPos = 0;
        this.coverPhotoSpeend = 0.3;
        this.contentSpeed = 0.17;
        this.windowSize = window.innerWidth;
    }
    ParallaxDirective.prototype.ngOnInit = function () {
        this.nativeElement = this.parallaxEl.nativeElement;
        this.registerPageContainerScroller();
    };
    ParallaxDirective.prototype.registerPageContainerScroller = function () {
        var _this = this;
        if (!pg.isHorizontalLayout) {
            return;
        }
        var pageContainer = document.querySelector('.page-container');
        if (pageContainer) {
            this.scrollElement = pageContainer;
            this.renderer.listen(pageContainer, 'scroll', function (event) {
                _this.animate();
            });
        }
    };
    ParallaxDirective.prototype.onResize = function () {
        this.windowSize = window.innerWidth;
    };
    ParallaxDirective.prototype.onWindowScroll = function () {
        this.animate();
    };
    ParallaxDirective.prototype.animate = function () {
        // Disable on mobile;
        if ((this.windowSize = window.innerWidth < 1025)) {
            return;
        }
        var rect = this.nativeElement.getBoundingClientRect();
        var opacityKeyFrame = (rect.width * 50) / 100;
        var direction = 'translateX';
        if (this.scrollElement === 'window') {
            this.scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        }
        else {
            this.scrollPos = this.scrollElement.scrollTop;
        }
        direction = 'translateY';
        var styleString = direction + '(' + this.scrollPos * this.coverPhotoSpeend + 'px)';
        this.nativeElement.style.transform = styleString;
        // Legacy Browsers
        this.nativeElement.style.webkitTransform = styleString;
        this.nativeElement.style.mozTransform = styleString;
        this.nativeElement.style.msTransform = styleString;
        if (this.scrollPos > opacityKeyFrame) {
            this.nativeElement.style.opacity = 1 - this.scrollPos / 1200;
        }
        else {
            this.nativeElement.style.opacity = 1;
        }
    };
    ParallaxDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ParallaxDirective.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ParallaxDirective.prototype, "onWindowScroll", null);
    ParallaxDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pg-parallax]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ParallaxDirective);
    return ParallaxDirective;
}());



/***/ }),

/***/ "./src/app/@pages/components/progress/progress.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/@pages/components/progress/progress.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/components/progress/progress.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/progress/progress.component.ts ***!
  \******************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    Object.defineProperty(ProgressComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this.type === 'circle') {
                this._value = (value / 100) * 360;
                if (this.value >= 50) {
                    this._value2 = true;
                }
            }
            else {
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressComponent.prototype, "value2", {
        get: function () {
            return this._value2;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProgressComponent.prototype, "thick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProgressComponent.prototype, "indeterminate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ProgressComponent.prototype, "value", null);
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-progress',
            template: __importDefault(__webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/progress/progress.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./progress.component.scss */ "./src/app/@pages/components/progress/progress.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/progress/progress.config.ts":
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/progress/progress.config.ts ***!
  \***************************************************************/
/*! exports provided: ProgressConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressConfig", function() { return ProgressConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProgressConfig = /** @class */ (function () {
    function ProgressConfig() {
        this.color = 'primary';
        this.thickness = 1;
    }
    ProgressConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ProgressConfig);
    return ProgressConfig;
}());



/***/ }),

/***/ "./src/app/@pages/components/progress/progress.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/progress/progress.module.ts ***!
  \***************************************************************/
/*! exports provided: ProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressModule", function() { return ProgressModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress.component */ "./src/app/@pages/components/progress/progress.component.ts");
/* harmony import */ var _progress_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress.config */ "./src/app/@pages/components/progress/progress.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ProgressModule = /** @class */ (function () {
    function ProgressModule() {
    }
    ProgressModule_1 = ProgressModule;
    ProgressModule.forRoot = function () {
        return { ngModule: ProgressModule_1, providers: [_progress_config__WEBPACK_IMPORTED_MODULE_3__["ProgressConfig"]] };
    };
    var ProgressModule_1;
    ProgressModule = ProgressModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            declarations: [_progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"]],
            exports: [_progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"]]
        })
    ], ProgressModule);
    return ProgressModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/quickview/message.ts":
/*!********************************************************!*\
  !*** ./src/app/@pages/components/quickview/message.ts ***!
  \********************************************************/
/*! exports provided: chatMessage, chatHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatMessage", function() { return chatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatHistory", function() { return chatHistory; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//Sample Note Class
var chatMessage = /** @class */ (function () {
    function chatMessage() {
    }
    return chatMessage;
}());

var chatHistory = /** @class */ (function () {
    function chatHistory() {
    }
    return chatHistory;
}());



/***/ }),

/***/ "./src/app/@pages/components/quickview/note.ts":
/*!*****************************************************!*\
  !*** ./src/app/@pages/components/quickview/note.ts ***!
  \*****************************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//Sample Note Class
var Note = /** @class */ (function () {
    function Note() {
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/@pages/components/quickview/quickview.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/@pages/components/quickview/quickview.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".quickview-wrapper quill-editor {\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow {\n  background: #fcfcfa;\n  height: 35px;\n  width: 100%;\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.33);\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button {\n  width: 39px;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button svg {\n  padding-top: 9px;\n  padding-bottom: 9px;\n  height: 34px;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button:hover {\n  background-color: #fffaf6;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button:hover .ql-stroke {\n  stroke: #a5a5a5;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button.ql-active {\n  background-color: #fffaf6;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow .close-note-link {\n  text-align: center;\n  color: #a5a5a5;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow .ql-formats {\n  height: 35px;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow li {\n  border-right: 1px solid #edecec;\n  width: 40px;\n  margin: 0;\n  padding: 0;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow .ql-stroke {\n  stroke: #a5a5a5;\n}\n.quickview-wrapper .ql-editor {\n  padding: 51px 20px 0 45px;\n  font-size: 12px;\n}\n.quickview-wrapper .extra-component {\n  position: absolute;\n  top: 51px;\n  text-align: center;\n}\n.quickview-wrapper .extra-component .top span {\n  font-style: italic;\n  color: #b0b0a8;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvcXVpY2t2aWV3L0M6XFxmcm9udGVuZFxcYW5ndWxhci9zcmNcXGFwcFxcQHBhZ2VzXFxjb21wb25lbnRzXFxxdWlja3ZpZXdcXHF1aWNrdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvcXVpY2t2aWV3L3F1aWNrdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RSO0FERVE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7QUNBWjtBRENZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0NoQjtBREFnQjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRXBCO0FEQWdCO0VBQ0kseUJBQUE7QUNFcEI7QUREb0I7RUFDSSxlQUFBO0FDR3hCO0FEQWdCO0VBQ0kseUJBQUE7QUNFcEI7QURDWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NoQjtBRENZO0VBQ0ksWUFBQTtBQ0NoQjtBRENZO0VBQ0ksK0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDaEI7QURDWTtFQUNJLGVBQUE7QUNDaEI7QURJSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FESVk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvcXVpY2t2aWV3L3F1aWNrdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0cmEgc3R5bGVzXG4ucXVpY2t2aWV3LXdyYXBwZXJ7XG4gICAgcXVpbGwtZWRpdG9ye1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnFsLXRvb2xiYXIucWwtc25vd3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZjZmNmYTtcbiAgICAgICAgICAgIGhlaWdodDozNXB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM5cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgICAgICAgICAgICAgc3Zne1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjY7XG4gICAgICAgICAgICAgICAgICAgIC5xbC1zdHJva2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6I2E1YTVhNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLnFsLWFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2Utbm90ZS1saW5re1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjojYTVhNWE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnFsLWZvcm1hdHN7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWNlYztcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnFsLXN0cm9rZXtcbiAgICAgICAgICAgICAgICBzdHJva2U6I2E1YTVhNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5xbC1lZGl0b3J7XG4gICAgICAgIHBhZGRpbmc6IDUxcHggMjBweCAwIDQ1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmV4dHJhLWNvbXBvbmVudHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUxcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLnRvcHtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjBiMGE4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3Ige1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3IgLnFsLXRvb2xiYXIucWwtc25vdyB7XG4gIGJhY2tncm91bmQ6ICNmY2ZjZmE7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgcXVpbGwtZWRpdG9yIC5xbC10b29sYmFyLnFsLXNub3cgYnV0dG9uIHtcbiAgd2lkdGg6IDM5cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgcXVpbGwtZWRpdG9yIC5xbC10b29sYmFyLnFsLXNub3cgYnV0dG9uIHN2ZyB7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIGhlaWdodDogMzRweDtcbn1cbi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3IgLnFsLXRvb2xiYXIucWwtc25vdyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWY2O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlIHtcbiAgc3Ryb2tlOiAjYTVhNWE1O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IGJ1dHRvbi5xbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWY2O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IC5jbG9zZS1ub3RlLWxpbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYTVhNWE1O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IC5xbC1mb3JtYXRzIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IGxpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWNlYztcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3IgLnFsLXRvb2xiYXIucWwtc25vdyAucWwtc3Ryb2tlIHtcbiAgc3Ryb2tlOiAjYTVhNWE1O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIC5xbC1lZGl0b3Ige1xuICBwYWRkaW5nOiA1MXB4IDIwcHggMCA0NXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgLmV4dHJhLWNvbXBvbmVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgLmV4dHJhLWNvbXBvbmVudCAudG9wIHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjBiMGE4O1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/@pages/components/quickview/quickview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@pages/components/quickview/quickview.component.ts ***!
  \********************************************************************/
/*! exports provided: QuickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewComponent", function() { return QuickviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
/* harmony import */ var _quickview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickview.service */ "./src/app/@pages/components/quickview/quickview.service.ts");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note */ "./src/app/@pages/components/quickview/note.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/app/@pages/components/quickview/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var QuickviewComponent = /** @class */ (function () {
    function QuickviewComponent(_service, http, toggler) {
        var _this = this;
        this._service = _service;
        this.http = http;
        this.toggler = toggler;
        this.subscriptions = [];
        this.isOpen = false;
        this.noteList = [];
        this.noteDeleteList = [];
        this.noteText = '';
        //List for deleting or CRUD functions
        this.deleteNoteMode = false;
        this.isNoteOpen = false;
        this.userList = [];
        this.editorModules = {
            //https://github.com/KillerCodeMonkey/ngx-quill
            toolbar: [[{ header: [1, 2, 3, 4, false] }], ['bold', 'italic', 'underline'], ['link', 'image']]
        };
        this.subscriptions.push(this.toggler.quickViewToggle.subscribe(function (message) {
            _this.toggle();
        }));
    }
    QuickviewComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    QuickviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.subscriptions.push(this._service.getNotes().subscribe(function (notes) {
            _this.noteList = notes;
        }));
        this.subscriptions.push(this._service.getUsers().subscribe(function (users) {
            _this.userList = users;
        }));
        this.subscriptions.push(this._service.getChatMessages().subscribe(function (messages) {
            _this.chatHistory = messages;
        }));
    };
    QuickviewComponent.prototype.toggle = function () {
        if (this.isOpen) {
            this.isOpen = false;
        }
        else {
            this.isOpen = true;
        }
    };
    QuickviewComponent.prototype.popNote = function (item) {
        var index = this.noteDeleteList.indexOf(item);
        if (index !== -1) {
            this.noteDeleteList.splice(index, 1);
        }
    };
    QuickviewComponent.prototype.pushNote = function (item) {
        this.noteDeleteList.push(item);
    };
    QuickviewComponent.prototype.onSelectNote = function (item) {
        if (!this.deleteNoteMode) {
            this.selectedNote = item;
            this.noteText = this.selectedNote.notes;
            this.isNoteOpen = true;
        }
    };
    QuickviewComponent.prototype.toggleNotesView = function () {
        if (this.isNoteOpen) {
            this.isNoteOpen = false;
            this.saveNote();
        }
        else
            this.isNoteOpen = true;
    };
    QuickviewComponent.prototype.onCheck = function (e, item) {
        if (e.target.checked) {
            this.pushNote(item);
        }
        else {
            this.popNote(item);
        }
    };
    QuickviewComponent.prototype.composeNote = function () {
        this.isNoteOpen = true;
        this.selectedNote = new _note__WEBPACK_IMPORTED_MODULE_4__["Note"]();
        this.selectedNote.id = this.noteList.length + 1;
        this.selectedNote.date = new Date();
        this.selectedNote.notes = '';
        this.noteText = '';
        this.noteList.push(this.selectedNote);
    };
    QuickviewComponent.prototype.saveNote = function () {
        this.selectedNote.notes = this.noteText;
    };
    QuickviewComponent.prototype.deleteMode = function () {
        if (this.deleteNoteMode)
            this.deleteNoteMode = false;
        else
            this.deleteNoteMode = true;
    };
    QuickviewComponent.prototype.deleteNote = function () {
        var _this = this;
        this.noteList = this.noteList.filter(function (item) { return _this.noteDeleteList.indexOf(item) === -1; });
    };
    QuickviewComponent.prototype.onMessageKeyPress = function (event) {
        if (event.keyCode == 13) {
            if (this.userMessage) {
                this.newMessage = new _message__WEBPACK_IMPORTED_MODULE_5__["chatMessage"]();
                this.newMessage.from = 'me';
                this.newMessage.date = '';
                this.newMessage.message = this.userMessage;
                this.chatHistory['log'].push(this.newMessage);
                this.userMessage = '';
                this.chatHistoryWrapper.nativeElement.scrollTop = this.chatHistoryWrapper.nativeElement.scrollHeight;
            }
        }
    };
    QuickviewComponent.ctorParameters = function () { return [
        { type: _quickview_service__WEBPACK_IMPORTED_MODULE_3__["QuickviewService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatHistoryWrapper', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuickviewComponent.prototype, "chatHistoryWrapper", void 0);
    QuickviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quickview',
            template: __importDefault(__webpack_require__(/*! raw-loader!./quickview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/quickview/quickview.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./quickview.component.scss */ "./src/app/@pages/components/quickview/quickview.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_quickview_service__WEBPACK_IMPORTED_MODULE_3__["QuickviewService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"]])
    ], QuickviewComponent);
    return QuickviewComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/quickview/quickview.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/quickview/quickview.service.ts ***!
  \******************************************************************/
/*! exports provided: QuickviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewService", function() { return QuickviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var QuickviewService = /** @class */ (function () {
    function QuickviewService(http) {
        this.http = http;
    }
    // Get from the API
    QuickviewService.prototype.getNotes = function () {
        return this.http.get('assets/data/notes.json').map(function (res) { return res.json(); });
    };
    QuickviewService.prototype.getUsers = function () {
        return this.http.get('assets/data/users.json').map(function (res) { return res.json(); });
    };
    QuickviewService.prototype.getChatMessages = function () {
        return this.http.get('assets/data/messages.json').map(function (res) { return res.json(); });
    };
    QuickviewService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    QuickviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QuickviewService);
    return QuickviewService;
}());



/***/ }),

/***/ "./src/app/@pages/components/retina/retina.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/retina/retina.directive.ts ***!
  \**************************************************************/
/*! exports provided: pgRetinaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgRetinaDirective", function() { return pgRetinaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var pgRetinaDirective = /** @class */ (function () {
    function pgRetinaDirective(El, renderer) {
        this.El = El;
        this.renderer = renderer;
        this.isRetina = false;
        this.isRetina = window.devicePixelRatio > 1;
    }
    Object.defineProperty(pgRetinaDirective.prototype, "src2x", {
        set: function (value) {
            this._srcRetina = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgRetinaDirective.prototype, "src1x", {
        set: function (value) {
            this._src = value;
        },
        enumerable: true,
        configurable: true
    });
    pgRetinaDirective.prototype.ngOnInit = function () {
        if (this.isRetina) {
            this.renderer.setAttribute(this.El.nativeElement, 'src', this._srcRetina);
        }
    };
    pgRetinaDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgRetinaDirective.prototype, "src2x", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgRetinaDirective.prototype, "src1x", null);
    pgRetinaDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pgRetina]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], pgRetinaDirective);
    return pgRetinaDirective;
}());



/***/ }),

/***/ "./src/app/@pages/components/search-overlay/search-overlay.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/@pages/components/search-overlay/search-overlay.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL3NlYXJjaC1vdmVybGF5L3NlYXJjaC1vdmVybGF5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/components/search-overlay/search-overlay.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@pages/components/search-overlay/search-overlay.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOverlayComponent", function() { return SearchOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_fade_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/fade-animations */ "./src/app/@pages/animations/fade-animations.ts");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SearchOverlayComponent = /** @class */ (function () {
    function SearchOverlayComponent(el, toggler) {
        var _this = this;
        this.el = el;
        this.toggler = toggler;
        this._isEnabled = false;
        this.isVisible = false;
        this.value = '';
        this.toggleSubscription = this.toggler.searchToggle.subscribe(function (toggleValue) {
            _this.open();
        });
    }
    SearchOverlayComponent.prototype.ngOnDestroy = function () {
        this.toggleSubscription.unsubscribe();
    };
    Object.defineProperty(SearchOverlayComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (isEnabled) {
            this.isEnabled = isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    SearchOverlayComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.isVisible = false;
        this.value = '';
    };
    SearchOverlayComponent.prototype.open = function () {
        var _this = this;
        this.isVisible = true;
        this.value = '';
        setTimeout(function () {
            _this.searchField.nativeElement.focus();
        }, 200);
    };
    SearchOverlayComponent.prototype.onKeydownHandler = function (e) {
        var nodeName = e.target.nodeName;
        // Ignore When focus on input, textarea & contenteditable
        if (nodeName === 'INPUT' || nodeName === 'TEXTAREA' || e.target.contentEditable === 'true') {
            return;
        }
        // Ignore Escape
        if (this.isVisible && e.keyCode === 27) {
            this.isVisible = false;
            this.value = '';
        }
        // Ignore Keyes
        if (e.which !== 0 && e.charCode !== 0 && !e.ctrlKey && !e.metaKey && !e.altKey && e.keyCode !== 27) {
            this.isVisible = true;
            if (!this.value) {
                this.value = String.fromCharCode(e.keyCode | e.charCode);
            }
            this.searchField.nativeElement.focus();
        }
    };
    SearchOverlayComponent.prototype.searchKeyPress = function (event) {
        if (this.isVisible && event.keyCode === 27) {
            this.isVisible = false;
            this.value = '';
        }
    };
    SearchOverlayComponent.prototype.fadeInComplete = function () {
    };
    SearchOverlayComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchField', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchOverlayComponent.prototype, "searchField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SearchOverlayComponent.prototype, "isEnabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SearchOverlayComponent.prototype, "onKeydownHandler", null);
    SearchOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-overlay',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search-overlay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/search-overlay/search-overlay.component.html")).default,
            animations: [_animations_fade_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]],
            styles: [__importDefault(__webpack_require__(/*! ./search-overlay.component.scss */ "./src/app/@pages/components/search-overlay/search-overlay.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"]])
    ], SearchOverlayComponent);
    return SearchOverlayComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 1024px) {\n  .secondary-show {\n    display: block;\n  }\n\n  .secondary-hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvc2Vjb25kYXJ5LXNpZGViYXIvQzpcXGZyb250ZW5kXFxhbmd1bGFyL3NyY1xcYXBwXFxAcGFnZXNcXGNvbXBvbmVudHNcXHNlY29uZGFyeS1zaWRlYmFyXFxzZWNvbmRhcnktc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvc2Vjb25kYXJ5LXNpZGViYXIvc2Vjb25kYXJ5LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGNBQUE7RUNDTjs7RURDRTtJQUNJLGFBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL2NvbXBvbmVudHMvc2Vjb25kYXJ5LXNpZGViYXIvc2Vjb25kYXJ5LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnNlY29uZGFyeS1zaG93e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnNlY29uZGFyeS1oaWRle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iLCJAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zZWNvbmRhcnktc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2Vjb25kYXJ5LWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SecondarySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondarySidebarComponent", function() { return SecondarySidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SecondarySidebarComponent = /** @class */ (function () {
    function SecondarySidebarComponent(toggler) {
        this.toggler = toggler;
        this._toggleMobileSidebar = false;
    }
    SecondarySidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service = this.toggler.secondarySideBarToggle.subscribe(function (state) {
            if (typeof state === 'boolean') {
                _this._toggleMobileSidebar = state;
            }
            else {
                _this._toggleMobileSidebar = state.open;
                var rect = state.$event.target.getBoundingClientRect();
                _this._togglePosition = {
                    position: 'fixed',
                    top: rect.top + rect.height + 'px',
                    left: rect.left + 'px',
                    transform: 'translateX(-50%)'
                };
            }
        });
    };
    SecondarySidebarComponent.prototype.ngOnDestroy = function () {
        this._service.unsubscribe();
    };
    Object.defineProperty(SecondarySidebarComponent.prototype, "extraClass", {
        set: function (value) {
            this._extraClass = value;
        },
        enumerable: true,
        configurable: true
    });
    SecondarySidebarComponent.ctorParameters = function () { return [
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SecondarySidebarComponent.prototype, "extraClass", null);
    SecondarySidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-secondary-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./secondary-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./secondary-sidebar.component.scss */ "./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondarySidebarComponent);
    return SecondarySidebarComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/select/option.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/select/option.component.ts ***!
  \**************************************************************/
/*! exports provided: pgOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgOptionComponent", function() { return pgOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.component */ "./src/app/@pages/components/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgOptionComponent = /** @class */ (function () {
    function pgOptionComponent(_Select) {
        this._Select = _Select;
        this._disabled = false;
    }
    Object.defineProperty(pgOptionComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value === value) {
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            if (this._label === value) {
                return;
            }
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgOptionComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgOptionComponent.prototype.ngOnInit = function () {
        this._Select.addOption(this);
    };
    pgOptionComponent.prototype.ngOnDestroy = function () {
        this._Select.removeOption(this);
    };
    pgOptionComponent.ctorParameters = function () { return [
        { type: _select_component__WEBPACK_IMPORTED_MODULE_2__["pgSelectComponent"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('OptionTemplate', { static: true }),
        __metadata("design:type", Object)
    ], pgOptionComponent.prototype, "OptionTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgOptionComponent.prototype, "Label", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgOptionComponent.prototype, "Disabled", null);
    pgOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-option',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [_select_component__WEBPACK_IMPORTED_MODULE_2__["pgSelectComponent"]])
    ], pgOptionComponent);
    return pgOptionComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/select/option.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/@pages/components/select/option.pipe.ts ***!
  \*********************************************************/
/*! exports provided: OptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionPipe", function() { return OptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/* tslint:disable:no-any */

var OptionPipe = /** @class */ (function () {
    function OptionPipe() {
    }
    // TODO: enable type checking for this method
    OptionPipe.prototype.transform = function (options, value) {
        if (value.searchText) {
            var _options = options.filter(function (option) { return option.Label && option.Label.toLowerCase().indexOf(value.searchText.toLowerCase()) !== -1; });
            if (value.tags) {
                _options = options.filter(function (option) { return option.Label && option.Label.toLowerCase() === value.searchText.toLowerCase(); });
            }
            if (_options.length) {
                return _options;
            }
            else {
                return [
                    {
                        Value: value.value,
                        _value: value.value,
                        Disabled: value.disabled,
                        _disabled: value.disabled,
                        Label: value.notFoundContent,
                        _label: value.notFoundContent
                    }
                ];
            }
        }
        else {
            return options;
        }
    };
    OptionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'OptionPipe' })
    ], OptionPipe);
    return OptionPipe;
}());



/***/ }),

/***/ "./src/app/@pages/components/select/select.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/select/select.component.ts ***!
  \**************************************************************/
/*! exports provided: pgSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectComponent", function() { return pgSelectComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/dropdown-animations */ "./src/app/@pages/animations/dropdown-animations.ts");
/* harmony import */ var _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/tag-animations */ "./src/app/@pages/animations/tag-animations.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./option.pipe */ "./src/app/@pages/components/select/option.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * complex but work well
 * TODO: rebuild latter
 */








var pgSelectComponent = /** @class */ (function () {
    function pgSelectComponent(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._allowClear = false;
        this._disabled = false;
        this._isTags = false;
        this._isMultiple = false;
        this._keepUnListOptions = false;
        this._showSearch = false;
        this._isOpen = false;
        this._prefixCls = 'pg-select';
        this._classList = [];
        this._dropDownPrefixCls = this._prefixCls + "-dropdown";
        this._selectionPrefixCls = this._prefixCls + "-selection";
        this._placeholder = 'placeholder';
        this._notFoundContent = 'No Content';
        this._searchText = '';
        this._triggerWidth = 0;
        this._selectedOptions = new Set();
        this._options = [];
        this._cacheOptions = [];
        this._filterOptions = [];
        this._tagsOptions = [];
        this._isMultiInit = false;
        this._dropDownPosition = 'bottom';
        this._composing = false;
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.SearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.OpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.ScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.Filter = true;
        this.MaxMultiple = Infinity;
        /** new -option insert or new tags insert */
        this.addOption = function (option) {
            _this._options.push(option);
            if (!_this._isTags) {
                if (option.Value) {
                    _this.updateSelectedOption(_this._value);
                }
                else {
                    _this.forceUpdateSelectedOption(_this._value);
                }
            }
        };
        /** cancel select multiple option */
        this.unSelectMultipleOption = function (option, $event, emitChange) {
            if (emitChange === void 0) { emitChange = true; }
            _this._operatingMultipleOption = option;
            _this._selectedOptions.delete(option);
            if (emitChange) {
                _this.emitMultipleOptions();
            }
            if (_this._isTags && _this._options.indexOf(option) !== -1 && _this._tagsOptions.indexOf(option) !== -1) {
                _this.removeOption(option);
                _this._tagsOptions.splice(_this._tagsOptions.indexOf(option), 1);
            }
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        };
        this._el = this._elementRef.nativeElement;
    }
    pgSelectComponent_1 = pgSelectComponent;
    Object.defineProperty(pgSelectComponent.prototype, "AllowClear", {
        get: function () {
            return this._allowClear;
        },
        set: function (value) {
            this._allowClear = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "KeepUnListOptions", {
        get: function () {
            return this._keepUnListOptions;
        },
        set: function (value) {
            this._keepUnListOptions = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Mode", {
        set: function (value) {
            this._mode = value;
            if (this._mode === 'multiple') {
                this.Multiple = true;
            }
            else if (this._mode === 'tags') {
                this.Tags = true;
            }
            else if (this._mode === 'combobox') {
                this.ShowSearch = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Multiple", {
        get: function () {
            return this._isMultiple;
        },
        set: function (value) {
            this._isMultiple = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            if (this._isMultiple) {
                this.ShowSearch = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "PlaceHolder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "NotFoundContent", {
        get: function () {
            return this._notFoundContent;
        },
        set: function (value) {
            this._notFoundContent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = { large: 'lg', small: 'sm' }[value];
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "ShowSearch", {
        get: function () {
            return this._showSearch;
        },
        set: function (value) {
            this._showSearch = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Tags", {
        get: function () {
            return this._isTags;
        },
        set: function (value) {
            var isTags = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this._isTags = isTags;
            this.Multiple = isTags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            this.closeDropDown();
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSelectComponent.prototype, "Open", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            var _this = this;
            var isOpen = Object(_util_convert__WEBPACK_IMPORTED_MODULE_6__["toBoolean"])(value);
            if (this._isOpen === isOpen) {
                return;
            }
            if (isOpen) {
                this.scrollToActive();
                this._setTriggerWidth();
            }
            this._isOpen = isOpen;
            this.OpenChange.emit(this._isOpen);
            this.setClassMap();
            if (this._isOpen) {
                setTimeout(function () {
                    _this.checkDropDownScroll();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /** -option remove or tags remove */
    pgSelectComponent.prototype.removeOption = function (option) {
        this._options.splice(this._options.indexOf(option), 1);
        if (!this._isTags) {
            this.forceUpdateSelectedOption(this._value);
        }
    };
    /** dropdown position changed */
    pgSelectComponent.prototype.onPositionChange = function (position) {
        this._dropDownPosition = position.connectionPair.originY;
    };
    pgSelectComponent.prototype.compositionStart = function () {
        this._composing = true;
    };
    pgSelectComponent.prototype.compositionEnd = function () {
        this._composing = false;
    };
    /** clear single selected option */
    pgSelectComponent.prototype.clearSelect = function ($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._selectedOption = null;
        this.Value = null;
        this.onChange(null);
    };
    /** click dropdown option by user */
    pgSelectComponent.prototype.clickOption = function (option, $event) {
        if (!option) {
            return;
        }
        this.chooseOption(option, true, $event);
        this.clearSearchText();
        if (!this._isMultiple) {
            this.Open = false;
        }
    };
    /** choose option */
    pgSelectComponent.prototype.chooseOption = function (option, isUserClick, $event) {
        if (isUserClick === void 0) { isUserClick = false; }
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._activeFilterOption = option;
        if (option && !option.Disabled) {
            if (!this.Multiple) {
                this._selectedOption = option;
                this._value = option.Value;
                if (isUserClick) {
                    this.onChange(option.Value);
                }
            }
            else {
                if (isUserClick) {
                    this.isInSet(this._selectedOptions, option) ? this.unSelectMultipleOption(option) : this.selectMultipleOption(option);
                }
            }
        }
    };
    pgSelectComponent.prototype.updateWidth = function (element, text) {
        var _this = this;
        if (text) {
            /** wait for scroll width change */
            setTimeout(function (_) {
                _this._renderer.setStyle(element, 'width', element.scrollWidth + "px");
            });
        }
        else {
            this._renderer.removeStyle(element, 'width');
        }
    };
    /** determine if option in set */
    pgSelectComponent.prototype.isInSet = function (set, option) {
        return Array.from(set).find(function (data) { return data.Value === option.Value; });
    };
    /** select multiple option */
    pgSelectComponent.prototype.selectMultipleOption = function (option, $event) {
        /** if tags do push to tag option */
        if (this._isTags && this._options.indexOf(option) === -1 && this._tagsOptions.indexOf(option) === -1) {
            this.addOption(option);
            this._tagsOptions.push(option);
        }
        this._operatingMultipleOption = option;
        if (this._selectedOptions.size < this.MaxMultiple) {
            this._selectedOptions.add(option);
        }
        this.emitMultipleOptions();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    /** emit multiple options */
    pgSelectComponent.prototype.emitMultipleOptions = function () {
        if (this._isMultiInit) {
            return;
        }
        var arrayOptions = Array.from(this._selectedOptions);
        this._value = arrayOptions.map(function (item) { return item.Value; });
        this.onChange(this._value);
    };
    /** update selected option when add remove option etc */
    pgSelectComponent.prototype.updateSelectedOption = function (currentModelValue, triggerByNgModel) {
        var _this = this;
        if (triggerByNgModel === void 0) { triggerByNgModel = false; }
        if (currentModelValue == null) {
            return;
        }
        if (this.Multiple) {
            var selectedOptions = this._options.filter(function (item) {
                return item != null && currentModelValue.indexOf(item.Value) !== -1;
            });
            if ((this.KeepUnListOptions || this.Tags) && !triggerByNgModel) {
                var _selectedOptions_1 = Array.from(this._selectedOptions);
                selectedOptions.forEach(function (option) {
                    var _exist = _selectedOptions_1.some(function (item) { return item._value === option._value; });
                    if (!_exist) {
                        _this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(function (option) {
                    _this._selectedOptions.add(option);
                });
            }
        }
        else {
            var selectedOption = this._options.filter(function (item) {
                return item != null && item.Value === currentModelValue;
            });
            this.chooseOption(selectedOption[0]);
        }
    };
    pgSelectComponent.prototype.forceUpdateSelectedOption = function (value) {
        var _this = this;
        /** trigger dirty check */
        setTimeout(function (_) {
            _this.updateSelectedOption(value);
        });
    };
    Object.defineProperty(pgSelectComponent.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._updateValue(value);
        },
        enumerable: true,
        configurable: true
    });
    pgSelectComponent.prototype.clearAllSelectedOption = function (emitChange) {
        var _this = this;
        if (emitChange === void 0) { emitChange = true; }
        this._selectedOptions.forEach(function (item) {
            _this.unSelectMultipleOption(item, null, emitChange);
        });
    };
    pgSelectComponent.prototype.handleKeyEnterEvent = function (event) {
        /** when composing end */
        if (!this._composing && this._isOpen) {
            event.preventDefault();
            event.stopPropagation();
            this.updateFilterOption(false);
            this.clickOption(this._activeFilterOption);
        }
    };
    pgSelectComponent.prototype.handleKeyBackspaceEvent = function (event) {
        if (!this._searchText && !this._composing && this._isMultiple) {
            event.preventDefault();
            var lastOption = Array.from(this._selectedOptions).pop();
            this.unSelectMultipleOption(lastOption);
        }
    };
    pgSelectComponent.prototype.handleKeyDownEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.nextOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectComponent.prototype.handleKeyUpEvent = function ($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.preOption(this._activeFilterOption, this._filterOptions.filter(function (w) { return !w.Disabled; }));
            this.scrollToActive();
        }
    };
    pgSelectComponent.prototype.preOption = function (option, options) {
        return options[options.indexOf(option) - 1] || options[options.length - 1];
    };
    pgSelectComponent.prototype.nextOption = function (option, options) {
        return options[options.indexOf(option) + 1] || options[0];
    };
    pgSelectComponent.prototype.clearSearchText = function () {
        this._searchText = '';
        this.updateFilterOption();
    };
    pgSelectComponent.prototype.updateFilterOption = function (updateActiveFilter) {
        if (updateActiveFilter === void 0) { updateActiveFilter = true; }
        if (this.Filter) {
            this._filterOptions = new _option_pipe__WEBPACK_IMPORTED_MODULE_7__["OptionPipe"]().transform(this._options, {
                searchText: this._searchText,
                tags: this._isTags,
                notFoundContent: this._isTags ? this._searchText : this._notFoundContent,
                disabled: !this._isTags,
                value: this._isTags ? this._searchText : 'disabled'
            });
        }
        else {
            this._filterOptions = this._options;
        }
        /** TODO: cause pre & next key selection not work */
        if (updateActiveFilter && !this._selectedOption) {
            this._activeFilterOption = this._filterOptions[0];
        }
    };
    pgSelectComponent.prototype.onSearchChange = function (searchValue) {
        this.SearchChange.emit(searchValue);
    };
    pgSelectComponent.prototype.onClick = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this._disabled) {
            this.Open = !this.Open;
            if (this.ShowSearch) {
                /** wait for search display */
                setTimeout(function (_) {
                    _this.searchInputElementRef.nativeElement.focus();
                });
            }
        }
    };
    pgSelectComponent.prototype.onKeyDown = function (e) {
        var _this = this;
        var keyCode = e.keyCode;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && this.Open) {
            this.Open = false;
            return;
        }
        if ((keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DOWN_ARROW"] && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) || this.Open) {
            return;
        }
        e.preventDefault();
        if (!this._disabled) {
            this.Open = true;
            if (this.ShowSearch) {
                /** wait for search display */
                setTimeout(function (_) {
                    _this.searchInputElementRef.nativeElement.focus();
                });
            }
        }
    };
    pgSelectComponent.prototype.closeDropDown = function () {
        if (!this.Open) {
            return;
        }
        this.onTouched();
        if (this.Multiple) {
            this._renderer.removeStyle(this.searchInputElementRef.nativeElement, 'width');
        }
        this.clearSearchText();
        this.Open = false;
    };
    pgSelectComponent.prototype.setClassMap = function () {
        var _a;
        var _this = this;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this._prefixCls,
            this._mode === 'combobox' && this._prefixCls + "-combobox",
            !this._disabled && this._prefixCls + "-enabled",
            this._disabled && this._prefixCls + "-disabled",
            this._isOpen && this._prefixCls + "-open",
            this._showSearch && this._prefixCls + "-show-search",
            this._size && this._prefixCls + "-" + this._size
        ].filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
        this._selectionClassMap = (_a = {},
            _a[this._selectionPrefixCls] = true,
            _a[this._selectionPrefixCls + "--single"] = !this.Multiple,
            _a[this._selectionPrefixCls + "--multiple"] = this.Multiple,
            _a);
    };
    pgSelectComponent.prototype.setDropDownClassMap = function () {
        var _a;
        this._dropDownClassMap = (_a = {},
            _a[this._dropDownPrefixCls] = true,
            _a['component-select'] = this._mode === 'combobox',
            _a[this._dropDownPrefixCls + "--single"] = !this.Multiple,
            _a[this._dropDownPrefixCls + "--multiple"] = this.Multiple,
            _a[this._dropDownPrefixCls + "-placement-bottomLeft"] = this._dropDownPosition === 'bottom',
            _a[this._dropDownPrefixCls + "-placement-topLeft"] = this._dropDownPosition === 'top',
            _a);
    };
    pgSelectComponent.prototype.scrollToActive = function () {
        var _this = this;
        /** wait for dropdown display */
        setTimeout(function (_) {
            if (_this._activeFilterOption && _this._activeFilterOption.Value) {
                var index = _this._filterOptions.findIndex(function (option) { return option.Value === _this._activeFilterOption.Value; });
                try {
                    var scrollPane = _this.dropdownUl.nativeElement.children[index];
                    // TODO: scrollIntoViewIfNeeded is not a standard API, why doing so?
                    /* tslint:disable-next-line:no-any */
                    scrollPane.scrollIntoViewIfNeeded(false);
                }
                catch (e) { }
            }
        });
    };
    pgSelectComponent.prototype.flushComponentState = function () {
        this.updateFilterOption();
        if (!this.Multiple) {
            this.updateSelectedOption(this._value);
        }
        else {
            if (this._value) {
                this.updateSelectedOption(this._value);
            }
        }
    };
    pgSelectComponent.prototype._setTriggerWidth = function () {
        this._triggerWidth = this._getTriggerRect().width;
        /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
        if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
            this._cdkOverlay.overlayRef.updateSize({
                width: this._triggerWidth
            });
        }
    };
    pgSelectComponent.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    pgSelectComponent.prototype.writeValue = function (value) {
        this._updateValue(value, false);
    };
    pgSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgSelectComponent.prototype.dropDownScroll = function (ul) {
        if (ul && ul.scrollHeight - ul.scrollTop === ul.clientHeight) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectComponent.prototype.checkDropDownScroll = function () {
        if (this.dropdownUl && this.dropdownUl.nativeElement.scrollHeight === this.dropdownUl.nativeElement.clientHeight) {
            this.ScrollToBottom.emit(true);
        }
    };
    pgSelectComponent.prototype.ngAfterContentInit = function () {
        if (this._value != null) {
            this.flushComponentState();
        }
    };
    pgSelectComponent.prototype.ngOnInit = function () {
        this.updateFilterOption();
        this.setClassMap();
        this.setDropDownClassMap();
    };
    pgSelectComponent.prototype.ngAfterContentChecked = function () {
        if (this._cacheOptions !== this._options) {
            /** update filter option after every content check cycle */
            this.updateFilterOption();
            this._cacheOptions = this._options;
        }
        else {
            this.updateFilterOption(false);
        }
    };
    pgSelectComponent.prototype._updateValue = function (value, emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        if (this._value === value) {
            return;
        }
        if (value == null && this.Multiple) {
            this._value = [];
        }
        else {
            this._value = value;
        }
        if (!this.Multiple) {
            if (value == null) {
                this._selectedOption = null;
            }
            else {
                this.updateSelectedOption(value);
            }
        }
        else {
            if (value) {
                if (value.length === 0) {
                    this.clearAllSelectedOption(emitChange);
                }
                else {
                    this.updateSelectedOption(value, true);
                }
            }
            else if (value == null) {
                this.clearAllSelectedOption(emitChange);
            }
        }
    };
    var pgSelectComponent_1;
    pgSelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('searchInput', { static: false }),
        __metadata("design:type", Object)
    ], pgSelectComponent.prototype, "searchInputElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trigger', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('dropdownUl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], pgSelectComponent.prototype, "dropdownUl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectComponent.prototype, "SearchChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectComponent.prototype, "OpenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], pgSelectComponent.prototype, "ScrollToBottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectComponent.prototype, "Filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], pgSelectComponent.prototype, "MaxMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"], { static: true }),
        __metadata("design:type", _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"])
    ], pgSelectComponent.prototype, "_cdkOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "AllowClear", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "KeepUnListOptions", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "Mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Multiple", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "PlaceHolder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "NotFoundContent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSelectComponent.prototype, "Size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "ShowSearch", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Tags", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSelectComponent.prototype, "Open", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], pgSelectComponent.prototype, "onKeyDown", null);
    pgSelectComponent = pgSelectComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'pg-select',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return pgSelectComponent_1; }),
                    multi: true
                }
            ],
            animations: [_animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_4__["dropDownAnimation"], _animations_tag_animations__WEBPACK_IMPORTED_MODULE_5__["tagAnimation"]],
            template: __importDefault(__webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/select/select.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./style/index.scss */ "./src/app/@pages/components/select/style/index.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]])
    ], pgSelectComponent);
    return pgSelectComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/select/select.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/@pages/components/select/select.module.ts ***!
  \***********************************************************/
/*! exports provided: pgSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSelectModule", function() { return pgSelectModule; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./option.component */ "./src/app/@pages/components/select/option.component.ts");
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option.pipe */ "./src/app/@pages/components/select/option.pipe.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.component */ "./src/app/@pages/components/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var pgSelectModule = /** @class */ (function () {
    function pgSelectModule() {
    }
    pgSelectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]],
            declarations: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectComponent"]],
            exports: [_option_pipe__WEBPACK_IMPORTED_MODULE_5__["OptionPipe"], _option_component__WEBPACK_IMPORTED_MODULE_4__["pgOptionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_6__["pgSelectComponent"]]
        })
    ], pgSelectModule);
    return pgSelectModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/select/style/index.scss":
/*!***********************************************************!*\
  !*** ./src/app/@pages/components/select/style/index.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL3NlbGVjdC9zdHlsZS9pbmRleC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/components/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/@pages/components/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _secondary_sidebar_secondary_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-sidebar/secondary-sidebar.component */ "./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.ts");
/* harmony import */ var _quickview_quickview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quickview/quickview.service */ "./src/app/@pages/components/quickview/quickview.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax/parallax.directive */ "./src/app/@pages/components/parallax/parallax.directive.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/@pages/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _forms_form_group_default_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/form-group-default.directive */ "./src/app/@pages/components/forms/form-group-default.directive.ts");
/* harmony import */ var _view_view_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view.directive */ "./src/app/@pages/components/view/view.directive.ts");
/* harmony import */ var _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collapse/collapse.module */ "./src/app/@pages/components/collapse/collapse.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./container/container.component */ "./src/app/@pages/components/container/container.component.ts");
/* harmony import */ var _container_page_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./container/page-container.component */ "./src/app/@pages/components/container/page-container.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/@pages/components/menu/menu.component.ts");
/* harmony import */ var _menu_menu_alt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu/menu-alt.component */ "./src/app/@pages/components/menu/menu-alt.component.ts");
/* harmony import */ var _menu_menu_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./menu/menu-icon.component */ "./src/app/@pages/components/menu/menu-icon.component.ts");
/* harmony import */ var _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-view/list-item/list-item.component */ "./src/app/@pages/components/list-view/list-item/list-item.component.ts");
/* harmony import */ var _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list-view/list-view-container/list-view-container.component */ "./src/app/@pages/components/list-view/list-view-container/list-view-container.component.ts");
/* harmony import */ var _retina_retina_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./retina/retina.directive */ "./src/app/@pages/components/retina/retina.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TypeaheadModule"].forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
            declarations: [
                _secondary_sidebar_secondary_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SecondarySidebarComponent"],
                _parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_6__["ParallaxDirective"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
                _forms_form_group_default_directive__WEBPACK_IMPORTED_MODULE_8__["FormGroupDefaultDirective"],
                _view_view_directive__WEBPACK_IMPORTED_MODULE_9__["ViewDirective"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_12__["ContainerComponent"],
                _container_page_container_component__WEBPACK_IMPORTED_MODULE_13__["pageContainer"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _menu_menu_alt_component__WEBPACK_IMPORTED_MODULE_16__["MenuAltComponent"],
                _menu_menu_icon_component__WEBPACK_IMPORTED_MODULE_17__["MenuIconComponent"],
                _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__["ListItemComponent"],
                _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_19__["ListViewContainerComponent"],
                _retina_retina_directive__WEBPACK_IMPORTED_MODULE_20__["pgRetinaDirective"]
            ],
            exports: [
                _secondary_sidebar_secondary_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SecondarySidebarComponent"],
                _parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_6__["ParallaxDirective"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
                _forms_form_group_default_directive__WEBPACK_IMPORTED_MODULE_8__["FormGroupDefaultDirective"],
                _view_view_directive__WEBPACK_IMPORTED_MODULE_9__["ViewDirective"],
                _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_10__["pgCollapseModule"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_12__["ContainerComponent"],
                _container_page_container_component__WEBPACK_IMPORTED_MODULE_13__["pageContainer"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _menu_menu_alt_component__WEBPACK_IMPORTED_MODULE_16__["MenuAltComponent"],
                _menu_menu_icon_component__WEBPACK_IMPORTED_MODULE_17__["MenuIconComponent"],
                _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__["ListItemComponent"],
                _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_19__["ListViewContainerComponent"],
                _retina_retina_directive__WEBPACK_IMPORTED_MODULE_20__["pgRetinaDirective"]
            ],
            providers: [
                _quickview_quickview_service__WEBPACK_IMPORTED_MODULE_4__["QuickviewService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@pages/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appSidebar, toggler) {
        var _this = this;
        this.appSidebar = appSidebar;
        this.toggler = toggler;
        this.subscriptions = [];
        this.pin = false;
        this.drawer = false;
        this.sideBarWidth = 280;
        this.sideBarWidthCondensed = 280 - 70;
        this.subscriptions.push(this.toggler.sideBarToggle.subscribe(function (toggle) {
            _this.toggleMobile(toggle);
        }));
        this.subscriptions.push(this.toggler.pageContainerHover.subscribe(function (message) {
            _this.closeSideBar();
        }));
        this.subscriptions.push(this.toggler.menuDrawer.subscribe(function (message) {
            _this.toggleDrawer();
        }));
        this.mobileSidebar = false;
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subs = _a[_i];
            subs.unsubscribe();
        }
        clearTimeout(this.timer);
    };
    SidebarComponent.prototype.openSideBar = function () {
        if (pg.isVisibleSm() || pg.isVisibleXs()) {
            return false;
        }
        if (this.pin) {
            return false;
        }
        this.style = 'translate3d(' + this.sideBarWidthCondensed + 'px, 0,0)';
        pg.addClass(document.body, 'sidebar-visible');
    };
    SidebarComponent.prototype.closeSideBar = function () {
        if (pg.isVisibleSm() || pg.isVisibleXs()) {
            return false;
        }
        if (this.pin) {
            return false;
        }
        this.style = 'translate3d(0,0,0)';
        pg.removeClass(document.body, 'sidebar-visible');
        // this.drawer = false;
    };
    SidebarComponent.prototype.toggleMenuPin = function () {
        if (this.pin) {
            this.pin = false;
        }
        else {
            this.pin = true;
        }
    };
    SidebarComponent.prototype.toggleDrawer = function () {
        if (this.drawer) {
            this.drawer = false;
        }
        else {
            this.drawer = true;
        }
    };
    SidebarComponent.prototype.toggleMobile = function (toggle) {
        var _this = this;
        clearTimeout(this.timer);
        if (toggle) {
            this.mobileSidebar = toggle;
        }
        else {
            this.timer = setTimeout(function () {
                _this.mobileSidebar = toggle;
            }, 400);
        }
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.transform'),
        __metadata("design:type", String)
    ], SidebarComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('sideBarOverlay', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SidebarComponent.prototype, "sideBarOverlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('sideBarHeader', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SidebarComponent.prototype, "sideBarHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('menuItems', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SidebarComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.visible'),
        __metadata("design:type", Boolean)
    ], SidebarComponent.prototype, "mobileSidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SidebarComponent.prototype, "openSideBar", null);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/components/sidebar/sidebar.component.html")).default,
            host: {
                class: 'page-sidebar'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/@pages/components/sidebar/sidebar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/switch/switch.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/switch/switch.component.ts ***!
  \**************************************************************/
/*! exports provided: pgSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSwitchComponent", function() { return pgSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgSwitchComponent = /** @class */ (function () {
    function pgSwitchComponent() {
        this._disabled = false;
        this._prefixCls = 'toggle-switch';
        this._color = 'primary';
        this._innerPrefixCls = this._prefixCls + "-inner ";
        this._checked = false;
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    pgSwitchComponent_1 = pgSwitchComponent;
    Object.defineProperty(pgSwitchComponent.prototype, "Size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSwitchComponent.prototype, "Color", {
        set: function (value) {
            this._color = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgSwitchComponent.prototype, "Disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    pgSwitchComponent.prototype.onClick = function (e) {
        e.preventDefault();
        if (!this._disabled) {
            this.updateValue(!this._checked);
            this.onChange(this._checked);
        }
    };
    pgSwitchComponent.prototype.updateValue = function (value) {
        if (this._checked === value) {
            return;
        }
        this._checked = value;
        this.setClassMap();
    };
    pgSwitchComponent.prototype.setClassMap = function () {
        var _a;
        this._classMap = (_a = {},
            _a[this._prefixCls] = true,
            _a[this._prefixCls + "-checked"] = this._checked,
            _a[this._prefixCls + "-disabled"] = this._disabled,
            _a[this._prefixCls + "-small"] = this._size === 'small',
            _a[this._color] = this._color,
            _a);
    };
    pgSwitchComponent.prototype.writeValue = function (value) {
        this.updateValue(value);
    };
    pgSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    pgSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    pgSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.Disabled = isDisabled;
    };
    pgSwitchComponent.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    var pgSwitchComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSwitchComponent.prototype, "Size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgSwitchComponent.prototype, "Color", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgSwitchComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], pgSwitchComponent.prototype, "onClick", null);
    pgSwitchComponent = pgSwitchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-switch',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <span [ngClass]=\"_classMap\" tabindex=\"0\">\n      <span [ngClass]=\"_innerPrefixCls\">\n        <ng-template [ngIf]=\"_checked\">\n          <ng-content select=\"[checked]\"></ng-content>\n        </ng-template>\n        <ng-template [ngIf]=\"!_checked\">\n          <ng-content select=\"[unchecked]\"></ng-content>\n        </ng-template>\n      </span>\n    </span>\n  ",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return pgSwitchComponent_1; }),
                    multi: true
                }
            ],
            styles: [__importDefault(__webpack_require__(/*! ./switch.scss */ "./src/app/@pages/components/switch/switch.scss")).default]
        })
    ], pgSwitchComponent);
    return pgSwitchComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/switch/switch.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/@pages/components/switch/switch.module.ts ***!
  \***********************************************************/
/*! exports provided: pgSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgSwitchModule", function() { return pgSwitchModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch.component */ "./src/app/@pages/components/switch/switch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgSwitchModule = /** @class */ (function () {
    function pgSwitchModule() {
    }
    pgSwitchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_switch_component__WEBPACK_IMPORTED_MODULE_2__["pgSwitchComponent"]],
            declarations: [_switch_component__WEBPACK_IMPORTED_MODULE_2__["pgSwitchComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        })
    ], pgSwitchModule);
    return pgSwitchModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/switch/switch.scss":
/*!******************************************************!*\
  !*** ./src/app/@pages/components/switch/switch.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL3N3aXRjaC9zd2l0Y2guc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/components/tabs/tab-body.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/tabs/tab-body.component.ts ***!
  \**************************************************************/
/*! exports provided: pgTabBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabBodyComponent", function() { return pgTabBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var pgTabBodyComponent = /** @class */ (function () {
    function pgTabBodyComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabBodyComponent.prototype, "content", void 0);
    pgTabBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tab-body',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n  "
        })
    ], pgTabBodyComponent);
    return pgTabBodyComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/tabs/tab-label.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/tabs/tab-label.directive.ts ***!
  \***************************************************************/
/*! exports provided: pgTabLabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabLabelDirective", function() { return pgTabLabelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var pgTabLabelDirective = /** @class */ (function () {
    function pgTabLabelDirective(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
    }
    Object.defineProperty(pgTabLabelDirective.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgTabLabelDirective.prototype.getOffsetLeft = function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    pgTabLabelDirective.prototype.getOffsetWidth = function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    pgTabLabelDirective.prototype.getOffsetTop = function () {
        return this.elementRef.nativeElement.offsetTop;
    };
    pgTabLabelDirective.prototype.getOffsetHeight = function () {
        return this.elementRef.nativeElement.offsetHeight;
    };
    pgTabLabelDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.nav-item-disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabLabelDirective.prototype, "disabled", null);
    pgTabLabelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pg-tab-label]',
            host: {
                '[class.nav-item]': 'true'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], pgTabLabelDirective);
    return pgTabLabelDirective;
}());



/***/ }),

/***/ "./src/app/@pages/components/tabs/tab.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/@pages/components/tabs/tab.component.ts ***!
  \*********************************************************/
/*! exports provided: pgTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabComponent", function() { return pgTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabset.component */ "./src/app/@pages/components/tabs/tabset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgTabComponent = /** @class */ (function () {
    function pgTabComponent(pgTabSetComponent) {
        this.pgTabSetComponent = pgTabSetComponent;
        this.disabled = false;
        this.position = null;
        this.origin = null;
        this.pgSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pgClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pgDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(pgTabComponent.prototype, "Disabled", {
        get: function () {
            return this.disabled;
        },
        set: function (value) {
            this.disabled = Object(_util_convert__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    pgTabComponent.prototype.ngOnInit = function () {
        this.pgTabSetComponent._tabs.push(this);
    };
    pgTabComponent.prototype.ngOnDestroy = function () {
        this.pgTabSetComponent._tabs.splice(this.pgTabSetComponent._tabs.indexOf(this), 1);
    };
    pgTabComponent.ctorParameters = function () { return [
        { type: _tabset_component__WEBPACK_IMPORTED_MODULE_2__["pgTabSetComponent"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabComponent.prototype, "Disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTabComponent.prototype, "pgSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTabComponent.prototype, "pgClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], pgTabComponent.prototype, "pgDeselect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('TabHeading', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabComponent.prototype, "_tabHeading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabComponent.prototype, "_content", void 0);
    pgTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tab',
            template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
            host: {
                '[class.ant-tabs-tabpane]': 'true'
            }
        }),
        __metadata("design:paramtypes", [_tabset_component__WEBPACK_IMPORTED_MODULE_2__["pgTabSetComponent"]])
    ], pgTabComponent);
    return pgTabComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/tabs/tabs-ink-bar.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/tabs/tabs-ink-bar.directive.ts ***!
  \******************************************************************/
/*! exports provided: pgTabsInkBarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabsInkBarDirective", function() { return pgTabsInkBarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_request_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/request-animation */ "./src/app/@pages/components/util/request-animation.ts");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var pgTabsInkBarDirective = /** @class */ (function () {
    function pgTabsInkBarDirective(_renderer, _elementRef, _ngZone) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._animated = false;
        this.PositionMode = 'horizontal';
    }
    Object.defineProperty(pgTabsInkBarDirective.prototype, "Animated", {
        get: function () {
            return this._animated;
        },
        set: function (value) {
            this._animated = Object(_util_convert__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    pgTabsInkBarDirective.prototype.alignToElement = function (element) {
        var _this = this;
        this.show();
        this._ngZone.runOutsideAngular(function () {
            Object(_util_request_animation__WEBPACK_IMPORTED_MODULE_1__["reqAnimFrame"])(function () {
                /** when horizontal remove height style and add transfrom left **/
                if (_this.PositionMode === 'horizontal') {
                    _this._renderer.removeStyle(_this._elementRef.nativeElement, 'height');
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'transform', "translate3d(" + _this._getLeftPosition(element) + ", 0px, 0px)");
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'width', _this._getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transfrom top **/
                    _this._renderer.removeStyle(_this._elementRef.nativeElement, 'width');
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'transform', "translate3d(0px, " + _this._getTopPosition(element) + ", 0px)");
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'height', _this._getElementHeight(element));
                }
            });
        });
    };
    pgTabsInkBarDirective.prototype.show = function () {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'visible');
    };
    pgTabsInkBarDirective.prototype.setDisplay = function (value) {
        this._renderer.setStyle(this._elementRef.nativeElement, 'display', value);
    };
    pgTabsInkBarDirective.prototype.hide = function () {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    };
    pgTabsInkBarDirective.prototype._getLeftPosition = function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    pgTabsInkBarDirective.prototype._getElementWidth = function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    pgTabsInkBarDirective.prototype._getTopPosition = function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    pgTabsInkBarDirective.prototype._getElementHeight = function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    pgTabsInkBarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.nav-item-animated'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsInkBarDirective.prototype, "Animated", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], pgTabsInkBarDirective.prototype, "PositionMode", void 0);
    pgTabsInkBarDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pg-tabs-ink-bar]',
            host: {
                '[class.nav-item]': 'true'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], pgTabsInkBarDirective);
    return pgTabsInkBarDirective;
}());



/***/ }),

/***/ "./src/app/@pages/components/tabs/tabs-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/tabs/tabs-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: pgTabsNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabsNavComponent", function() { return pgTabsNavComponent; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/convert */ "./src/app/@pages/components/util/convert.ts");
/* harmony import */ var _tab_label_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-label.directive */ "./src/app/@pages/components/tabs/tab-label.directive.ts");
/* harmony import */ var _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-ink-bar.directive */ "./src/app/@pages/components/tabs/tabs-ink-bar.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** code from https://github.com/angular/material2 */







var EXAGGERATED_OVERSCROLL = 64;
var pgTabsNavComponent = /** @class */ (function () {
    function pgTabsNavComponent(_elementRef, _ngZone, _renderer, _dir) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._dir = _dir;
        this._animated = true;
        this._hideBar = false;
        this._showPagination = true;
        this._showPaginationControls = false;
        this._disableScrollAfter = true;
        this._disableScrollBefore = true;
        this._scrollDistance = 0;
        this._selectedIndexChanged = false;
        this._realignInkBar = null;
        this._selectedIndex = 0;
        this._tabPositionMode = 'horizontal';
        this._tabPosition = 'top';
        this.Size = 'default';
        this._type = 'line';
    }
    Object.defineProperty(pgTabsNavComponent.prototype, "Animated", {
        get: function () {
            return this._animated;
        },
        set: function (value) {
            this._animated = Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "Position", {
        get: function () {
            return this._tabPosition;
        },
        set: function (value) {
            this._tabPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "HideBar", {
        get: function () {
            return this._hideBar;
        },
        set: function (value) {
            this._hideBar = Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "Type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "ShowPagination", {
        get: function () {
            return this._showPagination;
        },
        set: function (value) {
            this._showPagination = Object(_util_convert__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "PositionMode", {
        get: function () {
            return this._tabPositionMode;
        },
        set: function (value) {
            this._tabPositionMode = value;
            this._alignInkBarToSelectedTab();
            if (this.ShowPagination) {
                this._updatePagination();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this._selectedIndexChanged = this._selectedIndex !== value;
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    pgTabsNavComponent.prototype._onContentChanges = function () {
        if (this.ShowPagination) {
            this._updatePagination();
        }
        this._alignInkBarToSelectedTab();
    };
    pgTabsNavComponent.prototype._scrollHeader = function (scrollDir) {
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    };
    pgTabsNavComponent.prototype.ngAfterContentChecked = function () {
        if (this._tabLabelCount !== this._labelWrappers.length) {
            if (this.ShowPagination) {
                this._updatePagination();
            }
            this._tabLabelCount = this._labelWrappers.length;
        }
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            if (this.ShowPagination) {
                this._checkScrollingControls();
            }
            this._alignInkBarToSelectedTab();
            this._selectedIndexChanged = false;
        }
        if (this._scrollDistanceChanged) {
            if (this.ShowPagination) {
                this._updateTabScrollPosition();
            }
            this._scrollDistanceChanged = false;
        }
    };
    pgTabsNavComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._realignInkBar = this._ngZone.runOutsideAngular(function () {
            var dirChange = _this._dir ? _this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            var resize = typeof window !== 'undefined' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(10)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(dirChange, resize)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null))
                .subscribe(function () {
                if (_this.ShowPagination) {
                    _this._updatePagination();
                }
                _this._alignInkBarToSelectedTab();
            });
        });
    };
    pgTabsNavComponent.prototype._updateTabScrollPosition = function () {
        var scrollDistance = this.scrollDistance;
        if (this.PositionMode === 'horizontal') {
            var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this._renderer.setStyle(this._tabList.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
        }
        else {
            this._renderer.setStyle(this._tabList.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
        }
    };
    pgTabsNavComponent.prototype._updatePagination = function () {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
    };
    pgTabsNavComponent.prototype._checkPaginationEnabled = function () {
        this._showPaginationControls = this.tabListScrollWidthHeightPix > this.elementRefOffSetWidthHeight;
        if (!this._showPaginationControls) {
            this.scrollDistance = 0;
        }
    };
    pgTabsNavComponent.prototype._scrollToLabel = function (labelIndex) {
        var selectedLabel = this._labelWrappers ? this._labelWrappers.toArray()[labelIndex] : null;
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        var labelBeforePos;
        var labelAfterPos;
        if (this.PositionMode === 'horizontal') {
            if (this._getLayoutDirection() === 'ltr') {
                labelBeforePos = selectedLabel.getOffsetLeft();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
            }
            else {
                labelAfterPos = this._tabList.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
            }
        }
        else {
            labelBeforePos = selectedLabel.getOffsetTop();
            labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
        }
        var beforeVisiblePos = this.scrollDistance;
        var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    };
    pgTabsNavComponent.prototype._checkScrollingControls = function () {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance === 0;
        this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    pgTabsNavComponent.prototype._getMaxScrollDistance = function () {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    };
    Object.defineProperty(pgTabsNavComponent.prototype, "scrollDistance", {
        get: function () {
            return this._scrollDistance;
        },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: function (v) {
            this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this._scrollDistanceChanged = true;
            this._checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "viewWidthHeightPix", {
        get: function () {
            var PAGINATION_PIX = 0;
            if (this._showPaginationControls) {
                PAGINATION_PIX = 64;
            }
            if (this.PositionMode === 'horizontal') {
                return this._tabListContainer.nativeElement.offsetWidth - PAGINATION_PIX;
            }
            else {
                return this._tabListContainer.nativeElement.offsetHeight - PAGINATION_PIX;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
        get: function () {
            if (this.PositionMode === 'horizontal') {
                return this._tabList.nativeElement.scrollWidth;
            }
            else {
                return this._tabList.nativeElement.scrollHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabsNavComponent.prototype, "elementRefOffSetWidthHeight", {
        get: function () {
            if (this.PositionMode === 'horizontal') {
                return this._elementRef.nativeElement.offsetWidth;
            }
            else {
                return this._elementRef.nativeElement.offsetHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    pgTabsNavComponent.prototype._getLayoutDirection = function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    pgTabsNavComponent.prototype._alignInkBarToSelectedTab = function () {
        if (this.Type !== 'fillup') {
            var selectedLabelWrapper = this._labelWrappers && this._labelWrappers.length
                ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this._inkBar) {
                this._inkBar.alignToElement(selectedLabelWrapper);
            }
        }
    };
    pgTabsNavComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabsNavComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsNavComponent.prototype, "Animated", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabsNavComponent.prototype, "Position", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsNavComponent.prototype, "HideBar", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabsNavComponent.prototype, "Type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('tabBarExtraContent', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], pgTabsNavComponent.prototype, "_tabBarExtraContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tab_label_directive__WEBPACK_IMPORTED_MODULE_5__["pgTabLabelDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], pgTabsNavComponent.prototype, "_labelWrappers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__["pgTabsInkBarDirective"], { static: true }),
        __metadata("design:type", _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__["pgTabsInkBarDirective"])
    ], pgTabsNavComponent.prototype, "_inkBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabListContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], pgTabsNavComponent.prototype, "_tabListContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabList', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], pgTabsNavComponent.prototype, "_tabList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], pgTabsNavComponent.prototype, "ShowPagination", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabsNavComponent.prototype, "PositionMode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], pgTabsNavComponent.prototype, "selectedIndex", null);
    pgTabsNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pg-tabs-nav',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: "\n    <div class=\"nav-tabs-wrapper\" [class.scrolling]=\"_showPaginationControls\" #tabListContainer>\n      <span\n        class=\"nav-tabs-navigator left btn btn-link\"\n        (click)=\"_scrollHeader('before')\"\n        [class.disabled]=\"_disableScrollBefore\"\n        *ngIf=\"_showPaginationControls\"\n      >\n        <i class=\"pg-icon\">chevron_left</i>\n      </span>\n      <div class=\"nav-wrap\">\n        <ul\n          class=\"nav nav-tabs nav-tabs-{{ _type }} nav-tabs-{{ _tabPosition }}\"\n          [class.tabs-nav-animated]=\"Animated\"\n          #tabList\n          (cdkObserveContent)=\"_onContentChanges()\"\n        >\n          <div\n            class=\"active-bar\"\n            pg-tabs-ink-bar\n            [hidden]=\"HideBar\"\n            [Animated]=\"Animated\"\n            [PositionMode]=\"PositionMode\"\n            style=\"display: block;\"\n          ></div>\n          <ng-content></ng-content>\n        </ul>\n      </div>\n      <span\n        class=\"nav-tabs-navigator right btn btn-link\"\n        (click)=\"_scrollHeader('after')\"\n        [class.disabled]=\"_disableScrollAfter\"\n        *ngIf=\"_showPaginationControls\"\n      >\n        <i class=\"pg-icon\">chevron_right</i>\n      </span>\n    </div>\n  ",
            host: {}
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"]])
    ], pgTabsNavComponent);
    return pgTabsNavComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/tabs/tabs.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/@pages/components/tabs/tabs.module.ts ***!
  \*******************************************************/
/*! exports provided: pgTabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabsModule", function() { return pgTabsModule; });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-body.component */ "./src/app/@pages/components/tabs/tab-body.component.ts");
/* harmony import */ var _tab_label_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-label.directive */ "./src/app/@pages/components/tabs/tab-label.directive.ts");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab.component */ "./src/app/@pages/components/tabs/tab.component.ts");
/* harmony import */ var _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-ink-bar.directive */ "./src/app/@pages/components/tabs/tabs-ink-bar.directive.ts");
/* harmony import */ var _tabs_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs-nav.component */ "./src/app/@pages/components/tabs/tabs-nav.component.ts");
/* harmony import */ var _tabset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabset.component */ "./src/app/@pages/components/tabs/tabset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

// import { PortalModule } from '@angular/cdk/portal';








var pgTabsModule = /** @class */ (function () {
    function pgTabsModule() {
    }
    pgTabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_tab_component__WEBPACK_IMPORTED_MODULE_5__["pgTabComponent"], _tabset_component__WEBPACK_IMPORTED_MODULE_8__["pgTabSetComponent"], _tabs_nav_component__WEBPACK_IMPORTED_MODULE_7__["pgTabsNavComponent"], _tab_label_directive__WEBPACK_IMPORTED_MODULE_4__["pgTabLabelDirective"], _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__["pgTabsInkBarDirective"], _tab_body_component__WEBPACK_IMPORTED_MODULE_3__["pgTabBodyComponent"]],
            exports: [_tab_component__WEBPACK_IMPORTED_MODULE_5__["pgTabComponent"], _tabset_component__WEBPACK_IMPORTED_MODULE_8__["pgTabSetComponent"], _tabs_nav_component__WEBPACK_IMPORTED_MODULE_7__["pgTabsNavComponent"], _tab_label_directive__WEBPACK_IMPORTED_MODULE_4__["pgTabLabelDirective"], _tabs_ink_bar_directive__WEBPACK_IMPORTED_MODULE_6__["pgTabsInkBarDirective"], _tab_body_component__WEBPACK_IMPORTED_MODULE_3__["pgTabBodyComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]]
        })
    ], pgTabsModule);
    return pgTabsModule;
}());



/***/ }),

/***/ "./src/app/@pages/components/tabs/tabs.scss":
/*!**************************************************!*\
  !*** ./src/app/@pages/components/tabs/tabs.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9jb21wb25lbnRzL3RhYnMvdGFicy5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/components/tabs/tabset.component.ts":
/*!************************************************************!*\
  !*** ./src/app/@pages/components/tabs/tabset.component.ts ***!
  \************************************************************/
/*! exports provided: TabChangeEvent, pgTabSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabChangeEvent", function() { return TabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgTabSetComponent", function() { return pgTabSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _tabs_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-nav.component */ "./src/app/@pages/components/tabs/tabs-nav.component.ts");
/** code from https://github.com/angular/material2 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var TabChangeEvent = /** @class */ (function () {
    function TabChangeEvent() {
    }
    return TabChangeEvent;
}());

var pgTabSetComponent = /** @class */ (function () {
    function pgTabSetComponent(_renderer) {
        this._renderer = _renderer;
        this._prefixCls = 'nav-tabs';
        this._tabPosition = 'top';
        this._tabPositionMode = 'horizontal';
        this._indexToSelect = 0;
        this._selectedIndex = null;
        this._isViewInit = false;
        this._tabs = [];
        this._tabAnimation = '';
        this._extra_tab_class = '';
        this._extra_tabcontent_class = '';
        this.Animated = true;
        this.ShowPagination = true;
        this.Hide = false;
        this.SelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.Size = 'default';
        this._type = 'line';
        this.tabs = [];
    }
    Object.defineProperty(pgTabSetComponent.prototype, "SelectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this._indexToSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "SelectedIndexChange", {
        get: function () {
            return this.SelectChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) { return event.index; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "TabPosition", {
        get: function () {
            return this._tabPosition;
        },
        set: function (value) {
            this._tabPosition = value;
            if (this._tabPosition === 'top' || this._tabPosition === 'bottom') {
                this._tabPositionMode = 'horizontal';
            }
            else {
                this._tabPositionMode = 'vertical';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "extraTabClass", {
        set: function (value) {
            this._extra_tab_class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "extraTabContentClass", {
        set: function (value) {
            this._extra_tabcontent_class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "Type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (this._type === value) {
                return;
            }
            this._type = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "tabAnimation", {
        set: function (value) {
            this._tabAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    pgTabSetComponent.prototype._setPosition = function (value) { };
    pgTabSetComponent.prototype._setClassMap = function () { };
    pgTabSetComponent.prototype.clickLabel = function (index) {
        if (this._tabs[index].Disabled) {
        }
        else {
            this.SelectedIndex = index;
            this._tabs[index].pgClick.emit();
        }
    };
    pgTabSetComponent.prototype.ngOnInit = function () {
        this._setClassMap();
    };
    pgTabSetComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // Clamp the next selected index to the bounds of 0 and the tabs length. Note the `|| 0`, which
        // ensures that values like NaN can't get through and which would otherwise throw the
        // component into an infinite loop (since Math.max(NaN, 0) === NaN).
        var indexToSelect = (this._indexToSelect = Math.min(this._tabs.length - 1, Math.max(this._indexToSelect || 0, 0)));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex !== indexToSelect && this._selectedIndex != null) {
            this.SelectChange.emit(this._createChangeEvent(indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach(function (tab, index) {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - _this._selectedIndex;
            }
        });
        this._selectedIndex = indexToSelect;
    };
    pgTabSetComponent.prototype.ngAfterViewInit = function () {
        this._isViewInit = true;
    };
    pgTabSetComponent.prototype._createChangeEvent = function (index) {
        var event = new TabChangeEvent();
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs[index];
            this._tabs.forEach(function (item, i) {
                if (i !== index) {
                    item.pgDeselect.emit();
                }
            });
            event.tab.pgSelect.emit();
        }
        return event;
    };
    Object.defineProperty(pgTabSetComponent.prototype, "inkBarAnimated", {
        get: function () {
            return this.Animated === true || this.Animated.inkBar === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pgTabSetComponent.prototype, "tabPaneAnimated", {
        get: function () {
            return this.Animated === true || this.Animated.tabPane === true;
        },
        enumerable: true,
        configurable: true
    });
    pgTabSetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabSetComponent.prototype, "TabBarExtraTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('TabBarExtraContent', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], pgTabSetComponent.prototype, "TabBarExtraContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabNav', { static: true }),
        __metadata("design:type", _tabs_nav_component__WEBPACK_IMPORTED_MODULE_3__["pgTabsNavComponent"])
    ], pgTabSetComponent.prototype, "_tabNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabContent', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgTabSetComponent.prototype, "_tabContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hostContent', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], pgTabSetComponent.prototype, "_hostContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "Animated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "ShowPagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "Hide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], pgTabSetComponent.prototype, "SelectedIndex", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]),
        __metadata("design:paramtypes", [])
    ], pgTabSetComponent.prototype, "SelectedIndexChange", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], pgTabSetComponent.prototype, "SelectChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], pgTabSetComponent.prototype, "Size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "TabPosition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "extraTabClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "extraTabContentClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "Type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], pgTabSetComponent.prototype, "tabAnimation", null);
    pgTabSetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pg-tabset',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"tab-wrapper tab-{{ _tabPositionMode }} {{ _tabPosition }} {{ _type }} {{ _extra_tab_class }}\" #hostContent>\n      <pg-tabs-nav\n        #tabNav\n        [Size]=\"Size\"\n        [Type]=\"Type\"\n        [ShowPagination]=\"ShowPagination\"\n        [PositionMode]=\"_tabPositionMode\"\n        [Position]=\"_tabPosition\"\n        [Animated]=\"inkBarAnimated\"\n        [HideBar]=\"Hide\"\n        [selectedIndex]=\"SelectedIndex\"\n      >\n        <ng-template #tabBarExtraContent>\n          <ng-template [ngTemplateOutlet]=\"TabBarExtraTemplate || TabBarExtraContent\"></ng-template>\n        </ng-template>\n        <li pg-tab-label [disabled]=\"tab.disabled\" (click)=\"clickLabel(i)\" *ngFor=\"let tab of _tabs; let i = index\">\n          <a href=\"javascript:void(0);\" class=\"\" [class.active]=\"SelectedIndex == i && !Hide\">\n            <ng-template [ngTemplateOutlet]=\"tab._tabHeading\"></ng-template>\n          </a>\n        </li>\n      </pg-tabs-nav>\n      <div class=\"tab-content-wrapper {{ _extra_tabcontent_class }}\">\n        <div\n          class=\"tab-content {{ _tabAnimation }}\"\n          #tabContent\n          [class.animated]=\"tabPaneAnimated\"\n          [class.not-animated]=\"!tabPaneAnimated\"\n          [style.margin-left.%]=\"tabPaneAnimated && -SelectedIndex * 100\"\n        >\n          <pg-tab-body\n            class=\"tab-pane\"\n            [class.active]=\"SelectedIndex == i && !Hide\"\n            [class.inactive]=\"SelectedIndex != i || Hide\"\n            [content]=\"tab.content\"\n            *ngFor=\"let tab of _tabs; let i = index\"\n          >\n          </pg-tab-body>\n        </div>\n      </div>\n    </div>\n  ",
            styles: [__importDefault(__webpack_require__(/*! ./tabs.scss */ "./src/app/@pages/components/tabs/tabs.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], pgTabSetComponent);
    return pgTabSetComponent;
}());



/***/ }),

/***/ "./src/app/@pages/components/util/convert.ts":
/*!***************************************************!*\
  !*** ./src/app/@pages/components/util/convert.ts ***!
  \***************************************************/
/*! exports provided: toBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function toBoolean(value) {
    return value === '' || (value && value !== 'false');
}


/***/ }),

/***/ "./src/app/@pages/components/util/request-animation.ts":
/*!*************************************************************!*\
  !*** ./src/app/@pages/components/util/request-animation.ts ***!
  \*************************************************************/
/*! exports provided: reqAnimFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqAnimFrame", function() { return reqAnimFrame; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var availablePrefixs = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    var lastTime = 0;
    return function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    var prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix ? window[prefix + "RequestAnimationFrame"] : requestAnimationFramePolyfill();
}
var reqAnimFrame = getRequestAnimationFrame();


/***/ }),

/***/ "./src/app/@pages/components/view/view.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/@pages/components/view/view.directive.ts ***!
  \**********************************************************/
/*! exports provided: ViewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDirective", function() { return ViewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ViewDirective = /** @class */ (function () {
    function ViewDirective(parallaxEl, renderer) {
        this.parallaxEl = parallaxEl;
        this.renderer = renderer;
    }
    ViewDirective.prototype.onClick = function (e) {
        e.preventDefault();
        if (this.parentView != null) {
            var parent = document.getElementById(this.parentView);
            if (parent) {
                if (this.animationType != null) {
                    pg.toggleClass(parent, this.animationType);
                }
                else {
                    pg.toggleClass(parent, 'push-parrallax');
                }
            }
        }
    };
    ViewDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ViewDirective.prototype, "parentView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ViewDirective.prototype, "animationType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewDirective.prototype, "onClick", null);
    ViewDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pg-view-trigger]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ViewDirective);
    return ViewDirective;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/blank/blank.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/@pages/layouts/blank/blank.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/@pages/layouts/blank/blank.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/@pages/layouts/blank/blank.component.ts ***!
  \*********************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('root', { static: false }),
        __metadata("design:type", Object)
    ], BlankComponent.prototype, "root", void 0);
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blank-layouts',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/blank/blank.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./blank.component.scss */ "./src/app/@pages/layouts/blank/blank.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/@pages/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: RootLayout, BlankComponent, SimplyWhiteLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root/root.component */ "./src/app/@pages/layouts/root/root.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootLayout", function() { return _root_root_component__WEBPACK_IMPORTED_MODULE_0__["RootLayout"]; });

/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/@pages/layouts/blank/blank.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return _blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["BlankComponent"]; });

/* harmony import */ var _simplywhite_simplywhite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simplywhite/simplywhite.component */ "./src/app/@pages/layouts/simplywhite/simplywhite.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplyWhiteLayout", function() { return _simplywhite_simplywhite_component__WEBPACK_IMPORTED_MODULE_2__["SimplyWhiteLayout"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// Remove in production
// This is a demo a layout


/***/ }),

/***/ "./src/app/@pages/layouts/root/root.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/@pages/layouts/root/root.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3Jvb3Qvcm9vdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/root/root.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/@pages/layouts/root/root.component.ts ***!
  \*******************************************************/
/*! exports provided: RootLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootLayout", function() { return RootLayout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var RootLayout = /** @class */ (function () {
    function RootLayout(toggler, router) {
        var _this = this;
        this.toggler = toggler;
        this.router = router;
        this._boxed = false;
        this._menuPin = false;
        this._pageContainerClass = '';
        this._contentClass = '';
        this._footer = true;
        this._menuDrawerOpen = false;
        //Mobile
        this._secondarySideBar = false;
        //Mobile
        this._mobileSidebar = false;
        //Mobile
        this._mobileHorizontalMenu = false;
        this._subscriptions = [];
        this.contentClass = '';
        this.pageWrapperClass = '';
        this.footer = true;
        if (this.layoutState) {
            pg.addClass(document.body, this.layoutState);
        }
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var root = _this.router.routerState.snapshot.root;
                while (root) {
                    if (root.children && root.children.length) {
                        root = root.children[0];
                    }
                    else if (root.data) {
                        //Custom Route Data here
                        _this._pageTitle = root.data['title'];
                        _this._layoutOption = root.data['layoutOption'];
                        _this._boxed = root.data['boxed'];
                        break;
                    }
                    else {
                        break;
                    }
                }
                //Reset Any Extra Layouts added from content pages
                pg.removeClass(document.body, _this.extraLayoutClass);
                //Close Sidebar and Horizonta Menu
                if (_this._mobileSidebar) {
                    _this._mobileSidebar = false;
                    pg.removeClass(document.body, 'sidebar-open');
                    _this.toggler.toggleMobileSideBar(_this._mobileSidebar);
                }
                _this._mobileHorizontalMenu = false;
                _this.toggler.toggleMobileHorizontalMenu(_this._mobileHorizontalMenu);
                //Scoll Top
                _this.scrollToTop();
            }
            //Subscribition List
            _this._subscriptions.push(_this.toggler.pageContainerClass.subscribe(function (state) {
                _this._pageContainerClass = state;
            }));
            _this._subscriptions.push(_this.toggler.contentClass.subscribe(function (state) {
                _this._contentClass = state;
            }));
            _this._subscriptions.push(_this.toggler.bodyLayoutClass.subscribe(function (state) {
                if (state) {
                    _this.extraLayoutClass = state;
                    pg.addClass(document.body, _this.extraLayoutClass);
                }
            }));
            _this._subscriptions.push(_this.toggler.Applayout.subscribe(function (state) {
                _this.changeLayout(state);
            }));
            _this._subscriptions.push(_this.toggler.Footer.subscribe(function (state) {
                _this._footer = state;
            }));
            _this._subscriptions.push(_this.toggler.mobileHorizontaMenu.subscribe(function (state) {
                _this._mobileHorizontalMenu = state;
            }));
        });
    }
    /** @function changeLayout
     *   @description Add Document Layout Class
     */
    RootLayout.prototype.changeLayout = function (type) {
        this.layoutState = type;
        if (type) {
            pg.addClass(document.body, type);
        }
    };
    /** @function removeLayout
     *   @description Remove Document Layout Class
     */
    RootLayout.prototype.removeLayout = function (type) {
        pg.removeClass(document.body, type);
    };
    RootLayout.prototype.ngOnInit = function () { };
    RootLayout.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    RootLayout.prototype.ngAfterViewInit = function () { };
    /** @function scrollToTop
     *   @description Force to scroll to top of page. Used on Route
     */
    RootLayout.prototype.scrollToTop = function () {
        var top = window.pageYOffset;
        if (top == 0) {
            var scroller = document.querySelector('.page-container');
            if (scroller)
                scroller.scrollTo(0, 0);
        }
        else {
            window.scrollTo(0, 0);
        }
    };
    /** @function openQuickView
     *   @description Show Quick View Component / Right Sidebar - Service
     */
    RootLayout.prototype.openQuickView = function ($e) {
        $e.preventDefault();
        this.toggler.toggleQuickView();
    };
    /** @function openSearch
     *   @description Show Quick Search Component - Service
     */
    RootLayout.prototype.openSearch = function ($e) {
        $e.preventDefault();
        this.toggler.toggleSearch(true);
    };
    /** @function toggleMenuPin
     *   @description Permanently Open / Close Main Sidebar
     */
    RootLayout.prototype.toggleMenuPin = function ($e) {
        if (pg.isVisibleSm()) {
            this._menuPin = false;
            return;
        }
        if (this._menuPin) {
            pg.removeClass(document.body, 'menu-pin');
            this._menuPin = false;
        }
        else {
            pg.addClass(document.body, 'menu-pin');
            this._menuPin = true;
        }
    };
    /** @function toggleMenuDrawer
     *   @description Open Main Sidebar Menu Drawer - Service
     */
    RootLayout.prototype.toggleMenuDrawer = function () {
        this._menuDrawerOpen = this._menuDrawerOpen == true ? false : true;
        this.toggler.toggleMenuDrawer();
    };
    /** @function toggleMobileSidebar
     *   @description Open Main Sidebar on Mobile - Service
     */
    RootLayout.prototype.toggleMobileSidebar = function () {
        if (this._mobileSidebar) {
            this._mobileSidebar = false;
            pg.removeClass(document.body, 'sidebar-open');
        }
        else {
            this._mobileSidebar = true;
            pg.addClass(document.body, 'sidebar-open');
        }
        this.toggler.toggleMobileSideBar(this._mobileSidebar);
    };
    /** @function toggleHorizontalMenuMobile
     *   @description Open Secondary Sidebar on Mobile - Service
     */
    RootLayout.prototype.toggleSecondarySideBar = function () {
        console.log('hi');
        this._secondarySideBar = this._secondarySideBar == true ? false : true;
        this.toggler.toggleSecondarySideBar(this._secondarySideBar);
    };
    /** @function toggleHorizontalMenuMobile
     *   @description Call Horizontal Menu Toggle Service for mobile
     */
    RootLayout.prototype.toggleHorizontalMenuMobile = function () {
        this._mobileHorizontalMenu = this._mobileHorizontalMenu == true ? false : true;
        this.toggler.toggleMobileHorizontalMenu(this._mobileHorizontalMenu);
    };
    RootLayout.prototype.onResize = function () {
        this.autoHideMenuPin();
    };
    //Utils
    RootLayout.prototype.autoHideMenuPin = function () {
        if (window.innerWidth < 1025) {
            if (pg.hasClass(document.body, 'menu-pin')) {
                pg.addClass(document.body, 'menu-unpinned');
                pg.removeClass(document.body, 'menu-pin');
            }
        }
        else {
            if (pg.hasClass(document.body, 'menu-unpinned')) {
                pg.addClass(document.body, 'menu-pin');
            }
        }
    };
    RootLayout.ctorParameters = function () { return [
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('root', { static: false }),
        __metadata("design:type", Object)
    ], RootLayout.prototype, "root", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RootLayout.prototype, "contentClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RootLayout.prototype, "pageWrapperClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RootLayout.prototype, "footer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RootLayout.prototype, "onResize", null);
    RootLayout = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./root.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/root/root.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./root.component.scss */ "./src/app/@pages/layouts/root/root.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RootLayout);
    return RootLayout;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/session/register/register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@pages/layouts/session/register/register.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../account/services/user-register.service */ "./src/app/account/services/user-register.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(userRegisterService, toast, router) {
        this.userRegisterService = userRegisterService;
        this.toast = toast;
        this.router = router;
        this.is_successful = false;
    }
    RegisterPageComponent.prototype.ngOnInit = function () { };
    RegisterPageComponent.prototype.register = function (register) {
        var _this = this;
        var user = {
            username: register.txtusername,
            password: register.txtpassword,
            email: register.txtemail,
            first_name: register.txtfname,
            last_name: register.txtlname,
            phone: register.txtphone
        };
        console.log(user);
        this.userRegisterService.create(user).subscribe(function (res) {
            _this.onSaveSuccess();
        }, function (error) {
            console.log(error);
            _this.onSaveError();
        });
    };
    RegisterPageComponent.prototype.onSaveSuccess = function () {
        /* this.isSaving = false;
         this.isRegistered = true;*/
        this.is_successful = true;
        this.toast.success('Registration successful, please check your email to activate');
        // this.router.navigate(['']);
    };
    RegisterPageComponent.prototype.onSaveError = function () {
        /*this.isSaving = false;*/
        this.toast.error('Registration failed, ensure you have not registered before');
    };
    RegisterPageComponent.ctorParameters = function () { return [
        { type: _account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/session/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ../../simplywhite/simplywhite.component.scss */ "./src/app/@pages/layouts/simplywhite/simplywhite.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/about/about.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/about/about.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/about/about.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/about/about.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/about/about.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about.component.css */ "./src/app/@pages/layouts/simplywhite/about/about.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2JhbmstbGlzdC9iYW5rLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BankListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankListComponent", function() { return BankListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _create_bank_bank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-bank/bank.service */ "./src/app/@pages/layouts/simplywhite/create-bank/bank.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BankListComponent = /** @class */ (function () {
    function BankListComponent($localStorage, bankService) {
        var _this = this;
        this.$localStorage = $localStorage;
        this.bankService = bankService;
        this.columns = [{ name: 'Name' }, { name: 'Country' }, { name: 'Code' }];
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        this.bankService.query().subscribe(function (res) {
            _this.banks = res.body;
            if (_this.banks != null) {
                _this.basicSort = _this.banks.slice();
                _this.basicRows = _this.banks;
            }
        }, function (res) { });
        window.onresize = function () {
            _this.scrollBarHorizontal = window.innerWidth < 960;
            _this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        };
    }
    BankListComponent.prototype.ngOnInit = function () {
    };
    BankListComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BankListComponent.ctorParameters = function () { return [
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] },
        { type: _create_bank_bank_service__WEBPACK_IMPORTED_MODULE_2__["BankService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"])
    ], BankListComponent.prototype, "table", void 0);
    BankListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bank-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bank-list.component.scss */ "./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _create_bank_bank_service__WEBPACK_IMPORTED_MODULE_2__["BankService"]])
    ], BankListComponent);
    return BankListComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2Jhc2ljLXByb2ZpbGUvYmFzaWMtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProfileComponent", function() { return BasicProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _basic_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-profile.service */ "./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BasicProfileComponent = /** @class */ (function () {
    function BasicProfileComponent(toast, basicProfileService, $localStorage) {
        var _this = this;
        this.toast = toast;
        this.basicProfileService = basicProfileService;
        this.$localStorage = $localStorage;
        this.buttonText = 'Save Profile';
        this.basicProfile = {};
        this.options = ['Female', 'Male'];
        this.user = $localStorage.retrieve('user');
        this.basicProfileService.findByPatientId(this.user.id).subscribe(function (res) {
            _this.basicProfile = res.body;
            console.log(_this.basicProfile);
            _this.address = _this.basicProfile.address;
            _this.phone = _this.basicProfile.phone;
            _this.gender = _this.basicProfile.gender;
            _this.city = _this.basicProfile.city;
            _this.country = _this.basicProfile.country;
            _this.buttonText = 'Update your Profile';
        }, function (error) {
            // this.onSaveError();
            console.log(error);
        });
    }
    BasicProfileComponent.prototype.ngOnInit = function () {
    };
    BasicProfileComponent.prototype.createProfile = function (profile) {
        var _this = this;
        console.log(profile);
        var basicProfile = {
            address: profile.address,
            phone: profile.phone,
            gender: profile.gender,
            city: profile.city,
            country: profile.country,
            user: this.user.id
        };
        if (this.basicProfile.id != null) {
            basicProfile.id = this.basicProfile.id;
            this.basicProfileService.update(basicProfile, basicProfile.id).subscribe(function (res) {
                _this.basicProfile = res.body;
                _this.onSaveSuccess();
            });
        }
        else {
            this.basicProfileService.create(basicProfile).subscribe(function (res) {
                _this.basicProfile = res.body;
                _this.onSaveSuccess();
            }, function (error) {
                console.log(error);
                _this.onSaveError();
            });
        }
    };
    BasicProfileComponent.prototype.onSaveSuccess = function () {
        /* this.isSaving = false;
         this.isRegistered = true;*/
        this.toast.success('operation successful');
    };
    BasicProfileComponent.prototype.onSaveError = function () {
        /*this.isSaving = false;*/
        this.toast.error('Operation failed, could be your network');
    };
    BasicProfileComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: _basic_profile_service__WEBPACK_IMPORTED_MODULE_2__["BasicProfileService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
    ]; };
    BasicProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./basic-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./basic-profile.component.scss */ "./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _basic_profile_service__WEBPACK_IMPORTED_MODULE_2__["BasicProfileService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], BasicProfileComponent);
    return BasicProfileComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.service.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicProfileService", function() { return BasicProfileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/request-util */ "./src/app/util/request-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BasicProfileService = /** @class */ (function () {
    function BasicProfileService(http) {
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'account/profile/';
    }
    BasicProfileService.prototype.create = function (notification) {
        var _this = this;
        return this.http
            .post(this.resourceUrl, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BasicProfileService.prototype.update = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BasicProfileService.prototype.find = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BasicProfileService.prototype.query = function (req) {
        var _this = this;
        var options = Object(_util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    BasicProfileService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    BasicProfileService.prototype.findByPatientId = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id + "/user/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BasicProfileService.prototype.convertDateFromServer = function (res) {
        return res;
    };
    BasicProfileService.prototype.convertDateArrayFromServer = function (res) {
        return res;
    };
    BasicProfileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    BasicProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BasicProfileService);
    return BasicProfileService;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2JlbmVmaWNpYXJ5LWRldGFpbC9iZW5lZmljaWFyeS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BeneficiaryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryDetailComponent", function() { return BeneficiaryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transactions/benefiary.service */ "./src/app/@pages/layouts/simplywhite/transactions/benefiary.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BeneficiaryDetailComponent = /** @class */ (function () {
    function BeneficiaryDetailComponent($localStorage, route, beneficiaryService, toast) {
        var _this = this;
        this.$localStorage = $localStorage;
        this.route = route;
        this.beneficiaryService = beneficiaryService;
        this.toast = toast;
        this.beneficiary = {};
        this.name = '';
        this.email = '';
        this.bank_name = '';
        this.phone = '';
        this.account = '';
        var beneficiary = this.route.snapshot.paramMap.get('id');
        this.beneficiaryService.find(Number(beneficiary)).subscribe(function (res) {
            _this.beneficiary = res.body;
            if (_this.beneficiary != null) {
                _this.name = _this.beneficiary.name;
                _this.email = _this.beneficiary.email;
                _this.bank_name = _this.beneficiary.bank_name;
                _this.account = _this.beneficiary.account;
                _this.phone = _this.beneficiary.phone;
            }
        });
    }
    BeneficiaryDetailComponent.prototype.ngOnInit = function () {
    };
    BeneficiaryDetailComponent.prototype.createProfile = function (value) {
        var _this = this;
        var beneficiary = {
            name: value.name,
            email: value.email,
            account: value.account,
            bank_name: value.bank_name,
            phone: value.phone,
        };
        console.log(beneficiary);
        this.beneficiaryService.update(beneficiary, this.beneficiary.id).subscribe(function (res) {
            _this.beneficiary = res.body;
            _this.toast.success('update successful');
        }, function (err) {
            console.log(err);
            _this.toast.error('update failed');
        });
    };
    BeneficiaryDetailComponent.ctorParameters = function () { return [
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    BeneficiaryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./beneficiary-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./beneficiary-detail.component.scss */ "./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BeneficiaryDetailComponent);
    return BeneficiaryDetailComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2JlbmVmaWNpYXJ5LWxpc3QvYmVuZWZpY2lhcnktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BeneficiaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryListComponent", function() { return BeneficiaryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transactions/benefiary.service */ "./src/app/@pages/layouts/simplywhite/transactions/benefiary.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BeneficiaryListComponent = /** @class */ (function () {
    function BeneficiaryListComponent($localStorage, beneficiaryService) {
        var _this = this;
        this.$localStorage = $localStorage;
        this.beneficiaryService = beneficiaryService;
        this.columns = [{ name: 'Name' }, { name: 'Bank Name' }, { name: 'Account' },
            { name: 'Email' }, { name: 'Phone' }];
        this.beneficiaries = [];
        // No Option YET
        // https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        this.user = this.$localStorage.retrieve('user');
        this.beneficiaryService.findByUserId(this.user.id).subscribe(function (res) {
            _this.beneficiaries = res.body;
            if (_this.beneficiaries != null) {
                _this.basicSort = _this.beneficiaries.slice();
                // push our inital complete list
                _this.basicRows = _this.beneficiaries;
            }
        });
        window.onresize = function () {
            _this.scrollBarHorizontal = window.innerWidth < 960;
            _this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        };
    }
    BeneficiaryListComponent.prototype.ngOnInit = function () {
    };
    BeneficiaryListComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BeneficiaryListComponent.ctorParameters = function () { return [
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], BeneficiaryListComponent.prototype, "table", void 0);
    BeneficiaryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficiary-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./beneficiary-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./beneficiary-list.component.scss */ "./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_3__["BeneficiaryService"]])
    ], BeneficiaryListComponent);
    return BeneficiaryListComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/contact/contact.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/contact/contact.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/contact/contact.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/contact/contact.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/contact/contact.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contact.component.css */ "./src/app/@pages/layouts/simplywhite/contact/contact.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/create-bank/bank.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/create-bank/bank.service.ts ***!
  \************************************************************************/
/*! exports provided: BankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function() { return BankService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/request-util */ "./src/app/util/request-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BankService = /** @class */ (function () {
    function BankService(http) {
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'finance/tnx/';
        this.resourceUrl2 = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'finance/paymentintent/';
    }
    BankService.prototype.create = function (notification) {
        var _this = this;
        return this.http
            .post(this.resourceUrl, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    /*createIntent(payRequest: IBank): Observable<EntityResponseTypePay> {
        return  this.http
            .post<IBank>(this.resourceUrl2, payRequest, {observe: 'response'})
            .pipe(map((res: EntityResponseTypePay) => this.convertPayFromServer(res)));
    }*/
    BankService.prototype.update = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BankService.prototype.find = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id + "/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BankService.prototype.query = function (req) {
        var options = Object(_util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    BankService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    BankService.prototype.findByCountryId = function (id) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "byuser/" + id + "/my", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    BankService.prototype.findByStatus = function (status, user) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + status + "/" + user + "/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    BankService.prototype.convertDateFromServer = function (res) {
        return res;
    };
    BankService.prototype.convertPayFromServer = function (res) {
        return res;
    };
    BankService.prototype.convertDateArrayFromServer = function (res) {
        return res;
    };
    BankService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    BankService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BankService);
    return BankService;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2NyZWF0ZS1iYW5rL2NyZWF0ZS1iYW5rLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBankComponent", function() { return CreateBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank.service */ "./src/app/@pages/layouts/simplywhite/create-bank/bank.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var CreateBankComponent = /** @class */ (function () {
    function CreateBankComponent(bankService, $localStorage, route, toast) {
        var _this = this;
        this.bankService = bankService;
        this.$localStorage = $localStorage;
        this.route = route;
        this.toast = toast;
        var bank_id = this.$localStorage.retrieve('bank_id');
        this.bankService.find(bank_id).subscribe(function (res) {
            _this.bank = res.body;
            if (_this.bank != null) {
                _this.name = _this.bank.name;
                _this.destination_country = _this.bank.country;
                _this.code = _this.bank.code;
            }
        });
    }
    CreateBankComponent.prototype.ngOnInit = function () {
    };
    CreateBankComponent.prototype.createProfile = function (value) {
        var _this = this;
        if (this.bank.id != null) {
            this.bank.country = value.destination_country;
            this.bank.name = value.name;
            this.bank.code = value.code;
            this.bankService.update(this.bank, this.bank.id).subscribe(function (res) {
                _this.toast.success('update successful');
            }, function (err) {
                _this.toast.error('update failed');
            });
        }
        else {
            var bank = {
                name: value.name,
                code: value.code,
                country: value.destination_country,
            };
            this.bankService.create(bank).subscribe(function (res) {
                _this.toast.success('saved success');
            }, function (error) {
                _this.toast.error('Save failed');
            });
        }
    };
    CreateBankComponent.ctorParameters = function () { return [
        { type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    CreateBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-bank',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-bank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-bank.component.scss */ "./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CreateBankComponent);
    return CreateBankComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/features/features.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/features/features.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/features/features.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/features/features.component.ts ***!
  \***************************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __importDefault(__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/features/features.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./features.component.css */ "./src/app/@pages/layouts/simplywhite/features/features.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/footer/footer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/footer/footer.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/footer/footer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/footer/footer.component.ts ***!
  \***********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/@pages/layouts/simplywhite/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/hom/hom.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/hom/hom.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2hvbS9ob20uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/hom/hom.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/hom/hom.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomComponent", function() { return HomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomComponent = /** @class */ (function () {
    function HomComponent() {
    }
    HomComponent.prototype.ngOnInit = function () {
    };
    HomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hom',
            template: __importDefault(__webpack_require__(/*! raw-loader!./hom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/hom/hom.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./hom.component.scss */ "./src/app/@pages/layouts/simplywhite/hom/hom.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomComponent);
    return HomComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/homm/homm.component.css":
/*!********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/homm/homm.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2hvbW0vaG9tbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/homm/homm.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/homm/homm.component.ts ***!
  \*******************************************************************/
/*! exports provided: HommComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HommComponent", function() { return HommComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HommComponent = /** @class */ (function () {
    function HommComponent() {
        this.currentSection = 'home';
    }
    /**
     * Section changed method
     * @param sectionId specify the current sectionID
     */
    HommComponent.prototype.onSectionChange = function (sectionId) {
        this.currentSection = sectionId;
    };
    /**
     * Toggle navbar
     */
    HommComponent.prototype.toggleMenu = function () {
        document.getElementById('navbarCollapse').classList.toggle('show');
    };
    HommComponent.prototype.ngOnInit = function () {
    };
    HommComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index1',
            template: __importDefault(__webpack_require__(/*! raw-loader!./homm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/homm/homm.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n  .dark-modal .modal-content {\n    background-color: #000000;\n    color: white;\n    background: none;\n    border: none;\n  }\n  .dark-modal .modal-header {\n    border : none\n  }\n  .dark-modal .close {\n    color: white;\n  }\n", __importDefault(__webpack_require__(/*! ./homm.component.css */ "./src/app/@pages/layouts/simplywhite/homm/homm.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HommComponent);
    return HommComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/login/login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/login/login.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _account_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../account/services/login.service */ "./src/app/account/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_model_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../account/model/login.model */ "./src/app/account/model/login.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, $localStorage, loginService, router, toast) {
        this.fb = fb;
        this.$localStorage = $localStorage;
        this.loginService = loginService;
        this.router = router;
        this.toast = toast;
        this.is_reset = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (login) {
        var _this = this;
        var credentials = new _account_model_login_model__WEBPACK_IMPORTED_MODULE_5__["Login"](true, login.userName, login.password);
        this.loginService.login(credentials).subscribe(function () {
            var user = _this.$localStorage.retrieve('user');
            console.log(user);
            _this.router.navigate(['dashboard']);
        }, function (error) {
            _this.toast.error('Wrong username or password');
        }, function () {
            console.log('done');
        });
    };
    LoginComponent.prototype.requestPassword = function (req) {
        var _this = this;
        this.loginService.resetPassword(req).subscribe(function (res) {
            _this.toast.success('Please check your email for a link to reset your password');
        }, function (err) {
            console.log(err);
        }, function () {
            _this.is_reset = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _account_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ../simplywhite.component.scss */ "./src/app/@pages/layouts/simplywhite/simplywhite.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _account_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/logout/logout.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/logout/logout.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/logout/logout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/logout/logout.component.ts ***!
  \***********************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../account/services/login.service */ "./src/app/account/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(login) {
        this.login = login;
        this.login.logout();
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _account_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
    ]; };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/logout/logout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./logout.component.scss */ "./src/app/@pages/layouts/simplywhite/logout/logout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_account_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3Bhc3MtcmVzZXQvcGFzcy1yZXNldC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PassResetComponent, UserReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassResetComponent", function() { return PassResetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReset", function() { return UserReset; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../account/services/login.service */ "./src/app/account/services/login.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PassResetComponent = /** @class */ (function () {
    function PassResetComponent(route, loginService, toast, router) {
        this.route = route;
        this.loginService = loginService;
        this.toast = toast;
        this.router = router;
        this.token = {};
        this.tokens = this.route.snapshot.paramMap.get('token');
        console.log(this.tokens);
    }
    PassResetComponent.prototype.ngOnInit = function () {
    };
    PassResetComponent.prototype.resetPassword = function (req) {
        var _this = this;
        if (req.newPass !== req.password) {
            this.toast.error('Both password are different');
            return;
        }
        console.log(req);
        this.token.token = this.tokens;
        this.token.password = req.password;
        console.log(this.token);
        this.loginService.newPassword(this.token).subscribe(function (res) {
            console.log(res);
            _this.toast.success('Your password change was successful');
            _this.router.navigate(['login']);
        }, function (error) {
            console.log(error);
            _this.toast.error('the token is invalid or expired');
        });
    };
    PassResetComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _account_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PassResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pass-reset',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pass-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pass-reset.component.scss */ "./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _account_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PassResetComponent);
    return PassResetComponent;
}());

var UserReset = /** @class */ (function () {
    function UserReset() {
    }
    return UserReset;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/pent/pent.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/pent/pent.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3BlbnQvcGVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/pent/pent.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/pent/pent.component.ts ***!
  \*******************************************************************/
/*! exports provided: PentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PentComponent", function() { return PentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PentComponent = /** @class */ (function () {
    function PentComponent(transactionService, $localStorage, route) {
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.route = route;
        this.transactions = [];
        this.pendingTransactions = [];
        this.succesfulTransactions = [];
        this.failedTransactions = [];
        this.nFailed = 0;
        this.nFailedSum = 0;
        this.nPendingSum = 0;
        this.npending = 0;
        this.nSuccessful = 0;
        this.nSuccessfulSum = 0;
        this.lastSuccesful = {};
        this.lastPending = {};
        this.lastFailed = {};
        this.loadData();
        this.loadAnother();
    }
    PentComponent.prototype.ngOnInit = function () {
    };
    PentComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = this.$localStorage.retrieve('user');
                        return [4 /*yield*/, this.transactionService.findByStatus('successful', this.user.username).subscribe(function (res) {
                                _this.succesfulTransactions = res.body;
                                _this.$localStorage.store('sTnx', _this.succesfulTransactions);
                                console.log(_this.transactions);
                                // this.basicSort = [...this.transactions];
                                // push our inital complete list
                                // this.basicRows = this.transactions;
                                if (_this.succesfulTransactions.length != null) {
                                    _this.nSuccessful = _this.succesfulTransactions.length;
                                    _this.lastSuccesful = _this.succesfulTransactions[_this.nFailed - 1];
                                    _this.nSuccessfulSum = _this.succesfulTransactions.reduce(function (a, b) { return a + (b.amount || 0); }, 0);
                                    _this.$localStorage.store('nSuccessful', _this.nSuccessful);
                                    _this.$localStorage.store('lastSuccessful', _this.lastSuccesful);
                                    _this.$localStorage.store('nSuccessfulSum', _this.nSuccessfulSum);
                                }
                            }, function (error) {
                                console.log(error);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.transactionService.findByStatus('pending', this.user.username).subscribe(function (res) {
                                _this.pendingTransactions = res.body;
                                _this.$localStorage.store('pTnx', _this.pendingTransactions);
                                // this.basicSort = [...this.transactions];
                                // push our inital complete list
                                // this.basicRows = this.transactions;
                                if (_this.pendingTransactions != null) {
                                    _this.npending = _this.pendingTransactions.length;
                                    _this.lastPending = _this.pendingTransactions[_this.npending - 1];
                                    _this.nPendingSum = _this.pendingTransactions.reduce(function (a, b) { return a + (b.amount || 0); }, 0);
                                    _this.$localStorage.store('npending', _this.npending);
                                    _this.$localStorage.store('lastPending', _this.lastPending);
                                    _this.$localStorage.store('mPendingSum', _this.nPendingSum);
                                }
                                console.log(_this.transactions);
                            }, function (error) {
                                console.log(error);
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.transactionService.findByStatus('failed', this.user.username).subscribe(function (res) {
                                _this.failedTransactions = res.body;
                                _this.$localStorage.store('fTnx', _this.failedTransactions);
                                // this.basicSort = [...this.transactions];
                                // push our inital complete list
                                // this.basicRows = this.transactions;
                                if (_this.failedTransactions != null) {
                                    _this.nFailed = _this.failedTransactions.length;
                                    _this.lastFailed = _this.failedTransactions[_this.nFailed - 1];
                                    _this.nFailedSum = _this.pendingTransactions.reduce(function (a, b) { return a + (b.amount || 0); }, 0);
                                    _this.$localStorage.store('nFailed', _this.nFailed);
                                    /* this.$localStorage.store('lastFailed', this.lastFailed);*/
                                    _this.$localStorage.store('nFailedSum', _this.nFailedSum);
                                }
                                console.log(_this.transactions);
                            }, function (error) {
                                console.log(error);
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PentComponent.prototype.loadAnother = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.$localStorage.retrieve('user');
                        console.log(user);
                        return [4 /*yield*/, this.transactionService.findByUserId(user.username).subscribe(function (res) {
                                _this.transactions = res.body;
                                console.log('All: ' + _this.transactions);
                                _this.$localStorage.store('aTnx', _this.transactions);
                                /* if (this.succesfulTransactions != null) {
                                   this.nSuccessful = this.succesfulTransactions.length;
                                   this.nSuccessfulSum = this.succesfulTransactions.reduce((a, b) => a + (b.amount || 0), 0);
                                 }*/
                            }, function (error) {
                                console.log(error);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PentComponent.ctorParameters = function () { return [
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pent',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/pent/pent.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pent.component.scss */ "./src/app/@pages/layouts/simplywhite/pent/pent.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transactions_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PentComponent);
    return PentComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/profile/profile.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/profile/profile.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/profile/profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/profile/profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/@pages/layouts/simplywhite/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/scrollspy.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/scrollspy.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ScrollspyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollspyDirective", function() { return ScrollspyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ScrollspyDirective = /** @class */ (function () {
    // tslint:disable-next-line: variable-name
    function ScrollspyDirective(_el, document) {
        this._el = _el;
        this.document = document;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Window scroll method
     */
    ScrollspyDirective.prototype.onScroll = function (event) {
        var currentSection;
        var children = this._el.nativeElement.querySelectorAll('section');
        var scrollTop = this.document.documentElement.scrollTop;
        var parentOffset = this.document.documentElement.offsetTop;
        var _loop_1 = function (i) {
            var element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };
    ScrollspyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrollspyDirective.prototype, "spiedTags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollspyDirective.prototype, "sectionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollspyDirective.prototype, "onScroll", null);
    ScrollspyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScrollspy]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Document])
    ], ScrollspyDirective);
    return ScrollspyDirective;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/services/services.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/services/services.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/services/services.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/services/services.component.ts ***!
  \***************************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __importDefault(__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/services/services.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./services.component.css */ "./src/app/@pages/layouts/simplywhite/services/services.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/simplywhite.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/simplywhite.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/simplywhite.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/simplywhite.component.ts ***!
  \*********************************************************************/
/*! exports provided: SimplyWhiteLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplyWhiteLayout", function() { return SimplyWhiteLayout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../root/root.component */ "./src/app/@pages/layouts/root/root.component.ts");
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _account_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../account/services/login.service */ "./src/app/account/services/login.service.ts");
/* harmony import */ var _transactions_exchange_rate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions/exchange_rate.service */ "./src/app/@pages/layouts/simplywhite/transactions/exchange_rate.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var SimplyWhiteLayout = /** @class */ (function (_super) {
    __extends(SimplyWhiteLayout, _super);
    function SimplyWhiteLayout(toggler, loginService, router, routed, $localStorage, exchangeRateService) {
        var _this = _super.call(this, toggler, router) || this;
        _this.toggler = toggler;
        _this.loginService = loginService;
        _this.routed = routed;
        _this.$localStorage = $localStorage;
        _this.exchangeRateService = exchangeRateService;
        _this.menuLinks = [
            {
                label: 'Home',
                routerLink: '/dashboard',
                iconType: 'fi',
                iconName: 'home'
            },
            {
                label: 'Transactions',
                /*details: '234 New Emails',*/
                routerLink: 'transactions',
                iconType: 'fi',
                iconName: 'mail',
                toggle: 'close',
                submenu: [
                    {
                        label: 'Successful',
                        /*details: '234 New Emails',*/
                        routerLink: 'transactions/successful',
                        iconType: 'fi',
                        iconName: 'money'
                    },
                    {
                        label: 'Pending',
                        /*details: '234 New Emails',*/
                        routerLink: 'transactions/pending',
                        iconType: 'fi',
                    },
                    {
                        label: 'Failed',
                        /*details: '234 New Emails',*/
                        routerLink: 'transactions/failed',
                        iconType: 'fi',
                        iconName: 'dollar'
                    },
                ]
            },
            {
                label: 'Beneficiary',
                routerLink: 'beneficiary',
                iconType: 'fi',
                iconName: 'users'
            },
            {
                label: 'Profile',
                routerLink: 'profile',
                iconType: 'fi',
                iconName: 'users',
            },
            {
                label: 'Logout',
                routerLink: '/logout',
                iconType: 'fi',
                iconName: 'users',
            },
        ];
        _this.user = $localStorage.retrieve('user');
        _this.loadCountries();
        return _this;
    }
    SimplyWhiteLayout.prototype.ngOnInit = function () {
        this.changeLayout('menu-pin');
        // Will sidebar close on screens below 1024
        this.autoHideMenuPin();
    };
    SimplyWhiteLayout.prototype.logOut = function () {
        this.loginService.logout();
        this.routed.navigate(['']);
    };
    SimplyWhiteLayout.prototype.loadCountries = function () {
        var _this = this;
        this.exchangeRateService.query().subscribe(function (res) {
            var rates = res.body;
            _this.$localStorage.store('rates', rates);
        });
    };
    SimplyWhiteLayout.ctorParameters = function () { return [
        { type: _services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"] },
        { type: _account_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
        { type: _transactions_exchange_rate_service__WEBPACK_IMPORTED_MODULE_6__["ExchangeRateService"] }
    ]; };
    SimplyWhiteLayout = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simplywhite-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./simplywhite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/simplywhite.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./simplywhite.component.scss */ "./src/app/@pages/layouts/simplywhite/simplywhite.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_toggler_service__WEBPACK_IMPORTED_MODULE_2__["pagesToggleService"], _account_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _transactions_exchange_rate_service__WEBPACK_IMPORTED_MODULE_6__["ExchangeRateService"]])
    ], SimplyWhiteLayout);
    return SimplyWhiteLayout;
}(_root_root_component__WEBPACK_IMPORTED_MODULE_1__["RootLayout"]));



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/switcher/switcher.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/switcher/switcher.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3N3aXRjaGVyL3N3aXRjaGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/switcher/switcher.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/switcher/switcher.component.ts ***!
  \***************************************************************************/
/*! exports provided: SwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherComponent", function() { return SwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SwitcherComponent = /** @class */ (function () {
    function SwitcherComponent() {
    }
    /**
     * Set the theme color as selected
     * @param theme specify the color
     */
    SwitcherComponent.prototype.setTheme = function (theme) {
        document
            .getElementById('color-opt')
            .setAttribute('href', './assets/css/colors/' + theme + '.css');
    };
    /**
     * Toogle switcher
     */
    SwitcherComponent.prototype.ToogleMenu = function () {
        this.isVisible = !this.isVisible;
    };
    SwitcherComponent.prototype.ngOnInit = function () {
    };
    SwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-switcher',
            template: __importDefault(__webpack_require__(/*! raw-loader!./switcher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/switcher/switcher.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./switcher.component.css */ "./src/app/@pages/layouts/simplywhite/switcher/switcher.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SwitcherComponent);
    return SwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RueC1hcHByb3ZlZC1saXN0L3RueC1hcHByb3ZlZC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TnxApprovedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TnxApprovedListComponent", function() { return TnxApprovedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var TnxApprovedListComponent = /** @class */ (function () {
    function TnxApprovedListComponent(transactionService, $localStorage) {
        var _this = this;
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.columns = [{ name: 'Receiver' }, { name: 'Receiver Email' }, { name: 'Amount' }, { name: 'Currency' },
            { name: 'Status' }, { name: 'Action' }];
        // No Option YET
        // https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        this.transactionService.findByOnlyStatus('approved').subscribe(function (res) {
            _this.transactions = res.body;
            if (_this.transactions != null) {
                _this.basicSort = _this.transactions.slice();
                // push our inital complete list
                _this.basicRows = _this.transactions;
            }
        }, function (err) {
        });
    }
    TnxApprovedListComponent.prototype.ngOnInit = function () {
    };
    TnxApprovedListComponent.prototype.updateFilter = function (event) {
        var value = event.target.value.toLowerCase();
        // get the amount of columns in the table
        var count = this.columns.length;
        var keys = Object.keys(this.basicSort[0]);
        // filter our data
        var temp = this.basicSort.filter(function (item) {
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TnxApprovedListComponent.ctorParameters = function () { return [
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TnxApprovedListComponent.prototype, "table", void 0);
    TnxApprovedListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnx-approved-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tnx-approved-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tnx-approved-list.component.scss */ "./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], TnxApprovedListComponent);
    return TnxApprovedListComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RueC1kZXRhbHMvdG54LWRldGFscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TnxDetalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TnxDetalsComponent", function() { return TnxDetalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var TnxDetalsComponent = /** @class */ (function () {
    function TnxDetalsComponent(transactionService, $localStorage, route) {
        var _this = this;
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.route = route;
        this.transaction = {};
        var transfer_tnx = this.route.snapshot.paramMap.get('id');
        console.log(transfer_tnx);
        this.transactionService.find(Number(transfer_tnx)).subscribe(function (res) {
            _this.transaction = res.body;
            console.log(_this.transaction);
        }, function (error) {
            console.log(error);
        });
    }
    TnxDetalsComponent.prototype.ngOnInit = function () {
    };
    TnxDetalsComponent.ctorParameters = function () { return [
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    TnxDetalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnx-detals',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tnx-detals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tnx-detals.component.scss */ "./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transactions_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TnxDetalsComponent);
    return TnxDetalsComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RueC1mYWlsZWQvdG54LWZhaWxlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TnxFailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TnxFailedComponent", function() { return TnxFailedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TnxFailedComponent = /** @class */ (function () {
    function TnxFailedComponent(transactionService, $localStorage, route) {
        var _this = this;
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.route = route;
        this.columns = [{ name: 'Receiver' }, { name: 'Receiver Email' }, { name: 'Amount' },
            { name: 'Status' }, { name: 'Action' }];
        this.pageSize = 20;
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        console.log(this.columnModeSetting);
        this.user = $localStorage.retrieve('user');
        this.transactions = this.$localStorage.retrieve('fTnx');
        if (this.transactions != null) {
            this.basicSort = this.transactions.slice();
            // push our inital complete list
            this.basicRows = this.transactions;
        }
        window.onresize = function () {
            _this.scrollBarHorizontal = window.innerWidth < 960;
            _this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        };
    }
    TnxFailedComponent.prototype.ngOnInit = function () {
    };
    TnxFailedComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.to_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TnxFailedComponent.ctorParameters = function () { return [
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TnxFailedComponent.prototype, "table", void 0);
    TnxFailedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnx-failed',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tnx-failed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tnx-failed.component.scss */ "./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TnxFailedComponent);
    return TnxFailedComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RueC1wZW5kaW5nLWxpc3QvdG54LXBlbmRpbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TnxPendingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TnxPendingListComponent", function() { return TnxPendingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var TnxPendingListComponent = /** @class */ (function () {
    function TnxPendingListComponent(transactionService, $localStorage) {
        var _this = this;
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.columns = [{ name: 'Receiver' }, { name: 'Receiver Email' }, { name: 'Amount' }, { name: 'Currency' },
            { name: 'Status' }, { name: 'Action' }];
        // No Option YET
        // https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        this.transactionService.findByOnlyStatus('pending').subscribe(function (res) {
            _this.transactions = res.body;
            if (_this.transactions != null) {
                _this.basicSort = _this.transactions.slice();
                // push our inital complete list
                _this.basicRows = _this.transactions;
            }
        }, function (err) {
        });
    }
    TnxPendingListComponent.prototype.ngOnInit = function () {
    };
    TnxPendingListComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.to_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TnxPendingListComponent.ctorParameters = function () { return [
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TnxPendingListComponent.prototype, "table", void 0);
    TnxPendingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnx-pending-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tnx-pending-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tnx-pending-list.component.scss */ "./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], TnxPendingListComponent);
    return TnxPendingListComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RueC1wZW5kaW5nL3RueC1wZW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TnxPendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TnxPendingComponent", function() { return TnxPendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TnxPendingComponent = /** @class */ (function () {
    function TnxPendingComponent(transactionService, $localStorage, route) {
        var _this = this;
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.route = route;
        this.columns = [{ name: 'Receiver' }, { name: 'Receiver Email' }, { name: 'Amount' }, { name: 'Currency' }, { name: 'Action' }];
        // No Option YET
        // https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        console.log(this.columnModeSetting);
        this.user = $localStorage.retrieve('user');
        this.transactions = $localStorage.retrieve('pTnx');
        console.log('pending: ' + this.transactions);
        if (this.transactions != null) {
            this.basicSort = this.transactions.slice();
            // push our inital complete list
            this.basicRows = this.transactions;
        }
        window.onresize = function () {
            _this.scrollBarHorizontal = window.innerWidth < 960;
            _this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        };
    }
    TnxPendingComponent.prototype.ngOnInit = function () {
    };
    TnxPendingComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.to_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TnxPendingComponent.ctorParameters = function () { return [
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TnxPendingComponent.prototype, "table", void 0);
    TnxPendingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnx-pending',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tnx-pending.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tnx-pending.component.scss */ "./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TnxPendingComponent);
    return TnxPendingComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RueC1zdWNjZXNzZnVsL3RueC1zdWNjZXNzZnVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TnxSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TnxSuccessfulComponent", function() { return TnxSuccessfulComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TnxSuccessfulComponent = /** @class */ (function () {
    function TnxSuccessfulComponent(transactionService, $localStorage, route) {
        var _this = this;
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.route = route;
        this.columns = [{ name: 'ID' }, { name: 'Receiver' }, { name: 'Receiver Email' }, { name: 'Amount' }, { name: 'Currency' },
            { name: 'Status' }, { name: 'Action' }];
        // No Option YET
        // https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        console.log(this.columnModeSetting);
        this.user = $localStorage.retrieve('user');
        this.transactions = this.$localStorage.retrieve('sTnx');
        if (this.transactions != null) {
            this.basicSort = this.transactions.slice();
            // push our inital complete list
            this.basicRows = this.transactions;
        }
        window.onresize = function () {
            _this.scrollBarHorizontal = window.innerWidth < 960;
            _this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        };
    }
    TnxSuccessfulComponent.prototype.ngOnInit = function () {
    };
    TnxSuccessfulComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.to_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TnxSuccessfulComponent.ctorParameters = function () { return [
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TnxSuccessfulComponent.prototype, "table", void 0);
    TnxSuccessfulComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnx-successful',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tnx-successful.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tnx-successful.component.scss */ "./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TnxSuccessfulComponent);
    return TnxSuccessfulComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/transactions/benefiary.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/transactions/benefiary.service.ts ***!
  \******************************************************************************/
/*! exports provided: BeneficiaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryService", function() { return BeneficiaryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/request-util */ "./src/app/util/request-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BeneficiaryService = /** @class */ (function () {
    function BeneficiaryService(http) {
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'account/beneficiary/';
        this.resourceUrl2 = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'finance/paymentintent/';
    }
    BeneficiaryService.prototype.create = function (notification) {
        var _this = this;
        return this.http
            .post(this.resourceUrl, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    /*  createIntent(payRequest: IPaymentRequest): Observable<EntityResponseTypePay> {
          return  this.http
              .post<string>(this.resourceUrl2, payRequest, {observe: 'response'})
              .pipe(map((res: EntityResponseTypePay) => this.convertPayFromServer(res)));
      }*/
    BeneficiaryService.prototype.update = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BeneficiaryService.prototype.find = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id + "/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    BeneficiaryService.prototype.query = function (req) {
        var _this = this;
        var options = Object(_util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    BeneficiaryService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    BeneficiaryService.prototype.findByUserId = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id + "/my", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    BeneficiaryService.prototype.findByStatus = function (status, user) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + status + "/" + user + "/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    BeneficiaryService.prototype.convertDateFromServer = function (res) {
        return res;
    };
    BeneficiaryService.prototype.convertPayFromServer = function (res) {
        return res;
    };
    BeneficiaryService.prototype.convertDateArrayFromServer = function (res) {
        return res;
    };
    BeneficiaryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    BeneficiaryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BeneficiaryService);
    return BeneficiaryService;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/transactions/exchange_rate.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/transactions/exchange_rate.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ExchangeRateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRateService", function() { return ExchangeRateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/request-util */ "./src/app/util/request-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ExchangeRateService = /** @class */ (function () {
    function ExchangeRateService(http) {
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'finance/exchangerate/all/';
        this.resourceUrl2 = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'finance/paymentintent/';
    }
    /*create(notification: ITransaction): Observable<EntityResponseType> {
        return this.http
            .post<ITransaction>(this.resourceUrl, notification, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    createIntent(payRequest: IPaymentRequest): Observable<EntityResponseTypePay> {
        return  this.http
            .post<string>(this.resourceUrl2, payRequest, {observe: 'response'})
            .pipe(map((res: EntityResponseTypePay) => this.convertPayFromServer(res)));
    }*/
    /* update(notification: ITransaction, id: number): Observable<EntityResponseType> {
         return this.http
             .patch<ITransaction>(`${this.resourceUrl}${id}/`, notification, { observe: 'response' })
             .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
     }
 
     find(id: number): Observable<EntityResponseType> {
         return this.http
             .get<ITransaction>(`${this.resourceUrl}${id}`, { observe: 'response' })
             .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
     }*/
    ExchangeRateService.prototype.query = function (req) {
        var _this = this;
        var options = Object(_util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    /*  delete(id: number): Observable<HttpResponse<{}>> {
          return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
      }
  
      findByUserId(id: number): Observable<EntityResponseType> {
          return this.http
              .get<ITransaction>(`${this.resourceUrl}${id}/patient/`, { observe: 'response' })
              .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
      }
  
      findTotalBasedStatus(status: string): Observable<EntityArrayResponseType> {
          return this.http
              .get<ITransaction[]>(`${this.resourceUrl}${status}`, {  observe: 'response' })
              .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
      }*/
    ExchangeRateService.prototype.convertDateFromServer = function (res) {
        return res;
    };
    ExchangeRateService.prototype.convertPayFromServer = function (res) {
        return res;
    };
    ExchangeRateService.prototype.convertDateArrayFromServer = function (res) {
        return res;
    };
    ExchangeRateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    ExchangeRateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ExchangeRateService);
    return ExchangeRateService;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts ***!
  \********************************************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/request-util */ "./src/app/util/request-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'finance/tnx/';
        this.resourceUrl2 = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'finance/paymentintent/';
    }
    TransactionService.prototype.create = function (notification) {
        var _this = this;
        return this.http
            .post(this.resourceUrl, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    TransactionService.prototype.createIntent = function (payRequest) {
        var _this = this;
        return this.http
            .post(this.resourceUrl2, payRequest, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertPayFromServer(res); }));
    };
    TransactionService.prototype.update = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    TransactionService.prototype.find = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id + "/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    TransactionService.prototype.query = function (req) {
        var _this = this;
        var options = Object(_util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    TransactionService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    TransactionService.prototype.findByUserId = function (id) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "byuser/" + id + "/my", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    TransactionService.prototype.findByStatus = function (status, user) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + status + "/" + user + "/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    TransactionService.prototype.findByOnlyStatus = function (status) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + status + "/", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    TransactionService.prototype.convertDateFromServer = function (res) {
        return res;
    };
    TransactionService.prototype.convertPayFromServer = function (res) {
        return res;
    };
    TransactionService.prototype.convertDateArrayFromServer = function (res) {
        return res;
    };
    TransactionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    TransactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/transactions/transactions.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/transactions/transactions.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-pen .text-complete {\n  color: #2ca02c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2xheW91dHMvc2ltcGx5d2hpdGUvdHJhbnNhY3Rpb25zL0M6XFxmcm9udGVuZFxcYW5ndWxhci9zcmNcXGFwcFxcQHBhZ2VzXFxsYXlvdXRzXFxzaW1wbHl3aGl0ZVxcdHJhbnNhY3Rpb25zXFx0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL2xheW91dHMvc2ltcGx5d2hpdGUvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXBlbiAudGV4dC1jb21wbGV0ZSB7XHJcbiAgY29sb3I6ICMyY2EwMmMgIWltcG9ydGFudDtcclxufVxyXG4iLCIudGV4dC1wZW4gLnRleHQtY29tcGxldGUge1xuICBjb2xvcjogIzJjYTAyYyAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/transactions/transactions.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/transactions/transactions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(transactionService, $localStorage, route) {
        var _this = this;
        this.transactionService = transactionService;
        this.$localStorage = $localStorage;
        this.route = route;
        this.columns = [{ name: 'Receiver' }, { name: 'Receiver Email' }, { name: 'Amount' }, { name: 'Currency' },
            { name: 'Status' }, { name: 'Action' }];
        this.nFailed = 0;
        this.nFailedSum = 0;
        this.nPendingSum = 0;
        this.npending = 0;
        this.nSuccessful = 0;
        this.nSuccessfulSum = 0;
        this.lastSuccesful = {};
        this.lastPending = {};
        this.lastFailed = {};
        // No Option YET
        // https://github.com/swimlane/ngx-datatable/issues/423
        this.scrollBarHorizontal = window.innerWidth < 960;
        this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        console.log(this.columnModeSetting);
        this.transactions = this.$localStorage.retrieve('aTnx');
        if (this.transactions != null) {
            this.basicSort = this.transactions.slice();
            // push our inital complete list
            this.basicRows = this.transactions;
        }
        /*this.lastFailed = this.$localStorage.retrieve('lastFailed');*/
        this.nFailed = this.$localStorage.retrieve('nFailed');
        this.nFailedSum = this.$localStorage.retrieve('nFailedSum');
        this.npending = this.$localStorage.retrieve('npending');
        this.nPendingSum = this.$localStorage.retrieve('mPendingSum');
        this.nSuccessful = this.$localStorage.retrieve('nSuccessful');
        this.nSuccessfulSum = this.$localStorage.retrieve('nSuccessfulSum');
        /* this.lastSuccesful = this.$localStorage.retrieve('lastSuccessful');
         this.lastPending = this.$localStorage.retrieve('lastPending');
         this.lastFailed = this.$localStorage.retrieve('lastFailed');*/
        window.onresize = function () {
            _this.scrollBarHorizontal = window.innerWidth < 960;
            _this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
        };
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.basicSort.filter(function (d) {
            // Change the column name here
            // example d.places
            return d.to_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.basicRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TransactionsComponent.ctorParameters = function () { return [
        { type: _transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], { static: true }),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TransactionsComponent.prototype, "table", void 0);
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __importDefault(__webpack_require__(/*! raw-loader!./transactions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/transactions/transactions.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./transactions.component.scss */ "./src/app/@pages/layouts/simplywhite/transactions/transactions.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/transfer/transfer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/transfer/transfer.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3RyYW5zZmVyL3RyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/transfer/transfer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/transfer/transfer.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transactions/transaction.service */ "./src/app/@pages/layouts/simplywhite/transactions/transaction.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transactions/benefiary.service */ "./src/app/@pages/layouts/simplywhite/transactions/benefiary.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_bank_bank_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-bank/bank.service */ "./src/app/@pages/layouts/simplywhite/create-bank/bank.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var TransferComponent = /** @class */ (function () {
    function TransferComponent(toaster, transactionService, route, $localStorage, stripeService, beneficiaryService, fb, router, bankService) {
        var _this = this;
        this.toaster = toaster;
        this.transactionService = transactionService;
        this.route = route;
        this.$localStorage = $localStorage;
        this.stripeService = stripeService;
        this.beneficiaryService = beneficiaryService;
        this.fb = fb;
        this.router = router;
        this.bankService = bankService;
        this.cardOptions = {
            style: {
                base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    fontWeight: '300',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                        color: '#CFD7E0',
                    },
                },
            },
        };
        this.is_ready = false;
        this.middle = false;
        this.amount = 0;
        this.rate = 0;
        this.is_failed = false;
        this.is_successful = false;
        this.is_goal = false;
        this.optionsSource = [];
        this.optionsDestination = [];
        this.loadBenInitStatus = false;
        this.beneficiaries = [];
        this.beneficiary = {};
        this.elementsOptions = {
            locale: 'en'
        };
        this.user = this.$localStorage.retrieve('user');
        console.log(this.user);
        this.rates = $localStorage.retrieve('rates');
        this.initOptions(this.rates);
        console.log(this.rates);
        beneficiaryService.findByUserId(this.user.id).subscribe(function (res) {
            _this.beneficiaries = res.body;
            if (_this.beneficiaries.length === 0) {
                _this.toaster.info('You have no saved Beneficiary', 'No Beneficiary Saved');
            }
        }, function (error4) {
            console.log(error4);
        });
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.mySubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                // Trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
            }
        });
    }
    TransferComponent.prototype.ngOnInit = function () {
        console.log('details reLoad');
        this.stripeTest = this.fb.group({
            name: ['Angular v10', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            amount: [1001, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/\d+/)]],
        });
    };
    TransferComponent.prototype.ngOnDestroy = function () {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    };
    TransferComponent.prototype.confirmTransaction = function (form) {
        if (form.value.amount > 2000) {
            this.toaster.error('Your amount cannot be more than 2000');
            return;
        }
        if (form.invalid) {
            this.toaster.error('Your form is invalid, please make sure you have filled all field', 'Form is Valid');
            return;
        }
        else {
            this.tnx = {
                to_name: form.value.to_firstname,
                to_email: form.value.to_email,
                to_account_number: form.value.to_account_number,
                to_country: form.value.destination_country.name,
                to_bank: form.value.to_bank,
                to_phone: form.value.to_phone,
                user: this.user.username,
                // from_country: form.source_country.name,
                rate: form.value.rate,
                total: Number(form.value.rate) * Number(form.value.amount),
                amount: form.value.amount,
                currency: this.currency
            };
        }
        this.is_ready = true;
        this.middle = true;
        this.stripeTest.patchValue({
            amount: this.tnx.amount,
            name: this.user.first_name + ' ' + this.user.last_name
        });
        console.log(this.tnx);
    };
    TransferComponent.prototype.sendTransaction = function () {
        var _this = this;
        var extraData = {
            amount: this.amount * 100,
            currency: this.currency
        };
        console.log(extraData);
        this.transactionService.createIntent(extraData).subscribe(function (res) {
            console.log(res);
            var client_sercret = res.body['client_secret'];
            _this.stripeService.confirmCardPayment(client_sercret, {
                payment_method: {
                    card: _this.card.element,
                    billing_details: {
                        name: _this.user.first_name + ' ' + _this.user.last_name,
                        email: _this.user.email,
                    }
                }
            }).subscribe(function (result) {
                if (result.error) {
                    console.log(result);
                    _this.toaster.error(result.error.message);
                    _this.tnx.txn_status = 'failed';
                    _this.tnx.transfer_status = 'failed';
                    _this.tnx.pay_ref = result.error.payment_intent.id;
                    // this.is_goal = false;
                    _this.is_goal = false;
                    _this.is_failed = true;
                }
                else {
                    if (result.paymentIntent.status === 'succeeded') {
                        console.log(result.paymentIntent);
                        _this.tnx.currency = result.paymentIntent.currency;
                        _this.tnx.txn_status = result.paymentIntent.status;
                        _this.tnx.pay_ref = result.paymentIntent.id;
                        // this.is_goal = false;
                        _this.is_goal = false;
                        _this.is_successful = true;
                        _this.toaster.success('Your transfer is successful, you can continue to status', 'Transaction Successful');
                    }
                }
            }, function (error1) {
                console.log(error1);
            }, function () {
                console.log(_this.tnx);
                _this.transactionService.create(_this.tnx).subscribe(function (final_result) {
                    console.log(final_result);
                }, function (err) {
                    console.log(err);
                });
            });
        }, function (error3) {
            console.log(error3);
        });
    };
    TransferComponent.prototype.changeSource = function (evnt) {
        var _this = this;
        this.optionsDestination = [];
        console.log(evnt.value);
        this.source_country = evnt.value.currency;
        this.currency = evnt.value.currency.currency;
        var b = this.currency;
        var co = this.source_country;
        console.log(evnt.controls.destination_country.reset());
        var rates1 = this.rates.filter(function (des) {
            return des.source_country.name === co.name && des.destination_country.name !== co.name;
        });
        rates1.forEach(function (pes) {
            _this.optionsDestination.push(pes.destination_country);
        });
        // console.log(this.transferForm);
    };
    TransferComponent.prototype.changeDestination = function (evet) {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        // console.log(evet);
        this.destination_country = evet;
        if (this.destination_country == null) {
            return;
        }
        console.log(this.source_country);
        if (this.source_country == null) {
            this.toaster.error('you are yet to choose a source');
            return;
        }
        var pet = this.source_country.name;
        var prate = this.rates.filter(function (rate) {
            return rate.destination_country.name === evet.name;
        });
        var finalRate = prate.filter(function (pot) {
            return pot.source_country.name === _this.source_country.name;
        });
        console.log(finalRate);
        console.log(prate);
        this.rate = finalRate[0].rate;
        console.log(this.rate);
        this.bankService.findByCountryId(this.destination_country.id).subscribe(function (res) {
            _this.bankOptions = res.body;
        }, function (err) {
            console.log(err);
        });
    };
    TransferComponent.prototype.initOptions = function (rates) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, rates.forEach(function (exchangeRate) {
                            // this.optionsDestination.push(exchangeRate.destination_country);
                            _this.optionsSource.push(exchangeRate.source_country);
                        })];
                    case 1:
                        _b.sent();
                        /*this.optionsDestination = await this.optionsDestination.filter(function (a) {
                            return !this[a.name] && (this[a.name] = true);
                        }, Object.create(null));*/
                        _a = this;
                        return [4 /*yield*/, this.optionsSource.filter(function (a) {
                                return !this[a.name] && (this[a.name] = true);
                            }, Object.create(null))];
                    case 2:
                        /*this.optionsDestination = await this.optionsDestination.filter(function (a) {
                            return !this[a.name] && (this[a.name] = true);
                        }, Object.create(null));*/
                        _a.optionsSource = _b.sent();
                        console.log(this.optionsSource);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransferComponent.prototype.createBeneficiary = function (value) {
        console.log(value);
        // tslint:disable-next-line:max-line-length
        if (this.to_firstname !== null && this.to_email !== null && this.to_phone !== null && this.to_bank != null && this.to_account_number != null) {
            var beneficiary = {
                name: this.to_firstname,
                email: this.to_email,
                phone: this.to_phone,
                bank_name: this.to_bank,
                account: this.to_account_number,
                user: this.user.id
            };
            console.log(beneficiary);
            this.beneficiaryService.create(beneficiary).subscribe(function (res) {
                console.log(res);
            }, function (error2) {
                console.log(error2);
            });
        }
        else {
        }
    };
    TransferComponent.prototype.reLoad = function () {
        this.router.navigate(['/dashboard']);
    };
    TransferComponent.prototype.openMiddle = function (st) {
        if (st) {
            return st;
        }
        if (!this.is_goal && this.is_ready) {
            return true;
        }
        return false;
    };
    TransferComponent.prototype.loadDataBeneficiary = function (value) {
        console.log(value);
        if (!value && this.loadBenInitStatus) {
            this.to_firstname = '';
            this.to_account_number = '';
            this.to_bank = '';
            this.to_email = '';
            this.to_phone = '';
        }
    };
    TransferComponent.prototype.fillBeneficiary = function (value) {
        this.to_firstname = value.name;
        this.to_account_number = value.account;
        this.to_bank = value.bank_name;
        this.to_email = value.email;
        this.to_phone = value.phone;
        this.loadBenInitStatus = true;
    };
    TransferComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"] },
        { type: _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_6__["BeneficiaryService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _create_bank_bank_service__WEBPACK_IMPORTED_MODULE_8__["BankService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeCardComponent"]),
        __metadata("design:type", ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeCardComponent"])
    ], TransferComponent.prototype, "card", void 0);
    TransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./transfer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/transfer/transfer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./transfer.component.scss */ "./src/app/@pages/layouts/simplywhite/transfer/transfer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _transactions_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"],
            _transactions_benefiary_service__WEBPACK_IMPORTED_MODULE_6__["BeneficiaryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _create_bank_bank_service__WEBPACK_IMPORTED_MODULE_8__["BankService"]])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3VzZXItYWN0aXZhdGlvbi91c2VyLWFjdGl2YXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivationComponent", function() { return UserActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_activation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-activation.service */ "./src/app/@pages/layouts/simplywhite/user-activation/user-activation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var UserActivationComponent = /** @class */ (function () {
    function UserActivationComponent(activationService, toast, route, router) {
        var _this = this;
        this.activationService = activationService;
        this.toast = toast;
        this.route = route;
        this.router = router;
        var user = this.route.snapshot.paramMap.get('user');
        var activation_key = this.route.snapshot.paramMap.get('activation_key');
        console.log(user);
        console.log(activation_key);
        var userActivation = {
            user: Number(user),
            activation_key: Number(activation_key)
        };
        this.activationService.create(userActivation).subscribe(function (res) {
            _this.toast.success('The activation of your account is successful, you be redirected to login', 'Successful Activation');
            router.navigate(['']);
        }, function () {
            _this.toast.error('Activation failed, contact admin', 'Failed Activation');
        });
    }
    UserActivationComponent.prototype.ngOnInit = function () {
    };
    UserActivationComponent.ctorParameters = function () { return [
        { type: _user_activation_service__WEBPACK_IMPORTED_MODULE_3__["UserActivationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserActivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-activation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-activation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-activation.component.scss */ "./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_user_activation_service__WEBPACK_IMPORTED_MODULE_3__["UserActivationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserActivationComponent);
    return UserActivationComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/user-activation/user-activation.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/user-activation/user-activation.service.ts ***!
  \***************************************************************************************/
/*! exports provided: UserActivationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivationService", function() { return UserActivationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/request-util */ "./src/app/util/request-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var UserActivationService = /** @class */ (function () {
    function UserActivationService(http) {
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'account/activate/';
    }
    UserActivationService.prototype.create = function (notification) {
        var _this = this;
        return this.http
            .post(this.resourceUrl, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserActivationService.prototype.activate = function (notification) {
        var _this = this;
        return this.http
            .post(this.resourceUrl, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserActivationService.prototype.update = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserActivationService.prototype.updatePassword = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserActivationService.prototype.find = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserActivationService.prototype.query = function (req) {
        var _this = this;
        var options = Object(_util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    UserActivationService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    UserActivationService.prototype.convertDateFromServer = function (res) {
        return res;
    };
    UserActivationService.prototype.convertDateArrayFromServer = function (res) {
        return res;
    };
    UserActivationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    UserActivationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserActivationService);
    return UserActivationService;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../account/services/user-register.service */ "./src/app/account/services/user-register.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(userRegisterService, toast, router, $localStorage) {
        this.userRegisterService = userRegisterService;
        this.toast = toast;
        this.router = router;
        this.$localStorage = $localStorage;
        this.user = $localStorage.retrieve('user');
        this.txtfname = this.user.first_name;
        this.txtlname = this.user.last_name;
        this.txtemail = this.user.email;
        this.txtusername = this.user.username;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.register = function (register) {
        var _this = this;
        console.log(register);
        var user = {
            username: register.userName,
            password: register.password,
            email: register.email,
            first_name: register.first_name,
            last_name: register.last_name,
            id: this.user.id
        };
        this.userRegisterService.update(user, this.user.id).subscribe(function (res) {
            _this.$localStorage.store('user', res.body);
            _this.onSaveSuccess();
        }, function (error) {
            console.log(error);
            _this.onSaveError();
        });
    };
    UserDetailComponent.prototype.onSaveSuccess = function () {
        /* this.isSaving = false;
         this.isRegistered = true;*/
        this.toast.success('Update successful');
        // this.router.navigate(['']);
    };
    UserDetailComponent.prototype.onSaveError = function () {
        /*this.isSaving = false;*/
        this.toast.error('Update failed');
    };
    UserDetailComponent.ctorParameters = function () { return [
        { type: _account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
    ]; };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/user-password/user-password.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/user-password/user-password.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9sYXlvdXRzL3NpbXBseXdoaXRlL3VzZXItcGFzc3dvcmQvdXNlci1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@pages/layouts/simplywhite/user-password/user-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/user-password/user-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordComponent", function() { return UserPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../account/services/user-register.service */ "./src/app/account/services/user-register.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var UserPasswordComponent = /** @class */ (function () {
    function UserPasswordComponent(userRegisterService, toast, $localStorage) {
        this.userRegisterService = userRegisterService;
        this.toast = toast;
        this.$localStorage = $localStorage;
        this.user = $localStorage.retrieve('user');
    }
    UserPasswordComponent.prototype.ngOnInit = function () {
    };
    UserPasswordComponent.prototype.changePassword = function (formP) {
        var _this = this;
        var login = {
            password: formP.txtpassword,
            oldPassword: formP.oldpassword,
            username: this.user.username
        };
        console.log(login);
        this.userRegisterService.updatePassword(login).subscribe(function (res) {
            _this.toast.success('Your update was successful', 'Successful');
        }, function () {
            _this.toast.error('Your update failed');
        });
    };
    UserPasswordComponent.ctorParameters = function () { return [
        { type: _account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
    ]; };
    UserPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-password',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@pages/layouts/simplywhite/user-password/user-password.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-password.component.scss */ "./src/app/@pages/layouts/simplywhite/user-password/user-password.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_account_services_user_register_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], UserPasswordComponent);
    return UserPasswordComponent;
}());



/***/ }),

/***/ "./src/app/@pages/services/toggler.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@pages/services/toggler.service.ts ***!
  \****************************************************/
/*! exports provided: pagesToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagesToggleService", function() { return pagesToggleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var pagesToggleService = /** @class */ (function () {
    function pagesToggleService() {
        // Search Toggle
        this._searchToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchToggle = this._searchToggle.asObservable();
        // Quickview Toggle
        this._quickViewToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.quickViewToggle = this._quickViewToggle.asObservable();
        // Sidebar Toggle - Mobile
        this._sideBarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sideBarToggle = this._sideBarToggle.asObservable();
        // Secondary Sidebar Toggle - Mobile
        this._secondarySideBarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.secondarySideBarToggle = this._secondarySideBarToggle.asObservable();
        // Horizontal Menu Toggle - Mobile
        this._mobileHorizontaMenu = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mobileHorizontaMenu = this._mobileHorizontaMenu.asObservable();
        // Menu Pin Toggle
        this._menuPinToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.menuPinToggle = this._menuPinToggle.asObservable();
        // Menu Pin Toggle
        this._menuDrawer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.menuDrawer = this._menuDrawer.asObservable();
        // Page Wrapper Class
        this._pageContainerClass = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pageContainerClass = this._pageContainerClass.asObservable();
        // Page Content Class
        this._contentClass = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.contentClass = this._contentClass.asObservable();
        // Header Class
        this._headerClass = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.headerClass = this._headerClass.asObservable();
        // Body Layout Class
        this._bodyLayoutClass = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bodyLayoutClass = this._bodyLayoutClass.asObservable();
        // App Layout
        this._layout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.Applayout = this._layout.asObservable();
        // Footer Visiblity
        this._footer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.Footer = this._footer.asObservable();
        // Page Container Hover Event - Used for sidebar
        this._pageContainerHover = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pageContainerHover = this._pageContainerHover.asObservable();
    }
    pagesToggleService.prototype.setContent = function (className) {
        this._contentClass.next(className);
    };
    pagesToggleService.prototype.setPageContainer = function (className) {
        this._pageContainerClass.next(className);
    };
    pagesToggleService.prototype.setHeaderClass = function (className) {
        this._headerClass.next(className);
    };
    pagesToggleService.prototype.setBodyLayoutClass = function (className) {
        this._bodyLayoutClass.next(className);
    };
    pagesToggleService.prototype.removeBodyLayoutClass = function (className) {
        this._bodyLayoutClass.next(className);
    };
    pagesToggleService.prototype.changeLayout = function (className) {
        this._layout.next(className);
    };
    pagesToggleService.prototype.toggleSearch = function (toggle) {
        this._searchToggle.next({ text: toggle });
    };
    pagesToggleService.prototype.toggleMenuPin = function (toggle) {
        this._menuPinToggle.next({ text: toggle });
    };
    pagesToggleService.prototype.toggleMenuDrawer = function () {
        this._menuDrawer.next();
    };
    pagesToggleService.prototype.toggleQuickView = function () {
        this._quickViewToggle.next();
    };
    pagesToggleService.prototype.toggleMobileSideBar = function (toggle) {
        this._sideBarToggle.next(toggle);
    };
    pagesToggleService.prototype.toggleSecondarySideBar = function (toggle) {
        this._secondarySideBarToggle.next(toggle);
    };
    pagesToggleService.prototype.toggleMobileHorizontalMenu = function (toggle) {
        this._mobileHorizontaMenu.next(toggle);
    };
    pagesToggleService.prototype.toggleFooter = function (toggle) {
        this._footer.next(toggle);
    };
    pagesToggleService.prototype.triggerPageContainerHover = function (toggle) {
        this._pageContainerHover.next(toggle);
    };
    pagesToggleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], pagesToggleService);
    return pagesToggleService;
}());



/***/ }),

/***/ "./src/app/account/model/login.model.ts":
/*!**********************************************!*\
  !*** ./src/app/account/model/login.model.ts ***!
  \**********************************************/
/*! exports provided: Login, LoginResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponse", function() { return LoginResponse; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Login = /** @class */ (function () {
    function Login(rememberMe, username, password, oldPassword) {
        this.rememberMe = rememberMe;
        this.username = username;
        this.password = password;
        this.oldPassword = oldPassword;
    }
    return Login;
}());

var LoginResponse = /** @class */ (function () {
    function LoginResponse(user, refresh, access) {
        this.user = user;
        this.refresh = refresh;
        this.access = access;
    }
    return LoginResponse;
}());



/***/ }),

/***/ "./src/app/account/services/auth-jwt.service.ts":
/*!******************************************************!*\
  !*** ./src/app/account/services/auth-jwt.service.ts ***!
  \******************************************************/
/*! exports provided: AuthServerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServerProvider", function() { return AuthServerProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AuthServerProvider = /** @class */ (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken') || '';
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var _this = this;
        return this.http
            .post(_app_constant__WEBPACK_IMPORTED_MODULE_5__["SERVER_API_URL"] + 'account/login/', credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return _this.authenticateSuccess(response, credentials.rememberMe); }));
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    AuthServerProvider.prototype.authenticateSuccess = function (response, rememberMe) {
        var jwt = response.access;
        if (rememberMe) {
            this.$localStorage.store('user', response.user);
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            console.log(jwt);
            this.$localStorage.store('user', response.user);
            this.$sessionStorage.store('authenticationToken', jwt);
        }
        return response;
    };
    AuthServerProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"] }
    ]; };
    AuthServerProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]])
    ], AuthServerProvider);
    return AuthServerProvider;
}());



/***/ }),

/***/ "./src/app/account/services/login.service.ts":
/*!***************************************************!*\
  !*** ./src/app/account/services/login.service.ts ***!
  \***************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-jwt.service */ "./src/app/account/services/auth-jwt.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var LoginService = /** @class */ (function () {
    function LoginService(authServerProvider, toaster, router, http) {
        this.authServerProvider = authServerProvider;
        this.toaster = toaster;
        this.router = router;
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_6__["SERVER_API_URL"] + 'user/password_reset/';
    }
    LoginService.prototype.login = function (credentials) {
        var _this = this;
        return this.authServerProvider.login(credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return _this.authAlert(res); }));
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        this.authServerProvider.logout().subscribe(null, null, function () {
            _this.toaster.success('You successfully logged out');
            _this.router.navigate(['']);
        });
    };
    LoginService.prototype.authAlert = function (res) {
        if (!res) {
            this.toaster.error('Wrong username and password');
        }
        else {
            this.toaster.success('Login successful');
        }
    };
    LoginService.prototype.resetPassword = function (payRequest) {
        return this.http
            .post(this.resourceUrl + "reset_password/", payRequest, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    LoginService.prototype.newPassword = function (token) {
        return this.http
            .post(this.resourceUrl + "confirm/", token, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    LoginService.prototype.confirmToken = function (token) {
        return this.http
            .post(this.resourceUrl + "reset_password/validate_token/", token, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    LoginService.ctorParameters = function () { return [
        { type: _auth_jwt_service__WEBPACK_IMPORTED_MODULE_2__["AuthServerProvider"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_auth_jwt_service__WEBPACK_IMPORTED_MODULE_2__["AuthServerProvider"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/account/services/user-register.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/account/services/user-register.service.ts ***!
  \***********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/request-util */ "./src/app/util/request-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'account/register/';
        this.resourceUrl2 = _app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] + 'account/updatepass/';
    }
    UserService.prototype.create = function (notification) {
        var _this = this;
        return this.http
            .post(this.resourceUrl, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.activate = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.update = function (notification, id) {
        var _this = this;
        return this.http
            .patch("" + this.resourceUrl + id + "/", notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.updatePassword = function (notification) {
        var _this = this;
        return this.http
            .patch(this.resourceUrl2, notification, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.find = function (id) {
        var _this = this;
        return this.http
            .get("" + this.resourceUrl + id, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateFromServer(res); }));
    };
    UserService.prototype.query = function (req) {
        var _this = this;
        var options = Object(_util_request_util__WEBPACK_IMPORTED_MODULE_4__["createRequestOption"])(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.convertDateArrayFromServer(res); }));
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    UserService.prototype.convertDateFromServer = function (res) {
        return res;
    };
    UserService.prototype.convertDateArrayFromServer = function (res) {
        return res;
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: SERVER_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_API_URL", function() { return SERVER_API_URL; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var SERVER_API_URL = 'http://127.0.0.1:8000/';
// export const SERVER_API_URL = 'https://app.apovallo.com/';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHammerConfig", function() { return AppHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@pages/layouts */ "./src/app/@pages/layouts/index.ts");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
/* harmony import */ var _pages_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@pages/components/sidebar/sidebar.component */ "./src/app/@pages/components/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./@pages/components/quickview/quickview.component */ "./src/app/@pages/components/quickview/quickview.component.ts");
/* harmony import */ var _pages_components_quickview_quickview_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./@pages/components/quickview/quickview.service */ "./src/app/@pages/components/quickview/quickview.service.ts");
/* harmony import */ var _pages_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./@pages/components/search-overlay/search-overlay.component */ "./src/app/@pages/components/search-overlay/search-overlay.component.ts");
/* harmony import */ var _pages_components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./@pages/components/header/header.component */ "./src/app/@pages/components/header/header.component.ts");
/* harmony import */ var _pages_components_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./@pages/components/horizontal-menu/horizontal-menu.component */ "./src/app/@pages/components/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _pages_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./@pages/components/list-view/list-view.module */ "./src/app/@pages/components/list-view/list-view.module.ts");
/* harmony import */ var _pages_components_card_card_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./@pages/components/card/card.module */ "./src/app/@pages/components/card/card.module.ts");
/* harmony import */ var _pages_components_card_social_card_social_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./@pages/components/card-social/card-social.module */ "./src/app/@pages/components/card-social/card-social.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./@pages/components/tabs/tabs.module */ "./src/app/@pages/components/tabs/tabs.module.ts");
/* harmony import */ var _pages_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./@pages/components/switch/switch.module */ "./src/app/@pages/components/switch/switch.module.ts");
/* harmony import */ var _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./@pages/components/progress/progress.module */ "./src/app/@pages/components/progress/progress.module.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _pages_layouts_simplywhite_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/login/login.component */ "./src/app/@pages/layouts/simplywhite/login/login.component.ts");
/* harmony import */ var _pages_layouts_session_register_register_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./@pages/layouts/session/register/register.component */ "./src/app/@pages/layouts/session/register/register.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/profile/profile.component */ "./src/app/@pages/layouts/simplywhite/profile/profile.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_basic_profile_basic_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/basic-profile/basic-profile.component */ "./src/app/@pages/layouts/simplywhite/basic-profile/basic-profile.component.ts");
/* harmony import */ var _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./@pages/components/cs-select/select.module */ "./src/app/@pages/components/cs-select/select.module.ts");
/* harmony import */ var _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./@pages/components/select/select.module */ "./src/app/@pages/components/select/select.module.ts");
/* harmony import */ var _pages_layouts_simplywhite_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/user-detail/user-detail.component */ "./src/app/@pages/layouts/simplywhite/user-detail/user-detail.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_user_password_user_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/user-password/user-password.component */ "./src/app/@pages/layouts/simplywhite/user-password/user-password.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/transactions/transactions.component */ "./src/app/@pages/layouts/simplywhite/transactions/transactions.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _pages_layouts_simplywhite_pent_pent_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/pent/pent.component */ "./src/app/@pages/layouts/simplywhite/pent/pent.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/user-activation/user-activation.component */ "./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.ts");
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ "./src/app/interceptor/auth.interceptor.ts");
/* harmony import */ var _page_layouts_simplywhite_simplywhite_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./@page/layouts/simplywhite/simplywhite.component */ "./src/app/@page/layouts/simplywhite/simplywhite.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/transfer/transfer.component */ "./src/app/@pages/layouts/simplywhite/transfer/transfer.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _pages_layouts_simplywhite_tnx_successful_tnx_successful_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-successful/tnx-successful.component */ "./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_failed_tnx_failed_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-failed/tnx-failed.component */ "./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_pending_tnx_pending_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-pending/tnx-pending.component */ "./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_detals_tnx_detals_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-detals/tnx-detals.component */ "./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.ts");
/* harmony import */ var _interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./interceptor/auth-expired.interceptor */ "./src/app/interceptor/auth-expired.interceptor.ts");
/* harmony import */ var _pages_layouts_simplywhite_beneficiary_list_beneficiary_list_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component */ "./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_beneficiary_detail_beneficiary_detail_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component */ "./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_pass_reset_pass_reset_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/pass-reset/pass-reset.component */ "./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_logout_logout_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/logout/logout.component */ "./src/app/@pages/layouts/simplywhite/logout/logout.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_hom_hom_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/hom/hom.component */ "./src/app/@pages/layouts/simplywhite/hom/hom.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_homm_homm_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/homm/homm.component */ "./src/app/@pages/layouts/simplywhite/homm/homm.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _pages_layouts_simplywhite_footer_footer_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/footer/footer.component */ "./src/app/@pages/layouts/simplywhite/footer/footer.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/switcher/switcher.component */ "./src/app/@pages/layouts/simplywhite/switcher/switcher.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_contact_contact_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/contact/contact.component */ "./src/app/@pages/layouts/simplywhite/contact/contact.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_about_about_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/about/about.component */ "./src/app/@pages/layouts/simplywhite/about/about.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_scrollspy_directive__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/scrollspy.directive */ "./src/app/@pages/layouts/simplywhite/scrollspy.directive.ts");
/* harmony import */ var _pages_layouts_simplywhite_features_features_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/features/features.component */ "./src/app/@pages/layouts/simplywhite/features/features.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_services_services_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/services/services.component */ "./src/app/@pages/layouts/simplywhite/services/services.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_create_bank_create_bank_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/create-bank/create-bank.component */ "./src/app/@pages/layouts/simplywhite/create-bank/create-bank.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_bank_list_bank_list_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/bank-list/bank-list.component */ "./src/app/@pages/layouts/simplywhite/bank-list/bank-list.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_pending_list_tnx_pending_list_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component */ "./src/app/@pages/layouts/simplywhite/tnx-pending-list/tnx-pending-list.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_approved_list_tnx_approved_list_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component */ "./src/app/@pages/layouts/simplywhite/tnx-approved-list/tnx-approved-list.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// Angular Core








// Routing


// Layouts

// Layout Service - Required

// Shared Layout Components










// Basic Bootstrap Modules

// Pages Globaly required Components - Optional



// Thirdparty Components / Plugins - Optional













































var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
// Hammer Config Overide
// https://github.com/angular/angular/issues/10541
var AppHammerConfig = /** @class */ (function (_super) {
    __extends(AppHammerConfig, _super);
    function AppHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pinch': { enable: false },
            'rotate': { enable: false }
        };
        return _this;
    }
    return AppHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_layouts__WEBPACK_IMPORTED_MODULE_10__["SimplyWhiteLayout"],
                _pages_layouts_simplywhite_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _pages_layouts_session_register_register_component__WEBPACK_IMPORTED_MODULE_31__["RegisterPageComponent"],
                _pages_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _pages_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_13__["QuickviewComponent"], _pages_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_15__["SearchOverlayComponent"], _pages_components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _pages_components_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_17__["HorizontalMenuComponent"],
                _pages_layouts__WEBPACK_IMPORTED_MODULE_10__["BlankComponent"],
                _pages_layouts__WEBPACK_IMPORTED_MODULE_10__["RootLayout"],
                _pages_layouts_simplywhite_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"],
                _pages_layouts_simplywhite_basic_profile_basic_profile_component__WEBPACK_IMPORTED_MODULE_33__["BasicProfileComponent"],
                _pages_layouts_simplywhite_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_36__["UserDetailComponent"],
                _pages_layouts_simplywhite_user_password_user_password_component__WEBPACK_IMPORTED_MODULE_37__["UserPasswordComponent"],
                _pages_layouts_simplywhite_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_38__["TransactionsComponent"],
                _pages_layouts_simplywhite_pent_pent_component__WEBPACK_IMPORTED_MODULE_40__["PentComponent"],
                _pages_layouts_simplywhite_user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_41__["UserActivationComponent"],
                _page_layouts_simplywhite_simplywhite_component__WEBPACK_IMPORTED_MODULE_43__["SimplywhiteComponent"],
                _pages_layouts_simplywhite_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_44__["TransferComponent"],
                _pages_layouts_simplywhite_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_60__["SwitcherComponent"],
                _pages_layouts_simplywhite_contact_contact_component__WEBPACK_IMPORTED_MODULE_61__["ContactComponent"],
                _pages_layouts_simplywhite_about_about_component__WEBPACK_IMPORTED_MODULE_62__["AboutComponent"],
                _pages_layouts_simplywhite_footer_footer_component__WEBPACK_IMPORTED_MODULE_59__["FooterComponent"],
                _pages_layouts_simplywhite_tnx_successful_tnx_successful_component__WEBPACK_IMPORTED_MODULE_46__["TnxSuccessfulComponent"],
                _pages_layouts_simplywhite_tnx_failed_tnx_failed_component__WEBPACK_IMPORTED_MODULE_47__["TnxFailedComponent"],
                _pages_layouts_simplywhite_tnx_pending_tnx_pending_component__WEBPACK_IMPORTED_MODULE_48__["TnxPendingComponent"],
                _pages_layouts_simplywhite_tnx_detals_tnx_detals_component__WEBPACK_IMPORTED_MODULE_49__["TnxDetalsComponent"],
                _pages_layouts_simplywhite_beneficiary_list_beneficiary_list_component__WEBPACK_IMPORTED_MODULE_51__["BeneficiaryListComponent"],
                _pages_layouts_simplywhite_beneficiary_detail_beneficiary_detail_component__WEBPACK_IMPORTED_MODULE_52__["BeneficiaryDetailComponent"],
                _pages_layouts_simplywhite_pass_reset_pass_reset_component__WEBPACK_IMPORTED_MODULE_53__["PassResetComponent"],
                _pages_layouts_simplywhite_logout_logout_component__WEBPACK_IMPORTED_MODULE_54__["LogoutComponent"],
                _pages_layouts_simplywhite_hom_hom_component__WEBPACK_IMPORTED_MODULE_55__["HomComponent"],
                _pages_layouts_simplywhite_homm_homm_component__WEBPACK_IMPORTED_MODULE_56__["HommComponent"],
                _pages_layouts_simplywhite_scrollspy_directive__WEBPACK_IMPORTED_MODULE_63__["ScrollspyDirective"],
                _pages_layouts_simplywhite_features_features_component__WEBPACK_IMPORTED_MODULE_64__["FeaturesComponent"],
                _pages_layouts_simplywhite_services_services_component__WEBPACK_IMPORTED_MODULE_65__["ServicesComponent"],
                _pages_layouts_simplywhite_create_bank_create_bank_component__WEBPACK_IMPORTED_MODULE_66__["CreateBankComponent"],
                _pages_layouts_simplywhite_bank_list_bank_list_component__WEBPACK_IMPORTED_MODULE_67__["BankListComponent"],
                _pages_layouts_simplywhite_tnx_pending_list_tnx_pending_list_component__WEBPACK_IMPORTED_MODULE_68__["TnxPendingListComponent"],
                _pages_layouts_simplywhite_tnx_approved_list_tnx_approved_list_component__WEBPACK_IMPORTED_MODULE_69__["TnxApprovedListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                // tslint:disable-next-line:max-line-length
                ngx_stripe__WEBPACK_IMPORTED_MODULE_45__["NgxStripeModule"].forRoot('pk_live_51HHXOtA7YrVgiB6zUCsJGi4tw5h3MFXQ5WnpIy0Ceb3usZMzYLNxh40xgLwhftm9oNcmTcE1QC0TXf6YjFxI9Ute00bbqYEWpi'),
                _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_25__["ProgressModule"],
                _pages_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_19__["pgListViewModule"],
                _pages_components_card_card_module__WEBPACK_IMPORTED_MODULE_20__["pgCardModule"],
                _pages_components_card_social_card_social_module__WEBPACK_IMPORTED_MODULE_21__["pgCardSocialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["ModalModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["TypeaheadModule"].forRoot(),
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_28__["NgxWebstorageModule"].forRoot(),
                _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_23__["pgTabsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_57__["ScrollToModule"].forRoot(),
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_58__["NgxYoutubePlayerModule"].forRoot(),
                _pages_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_24__["pgSwitchModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _pages_components_cs_select_select_module__WEBPACK_IMPORTED_MODULE_34__["pgSelectfx"],
                _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_35__["pgSelectModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_39__["NgxDatatableModule"],
            ],
            providers: [_pages_components_quickview_quickview_service__WEBPACK_IMPORTED_MODULE_14__["QuickviewService"], _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_11__["pagesToggleService"], {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_42__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_50__["AuthExpiredInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                    useClass: AppHammerConfig
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _pages_layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@pages/layouts */ "./src/app/@pages/layouts/index.ts");
/* harmony import */ var _pages_layouts_simplywhite_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/login/login.component */ "./src/app/@pages/layouts/simplywhite/login/login.component.ts");
/* harmony import */ var _pages_layouts_session_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@pages/layouts/session/register/register.component */ "./src/app/@pages/layouts/session/register/register.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/profile/profile.component */ "./src/app/@pages/layouts/simplywhite/profile/profile.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/transactions/transactions.component */ "./src/app/@pages/layouts/simplywhite/transactions/transactions.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_pent_pent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/pent/pent.component */ "./src/app/@pages/layouts/simplywhite/pent/pent.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/user-activation/user-activation.component */ "./src/app/@pages/layouts/simplywhite/user-activation/user-activation.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/transfer/transfer.component */ "./src/app/@pages/layouts/simplywhite/transfer/transfer.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_successful_tnx_successful_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-successful/tnx-successful.component */ "./src/app/@pages/layouts/simplywhite/tnx-successful/tnx-successful.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_failed_tnx_failed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-failed/tnx-failed.component */ "./src/app/@pages/layouts/simplywhite/tnx-failed/tnx-failed.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_pending_tnx_pending_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-pending/tnx-pending.component */ "./src/app/@pages/layouts/simplywhite/tnx-pending/tnx-pending.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_tnx_detals_tnx_detals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/tnx-detals/tnx-detals.component */ "./src/app/@pages/layouts/simplywhite/tnx-detals/tnx-detals.component.ts");
/* harmony import */ var _util_AuthGuardService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/AuthGuardService */ "./src/app/util/AuthGuardService.ts");
/* harmony import */ var _pages_layouts_simplywhite_beneficiary_list_beneficiary_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component */ "./src/app/@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_beneficiary_detail_beneficiary_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component */ "./src/app/@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_pass_reset_pass_reset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/pass-reset/pass-reset.component */ "./src/app/@pages/layouts/simplywhite/pass-reset/pass-reset.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/logout/logout.component */ "./src/app/@pages/layouts/simplywhite/logout/logout.component.ts");
/* harmony import */ var _pages_layouts_simplywhite_homm_homm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./@pages/layouts/simplywhite/homm/homm.component */ "./src/app/@pages/layouts/simplywhite/homm/homm.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// Layouts


















var AppRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Home'
        },
        component: _pages_layouts_simplywhite_homm_homm_component__WEBPACK_IMPORTED_MODULE_17__["HommComponent"]
    },
    {
        path: 'register',
        component: _pages_layouts_session_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterPageComponent"]
    },
    {
        path: 'login',
        component: _pages_layouts_simplywhite_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'account/activate/:activation_key/:user',
        component: _pages_layouts_simplywhite_user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_6__["UserActivationComponent"]
    },
    {
        path: 'reset/:token',
        component: _pages_layouts_simplywhite_pass_reset_pass_reset_component__WEBPACK_IMPORTED_MODULE_15__["PassResetComponent"]
    },
    {
        path: 'logout',
        component: _pages_layouts_simplywhite_logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"]
    },
    {
        path: 'dashboard',
        data: {
            breadcrumb: 'Home'
        },
        component: _pages_layouts__WEBPACK_IMPORTED_MODULE_0__["SimplyWhiteLayout"],
        canActivate: [_util_AuthGuardService__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
        children: [
            { path: 'profile', component: _pages_layouts_simplywhite_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
            { path: 'transactions', component: _pages_layouts_simplywhite_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsComponent"] },
            { path: 'transactions/successful', component: _pages_layouts_simplywhite_tnx_successful_tnx_successful_component__WEBPACK_IMPORTED_MODULE_8__["TnxSuccessfulComponent"] },
            { path: 'transactions/failed', component: _pages_layouts_simplywhite_tnx_failed_tnx_failed_component__WEBPACK_IMPORTED_MODULE_9__["TnxFailedComponent"] },
            { path: 'transactions/pending', component: _pages_layouts_simplywhite_tnx_pending_tnx_pending_component__WEBPACK_IMPORTED_MODULE_10__["TnxPendingComponent"] },
            { path: 'transactions/:id', component: _pages_layouts_simplywhite_tnx_detals_tnx_detals_component__WEBPACK_IMPORTED_MODULE_11__["TnxDetalsComponent"] },
            { path: '', component: _pages_layouts_simplywhite_pent_pent_component__WEBPACK_IMPORTED_MODULE_5__["PentComponent"] },
            { path: 'transfer', component: _pages_layouts_simplywhite_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_7__["TransferComponent"] },
            { path: 'beneficiary', component: _pages_layouts_simplywhite_beneficiary_list_beneficiary_list_component__WEBPACK_IMPORTED_MODULE_13__["BeneficiaryListComponent"] },
            { path: 'beneficiary/:id', component: _pages_layouts_simplywhite_beneficiary_detail_beneficiary_detail_component__WEBPACK_IMPORTED_MODULE_14__["BeneficiaryDetailComponent"] },
        ]
    },
];


/***/ }),

/***/ "./src/app/interceptor/auth-expired.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/interceptor/auth-expired.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthExpiredInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthExpiredInterceptor", function() { return AuthExpiredInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _account_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/services/login.service */ "./src/app/account/services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AuthExpiredInterceptor = /** @class */ (function () {
    function AuthExpiredInterceptor(loginService) {
        this.loginService = loginService;
    }
    AuthExpiredInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.loginService.logout();
                }
            }
        }));
    };
    AuthExpiredInterceptor.ctorParameters = function () { return [
        { type: _account_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
    ]; };
    AuthExpiredInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_account_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AuthExpiredInterceptor);
    return AuthExpiredInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptor/auth.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptor/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(localStorage, sessionStorage) {
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        if (!request || !request.url || (request.url.startsWith('http') && !(_app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"] && request.url.startsWith(_app_constant__WEBPACK_IMPORTED_MODULE_2__["SERVER_API_URL"])))) {
            return next.handle(request);
        }
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        console.log(token);
        return next.handle(request);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] },
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"] }
    ]; };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/util/AuthGuardService.ts":
/*!******************************************!*\
  !*** ./src/app/util/AuthGuardService.ts ***!
  \******************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService($localStorage, router) {
        this.$localStorage = $localStorage;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.$localStorage.retrieve('authenticationToken') === null) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/util/request-util.ts":
/*!**************************************!*\
  !*** ./src/app/util/request-util.ts ***!
  \**************************************/
/*! exports provided: createRequestOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequestOption", function() { return createRequestOption; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var createRequestOption = function (req) {
    var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    if (req) {
        Object.keys(req).forEach(function (key) {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach(function (val) {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyC9h3KkZPIKgUjTITMRI6RfD6h2MmwGwgY',
        authDomain: 'apollova-4cead.firebaseapp.com',
        databaseURL: 'https://apollova-4cead.firebaseio.com',
        projectId: 'apollova-4cead',
        storageBucket: 'apollova-4cead.appspot.com',
        messagingSenderId: '647290419312',
        appId: '1:647290419312:web:0254b787133a6eac5f9cb5',
        measurementId: 'G-YQ1YJFX7V4'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\frontend\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map