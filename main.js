
var canvas= new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 500;

var block_image_object= "";

function new_img(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_img("rr.jpg");
		console.log("r");
		block_image_object.set({
            top: 1,
            left: 5
        });
		
	}
	if(keyPressed == '71')
	{
		block_x = 300;
		new_img("gr.png");
		console.log("g");
		
	}
	
	if(keyPressed == '89')
	{
		block_x =500;
		new_img("yr.png");
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 820;
		new_img("pr.png");
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 1000;
		new_img("br.png");
		console.log("b");
	}
	
}

