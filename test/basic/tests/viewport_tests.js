function pauseFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, 50);
    });
}


describe("viewport_tests.js", function() {
    beforeAll(function() {
        fixture.setBase('test/basic/fixtures')
    });

    beforeEach(function(done) {

        this.result = fixture.load('viewport.html');

        setTimeout(
            () => {
                //waiting for css to be applied
                done();
            }, 50)


    });

    afterEach(function() {
        viewport.reset();
        fixture.cleanup()
    });

    it('css is loaded', function() {
        const testDiv = $('.box-item');
        const t = testDiv.css('width');
        expect(t).toEqual("500px");

    });

    it('finds the div', function() {
        const testDiv = $('.box-item');

        expect(testDiv.text()).toEqual("get a job")
    });


    it('viewport change causes width change', function(done) {

        viewport.set(300, 300);
        pauseFunction().then(() => {
            const testDiv = $('.box-item');
            const t = testDiv.css('width');
            expect(t).toEqual("200px");
            done();

        })


    });




});
