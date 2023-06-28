import { Country } from "entyes/Country";
import { Currency } from "entyes/Currency";


export enum ValidateProfileError{
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_USER_AGE = "INCORRECT_USER_AGE",
    INCORRECT_USER_COUNTRY = "INCORRECT_USER_COUNTRY",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"

}


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
        readonly:boolean,
        ValidateError?:ValidateProfileError[]

}