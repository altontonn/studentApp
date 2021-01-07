const form = document.getElementById('registration-form')
const lname = document.getElementById('lname')
const fname = document.getElementById('fname')
const gname = document.getElementById('gname')
const pnumber = document.getElementById('pnumber')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validateInput();
})

const validateInput = ()=>{
    const fname_value = fname.value.trim()
    const lname_value = lname.value.trim()
    const gname_value = gname.value.trim()
    const pnumber_value = pnumber.value.trim()
    console.log(fname_value)

    //check if the input is empty
    if (fname_value === "") {
        //set the errors
        setError(fname, 'Input cannot be blank')

    }else{
        //sset the success
        setSuccess(fname)
    }
    if (lname_value === "") {
        setError(lname, 'Input cannot be black')
    }else{
        setSuccess(lname)
    }

    if (gname_value === "") {
        setError(gname, 'Input cannot be blank')
    }else{
        setSuccess(gname)
    }

    if (pnumber_value.length <10) {
        setError(pnumber, 'Must contain atleast 10 characters')
    }else{
        setSuccess(pnumber)
    }
}

const setError = (input, message) =>{
    const formgroup = input.parentElement
    formgroup.className = 'form-group-box danger'
    const small = formgroup.querySelector('small')
    small.innerText = message
}
const setSuccess = (input) =>{
    const formgroup = input.parentElement
    formgroup.className = 'form-group-box success'
}

