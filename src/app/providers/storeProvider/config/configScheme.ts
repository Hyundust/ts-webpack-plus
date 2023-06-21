import { CounterScheme } from "entyes/Counter"
import { UserScheme } from "entyes/User"
import { LoginScheme } from "features/AuthByUsername"

export interface StateScheme{
  counter:CounterScheme
  user:UserScheme
  loginForm?:LoginScheme
}