
var cokejs = function(cokejs) {
	cokejs.Draw = function(draws, sX, sY, pX, pY){ 
    if (draws == null) return
        var x = this.x = sX;
        var y = this.y = sY;
        var lX = x;
        var lY = y;
        
        this.advance = function() {
            x += pX;
            if (x > draws[2]) {
                x = draws[2];
                pX *= -1;
            }
            if (x < draws[0]) {
                x = draws[0];
                pX *= -1;
            }
            y += pY;
            if (y > draws[3]) {
                y = draws[3];
                pY *= -1;
            }
            if (y < draws[1]) {
                y = draws[1];
                pY *= -1;
            }
            lX += x - lX
            this.x = lX;
            lY += y - lY
            this.y = lY;
        }
	}

    cokejs.rand = function(a,b){
        if(a == null) a = 0;
        if(b == null) b = 1;
        var rand = a + Math.random()*(b-a);
        return rand;
    }

    cokejs.Bounce = function(bounds, startX, startY, speedX, speedY, damp) {
        if (bounds == null) return
        if (startX == null) startX = (bounds[3] - bounds[0]) / 2;
        if (startY == null) startY = (bounds[4] - bounds[1]) / 2;
        if (speedX == null) speedX = 0;
        if (speedY == null) speedY = 0;
        if (damp == null) damp = .1;

        var x = this.x = startX;
        var y = this.y = startY;

        var lastX = x;
        var lastY = y;

        // [x, y, endX, endY]
        this.advance = function() {
            x += speedX;
            if (x > bounds[2]) {
                x = bounds[2];
                speedX *= -1;
            }
            if (x < bounds[0]) {
                x = bounds[0];
                speedX *= -1;
            }
            y += speedY;
            if (y > bounds[3]) {
                y = bounds[3];
                speedY *= -1;
            }
            if (y < bounds[1]) {
                y = bounds[1];
                speedY *= -1;
            }

            lastX += (x - lastX) * damp;
            this.x = lastX;

            lastY += (y - lastY) * damp;
            this.y = lastY;
        }
    }
	return cokejs;
}(cokejs || {})

