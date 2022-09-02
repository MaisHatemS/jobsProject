import { City } from "./city";
import { Country } from "./country";
import { JobFile } from "./file";
import { Sector } from "./sector";


export class Job{
    _id:number ;
    title:string ;
    city:City ;
    country:Country;
    sector:Sector;
    description:string;
    jobImg?:any ;
}