import { LogIn,LogOut } from '../../actions/auth';


test('should generate login action', () => {
    const uid = 'abc123';
  const action = LogIn(uid);
  expect(action).toEqual({
    type: 'LogIn',
    uid
  });
  });

  test('should generate logout action', () => {
    
    const action = LogOut();
    expect(action).toEqual({
      type: 'Logout',
      
    });
  });