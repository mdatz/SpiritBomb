import { component$, useStyles$, Slot } from '@builder.io/qwik';

export const Center = component$(() => {

    useStyles$(CenterCSS);

    return (
        <div class="parent">
            <Slot/>
        </div>
    );
});

export const CenterCSS = `
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
`;