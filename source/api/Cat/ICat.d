module api.cat.icat;

interface ICat
{
    // GET /api/cat/meow
    @property string meow();

    // PUT /api/cat/meow
    @property void meow(string text);
}
