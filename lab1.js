
var gl;
var points;
var index=0;
window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }



    //
 var vertices = [
        vec2( -0.5, -0.5 ),
        vec2(  -0.5,  0.5 ),
        vec2(  0.5, 0.5 ),
        vec2( 0.5, -0.5)
    ];

  
 var vertices1 = new Float32Array([-1, -1, 0, 1, 1, -1]);

     
var vertices2 = [
        vec2( -1, -1 ),
        vec2(  -1,  1 ),
        vec2(  1, 1),
        vec2( 1, -1)
    ];

  
//  Configure WebGL


    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0.0, 0.0, 1.0, 1.0 );
    
    //  Load shaders and initialize attribute buffers
    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // Load the data into the GPU


var bufferId = gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

  

   
 // Associate our shader variables with our data buffer
 var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   


render();

canvas.onclick=function() 
{
index=index+1;
index=index % 3;
if(index==0)
{
 var bufferId = gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

  
}
else
if(index==1)
{
var bufferId1 = gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId1 );
  
  gl.bufferData( gl.ARRAY_BUFFER,flatten(vertices1), gl.STATIC_DRAW );



}
else 
if(index==2)
{
 var bufferId2= gl.createBuffer();
   
 gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
  
  gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices2), gl.STATIC_DRAW );

  
}
 var vPosition = gl.getAttribLocation( program, "vPosition" );
  
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
 
   gl.enableVertexAttribArray( vPosition );

   
render();
}


};


function render() 
{
    gl.clear( gl.COLOR_BUFFER_BIT );

if (index==0)
{

gl.drawArrays( gl.TRIANGLE_FAN, 0, 4);

}
if(index==1)
{

gl.drawArrays( gl.TRIANGLES, 0, 3 );

}
if(index==2)
{

gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
}
}
