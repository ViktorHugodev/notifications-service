import { randomUUID } from 'crypto'
import { Replace } from 'src/helpers/Replace'

import { Content } from './content'
export interface INotificationProps {
  recipientId: string
  content: Content
  category: string
  createdAt: Date
  readAt?: Date | null
  cancelAt?: Date | null
}

export class Notification {
  private _id: string
  private props: INotificationProps
  constructor(props: Replace<INotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id(): string {
    return this._id
  }

  public set content(content: Content) {
    this.props.content = content
  }
  public get content(): Content {
    return this.props.content
  }

  public get recipientId(): string {
    return this.props.recipientId
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId
  }

  public get category(): string {
    return this.props.category
  }
  public set category(category: string) {
    this.props.category = category
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt
  }

  public cancel() {
    this.props.cancelAt = new Date()
  }

  public get cancelAt(): Date | null | undefined {
    return this.props.cancelAt
  }
}
