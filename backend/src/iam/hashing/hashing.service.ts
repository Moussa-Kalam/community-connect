import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingService {
  // The `hash` method will be used to hash a string or a buffer.
  abstract hash(data: string | Buffer): Promise<string>;

  // The `compare` method will be used to compare a string or a buffer with a hash.
  abstract compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}
