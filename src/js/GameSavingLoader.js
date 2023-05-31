/* eslint-disable no-console */
import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  static load() {
    return read()
      .then((response) => json(response))
      .then((info) => new GameSaving(JSON.parse(info)));
  }
}
