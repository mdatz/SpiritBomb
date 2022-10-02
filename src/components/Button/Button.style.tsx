import { noSerialize } from '@builder.io/qwik';

export const ButtonCSS = noSerialize(() => {
    return `
        .button {
            background-color: #888888;
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

        .tiny {
            padding: 5px 10px;
        }

        .small {
            padding: 10px 20px;
        }

        .medium {
            padding: 15px 32px;
        }

        .large {
            padding: 20px 40px;
        }

        .huge {
            padding: 25px 50px;
        }

        .radius-tiny {
            border-radius: 2px;
        }

        .radius-small {
            border-radius: 4px;
        }

        .radius-medium {
            border-radius: 8px;
        }

        .radius-large {
            border-radius: 16px;
        }

        .radius-huge {
            border-radius: 48px;
        }

        .button-container {}
    `
});