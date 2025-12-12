"use strict";
// src/enums/transaction-types.enum.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodEnum = exports.TransactionStatusEnum = exports.TransactionEnum = void 0;
/**
 * All transaction types supported by the accounting system
 * Matches the trigger functions and database schema
 */
var TransactionEnum;
(function (TransactionEnum) {
    // ========== STUDENT FEES (MSchool) ==========
    TransactionEnum["STUDENT_FEE_PAYMENT"] = "STUDENT_FEE_PAYMENT";
    TransactionEnum["STUDENT_FEE_ADVANCE"] = "STUDENT_FEE_ADVANCE";
    TransactionEnum["STUDENT_FEE_REFUND"] = "STUDENT_FEE_REFUND";
    TransactionEnum["STUDENT_FEE_DISCOUNT"] = "STUDENT_FEE_DISCOUNT";
    TransactionEnum["STUDENT_FEE_WAIVER"] = "STUDENT_FEE_WAIVER";
    TransactionEnum["STUDENT_LATE_FEE"] = "STUDENT_LATE_FEE";
    TransactionEnum["STUDENT_FINE"] = "STUDENT_FINE";
    TransactionEnum["STUDENT_SECURITY_DEPOSIT"] = "STUDENT_SECURITY_DEPOSIT";
    // ========== TRANSPORT (MSchool) ==========
    TransactionEnum["TRANSPORT_FEE"] = "TRANSPORT_FEE";
    TransactionEnum["TRANSPORT_ADVANCE"] = "TRANSPORT_ADVANCE";
    TransactionEnum["TRANSPORT_REFUND"] = "TRANSPORT_REFUND";
    TransactionEnum["TRANSPORT_DISCOUNT"] = "TRANSPORT_DISCOUNT";
    // ========== SALARY & STAFF (MSchool/MHR) ==========
    TransactionEnum["SALARY_PAYMENT"] = "SALARY_PAYMENT";
    TransactionEnum["ADVANCE_SALARY"] = "ADVANCE_SALARY";
    TransactionEnum["BONUS_PAYMENT"] = "BONUS_PAYMENT";
    TransactionEnum["INCENTIVE_PAYMENT"] = "INCENTIVE_PAYMENT";
    TransactionEnum["DRIVER_INCENTIVE"] = "DRIVER_INCENTIVE";
    TransactionEnum["ATTENDER_INCENTIVE"] = "ATTENDER_INCENTIVE";
    TransactionEnum["TEACHER_INCENTIVE"] = "TEACHER_INCENTIVE";
    TransactionEnum["STAFF_LOAN"] = "STAFF_LOAN";
    TransactionEnum["LOAN_REPAYMENT"] = "LOAN_REPAYMENT";
    TransactionEnum["EMPLOYEE_ADVANCE"] = "EMPLOYEE_ADVANCE";
    TransactionEnum["EMPLOYEE_EXPENSE"] = "EMPLOYEE_EXPENSE";
    // ========== EXPENSES (All Apps) ==========
    TransactionEnum["OPERATING_EXPENSE"] = "OPERATING_EXPENSE";
    TransactionEnum["CAPITAL_EXPENSE"] = "CAPITAL_EXPENSE";
    TransactionEnum["UTILITY_EXPENSE"] = "UTILITY_EXPENSE";
    TransactionEnum["MAINTENANCE_EXPENSE"] = "MAINTENANCE_EXPENSE";
    TransactionEnum["OFFICE_EXPENSE"] = "OFFICE_EXPENSE";
    TransactionEnum["MARKETING_EXPENSE"] = "MARKETING_EXPENSE";
    TransactionEnum["TRAVEL_EXPENSE"] = "TRAVEL_EXPENSE";
    TransactionEnum["STATIONERY_EXPENSE"] = "STATIONERY_EXPENSE";
    TransactionEnum["PRINTING_EXPENSE"] = "PRINTING_EXPENSE";
    TransactionEnum["INTERNET_EXPENSE"] = "INTERNET_EXPENSE";
    TransactionEnum["RENT_EXPENSE"] = "RENT_EXPENSE";
    TransactionEnum["ELECTRICITY_EXPENSE"] = "ELECTRICITY_EXPENSE";
    TransactionEnum["WATER_EXPENSE"] = "WATER_EXPENSE";
    // ========== E-COMMERCE (MSuite/MPOS) ==========
    TransactionEnum["SALES_INVOICE"] = "SALES_INVOICE";
    TransactionEnum["SALES_RETURN"] = "SALES_RETURN";
    TransactionEnum["PURCHASE_INVOICE"] = "PURCHASE_INVOICE";
    TransactionEnum["PURCHASE_RETURN"] = "PURCHASE_RETURN";
    TransactionEnum["AFFILIATE_PAYMENT"] = "AFFILIATE_PAYMENT";
    TransactionEnum["COMMISSION_PAYMENT"] = "COMMISSION_PAYMENT";
    TransactionEnum["VENDOR_PAYMENT"] = "VENDOR_PAYMENT";
    TransactionEnum["CUSTOMER_REFUND"] = "CUSTOMER_REFUND";
    TransactionEnum["VENDOR_REFUND"] = "VENDOR_REFUND";
    // ========== TAX PAYMENTS ==========
    TransactionEnum["GST_PAYMENT"] = "GST_PAYMENT";
    TransactionEnum["TDS_PAYMENT"] = "TDS_PAYMENT";
    TransactionEnum["TAX_REFUND"] = "TAX_REFUND";
    TransactionEnum["GST_FILING_FEE"] = "GST_FILING_FEE";
    TransactionEnum["INCOME_TAX_PAYMENT"] = "INCOME_TAX_PAYMENT";
    TransactionEnum["PROFESSIONAL_TAX"] = "PROFESSIONAL_TAX";
    // ========== BANK & CASH ==========
    TransactionEnum["BANK_DEPOSIT"] = "BANK_DEPOSIT";
    TransactionEnum["BANK_WITHDRAWAL"] = "BANK_WITHDRAWAL";
    TransactionEnum["CASH_DEPOSIT"] = "CASH_DEPOSIT";
    TransactionEnum["CASH_WITHDRAWAL"] = "CASH_WITHDRAWAL";
    TransactionEnum["BANK_TRANSFER"] = "BANK_TRANSFER";
    TransactionEnum["FD_CREATION"] = "FD_CREATION";
    TransactionEnum["FD_MATURITY"] = "FD_MATURITY";
    // ========== INVESTMENTS ==========
    TransactionEnum["INVESTMENT_PURCHASE"] = "INVESTMENT_PURCHASE";
    TransactionEnum["INVESTMENT_SALE"] = "INVESTMENT_SALE";
    TransactionEnum["DIVIDEND_INCOME"] = "DIVIDEND_INCOME";
    TransactionEnum["INTEREST_INCOME"] = "INTEREST_INCOME";
    // ========== ACCOUNTING VOUCHERS ==========
    TransactionEnum["JOURNAL_VOUCHER"] = "JOURNAL_VOUCHER";
    TransactionEnum["CONTRA_VOUCHER"] = "CONTRA_VOUCHER";
    TransactionEnum["RECEIPT_VOUCHER"] = "RECEIPT_VOUCHER";
    TransactionEnum["PAYMENT_VOUCHER"] = "PAYMENT_VOUCHER";
    TransactionEnum["DEBIT_NOTE"] = "DEBIT_NOTE";
    TransactionEnum["CREDIT_NOTE"] = "CREDIT_NOTE";
    // ========== MISCELLANEOUS ==========
    TransactionEnum["DONATION_RECEIPT"] = "DONATION_RECEIPT";
    TransactionEnum["GRANT_RECEIVED"] = "GRANT_RECEIVED";
    TransactionEnum["PENALTY_INCOME"] = "PENALTY_INCOME";
    TransactionEnum["FINE_INCOME"] = "FINE_INCOME";
    TransactionEnum["DISCOUNT_ALLOWED"] = "DISCOUNT_ALLOWED";
    TransactionEnum["DISCOUNT_RECEIVED"] = "DISCOUNT_RECEIVED";
    TransactionEnum["ROUND_OFF"] = "ROUND_OFF";
})(TransactionEnum || (exports.TransactionEnum = TransactionEnum = {}));
/**
 * Transaction status
 */
var TransactionStatusEnum;
(function (TransactionStatusEnum) {
    TransactionStatusEnum["DRAFT"] = "DRAFT";
    TransactionStatusEnum["PENDING"] = "PENDING";
    TransactionStatusEnum["POSTED"] = "POSTED";
    TransactionStatusEnum["CANCELLED"] = "CANCELLED";
    TransactionStatusEnum["REVERSED"] = "REVERSED";
    TransactionStatusEnum["RECONCILED"] = "RECONCILED";
})(TransactionStatusEnum || (exports.TransactionStatusEnum = TransactionStatusEnum = {}));
/**
 * Payment methods
 */
var PaymentMethodEnum;
(function (PaymentMethodEnum) {
    PaymentMethodEnum["CASH"] = "CASH";
    PaymentMethodEnum["CHEQUE"] = "CHEQUE";
    PaymentMethodEnum["ONLINE_TRANSFER"] = "ONLINE_TRANSFER";
    PaymentMethodEnum["UPI"] = "UPI";
    PaymentMethodEnum["CREDIT_CARD"] = "CREDIT_CARD";
    PaymentMethodEnum["DEBIT_CARD"] = "DEBIT_CARD";
    PaymentMethodEnum["MOBILE_WALLET"] = "MOBILE_WALLET";
    PaymentMethodEnum["BANK_TRANSFER"] = "BANK_TRANSFER";
    PaymentMethodEnum["DEMAND_DRAFT"] = "DEMAND_DRAFT";
    PaymentMethodEnum["NEFT"] = "NEFT";
    PaymentMethodEnum["RTGS"] = "RTGS";
    PaymentMethodEnum["IMPS"] = "IMPS";
})(PaymentMethodEnum || (exports.PaymentMethodEnum = PaymentMethodEnum = {}));
//# sourceMappingURL=transaction-types.enum.js.map