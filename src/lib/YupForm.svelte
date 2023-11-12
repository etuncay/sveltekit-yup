<script>
    import { setContext } from 'svelte';
    import {schemaKey, fieldsKey, submittedKey, colorKey} from './key';
    import {writable} from 'svelte/store';
    /**
	 * @type {any}
	 */
     export let submitHandler;
    /**
	 * @type {any}
	 */
     export let schema;
     /**
	 * @type {any}
	 */
    export let fields;
    /**
	 * @type {any}
	 */
    export let submitted;
    export let color = 'red';
    let formSchema = writable(schema);
    let formFields = writable(fields);
    let formSubmitted = writable(submitted);
    let messageColor = writable(color);
    setContext(schemaKey, formSchema);
    setContext(fieldsKey, formFields);
    setContext(submittedKey, formSubmitted);
    setContext(colorKey, messageColor);
    $: $formFields = fields;
    $: $formSchema = schema;
    $: $formSubmitted = submitted;
    $: $messageColor = color;
    </script>
    
    <form on:submit|preventDefault = {submitHandler} {...$$props}>
    <slot></slot>
    </form>