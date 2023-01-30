import { useEffect } from 'react'

const CanvasScratch = props => {
    useEffect(() => {
        let canvas = document.getElementById("scratch");
        let context = canvas.getContext("2d");

        const etiquette = document.querySelector(".canvas .canvas-logo-scratch");

        const init = () => {
          context.fillStyle = "#000022";
          if (window.innerWidth < 1201) {
            context.fillRect(0, 0, 350, 350);
          } else {
            context.fillRect(0, 0, 500, 500);
          }
        };

        let mouseX = 0;
        let mouseY = 0;
        let isDragged = false;

        let events = {
          mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup",
          },
          touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend",
          },
        };

        let deviceType = "";

        //Detech touch device
        const isTouchDevice = () => {
          try {
            //We try to create TouchEvent. It would fail for desktops and throw error.
            document.createEvent("TouchEvent");
            deviceType = "touch";
            return true;
          } catch (e) {
            deviceType = "mouse";
            return false;
          }
        };

        //Get left and top of canvas
        let rectLeft = canvas.getBoundingClientRect().left;
        let rectTop = canvas.getBoundingClientRect().top;

        //Exact x and y position of mouse/touch
        const getXY = (e) => {
          mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
          mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
        };
        isTouchDevice();

        //Start Scratch
        canvas.addEventListener(events[deviceType].down, (event) => {
          isDragged = true;
          //Get x and y position
          getXY(event);
          scratch(mouseX, mouseY);
        });

        //mousemove/touchmove
        canvas.addEventListener(events[deviceType].move, (event) => {
          if (!isTouchDevice()) {
            event.preventDefault();
          }
          if (isDragged) {
            getXY(event);
            scratch(mouseX, mouseY);
            etiquette.style.display = "none";
          }
        });
        
        //stop drawing
        canvas.addEventListener(events[deviceType].up, () => {
          isDragged = false;
        });

        //If mouse leaves the square
        canvas.addEventListener("mouseleave", () => {
          isDragged = false;
        });

        const scratch = (x, y) => {
          //destination-out draws new shapes behind the existing canvas content
          context.globalCompositeOperation = "destination-out";
          context.beginPath();
          //arc makes circle - x, y, radius, start angle,end angle
          context.arc(x, y, 50, 0, 10 * Math.PI);
          context.fill();
        };
        window.onload = init();
        
    }, [])

    return <canvas {...props} />
}
export default CanvasScratch