import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';
import CenterCSS from './styles/Center.css';

export const Center = component$(() => {

    useStylesScoped$(CenterCSS);

    return (
        <div class="center">
            <Slot/>
        </div>
    );
});