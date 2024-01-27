import { z } from "zod";
export declare const User: z.ZodObject<{
    last_name: z.ZodString;
    first_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    last_name: string;
    first_name: string;
}, {
    last_name: string;
    first_name: string;
}>;
