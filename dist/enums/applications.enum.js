"use strict";
// src/enums/applications.enum.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModuleEnum = exports.MPlusApplicationEnum = void 0;
/**
 * All MStack applications that can interface with mAccounts
 */
var MPlusApplicationEnum;
(function (MPlusApplicationEnum) {
    // School Management System
    MPlusApplicationEnum["MSCHOOL"] = "mschool";
    // Laboratory Information Management System
    MPlusApplicationEnum["MLAB"] = "mlab";
    // Hospital Management System
    MPlusApplicationEnum["MHOSPITAL"] = "mhospital";
    // E-commerce Suite
    MPlusApplicationEnum["MSUITE"] = "msuite";
    // Point of Sale System
    MPlusApplicationEnum["MPOS"] = "mpos";
    // Inventory Management System
    MPlusApplicationEnum["MINVENTORY"] = "minventory";
    // Human Resources & Payroll
    MPlusApplicationEnum["MHR"] = "mhr";
    // Customer Relationship Management
    MPlusApplicationEnum["MCRM"] = "mcrm";
    // Accounting System Itself
    MPlusApplicationEnum["MACCOUNTS"] = "maccounts";
    MPlusApplicationEnum["OTHER"] = "Other";
})(MPlusApplicationEnum || (exports.MPlusApplicationEnum = MPlusApplicationEnum = {}));
/**
 * Application modules within each system
 */
var ApplicationModuleEnum;
(function (ApplicationModuleEnum) {
    // MSchool modules
    ApplicationModuleEnum["STUDENT_FEES"] = "student_fees";
    ApplicationModuleEnum["TRANSPORT_FEES"] = "transport_fees";
    ApplicationModuleEnum["HOSTEL_FEES"] = "hostel_fees";
    ApplicationModuleEnum["LIBRARY_FEES"] = "library_fees";
    ApplicationModuleEnum["EXAM_FEES"] = "exam_fees";
    ApplicationModuleEnum["SALARY_PAYROLL"] = "salary_payroll";
    ApplicationModuleEnum["EXPENSES"] = "expenses";
    ApplicationModuleEnum["DONATIONS"] = "donations";
    ApplicationModuleEnum["GRANTS"] = "grants";
    // MLab modules
    ApplicationModuleEnum["LAB_TESTS"] = "lab_tests";
    ApplicationModuleEnum["TEST_PACKAGES"] = "test_packages";
    ApplicationModuleEnum["LAB_SUPPLIES"] = "lab_supplies";
    ApplicationModuleEnum["DIAGNOSTIC_SERVICES"] = "diagnostic_services";
    // MHospital modules
    ApplicationModuleEnum["CONSULTATION"] = "consultation";
    ApplicationModuleEnum["PHARMACY"] = "pharmacy";
    ApplicationModuleEnum["DIAGNOSTICS"] = "diagnostics";
    ApplicationModuleEnum["IPD"] = "ipd";
    ApplicationModuleEnum["OPD"] = "opd";
    ApplicationModuleEnum["SURGERY"] = "surgery";
    ApplicationModuleEnum["EMERGENCY"] = "emergency";
    // MSuite modules
    ApplicationModuleEnum["SALES"] = "sales";
    ApplicationModuleEnum["PURCHASE"] = "purchase";
    ApplicationModuleEnum["INVENTORY"] = "inventory";
    ApplicationModuleEnum["AFFILIATE"] = "affiliate";
    ApplicationModuleEnum["COMMISSIONS"] = "commissions";
    ApplicationModuleEnum["VENDOR_PAYMENTS"] = "vendor_payments";
    // MPOS modules
    ApplicationModuleEnum["RETAIL_SALES"] = "retail_sales";
    ApplicationModuleEnum["SERVICE_SALES"] = "service_sales";
    ApplicationModuleEnum["MEMBERSHIPS"] = "memberships";
    ApplicationModuleEnum["GIFT_CARDS"] = "gift_cards";
    // MHR modules
    ApplicationModuleEnum["EMPLOYEE_SALARY"] = "employee_salary";
    ApplicationModuleEnum["STAFF_ADVANCES"] = "staff_advances";
    ApplicationModuleEnum["LOANS"] = "loans";
    ApplicationModuleEnum["INCENTIVES"] = "incentives";
    ApplicationModuleEnum["BONUS"] = "bonus";
    // MACCOUNTS modules
    ApplicationModuleEnum["JOURNAL_ENTRIES"] = "journal_entries";
    ApplicationModuleEnum["VOUCHERS"] = "vouchers";
    ApplicationModuleEnum["LEDGER"] = "ledger";
    ApplicationModuleEnum["TAX_FILING"] = "tax_filing";
    ApplicationModuleEnum["RECONCILIATION"] = "reconciliation";
})(ApplicationModuleEnum || (exports.ApplicationModuleEnum = ApplicationModuleEnum = {}));
//# sourceMappingURL=applications.enum.js.map