import { ApplicationModuleEnum, MPlusApplicationEnum } from '../enums/applications.enum';
import { TransactionStatusEnum, TransactionEnum } from '../enums/transaction-types.enum';
import { AccountPostingType, MonetaryAmountType, TaxDetailsType, PartyDetailsType, PaymentDetailsType, UserContextType, RequestMetadataType } from './shared.types';
/**
 * Journal Entry Request - Main transaction interface
 */
export interface JournalEntryRequestType {
    transactionId: string;
    transactionType: TransactionEnum;
    transactionDate: string;
    description: string;
    status?: TransactionStatusEnum;
    sourceApp: MPlusApplicationEnum;
    sourceModule: ApplicationModuleEnum;
    sourceReference: string;
    amount: MonetaryAmountType;
    ledgerEntries: AccountPostingType[];
    taxDetails?: TaxDetailsType;
    discountAmount?: number;
    roundOffAmount?: number;
    shippingCost?: number;
    otherCharges?: Record<string, number>;
    party?: PartyDetailsType;
    payment?: PaymentDetailsType;
    attachments?: string[];
    metadata?: Record<string, any>;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
    callbackUrl?: string;
    signature?: string;
}
/**
 * Batch Journal Entry Request
 */
export interface BatchJournalEntryRequestType {
    transactions: JournalEntryRequestType[];
    batchId: string;
    batchDescription?: string;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Voucher Creation Request
 */
export interface VoucherRequestType {
    voucherType: 'PAYMENT' | 'RECEIPT' | 'CONTRA' | 'JOURNAL';
    voucherDate: string;
    referenceNumber: string;
    description: string;
    amount: number;
    debitParty?: PartyDetailsType;
    creditParty?: PartyDetailsType;
    debitLedgerCode: string;
    creditLedgerCode: string;
    payment?: PaymentDetailsType;
    taxDetails?: TaxDetailsType;
    sourceApp: MPlusApplicationEnum;
    sourceModule: ApplicationModuleEnum;
    sourceReference: string;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Reconciliation Request
 */
export interface ReconciliationRequestType {
    reconciliationId: string;
    accountCode: string;
    startDate: string;
    endDate: string;
    openingBalance: number;
    closingBalance: number;
    transactions: Array<{
        transactionId: string;
        date: string;
        description: string;
        amount: number;
        type: 'credit' | 'debit';
        reference: string;
        reconciled: boolean;
        remarks?: string;
    }>;
    sourceApp: MPlusApplicationEnum;
    sourceModule: ApplicationModuleEnum;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Tax Filing Request
 */
export interface TaxFilingRequestType {
    filingId: string;
    taxPeriod: string;
    taxType: 'GST' | 'TDS' | 'INCOME_TAX';
    taxableAmount: number;
    taxAmount: number;
    interestAmount?: number;
    penaltyAmount?: number;
    totalPayable: number;
    returnType: string;
    dueDate: string;
    filingDate: string;
    paymentReference?: string;
    paymentDate?: string;
    challanNumber?: string;
    sourceApp: MPlusApplicationEnum;
    sourceModule: ApplicationModuleEnum;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Status Update Request
 */
export interface StatusUpdateRequestType {
    transactionId: string;
    newStatus: TransactionStatusEnum;
    reason?: string;
    notes?: string;
    effectiveDate?: string;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Account Balance Request
 */
export interface AccountBalanceRequestType {
    accountCode: string;
    asOfDate?: string;
    includeChildAccounts?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Account Statement Request
 */
export interface AccountStatementRequestType {
    accountCode: string;
    fromDate: string;
    toDate: string;
    page?: number;
    limit?: number;
    includeTransactions?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Trial Balance Request
 */
export interface TrialBalanceRequestType {
    asOfDate: string;
    includeClosedAccounts?: boolean;
    groupByCategory?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Profit & Loss Request
 */
export interface ProfitLossRequestType {
    fromDate: string;
    toDate: string;
    includeDetails?: boolean;
    compareWithPrevious?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Balance Sheet Request
 */
export interface BalanceSheetRequestType {
    asOfDate: string;
    includeDetails?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Webhook Registration Request
 */
export interface WebhookRegistrationRequestType {
    url: string;
    events: string[];
    secret: string;
    description?: string;
    enabled?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Health Check Request
 */
export interface HealthCheckRequestType {
    component?: 'database' | 'cache' | 'queue' | 'all';
    detailed?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Transaction Search Request
 */
export interface TransactionSearchRequestType {
    accountCode?: string;
    fromDate?: string;
    toDate?: string;
    transactionType?: TransactionEnum;
    status?: TransactionStatusEnum;
    referenceNumber?: string;
    sourceApp?: MPlusApplicationEnum;
    page?: number;
    limit?: number;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Export Request
 */
export interface ExportRequestType {
    reportType: 'TRANSACTIONS' | 'LEDGER' | 'TRIAL_BALANCE' | 'PROFIT_LOSS' | 'BALANCE_SHEET';
    format: 'PDF' | 'EXCEL' | 'CSV' | 'JSON';
    filters: Record<string, any>;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Validate Request Type
 */
export interface ValidateRequestType {
    transactionId: string;
    validateRules?: boolean;
    validateTaxes?: boolean;
    validateAccounting?: boolean;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
/**
 * Reverse Request Type
 */
export interface ReverseRequestType {
    originalTransactionId: string;
    reason: string;
    reversalDate?: string;
    userContext: UserContextType;
    requestMetadata: RequestMetadataType;
}
export type RequestTypeGuard<T> = (request: any) => request is T;
export interface ValidatedRequestType<T> {
    request: T;
    isValid: boolean;
    errors?: string[];
    warnings?: string[];
}
export interface BatchRequestResultType<T> {
    batchId: string;
    total: number;
    successful: number;
    failed: number;
    results: Array<{
        request: T;
        success: boolean;
        result?: any;
        error?: string;
    }>;
}
//# sourceMappingURL=requests.types.d.ts.map