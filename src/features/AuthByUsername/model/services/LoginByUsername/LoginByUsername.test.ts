import { Dispatch } from "@reduxjs/toolkit"
import { loginByUsername } from "./LoginByUsername";
import axios from "axios";
import { StateScheme } from "app/providers/storeProvider";
import { userActions } from "entyes/User";
import { TestAsyncThunk } from "shared/lib/testsHelpers/testAsyncThunk";

// Mock axios and localStorage
jest.mock("axios");
const mockedAxios = jest.mocked(axios);


describe("loginByUsername",() => {
    
    test("success auth",async()=>{

        const UserData = { 
                    username:"123",id:"1"
                
                }
        mockedAxios.post.mockReturnValue(Promise.resolve({data:{username:"123",id:"1"}}));
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = thunk.CallThunk({ username: '123', password: '123' })
        
        console.log(result)
        expect(mockedAxios.post).toHaveBeenCalled();
        expect((await result).meta.requestStatus).toBe("fulfilled");
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(UserData));
        expect((await result).payload).toEqual(UserData);
        
    })


    test("success authorisation",async()=>{

            
            mockedAxios.post.mockReturnValue(Promise.resolve({status:403}));
            const thunk = new TestAsyncThunk(loginByUsername)
            const result = thunk.CallThunk({ username: '123', password: '123' })
            
            console.log(result);
            expect(mockedAxios.post).toHaveBeenCalled();
            expect((await result).meta.requestStatus).toBe("rejected")
        }
              );
            
    })

