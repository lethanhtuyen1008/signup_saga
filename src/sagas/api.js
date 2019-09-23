const urlApi = "https://ones.tuoitresoft.com/api/v1/auth/sign-up";
const SignUpOn = async (values) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    }
    await fetch(urlApi, options)
        .then((res) => res.json())
        .then((values) => console.log(values))
        .catch((err) => console.log(err))
}
export default  SignUpOn;