// src/types/responses.types.ts

import { ApplicationModule, MPlusApplication } from "../enums/applications.enum";
import { TransactionStatus } from "../enums/transaction-types.enum";
import { PartyDetails } from "./shared.types";

/**
 * Base API Response
 */
export interface BaseResponse {
    success: boolean;
    timestamp: string;
    requestId: string;
    message?: string;
    version: string;
}

/**
 * Journal Entry Response
 */
export interface JournalEntryResponse extends BaseResponse {
    data: {
        transactionId: string;
        journalNumber: string;
        voucherNumber: string;
        transactionDate: string;
        postedDate: string;
        totalDebit: number;
        totalCredit: number;
        currency: string;

        ledgerPostings: Array<{
            ledgerCode: string;
            ledgerName: string;
            amount: number;
            nature: 'debit' | 'credit';
            postingId: string;
        }>;

        references: {
            sourceApp: MPlusApplication;
            sourceModule: ApplicationModule;
            sourceReference: string;
            correlationId: string;
        };

        status: TransactionStatus;
        statusMessage?: string;

        metadata: {
            processedAt: string;
            processedBy: string;
            systemId: string;
        };

        links: {
            self: string;
            voucher: string;
            journal: string;
        };

        warnings?: string[];
    };
}

/**
 * Voucher Response
 */
export interface VoucherResponse extends BaseResponse {
    data: {
        voucherNumber: string;
        voucherType: string;
        voucherDate: string;
        amount: number;
        referenceNumber: string;

        debitParty?: PartyDetails;
        creditParty?: PartyDetails;

        status: 'CREATED' | 'POSTED' | 'CANCELLED';
        postedDate: string;

        metadata: {
            sourceApp: MPlusApplication;
            sourceReference: string;
        };
    };
}

/**
 * Transaction Status Response
 */
export interface TransactionStatusResponse extends BaseResponse {
    data: {
        transactionId: string;
        journalNumber?: string;
        voucherNumber?: string;
        status: TransactionStatus;
        postedDate?: string;
        cancelledDate?: string;
        reversedDate?: string;

        financialSummary?: {
            totalDebit: number;
            totalCredit: number;
            netAmount: number;
        };

        auditTrail: Array<{
            timestamp: string;
            action: string;
            performedBy: string;
            notes?: string;
        }>;
    };
}

/**
 * Account Balance Response
 */
export interface AccountBalanceResponse extends BaseResponse {
    data: {
        ledgerCode: string;
        ledgerName: string;
        asOfDate: string;

        balances: {
            openingBalance: number;
            closingBalance: number;
            totalDebit: number;
            totalCredit: number;
        };

        periodBalances?: Array<{
            period: string;
            debitTotal: number;
            creditTotal: number;
            balance: number;
        }>;
    };
}

/**
 * Reconciliation Response
 */
export interface ReconciliationResponse extends BaseResponse {
    data: {
        reconciliationId: string;
        accountCode: string;
        period: string;

        summary: {
            openingBalance: number;
            closingBalance: number;
            totalReconciled: number;
            totalUnreconciled: number;
            difference: number;
        };

        status: 'IN_PROGRESS' | 'COMPLETED' | 'DISCREPANCY';
        reconciledAt?: string;
        reconciledBy?: string;
    };
}

/**
 * Error Response
 */
export interface ErrorResponse extends BaseResponse {
    error: {
        code: string;
        message: string;
        details?: any;
        validationErrors?: Array<{
            field: string;
            message: string;
        }>;
    };
}

/**
 * Health Check Response
 */
export interface HealthCheckResponse extends BaseResponse {
    data: {
        service: string;
        status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
        uptime: number;
        version: string;
        timestamp: string;

        components: {
            database: {
                status: string;
                latency: number;
            };
            queue: {
                status: string;
                pendingJobs: number;
            };
            cache: {
                status: string;
                hitRate: number;
            };
        };
    };
}