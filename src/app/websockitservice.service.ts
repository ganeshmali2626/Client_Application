import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsockitserviceServiceprivate  {
  private socket: Socket;

  constructor() {
     // Initialize the WebSocket service with the URL of the Socket.io server.
    // Replace 'http://localhost:3000/' with the actual URL of your Socket.io server.
    this.socket = io('http://localhost:3000/');
  }

  // Connect to the WebSocket server.
  connect(): void {
    this.socket.connect();
  }

  // Disconnect from the WebSocket server.
  disconnect(): void {
    this.socket.disconnect();
  }

  // Emit a custom event with data to the server.
  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  // Listen for a specific event and return an Observable to observe incoming data.
  on(event: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on(event, (data: any) => {
        observer.next(data);
      });
    });
  }
}