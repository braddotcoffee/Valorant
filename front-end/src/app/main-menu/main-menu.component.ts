import { Component, OnInit } from '@angular/core';
import { GetGamesResponse, ApiService, Game } from '../services/api.service';
import { RankToIconService } from '../services/rank-to-icon.service';
import { AgentNameToIconService } from '../services/agent-name-to-icon.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  games: GetGamesResponse;

  constructor(private api: ApiService) {
    api.getGames().subscribe((games) => {
      console.log(games);
      this.games = games;
    });
  }

  getColor(game: Game) {
    if (game[1] === 'Loss') {
      return '#ef9a9a';
    } else {
      return '#a5d6a7';
    }
  }

  prettyPrint(game: Game) {
    return this.api.gameToString(game);
  }

  getRankIcon(icon: string) {
    return RankToIconService.GetImagePath(icon);
  }

  getAgentIcon(icon: string) {
    return AgentNameToIconService.GetImagePath(icon);
  }
}
