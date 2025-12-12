// src/types/shared.types.ts

import { MPlusApplication } from "../enums/applications.enum";
import { PaymentMethod } from "../enums/transaction-types.enum";

/**
 * Authentication and security headers for all API requests
 */
export interface ApiAuthHeaders {
    'X-API-Key': string;
    'X-App-ID': string;
    'X-Timestamp': string;
    'X-Signature': string;
    'X-Request-ID': string;
    'X-Source-App': MPlusApplication;
    'X-User-ID': string;
}

/**
 * Base request metadata
 */
export interface RequestMetadata {
    requestId: string;
    timestamp: string;
    correlationId?: string;
    sourceIp: string;
    userAgent: string;
    appVersion: string;
}

/**
 * User context for audit trail
 */
export interface UserContext {
    userId: string;
    userEmail: string;
    userName?: string;
    userRole?: string;
    ipAddress?: string;
    userAgent?: string;
    sessionId?: string;
}

/**
 * Monetary amounts with currency
 */
export interface MonetaryAmount {
    amount: number;
    currency: string; // ISO 4217
    exchangeRate?: number;
    baseCurrency?: string;
}

/**
 * Tax details structure
 */
export interface TaxDetails {
    gstRate?: number;
    gstAmount?: number;
    cgst?: number;
    sgst?: number;
    igst?: number;
    cgstRate?: number;
    sgstRate?: number;
    igstRate?: number;
    tdsRate?: number;
    tdsAmount?: number;
    taxableAmount?: number;
    taxType?: 'GST' | 'VAT' | 'TDS' | 'WITHHOLDING';
    hsnCode?: string;
    sacCode?: string;
}

/**
 * Party information (customer/supplier/student)
 */
export interface PartyDetails {
    partyId: string;
    partyName: string;
    partyType: 'customer' | 'supplier' | 'student' | 'employee' | 'vendor' | 'affiliate';
    gstin?: string;
    pan?: string;
    address?: string;
    contact?: string;
    email?: string;
}

/**
 * Payment information
 */
export interface PaymentDetails {
    method: PaymentMethod;
    reference: string;
    date: string;
    gateway?: string;
    bankName?: string;
    accountNumber?: string;
    chequeNumber?: string;
    upiId?: string;
    cardLastFour?: string;
}

/**
 * Account posting for double-entry accounting
 */
export interface AccountPosting {
    ledgerCode: string;
    amount: number;
    nature: 'debit' | 'credit';
    description?: string;
    referenceId?: string;
    taxDetails?: TaxDetails;
    metadata?: Record<string, any>;
}