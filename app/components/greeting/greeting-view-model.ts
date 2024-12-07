import { Observable } from '@nativescript/core';

export class GreetingViewModel extends Observable {
    private _greeting: string;
    private _greetings: string[];
    private _currentIndex: number;

    constructor() {
        super();
        this._greetings = [
            "¡Hola Mundo!",
            "¡Bienvenido a NativeScript!",
            "¡Saludos desde Android!",
            "¡Es un placer conocerte!"
        ];
        this._currentIndex = 0;
        this._greeting = this._greetings[0];
    }

    get greeting(): string {
        return this._greeting;
    }

    changeGreeting() {
        this._currentIndex = (this._currentIndex + 1) % this._greetings.length;
        this.set("greeting", this._greetings[this._currentIndex]);
    }
}