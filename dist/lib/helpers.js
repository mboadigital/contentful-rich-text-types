"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isText = exports.isBlock = exports.isInline = void 0;
var blocks_1 = __importDefault(require("./blocks"));
var inlines_1 = __importDefault(require("./inlines"));
/**
 * Checks if the node is an instance of Inline.
 */
function isInline(node) {
    if (node.nodeType in inlines_1.default) {
        return true;
    }
    return false;
}
exports.isInline = isInline;
/**
 * Checks if the node is an instance of Block.
 */
function isBlock(node) {
    if (node.nodeType in blocks_1.default) {
        return true;
    }
    return false;
}
exports.isBlock = isBlock;
/**
 * Checks if the node is an instance of Text.
 */
function isText(node) {
    return node.nodeType === 'text';
}
exports.isText = isText;
//# sourceMappingURL=helpers.js.map