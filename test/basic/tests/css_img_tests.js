describe("css_img_tests.js", function() {
    beforeAll(function() {
        fixture.setBase('test/basic/fixtures')
    });

    beforeEach(function(done) {

        this.result = fixture.load('css_demo.html');

        setTimeout(
            () => {
                //waiting for css to be applied
                done();
            }, 50)


    });

    afterEach(function() {
        fixture.cleanup()
    });

    it('css is loaded', function() {
        const testDiv = $('#alpha');
        const t = testDiv.css('line-height');
        expect(t).toEqual("20px");

    });

    it('finds the div', function() {
        const testDiv = $('#alpha');

        expect(testDiv.text()).toEqual("This is a css test")
    });

    it('image loaded', function() {
        const img = fixture.el.querySelector('img');

        expect(img.naturalWidth).toEqual(1340)
    });



});