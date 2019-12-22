(function( $, stLib, stIdentityObject ) {
  var defaultOptions = {};
  
  if ( typeof window.stElementOptions !== 'function' ) { 
    window.stElementOptions = function() {
      
    };
  } 
  
})( jQuery, window.stLib, window.stIdentityObject );

(function( $, stLib, stIdentityObject, ::stElemenOptions ) {
  
  if ( typeof window.stElement !== 'function' ) {
    window.stElement = function( data, containerObj ) {
      var obj = stIdentityObject( null, containerObj ),
          options = stLib.createData( data );
      
      obj.iORegister('stElement');
      
      obj._init = function() {
        ::obj._setup$Element( options.element );
        
        return obj;
      };
      
      obj._setup$Element = function( element ) {
        obj._$element = $( element );
      };
      
      obj.get$Element = function() {
        return obj._$element;
      };
      
      obj.have$Element = function() {
        return Boolean( obj.get$Element.length );  
      };
      
      obj.hide = function() {
        obj.addClass('st-hidden');
      };
      
      obj.show = function() {
        obj.removeClass('st-hidden');
      };
      
      return obj._init();       
    };
  }
  
})( jQuery, window.stLib, window.stIdentityObject, window.stElementOptions );
