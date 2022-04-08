document.addEventListener('DOMContentLoaded', () => {

    const firstName = document.querySelector('#name')
    const secondName = document.querySelector('#second-name')
    const lastName1 = document.querySelector('#paterno')
    const lastName2 = document.querySelector('#materno')
    const address = document.querySelector('#address')
    const telephone = document.querySelector('#telephone')
    const helpTelephone = document.querySelector('#help-phone')
    const code = document.querySelector('#postal-code')
    const helpCode = document.querySelector('#help-code')
    const errorInput = document.querySelector('#error-data')
    const summitBtn = document.querySelector('#summit')
    let isValid = false;

    summitBtn.addEventListener('click', (e) => {
        valideTelephone(telephone.value)
        valideCode(code.value)
        valideRequired()

        if (isValid)
        {
            errorInput.hidden = true;
            axios
                let payload= { name: firstName.value,
                secondname:secondName.value,
                lastName1: lastName1.value,
                lastName2: lastName2.value,
                address:address.value,
                telephone:telephone.value,
                code:code.value}
                .post("https://demo7460034.mockable.io/users",payload)
                .then(response => {
                    if (response.data.success) {
                        console.log("success", response.data.success)
                    } else {
                        console.log("error al crear")
                    }
                })
        }else{
            errorInput.hidden = false;
        }
        e.preventDefault();
    })

    const valideRequired = () => {
        isValid =
            valideInput(firstName)
            && valideInput(lastName1)
            && valideInput(lastName2)
            && valideInput(address)
            && valideInput(code);
    }

    const valideInput = (field) => {
        if (field?.value) {
            return true;
        } else {
            return false;
        }
    }

    const valideTelephone = (telefone) => {
        helpTelephone.hidden = telefone.length > 8 || telefone.length < 10 ? true : false;
    }

    const valideCode = (codigoPostal) => {
        helpCode.hidden = codigoPostal.length === 5 ? true : false;
    }
})
