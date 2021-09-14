export class car{
    private model: string;
    private color: string;
    private wheel: wheels;

    constructor(model:string, color:string, wheel:wheels){
        this.model = model;
        this.color = color;
        this.wheel = wheel;
    }

    log(){
        console.log(`${this.model}: ${this.color} with wheels ${this.wheel.name},${this.wheel.radius}`);
    }

    test(){
        var v1:{};
        v1["name"] = "potato";

        var v2:wheels;
        v2={
            name: "Goodyear",
            radius: 12
        };

    }

    toJson(){
        return{
            model:this.model,
            color:this.color,
            wheel:this.wheel
        };
    }

}
export interface wheels{
        name:string;
        radius:number;
}