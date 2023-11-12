<script>
    import * as yup from 'yup';
    import {YupForm, YupMessage} from '$lib/index.js';
    let schema = yup.object().shape({
        name: yup.string().required().max(30).label("Name"),
        email: yup.string().required().email().label("Email address"),
    });
    let fields = {email: "", name: ""};
    let submitted = false;
    let isValid;
    function formSubmit(){
        submitted = true;
        isValid = schema.isValidSync(fields);
        if(isValid){
            alert('Everything is validated!');
        }
    }
</script>

<YupForm class="form" {schema} {fields} submitHandler={formSubmit} {submitted}>
    <input type="text" bind:value={fields.name} placeholder="Name">
    <YupMessage name="name" />
    <input type="text" bind:value={fields.email} placeholder="Email address">
    <YupMessage name="email" />
    <button type="submit">Submit</button>
</YupForm>