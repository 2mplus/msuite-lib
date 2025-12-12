import { TransactionStatusEnum } from './enums/transaction-types.enum';
import { BaseResponseType, ErrorResponseType } from './types';
/**
 * @mplus/msuite-lib
 * Universal MSuite Library - Accounting API Contracts and Interfaces
 *
 * This library defines the complete API contract between all MStack applications
 * and the centralized accounting system (mAccounts).
 */
export { MPlusApplicationEnum, ApplicationModuleEnum } from './enums/applications.enum';
export { TransactionStatusEnum, PaymentMethodEnum } from './enums/transaction-types.enum';
export { NotificationChannelEnum, NotificationActionEnum } from './contracts/notification-channels.contract';
export { WebhookEventEnum } from './contracts/webhook-events.contract';
export type { JournalEntryRequestType, BatchJournalEntryRequestType, VoucherRequestType, ReconciliationRequestType, TaxFilingRequestType, StatusUpdateRequestType, AccountBalanceRequestType, AccountStatementRequestType, TrialBalanceRequestType, ProfitLossRequestType, BalanceSheetRequestType, WebhookRegistrationRequestType, HealthCheckRequestType, TransactionSearchRequestType, ExportRequestType, ValidateRequestType, ReverseRequestType, BaseResponseType, ErrorResponseType, JournalEntryResponseType, VoucherResponseType, TransactionStatusResponseType, AccountBalanceResponseType, ReconciliationResponseType, HealthCheckResponseType, ReportResponseType, SearchResponseType, BatchResponseType, ValidationResponseType, ExportResponseType, WebhookResponseType, SystemMetricsResponseType, APIResponseType, ApiAuthHeadersType, RequestMetadataType, UserContextType, MonetaryAmountType, TaxDetailsType, PartyDetailsType, PaymentDetailsType, AccountPostingType, AddressType, ContactType, BankAccountType, AttachmentType, AuditTrailEntryType, ConfigurationType, NotificationType, CurrencyType, DateRangeType, FilterCriteriaType, SortingCriteriaType, PaginationParamsType, SearchParamsType, ValidationErrorType, RateLimitInfoType, HealthCheckType, Optional, Required, Nullable, Readonly, IDType, StatusType, YesNoType, GenderType, DayOfWeekType, MonthType, QuarterType, FinancialYearType, BooleanStringType, HttpMethodType, ContentTypeType } from './types';
export type { AccountingAPIType, APIEndpointType, APIRequestType, APIResponseType as EndpointAPIResponseType, EndpointConfigType, APIClientConfigType, APIRequestOptionsType, APIResponseWrapperType } from './contracts/api-endpoints.contract';
export type { WebhookPayloadType, TransactionPostedPayloadType, WebhookSubscriptionType } from './contracts/webhook-events.contract';
export type { NotificationPayloadType, AccountNotificationType, LedgerNotificationType, JournalNotificationType, UserNotificationType, StudentNotificationType, FeeNotificationType, UnifiedNotificationType, NotificationChannelConfigType, WebhookNotificationType, NotificationSubscriptionType, ParseNotificationResultType, NotificationHandlerType, NotificationSystemConfigType, NotificationStatsType, NotificationBatchType, NotificationQueueItemType } from './contracts/notification-channels.contract';
export type { APIResponseType as GenericAPIResponse, AsyncResponseType, ResponseFactoryType, RequestTypeGuard, ValidatedRequestType, BatchRequestResultType } from './types';
export declare const LIBRARY_VERSION = "1.0.0";
export declare const API_VERSION = "v1";
export declare const DEFAULT_CURRENCY = "INR";
export declare const BASE_API_PATH = "/api/v1";
export declare function isSuccessResponse(response: any): response is BaseResponseType;
export declare function isErrorResponse(response: any): response is ErrorResponseType;
export declare function isValidTransactionStatus(status: string): status is TransactionStatusEnum;
//# sourceMappingURL=index.d.ts.map