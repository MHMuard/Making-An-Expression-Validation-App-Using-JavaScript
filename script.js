document.getElementById("validateButton").addEventListener("click", validateExpression);

function validateExpression() {
    const expressionType = document.getElementById("expressionType").value;
    const inputExpression = document.getElementById("inputExpression").value;

    let regex;
    let message;

    switch (expressionType) {
        case "email":
            regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            message = "Email is ";
            break;
        case "phone":
            regex = /^(?:\+88|88)?01[3-9]\d{8}$/;
            message = "Phone Number is ";
            break;
        case "postcode":
            regex = /^\d{4}$/;
            message = "Post Code is ";
            break;
        default:
            return;
    }

    if (regex.test(inputExpression)) {
        showMessage(`${message} valid.`);
    } else {
        showMessage(`${message} invalid.`);
    }
}

function showMessage(msg) {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = msg;
}
