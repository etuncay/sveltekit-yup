# sveltekit-yup
![npm](https://img.shields.io/npm/v/sveltekit-yup) ![NPM](https://img.shields.io/npm/l/sveltekit-yup) ![GitHub top language](https://img.shields.io/github/languages/top/etuncay/sveltekit-yup) ![npm](https://img.shields.io/npm/dm/sveltekit-yup)


Svelte component library using [Yup](https://www.npmjs.com/package/yup) for form validation.

An update has been made for the [svelte-yup](https://github.com/KamyarLajani/svelte-yup) project sveltekit.



### Installation

```sh
$ npm i sveltekit-yup --save-dev
```
```sh
$ npm i yup
```

### Sample code

```html
<script>
    import * as yup from 'yup';
    import {YupForm, YupMessage} from 'sveltekit-yup';
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


```
### Add isInvalid for making input border style.
Example:

```html
<script>
...
import {YupMessage, isInvalid} from 'sveltekit-yup';
...
$: invalid = (name)=>{
    if(submitted){
        return isInvalid(schema, name, fields);
    }
    return false;
}
...
</script>

```

```html
<input type="text" class:invalid={invalid("name")} bind:value={fields.name} placeholder="Name">
<style>
.invalid {
    border-color: red !important;
}
</style>
```
### All messages in one place
Example below to put all messages in one place by `YupAllMessages` component.
```js
import {YupAllMessages} from 'sveltekit-yup';
```
```html
<YupAllMessages />
```
### Custom Message color
```html
<YupForm ... color="#b00020">
```
### Components

| name | props | description |
| ------ | ------ | ------------- |
| `YupForm` | `schema`, `fields`, `submitHandler`, `submitted` and `color` |  |
| `YupMessage` | `name` | Error message of a field name by `name` prop. name should be the schema field name (no label name)
| `YupAllMessages` |  | Puts all field messages in one place |

### Functions

`isInvalid(schema:Object, name:String, fields:Object)` 

### Example disable button until everything is validated

```js
...
let btnDisabled = false;
$: if(submitted){
    btnDisabled = true;
    isValid = schema.isValidSync(fields);
    if(isValid){
        btnDisabled = false;
    }
}
...
```

```html
<button type="submit" disabled={btnDisabled}>Submit</button>
```

### Author
Emrullah TUNCAY

License
----

MIT
