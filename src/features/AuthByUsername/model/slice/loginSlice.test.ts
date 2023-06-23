import { LoginScheme } from "../types/LoginScheme";
import { loginActions,loginReducer } from "./loginSlice";
import { DeepPartial } from "@reduxjs/toolkit";


describe('counter reducer', () => {
  

  test('should set Username', () => {
    const state: DeepPartial<LoginScheme> = {
      username: '123',
     
    };
    expect(loginReducer(state as LoginScheme,loginActions.setUsername("1234"))).toEqual({username:"1234"});
  });
  test('should set Password', () => {
    const state: DeepPartial<LoginScheme> = {
      password: '123',
     
    };
    expect(loginReducer(state as LoginScheme,loginActions.setPassword("1234"))).toEqual({password:"1234"});
  



 
})}
)