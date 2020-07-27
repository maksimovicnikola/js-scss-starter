export default class Model
{
    constructor(query)
    {
        this.query = query;
    }

    getResult()
    {
        let retVal = '';

        try
        {
            retVal = 'Response result';
        }
        catch (error)
        {
            alert(error);
        }

        return retVal;
    }
}