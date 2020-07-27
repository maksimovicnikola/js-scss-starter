import { elements } from './base';

export const getInput = () => elements.elementInput.value;

const renderElements = parameter =>
{
    const markup = `<h1>
                        Hello World!
                    </h1>`;

    elements.searchList.insertAdjacentHTML('afterend', markup);
}

export const renderResults = parameters =>
{
    parameters.forEach(param => {
        renderElementsparam();
    });
}