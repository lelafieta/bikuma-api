export class Campaign {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public ongId: string,
    public categoryId: string,
    public status: string,
    public createdAt: Date,
  ) {}
}
