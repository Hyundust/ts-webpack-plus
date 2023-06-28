import { loginByUsername } from "./LoginByUsername";
import { userActions } from "entyes/User";
import { TestAsyncThunk } from "shared/lib/testsHelpers/testAsyncThunk";


describe("loginByUsername",() => {
    
    test("success auth",async()=>{

        const UserData = { 
                    username:"123",id:"1"
                
                }
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({data:{username:"123",id:"1"}}));
        const result = thunk.CallThunk({ username: '123', password: '123' })
        
        console.log(result)
        expect(thunk.api.post).toHaveBeenCalled();
        expect((await result).meta.requestStatus).toBe("fulfilled");
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(UserData));
        expect((await result).payload).toEqual(UserData);
        
    })


    test("success authorisation",async()=>{

            
            
            const thunk = new TestAsyncThunk(loginByUsername)
            thunk.api.post.mockReturnValue(Promise.resolve({status:403}));
            const result = thunk.CallThunk({ username: '123', password: '123' })
            
            console.log(result);
            expect(thunk.api.post).toHaveBeenCalled();
            expect((await result).meta.requestStatus).toBe("rejected")
        }
              );
            
    })

