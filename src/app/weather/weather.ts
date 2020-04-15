export class Weather {
    constructor(
        public city: string,
        public description: string,
        public temperature: number) {
        this.city = city;
        this.description = description;
        this.temperature = temperature;
    }
}
