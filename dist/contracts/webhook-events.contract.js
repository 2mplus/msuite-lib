"use strict";
// src/contracts/webhook-events.contract.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEventEnum = void 0;
/**
 * Webhook events emitted by mAccounts
 */
var WebhookEventEnum;
(function (WebhookEventEnum) {
    // Transaction Events
    WebhookEventEnum["TRANSACTION_POSTED"] = "transaction.posted";
    WebhookEventEnum["TRANSACTION_CANCELLED"] = "transaction.cancelled";
    WebhookEventEnum["TRANSACTION_REVERSED"] = "transaction.reversed";
    WebhookEventEnum["VOUCHER_CREATED"] = "voucher.created";
    // Reconciliation Events
    WebhookEventEnum["RECONCILIATION_COMPLETED"] = "reconciliation.completed";
    WebhookEventEnum["RECONCILIATION_DISCREPANCY"] = "reconciliation.discrepancy";
    // Tax Events
    WebhookEventEnum["TAX_FILING_SUBMITTED"] = "tax.filing.submitted";
    WebhookEventEnum["TAX_PAYMENT_PROCESSED"] = "tax.payment.processed";
    // System Events
    WebhookEventEnum["DAILY_CLOSING"] = "daily.closing";
    WebhookEventEnum["MONTHLY_CLOSING"] = "monthly.closing";
    WebhookEventEnum["YEARLY_CLOSING"] = "yearly.closing";
    // Alert Events
    WebhookEventEnum["LOW_BALANCE_ALERT"] = "alert.low_balance";
    WebhookEventEnum["TRANSACTION_ERROR"] = "alert.transaction_error";
    WebhookEventEnum["RECONCILIATION_ALERT"] = "alert.reconciliation";
})(WebhookEventEnum || (exports.WebhookEventEnum = WebhookEventEnum = {}));
//# sourceMappingURL=webhook-events.contract.js.map