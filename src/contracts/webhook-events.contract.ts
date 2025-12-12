// src/contracts/webhook-events.contract.ts

/**
 * Webhook events emitted by mAccounts
 */
export enum WebhookEvent {
    // Transaction Events
    TRANSACTION_POSTED = 'transaction.posted',
    TRANSACTION_CANCELLED = 'transaction.cancelled',
    TRANSACTION_REVERSED = 'transaction.reversed',
    VOUCHER_CREATED = 'voucher.created',

    // Reconciliation Events
    RECONCILIATION_COMPLETED = 'reconciliation.completed',
    RECONCILIATION_DISCREPANCY = 'reconciliation.discrepancy',

    // Tax Events
    TAX_FILING_SUBMITTED = 'tax.filing.submitted',
    TAX_PAYMENT_PROCESSED = 'tax.payment.processed',

    // System Events
    DAILY_CLOSING = 'daily.closing',
    MONTHLY_CLOSING = 'monthly.closing',
    YEARLY_CLOSING = 'yearly.closing',

    // Alert Events
    LOW_BALANCE_ALERT = 'alert.low_balance',
    TRANSACTION_ERROR = 'alert.transaction_error',
    RECONCILIATION_ALERT = 'alert.reconciliation'
}

/**
 * Webhook payload structure
 */
export interface WebhookPayload<T = any> {
    event: WebhookEvent;
    timestamp: string;
    data: T;
    source: 'maccounts';
    webhookId: string;

    // For verification
    signature?: string;
    requestId: string;
}

/**
 * Transaction posted payload
 */
export interface TransactionPostedPayload {
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
export interface WebhookDeliveryAttempt {
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
export interface WebhookSubscription {
    id: string;
    url: string;
    events: WebhookEvent[];
    secret: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;

    // Delivery stats
    deliveryStats: {
        totalAttempts: number;
        successfulAttempts: number;
        failedAttempts: number;
        lastAttempt: string;
    };
}