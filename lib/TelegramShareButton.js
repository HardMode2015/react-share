"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("./utils/assert"));
var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));
var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));
function telegramLink(url, _a) {
    var title = _a.title;
    (0, assert_1.default)(url, 'telegram.url');
    return ('https://telegram.me/share/url' +
        (0, objectToGetParams_1.default)({
            url: url,
            text: title,
        }));
}
var TelegramShareButton = (0, createShareButton_1.default)('تيليجرام', telegramLink, function (props) { return ({
    title: props.title,
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
exports.default = TelegramShareButton;
