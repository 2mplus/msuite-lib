// src/enums/applications.enum.ts

/**
 * All MStack applications that can interface with mAccounts
 */
export enum MPlusApplicationEnum {
    // School Management System
    MSCHOOL = 'mschool',

    // Laboratory Information Management System
    MLAB = 'mlab',

    // Hospital Management System
    MHOSPITAL = 'mhospital',

    // E-commerce Suite
    MSUITE = 'msuite',

    // Point of Sale System
    MPOS = 'mpos',

    // Inventory Management System
    MINVENTORY = 'minventory',

    // Human Resources & Payroll
    MHR = 'mhr',

    // Customer Relationship Management
    MCRM = 'mcrm',

    // Accounting System Itself
    MACCOUNTS = 'maccounts',

    OTHER = 'Other'
}

/**
 * Application modules within each system
 */
export enum ApplicationModuleEnum {
    // MSchool modules
    STUDENT_FEES = 'student_fees',
    TRANSPORT_FEES = 'transport_fees',
    HOSTEL_FEES = 'hostel_fees',
    LIBRARY_FEES = 'library_fees',
    EXAM_FEES = 'exam_fees',
    SALARY_PAYROLL = 'salary_payroll',
    EXPENSES = 'expenses',
    DONATIONS = 'donations',
    GRANTS = 'grants',

    // MLab modules
    LAB_TESTS = 'lab_tests',
    TEST_PACKAGES = 'test_packages',
    LAB_SUPPLIES = 'lab_supplies',
    DIAGNOSTIC_SERVICES = 'diagnostic_services',

    // MHospital modules
    CONSULTATION = 'consultation',
    PHARMACY = 'pharmacy',
    DIAGNOSTICS = 'diagnostics',
    IPD = 'ipd',
    OPD = 'opd',
    SURGERY = 'surgery',
    EMERGENCY = 'emergency',

    // MSuite modules
    SALES = 'sales',
    PURCHASE = 'purchase',
    INVENTORY = 'inventory',
    AFFILIATE = 'affiliate',
    COMMISSIONS = 'commissions',
    VENDOR_PAYMENTS = 'vendor_payments',

    // MPOS modules
    RETAIL_SALES = 'retail_sales',
    SERVICE_SALES = 'service_sales',
    MEMBERSHIPS = 'memberships',
    GIFT_CARDS = 'gift_cards',

    // MHR modules
    EMPLOYEE_SALARY = 'employee_salary',
    STAFF_ADVANCES = 'staff_advances',
    LOANS = 'loans',
    INCENTIVES = 'incentives',
    BONUS = 'bonus',

    // MACCOUNTS modules
    JOURNAL_ENTRIES = 'journal_entries',
    VOUCHERS = 'vouchers',
    LEDGER = 'ledger',
    TAX_FILING = 'tax_filing',
    RECONCILIATION = 'reconciliation'
}