"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
require("core-js/features/object/values");
require("core-js/features/array/includes");
var blocks_1 = require("./blocks");
Object.defineProperty(exports, "BLOCKS", { enumerable: true, get: function () { return blocks_1.default; } });
var inlines_1 = require("./inlines");
Object.defineProperty(exports, "INLINES", { enumerable: true, get: function () { return inlines_1.default; } });
var marks_1 = require("./marks");
Object.defineProperty(exports, "MARKS", { enumerable: true, get: function () { return marks_1.default; } });
__exportStar(require("./schemaConstraints"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./nodeTypes"), exports);
var emptyDocument_1 = require("./emptyDocument");
Object.defineProperty(exports, "EMPTY_DOCUMENT", { enumerable: true, get: function () { return emptyDocument_1.default; } });
var helpers = __importStar(require("./helpers"));
exports.helpers = helpers;
//# sourceMappingURL=index.js.map