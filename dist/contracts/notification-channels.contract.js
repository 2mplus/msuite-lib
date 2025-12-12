"use strict";
// src/contracts/notification-channels.contract.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationActionEnum = exports.NotificationChannelEnum = void 0;
/**
 * PostgreSQL notification channels used by triggers
 */
var NotificationChannelEnum;
(function (NotificationChannelEnum) {
    NotificationChannelEnum["ACC_ACCOUNT_CHANNEL"] = "acc_account_channel";
    NotificationChannelEnum["ACC_LEDGER_CHANNEL"] = "acc_ledger_channel";
    NotificationChannelEnum["ACC_JOURNAL_CHANNEL"] = "acc_journal_channel";
    NotificationChannelEnum["ACC_VOUCHER_CHANNEL"] = "acc_voucher_channel";
    NotificationChannelEnum["ACC_TRANSACTION_CHANNEL"] = "acc_transaction_channel";
    NotificationChannelEnum["SMS_USER_CHANNEL"] = "sms_user_channel";
    NotificationChannelEnum["SMS_STUDENT_CHANNEL"] = "sms_student_channel";
    NotificationChannelEnum["SMS_FEE_CHANNEL"] = "sms_fee_channel";
})(NotificationChannelEnum || (exports.NotificationChannelEnum = NotificationChannelEnum = {}));
/**
 * Common notification actions
 */
var NotificationActionEnum;
(function (NotificationActionEnum) {
    NotificationActionEnum["INSERT"] = "INSERT";
    NotificationActionEnum["UPDATE"] = "UPDATE";
    NotificationActionEnum["DELETE"] = "DELETE";
    NotificationActionEnum["STATUS_CHANGE"] = "STATUS_CHANGE";
    NotificationActionEnum["VERIFIED"] = "VERIFIED";
    NotificationActionEnum["CLASS_CHANGE"] = "CLASS_CHANGE";
})(NotificationActionEnum || (exports.NotificationActionEnum = NotificationActionEnum = {}));
//# sourceMappingURL=notification-channels.contract.js.map