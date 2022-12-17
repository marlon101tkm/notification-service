import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notification-repository";

interface CountRecipientNotificationsRequest{
  recipientId:string;
}

interface CountRecipientNotificationsResponse{
  count: number;
}

@Injectable()
export class CountRecipientNotifications{
  constructor(private notificationsRepository: NotificationsRepository ){}

  async execute(request:CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse>{
    const {recipientId} = request;
    const count = await this.notificationsRepository.countManyByRecipientId(recipientId);

    return {
      count,
    }
  }
}