export class Text {
 contstructor() {
    this.canvas = document.createElement('canvas')
    this.canvas.style.position = 'absolute' ;
    this.canvas.style.left = '0' ;
    this.canvas.style.top = '0' ;
    document.body.appendChild(this.canvas) ;

    this.ctx = this.canvas.getContext('2d');
    }

    setText(str, density, stagewidth, stageHeight) {
        this.canvas.width = stagewidth;
        this.canvas.height = stageHeight;

        const my Text = str;
        const fontWidth = 700;
        const fontSize = 800;
        const fontName = 'Hind';

        this.ctx.clearRect(0,0,stageWidth, stageHeight);
        this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
        this.ctx.fillStyle =`rgba(0 , 0, 0, 0.3)`;
        this.ctx.textBaseline = `middle`;
        const fontPos = this.ctx.measureText(myText);
        this.ctx.fillText(
            myText,
            (stageWidth - fontPos.width) / 2,
            fontPos.actualBoundingBoxAscent +
            fontPos.actualBoundingBoxDescent +
            ((stageHeight - fontSize) / 2)
        );

        return this.dotPos(density, stageWidth, stageHeight);
    }
    dotPos(density, stageWidth, stageHeight) {
        const imageData = this.ctx.getImageData(
            0, 0,
            stageWidth, stageHeight
        ).data;

        const particles = [];
        let i = 0;
        let width = 0;
        let pixel;

        for (let height = 0; height <stageWidth; width += density){
            pixel = imageData [((width +(height * stageWidth)) * 4) - 1]
            if (pixel != 0 &&
              width > 0 &&
              width < stageWidth &&
              height > 0 &&
              height < stageHeight) {
                  particles.push({
                      x: width,
                      y: height,
                  });
              }
        }

        return particles;
    }
}