/**
 * Webhook events emitted by mAccounts
 */
export declare enum WebhookEventEnum {
    TRANSACTION_POSTED = "transaction.posted",
    TRANSACTION_CANCELLED = "transaction.cancelled",
    TRANSACTION_REVERSED = "transaction.reversed",
    VOUCHER_CREATED = "voucher.created",
    RECONCILIATION_COMPLETED = "reconciliation.completed",
    RECONCILIATION_DISCREPANCY = "reconciliation.discrepancy",
    TAX_FILING_SUBMITTED = "tax.filing.submitted",
    TAX_PAYMENT_PROCESSED = "tax.payment.processed",
    DAILY_CLOSING = "daily.closing",
    MONTHLY_CLOSING = "monthly.closing",
    YEARLY_CLOSING = "yearly.closing",
    LOW_BALANCE_ALERT = "alert.low_balance",
    TRANSACTION_ERROR = "alert.transaction_error",
    RECONCILIATION_ALERT = "alert.reconciliation"
}
/**
 * Webhook payload structure
 */
export interface WebhookPayloadType<T = any> {
    event: WebhookEventEnum;
    timestamp: string;
    data: T;
    source: 'maccounts';
    webhookId: string;
    signature?: string;
    requestId: string;
}
/**
 * Transaction posted payload
 */
export interface TransactionPostedPayloadType {
    transactionId: string;
    journalNumber: string;
    voucherNumber: string;
    transactionType: string;
    amount: number;
    currency: string;
    status: string;
    postedAt: string;
    sourceApp: string;
    sourceModule: string;
    sourceReference: string;
    ledgerPostings: Array<{
        code: string;
        amount: number;
        nature: string;
    }>;
}
/**
 * Webhook delivery attempt
 */
export interface WebhookDeliveryAttemptType {
    attempt: number;
    timestamp: string;
    status: 'SUCCESS' | 'FAILED';
    responseCode?: number;
    responseBody?: string;
    error?: string;
}
/**
 * Webhook subscription
 */
export interface WebhookSubscriptionType {
    id: string;
    url: string;
    events: WebhookEventEnum[];
    secret: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    deliveryStats: {
        totalAttempts: number;
        successfulAttempts: number;
        failedAttempts: number;
        lastAttempt: string;
    };
}
//# sourceMappingURL=webhook-events.contract.d.ts.map