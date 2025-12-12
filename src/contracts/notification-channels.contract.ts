// src/contracts/notification-channels.contract.ts

/**
 * PostgreSQL notification channels used by triggers
 */
export enum NotificationChannel {
    ACC_ACCOUNT_CHANNEL = 'acc_account_channel',
    ACC_LEDGER_CHANNEL = 'acc_ledger_channel',
    ACC_JOURNAL_CHANNEL = 'acc_journal_channel',
    ACC_VOUCHER_CHANNEL = 'acc_voucher_channel',
    ACC_TRANSACTION_CHANNEL = 'acc_transaction_channel'
}

/**
 * Notification payload structure
 */
export interface NotificationPayload {
    action: 'INSERT' | 'UPDATE' | 'DELETE';
    table: string;
    id: string;
    timestamp: string;
    data: any;
    user_id?: string;
}

/**
 * Account change notification
 */
export interface AccountNotification extends NotificationPayload {
    data: {
        code: string;
        name: string;
        type: string;
        balance: number;
        is_deleted: boolean;
        active: boolean;
    };
}

/**
 * Ledger entry notification
 */
export interface LedgerNotification extends NotificationPayload {
    data: {
        account_id: string;
        journal_entry_id: string;
        debit: number;
        credit: number;
        balance: number;
        transaction_date: string;
    };
}

/**
 * Journal entry notification
 */
export interface JournalNotification extends NotificationPayload {
    data: {
        voucher_number: string;
        transaction_type: string;
        debit: number;
        credit: number;
        status: string;
        transaction_date: string;
        source_app: string;
        source_reference: string;
    };
}