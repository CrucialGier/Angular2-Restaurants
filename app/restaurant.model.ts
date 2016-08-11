export class Restaurant {
  public rating: number[] = [];
  public waitTime: number[] = [];
  constructor(public name: string, public location: string, public specialty: string, public price: string) {

  }
}
