// src/types/requests.types.ts

import { ApplicationModule, MPlusApplication } from '../enums/applications.enum';
import { TransactionStatus, TransactionType } from '../enums/transaction-types.enum';
import {
    AccountPosting,
    MonetaryAmount,
    TaxDetails,
    PartyDetails,
    PaymentDetails,
    UserContext,
    RequestMetadata
} from './shared.types';

/**
 * Journal Entry Request - Main transaction interface
 */
export interface JournalEntryRequest {
    // Core transaction info
    transactionId: string;
    transactionType: TransactionType;
    transactionDate: string; // ISO 8601
    description: string;
    status?: TransactionStatus;

    // Application context
    sourceApp: MPlusApplication;
    sourceModule: ApplicationModule;
    sourceReference: string; // Reference ID in source app

    // Financial details
    amount: MonetaryAmount;

    // Double-entry ledger postings
    ledgerEntries: AccountPosting[];

    // Tax details
    taxDetails?: TaxDetails;

    // Additional charges
    discountAmount?: number;
    roundOffAmount?: number;
    shippingCost?: number;
    otherCharges?: Record<string, number>;

    // Party information
    party?: PartyDetails;

    // Payment information
    payment?: PaymentDetails;

    // Attachments and metadata
    attachments?: string[]; // URLs to supporting documents
    metadata?: Record<string, any>;

    // Security context
    userContext: UserContext;
    requestMetadata: RequestMetadata;

    // Webhook callback URL (optional)
    callbackUrl?: string;

    // Validation signature
    signature?: string; // HMAC signature for verification
}

/**
 * Batch Journal Entry Request
 */
export interface BatchJournalEntryRequest {
    transactions: JournalEntryRequest[];
    batchId: string;
    userContext: UserContext;
    requestMetadata: RequestMetadata;
}

/**
 * Voucher Creation Request
 */
export interface VoucherRequest {
    voucherType: 'PAYMENT' | 'RECEIPT' | 'CONTRA' | 'JOURNAL';
    voucherDate: string;
    referenceNumber: string;
    description: string;
    amount: number;

    // Debit/Credit parties
    debitParty?: PartyDetails;
    creditParty?: PartyDetails;

    // Ledger postings
    debitLedgerCode: string;
    creditLedgerCode: string;

    payment?: PaymentDetails;
    taxDetails?: TaxDetails;

    sourceApp: MPlusApplication;
    sourceModule: ApplicationModule;
    sourceReference: string;

    userContext: UserContext;
    requestMetadata: RequestMetadata;
}

/**
 * Reconciliation Request
 */
export interface ReconciliationRequest {
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
    }>;

    sourceApp: MPlusApplication;
    sourceModule: ApplicationModule;
    userContext: UserContext;
    requestMetadata: RequestMetadata;
}

/**
 * Tax Filing Request
 */
export interface TaxFilingRequest {
    filingId: string;
    taxPeriod: string; // e.g., "2024-04" for April 2024
    taxType: 'GST' | 'TDS' | 'INCOME_TAX';

    // Tax details
    taxableAmount: number;
    taxAmount: number;
    interestAmount?: number;
    penaltyAmount?: number;
    totalPayable: number;

    // Filing details
    returnType: string; // e.g., "GSTR-3B"
    dueDate: string;
    filingDate: string;

    // Payment details
    paymentReference?: string;
    paymentDate?: string;
    challanNumber?: string;

    sourceApp: MPlusApplication;
    sourceModule: ApplicationModule;
    userContext: UserContext;
    requestMetadata: RequestMetadata;
}

/**
 * Status Update Request
 */
export interface StatusUpdateRequest {
    transactionId: string;
    newStatus: TransactionStatus;
    reason?: string;
    notes?: string;

    userContext: UserContext;
    requestMetadata: RequestMetadata;
}