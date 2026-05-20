export default function Validation(event) {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add("was-validated");
}