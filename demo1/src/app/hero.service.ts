import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { of } from 'rxjs/observable/of';

import { Observable } from 'rxjs/Rx';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
