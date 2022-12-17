import{Notification as RawNotification} from '@prisma/client'
import { Notification } from "@application/entities/notification"
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper{

  static toPrisma( notification: Notification){
    return{
      id: notification.id,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
      recipientId: notification.recipientId,
      category: notification.category,
      content: notification.content.value
    };
  }

  static toDomain(raw: RawNotification): Notification  {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      readAt: raw.readAt,
      canceledAt: raw.createdAt,
      createdAt: raw.createdAt,
    },raw.id);
  }
}