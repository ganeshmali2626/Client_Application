import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { WebsockitserviceServiceprivate } from '../websockitservice.service';

@Component({
  selector: 'app-canva2',
  templateUrl: './canva2.component.html',
  styleUrls: ['./canva2.component.css']
})
export class Canva2Component implements OnInit {
  // Reference to the canvas element
  private canvas!: HTMLCanvasElement;
  // Canvas rendering context
  private ctx: any;

  constructor(private websocketService: WebsockitserviceServiceprivate) {}

  ngOnInit(): void {
    // Retrieve the canvas element by its ID
    this.canvas = document.getElementById('displayCanvas') as HTMLCanvasElement;
     // Get the 2D rendering context of the canvas
    this.ctx = this.canvas.getContext('2d');
    
     // Subscribe to the 'server-response' event from the WebSocket service
    this.websocketService.on('server-response').subscribe((responseData) => {
      
       // Call the draw function to draw on the canvas
      this.draw(responseData);
    });
  
  }

  //Function to draw a circle on the canvas
  draw(data: any): void {
     // Begin a path for drawing
    this.ctx.beginPath();
     // Draw a filled circle at the specified coordinates (data.x, data.y)
    this.ctx.arc(data.x, data.y, 5, 0, 2 * Math.PI);
    // Fill the circle
    this.ctx.fill();
  }
}
