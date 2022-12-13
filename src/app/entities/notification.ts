export interface INotificationProps {
  recipientId: string
  content: string
  category: string
  createdAt: Date
  readAt?: Date | null
}

export class Notification {
  private props: INotificationProps

  constructor(props:INotificationProps){
    this.props = props
  }

  public set content(content: string) {
    this.props.content = content
  }
  public get content(): string {
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
}

const notification = new Notification({
  category: 'social',
  content: 'Hello world'
})

notification.content = 'Isso é uma notificação'