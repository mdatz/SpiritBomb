import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { ButtonProps } from './types/ButtonProps';
import ButtonCSS from './styles/Button.css';

export const Button = component$((props: ButtonProps) => {

    ButtonCSS && useStylesScoped$(ButtonCSS);

    let _style = '';
    let _class = 'button';

    if(props.color) {
        // if(props.color in Colors) {
        //     _style = `background-color: ${Colors[props.color][0]};`;
        // } else {
        //     _style = `background-color: ${props.color};`;
        // }
    }

    if(props.disabled) {
        _class = 'button';
        _style = '';
    }

    if(props.size) {
        _class += ` ${props.size}`;
    }

    if(props.radius) {
        _class += ` radius-${props.radius}`;
    }

    return (
        <div class="button-container">
            <button class={_class} style={_style} disabled={props?.disabled} onClick$={() => {}}>Sample Text</button>
        </div>
    );
});