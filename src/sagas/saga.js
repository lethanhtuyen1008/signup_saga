import { takeLatest, put , call} from "redux-saga/effects";
import  API  from './api';


function* SignUpOn({user}) {
  const x = call(API(user));
  console.log(x);
  yield put({ type: "SIGN_UP_ON", user: user });
 
}

export function* watchSignUpOn() {
  yield takeLatest("SIGN_UP", SignUpOn);
}
