import { Notification } from "@application/entities/notification";

export class NotificationViewModel{
  static toHTTP(notification: Notification){
    return{
      id: notification.id,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
      recipientId: notification.recipientId,
      category: notification.category,
      content: notification.content.value
    };
  }
}