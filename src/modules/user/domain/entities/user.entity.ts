export class User {
  constructor(
    public id: number,
    public firstName: string | null,
    public lastName: string | null,
    public fullName: string | null,
    public email: string,
    public role: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
