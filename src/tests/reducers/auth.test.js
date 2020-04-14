import authReducer from '../../reducers/auth';


test('should setup uid for login', () => {
    const action ={
      type:"LogIn" ,
      uid:'123abc'
    }
    const state=authReducer({},action)
    expect(state.uid).toBe(action.uid)
  });

  test('should clear uid for logout', () => {
    const action ={
      type:"Logout" ,
     
    }
    const state=authReducer({uid:"anythings"},action)
    expect(state).toEqual({})
  });