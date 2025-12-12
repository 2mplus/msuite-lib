import { ApplicationModuleEnum, MPlusApplicationEnum } from "../enums/applications.enum";
import { TransactionStatusEnum } from "../enums/transaction-types.enum";
import { PartyDetailsType } from "./shared.types";
/**
 * Base API Response Type
 */
export interface BaseResponseType {
    success: boolean;
    timestamp: string;
    requestId: string;
    message?: string;
    version: string;
}
/**
 * Success Response Type (generic)
 */
export interface SuccessResponseType<T = any> extends BaseResponseType {
    data: T;
    pagination?: PaginationType;
    metadata?: Record<string, any>;
}
/**
 * Error Response Type
 */
export interface ErrorResponseType extends BaseResponseType {
    error: {
        code: string;
        message: string;
        details?: any;
        validationErrors?: Array<{
            field: string;
            message: string;
            code?: string;
        }>;
        stackTrace?: string;
        referenceId?: string;
    };
}
/**
 * Pagination Metadata Type
 */
export interface PaginationType {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}
/**
 * Journal Entry Response Type
 */
export interface JournalEntryResponseType extends BaseResponseType {
    data: {
        transactionId: string;
        journalNumber: string;
        voucherNumber: string;
        transactionDate: string;
        postedDate: string;
        totalDebit: number;
        totalCredit: number;
        currency: string;
        exchangeRate?: number;
        ledgerPostings: Array<{
            ledgerCode: string;
            ledgerName: string;
            amount: number;
            nature: 'debit' | 'credit';
            postingId: string;
            runningBalance: number;
            description?: string;
        }>;
        references: {
            sourceApp: MPlusApplicationEnum;
            sourceModule: ApplicationModuleEnum;
            sourceReference: string;
            correlationId: string;
            traceId?: string;
        };
        status: TransactionStatusEnum;
        statusMessage?: string;
        statusHistory?: Array<{
            status: TransactionStatusEnum;
            timestamp: string;
            updatedBy: string;
            notes?: string;
        }>;
        metadata: {
            processedAt: string;
            processedBy: string;
            systemId: string;
            apiVersion: string;
            ipAddress?: string;
        };
        links: {
            self: string;
            voucher: string;
            journal: string;
            download?: string;
        };
        warnings?: Array<{
            code: string;
            message: string;
            severity: 'LOW' | 'MEDIUM' | 'HIGH';
        }>;
    };
}
/**
 * Voucher Response Type
 */
export interface VoucherResponseType extends BaseResponseType {
    data: {
        voucherNumber: string;
        voucherType: string;
        voucherDate: string;
        amount: number;
        referenceNumber: string;
        description?: string;
        debitParty?: PartyDetailsType;
        creditParty?: PartyDetailsType;
        status: 'CREATED' | 'POSTED' | 'CANCELLED' | 'REVERSED';
        postedDate: string;
        cancelledDate?: string;
        metadata: {
            sourceApp: MPlusApplicationEnum;
            sourceReference: string;
            createdBy: string;
            approvedBy?: string;
        };
        attachments?: Array<{
            name: string;
            url: string;
            type: string;
            size: number;
        }>;
    };
}
/**
 * Transaction Status Response Type
 */
export interface TransactionStatusResponseType extends BaseResponseType {
    data: {
        transactionId: string;
        journalNumber?: string;
        voucherNumber?: string;
        status: TransactionStatusEnum;
        postedDate?: string;
        cancelledDate?: string;
        reversedDate?: string;
        financialSummary?: {
            totalDebit: number;
            totalCredit: number;
            netAmount: number;
            currency: string;
            taxAmount?: number;
        };
        auditTrail: Array<{
            timestamp: string;
            action: string;
            performedBy: string;
            notes?: string;
            ipAddress?: string;
        }>;
        references?: {
            sourceApp: MPlusApplicationEnum;
            sourceModule: ApplicationModuleEnum;
            sourceReference: string;
        };
    };
}
/**
 * Account Balance Response Type
 */
export interface AccountBalanceResponseType extends BaseResponseType {
    data: {
        ledgerCode: string;
        ledgerName: string;
        asOfDate: string;
        balances: {
            openingBalance: number;
            closingBalance: number;
            totalDebit: number;
            totalCredit: number;
            netBalance: number;
        };
        periodBalances?: Array<{
            period: string;
            debitTotal: number;
            creditTotal: number;
            balance: number;
            transactionCount: number;
        }>;
        currencyInfo: {
            currency: string;
            exchangeRate?: number;
            baseCurrency?: string;
        };
        metadata?: {
            accountType: string;
            normalBalance: 'debit' | 'credit';
            parentAccount?: string;
            isActive: boolean;
        };
    };
}
/**
 * Reconciliation Response Type
 */
export interface ReconciliationResponseType extends BaseResponseType {
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
            matchingPercentage: number;
        };
        status: 'IN_PROGRESS' | 'COMPLETED' | 'DISCREPANCY' | 'CANCELLED';
        reconciledAt?: string;
        reconciledBy?: string;
        completedAt?: string;
        discrepancies?: Array<{
            transactionId: string;
            date: string;
            amount: number;
            description: string;
            type: 'MISSING' | 'EXTRA' | 'AMOUNT_MISMATCH';
            resolution?: string;
        }>;
    };
}
/**
 * Health Check Response Type
 */
export interface HealthCheckResponseType extends BaseResponseType {
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
                connections: number;
                lastCheck: string;
            };
            queue: {
                status: string;
                pendingJobs: number;
                failedJobs: number;
                processingRate: number;
            };
            cache: {
                status: string;
                hitRate: number;
                memoryUsage: number;
                keysCount: number;
            };
            storage: {
                status: string;
                availableSpace: number;
                usedSpace: number;
            };
        };
        metrics: {
            requestCount: number;
            errorRate: number;
            averageResponseTime: number;
            activeConnections: number;
        };
    };
}
/**
 * Report Response Type (generic)
 */
export interface ReportResponseType<T = any> extends BaseResponseType {
    data: T;
    generatedAt: string;
    reportType: string;
    format: 'JSON' | 'CSV' | 'PDF' | 'EXCEL';
    downloadUrl?: string;
}
/**
 * Search Response Type
 */
export interface SearchResponseType<T = any> extends BaseResponseType {
    data: T[];
    pagination: PaginationType;
    filters?: Record<string, any>;
    sorting?: Array<{
        field: string;
        direction: 'asc' | 'desc';
    }>;
}
/**
 * Batch Operation Response Type
 */
export interface BatchResponseType extends BaseResponseType {
    data: {
        batchId: string;
        operation: string;
        totalItems: number;
        successful: number;
        failed: number;
        results: Array<{
            itemId: string;
            success: boolean;
            message?: string;
            error?: string;
            referenceId?: string;
        }>;
    };
}
/**
 * Validation Response Type
 */
export interface ValidationResponseType extends BaseResponseType {
    data: {
        isValid: boolean;
        errors: Array<{
            field: string;
            message: string;
            severity: 'ERROR' | 'WARNING';
        }>;
        warnings: string[];
        suggestions?: string[];
    };
}
/**
 * Export Response Type
 */
export interface ExportResponseType extends BaseResponseType {
    data: {
        exportId: string;
        format: string;
        status: 'PROCESSING' | 'COMPLETED' | 'FAILED';
        downloadUrl?: string;
        expiresAt?: string;
        recordCount: number;
    };
}
/**
 * Webhook Response Type
 */
export interface WebhookResponseType extends BaseResponseType {
    data: {
        webhookId: string;
        url: string;
        events: string[];
        status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
        secretMasked: string;
        createdAt: string;
        lastTriggeredAt?: string;
        successRate?: number;
    };
}
/**
 * System Metrics Response Type
 */
export interface SystemMetricsResponseType extends BaseResponseType {
    data: {
        timestamp: string;
        cpuUsage: number;
        memoryUsage: number;
        diskUsage: number;
        activeUsers: number;
        transactionsPerSecond: number;
        queueSize: number;
        cacheHitRatio: number;
        databaseConnections: number;
    };
}
export type APIResponseType<T = any> = SuccessResponseType<T> | ErrorResponseType;
export type AsyncResponseType<T = any> = Promise<APIResponseType<T>>;
export type ResponseFactoryType<T> = {
    success: (data: T, message?: string) => SuccessResponseType<T>;
    error: (error: Error, code?: string) => ErrorResponseType;
    validationError: (errors: Array<{
        field: string;
        message: string;
    }>) => ErrorResponseType;
};
//# sourceMappingURL=responses.types.d.ts.map