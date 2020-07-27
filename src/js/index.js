//-- Import all SCSS files
import '../scss/main.scss';

//-- Import all js modules we need
import { elements as DOM } from './views/base';
import Model from './models/Model';
import * as featureView from './views/featureView';

/** Global state of the app
 */
const state = {};

const controlSearch = async () =>
{
    //-- Get query from the view
    const query = featureView.getInput();

    if (query)
    {
        //-- Add new search object to the state
        state.propertyName = new Model(query);

        //-- Prepare UI for results

        //-- Search for recipes
        await state.propertyName.getResults();

        //-- Render results on UI
        featureView.renderResults(state.search.result);
    }

}

//-- Here we should put event listeners
DOM.element.addEventListener('submit', e => 
{
    e.preventDefault();
    controlSearch();
});