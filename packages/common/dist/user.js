"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const zod_1 = require("zod");
exports.User = zod_1.z.object({
    last_name: zod_1.z.string().min(1).max(255),
    first_name: zod_1.z.string().min(1).max(255),
});
