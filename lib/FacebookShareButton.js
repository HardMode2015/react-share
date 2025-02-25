"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("./utils/assert"));
var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));
var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));
function facebookLink(url, _a) {
    var quote = _a.quote, hashtag = _a.hashtag;
    (0, assert_1.default)(url, 'facebook.url');
    return ('https://www.facebook.com/sharer/sharer.php' +
        (0, objectToGetParams_1.default)({
            u: url,
            quote: quote,
            hashtag: hashtag,
        }));
}
var FacebookShareButton = (0, createShareButton_1.default)('فيس بوك', facebookLink, function (props) { return ({
    quote: props.quote,
    hashtag: props.hashtag,
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
exports.default = FacebookShareButton;
