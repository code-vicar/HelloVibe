module api.cat.cat;

import api.cat.icat;

class Cat : ICat
{

    // private properties
    private {
        string s_meow = "Meow";
    }

    override:
        // getters
        @property
        string meow() {
            return s_meow;
        }

        // setters
        @property
        void meow(string text) {
            s_meow = text;
        }
}
