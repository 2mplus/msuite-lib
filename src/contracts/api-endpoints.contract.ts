// src/contracts/api-endpoints.contract.ts

import {
    JournalEntryRequest,
    JournalEntryResponse,
    BatchJournalEntryRequest,
    VoucherRequest,
    VoucherResponse,
    ReconciliationRequest,
    ReconciliationResponse,
    TaxFilingRequest,
    StatusUpdateRequest,
    TransactionStatusResponse,
    AccountBalanceResponse,
    HealthCheckResponse,
    ErrorResponse,
    BaseResponse
} from '../types';

/**
 * Complete API endpoints specification for mAccounts
 */
export interface AccountingAPI {
    // ========== JOURNAL ENTRIES ==========
    createJournalEntry: {
        path: '/api/v1/transactions/journal';
        method: 'POST';
        request: JournalEntryRequest;
        response: JournalEntryResponse | ErrorResponse;
        description: 'Create a new journal entry (double-entry transaction)';
        authentication: 'API Key + Signature';
    };

    getJournalEntry: {
        path: '/api/v1/transactions/journal/{journalNumber}';
        method: 'GET';
        request: { journalNumber: string };
        response: JournalEntryResponse | ErrorResponse;
        description: 'Retrieve a specific journal entry by journal number';
        authentication: 'API Key';
    };

    createBatchJournalEntries: {
        path: '/api/v1/transactions/journal/batch';
        method: 'POST';
        request: BatchJournalEntryRequest;
        response: { data: JournalEntryResponse[] } | ErrorResponse;
        description: 'Create multiple journal entries in a single request';
        authentication: 'API Key + Signature';
    };

    // ========== VOUCHERS ==========
    createVoucher: {
        path: '/api/v1/vouchers';
        method: 'POST';
        request: VoucherRequest;
        response: VoucherResponse | ErrorResponse;
        description: 'Create a payment/receipt/contra/journal voucher';
        authentication: 'API Key + Signature';
    };

    getVoucher: {
        path: '/api/v1/vouchers/{voucherNumber}';
        method: 'GET';
        request: { voucherNumber: string };
        response: VoucherResponse | ErrorResponse;
        description: 'Retrieve a specific voucher by voucher number';
        authentication: 'API Key';
    };

    // ========== TRANSACTION STATUS ==========
    getTransactionStatus: {
        path: '/api/v1/transactions/{transactionId}/status';
        method: 'GET';
        request: { transactionId: string };
        response: TransactionStatusResponse | ErrorResponse;
        description: 'Check the status of a transaction';
        authentication: 'API Key';
    };

    updateTransactionStatus: {
        path: '/api/v1/transactions/{transactionId}/status';
        method: 'PUT';
        request: StatusUpdateRequest;
        response: TransactionStatusResponse | ErrorResponse;
        description: 'Update transaction status (cancel, reverse, etc.)';
        authentication: 'API Key + Signature';
    };

    // ========== LEDGER & ACCOUNTS ==========
    getAccountBalance: {
        path: '/api/v1/accounts/{code}/balance';
        method: 'GET';
        request: { code: string; asOfDate?: string };
        response: AccountBalanceResponse | ErrorResponse;
        description: 'Get current balance for a account account';
        authentication: 'API Key';
    };

    getAccountStatement: {
        path: '/api/v1/accounts/{code}/statement';
        method: 'GET';
        request: { code: string; fromDate: string; toDate: string };
        response: { data: any[] } | ErrorResponse;
        description: 'Get detailed statement for a account account';
        authentication: 'API Key';
    };

    // ========== RECONCILIATION ==========
    createReconciliation: {
        path: '/api/v1/reconciliation';
        method: 'POST';
        request: ReconciliationRequest;
        response: ReconciliationResponse | ErrorResponse;
        description: 'Submit bank/cash reconciliation';
        authentication: 'API Key + Signature';
    };

    // ========== TAX FILING ==========
    submitTaxFiling: {
        path: '/api/v1/tax/filing';
        method: 'POST';
        request: TaxFilingRequest;
        response: BaseResponse | ErrorResponse;
        description: 'Submit tax filing information';
        authentication: 'API Key + Signature';
    };

    // ========== REPORTS ==========
    getTrialBalance: {
        path: '/api/v1/reports/trial-balance';
        method: 'GET';
        request: { asOfDate: string };
        response: { data: any } | ErrorResponse;
        description: 'Get trial balance report';
        authentication: 'API Key';
    };

    getProfitLoss: {
        path: '/api/v1/reports/profit-loss';
        method: 'GET';
        request: { fromDate: string; toDate: string };
        response: { data: any } | ErrorResponse;
        description: 'Get profit & loss statement';
        authentication: 'API Key';
    };

    getBalanceSheet: {
        path: '/api/v1/reports/balance-sheet';
        method: 'GET';
        request: { asOfDate: string };
        response: { data: any } | ErrorResponse;
        description: 'Get balance sheet';
        authentication: 'API Key';
    };

    // ========== HEALTH & METRICS ==========
    healthCheck: {
        path: '/api/v1/health';
        method: 'GET';
        request: {};
        response: HealthCheckResponse;
        description: 'Check API health status';
        authentication: 'None';
    };

    getSystemMetrics: {
        path: '/api/v1/metrics';
        method: 'GET';
        request: {};
        response: { data: any } | ErrorResponse;
        description: 'Get system performance metrics';
        authentication: 'API Key';
    };

    // ========== WEBHOOK MANAGEMENT ==========
    registerWebhook: {
        path: '/api/v1/webhooks';
        method: 'POST';
        request: {
            url: string;
            events: string[];
            secret: string;
        };
        response: BaseResponse | ErrorResponse;
        description: 'Register a webhook endpoint';
        authentication: 'API Key + Signature';
    };

    listWebhooks: {
        path: '/api/v1/webhooks';
        method: 'GET';
        request: {};
        response: { data: any[] } | ErrorResponse;
        description: 'List registered webhooks';
        authentication: 'API Key';
    };
}

// Helper types for API usage
export type APIEndpoint = keyof AccountingAPI;
export type APIRequest<T extends APIEndpoint> = AccountingAPI[T]['request'];
export type APIResponse<T extends APIEndpoint> = AccountingAPI[T]['response'];