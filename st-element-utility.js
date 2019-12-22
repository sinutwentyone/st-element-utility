(function( $, stLib, stIdentityObject, stBasicData ) {
  var defaultOptions = {
    hideClass: 'st-hidden'
  };
  
  if ( typeof window.stElementOptions !== 'function' ) { 
    window.stElementOptions = function( data, containerObj ) {
      var obj = stBasicData( data );
      
      obj.iORegister('stElementOptions');
      
      obj.getHideClass = function() {
        return defaultOptions.hideClass;
      };
      
      return obj;
    };
  } 
  
})( jQuery, window.stLib, window.stIdentityObject, window.stBasicData );

(function( $, stLib, stIdentityObject, stElemenOptions ) {
  
  if ( typeof window.stElement !== 'function' ) {
    window.stElement = function( data, containerObj ) {
      var obj = stIdentityObject( null, containerObj ),
          options = stElementOptions( data );
      
      obj.iORegister('stElement');
      
      obj._init = function() {
        obj._setup$Element( options.data.element );
        
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
      
      obj.isHidden = function() {
        return obj.hasClass( options.getHideClass() );
      };
      
      obj.hide = function() {
        obj.addClass( options.getHideClass() );
      };
      
      obj.show = function() {
        obj.removeClass( options.getHideClass() );
      };
      
      return obj._init();       
    };
  }
  
})( jQuery, window.stLib, window.stIdentityObject, window.stElementOptions );

(function( $, stLib, stIdentityObject, stBasicData ) {
  var defaultOptions = {
    baseDuration: 100
  };
  
  if ( window.stElementTransitOptions !== 'function' ) {
    window.stElementTransitOptions = function( data ) {
      var obj = stBasicData( data );
      
      obj.iORegister('stElementTransitOptions');
      obj._init = function() {
        return obj;
      };
      
      obj.getBaseDuration = function() {
        return defaultOptions.baseDuration;
      };
      
      return obj._init();
    };
  }  
})( jQuery, window.stLib, window.stIdentityObject, window.stBasicData );

(function( $, stLib, stIdentityObject, stElement ) {
  if ( window.stElementTransit !== 'function' ) {
    window.stElementTransit = function( data, containerObj ) {
      var obj = stElement( data, containerObj );
      
      obj.iORegister('stElementTransit');
      
      obj._init = function() {
        return obj;
      };
      
      return obj._init();
    };   
  }
})( jQuery, window.stLib, window.stIdentityObject, window.stElement );
