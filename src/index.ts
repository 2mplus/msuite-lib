// src/index.ts

/**
 * @mplus/accounting-api
 * Universal Accounting API Contracts and Interfaces
 * 
 * This library defines the complete API contract between all MStack applications
 * and the centralized accounting system (mAccounts).
 */

// Export all enums
export { MPlusApplication, ApplicationModule } from './enums/applications.enum';
export { TransactionType, TransactionStatus, PaymentMethod } from './enums/transaction-types.enum';
export { Accounts, Account, AccountCode } from './enums/account-codes.enum'
// Export all types
export type {
    // Request types
    JournalEntryRequest,
    BatchJournalEntryRequest,
    VoucherRequest,
    ReconciliationRequest,
    TaxFilingRequest,
    StatusUpdateRequest,

    // Response types
    JournalEntryResponse,
    VoucherResponse,
    TransactionStatusResponse,
    AccountBalanceResponse,
    ReconciliationResponse,
    HealthCheckResponse,
    ErrorResponse,
    BaseResponse,

    // Shared types
    ApiAuthHeaders,
    RequestMetadata,
    UserContext,
    MonetaryAmount,
    TaxDetails,
    PartyDetails,
    PaymentDetails,
    AccountPosting
} from './types';

// Export API contracts
export type { AccountingAPI, APIEndpoint, APIRequest, APIResponse } from './contracts/api-endpoints.contract';

// Export webhook contracts
export { WebhookEvent } from './contracts/webhook-events.contract';
export type {
    WebhookPayload,
    TransactionPostedPayload,
    WebhookSubscription
} from './contracts/webhook-events.contract';

// Export notification contracts
export { NotificationChannel } from './contracts/notification-channels.contract';
export type {
    NotificationPayload,
    AccountNotification,
    JournalNotification
} from './contracts/notification-channels.contract';