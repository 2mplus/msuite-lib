// src/index.ts

import { TransactionStatusEnum } from '../../enums/transaction-types.enum';
import { BaseResponseType, ErrorResponseType } from '../../types';

/**
 * @mplus/msuite-lib
 * Universal MSuite Library - Accounting API Contracts and Interfaces
 * 
 * This library defines the complete API contract between all MStack applications
 * and the centralized accounting system (mAccounts).
 */

// ==================== EXPORT ENUMS ====================
// All enums have "Enum" suffix for clear identification
export {
    MPlusApplicationEnum,
    ApplicationModuleEnum
} from '../../enums/applications.enum';

export {
    TransactionStatusEnum,
    PaymentMethodEnum
} from '../../enums/transaction-types.enum';

export {
    NotificationChannelEnum,
    NotificationActionEnum
} from '../../contracts/notification-channels.contract';

export {
    WebhookEventEnum
} from '../../contracts/webhook-events.contract';

// ==================== EXPORT TYPES ====================
// All interfaces/types have "Type" suffix for clear identification
export type {
    // Request types
    JournalEntryRequestType,
    BatchJournalEntryRequestType,
    VoucherRequestType,
    ReconciliationRequestType,
    TaxFilingRequestType,
    StatusUpdateRequestType,
    AccountBalanceRequestType,
    AccountStatementRequestType,
    TrialBalanceRequestType,
    ProfitLossRequestType,
    BalanceSheetRequestType,
    WebhookRegistrationRequestType,
    HealthCheckRequestType,
    TransactionSearchRequestType,
    ExportRequestType,
    ValidateRequestType,
    ReverseRequestType,

    // Response types
    BaseResponseType,
    ErrorResponseType,
    JournalEntryResponseType,
    VoucherResponseType,
    TransactionStatusResponseType,
    AccountBalanceResponseType,
    ReconciliationResponseType,
    HealthCheckResponseType,
    ReportResponseType,
    SearchResponseType,
    BatchResponseType,
    ValidationResponseType,
    ExportResponseType,
    WebhookResponseType,
    SystemMetricsResponseType,
    APIResponseType,

    // Shared types
    ApiAuthHeadersType,
    RequestMetadataType,
    UserContextType,
    MonetaryAmountType,
    TaxDetailsType,
    PartyDetailsType,
    PaymentDetailsType,
    AccountPostingType,
    AddressType,
    ContactType,
    BankAccountType,
    AttachmentType,
    AuditTrailEntryType,
    ConfigurationType,
    NotificationType,
    CurrencyType,
    DateRangeType,
    FilterCriteriaType,
    SortingCriteriaType,
    PaginationParamsType,
    SearchParamsType,
    ValidationErrorType,
    RateLimitInfoType,
    HealthCheckType,

    // Utility types
    Optional,
    Required,
    Nullable,
    Readonly,

    // Common union types
    IDType,
    StatusType,
    YesNoType,
    GenderType,
    DayOfWeekType,
    MonthType,
    QuarterType,
    FinancialYearType,
    BooleanStringType,
    HttpMethodType,
    ContentTypeType
} from '../../types';

// ==================== EXPORT API CONTRACTS ====================
export type {
    AccountingAPIType,
    APIEndpointType,
    APIRequestType,
    APIResponseType as EndpointAPIResponseType,
    EndpointConfigType,
    APIClientConfigType,
    APIRequestOptionsType,
    APIResponseWrapperType
} from '../../contracts/api-endpoints.contract';

// ==================== EXPORT WEBHOOK CONTRACTS ====================
export type {
    WebhookPayloadType,
    TransactionPostedPayloadType,
    WebhookSubscriptionType
} from '../../contracts/webhook-events.contract';

// ==================== EXPORT NOTIFICATION CONTRACTS ====================
export type {
    NotificationPayloadType,
    AccountNotificationType,
    LedgerNotificationType,
    JournalNotificationType,
    UserNotificationType,
    StudentNotificationType,
    FeeNotificationType,
    UnifiedNotificationType,
    NotificationChannelConfigType,
    WebhookNotificationType,
    NotificationSubscriptionType,
    ParseNotificationResultType,
    NotificationHandlerType,
    NotificationSystemConfigType,
    NotificationStatsType,
    NotificationBatchType,
    NotificationQueueItemType
} from '../../contracts/notification-channels.contract';

// ==================== EXPORT UTILITIES ====================
// Re-export common utility types with clear names
export type {
    // Request/Response helpers
    APIResponseType as GenericAPIResponse,
    AsyncResponseType,
    ResponseFactoryType,

    // Validation helpers
    RequestTypeGuard,
    ValidatedRequestType,
    BatchRequestResultType
} from '../../types';

// ==================== EXPORT CONSTANTS ====================
// Export common constants
export const LIBRARY_VERSION = '1.00.1';
export const API_VERSION = 'v1';
export const DEFAULT_CURRENCY = 'INR';
export const BASE_API_PATH = '/api/v1';

// ==================== EXPORT HELPER FUNCTIONS ====================
// Type guards and validation helpers
export function isSuccessResponse(response: any): response is BaseResponseType {
    return response?.success === true;
}

export function isErrorResponse(response: any): response is ErrorResponseType {
    return response?.success === false && response?.error !== undefined;
}

export function isValidTransactionStatus(status: string): status is TransactionStatusEnum {
    return Object.values(TransactionStatusEnum).includes(status as TransactionStatusEnum);
}
