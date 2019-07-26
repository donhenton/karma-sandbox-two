//http://stackoverflow.com/questions/2236747/use-of-the-javascript-bind-method



describe("bind_tests.js", function () {
    var myButton = null;
    beforeEach(function () {
        //see bind_sample.js for the definition of button
        myButton = new Button('OK');

    });
    it("bind should work", function ()
    {

        expect(myButton.getContent()).toEqual('OK clicked');
    });
    
    it("use bind to set it to something", function ()
    {
        var boundGetContent = myButton.getContent.bind({"content":"fred"});
        expect(boundGetContent()).toEqual('fred clicked');
    });


});

 