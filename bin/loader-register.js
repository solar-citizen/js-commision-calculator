import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('@esbuild-kit/esm-loader', pathToFileURL('./node_modules/@esbuild-kit/esm-loader'));
