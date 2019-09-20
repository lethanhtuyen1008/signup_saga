import { takeLatest, take } from "redux-saga/effects";



function* SignUpOn() {
  var value = JSON.parse(sessionStorage.getItem('Usersignup'));
  yield take({ type: "SIGN_UP_ON", user: value });
}

export function* watchSignUpOn() {
  yield takeLatest("SIGN_UP", SignUpOn);
}
