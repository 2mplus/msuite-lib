// src/enums/ledger-codes.enum.ts

export enum AccountCode {
    CURRENT_ASSETS = '101',
    CASH_AND_CASH_EQUIVALENTS = '10101',
    CASH_IN_HAND = '10101001',
    PETTY_CASH = '10101002',
    BANK_ACCOUNTS = '10102',
    CASH_AT_BANK = '10102001',
    FIXED_DEPOSITS = '10102002',
    ACCOUNTS_RECEIVABLE = '10103',
    STUDENT_TUITION_FEES_RECEIVABLE = '10103001',
    STUDENT_TRANSPORT_FEES_RECEIVABLE = '10103002',
    STUDENT_HOSTEL_FEES_RECEIVABLE = '10103003',
    STUDENT_EXAM_FEES_RECEIVABLE = '10103004',
    STUDENT_LIBRARY_FEES_RECEIVABLE = '10103005',
    STUDENT_LAB_FEES_RECEIVABLE = '10103006',
    HEALTHCARE_RECEIVABLE = '10103007',
    ECOMMERCE_RECEIVABLE = '10103008',
    ADVANCES_RECEIVABLE = '10103009',
    LOANS_RECEIVABLE = '10103010',
    INVENTORY = '10104',
    INVENTORY_STOCK = '10104001',
    STATIONERY_STOCK = '10104002',
    MEDICINE_STOCK = '10104003',
    LAB_SUPPLIES_STOCK = '10104004',
    PREPAID_EXPENSES = '10105',
    PREPAID_RENT = '10105001',
    PREPAID_INSURANCE = '10105002',
    PREPAID_SUBSCRIPTIONS = '10105003',
    SHORT_TERM_INVESTMENTS = '10106',
    MARKETABLE_SECURITIES = '10106001',
    INPUT_TAXES = '10107',
    INPUT_CGST_0 = '10107001',
    INPUT_CGST_2_5 = '10107002',
    INPUT_CGST_6 = '10107003',
    INPUT_CGST_9 = '10107004',
    INPUT_CGST_14 = '10107005',
    INPUT_SGST_0 = '10107006',
    INPUT_SGST_2_5 = '10107007',
    INPUT_SGST_6 = '10107008',
    INPUT_SGST_9 = '10107009',
    INPUT_SGST_14 = '10107010',
    INPUT_IGST_0 = '10107011',
    INPUT_IGST_5 = '10107012',
    INPUT_IGST_12 = '10107013',
    INPUT_IGST_18 = '10107014',
    INPUT_IGST_28 = '10107015',
    INPUT_VAT = '10107016',
    INPUT_CESS = '10107017',
    TDS_RECEIVABLE = '10107018',
    FIXED_ASSETS = '102',
    LAND_AND_BUILDINGS = '10201',
    LAND = '10201001',
    BUILDINGS = '10201002',
    VEHICLES = '10202',
    COMPANY_VEHICLES = '10202001',
    EQUIPMENT_AND_MACHINERY = '10203',
    PRODUCTION_EQUIPMENT = '10203001',
    FURNITURE_AND_FIXTURES = '10204',
    FURNITURE = '10204001',
    OFFICE_FIXTURES = '10204002',
    COMPUTERS_AND_SOFTWARE = '10205',
    COMPUTERS = '10205001',
    SOFTWARE_LICENSES = '10205002',
    OTHER_ASSETS = '103',
    INTANGIBLE_ASSETS = '10301',
    PATENTS = '10301001',
    TRADEMARKS = '10301002',
    GOODWILL = '10301003',
    LONG_TERM_INVESTMENTS = '10302',
    DEPOSITS = '10303',
    SECURITY_DEPOSITS = '10303001',
    ADVANCE_DEPOSITS = '10303002',
    STUDENT_DEPOSITS = '10303003',
    CURRENT_LIABILITIES = '201',
    SHORT_TERM_LOANS = '20101',
    BANK_OVERDRAFT = '20101001',
    ACCOUNTS_PAYABLE = '20102',
    VENDOR_PAYABLE = '20102001',
    SALARY_PAYABLE = '20102002',
    ACCRUED_EXPENSES = '20103',
    ACCRUED_SALARIES = '20103001',
    ACCRUED_TAXES = '20103002',
    ACCRUED_INTEREST = '20103003',
    UNEARNED_REVENUE = '20104',
    ADVANCE_FEES = '20104001',
    PREPAYMENTS = '20104002',
    SALARIES_PAYABLE = '20105',
    OUTPUT_TAXES_PAYABLE = '20106',
    OUTPUT_CGST_0 = '20106001',
    OUTPUT_CGST_2_5 = '20106002',
    OUTPUT_CGST_6 = '20106003',
    OUTPUT_CGST_9 = '20106004',
    OUTPUT_CGST_14 = '20106005',
    OUTPUT_SGST_0 = '20106006',
    OUTPUT_SGST_2_5 = '20106007',
    OUTPUT_SGST_6 = '20106008',
    OUTPUT_SGST_9 = '20106009',
    OUTPUT_SGST_14 = '20106010',
    OUTPUT_IGST_0 = '20106011',
    OUTPUT_IGST_5 = '20106012',
    OUTPUT_IGST_12 = '20106013',
    OUTPUT_IGST_18 = '20106014',
    OUTPUT_IGST_28 = '20106015',
    OUTPUT_VAT = '20106016',
    OUTPUT_CESS = '20106017',
    TDS_PAYABLE = '20106018',
    LONG_TERM_LIABILITIES = '202',
    LONG_TERM_LOANS = '20201',
    BANK_LOAN = '20201001',
    STAFF_LOAN = '20201002',
    BONDS_PAYABLE = '20202',
    MORTGAGE_PAYABLE = '20203',
    LEASE_OBLIGATIONS = '20204',
    OPENING_BALANCE_EQUITY = '300',
    OWNERS_CAPITAL = '301',
    PROMOTERS_CAPITAL = '30101',
    FOUNDERS_CAPITAL = '30101001',
    PARTNERS_CAPITAL_A = '30102001',
    PARTNERS_CAPITAL_B = '30102002',
    ADDITIONAL_PAID_IN_CAPITAL = '30102003',
    SHARE_CAPITAL = '302',
    COMMON_STOCK = '30201',
    PREFERRED_STOCK = '30202',
    TREASURY_STOCK = '30203',
    RETAINED_EARNINGS = '303',
    DRAWINGS = '304',
    PROMOTER_DRAWINGS = '30401',
    PARTNER_A_DRAWINGS = '30402',
    PARTNER_B_DRAWINGS = '30403',
    SALES_REVENUE = '401',
    SALES_INCOME = '401001',
    SERVICE_REVENUE = '402',
    SERVICE_INCOME = '402001',
    TUITION_FEES_INCOME = '402002',
    TRANSPORT_FEES_INCOME = '402003',
    HOSTEL_FEES_INCOME = '402004',
    EXAM_FEES_INCOME = '402005',
    LIBRARY_FEES_INCOME = '402006',
    LAB_FEES_INCOME = '402007',
    CONSULTATION_INCOME = '402008',
    PHARMACY_INCOME = '402009',
    DIAGNOSTICS_INCOME = '402010',
    HOSPITALIZATION_INCOME = '402011',
    INTEREST_INCOME = '403',
    COMMISSION_INCOME = '404',
    COMMISSION_REVENUE = '404001',
    AFFILIATE_INCOME = '404002',
    RENTAL_INCOME = '405',
    RENT_INCOME = '405001',
    DIVIDEND_INCOME = '406',
    OTHER_INCOME = '407',
    DONATION_INCOME = '407001',
    GRANT_INCOME = '407002',
    SALARIES_AND_WAGES = '501',
    SALARY_EXPENSE = '501001',
    BONUS_EXPENSE = '501002',
    INCENTIVE_EXPENSE = '501003',
    STAFF_WELFARE = '501004',
    TRAINING_EXPENSE = '501005',
    OFFICE_RENT = '502',
    RENT_EXPENSE = '502001',
    UTILITIES = '503',
    ELECTRICITY_EXPENSE = '503001',
    WATER_EXPENSE = '503002',
    INTERNET_EXPENSE = '503003',
    TELEPHONE_EXPENSE = '503004',
    OFFICE_SUPPLIES = '504',
    STATIONERY_EXPENSE = '504001',
    PRINTING_EXPENSE = '504002',
    OFFICE_SUPPLIES_EXPENSE = '504003',
    MARKETING_AND_ADVERTISING = '505',
    TRAVEL_EXPENSES = '506',
    ENTERTAINMENT = '507',
    PROFESSIONAL_FEES = '508',
    REPAIRS_AND_MAINTENANCE = '509',
    BUILDING_MAINTENANCE = '509001',
    VEHICLE_MAINTENANCE = '509002',
    EQUIPMENT_MAINTENANCE = '509003',
    INSURANCE = '510',
    DEPRECIATION_EXPENSE = '511',
    DEPRECIATION = '511001',
    BANK_CHARGES = '512',
    INTEREST_EXPENSE = '513',
    OTHER_TAXES_AND_LICENSES = '514',
    MISCELLANEOUS_EXPENSES = '515',
    DISCOUNT_ALLOWED = '515001',
    DISCOUNT_RECEIVED = '407003',
    ROUND_OFF = '515002',
    BAD_DEBTS = '515003'
}

export interface Account {
    code: string;
    name: string;
    description: string;
    parent_code: string;
    normal_balance: 'debit' | 'credit';
    level: number;
}

export const Accounts: Record<AccountCode, Account> = {
    [AccountCode.CURRENT_ASSETS]: {
        code: '101',
        name: "Current Assets",
        description: "Short-term assets",
        parent_code: '1',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.CASH_AND_CASH_EQUIVALENTS]: {
        code: '10101',
        name: "Cash and Cash Equivalents",
        description: "Physical cash and liquid assets",
        parent_code: '101',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.CASH_IN_HAND]: {
        code: '10101001',
        name: "Cash in Hand",
        description: "Physical cash available",
        parent_code: '10101',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.PETTY_CASH]: {
        code: '10101002',
        name: "Petty Cash",
        description: "Small cash expenses fund",
        parent_code: '10101',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.BANK_ACCOUNTS]: {
        code: '10102',
        name: "Bank Accounts",
        description: "All bank accounts",
        parent_code: '101',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.CASH_AT_BANK]: {
        code: '10102001',
        name: "Cash at Bank",
        description: "Bank account balances",
        parent_code: '10102',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.FIXED_DEPOSITS]: {
        code: '10102002',
        name: "Fixed Deposits",
        description: "Bank fixed deposits",
        parent_code: '10102',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.ACCOUNTS_RECEIVABLE]: {
        code: '10103',
        name: "Accounts Receivable",
        description: "Amounts owed by customers",
        parent_code: '101',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.STUDENT_TUITION_FEES_RECEIVABLE]: {
        code: '10103001',
        name: "Student Tuition Fees Receivable",
        description: "Student tuition fees receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.STUDENT_TRANSPORT_FEES_RECEIVABLE]: {
        code: '10103002',
        name: "Student Transport Fees Receivable",
        description: "Student transport fees receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.STUDENT_HOSTEL_FEES_RECEIVABLE]: {
        code: '10103003',
        name: "Student Hostel Fees Receivable",
        description: "Student hostel fees receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.STUDENT_EXAM_FEES_RECEIVABLE]: {
        code: '10103004',
        name: "Student Exam Fees Receivable",
        description: "Student exam fees receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.STUDENT_LIBRARY_FEES_RECEIVABLE]: {
        code: '10103005',
        name: "Student Library Fees Receivable",
        description: "Student library fees receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.STUDENT_LAB_FEES_RECEIVABLE]: {
        code: '10103006',
        name: "Student Lab Fees Receivable",
        description: "Student lab fees receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.HEALTHCARE_RECEIVABLE]: {
        code: '10103007',
        name: "Healthcare Receivable",
        description: "Healthcare services receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.ECOMMERCE_RECEIVABLE]: {
        code: '10103008',
        name: "E-commerce Receivable",
        description: "E-commerce sales receivable",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.ADVANCES_RECEIVABLE]: {
        code: '10103009',
        name: "Advances Receivable",
        description: "Advances given to suppliers/employees",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.LOANS_RECEIVABLE]: {
        code: '10103010',
        name: "Loans Receivable",
        description: "Loans given to staff/others",
        parent_code: '10103',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INVENTORY]: {
        code: '10104',
        name: "Inventory",
        description: "Goods for sale",
        parent_code: '101',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.INVENTORY_STOCK]: {
        code: '10104001',
        name: "Inventory Stock",
        description: "General inventory stock",
        parent_code: '10104',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.STATIONERY_STOCK]: {
        code: '10104002',
        name: "Stationery Stock",
        description: "Stationery items stock",
        parent_code: '10104',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.MEDICINE_STOCK]: {
        code: '10104003',
        name: "Medicine Stock",
        description: "Medicine inventory stock",
        parent_code: '10104',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.LAB_SUPPLIES_STOCK]: {
        code: '10104004',
        name: "Lab Supplies Stock",
        description: "Laboratory supplies stock",
        parent_code: '10104',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.PREPAID_EXPENSES]: {
        code: '10105',
        name: "Prepaid Expenses",
        description: "Expenses paid in advance",
        parent_code: '101',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.PREPAID_RENT]: {
        code: '10105001',
        name: "Prepaid Rent",
        description: "Rent paid in advance",
        parent_code: '10105',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.PREPAID_INSURANCE]: {
        code: '10105002',
        name: "Prepaid Insurance",
        description: "Insurance premiums paid in advance",
        parent_code: '10105',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.PREPAID_SUBSCRIPTIONS]: {
        code: '10105003',
        name: "Prepaid Subscriptions",
        description: "Subscription fees paid in advance",
        parent_code: '10105',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.SHORT_TERM_INVESTMENTS]: {
        code: '10106',
        name: "Short-term Investments",
        description: "Temporary investments",
        parent_code: '101',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.MARKETABLE_SECURITIES]: {
        code: '10106001',
        name: "Marketable Securities",
        description: "Short-term marketable securities",
        parent_code: '10106',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_TAXES]: {
        code: '10107',
        name: "Input Taxes",
        description: "Taxes paid that can be claimed as credit",
        parent_code: '101',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.INPUT_CGST_0]: {
        code: '10107001',
        name: "Input CGST 0%",
        description: "Central GST Input at 0% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_CGST_2_5]: {
        code: '10107002',
        name: "Input CGST 2.5%",
        description: "Central GST Input at 2.5% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_CGST_6]: {
        code: '10107003',
        name: "Input CGST 6%",
        description: "Central GST Input at 6% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_CGST_9]: {
        code: '10107004',
        name: "Input CGST 9%",
        description: "Central GST Input at 9% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_CGST_14]: {
        code: '10107005',
        name: "Input CGST 14%",
        description: "Central GST Input at 14% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_SGST_0]: {
        code: '10107006',
        name: "Input SGST 0%",
        description: "State GST Input at 0% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_SGST_2_5]: {
        code: '10107007',
        name: "Input SGST 2.5%",
        description: "State GST Input at 2.5% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_SGST_6]: {
        code: '10107008',
        name: "Input SGST 6%",
        description: "State GST Input at 6% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_SGST_9]: {
        code: '10107009',
        name: "Input SGST 9%",
        description: "State GST Input at 9% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_SGST_14]: {
        code: '10107010',
        name: "Input SGST 14%",
        description: "State GST Input at 14% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_IGST_0]: {
        code: '10107011',
        name: "Input IGST 0%",
        description: "Integrated GST Input at 0% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_IGST_5]: {
        code: '10107012',
        name: "Input IGST 5%",
        description: "Integrated GST Input at 5% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_IGST_12]: {
        code: '10107013',
        name: "Input IGST 12%",
        description: "Integrated GST Input at 12% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_IGST_18]: {
        code: '10107014',
        name: "Input IGST 18%",
        description: "Integrated GST Input at 18% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_IGST_28]: {
        code: '10107015',
        name: "Input IGST 28%",
        description: "Integrated GST Input at 28% rate",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_VAT]: {
        code: '10107016',
        name: "Input VAT",
        description: "Value Added Tax Input",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.INPUT_CESS]: {
        code: '10107017',
        name: "Input CESS",
        description: "Compensation CESS Input",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.TDS_RECEIVABLE]: {
        code: '10107018',
        name: "TDS Receivable",
        description: "Tax Deducted at Source Receivable",
        parent_code: '10107',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.FIXED_ASSETS]: {
        code: '102',
        name: "Fixed Assets",
        description: "Long-term tangible assets",
        parent_code: '1',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.LAND_AND_BUILDINGS]: {
        code: '10201',
        name: "Land and Buildings",
        description: "Property and real estate assets",
        parent_code: '102',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.LAND]: {
        code: '10201001',
        name: "Land",
        description: "Land property",
        parent_code: '10201',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.BUILDINGS]: {
        code: '10201002',
        name: "Buildings",
        description: "Building structures",
        parent_code: '10201',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.VEHICLES]: {
        code: '10202',
        name: "Vehicles",
        description: "Company vehicles",
        parent_code: '102',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.COMPANY_VEHICLES]: {
        code: '10202001',
        name: "Company Vehicles",
        description: "Company owned vehicles",
        parent_code: '10202',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.EQUIPMENT_AND_MACHINERY]: {
        code: '10203',
        name: "Equipment and Machinery",
        description: "Production equipment and machinery",
        parent_code: '102',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.PRODUCTION_EQUIPMENT]: {
        code: '10203001',
        name: "Production Equipment",
        description: "Production machinery and equipment",
        parent_code: '10203',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.FURNITURE_AND_FIXTURES]: {
        code: '10204',
        name: "Furniture and Fixtures",
        description: "Office furniture and fixtures",
        parent_code: '102',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.FURNITURE]: {
        code: '10204001',
        name: "Furniture",
        description: "Office furniture",
        parent_code: '10204',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.OFFICE_FIXTURES]: {
        code: '10204002',
        name: "Office Fixtures",
        description: "Office fixtures and fittings",
        parent_code: '10204',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.COMPUTERS_AND_SOFTWARE]: {
        code: '10205',
        name: "Computers and Software",
        description: "IT equipment and software licenses",
        parent_code: '102',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.COMPUTERS]: {
        code: '10205001',
        name: "Computers",
        description: "Computer hardware",
        parent_code: '10205',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.SOFTWARE_LICENSES]: {
        code: '10205002',
        name: "Software Licenses",
        description: "Software licenses and subscriptions",
        parent_code: '10205',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.OTHER_ASSETS]: {
        code: '103',
        name: "Other Assets",
        description: "Miscellaneous long-term assets",
        parent_code: '1',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.INTANGIBLE_ASSETS]: {
        code: '10301',
        name: "Intangible Assets",
        description: "Patents, trademarks, goodwill",
        parent_code: '103',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.PATENTS]: {
        code: '10301001',
        name: "Patents",
        description: "Patent rights",
        parent_code: '10301',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.TRADEMARKS]: {
        code: '10301002',
        name: "Trademarks",
        description: "Trademark rights",
        parent_code: '10301',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.GOODWILL]: {
        code: '10301003',
        name: "Goodwill",
        description: "Business goodwill",
        parent_code: '10301',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.LONG_TERM_INVESTMENTS]: {
        code: '10302',
        name: "Long-term Investments",
        description: "Long-term securities and investments",
        parent_code: '103',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.DEPOSITS]: {
        code: '10303',
        name: "Deposits",
        description: "Security deposits and advances",
        parent_code: '103',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.SECURITY_DEPOSITS]: {
        code: '10303001',
        name: "Security Deposits",
        description: "Security deposits given",
        parent_code: '10303',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.ADVANCE_DEPOSITS]: {
        code: '10303002',
        name: "Advance Deposits",
        description: "Advance deposits given",
        parent_code: '10303',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.STUDENT_DEPOSITS]: {
        code: '10303003',
        name: "Student Deposits",
        description: "Student refundable deposits",
        parent_code: '10303',
        normal_balance: 'debit',
        level: 4
    },
    [AccountCode.CURRENT_LIABILITIES]: {
        code: '201',
        name: "Current Liabilities",
        description: "Short-term obligations",
        parent_code: '2',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.SHORT_TERM_LOANS]: {
        code: '20101',
        name: "Short-term Loans",
        description: "Short-term borrowings",
        parent_code: '201',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.BANK_OVERDRAFT]: {
        code: '20101001',
        name: "Bank Overdraft",
        description: "Bank overdraft facility",
        parent_code: '20101',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.ACCOUNTS_PAYABLE]: {
        code: '20102',
        name: "Accounts Payable",
        description: "Amounts owed to suppliers",
        parent_code: '201',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.VENDOR_PAYABLE]: {
        code: '20102001',
        name: "Vendor Payable",
        description: "Amounts payable to vendors",
        parent_code: '20102',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.SALARY_PAYABLE]: {
        code: '20102002',
        name: "Salary Payable",
        description: "Salaries due to employees",
        parent_code: '20102',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.ACCRUED_EXPENSES]: {
        code: '20103',
        name: "Accrued Expenses",
        description: "Expenses incurred but not paid",
        parent_code: '201',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.ACCRUED_SALARIES]: {
        code: '20103001',
        name: "Accrued Salaries",
        description: "Accrued salary expenses",
        parent_code: '20103',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.ACCRUED_TAXES]: {
        code: '20103002',
        name: "Accrued Taxes",
        description: "Accrued tax expenses",
        parent_code: '20103',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.ACCRUED_INTEREST]: {
        code: '20103003',
        name: "Accrued Interest",
        description: "Accrued interest expenses",
        parent_code: '20103',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.UNEARNED_REVENUE]: {
        code: '20104',
        name: "Unearned Revenue",
        description: "Revenue received in advance",
        parent_code: '201',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.ADVANCE_FEES]: {
        code: '20104001',
        name: "Advance Fees",
        description: "Fees received in advance",
        parent_code: '20104',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.PREPAYMENTS]: {
        code: '20104002',
        name: "Prepayments",
        description: "Customer prepayments",
        parent_code: '20104',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.SALARIES_PAYABLE]: {
        code: '20105',
        name: "Salaries Payable",
        description: "Salaries payable account",
        parent_code: '201',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.OUTPUT_TAXES_PAYABLE]: {
        code: '20106',
        name: "Output Taxes Payable",
        description: "Taxes collected payable to government",
        parent_code: '201',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.OUTPUT_CGST_0]: {
        code: '20106001',
        name: "Output CGST 0%",
        description: "Central GST Output at 0% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_CGST_2_5]: {
        code: '20106002',
        name: "Output CGST 2.5%",
        description: "Central GST Output at 2.5% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_CGST_6]: {
        code: '20106003',
        name: "Output CGST 6%",
        description: "Central GST Output at 6% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_CGST_9]: {
        code: '20106004',
        name: "Output CGST 9%",
        description: "Central GST Output at 9% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_CGST_14]: {
        code: '20106005',
        name: "Output CGST 14%",
        description: "Central GST Output at 14% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_SGST_0]: {
        code: '20106006',
        name: "Output SGST 0%",
        description: "State GST Output at 0% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_SGST_2_5]: {
        code: '20106007',
        name: "Output SGST 2.5%",
        description: "State GST Output at 2.5% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_SGST_6]: {
        code: '20106008',
        name: "Output SGST 6%",
        description: "State GST Output at 6% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_SGST_9]: {
        code: '20106009',
        name: "Output SGST 9%",
        description: "State GST Output at 9% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_SGST_14]: {
        code: '20106010',
        name: "Output SGST 14%",
        description: "State GST Output at 14% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_IGST_0]: {
        code: '20106011',
        name: "Output IGST 0%",
        description: "Integrated GST Output at 0% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_IGST_5]: {
        code: '20106012',
        name: "Output IGST 5%",
        description: "Integrated GST Output at 5% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_IGST_12]: {
        code: '20106013',
        name: "Output IGST 12%",
        description: "Integrated GST Output at 12% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_IGST_18]: {
        code: '20106014',
        name: "Output IGST 18%",
        description: "Integrated GST Output at 18% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_IGST_28]: {
        code: '20106015',
        name: "Output IGST 28%",
        description: "Integrated GST Output at 28% rate",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_VAT]: {
        code: '20106016',
        name: "Output VAT",
        description: "Value Added Tax Output",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.OUTPUT_CESS]: {
        code: '20106017',
        name: "Output CESS",
        description: "Compensation CESS Output",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.TDS_PAYABLE]: {
        code: '20106018',
        name: "TDS Payable",
        description: "Tax Deducted at Source Payable",
        parent_code: '20106',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.LONG_TERM_LIABILITIES]: {
        code: '202',
        name: "Long-term Liabilities",
        description: "Long-term obligations",
        parent_code: '2',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.LONG_TERM_LOANS]: {
        code: '20201',
        name: "Long-term Loans",
        description: "Long-term borrowings",
        parent_code: '202',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.BANK_LOAN]: {
        code: '20201001',
        name: "Bank Loan",
        description: "Bank term loans",
        parent_code: '20201',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.STAFF_LOAN]: {
        code: '20201002',
        name: "Staff Loan",
        description: "Loans to staff",
        parent_code: '20201',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.BONDS_PAYABLE]: {
        code: '20202',
        name: "Bonds Payable",
        description: "Corporate bonds issued",
        parent_code: '202',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.MORTGAGE_PAYABLE]: {
        code: '20203',
        name: "Mortgage Payable",
        description: "Property mortgages",
        parent_code: '202',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.LEASE_OBLIGATIONS]: {
        code: '20204',
        name: "Lease Obligations",
        description: "Long-term lease commitments",
        parent_code: '202',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.OPENING_BALANCE_EQUITY]: {
        code: '300',
        name: "Opening Balance Equity",
        description: "Undefined Opening Balance Account",
        parent_code: '3',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.OWNERS_CAPITAL]: {
        code: '301',
        name: "Owners Capital",
        description: "Initial capital investment by promoters",
        parent_code: '3',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.PROMOTERS_CAPITAL]: {
        code: '30101',
        name: "Promoters Capital",
        description: "Initial capital investment by promoters",
        parent_code: '301',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.FOUNDERS_CAPITAL]: {
        code: '30101001',
        name: "Founders Capital",
        description: "Initial capital investment by founder",
        parent_code: '30101',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.PARTNERS_CAPITAL_A]: {
        code: '30102001',
        name: "Partners Capital A",
        description: "Initial capital investment by partner A",
        parent_code: '301',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.PARTNERS_CAPITAL_B]: {
        code: '30102002',
        name: "Partners Capital B",
        description: "Initial capital investment by partner B",
        parent_code: '301',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.ADDITIONAL_PAID_IN_CAPITAL]: {
        code: '30102003',
        name: "Additional Paid-in Capital",
        description: "Additional capital contributions",
        parent_code: '301',
        normal_balance: 'credit',
        level: 4
    },
    [AccountCode.SHARE_CAPITAL]: {
        code: '302',
        name: "Share Capital",
        description: "Share capital accounts",
        parent_code: '3',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.COMMON_STOCK]: {
        code: '30201',
        name: "Common Stock",
        description: "Common stock shares",
        parent_code: '302',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.PREFERRED_STOCK]: {
        code: '30202',
        name: "Preferred Stock",
        description: "Preferred stock shares",
        parent_code: '302',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.TREASURY_STOCK]: {
        code: '30203',
        name: "Treasury Stock",
        description: "Company's own repurchased shares",
        parent_code: '302',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.RETAINED_EARNINGS]: {
        code: '303',
        name: "Retained Earnings",
        description: "Accumulated profits reinvested",
        parent_code: '3',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.DRAWINGS]: {
        code: '304',
        name: "Drawings",
        description: "Owners withdrawals from business",
        parent_code: '3',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.PROMOTER_DRAWINGS]: {
        code: '30401',
        name: "Promoter Drawings",
        description: "Promoter withdrawals",
        parent_code: '304',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.PARTNER_A_DRAWINGS]: {
        code: '30402',
        name: "Partner A Drawings",
        description: "Partner A withdrawals",
        parent_code: '304',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.PARTNER_B_DRAWINGS]: {
        code: '30403',
        name: "Partner B Drawings",
        description: "Partner B withdrawals",
        parent_code: '304',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.SALES_REVENUE]: {
        code: '401',
        name: "Sales Revenue",
        description: "Revenue from product sales",
        parent_code: '4',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.SALES_INCOME]: {
        code: '401001',
        name: "Sales Income",
        description: "General sales income",
        parent_code: '401',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.SERVICE_REVENUE]: {
        code: '402',
        name: "Service Revenue",
        description: "Revenue from services rendered",
        parent_code: '4',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.SERVICE_INCOME]: {
        code: '402001',
        name: "Service Income",
        description: "General service income",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.TUITION_FEES_INCOME]: {
        code: '402002',
        name: "Tuition Fees Income",
        description: "Tuition fees revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.TRANSPORT_FEES_INCOME]: {
        code: '402003',
        name: "Transport Fees Income",
        description: "Transport fees revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.HOSTEL_FEES_INCOME]: {
        code: '402004',
        name: "Hostel Fees Income",
        description: "Hostel fees revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.EXAM_FEES_INCOME]: {
        code: '402005',
        name: "Exam Fees Income",
        description: "Examination fees revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.LIBRARY_FEES_INCOME]: {
        code: '402006',
        name: "Library Fees Income",
        description: "Library fees revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.LAB_FEES_INCOME]: {
        code: '402007',
        name: "Lab Fees Income",
        description: "Laboratory fees revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.CONSULTATION_INCOME]: {
        code: '402008',
        name: "Consultation Income",
        description: "Medical consultation revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.PHARMACY_INCOME]: {
        code: '402009',
        name: "Pharmacy Income",
        description: "Pharmacy sales revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.DIAGNOSTICS_INCOME]: {
        code: '402010',
        name: "Diagnostics Income",
        description: "Diagnostic services revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.HOSPITALIZATION_INCOME]: {
        code: '402011',
        name: "Hospitalization Income",
        description: "Hospitalization services revenue",
        parent_code: '402',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.INTEREST_INCOME]: {
        code: '403',
        name: "Interest Income",
        description: "Interest earned on investments",
        parent_code: '4',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.COMMISSION_INCOME]: {
        code: '404',
        name: "Commission Income",
        description: "Commission revenue earned",
        parent_code: '4',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.COMMISSION_REVENUE]: {
        code: '404001',
        name: "Commission Revenue",
        description: "General commission revenue",
        parent_code: '404',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.AFFILIATE_INCOME]: {
        code: '404002',
        name: "Affiliate Income",
        description: "Affiliate marketing revenue",
        parent_code: '404',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.RENTAL_INCOME]: {
        code: '405',
        name: "Rental Income",
        description: "Rental property revenue",
        parent_code: '4',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.RENT_INCOME]: {
        code: '405001',
        name: "Rent Income",
        description: "Property rental income",
        parent_code: '405',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.DIVIDEND_INCOME]: {
        code: '406',
        name: "Dividend Income",
        description: "Dividends received from investments",
        parent_code: '4',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.OTHER_INCOME]: {
        code: '407',
        name: "Other Income",
        description: "Miscellaneous income sources",
        parent_code: '4',
        normal_balance: 'credit',
        level: 2
    },
    [AccountCode.DONATION_INCOME]: {
        code: '407001',
        name: "Donation Income",
        description: "Donations received",
        parent_code: '407',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.GRANT_INCOME]: {
        code: '407002',
        name: "Grant Income",
        description: "Grants received",
        parent_code: '407',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.SALARIES_AND_WAGES]: {
        code: '501',
        name: "Salaries and Wages",
        description: "Employee salaries and wages",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.SALARY_EXPENSE]: {
        code: '501001',
        name: "Salary Expense",
        description: "Employee salary expense",
        parent_code: '501',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.BONUS_EXPENSE]: {
        code: '501002',
        name: "Bonus Expense",
        description: "Employee bonus expense",
        parent_code: '501',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.INCENTIVE_EXPENSE]: {
        code: '501003',
        name: "Incentive Expense",
        description: "Employee incentive expense",
        parent_code: '501',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.STAFF_WELFARE]: {
        code: '501004',
        name: "Staff Welfare",
        description: "Staff welfare expenses",
        parent_code: '501',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.TRAINING_EXPENSE]: {
        code: '501005',
        name: "Training Expense",
        description: "Employee training expense",
        parent_code: '501',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.OFFICE_RENT]: {
        code: '502',
        name: "Office Rent",
        description: "Office space rental expense",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.RENT_EXPENSE]: {
        code: '502001',
        name: "Rent Expense",
        description: "Office rent expense",
        parent_code: '502',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.UTILITIES]: {
        code: '503',
        name: "Utilities",
        description: "Electricity, water, internet expenses",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.ELECTRICITY_EXPENSE]: {
        code: '503001',
        name: "Electricity Expense",
        description: "Electricity charges",
        parent_code: '503',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.WATER_EXPENSE]: {
        code: '503002',
        name: "Water Expense",
        description: "Water charges",
        parent_code: '503',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.INTERNET_EXPENSE]: {
        code: '503003',
        name: "Internet Expense",
        description: "Internet service charges",
        parent_code: '503',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.TELEPHONE_EXPENSE]: {
        code: '503004',
        name: "Telephone Expense",
        description: "Telephone charges",
        parent_code: '503',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.OFFICE_SUPPLIES]: {
        code: '504',
        name: "Office Supplies",
        description: "Stationery and office materials",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.STATIONERY_EXPENSE]: {
        code: '504001',
        name: "Stationery Expense",
        description: "Stationery purchase expense",
        parent_code: '504',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.PRINTING_EXPENSE]: {
        code: '504002',
        name: "Printing Expense",
        description: "Printing and copying expense",
        parent_code: '504',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.OFFICE_SUPPLIES_EXPENSE]: {
        code: '504003',
        name: "Office Supplies Expense",
        description: "Office supplies expense",
        parent_code: '504',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.MARKETING_AND_ADVERTISING]: {
        code: '505',
        name: "Marketing and Advertising",
        description: "Marketing campaigns and advertisements",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.TRAVEL_EXPENSES]: {
        code: '506',
        name: "Travel Expenses",
        description: "Business travel costs",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.ENTERTAINMENT]: {
        code: '507',
        name: "Entertainment",
        description: "Client entertainment expenses",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.PROFESSIONAL_FEES]: {
        code: '508',
        name: "Professional Fees",
        description: "Legal, accounting, consulting fees",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.REPAIRS_AND_MAINTENANCE]: {
        code: '509',
        name: "Repairs and Maintenance",
        description: "Equipment and facility maintenance",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.BUILDING_MAINTENANCE]: {
        code: '509001',
        name: "Building Maintenance",
        description: "Building maintenance expense",
        parent_code: '509',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.VEHICLE_MAINTENANCE]: {
        code: '509002',
        name: "Vehicle Maintenance",
        description: "Vehicle maintenance expense",
        parent_code: '509',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.EQUIPMENT_MAINTENANCE]: {
        code: '509003',
        name: "Equipment Maintenance",
        description: "Equipment maintenance expense",
        parent_code: '509',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.INSURANCE]: {
        code: '510',
        name: "Insurance",
        description: "Business insurance premiums",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.DEPRECIATION_EXPENSE]: {
        code: '511',
        name: "Depreciation Expense",
        description: "Asset depreciation charges",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.DEPRECIATION]: {
        code: '511001',
        name: "Depreciation",
        description: "Asset depreciation",
        parent_code: '511',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.BANK_CHARGES]: {
        code: '512',
        name: "Bank Charges",
        description: "Bank fees and service charges",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.INTEREST_EXPENSE]: {
        code: '513',
        name: "Interest Expense",
        description: "Interest on loans and borrowings",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.OTHER_TAXES_AND_LICENSES]: {
        code: '514',
        name: "Other Taxes and Licenses",
        description: "Business taxes and license fees",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.MISCELLANEOUS_EXPENSES]: {
        code: '515',
        name: "Miscellaneous Expenses",
        description: "Other miscellaneous business expenses",
        parent_code: '5',
        normal_balance: 'debit',
        level: 2
    },
    [AccountCode.DISCOUNT_ALLOWED]: {
        code: '515001',
        name: "Discount Allowed",
        description: "Discount given to customers",
        parent_code: '515',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.DISCOUNT_RECEIVED]: {
        code: '407003',
        name: "Discount Received",
        description: "Discount received from suppliers",
        parent_code: '407',
        normal_balance: 'credit',
        level: 3
    },
    [AccountCode.ROUND_OFF]: {
        code: '515002',
        name: "Round Off",
        description: "Rounding difference adjustment",
        parent_code: '515',
        normal_balance: 'debit',
        level: 3
    },
    [AccountCode.BAD_DEBTS]: {
        code: '515003',
        name: "Bad Debts",
        description: "Uncollectible accounts expense",
        parent_code: '515',
        normal_balance: 'debit',
        level: 3
    }
}