describe("fixture_tests.js", function () {


  beforeAll(function () {
    fixture.setBase('test/basic/fixtures')
  });

  beforeEach(function () {
    this.result = fixture.load('fixture1.html');
  });


  afterEach(function () {
    fixture.cleanup()
  });

  it('plays with the html fixture', function () {
    
    
    expect(fixture.el.firstChild.innerHTML).toEqual("Get a job")
  });
  
   it('can use jquery because its included via ', function () {
    
    let z = $('#fixture1');
    expect(z.text()).toEqual("Get a job")
  });
  
  

})
