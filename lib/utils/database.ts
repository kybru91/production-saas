import * as DB from 'worktop/kv';
import type { Options } from 'worktop/kv';

export function write<T>(key: string, value: T, options?: Options.Write): Promise<boolean> {
	return DB.write<T>(DATABASE, key, value, { toJSON: true, ...options });
}

export function read<T>(key: string): Promise<T|void> {
	return DB.read<T>(DATABASE, key, 'json').then(x => {
		if (x != null) return x;
	});
}

export function remove(key: string): Promise<boolean> {
	return DB.remove(DATABASE, key);
}
