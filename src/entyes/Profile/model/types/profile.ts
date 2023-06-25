import { Country, Currency } from "shared/const/common";

export interface ProfileUser{
    first:string;
    lastname:string;
    username:string;
    age:number;
    country:Country;
    city:string;
    avatar:string;
    currency:Currency;

}

export interface ProfileScheme{
        data?:ProfileUser,
        error?:string,
        loading?:boolean,
        readonly:boolean

}