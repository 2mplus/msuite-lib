/**
 * PostgreSQL notification channels used by triggers
 */
export declare enum NotificationChannelEnum {
    ACC_ACCOUNT_CHANNEL = "acc_account_channel",
    ACC_LEDGER_CHANNEL = "acc_ledger_channel",
    ACC_JOURNAL_CHANNEL = "acc_journal_channel",
    ACC_VOUCHER_CHANNEL = "acc_voucher_channel",
    ACC_TRANSACTION_CHANNEL = "acc_transaction_channel",
    SMS_USER_CHANNEL = "sms_user_channel",
    SMS_STUDENT_CHANNEL = "sms_student_channel",
    SMS_FEE_CHANNEL = "sms_fee_channel"
}
/**
 * Common notification actions
 */
export declare enum NotificationActionEnum {
    INSERT = "INSERT",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    STATUS_CHANGE = "STATUS_CHANGE",
    VERIFIED = "VERIFIED",
    CLASS_CHANGE = "CLASS_CHANGE"
}
/**
 * Base notification payload structure
 */
export interface NotificationPayloadType {
    action: NotificationActionEnum;
    table: string;
    id: string;
    timestamp: string;
    data: Record<string, any>;
    userId?: string;
    correlationId?: string;
}
/**
 * Account change notification
 */
export interface AccountNotificationType extends NotificationPayloadType {
    table: 'accounts.acc_accounts';
    data: {
        code: string;
        name: string;
        type: string;
        balance: number;
        isDeleted: boolean;
        active: boolean;
        parentCode?: string;
        level: number;
        category: string;
        normalBalance: 'debit' | 'credit';
    };
}
/**
 * Ledger entry notification
 */
export interface LedgerNotificationType extends NotificationPayloadType {
    table: 'accounts.acc_ledger_entries';
    data: {
        accountId: string;
        journalEntryId: string;
        debitAmount: number;
        creditAmount: number;
        runningBalance: number;
        transactionDate: string;
        referenceNumber: string;
        description?: string;
        currency: string;
    };
}
/**
 * Journal entry notification
 */
export interface JournalNotificationType extends NotificationPayloadType {
    table: 'accounts.acc_journal_entries';
    data: {
        voucherNumber: string;
        transactionType: string;
        totalDebit: number;
        totalCredit: number;
        status: string;
        transactionDate: string;
        sourceApp: string;
        sourceReference: string;
        description: string;
        postedBy: string;
    };
}
/**
 * User change notification
 */
export interface UserNotificationType extends NotificationPayloadType {
    table: 'mschool.sms_users';
    data: {
        userId: string;
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        roleId: string;
        isActive: boolean;
        isVerified: boolean;
        lastLogin?: string;
    };
}
/**
 * Student change notification
 */
export interface StudentNotificationType extends NotificationPayloadType {
    table: 'mschool.sms_students';
    data: {
        studentId: string;
        admissionNo: string;
        rollNumber: string;
        userId: string;
        classId: string;
        parentId?: string;
        admissionDate: string;
        bloodGroup?: string;
        nationality: string;
    };
}
/**
 * Fee transaction notification
 */
export interface FeeNotificationType extends NotificationPayloadType {
    table: 'mschool.sms_fee_transactions';
    data: {
        transactionId: string;
        studentId: string;
        amount: number;
        paymentMethod: string;
        status: string;
        receiptNumber: string;
        academicYearId: string;
        dueDate?: string;
        paidDate?: string;
    };
}
/**
 * Unified notification type
 */
export type UnifiedNotificationType = AccountNotificationType | LedgerNotificationType | JournalNotificationType | UserNotificationType | StudentNotificationType | FeeNotificationType;
/**
 * Notification channel configuration
 */
export interface NotificationChannelConfigType {
    channel: NotificationChannelEnum;
    handler: (payload: UnifiedNotificationType) => Promise<void>;
    enabled: boolean;
    retryCount: number;
    retryDelay: number;
}
/**
 * Webhook notification type
 */
export interface WebhookNotificationType {
    id: string;
    event: string;
    payload: UnifiedNotificationType;
    url: string;
    attempts: number;
    status: 'pending' | 'processing' | 'delivered' | 'failed';
    lastAttempt?: string;
    nextAttempt?: string;
}
/**
 * Notification subscription type
 */
export interface NotificationSubscriptionType {
    id: string;
    userId: string;
    channel: NotificationChannelEnum;
    eventTypes: NotificationActionEnum[];
    webhookUrl?: string;
    email?: string;
    enabled: boolean;
    createdAt: string;
    updatedAt: string;
}
export type ParseNotificationResultType<T extends UnifiedNotificationType> = {
    isValid: boolean;
    notification?: T;
    error?: string;
};
export type NotificationHandlerType<T extends UnifiedNotificationType> = (notification: T) => Promise<{
    success: boolean;
    message?: string;
    error?: string;
}>;
/**
 * Notification system configuration
 */
export interface NotificationSystemConfigType {
    enabled: boolean;
    channels: NotificationChannelEnum[];
    databasePoolSize: number;
    maxRetries: number;
    retryDelayMs: number;
    webhookTimeoutMs: number;
    batchSize: number;
    cleanupIntervalHours: number;
}
/**
 * Notification statistics type
 */
export interface NotificationStatsType {
    totalNotifications: number;
    delivered: number;
    failed: number;
    pending: number;
    byChannel: Record<NotificationChannelEnum, number>;
    byEvent: Record<NotificationActionEnum, number>;
    lastUpdated: string;
}
export interface NotificationBatchType {
    notifications: UnifiedNotificationType[];
    processed: number;
    failed: number;
    startTime: string;
    endTime?: string;
}
export interface NotificationQueueItemType {
    id: string;
    notification: UnifiedNotificationType;
    attempts: number;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    createdAt: string;
    processedAt?: string;
}
//# sourceMappingURL=notification-channels.contract.d.ts.map