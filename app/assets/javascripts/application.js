require(['jquery', 'something_else'], function($, hello) {
  $(function() {
    console.log("HELLO WORLD");
    hello.say();
  });
});
