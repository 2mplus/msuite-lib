import { MPlusApplicationEnum } from "../enums/applications.enum";
import { PaymentMethodEnum } from "../enums/transaction-types.enum";
/**
 * Authentication and security headers for all API requests
 */
export interface ApiAuthHeadersType {
    'X-API-Key': string;
    'X-App-ID': string;
    'X-Timestamp': string;
    'X-Signature': string;
    'X-Request-ID': string;
    'X-Source-App': MPlusApplicationEnum;
    'X-User-ID': string;
    'X-Tenant-ID'?: string;
    'X-Branch-ID'?: string;
    'X-Device-ID'?: string;
}
/**
 * Base request metadata
 */
export interface RequestMetadataType {
    requestId: string;
    timestamp: string;
    correlationId?: string;
    traceId?: string;
    parentRequestId?: string;
    sourceIp: string;
    userAgent: string;
    appVersion: string;
    apiVersion: string;
    sourceModule: string;
    sourceApplication: MPlusApplicationEnum;
    additionalMetadata?: Record<string, any>;
}
/**
 * User context for audit trail
 */
export interface UserContextType {
    userId: string;
    userEmail: string;
    userName?: string;
    userRole?: string;
    userPermissions?: string[];
    ipAddress?: string;
    userAgent?: string;
    sessionId?: string;
    tenantId?: string;
    branchId?: string;
    departmentId?: string;
    deviceId?: string;
    location?: {
        latitude?: number;
        longitude?: number;
        city?: string;
        country?: string;
    };
}
/**
 * Monetary amounts with currency
 */
export interface MonetaryAmountType {
    amount: number;
    currency: string;
    exchangeRate?: number;
    baseCurrency?: string;
    convertedAmount?: number;
    formattedAmount?: string;
    roundingAmount?: number;
    displayAmount?: string;
}
/**
 * Tax details structure
 */
export interface TaxDetailsType {
    gstRate?: number;
    gstAmount?: number;
    cgst?: number;
    sgst?: number;
    igst?: number;
    cess?: number;
    cgstRate?: number;
    sgstRate?: number;
    igstRate?: number;
    cessRate?: number;
    tdsRate?: number;
    tdsAmount?: number;
    taxableAmount?: number;
    taxType?: 'GST' | 'VAT' | 'TDS' | 'WITHHOLDING' | 'SERVICE_TAX' | 'CUSTOMS';
    hsnCode?: string;
    sacCode?: string;
    isTaxInclusive: boolean;
    taxSplit?: {
        centralTax?: number;
        stateTax?: number;
        integratedTax?: number;
        compensationCess?: number;
    };
}
/**
 * Party information (customer/supplier/student/patient)
 */
export interface PartyDetailsType {
    partyId: string;
    partyName: string;
    partyType: 'customer' | 'supplier' | 'student' | 'employee' | 'vendor' | 'affiliate' | 'patient' | 'donor';
    partyCode?: string;
    partyCategory?: string;
    gstin?: string;
    pan?: string;
    tan?: string;
    aadhaar?: string;
    address?: string;
    contact?: string;
    email?: string;
    phone?: string;
    billingAddress?: {
        street: string;
        city: string;
        state: string;
        country: string;
        pincode: string;
    };
    shippingAddress?: {
        street: string;
        city: string;
        state: string;
        country: string;
        pincode: string;
    };
    bankDetails?: {
        accountNumber: string;
        accountName: string;
        bankName: string;
        branch: string;
        ifscCode: string;
    };
}
/**
 * Payment information
 */
export interface PaymentDetailsType {
    method: PaymentMethodEnum;
    reference: string;
    date: string;
    gateway?: string;
    bankName?: string;
    accountNumber?: string;
    chequeNumber?: string;
    upiId?: string;
    cardLastFour?: string;
    transactionId?: string;
    paymentStatus: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
    paymentMode: 'ONLINE' | 'OFFLINE' | 'CASH' | 'CHEQUE';
    remarks?: string;
    paymentProof?: {
        documentUrl: string;
        documentType: string;
        uploadedAt: string;
    };
}
/**
 * Account posting for double-entry accounting
 */
export interface AccountPostingType {
    ledgerCode: string;
    ledgerName?: string;
    amount: number;
    nature: 'debit' | 'credit';
    description?: string;
    referenceId?: string;
    taxDetails?: TaxDetailsType;
    metadata?: Record<string, any>;
    costCenter?: string;
    projectCode?: string;
    departmentCode?: string;
    employeeCode?: string;
    postingSequence?: number;
    isReversal?: boolean;
    reversalOf?: string;
}
/**
 * Address information type
 */
export interface AddressType {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    landmark?: string;
    addressType?: 'HOME' | 'OFFICE' | 'BILLING' | 'SHIPPING';
}
/**
 * Contact information type
 */
export interface ContactType {
    phone?: string;
    mobile?: string;
    email?: string;
    alternateEmail?: string;
    fax?: string;
    website?: string;
}
/**
 * Bank account information type
 */
export interface BankAccountType {
    accountNumber: string;
    accountHolderName: string;
    bankName: string;
    branchName: string;
    ifscCode: string;
    micrCode?: string;
    accountType: 'SAVINGS' | 'CURRENT' | 'CC' | 'OD';
    isPrimary: boolean;
    verified: boolean;
}
/**
 * Attachment/file information type
 */
export interface AttachmentType {
    id?: string;
    name: string;
    url: string;
    type: string;
    size: number;
    uploadedAt: string;
    uploadedBy: string;
    description?: string;
}
/**
 * Audit trail entry type
 */
export interface AuditTrailEntryType {
    timestamp: string;
    userId: string;
    userName: string;
    action: string;
    entityType: string;
    entityId: string;
    oldValues?: Record<string, any>;
    newValues?: Record<string, any>;
    ipAddress?: string;
    userAgent?: string;
    remarks?: string;
}
/**
 * Configuration/settings type
 */
export interface ConfigurationType {
    key: string;
    value: any;
    dataType: 'STRING' | 'NUMBER' | 'BOOLEAN' | 'JSON' | 'ARRAY';
    description?: string;
    module: string;
    isEditable: boolean;
    validationRules?: string;
    defaultValue?: any;
}
/**
 * Notification/message type
 */
export interface NotificationType {
    id: string;
    type: string;
    title: string;
    message: string;
    recipientId: string;
    recipientType: string;
    status: 'PENDING' | 'SENT' | 'DELIVERED' | 'READ' | 'FAILED';
    priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    metadata?: Record<string, any>;
    createdAt: string;
    sentAt?: string;
    readAt?: string;
}
/**
 * Currency information type
 */
export interface CurrencyType {
    code: string;
    name: string;
    symbol: string;
    decimalPlaces: number;
    exchangeRate: number;
    isBaseCurrency: boolean;
    isActive: boolean;
}
/**
 * Date range type
 */
export interface DateRangeType {
    startDate: string;
    endDate: string;
    label?: string;
}
/**
 * Filter criteria type
 */
export interface FilterCriteriaType {
    field: string;
    operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'STARTS_WITH' | 'ENDS_WITH' | 'GREATER_THAN' | 'LESS_THAN' | 'BETWEEN' | 'IN' | 'NOT_IN';
    value: any;
    value2?: any;
}
/**
 * Sorting criteria type
 */
export interface SortingCriteriaType {
    field: string;
    direction: 'ASC' | 'DESC';
}
/**
 * Pagination parameters type
 */
export interface PaginationParamsType {
    page: number;
    limit: number;
    offset?: number;
}
/**
 * Search parameters type
 */
export interface SearchParamsType {
    query?: string;
    filters?: FilterCriteriaType[];
    sort?: SortingCriteriaType[];
    pagination?: PaginationParamsType;
}
/**
 * Validation error type
 */
export interface ValidationErrorType {
    field: string;
    message: string;
    code?: string;
    severity?: 'ERROR' | 'WARNING';
    suggestedValue?: any;
}
/**
 * API rate limiting information
 */
export interface RateLimitInfoType {
    limit: number;
    remaining: number;
    resetAt: string;
    window: string;
}
/**
 * System health check type
 */
export interface HealthCheckType {
    service: string;
    status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
    responseTime: number;
    lastChecked: string;
    details?: Record<string, any>;
}
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type Required<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};
export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
export type IDType = string | number;
export type StatusType = 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'DELETED' | 'SUSPENDED';
export type YesNoType = 'YES' | 'NO';
export type GenderType = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';
export type DayOfWeekType = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
export type MonthType = 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER';
export type QuarterType = 'Q1' | 'Q2' | 'Q3' | 'Q4';
export type FinancialYearType = string;
export type BooleanStringType = 'true' | 'false';
export type HttpMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
export type ContentTypeType = 'application/json' | 'application/xml' | 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
//# sourceMappingURL=shared.types.d.ts.map