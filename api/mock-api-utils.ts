import crypto from 'crypto';
import { Symbols } from '../src/const/common-const'

import {
  ACCESS_TOKEN_EXPIRE_IN_SECONDS,
  ALL_LETTERS,
  ALL_NUMBERS,
  REFRESH_TOKEN_LENGTH
} from './mock-api-const';

function getCurrentTimestampInSeconds() {
  return new Date().getTime()/1000;
}

function addSecondsToTimestamp(timestamp: number, seconds: number): number {
  return timestamp + seconds;
}

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomString(length: number) {
  const characters = ALL_NUMBERS + ALL_LETTERS;
  const charactersLength = characters.length;
  let randomString: string = Symbols.Empty;

  for (let i = 0; i < length; i++) {
    randomString = randomString + characters[generateRandomNumber(0, charactersLength - 1)];
  }

  return randomString;
}

export function createJWTTokens(passwordHash: string) {
  const timestamp = getCurrentTimestampInSeconds();

  const tokenHeaderBase64 = btoa(JSON.stringify({'typ': 'JWT', 'alg': 'HS256'}));
  const tokenPayloadBase64 = btoa(JSON.stringify({'exp': addSecondsToTimestamp(timestamp, ACCESS_TOKEN_EXPIRE_IN_SECONDS)}));
  const tokenSignature = crypto.createHmac('sha256', passwordHash)
    .update(`${tokenHeaderBase64}.${tokenPayloadBase64}`)
    .digest('hex');

  const accessToken = `${tokenHeaderBase64}.${tokenPayloadBase64}.${tokenSignature}`;
  const refreshToken = generateRandomString(REFRESH_TOKEN_LENGTH);

  return { accessToken, refreshToken };
}

