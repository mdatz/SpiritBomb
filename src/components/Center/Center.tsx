import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';
import { CenterCSS } from './Center.style';

export const Center = component$(() => {

    useStylesScoped$(CenterCSS);

    return (
        <div class="center">
            <Slot/>
        </div>
    );
});