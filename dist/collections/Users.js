"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "<a href='".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, "'>Verify account</a>");
                // return `<h1>hello pls verify</h1>`
            }
        }
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            // admin: {
            // condition: ({req}) => false
            // condition: ({req}) => req.user.role === "admin"
            // },
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ]
        }
    ]
};
