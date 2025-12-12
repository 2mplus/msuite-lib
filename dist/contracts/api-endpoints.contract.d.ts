import { JournalEntryRequestType, JournalEntryResponseType, BatchJournalEntryRequestType, VoucherRequestType, VoucherResponseType, ReconciliationRequestType, ReconciliationResponseType, TaxFilingRequestType, StatusUpdateRequestType, TransactionStatusResponseType, AccountBalanceResponseType, HealthCheckResponseType, ErrorResponseType, BaseResponseType } from '../types';
/**
 * Complete API endpoints specification for mAccounts
 */
export interface AccountingAPIType {
    createJournalEntry: {
        path: '/api/v1/transactions/journal';
        method: 'POST';
        request: JournalEntryRequestType;
        response: JournalEntryResponseType | ErrorResponseType;
        description: 'Create a new journal entry (double-entry transaction)';
        authentication: 'API Key + Signature';
    };
    getJournalEntry: {
        path: '/api/v1/transactions/journal/{journalNumber}';
        method: 'GET';
        request: {
            journalNumber: string;
        };
        response: JournalEntryResponseType | ErrorResponseType;
        description: 'Retrieve a specific journal entry by journal number';
        authentication: 'API Key';
    };
    createBatchJournalEntries: {
        path: '/api/v1/transactions/journal/batch';
        method: 'POST';
        request: BatchJournalEntryRequestType;
        response: {
            data: JournalEntryResponseType[];
        } | ErrorResponseType;
        description: 'Create multiple journal entries in a single request';
        authentication: 'API Key + Signature';
    };
    createVoucher: {
        path: '/api/v1/vouchers';
        method: 'POST';
        request: VoucherRequestType;
        response: VoucherResponseType | ErrorResponseType;
        description: 'Create a payment/receipt/contra/journal voucher';
        authentication: 'API Key + Signature';
    };
    getVoucher: {
        path: '/api/v1/vouchers/{voucherNumber}';
        method: 'GET';
        request: {
            voucherNumber: string;
        };
        response: VoucherResponseType | ErrorResponseType;
        description: 'Retrieve a specific voucher by voucher number';
        authentication: 'API Key';
    };
    getTransactionStatus: {
        path: '/api/v1/transactions/{transactionId}/status';
        method: 'GET';
        request: {
            transactionId: string;
        };
        response: TransactionStatusResponseType | ErrorResponseType;
        description: 'Check the status of a transaction';
        authentication: 'API Key';
    };
    updateTransactionStatus: {
        path: '/api/v1/transactions/{transactionId}/status';
        method: 'PUT';
        request: StatusUpdateRequestType;
        response: TransactionStatusResponseType | ErrorResponseType;
        description: 'Update transaction status (cancel, reverse, etc.)';
        authentication: 'API Key + Signature';
    };
    getAccountBalance: {
        path: '/api/v1/accounts/{code}/balance';
        method: 'GET';
        request: {
            code: string;
            asOfDate?: string;
        };
        response: AccountBalanceResponseType | ErrorResponseType;
        description: 'Get current balance for a ledger account';
        authentication: 'API Key';
    };
    getAccountStatement: {
        path: '/api/v1/accounts/{code}/statement';
        method: 'GET';
        request: {
            code: string;
            fromDate: string;
            toDate: string;
        };
        response: {
            data: any[];
        } | ErrorResponseType;
        description: 'Get detailed statement for a ledger account';
        authentication: 'API Key';
    };
    createReconciliation: {
        path: '/api/v1/reconciliation';
        method: 'POST';
        request: ReconciliationRequestType;
        response: ReconciliationResponseType | ErrorResponseType;
        description: 'Submit bank/cash reconciliation';
        authentication: 'API Key + Signature';
    };
    submitTaxFiling: {
        path: '/api/v1/tax/filing';
        method: 'POST';
        request: TaxFilingRequestType;
        response: BaseResponseType | ErrorResponseType;
        description: 'Submit tax filing information';
        authentication: 'API Key + Signature';
    };
    getTrialBalance: {
        path: '/api/v1/reports/trial-balance';
        method: 'GET';
        request: {
            asOfDate: string;
        };
        response: {
            data: any;
        } | ErrorResponseType;
        description: 'Get trial balance report';
        authentication: 'API Key';
    };
    getProfitLoss: {
        path: '/api/v1/reports/profit-loss';
        method: 'GET';
        request: {
            fromDate: string;
            toDate: string;
        };
        response: {
            data: any;
        } | ErrorResponseType;
        description: 'Get profit & loss statement';
        authentication: 'API Key';
    };
    getBalanceSheet: {
        path: '/api/v1/reports/balance-sheet';
        method: 'GET';
        request: {
            asOfDate: string;
        };
        response: {
            data: any;
        } | ErrorResponseType;
        description: 'Get balance sheet';
        authentication: 'API Key';
    };
    healthCheck: {
        path: '/api/v1/health';
        method: 'GET';
        request: {};
        response: HealthCheckResponseType;
        description: 'Check API health status';
        authentication: 'None';
    };
    getSystemMetrics: {
        path: '/api/v1/metrics';
        method: 'GET';
        request: {};
        response: {
            data: any;
        } | ErrorResponseType;
        description: 'Get system performance metrics';
        authentication: 'API Key';
    };
    registerWebhook: {
        path: '/api/v1/webhooks';
        method: 'POST';
        request: {
            url: string;
            events: string[];
            secret: string;
        };
        response: BaseResponseType | ErrorResponseType;
        description: 'Register a webhook endpoint';
        authentication: 'API Key + Signature';
    };
    listWebhooks: {
        path: '/api/v1/webhooks';
        method: 'GET';
        request: {};
        response: {
            data: any[];
        } | ErrorResponseType;
        description: 'List registered webhooks';
        authentication: 'API Key';
    };
}
export type APIEndpointType = keyof AccountingAPIType;
export type APIRequestType<T extends APIEndpointType> = AccountingAPIType[T]['request'];
export type APIResponseType<T extends APIEndpointType> = AccountingAPIType[T]['response'];
export interface EndpointConfigType {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description: string;
    authentication: 'None' | 'API Key' | 'API Key + Signature' | 'Bearer Token';
}
export interface APIClientConfigType {
    baseURL: string;
    apiKey: string;
    apiSecret?: string;
    timeout?: number;
    maxRetries?: number;
}
export interface APIRequestOptionsType {
    headers?: Record<string, string>;
    params?: Record<string, any>;
    timeout?: number;
    retryCount?: number;
}
export interface APIResponseWrapperType<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    statusCode: number;
    timestamp: string;
    requestId?: string;
}
//# sourceMappingURL=api-endpoints.contract.d.ts.map