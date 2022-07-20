import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

const SITE_TITLE = 'Усы Сан Саныча';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    if (title) {
      this.title.setTitle(`${title} - ${SITE_TITLE}`);
    } else {
      this.title.setTitle(SITE_TITLE);
    }
  }
}
