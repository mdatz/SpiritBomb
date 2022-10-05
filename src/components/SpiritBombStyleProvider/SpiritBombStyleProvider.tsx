import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import Colors from '../../styles/open-color.css';

export const SpiritBombStyleProvider = component$(() => {

    Colors && useStyles$(Colors);

    return (
        <Slot/>
    );
});