"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_API_PATH = exports.DEFAULT_CURRENCY = exports.API_VERSION = exports.LIBRARY_VERSION = exports.WebhookEventEnum = exports.NotificationActionEnum = exports.NotificationChannelEnum = exports.PaymentMethodEnum = exports.TransactionStatusEnum = exports.ApplicationModuleEnum = exports.MPlusApplicationEnum = void 0;
exports.isSuccessResponse = isSuccessResponse;
exports.isErrorResponse = isErrorResponse;
exports.isValidTransactionStatus = isValidTransactionStatus;
const transaction_types_enum_1 = require("./enums/transaction-types.enum");
/**
 * @mplus/msuite-lib
 * Universal MSuite Library - Accounting API Contracts and Interfaces
 *
 * This library defines the complete API contract between all MStack applications
 * and the centralized accounting system (mAccounts).
 */
// ==================== EXPORT ENUMS ====================
// All enums have "Enum" suffix for clear identification
var applications_enum_1 = require("./enums/applications.enum");
Object.defineProperty(exports, "MPlusApplicationEnum", { enumerable: true, get: function () { return applications_enum_1.MPlusApplicationEnum; } });
Object.defineProperty(exports, "ApplicationModuleEnum", { enumerable: true, get: function () { return applications_enum_1.ApplicationModuleEnum; } });
var transaction_types_enum_2 = require("./enums/transaction-types.enum");
Object.defineProperty(exports, "TransactionStatusEnum", { enumerable: true, get: function () { return transaction_types_enum_2.TransactionStatusEnum; } });
Object.defineProperty(exports, "PaymentMethodEnum", { enumerable: true, get: function () { return transaction_types_enum_2.PaymentMethodEnum; } });
var notification_channels_contract_1 = require("./contracts/notification-channels.contract");
Object.defineProperty(exports, "NotificationChannelEnum", { enumerable: true, get: function () { return notification_channels_contract_1.NotificationChannelEnum; } });
Object.defineProperty(exports, "NotificationActionEnum", { enumerable: true, get: function () { return notification_channels_contract_1.NotificationActionEnum; } });
var webhook_events_contract_1 = require("./contracts/webhook-events.contract");
Object.defineProperty(exports, "WebhookEventEnum", { enumerable: true, get: function () { return webhook_events_contract_1.WebhookEventEnum; } });
// ==================== EXPORT CONSTANTS ====================
// Export common constants
exports.LIBRARY_VERSION = '1.00.2';
exports.API_VERSION = 'v1';
exports.DEFAULT_CURRENCY = 'INR';
exports.BASE_API_PATH = '/api/v1';
// ==================== EXPORT HELPER FUNCTIONS ====================
// Type guards and validation helpers
function isSuccessResponse(response) {
    return response?.success === true;
}
function isErrorResponse(response) {
    return response?.success === false && response?.error !== undefined;
}
function isValidTransactionStatus(status) {
    return Object.values(transaction_types_enum_1.TransactionStatusEnum).includes(status);
}
//# sourceMappingURL=index.js.map