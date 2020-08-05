export class ListError{
  constructor (public userMessage: string) {
    Error.apply(this, [userMessage]);
  }
}