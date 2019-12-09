
export class Entity<T>{
    private name:string;
    private id: number;
    public obj:T
}

const str:Entity<number>  = new Entity();
const result = str.obj;

const promise = fetch('');
