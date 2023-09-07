import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { WebsockitserviceServiceprivate } from '../websockitservice.service';
@Component({
  selector: 'app-canva1',
  templateUrl: './canva1.component.html',
  styleUrls: ['./canva1.component.css']
})
export class Canva1Component implements OnInit {
  // Reference to the canvas element
  private canvas!: HTMLCanvasElement;
  // Canvas rendering context
  private ctx: any;

  constructor(private websocketService: WebsockitserviceServiceprivate) {}

  ngOnInit(): void {
    // Retrieve the canvas element by its ID
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
     // Get the 2D rendering context of the canvas
    this.ctx = this.canvas.getContext('2d');
     // Connect to the WebSocket server
    this.websocketService.connect();
     // Add a mousemove event listener to the canvas
    this.canvas.addEventListener('mousemove', (event) => {
       // Create a data object with the mouse coordinates
      if (event.buttons === 1) {
        const data = {
          x: event.clientX,
          y: event.clientY
        };
         // Call the draw function to draw on the canvas
        this.draw(data);
        // Prepare the data to send to the server
        const dataToSend = data;

    // Emit an event to the server
    this.websocketService.emit('client-action', dataToSend);
        
      }
    });
    // Subscribe to the 'draw' event from the WebSocket service to update the canvas
    this.websocketService.on('draw').subscribe((data) => {
      this.draw(data);
    });
  }
  // Function to draw a circle on the canvas
  draw(data: any): void {
      // Begin a path for drawing
    this.ctx.beginPath();
    // Draw a filled circle at the specified coordinates (data.x, data.y)
    this.ctx.arc(data.x, data.y, 5, 0, 2 * Math.PI);
    // Fill the circle
    this.ctx.fill();
  }
}