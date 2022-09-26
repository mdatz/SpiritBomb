import { component$, useStyles$ } from '@builder.io/qwik';

export const Button = component$(() => {

    useStyles$(ButtonCSS);

    return (
        <div class="button-container">
            <button class="button" onClick$={() => {}}>Sample Text</button>
        </div>
    );
});

export const ButtonCSS = `
.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}

.button:hover {
    background-color: #3e8e41;
}

.button:active {
    background-color: #3e8e41;
    box-shadow: 0 1.5px 4px #ccc;
    transform: translateY(1px);
}

.button:focus {
    outline: none;
}

.button:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
}

.button:disabled:hover {
    background-color: #ccc;
}

.button:disabled:active {
    background-color: #ccc;
    box-shadow: none;
    transform: none;
}

.button:disabled:focus {
    outline: none;
}

.button-container {}
`;