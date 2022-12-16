import { CancelNotification } from '@app/use-cases/cancel-notification'
import { CountNotification } from '@app/use-cases/count-recipient-notification'
import { GetNotification } from '@app/use-cases/get-recipient-notification'
import { ReadNotification } from '@app/use-cases/read-notification'
import { SendNotification } from '@app/use-cases/send-notification'
import { UnReadNotification } from '@app/use-cases/unread-notification'
import { Body, Controller, Post, Patch, Param, Get } from '@nestjs/common'

import { CreateNotificationBody } from '../dtos/create-notification-body'
import { ListAllNotifications } from './../../../app/use-cases/list-notification'
import { NotificationViewModel } from './../view-models/notification-view-model'

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private countNotification: CountNotification,
    private getNotification: GetNotification,
    private readNotification: ReadNotification,
    private unReadNotification: UnReadNotification,
    private listAllNotifications: ListAllNotifications,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    })
  }

  @Get(':recipientId/count')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countNotification.execute({
      recipientId: recipientId,
    })
    return {
      count,
    }
  }

  @Get(':recipientId/get')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getNotification.execute({
      recipientId: recipientId,
    })
    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    }
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unReadNotification.execute({
      notificationId: id,
    })
  }
  @Get('list')
  async list() {
    const allNotifications = await this.listAllNotifications.execute()
    return allNotifications
  }

  @Post('')
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body
    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    })

    return {
      notification: NotificationViewModel.toHTTP(notification),
    }
  }
}
