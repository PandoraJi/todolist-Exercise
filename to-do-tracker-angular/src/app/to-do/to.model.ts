export class ToDoTaskModel {
    id!: number;
    name!: string;
    description!: string;
    status!: boolean;
    createdAt:Date=new Date();
    constructor(init?:Partial<ToDoTaskModel>) {
      Object.assign(this, init);
    }
}