describe( "arrays", function() {

    it( "should find the index of an item in an array", function() {
        expect( MIQ.Array.getItemIndex([ "zero", "one", "two", "three", "four" ], "three" ) ).toBe( 3 );
    });

    it( "should find the highest value item in an array", function() {
        expect( MIQ.Array.getHighestValueItem([ 1, 13, 8, 5, 2, 3 ]) ).toBe( 13 );
        expect( MIQ.Array.getHighestValueItem([ "a", "b", "c" ]) ).toBe( "c" );
    });

    it( "should count the number of occurrances of each item in an array", function() {
        var arr = [ "egg", "bacon", "sausage", "bacon", "sausage", "sausage" ],
            map = {
                egg: 1,
                bacon: 2,
                sausage: 3
            };

        expect( MIQ.Array.getMapOfOccurrances( arr ) ).toEqual( map );
    });

});

describe( "strings", function() {

    it( "should concatenate a list of arguments", function() {
        expect( MIQ.String.concatenate( "foo", "bar", "," ) ).toEqual( "foo,bar" );
        expect( MIQ.String.concatenate( "foo", "bar", "baz", " " ) ).toEqual( "foo bar baz" );
    });

});

describe( "objects", function() {

    it( "should serialise a list of an object's own properties", function() {
        var Clazz, obj, props;

        Clazz = function() {
            this.id = "MY_CLASS";
            this.name = "My Class";
        };
        Clazz.prototype.foo = "bar";

        obj = new Clazz();
        props = "id:MY_CLASS;name:My Class";

        expect( MIQ.Object.serialisePropertiesWithValues( obj ) ).toEqual( props );
    });

    it( "should extend an object with another", function() {
        function Shape( width, height ) {
            this.width = width;
            this.height = height;
        }
        Shape.prototype.width = 0;
        Shape.prototype.height = 0;
        Shape.prototype.name = "Shape";

        function Rectangle( width, height ) {
            this.super.apply( this, arguments );
        }

        MIQ.Object.extend( Rectangle, Shape, {
            name: "Rectangle"
        });

        var rect = new Rectangle( 100, 50 );

        expect( rect.width ).toBe( 100 );
        expect( rect.name ).toBe( "Rectangle" );
        expect( rect.super ).toBe( Shape );
    });

});

describe( "functions", function() {

    it( "should alter the context of a function", function() {
        function greet( name ) {
            return [ this.greeting, name ].join( " " ) + "!";
        }

        function greet2( title, name ) {
            return [ this.greeting, title, name ].join( " " ) + "!";
        }

        var bar = {
            greeting: "Hi"
        };

        expect( MIQ.Function.execute( greet, bar, "Frank" ) ).toBe( "Hi Frank!" );
        expect( MIQ.Function.execute( greet2, bar, "Disco", "Bob" ) ).toBe( "Hi Disco Bob!" );
    });

    it( "should decorate behaviour", function() {
        function foo( food, fn ) {
            return fn( "tasty " + food );
        }

        expect( MIQ.Function.decorate( "bacon", foo ) ).toBe( "I love tasty bacon!" );
    });

});

describe( "data", function() {

    it( "should filter a data structure", function() {
        var data, expected, filter, result;

        data = [
            { name: "Bob",      age: 40, gender: "male" },
            { name: "Frank",    age: 33, gender: "male" },
            { name: "Fred",     age: 24, gender: "male" },
            { name: "Jim",      age: 38, gender: "male" },
            { name: "Dave",     age: 55, gender: "male" },
            { name: "Steve",    age: 35, gender: "male" },
            { name: "Liz",      age: 50, gender: "female" },
            { name: "Fee",      age: 42, gender: "female" },
            { name: "Meg",      age: 37, gender: "female" },
            { name: "Jo",       age: 43, gender: "female" },
            { name: "Faye",     age: 28, gender: "female" },
            { name: "Rach",     age: 21, gender: "female" }
        ];

        filter = {
            age: {
                min: 20,
                max: 35
            },
            gender: "male"
        };

        expected = JSON.stringify([
            { name: "Frank",    age: 33, gender: "male" },
            { name: "Fred",     age: 24, gender: "male" },
            { name: "Steve",    age: 35, gender: "male" }
        ]);

        result = MIQ.Data.filter( data, filter );

        expect( result.length ).toBe( 3 );
        expect( JSON.stringify( result ) ).toBe( expected );
    });

});

describe( "modules", function() {

    it( "should create a basic module", function() {
        var module = MIQ.Module.createModule( "Bob", "bacon" );

        expect( typeof module.echo ).toBe( "function" );
        expect( module.person ).toBe( "Bob" );
        expect( module.favourite ).toBe( "bacon" );
        expect( module.echo() ).toBe( "Bob loves bacon!" );

        module.person = "Frank";
        module.favourite = "cheese";

        expect( module.echo() ).toBe( "Frank loves cheese!" );
    });

});

describe( "events", function() {

    var el;

    beforeEach( function() {
        el = document.createElement( "div" );
        document.body.appendChild( el );
    });

    afterEach( function() {
        document.body.removeChild( el );
        el = undefined;
    });

    it( "should delegate an event to a handler on an object", function() {
        var handler, output;

        handler = {
            message: "Clicked",
            click: function() {
                output = this.message;
            }
        };

        MIQ.Event.bindEvent( el, "click", handler );

        el.dispatchEvent( new MouseEvent( "click" ) );

        expect( output ).toBe( "Clicked" );
    });

});

describe( "algorithms", function() {

    it( "should output a Fibonacci sequence", function() {
        expect( MIQ.Algo.fibonacci( 10 ) ).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]);
    });

});

describe( "utilities", function() {

    describe( "platform detection", function() {

        it( "should detect that we're not running on a touch device", function() {
            expect( MIQ.Util.detectTouch() ).toBe( false );
        });

    });

    describe( "addClass", function() {

        var el;

        beforeEach( function() {
            el = document.createElement( "div" );
            el.className = "foo bar";
        });

        afterEach( function() {
            el = undefined;
        });

        it( "should add a class to an element", function() {
            MIQ.Util.addClass( el, "baz" );
            expect( el.className ).toBe( "foo bar baz" );
        });

        it( "should add a string of classes to an element", function() {
            MIQ.Util.addClass( el, "baz zzz" );
            expect( el.className ).toBe( "foo bar baz zzz" );
        });

        it( "should add an array of classes to an element", function() {
            MIQ.Util.addClass( el, [ "baz", "yyy" ]);
            expect( el.className ).toBe( "foo bar baz yyy" );
        });

    });

});