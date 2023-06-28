import { Country } from "entyes/Country";
import { Currency } from "entyes/Currency";

export interface ProfileUser{
    first?:string;
    lastname?:string;
    username?:string;
    age?:number;
    country?:Country;
    city?:string;
    avatar?:string;
    currency?:Currency;

}

export interface ProfileScheme{
        data?:ProfileUser,
        form?:ProfileUser,
        error?:string,
        loading:boolean,
        readonly:boolean

}