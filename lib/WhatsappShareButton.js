"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("./utils/assert"));
var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));
var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));
function isMobileOrTablet() {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function whatsappLink(url, _a) {
    var title = _a.title, separator = _a.separator;
    (0, assert_1.default)(url, 'whatsapp.url');
    return ('https://' +
        (isMobileOrTablet() ? 'api' : 'web') +
        '.whatsapp.com/send' +
        (0, objectToGetParams_1.default)({
            text: title ? title + separator + url : url,
        }));
}
var WhatsappShareButton = (0, createShareButton_1.default)('واتساب', whatsappLink, function (props) { return ({
    title: props.title,
    separator: props.separator || ' ',
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
exports.default = WhatsappShareButton;
